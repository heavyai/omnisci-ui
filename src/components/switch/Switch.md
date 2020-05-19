Standard on
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

Standard off
```js
import { Switch } from "@rmwc/switch"
import { RMWCProvider } from '@rmwc/provider';
initialState = {
  isChecked: false
};
<Switch
  checked={state.isChecked}
  onChange={(e) => setState({ isChecked: e.target.checked })}
/>
```

Disabled on
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

Disabled off
```js
import { Switch } from "@rmwc/switch"
initialState = {
  isChecked: false
};
<Switch
  disabled
  checked={state.isChecked}
  onChange={(e) => setState({ isChecked: e.target.checked })}
/>
```

Compact
```js
import { Switch } from "@rmwc/switch"
initialState = {
  isChecked: false
};
<Switch
  className="compact"
  checked={state.isChecked}
  onChange={(e) => setState({ isChecked: e.target.checked })}
/>
```