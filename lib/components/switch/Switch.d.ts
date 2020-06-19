/// <reference types="react" />
/**
 * Switch properties.
 */
export interface ISwitchProps {
    /** Disables the control. */
    disabled?: boolean;
    /** Toggle the control on and off. */
    checked?: boolean;
    /** When the toggle changes */
    onChange?: any;
}
/**
 * Switch
 */
export declare const Switch: (props: ISwitchProps) => JSX.Element;
export default Switch;
