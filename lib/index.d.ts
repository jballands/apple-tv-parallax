import { ReactElement } from 'react';
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
export default function ({ layers, onClick, shadowOpacity, rotationAngleDegrees, hideShadow, parallaxMultiplier, dropShadowSpread, dropShadowDepth, ...otherProps }: AppleTVIconProps): JSX.Element;
export {};
