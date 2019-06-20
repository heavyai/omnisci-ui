import * as React from "react";
import { FormattedOption } from "@rmwc/select/dist/index.d";
import "@material/react-floating-label/index.scss";
import "../../vars.scss";
export interface IMultiSelectProps {
    label?: string;
    options?: FormattedOption[];
    value?: FormattedOption;
    /** When the input changes */
    onChange?: any;
    hasError?: boolean;
    isRequired?: boolean;
}
export declare class MultiSelect extends React.PureComponent<IMultiSelectProps, {}> {
    private SelectContainer;
    private Placeholder;
    render(): JSX.Element;
}
export default MultiSelect;
