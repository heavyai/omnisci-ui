```js
import { Button } from "@rmwc/button";
<>
<Button
  unelevated
  ripple={false}
  label={"Primary"}
/>

<Button
  outlined
  ripple={false}
  label={"Secondary"}
/>

<Button
  unelevated
  ripple={false}
  disabled
  ripple={false}
  label={"Disabled"}
/>

<Button
  outlined
  ripple={false}
  disabled
  ripple={false}
  label={"Disabled"}
/>

<Button
  unelevated
  ripple={false}
>
  <span style={{color: "yellow"}}>Custom</span> Label
</Button>

<Button
  unelevated
  ripple={false}
  ripple={false}
  label={"Icons"}
  icon={"favorite"}
  trailingIcon={"favorite_border"}
/>
</>
```