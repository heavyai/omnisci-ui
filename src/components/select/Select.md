
```
<Select
  label="Outlined"
  outlined
  options={['Cookies', 'Pizza', 'Icecream']}
/>
```

Standard selector
```js
initialState = {
  label: "Standard",
  value: "1",
  options: [
    {label: "one", value: "1"},
    {label: "two", value: "2"},
    {label: "three", value: "3"}
  ]
};
<Select
  label={state.label}
  value={state.value}
  options={state.options}
  onChange={(e) => setState({ value: e.detail.value })}
/>
```

Disabled state
```js
initialState = {
  label: "Disabled",
  value: "",
  options: []
};
<Select
  label={state.label}
  disabled
  options={state.options}
/>
```

Required state
```js
initialState = {
  label: "Required",
  value: "",
  options: [
    {label: "one", value: "1"},
    {label: "two", value: "2"},
    {label: "three", value: "3"}
  ]
};
<Select
  label={state.label}
  value={state.value}
  required
  options={state.options}
  onChange={(e) => setState({ value: e.detail.value })}
/>
```

Icon
```js
initialState = {
  label: "Icon",
  value: "",
  options: [
    {label: "one", value: "1"},
    {label: "two", value: "2"},
    {label: "three", value: "3"}
  ]
};
<Select
  label={state.label}
  value={state.value}
  options={state.options}
  withLeadingIcon={"favorite"}
  onChange={(e) => setState({ value: e.detail.value })}
/>
```
