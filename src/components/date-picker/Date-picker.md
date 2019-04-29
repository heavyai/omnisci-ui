```js
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import moment from "moment"

initialState = {
  startDate: null,
  endDate: null,
  focusedInput: "startDate",
  startDateInput: "",
  endDateInput: ""
};

function validateFormat(dateAsString) {
  return RegExp("[0-9]{2}/[0-9]{2}/[0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2}").test(dateAsString)
}
<>
<DayPickerRangeController
  hideKeyboardShortcutsPanel
  numberOfMonths={1}
  minimumNights={0}
  startDate={state.startDate ? moment.unix(state.startDate) : null} // momentPropTypes.momentObj or null,
  endDate={state.endDate ? moment.unix(state.endDate) : null} // momentPropTypes.momentObj or null,
  onDatesChange={({ startDate, endDate }) => {
    setState({
      startDate: startDate && startDate.unix(),
      endDate: endDate && endDate.unix(),
      startDateInput: startDate && startDate.format("MM/DD/YYYY HH:mm:ss"),
      endDateInput: endDate && endDate.format("MM/DD/YYYY HH:mm:ss")
    });
  }} // PropTypes.func.isRequired,
  focusedInput={state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => setState({ focusedInput: focusedInput || "startDate" })} // PropTypes.func.isRequired,
  calendarInfoPosition="bottom"
  renderCalendarInfo={() => (
    <div>
      <input
        className={validateFormat(state.startDateInput) ? "valid": "invalid"}
        value={state.startDateInput}
        onChange={(e) => {
          const input = e.target.value;
          setState({startDateInput: input})
        }}
        onBlur={(e) => {
          const input = e.target.value;
          const date = moment(input, "MM/DD/YYYY HH:mm:ss");
          if (date.isValid() && validateFormat(input)) {
            setState({ startDate: date.unix() })
          }
        }}
      />
      <input
        className={validateFormat(state.endDateInput) ? "valid": "invalid"}
        value={state.endDateInput}
        onChange={(e) => {
          const input = e.target.value;
          setState({endDateInput: input})
        }}
        onBlur={(e) => {
          const input = e.target.value;
          const date = moment(input, "MM/DD/YYYY HH:mm:ss");
          if (date.isValid() && validateFormat(input)) {
            setState({ endDate: date.unix() })
          }
        }}
      />
    </div>
  )}
/>
</>
```