Standard
```js
import { Slider } from "@rmwc/slider"
initialState = {
  value: null,
  min: 0,
  max: 200,
  step: 1
};
<Slider
  value={state.value}
  onInput={(e) => setState({ value: e.detail.value })}
  min={state.min}
  max={state.max}
  step={state.step}
  discrete
/>
```

Disabled
```js
import { Slider } from "@rmwc/slider"
initialState = {
  value: null,
  min: 0,
  max: 200,
  step: 1
};
<Slider
  value={state.value}
  onInput={(e) => setState({ value: e.detail.value })}
  min={state.min}
  max={state.max}
  step={state.step}
  discrete
  disabled
/>