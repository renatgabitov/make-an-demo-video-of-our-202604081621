import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Icon} from '@iconify/react';

const cellBorder = '1px solid rgba(236, 222, 189, 0.45)';

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

export const ScreenshotRecreation: React.FC = () => {
	const gridLeft = 350;
	const gridTop = 80;
	const colWidths = [140, 210, 210, 265, 300, 140, 140, 140];
	const rowHeights = [142, 140, 142, 128];

	const x = [gridLeft];
	for (let i = 0; i < colWidths.length - 1; i++) x.push(x[i] + colWidths[i]);
	const y = [gridTop];
	for (let i = 0; i < rowHeights.length - 1; i++) y.push(y[i] + rowHeights[i]);

	return (
		<AbsoluteFill
			style={{
				background: '#fffefb',
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
						'radial-gradient(circle at center, rgba(255,255,255,0) 50%, rgba(246, 242, 233, 0.9) 82%, rgba(245,241,234,1) 100%)',
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

			<Cell left={x[0]} top={y[0]} width={colWidths[0]} height={rowHeights[0]} />
			<Cell left={x[1]} top={y[0]} width={colWidths[1]} height={rowHeights[0]}>
				<IconWrap size={72} opacity={0.55}>
					<Icon icon="vscode-icons:file-type-word" width={60} height={60} />
				</IconWrap>
			</Cell>
			<Cell left={x[2]} top={y[0]} width={colWidths[2]} height={rowHeights[0]}>
				<IconWrap size={72} opacity={0.5}>
					<Icon icon="vscode-icons:file-type-excel2" width={58} height={58} />
				</IconWrap>
			</Cell>
			<Cell left={x[3]} top={y[0]} width={colWidths[3]} height={rowHeights[0]} />
			<Cell left={x[4]} top={y[0]} width={colWidths[4]} height={rowHeights[0]}>
				<div style={{display: 'flex', gap: 80, alignItems: 'center'}}>
					<IconWrap size={60} opacity={0.45}>
						<Icon icon="logos:slack-icon" width={52} height={52} />
					</IconWrap>
					<IconWrap size={60} opacity={0.55}>
						<Icon icon="logos:google-icon" width={54} height={54} />
					</IconWrap>
				</div>
			</Cell>
			<Cell left={x[5]} top={y[0]} width={colWidths[5]} height={rowHeights[0]} />
			<Cell left={x[6]} top={y[0]} width={colWidths[6]} height={rowHeights[0]} />
			<Cell left={x[7]} top={y[0]} width={colWidths[7]} height={rowHeights[0]} />

			<Cell left={x[0]} top={y[1]} width={colWidths[0]} height={rowHeights[1]}>
				<IconWrap size={64} opacity={0.35}>
					<Icon icon="logos:microsoft-outlook" width={54} height={54} />
				</IconWrap>
			</Cell>
			<Cell left={x[1]} top={y[1]} width={colWidths[1]} height={rowHeights[1]}>
				<div style={{display: 'flex', gap: 80, alignItems: 'center'}}>
					<IconWrap size={58} opacity={0.33}>
						<Icon icon="logos:linkedin-icon" width={50} height={50} />
					</IconWrap>
					<IconWrap size={72} opacity={0.42}>
						<Icon icon="logos:telegram" width={66} height={66} />
					</IconWrap>
				</div>
			</Cell>
			<Cell left={x[2]} top={y[1]} width={colWidths[2]} height={rowHeights[1]} />
			<Cell left={x[3]} top={y[1]} width={colWidths[3]} height={rowHeights[1]}>
				<div style={{opacity: 0.95}}>
					<FaceLogo />
				</div>
			</Cell>
			<Cell left={x[4]} top={y[1]} width={colWidths[4]} height={rowHeights[1]}>
				<div style={{display: 'flex', gap: 72, alignItems: 'center'}}>
					<IconWrap size={60} opacity={0.42}>
						<Icon icon="simple-icons:calendly" width={48} height={48} color="#77cddd" />
					</IconWrap>
					<IconWrap size={60} opacity={0.5}>
						<Icon icon="simple-icons:airtable" width={50} height={50} color="#f29b3d" />
					</IconWrap>
				</div>
			</Cell>
			<Cell left={x[5]} top={y[1]} width={colWidths[5]} height={rowHeights[1]}>
				<IconWrap size={54} opacity={0.42}>
					<Icon icon="logos:clickup-icon" width={42} height={42} />
				</IconWrap>
			</Cell>
			<Cell left={x[6]} top={y[1]} width={colWidths[6]} height={rowHeights[1]} />
			<Cell left={x[7]} top={y[1]} width={colWidths[7]} height={rowHeights[1]} />

			<Cell left={x[0]} top={y[2]} width={colWidths[0]} height={rowHeights[2]}>
				<IconWrap size={64} opacity={0.28}>
					<Icon icon="simple-icons:notion" width={50} height={50} color="#3b3b3b" />
				</IconWrap>
			</Cell>
			<Cell left={x[1]} top={y[2]} width={colWidths[1]} height={rowHeights[2]}>
				<div style={{display: 'flex', gap: 92, alignItems: 'center'}}>
					<IconWrap size={62} opacity={0.3}>
						<Icon icon="mdi:github" width={48} height={48} color="#3d3d3d" />
					</IconWrap>
					<IconWrap size={58} opacity={0.45}>
						<Icon icon="logos:discord-icon" width={48} height={48} />
					</IconWrap>
				</div>
			</Cell>
			<Cell left={x[2]} top={y[2]} width={colWidths[2]} height={rowHeights[2]} />
			<Cell left={x[3]} top={y[2]} width={colWidths[3]} height={rowHeights[2]} />
			<Cell left={x[4]} top={y[2]} width={colWidths[4]} height={rowHeights[2]}>
				<div style={{display: 'flex', gap: 78, alignItems: 'center'}}>
					<IconWrap size={60} opacity={0.55}>
						<Icon icon="logos:youtube-icon" width={58} height={58} />
					</IconWrap>
					<IconWrap size={58} opacity={0.42}>
						<Icon icon="logos:trello" width={52} height={52} />
					</IconWrap>
				</div>
			</Cell>
			<Cell left={x[5]} top={y[2]} width={colWidths[5]} height={rowHeights[2]}>
				<IconWrap size={58} opacity={0.3}>
					<Icon icon="vscode-icons:file-type-excel" width={48} height={48} />
				</IconWrap>
			</Cell>
			<Cell left={x[6]} top={y[2]} width={colWidths[6]} height={rowHeights[2]} />
			<Cell left={x[7]} top={y[2]} width={colWidths[7]} height={rowHeights[2]} />

			<Cell left={x[0]} top={y[3]} width={colWidths[0]} height={rowHeights[3]} />
			<Cell left={x[1]} top={y[3]} width={colWidths[1]} height={rowHeights[3]}>
				<IconWrap size={60} opacity={0.52}>
					<Icon icon="logos:monday-icon" width={50} height={50} />
				</IconWrap>
			</Cell>
			<Cell left={x[2]} top={y[3]} width={colWidths[2]} height={rowHeights[3]}>
				<IconWrap size={76} opacity={0.35}>
					<Icon icon="logos:zoho" width={64} height={32} />
				</IconWrap>
			</Cell>
			<Cell left={x[3]} top={y[3]} width={colWidths[3]} height={rowHeights[3]}>
				<IconWrap size={56} opacity={0.28}>
					<Icon icon="logos:salesforce" width={52} height={40} />
				</IconWrap>
			</Cell>
			<Cell left={x[4]} top={y[3]} width={colWidths[4]} height={rowHeights[3]}>
				<IconWrap size={88} opacity={0.45}>
					<Icon icon="logos:hubspot" width={70} height={70} />
				</IconWrap>
			</Cell>
			<Cell left={x[5]} top={y[3]} width={colWidths[5]} height={rowHeights[3]} />
			<Cell left={x[6]} top={y[3]} width={colWidths[6]} height={rowHeights[3]} />
			<Cell left={x[7]} top={y[3]} width={colWidths[7]} height={rowHeights[3]} />
		</AbsoluteFill>
	);
};