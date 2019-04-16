Standard
```js
import { Switch } from "@rmwc/switch"
initialState = {
  isChecked: true
};
<Switch
  checked={state.isChecked}
  onChange={(e) => setState({ isChecked: e.target.checked })}
/>
```

Disabled
```js
import { Switch } from "@rmwc/switch"
initialState = {
  isChecked: true
};
<Switch
  disabled
  checked={state.isChecked}
  onChange={(e) => setState({ isChecked: e.target.checked })}
/>
```