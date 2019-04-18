```js
import { Button } from "@rmwc/button";
<>
<Button
  unelevated
  label={"Primary"}
/>
<br /><br />
<Button
  outlined
  label={"Secondary"}
/>
<br /><br />
<Button
  unelevated
  disabled
  label={"Disabled"}
/>
<br /><br />
<Button
  outlined
  disabled
  label={"Disabled"}
/>
<br /><br />
<Button unelevated>
  <span style={{color: "yellow"}}>Custom</span> Label
</Button>
<br /><br />
<Button
  unelevated
  label={"Icons"}
  icon={"favorite"}
  trailingIcon={"favorite_border"}
/>
</>
```