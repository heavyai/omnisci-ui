```js
import { Button } from "@rmwc/button";
<>
<Button
  unelevated
  label={"Primary"}
/>

<Button
  outlined
  label={"Secondary"}
/>

<Button
  unelevated
  disabled
  label={"Disabled"}
/>

<Button
  outlined
  disabled
  label={"Disabled"}
/>

<Button unelevated>
  <span style={{color: "yellow"}}>Custom</span> Label
</Button>

<Button
  unelevated
  label={"Icons"}
  icon={"favorite"}
  trailingIcon={"favorite_border"}
/>
</>
```