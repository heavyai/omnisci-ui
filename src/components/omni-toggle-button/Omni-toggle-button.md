```js
initialState = {
  isPrimaryState: true
};
<OmniToggleButton
  primaryLabel="Primary"
  secondaryLabel="Secondary"
  isPrimaryState={state.isPrimaryState}
  onChange={(isPrimaryState) => setState({ isPrimaryState })}
/>
```