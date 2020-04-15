import * as React from "react";
/**
 * List properties.
 */
export interface IListProps {
    /** Content specified as children. */
    children?: [React.ReactNode];
    /** Reduce list item padding */
    compact?: boolean;
    extraCompact?: boolean;
}
/**
 * List
 */
export declare const List: (props: IListProps) => JSX.Element;
export default List;
