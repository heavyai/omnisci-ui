```js
initialState = {
  label: "Label",
  value: null,
  min: 0,
  max: 200,
  step: 1
};
<OmniSlider
  label={state.label}
  value={state.value}
  onInput={(value) => setState({ value })}
  min={state.min}
  max={state.max}
  step={state.step}
/>
```