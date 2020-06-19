import * as React from "react";
export interface IMultiSelectProps {
    options?: any;
    value?: any;
    /** When the input changes */
    onChange?: any;
    hasError?: boolean;
    isRequired?: boolean;
    noLabel?: boolean;
    className?: string;
    components?: any;
}
export declare class MultiSelect extends React.PureComponent<IMultiSelectProps> {
    private SelectContainer;
    private DropdownIndicator;
    private Placeholder;
    private customStyles;
    render(): JSX.Element;
}
export default MultiSelect;
