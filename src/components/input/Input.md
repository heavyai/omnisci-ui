```js
import { TextField } from "@rmwc/textfield"
initialState = {
  label: "Standard",
  value: ""
};
<TextField
  outlined
  label={state.label}
  value={state.value}
  onChange={(e) => setState({ value: e.target.value })}
/>
```

```js
import { TextField, TextFieldIcon } from "@rmwc/textfield"
initialState = {
  label: "Icons",
  value: ""
};
<TextField
  outlined
  label={state.label}
  value={state.value}
  onChange={(e) => setState({ value: e.target.value })}
  icon={"search"}
  trailingIcon={
    <TextFieldIcon
      icon="close"
      onClick={() => console.log("click trailing icon")}/>
  }
/>
```

```js
import { TextField } from "@rmwc/textfield"
initialState = {
  label: "Number",
  value: ""
};
<TextField
  outlined
  label={state.label}
  value={state.value}
  onChange={(e) => setState({ value: e.target.value })}
  type={"number"}
/>
```

```js
import { TextField } from "@rmwc/textfield"
initialState = {
  label: "Disabled"
};
<TextField
  outlined
  disabled
  label={state.label}
/>
```

```js
import { TextField } from "@rmwc/textfield"
initialState = {
  label: "Invalid",
  value: ""
};
<TextField
  outlined
  invalid
  label={state.label}
  value={state.value}
  onChange={(e) => setState({ value: e.target.value })}
/>
```

```js
import { TextField } from "@rmwc/textfield"
initialState = {
  label: "Textarea full width",
  value: ""
};
<TextField
  outlined
  textarea
  label={state.label}
  value={state.value}
  onChange={(e) => setState({ value: e.target.value })}
  fullwidth
/>
```

```js
import { TextField } from "@rmwc/textfield"
initialState = {
  label: "Textarea resizable",
  value: ""
};
<TextField
  outlined
  textarea
  label={state.label}
  value={state.value}
  onChange={(e) => setState({ value: e.target.value })}
  rows={8}
/>
```
