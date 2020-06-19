"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSelect = void 0;
const React = __importStar(require("react"));
const react_select_1 = __importStar(require("react-select"));
const react_floating_label_1 = __importDefault(require("@material/react-floating-label"));
const react_notched_outline_1 = __importDefault(require("@material/react-notched-outline"));
const classnames_1 = __importDefault(require("classnames"));
class MultiSelect extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.SelectContainer = (_a) => {
            var { children } = _a, childProps = __rest(_a, ["children"]);
            const labelShouldFloat = childProps.hasValue || childProps.selectProps.inputValue;
            return (React.createElement(react_select_1.components.SelectContainer, Object.assign({}, childProps),
                React.createElement("span", { className: "select-container-wrapper" }, children),
                React.createElement(react_notched_outline_1.default, { notch: labelShouldFloat },
                    React.createElement(react_floating_label_1.default, { className: classnames_1.default("floating-label", {
                            "no-label": childProps.selectProps.noLabel
                        }), float: labelShouldFloat }, childProps.selectProps.placeholder))));
        };
        this.DropdownIndicator = (_a) => {
            var props = __rest(_a, []);
            return (React.createElement(react_select_1.components.DropdownIndicator, Object.assign({}, props), "\u25BE"));
        };
        this.Placeholder = () => null;
        this.customStyles = {
            control: provided => (Object.assign(Object.assign({}, provided), { minHeight: "32px", height: "32px" })),
            indicatorsContainer: provided => (Object.assign(Object.assign({}, provided), { height: "32px" })),
            clearIndicator: provided => (Object.assign(Object.assign({}, provided), { padding: "4px" })),
            dropdownIndicator: provided => (Object.assign(Object.assign({}, provided), { padding: "4px" })),
            valueContainer: base => (Object.assign(Object.assign({}, base), { padding: "0px 6px" })),
            input: base => (Object.assign(Object.assign({}, base), { margin: 0, padding: 0 }))
        };
    }
    render() {
        const _a = this.props, { className, hasError, isRequired, components } = _a, otherProps = __rest(_a, ["className", "hasError", "isRequired", "components"]);
        return (React.createElement(react_select_1.default, Object.assign({ className: classnames_1.default("multi-select", className, {
                error: hasError,
                required: isRequired
            }), styles: this.customStyles, classNamePrefix: "select", components: Object.assign({ SelectContainer: this.SelectContainer, Placeholder: this.Placeholder, DropdownIndicator: this.DropdownIndicator }, components) }, otherProps)));
    }
}
exports.MultiSelect = MultiSelect;
exports.default = MultiSelect;
//# sourceMappingURL=Multi-select.js.map