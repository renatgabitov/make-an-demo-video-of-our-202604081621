import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Icon} from '@iconify/react';

/* TRANSPILED_SHOWCASE_SCENE_2 */
/* COMPONENT_REFERENCE_ID:75a53590-e787-420a-b101-e9a9034608c2 */

const cellBorder = '1px solid rgba(236, 222, 189, 0.45)';

const colWidths = [140, 210, 210, 265, 300, 140, 140, 140];
const rowHeights = [142, 140, 142, 128];
const gridLeft = 350;
const gridTop = 80;

const buildOffsets = (sizes: number[], start: number) => {
	const out = [start];
	for (let i = 0; i < sizes.length - 1; i++) out.push(out[i] + sizes[i]);
	return out;
};

const x = buildOffsets(colWidths, gridLeft);
const y = buildOffsets(rowHeights, gridTop);

const Cell: React.FC<{
	left: number;
	top: number;
	width: number;
	height: number;
	children?: React.ReactNode;
}> = ({left, top, width, height, children}) => {
	return (
		<div
			style={{
				position: 'absolute',
				left,
				top,
				width,
				height,
				borderRight: cellBorder,
				borderBottom: cellBorder,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				boxSizing: 'border-box',
				background:
					'linear-gradient(120deg, rgba(255,255,255,0) 32%, rgba(245, 236, 213, 0.18) 32.5%, rgba(255,255,255,0) 33.2%)',
				backgroundSize: '18px 18px',
			}}
		>
			{children}
		</div>
	);
};

const IconWrap: React.FC<{
	children: React.ReactNode;
	size?: number;
	opacity?: number;
}> = ({children, size = 60, opacity = 0.9}) => (
	<div
		style={{
			width: size,
			height: size,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			opacity,
		}}
	>
		{children}
	</div>
);

const FaceLogo: React.FC = () => {
	return (
		<div
			style={{
				width: 160,
				height: 160,
				borderRadius: '50%',
				background: 'linear-gradient(180deg, #fffaf0 0%, #fff0cd 100%)',
				boxShadow: '0 2px 6px rgba(0,0,0,0.14), inset 0 0 0 2px rgba(30,30,30,0.08)',
				position: 'relative',
			}}
		>
			<div
				style={{
					position: 'absolute',
					left: 30,
					top: 48,
					width: 34,
					height: 12,
					borderTop: '8px solid #133b54',
					borderLeft: '8px solid #133b54',
					borderRadius: 8,
					transform: 'rotate(45deg)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					right: 30,
					top: 52,
					width: 28,
					height: 10,
					borderTop: '8px solid #133b54',
					borderRight: '8px solid #133b54',
					borderRadius: 8,
					transform: 'rotate(-35deg)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: 72,
					top: 40,
					width: 12,
					height: 68,
					background: '#133b54',
					borderRadius: 8,
					transform: 'rotate(20deg)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: 66,
					top: 94,
					width: 28,
					height: 14,
					borderBottom: '8px solid #133b54',
					borderRadius: '0 0 20px 20px',
					transform: 'rotate(12deg)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: 60,
					bottom: 28,
					width: 44,
					height: 22,
					borderBottom: '8px solid #133b54',
					borderRadius: '0 0 40px 40px',
					transform: 'rotate(8deg)',
				}}
			/>
		</div>
	);
};

const renderCellContent = (row: number, col: number) => {
	if (row === 0 && col === 1) {
		return (
			<IconWrap size={72} opacity={0.55}>
				<Icon icon='vscode-icons:file-type-word' width={60} height={60} />
			</IconWrap>
		);
	}
	if (row === 0 && col === 2) {
		return (
			<IconWrap size={72} opacity={0.5}>
				<Icon icon='vscode-icons:file-type-excel2' width={58} height={58} />
			</IconWrap>
		);
	}
	if (row === 0 && col === 4) {
		return (
			<div style={{display: 'flex', gap: 80, alignItems: 'center'}}>
				<IconWrap size={60} opacity={0.45}>
					<Icon icon='logos:slack-icon' width={52} height={52} />
				</IconWrap>
				<IconWrap size={60} opacity={0.55}>
					<Icon icon='logos:google-icon' width={54} height={54} />
				</IconWrap>
			</div>
		);
	}
	if (row === 1 && col === 0) {
		return (
			<IconWrap size={64} opacity={0.35}>
				<Icon icon='logos:microsoft-outlook' width={54} height={54} />
			</IconWrap>
		);
	}
	if (row === 1 && col === 1) {
		return (
			<div style={{display: 'flex', gap: 80, alignItems: 'center'}}>
				<IconWrap size={58} opacity={0.33}>
					<Icon icon='logos:linkedin-icon' width={50} height={50} />
				</IconWrap>
				<IconWrap size={72} opacity={0.42}>
					<Icon icon='logos:telegram' width={66} height={66} />
				</IconWrap>
			</div>
		);
	}
	if (row === 1 && col === 3) {
		return (
			<div style={{opacity: 0.95}}>
				<FaceLogo />
			</div>
		);
	}
	if (row === 1 && col === 4) {
		return (
			<div style={{display: 'flex', gap: 72, alignItems: 'center'}}>
				<IconWrap size={60} opacity={0.42}>
					<Icon icon='simple-icons:calendly' width={48} height={48} color='#77cddd' />
				</IconWrap>
				<IconWrap size={60} opacity={0.5}>
					<Icon icon='simple-icons:airtable' width={50} height={50} color='#f29b3d' />
				</IconWrap>
			</div>
		);
	}
	if (row === 1 && col === 5) {
		return (
			<IconWrap size={54} opacity={0.42}>
				<Icon icon='logos:clickup-icon' width={42} height={42} />
			</IconWrap>
		);
	}
	if (row === 2 && col === 0) {
		return (
			<IconWrap size={64} opacity={0.28}>
				<Icon icon='simple-icons:notion' width={50} height={50} color='#3b3b3b' />
			</IconWrap>
		);
	}
	if (row === 2 && col === 1) {
		return (
			<div style={{display: 'flex', gap: 92, alignItems: 'center'}}>
				<IconWrap size={62} opacity={0.3}>
					<Icon icon='mdi:github' width={48} height={48} color='#3d3d3d' />
				</IconWrap>
				<IconWrap size={58} opacity={0.45}>
					<Icon icon='logos:discord-icon' width={48} height={48} />
				</IconWrap>
			</div>
		);
	}
	if (row === 2 && col === 4) {
		return (
			<div style={{display: 'flex', gap: 78, alignItems: 'center'}}>
				<IconWrap size={60} opacity={0.55}>
					<Icon icon='logos:youtube-icon' width={58} height={58} />
				</IconWrap>
				<IconWrap size={58} opacity={0.42}>
					<Icon icon='logos:trello' width={52} height={52} />
				</IconWrap>
			</div>
		);
	}
	if (row === 2 && col === 5) {
		return (
			<IconWrap size={58} opacity={0.3}>
				<Icon icon='vscode-icons:file-type-excel' width={48} height={48} />
			</IconWrap>
		);
	}
	if (row === 3 && col === 1) {
		return (
			<IconWrap size={60} opacity={0.52}>
				<Icon icon='logos:monday-icon' width={50} height={50} />
			</IconWrap>
		);
	}
	if (row === 3 && col === 2) {
		return (
			<IconWrap size={76} opacity={0.35}>
				<Icon icon='logos:zoho' width={64} height={32} />
			</IconWrap>
		);
	}
	if (row === 3 && col === 3) {
		return (
			<IconWrap size={56} opacity={0.28}>
				<Icon icon='logos:salesforce' width={52} height={40} />
			</IconWrap>
		);
	}
	if (row === 3 && col === 4) {
		return (
			<IconWrap size={88} opacity={0.45}>
				<Icon icon='logos:hubspot' width={70} height={70} />
			</IconWrap>
		);
	}
	return null;
};

const ScreenshotRecreation: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				background: 'transparent',
				fontFamily: 'Arial, Helvetica, sans-serif',
				color: '#222',
				overflow: 'hidden',
			}}
		>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'radial-gradient(circle at center, rgba(255,255,255,0.62) 50%, rgba(246, 242, 233, 0.72) 82%, rgba(245,241,234,0.96) 100%)',
				}}
			/>

			<div
				style={{
					position: 'absolute',
					left: gridLeft,
					top: gridTop,
					width: colWidths.reduce((a, b) => a + b, 0),
					height: rowHeights.reduce((a, b) => a + b, 0),
					borderLeft: cellBorder,
					borderTop: cellBorder,
					boxSizing: 'border-box',
				}}
			/>

			{rowHeights.map((height, row) =>
				colWidths.map((width, col) => (
					<Cell key={`${row}-${col}`} left={x[col]} top={y[row]} width={width} height={height}>
						{renderCellContent(row, col)}
					</Cell>
				)),
			)}
		</AbsoluteFill>
	);
};

export const Scene02TranspiledWorkflowShowcase: React.FC = () => {
	const frame = useCurrentFrame();

	const intro = interpolate(frame, [0, 12], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const outro = interpolate(frame, [78, 89], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity = intro * outro;
	const blur = interpolate(frame, [0, 12, 78, 89], [18, 0, 0, 18], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const tx = interpolate(frame, [0, 45, 89], [-42, 10, 34], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const ty = interpolate(frame, [0, 45, 89], [24, -6, 12], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const rz = interpolate(frame, [0, 45, 89], [-1.6, 0.1, 1.1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const rx = interpolate(frame, [0, 45, 89], [1.2, 0.2, -0.8], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const ry = interpolate(frame, [0, 45, 89], [-2.6, 0.4, 2], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const scale = interpolate(frame, [0, 89], [0.91, 0.95], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const lightSweepX = interpolate(frame, [0, 89], [-220, 220], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const lightSweepY = interpolate(frame, [0, 89], [-30, 20], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				background:
					'linear-gradient(180deg, #fbf8f2 0%, #f7f3eb 48%, #f4efe7 100%)',
				overflow: 'hidden',
			}}
		>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'radial-gradient(circle at 50% 44%, rgba(255,255,255,0.92) 0%, rgba(255,251,245,0.65) 26%, rgba(248,243,235,0) 68%)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: '50%',
					top: '55%',
					width: 1700,
					height: 460,
					transform: 'translate(-50%, -50%)',
					background:
						'radial-gradient(ellipse at center, rgba(210,184,130,0.24) 0%, rgba(210,184,130,0.12) 36%, rgba(210,184,130,0) 72%)',
					filter: 'blur(8px)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'linear-gradient(90deg, rgba(247,242,234,1) 0%, rgba(247,242,234,0) 16%, rgba(247,242,234,0) 84%, rgba(247,242,234,1) 100%)',
				}}
			/>

			<div
				style={{
					position: 'absolute',
					inset: 0,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					perspective: 2200,
				}}
			>
				<div
					style={{
						position: 'relative',
						width: 2048,
						height: 768,
						opacity,
						filter: `blur(${blur}px)`,
						transformOrigin: '50% 50%',
						transform: `translateX(${tx}px) translateY(${ty}px) scale(${scale}) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`,
					}}
				>
					<div
						style={{
							position: 'absolute',
							left: 120,
							right: 120,
							top: 190,
							bottom: 120,
							background:
								'radial-gradient(ellipse at center, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 30%, rgba(0,0,0,0) 70%)',
							filter: 'blur(8px)',
							transform: 'translateY(70px) scale(0.96)',
						}}
					/>
					<div
						style={{
							position: 'absolute',
							inset: 0,
							opacity: 0.18,
							filter: 'blur(8px)',
							transform: 'scale(1.03) translateY(10px)',
						}}
					>
						<ScreenshotRecreation />
					</div>
					<div style={{position: 'absolute', inset: 0}}>
						<ScreenshotRecreation />
					</div>
					<div
						style={{
							position: 'absolute',
							inset: 0,
							background:
								'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 28%, rgba(255,255,255,0) 72%, rgba(255,248,236,0.1) 100%)',
							pointerEvents: 'none',
						}}
					/>
					<div
						style={{
							position: 'absolute',
							left: lightSweepX,
							top: lightSweepY,
							width: 780,
							height: 780,
							background:
								'radial-gradient(circle, rgba(255,255,255,0.28) 0%, rgba(255,252,244,0.15) 24%, rgba(255,255,255,0) 66%)',
							filter: 'blur(8px)',
							pointerEvents: 'none',
						}}
					/>
				</div>
			</div>

			<div
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'radial-gradient(circle at center, rgba(255,255,255,0) 52%, rgba(246,241,233,0.38) 80%, rgba(243,237,229,0.78) 100%)',
				}}
			/>
		</AbsoluteFill>
	);
};