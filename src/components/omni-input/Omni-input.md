Standard text input
```js
initialState = {
  label: "Label",
  value: null
};
<OmniInput
  label={state.label}
  value={state.value}
  onInputChange={(value) => setState({ value })}
/>
```

Number input
```js
initialState = {
  label: "Label",
  value: null
};
<OmniInput
  label={state.label}
  value={state.value}
  type="number"
  onInputChange={(value) => setState({ value })}
/>
```

Trailing icon
```js
initialState = {
  label: "Label",
  value: null
};
<OmniInput
  label={state.label}
  value={state.value}
  onInputChange={(value) => setState({ value })}
  icon="search"
  trailingIcon="close"
/>