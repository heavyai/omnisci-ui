```js
initialState = {
  label: "Label",
  tip: "Enter a string",
  value: null
};
<OmniTextInput
  label={state.label}
  tip={state.tip}
  value={state.value}
  onInputChange={(value) => setState({ value })}
/>
```