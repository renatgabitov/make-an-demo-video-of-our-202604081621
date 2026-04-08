import React from 'react';
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const lineSpring = (frame: number, fps: number, delay: number) =>
  spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 16,
      stiffness: 120,
      mass: 0.7,
    },
  });

const Line: React.FC<{
  text: string;
  delay: number;
  frame: number;
  fps: number;
  fadeIn: number;
  fadeOut: number;
  exitBlur: number;
  fontSize: number;
  glow: number;
}> = ({text, delay, frame, fps, fadeIn, fadeOut, exitBlur, fontSize, glow}) => {
  const p = lineSpring(frame, fps, delay);
  const opacity = interpolate(p, [0, 1], [0, 1]) * fadeIn * fadeOut;
  const translateY = interpolate(p, [0, 1], [44, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scale = interpolate(p, [0, 1], [0.94, 1.015], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const introBlur = interpolate(p, [0, 1], [22, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const letterSpacing = interpolate(p, [0, 1], [1.5, -1.2], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        fontFamily: 'Inter, SF Pro Display, Arial, sans-serif',
        fontWeight: 900,
        fontSize,
        lineHeight: 0.92,
        letterSpacing,
        color: '#16110b',
        textAlign: 'center',
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        filter: `blur(${introBlur + exitBlur}px)`,
        textShadow: `0 0 ${18 + glow * 14}px rgba(255, 218, 160, 0.22), 0 10px 30px rgba(58, 32, 10, 0.08)`,
        marginBottom: fontSize < 120 ? 8 : 14,
      }}
    >
      {text}
    </div>
  );
};

export const Scene01TitleReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const fadeOut = interpolate(frame, [64, 71], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.cubic),
  });

  const sceneScale = interpolate(frame, [0, durationInFrames - 1], [1.045, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  const exitBlur = interpolate(frame, [62, 71], [0, 14], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.cubic),
  });

  const glow = 0.5 + Math.sin(frame / 10) * 0.5;
  const textureDrift = interpolate(frame, [0, durationInFrames - 1], [0, -28], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const lightScale = interpolate(frame, [0, durationInFrames - 1], [1, 1.08], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #f7f3ed 0%, #f5efe6 44%, #efe7dc 100%)',
        overflow: 'hidden',
      }}
    >
      <AbsoluteFill
        style={{
          transform: `scale(${sceneScale})`,
        }}
      >
        <AbsoluteFill
          style={{
            background: 'radial-gradient(circle at 50% 42%, rgba(255,231,196,0.92) 0%, rgba(255,239,215,0.58) 20%, rgba(255,244,229,0.16) 42%, rgba(255,244,229,0) 65%)',
            transform: `scale(${lightScale})`,
            opacity: fadeIn * fadeOut,
          }}
        />

        <AbsoluteFill
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(118,77,32,0.10) 0%, rgba(118,77,32,0.05) 28%, rgba(118,77,32,0) 58%)',
            filter: 'blur(8px)',
            opacity: 0.45 * fadeIn * fadeOut,
          }}
        />

        <AbsoluteFill
          style={{
            transform: `translateX(${textureDrift}px)`,
            opacity: 0.18 * fadeIn * fadeOut,
            backgroundImage: 'repeating-linear-gradient(125deg, rgba(203,169,119,0.18) 0px, rgba(203,169,119,0.18) 2px, transparent 2px, transparent 12px)',
            maskImage: 'radial-gradient(circle at 50% 45%, black 0%, rgba(0,0,0,0.72) 38%, transparent 72%)',
          }}
        />

        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: '120px 120px 108px 120px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: 1500,
              opacity: fadeIn * fadeOut,
            }}
          >
            <Line
              text="Introducing"
              delay={0}
              frame={frame}
              fps={fps}
              fadeIn={fadeIn}
              fadeOut={fadeOut}
              exitBlur={exitBlur}
              fontSize={118}
              glow={glow}
            />
            <Line
              text="The AI Workflow"
              delay={7}
              frame={frame}
              fps={fps}
              fadeIn={fadeIn}
              fadeOut={fadeOut}
              exitBlur={exitBlur}
              fontSize={136}
              glow={glow}
            />
            <Line
              text="Builder"
              delay={14}
              frame={frame}
              fps={fps}
              fadeIn={fadeIn}
              fadeOut={fadeOut}
              exitBlur={exitBlur}
              fontSize={152}
              glow={glow}
            />
          </div>
        </AbsoluteFill>

        <AbsoluteFill
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 16%, rgba(0,0,0,0) 84%, rgba(84,50,18,0.08) 100%)',
            opacity: fadeIn * fadeOut,
          }}
        />

        <AbsoluteFill
          style={{
            boxShadow: 'inset 0 0 180px rgba(120, 80, 32, 0.11)',
            opacity: fadeIn * fadeOut,
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};