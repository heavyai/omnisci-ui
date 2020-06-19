"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoDialog = exports.SuccessDialog = exports.WarningDialog = exports.DangerDialog = exports.SimpleInfoDialog = exports.SimpleSuccessDialog = exports.SimpleWarningDialog = exports.SimpleDangerDialog = exports.SimpleDialog = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const dialog_1 = require("@rmwc/dialog");
const icon_button_1 = require("@rmwc/icon-button");
const icon_1 = require("@rmwc/icon");
const Button_1 = require("../button/Button");
/**
 * Dialog
 */
exports.SimpleDialog = ({ primaryLabel = "Ok", secondaryLabel = "Cancel", primaryAction, secondaryAction, message, onClose = () => {
    // No-op by default
}, onOpen = () => {
    // No-op by default
}, title, open, type, hideCloseIcon, onCloseFromHeader, children, footer, className, onStateChange, preventOutsideDismiss, actionToApplyOnEnter, }) => {
    const handlePrimary = () => {
        if (primaryAction) {
            primaryAction();
        }
        onClose();
    };
    const handleSecondary = () => {
        if (secondaryAction) {
            secondaryAction();
        }
        onClose();
    };
    /* eslint-disable no-confusing-arrow */
    const handleCloseFromHeader = () => onCloseFromHeader ? onCloseFromHeader() : onClose("from header");
    return (react_1.default.createElement(dialog_1.Dialog, { className: classnames_1.default(type, className), open: open, onOpen: onOpen, onStateChange: (e) => {
            if (onStateChange) {
                onStateChange(e);
            }
            if (open && e === "closing") {
                onClose("from state change");
            }
        }, preventOutsideDismiss: preventOutsideDismiss },
        react_1.default.createElement(dialog_1.DialogTitle, null,
            title,
            !hideCloseIcon && (react_1.default.createElement(icon_button_1.IconButton, { icon: "close", onClick: handleCloseFromHeader, ripple: false }))),
        react_1.default.createElement(dialog_1.DialogContent, null, children ? (children) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "message-icon" },
                (type === "warning" || type === "danger") && (react_1.default.createElement(icon_1.Icon, { icon: "warning_outline" })),
                type === "success" && react_1.default.createElement(icon_1.Icon, { icon: "check_circle_outline" }),
                type === "info" && react_1.default.createElement(icon_1.Icon, { icon: "info_outline" })),
            react_1.default.createElement("div", { className: "dialog-message" }, message)))),
        react_1.default.createElement(dialog_1.DialogActions, null, footer || (react_1.default.createElement(react_1.default.Fragment, null,
            secondaryAction && (react_1.default.createElement(Button_1.SecondaryButton, { onClick: handleSecondary }, secondaryLabel || "Cancel")),
            !type && (react_1.default.createElement(Button_1.PrimaryButton, { onClick: handlePrimary }, primaryLabel)),
            {
                danger: (react_1.default.createElement(Button_1.DangerButton, { onClick: handlePrimary }, primaryLabel)),
                warning: (react_1.default.createElement(Button_1.WarningButton, { onClick: handlePrimary }, primaryLabel)),
                success: (react_1.default.createElement(Button_1.SuccessButton, { onClick: handlePrimary }, primaryLabel)),
                info: (react_1.default.createElement(Button_1.PrimaryButton, { onClick: handlePrimary }, primaryLabel)),
            }[type])))));
};
exports.SimpleDangerDialog = (props) => (react_1.default.createElement(exports.SimpleDialog, Object.assign({ type: "danger" }, props), props.children));
exports.SimpleWarningDialog = (props) => (react_1.default.createElement(exports.SimpleDialog, Object.assign({ type: "warning" }, props), props.children));
exports.SimpleSuccessDialog = (props) => (react_1.default.createElement(exports.SimpleDialog, Object.assign({ type: "success" }, props), props.children));
exports.SimpleInfoDialog = (props) => (react_1.default.createElement(exports.SimpleDialog, Object.assign({ type: "info" }, props), props.children));
exports.DangerDialog = (props) => (react_1.default.createElement(dialog_1.Dialog, Object.assign({ className: "danger" }, props), props.children));
exports.WarningDialog = (props) => (react_1.default.createElement(dialog_1.Dialog, Object.assign({ className: "warning" }, props), props.children));
exports.SuccessDialog = (props) => (react_1.default.createElement(dialog_1.Dialog, Object.assign({ className: "success" }, props), props.children));
exports.InfoDialog = (props) => (react_1.default.createElement(dialog_1.Dialog, Object.assign({ className: "info" }, props), props.children));
exports.default = {
    SimpleDialog: exports.SimpleDialog,
    DangerDialog: exports.DangerDialog,
    WarningDialog: exports.WarningDialog,
    SuccessDialog: exports.SuccessDialog,
    InfoDialog: exports.InfoDialog,
    SimpleDangerDialog: exports.SimpleDangerDialog,
    SimpleWarningDialog: exports.SimpleWarningDialog,
    SimpleSuccessDialog: exports.SimpleSuccessDialog,
    SimpleInfoDialog: exports.SimpleInfoDialog,
};
//# sourceMappingURL=Dialog.js.map