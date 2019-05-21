/// <reference types="react" />
import { FormattedOption } from "@rmwc/select/dist/index.d";
import "@material/react-floating-label/index.scss";
import "../../vars.scss";
export interface IMultiSelectProps {
    label?: string;
    options?: FormattedOption[];
    value?: FormattedOption;
    /** When the input changes */
    onChange?: any;
}
export declare const MultiSelect: (props: IMultiSelectProps) => JSX.Element;
export default MultiSelect;
