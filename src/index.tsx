//
//	AppleTVIcon.tsx
//
//	© 2020 Jonathan Ballands
//

import React from 'react';
import Measure from 'react-measure';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';
import { scaleLinear } from 'd3-scale';

interface AppleTVIconProps {
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
	shadowOpacity = 0.4,
	rotationAngleDegrees = 15,
	hideShadow = false,
	parallaxMultiplier = 0.03,
	dropShadowSpread = 45,
	dropShadowDepth = 45,
}: AppleTVIconProps) {}
