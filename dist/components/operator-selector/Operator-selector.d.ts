/// <reference types="react" />
import "./operator-selector.scss";
export declare const operatorArgs: {
    between: string[];
    "less than": string[];
    "greater than": string[];
    equals: string[];
    "not between": string[];
};
/**
 * Operator Selector properties.
 */
export interface IOperatorSelectorProps {
    /** Operator min value */
    min?: number;
    /** Operator max value */
    max?: number;
    /** Selected operator */
    operator?: string;
    /** If menu should be open */
    menuIsOpen?: boolean;
    /** When menu is clicked open */
    onMenuClick?: any;
    /** When a menu item is selected */
    onMenuSelect?: any;
    /** When a min or max input is changed */
    onInputChange?: any;
}
/**
 * Operator Selector
 */
export declare const OperatorSelector: (props: IOperatorSelectorProps) => JSX.Element;
export default OperatorSelector;
