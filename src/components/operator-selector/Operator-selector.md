```js
initialState = {
  isOpen: false,
  operator: "between",
  min: 0,
  max: 10
};
<OperatorSelector
  min={state.min}
  max={state.max}
  operator={state.operator}
  menuIsOpen={ state.isOpen }
  onMenuClick={() => setState({ isOpen: true })}
  onMenuSelect={(operator) => setState({ isOpen: false, operator })}
  onInputChange={(minOrMax, value) => setState({ [minOrMax]: value })}
/>
```