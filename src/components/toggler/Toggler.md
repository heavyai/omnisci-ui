```js
import { Button } from "@rmwc/button";

initialState = {
  isPrimaryState: true
};
<Toggler
  isPrimaryState={state.isPrimaryState}
  onChange={(isPrimaryState) => setState({ isPrimaryState })}
  primaryChildren={<Button unelevated>primary</Button>}
  secondaryChildren={<Button outlined>secondary</Button>}
/>
```