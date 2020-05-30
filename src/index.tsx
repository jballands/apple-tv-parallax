//
//	AppleTVIcon.tsx
//
//	© 2020 Jonathan Ballands
//

import React, { useEffect, useRef, useState, ReactElement } from 'react';
import Measure, { ContentRect } from 'react-measure';
import { Motion, spring, PlainStyle } from 'react-motion';
import styled from 'styled-components';
import { scaleLinear } from 'd3-scale';

interface RootProps {
	readonly isOver: boolean;
}

const Root = styled.div<RootProps>`
	width: 320px;
	height: 190px;
	position: relative;
	z-index: ${props => (props.isOver ? 10 : 0)};
	touch-action: manipulation;
`;

interface DropShadowProps {
	readonly length: number;
	readonly spread: number;
	readonly opacity: number;
}

const DropShadow = styled.div.attrs(
	({ length, spread, opacity }: DropShadowProps) => ({
		style: {
			boxShadow: `0px ${length}px ${spread}px 0px rgba(0,0,0, ${opacity})`,
			background: `rgba(0,0,0, ${opacity})`,
		},
	})
)<DropShadowProps>`
	position: absolute;
	top: 15px;
	left: 15px;
	right: 15px;
	bottom: 15px;
`;

interface IconContainerProps {
	readonly rx: number;
	readonly ry: number;
	readonly scale: number;
}

const IconContainer = styled.div.attrs(
	({ rx, ry, scale }: IconContainerProps) => ({
		style: {
			transform: `rotateX(${rx}deg) rotateY(${ry}deg) scale3d(${scale}, ${scale}, ${scale})`,
		},
	})
)<IconContainerProps>`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 5px;
	transform-style: preserve-3d;
`;

interface ShineProps {
	readonly sx: number;
	readonly sy: number;
	readonly sb: number;
}

const Shine = styled.div.attrs(({ sx, sy, sb }: ShineProps) => ({
	style: {
		background: `radial-gradient(
			circle at ${sx}% ${sy}%,
			rgba(255, 255, 255, ${sb}),
			transparent
		)`,
	},
}))<ShineProps>`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 5px;
`;

interface ShadeProps {
	readonly hx: number;
	readonly hy: number;
	readonly hb: number;
}

const Shade = styled.div.attrs(({ hx, hy, hb }: ShadeProps) => ({
	style: {
		background: `radial-gradient(
			circle at ${hx}% ${hy}%,
			rgba(0, 0, 0, ${hb}),
			transparent 135%
		)`,
	},
}))<ShadeProps>`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 5px;
`;

interface AppleTVIconProps {
	layers: ReactElement[];
	shadowOpacity?: number;
	rotationAngleDegrees?: number;
	parallaxMultiplier?: number;
	hideShadow?: boolean;
	dropShadowSpread?: number;
	dropShadowDepth?: number;
	onClick?: () => void;
	[_: string]: any;
}

export default function ({
	layers,
	onClick,
	shadowOpacity = 0.4,
	rotationAngleDegrees = 15,
	hideShadow = false,
	parallaxMultiplier = 0.03,
	dropShadowSpread = 45,
	dropShadowDepth = 45,
	...otherProps
}: AppleTVIconProps) {
	const rootRef = useRef<HTMLDivElement>(null);

	const [state, setState] = useState({
		isOver: false,
		isSelecting: false,
		dx: 0,
		dy: 0,
		rx: 0,
		ry: 0,
		sx: 0,
		sy: 0,
		sb: 0,
		hx: 0,
		hy: 0,
		hb: 0,
		width: 0,
		height: 0,
		preventScroll: false,
	});

	useEffect(() => {
		const preventScroll = (e: TouchEvent) => {
			if (state.preventScroll) {
				e.preventDefault();
			}
		};

		document.addEventListener('touchmove', preventScroll, {
			passive: false,
		});

		return () => document.removeEventListener('touchmove', preventScroll);
	}, []);

	const getCalculations = ({
		pageX,
		pageY,
	}: React.MouseEvent | React.Touch) => {
		const { width, height } = state;

		const offsets = rootRef.current?.getBoundingClientRect();

		// https://stackoverflow.com/questions/11193453/find-the-vertical-position-of-scrollbar-without-jquery/11193504
		const supportPageOffset = window.pageXOffset !== undefined;
		const isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
		var scrollLeft = supportPageOffset
			? window.pageXOffset
			: isCSS1Compat
			? document.documentElement.scrollLeft
			: document.body.scrollLeft;
		var scrollTop = supportPageOffset
			? window.pageYOffset
			: isCSS1Compat
			? document.documentElement.scrollTop
			: document.body.scrollTop;

		const raw = {
			x: pageX - (offsets?.left ?? 0) - scrollLeft,
			y: pageY - (offsets?.top ?? 0) - scrollTop,
		};
		const center = {
			x: width / 2,
			y: height / 2,
		};

		const dx = raw.x - center.x;
		const dy = raw.y - center.y;

		// These values calculate the rotation angle of the icon
		const rotateScaleX = scaleLinear()
			.domain([0, height])
			.range([-rotationAngleDegrees, rotationAngleDegrees])
			.clamp(true);
		const rotateScaleY = scaleLinear()
			.domain([0, width])
			.range([rotationAngleDegrees, -rotationAngleDegrees])
			.clamp(true);

		const shineScaleX = scaleLinear()
			.domain([0, width])
			.range([0, 100])
			.clamp(true);
		const shineScaleY = scaleLinear()
			.domain([0, height / 1.5, height])
			.range([5, 25, 100])
			.clamp(true);
		const shineScaleBrightness = scaleLinear()
			.domain([height, 0])
			.range([0, 0.6])
			.clamp(true);

		const shadowScaleX = scaleLinear()
			.domain([0, width])
			.range([0, 100])
			.clamp(true);
		const shadowScaleY = scaleLinear()
			.domain([0, height / 1.5, height])
			.range([0, 100, 100])
			.clamp(true);
		const shadowScaleDarkness = scaleLinear()
			.domain([height / 1.5, height])
			.range([0, 0.35])
			.clamp(true);

		return {
			dx,
			dy,
			rx: rotateScaleX(raw.y),
			ry: rotateScaleY(raw.x),
			sx: shineScaleX(raw.x),
			sy: shineScaleY(raw.y),
			sb: shineScaleBrightness(raw.y),
			hx: shadowScaleX(raw.x),
			hy: shadowScaleY(raw.y),
			hb: shadowScaleDarkness(raw.y),
		};
	};

	const onMeasure = ({ bounds }: ContentRect) => {
		const width = bounds?.width ?? 0;
		const height = bounds?.height ?? 0;

		setState({
			...state,
			width,
			height,
		});
	};

	const onEnter = (e: React.MouseEvent | React.Touch) => {
		const calcs = getCalculations(e);

		setState({
			...state,
			isOver: true,
			preventScroll: true,
			...calcs,
		});
	};

	const onMove = (e: React.MouseEvent | React.Touch) => {
		const calcs = getCalculations(e);

		setState({
			...state,
			...calcs,
		});
	};

	const onLeave = () => {
		setState({
			...state,
			isSelecting: false,
			isOver: false,
			preventScroll: false,
		});
	};

	const onSelect = () => {
		onClick && onClick();
	};

	const onMouseEnter = (e: React.MouseEvent) => {
		onEnter(e);
	};

	const onMouseMove = (e: React.MouseEvent) => {
		onMove(e);
	};

	const onMouseLeave = () => {
		onLeave();
	};

	const onMouseDown = () => {
		setState({
			...state,
			isSelecting: true,
		});
	};

	const onMouseUp = () => {
		onSelect();
		setState({
			...state,
			isSelecting: false,
		});
	};

	const onTouchStart = (e: React.TouchEvent) => {
		switch (e.touches.length) {
			case 1:
				return onEnter(e.touches[0]);
			case 2:
				return setState({
					...state,
					isSelecting: true,
				});
			default:
				return onEnter(e.touches[0]);
		}
	};

	const onTouchMove = (e: React.TouchEvent) => {
		onMove(e.touches[0]);
	};

	const onTouchEnd = (e: React.TouchEvent) => {
		const { isSelecting } = state;

		if (isSelecting) {
			onSelect();
		}

		switch (e.touches.length) {
			case 1:
				return onLeave();
			case 2:
				return setState({
					...state,
					isSelecting: false,
				});
			default:
				return onLeave();
		}
	};

	const styles = {
		scale: state.isOver
			? state.isSelecting
				? spring(1.05)
				: spring(1.1)
			: spring(1),
		dx: state.isOver ? spring(state.dx) : spring(0),
		dy: state.isOver ? spring(state.dy) : spring(0),
		rx: state.isOver
			? state.isSelecting
				? spring(state.rx * 1.4)
				: spring(state.rx)
			: spring(0),
		ry: state.isOver
			? state.isSelecting
				? spring(state.ry * 1.4)
				: spring(state.ry)
			: spring(0),
		sx: state.isOver ? spring(state.sx) : spring(50),
		sy: state.isOver ? spring(state.sy) : spring(0),
		sb: state.isOver ? spring(state.sb) : spring(0),
		hx: state.isOver ? spring(state.hx) : spring(50),
		hy: state.isOver ? spring(state.hy) : spring(100),
		hb: state.isOver ? spring(state.hb) : spring(0),
		shadowLength: state.isOver
			? state.isSelecting
				? spring(dropShadowDepth - 15)
				: spring(dropShadowDepth)
			: spring(0),
		shadowSpread: state.isOver
			? state.isSelecting
				? spring(dropShadowSpread - 15)
				: spring(dropShadowSpread)
			: spring(0),
		shadowOpacity: state.isOver ? shadowOpacity : spring(0),
	};

	const renderLayers = ({ dx, dy }: PlainStyle) => {
		return layers.map((layer, i) => {
			const props = {
				style: {
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					transform: `translateX(${i * parallaxMultiplier * dx}px) translateY(${
						i * parallaxMultiplier * dy
					}px)`,
				},
				key: i,
			};

			return React.cloneElement(layer, props);
		});
	};

	return (
		<Root
			onMouseEnter={onMouseEnter}
			onMouseMove={onMouseMove}
			onMouseLeave={onMouseLeave}
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
			onTouchEnd={onTouchEnd}
			onTouchStartCapture={onTouchStart}
			onTouchEndCapture={onTouchEnd}
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			isOver={state.isOver}
			ref={rootRef}
			{...otherProps}
		>
			<Motion style={styles}>
				{interpolated => (
					<>
						{!hideShadow && (
							<DropShadow
								length={interpolated.shadowLength}
								spread={interpolated.shadowSpread}
								opacity={interpolated.shadowOpacity}
							/>
						)}
						<Measure bounds onResize={onMeasure}>
							{({ measureRef }) => (
								<IconContainer
									scale={interpolated.scale}
									rx={interpolated.rx}
									ry={interpolated.ry}
									ref={measureRef}
								>
									{renderLayers(interpolated)}
									<Shine
										sx={interpolated.sx}
										sy={interpolated.sy}
										sb={interpolated.sb}
									/>
									<Shade
										hx={interpolated.hx}
										hy={interpolated.hy}
										hb={interpolated.hb}
									/>
								</IconContainer>
							)}
						</Measure>
					</>
				)}
			</Motion>
		</Root>
	);
}
