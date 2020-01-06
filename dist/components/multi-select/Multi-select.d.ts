import * as React from "react";
import "@material/react-floating-label/index.scss";
import "../../vars.scss";
export interface IMultiSelectProps {
    options?: any;
    value?: any;
    /** When the input changes */
    onChange?: any;
    hasError?: boolean;
    isRequired?: boolean;
    noLabel?: boolean;
}
export declare class MultiSelect extends React.PureComponent<IMultiSelectProps, {}> {
    private SelectContainer;
    private Placeholder;
    render(): JSX.Element;
}
export default MultiSelect;
