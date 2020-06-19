/// <reference types="react" />
/**
 * Toggler properties.
 */
export interface ITogglerProps {
    /** Renderer for the primary state */
    primaryChildren?: any;
    /** Renderer for the secondary state */
    secondaryChildren?: any;
    /** If on primary state, otherwise secondary */
    isPrimaryState?: boolean;
    /** Boolean when button change state bwteen primary and secondary */
    onChange?: any;
}
/**
 * Toggler
 */
export declare const Toggler: (props: ITogglerProps) => JSX.Element;
export default Toggler;
