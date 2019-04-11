
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
<OmniSelect
  label={state.label}
  value={state.value}
  options={state.options}
  onChange={(value) => setState({ value })}
/>
```

Disabled state
```js
initialState = {
  label: "Disabled",
  value: "",
  options: []
};
<OmniSelect
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
<OmniSelect
  label={state.label}
  value={state.value}
  required
  options={state.options}
  onChange={(value) => setState({ value })}
/>
```