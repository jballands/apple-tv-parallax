import { ReactElement } from 'react';
interface AppleTVIconProps {
    layers: ReactElement[];
    shadowOpacity?: number;
    rotationAngleDegrees?: number;
    parallaxMultiplier?: number;
    hideShadow?: boolean;
    noClickAnimation?: boolean;
    dropShadowSpread?: number;
    dropShadowDepth?: number;
    borderRadius?: string;
    onClick?: () => void;
    [_: string]: any;
}
export default function ({ layers, onClick, shadowOpacity, rotationAngleDegrees, hideShadow, noClickAnimation, parallaxMultiplier, dropShadowSpread, dropShadowDepth, borderRadius, ...otherProps }: AppleTVIconProps): JSX.Element;
export {};
