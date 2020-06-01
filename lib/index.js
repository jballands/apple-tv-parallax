"use strict";
//
//	AppleTVIcon.tsx
//
//	© 2020 Jonathan Ballands
//
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_measure_1 = __importDefault(require("react-measure"));
var react_motion_1 = require("react-motion");
var styled_components_1 = __importDefault(require("styled-components"));
var d3_scale_1 = require("d3-scale");
var Root = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\twidth: 320px;\n\theight: 190px;\n\tposition: relative;\n\tz-index: ", ";\n\ttouch-action: manipulation;\n"], ["\n\twidth: 320px;\n\theight: 190px;\n\tposition: relative;\n\tz-index: ", ";\n\ttouch-action: manipulation;\n"])), function (props) { return (props.isOver ? 10 : 0); });
var DropShadow = styled_components_1.default.div.attrs(function (_a) {
    var length = _a.length, spread = _a.spread, opacity = _a.opacity;
    return ({
        style: {
            boxShadow: "0px " + length + "px " + spread + "px 0px rgba(0,0,0, " + opacity + ")",
            background: "rgba(0,0,0, " + opacity + ")",
        },
    });
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: 15px;\n\tleft: 15px;\n\tright: 15px;\n\tbottom: 15px;\n"], ["\n\tposition: absolute;\n\ttop: 15px;\n\tleft: 15px;\n\tright: 15px;\n\tbottom: 15px;\n"])));
var IconContainer = styled_components_1.default.div.attrs(function (_a) {
    var rx = _a.rx, ry = _a.ry, scale = _a.scale;
    return ({
        style: {
            transform: "rotateX(" + rx + "deg) rotateY(" + ry + "deg) scale3d(" + scale + ", " + scale + ", " + scale + ")",
        },
    });
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n\tborder-radius: ", ";\n\ttransform-style: preserve-3d;\n"], ["\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n\tborder-radius: ", ";\n\ttransform-style: preserve-3d;\n"])), function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius;
});
var Shine = styled_components_1.default.div.attrs(function (_a) {
    var sx = _a.sx, sy = _a.sy, sb = _a.sb;
    return ({
        style: {
            background: "radial-gradient(\n\t\t\tcircle at " + sx + "% " + sy + "%,\n\t\t\trgba(255, 255, 255, " + sb + "),\n\t\t\ttransparent\n\t\t)",
        },
    });
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tborder-radius: ", ";\n"], ["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tborder-radius: ", ";\n"])), function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius;
});
var Shade = styled_components_1.default.div.attrs(function (_a) {
    var hx = _a.hx, hy = _a.hy, hb = _a.hb;
    return ({
        style: {
            background: "radial-gradient(\n\t\t\tcircle at " + hx + "% " + hy + "%,\n\t\t\trgba(0, 0, 0, " + hb + "),\n\t\t\ttransparent 135%\n\t\t)",
        },
    });
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tborder-radius: ", ";\n"], ["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tborder-radius: ", ";\n"])), function (_a) {
    var borderRadius = _a.borderRadius;
    return borderRadius;
});
function default_1(_a) {
    var layers = _a.layers, onClick = _a.onClick, _b = _a.shadowOpacity, shadowOpacity = _b === void 0 ? 0.4 : _b, _c = _a.rotationAngleDegrees, rotationAngleDegrees = _c === void 0 ? 15 : _c, _d = _a.hideShadow, hideShadow = _d === void 0 ? false : _d, _e = _a.noClickAnimation, noClickAnimation = _e === void 0 ? false : _e, _f = _a.parallaxMultiplier, parallaxMultiplier = _f === void 0 ? 0.03 : _f, _g = _a.dropShadowSpread, dropShadowSpread = _g === void 0 ? 45 : _g, _h = _a.dropShadowDepth, dropShadowDepth = _h === void 0 ? 45 : _h, _j = _a.borderRadius, borderRadius = _j === void 0 ? '5px' : _j, otherProps = __rest(_a, ["layers", "onClick", "shadowOpacity", "rotationAngleDegrees", "hideShadow", "noClickAnimation", "parallaxMultiplier", "dropShadowSpread", "dropShadowDepth", "borderRadius"]);
    var rootRef = react_1.useRef(null);
    var _k = react_1.useState({
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
    }), state = _k[0], setState = _k[1];
    react_1.useEffect(function () {
        var preventScroll = function (e) {
            if (state.preventScroll) {
                e.preventDefault();
            }
        };
        document.addEventListener('touchmove', preventScroll, {
            passive: false,
        });
        return function () { return document.removeEventListener('touchmove', preventScroll); };
    }, []);
    var getCalculations = function (_a) {
        var pageX = _a.pageX, pageY = _a.pageY;
        var _b, _c, _d;
        var width = state.width, height = state.height;
        var offsets = (_b = rootRef.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
        // https://stackoverflow.com/questions/11193453/find-the-vertical-position-of-scrollbar-without-jquery/11193504
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
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
        var raw = {
            x: pageX - ((_c = offsets === null || offsets === void 0 ? void 0 : offsets.left) !== null && _c !== void 0 ? _c : 0) - scrollLeft,
            y: pageY - ((_d = offsets === null || offsets === void 0 ? void 0 : offsets.top) !== null && _d !== void 0 ? _d : 0) - scrollTop,
        };
        var center = {
            x: width / 2,
            y: height / 2,
        };
        var dx = raw.x - center.x;
        var dy = raw.y - center.y;
        // These values calculate the rotation angle of the icon
        var rotateScaleX = d3_scale_1.scaleLinear()
            .domain([0, height])
            .range([-rotationAngleDegrees, rotationAngleDegrees])
            .clamp(true);
        var rotateScaleY = d3_scale_1.scaleLinear()
            .domain([0, width])
            .range([rotationAngleDegrees, -rotationAngleDegrees])
            .clamp(true);
        var shineScaleX = d3_scale_1.scaleLinear()
            .domain([0, width])
            .range([0, 100])
            .clamp(true);
        var shineScaleY = d3_scale_1.scaleLinear()
            .domain([0, height / 1.5, height])
            .range([5, 25, 100])
            .clamp(true);
        var shineScaleBrightness = d3_scale_1.scaleLinear()
            .domain([height, 0])
            .range([0, 0.6])
            .clamp(true);
        var shadowScaleX = d3_scale_1.scaleLinear()
            .domain([0, width])
            .range([0, 100])
            .clamp(true);
        var shadowScaleY = d3_scale_1.scaleLinear()
            .domain([0, height / 1.5, height])
            .range([0, 100, 100])
            .clamp(true);
        var shadowScaleDarkness = d3_scale_1.scaleLinear()
            .domain([height / 1.5, height])
            .range([0, 0.35])
            .clamp(true);
        return {
            dx: dx,
            dy: dy,
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
    var onMeasure = function (_a) {
        var bounds = _a.bounds;
        var _b, _c;
        var width = (_b = bounds === null || bounds === void 0 ? void 0 : bounds.width) !== null && _b !== void 0 ? _b : 0;
        var height = (_c = bounds === null || bounds === void 0 ? void 0 : bounds.height) !== null && _c !== void 0 ? _c : 0;
        setState(__assign(__assign({}, state), { width: width,
            height: height }));
    };
    var onEnter = function (e) {
        var calcs = getCalculations(e);
        setState(__assign(__assign(__assign({}, state), { isOver: true, preventScroll: true }), calcs));
    };
    var onMove = function (e) {
        var calcs = getCalculations(e);
        setState(__assign(__assign({}, state), calcs));
    };
    var onLeave = function () {
        setState(__assign(__assign({}, state), { isSelecting: false, isOver: false, preventScroll: false }));
    };
    var onSelect = function () {
        onClick && onClick();
    };
    var onMouseEnter = function (e) {
        onEnter(e);
    };
    var onMouseMove = function (e) {
        onMove(e);
    };
    var onMouseLeave = function () {
        onLeave();
    };
    var onMouseDown = function () {
        setState(__assign(__assign({}, state), { isSelecting: !noClickAnimation && true }));
    };
    var onMouseUp = function () {
        onSelect();
        setState(__assign(__assign({}, state), { isSelecting: false }));
    };
    var onTouchStart = function (e) {
        switch (e.touches.length) {
            case 1:
                return onEnter(e.touches[0]);
            case 2:
                return setState(__assign(__assign({}, state), { isSelecting: true }));
            default:
                return onEnter(e.touches[0]);
        }
    };
    var onTouchMove = function (e) {
        onMove(e.touches[0]);
    };
    var onTouchEnd = function (e) {
        var isSelecting = state.isSelecting;
        if (isSelecting) {
            onSelect();
        }
        switch (e.touches.length) {
            case 1:
                return onLeave();
            case 2:
                return setState(__assign(__assign({}, state), { isSelecting: false }));
            default:
                return onLeave();
        }
    };
    var styles = {
        scale: state.isOver
            ? state.isSelecting
                ? react_motion_1.spring(1.05)
                : react_motion_1.spring(1.1)
            : react_motion_1.spring(1),
        dx: state.isOver ? react_motion_1.spring(state.dx) : react_motion_1.spring(0),
        dy: state.isOver ? react_motion_1.spring(state.dy) : react_motion_1.spring(0),
        rx: state.isOver
            ? state.isSelecting
                ? react_motion_1.spring(state.rx * 1.4)
                : react_motion_1.spring(state.rx)
            : react_motion_1.spring(0),
        ry: state.isOver
            ? state.isSelecting
                ? react_motion_1.spring(state.ry * 1.4)
                : react_motion_1.spring(state.ry)
            : react_motion_1.spring(0),
        sx: state.isOver ? react_motion_1.spring(state.sx) : react_motion_1.spring(50),
        sy: state.isOver ? react_motion_1.spring(state.sy) : react_motion_1.spring(0),
        sb: state.isOver ? react_motion_1.spring(state.sb) : react_motion_1.spring(0),
        hx: state.isOver ? react_motion_1.spring(state.hx) : react_motion_1.spring(50),
        hy: state.isOver ? react_motion_1.spring(state.hy) : react_motion_1.spring(100),
        hb: state.isOver ? react_motion_1.spring(state.hb) : react_motion_1.spring(0),
        shadowLength: state.isOver
            ? state.isSelecting
                ? react_motion_1.spring(dropShadowDepth - 15)
                : react_motion_1.spring(dropShadowDepth)
            : react_motion_1.spring(0),
        shadowSpread: state.isOver
            ? state.isSelecting
                ? react_motion_1.spring(dropShadowSpread - 15)
                : react_motion_1.spring(dropShadowSpread)
            : react_motion_1.spring(0),
        shadowOpacity: state.isOver ? shadowOpacity : react_motion_1.spring(0),
    };
    var renderLayers = function (_a) {
        var dx = _a.dx, dy = _a.dy;
        return layers.map(function (layer, i) {
            var _a, _b;
            var otherStyles = (_b = (_a = layer.props) === null || _a === void 0 ? void 0 : _a.style) !== null && _b !== void 0 ? _b : {};
            var props = {
                style: __assign({ position: 'absolute', top: 0, left: 0, transform: "translateX(" + i * parallaxMultiplier * dx + "px) translateY(" + i * parallaxMultiplier * dy + "px)" }, otherStyles),
                key: i,
            };
            return react_1.default.cloneElement(layer, props);
        });
    };
    return (react_1.default.createElement(Root, __assign({ onMouseEnter: onMouseEnter, onMouseMove: onMouseMove, onMouseLeave: onMouseLeave, onTouchStart: onTouchStart, onTouchMove: onTouchMove, onTouchEnd: onTouchEnd, onTouchStartCapture: onTouchStart, onTouchEndCapture: onTouchEnd, onMouseDown: onMouseDown, onMouseUp: onMouseUp, isOver: state.isOver, ref: rootRef }, otherProps),
        react_1.default.createElement(react_motion_1.Motion, { style: styles }, function (interpolated) { return (react_1.default.createElement(react_1.default.Fragment, null,
            !hideShadow && (react_1.default.createElement(DropShadow, { length: interpolated.shadowLength, spread: interpolated.shadowSpread, opacity: interpolated.shadowOpacity })),
            react_1.default.createElement(react_measure_1.default, { bounds: true, onResize: onMeasure }, function (_a) {
                var measureRef = _a.measureRef;
                return (react_1.default.createElement(IconContainer, { scale: interpolated.scale, rx: interpolated.rx, ry: interpolated.ry, borderRadius: borderRadius, ref: measureRef },
                    renderLayers(interpolated),
                    react_1.default.createElement(Shine, { sx: interpolated.sx, sy: interpolated.sy, sb: interpolated.sb, borderRadius: borderRadius }),
                    react_1.default.createElement(Shade, { hx: interpolated.hx, hy: interpolated.hy, hb: interpolated.hb, borderRadius: borderRadius })));
            }))); })));
}
exports.default = default_1;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=index.js.map