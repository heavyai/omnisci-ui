```js
initialState = {
  label: "Label",
  value: "",
  options: [
    {label: "one", value: 1},
    {label: "two", value: 2},
    {label: "three", value: 3}
  ]
};
<OmniSelect
  label={state.label}
  value={state.value}
  options={state.options}
  onInputChange={(value) => setState({ value })}
/>
```