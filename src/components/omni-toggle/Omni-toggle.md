```js
initialState = {
  label: "Label",
  isChecked: true
};
<OmniToggle
  label={state.label}
  isChecked={state.isChecked}
  onChange={(checked) => setState({ isChecked: checked })}
/>
```