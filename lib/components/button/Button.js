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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessButton = exports.InfoButton = exports.WarningButton = exports.DangerButton = exports.SecondaryButton = exports.PrimaryButton = void 0;
const React = __importStar(require("react"));
const button_1 = require("@rmwc/button");
/**
 * button
 */
exports.PrimaryButton = (props) => (React.createElement(button_1.Button, Object.assign({ unelevated: true, ripple: false }, props), props.children));
exports.SecondaryButton = (props) => (React.createElement(button_1.Button, Object.assign({ outlined: true, ripple: false }, props), props.children));
exports.DangerButton = (props) => (React.createElement(exports.PrimaryButton, Object.assign({ className: "danger" }, props), props.children));
exports.WarningButton = (props) => (React.createElement(exports.PrimaryButton, Object.assign({ className: "warning" }, props), props.children));
exports.InfoButton = (props) => (React.createElement(exports.PrimaryButton, Object.assign({ className: "info" }, props), props.children));
exports.SuccessButton = (props) => (React.createElement(exports.PrimaryButton, Object.assign({ className: "success" }, props), props.children));
exports.default = {
    PrimaryButton: exports.PrimaryButton,
    SecondaryButton: exports.SecondaryButton,
    DangerButton: exports.DangerButton,
    WarningButton: exports.WarningButton,
    InfoButton: exports.InfoButton,
    SuccessButton: exports.SuccessButton,
};
//# sourceMappingURL=Button.js.map