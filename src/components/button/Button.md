```js
import { Button } from "@rmwc/button";
import {
  PrimaryButton,
  SecondaryButton,
  DangerButton,
  WarningButton,
  SuccessButton,
} from "./Button";
<>
<PrimaryButton label={"Primary"} />
<PrimaryButton disabled label={"Disabled"} />
<hr />
<SecondaryButton label={"Secondary"} />
<SecondaryButton disabled label={"Disabled"} />
<hr />
<DangerButton label={"Danger"} />
<DangerButton disabled label={"Disabled"} />
<hr />
<WarningButton label={"Warning"} />
<WarningButton disabled label={"Disabled"} />
<hr />
<SuccessButton label={"Success"} />
<SuccessButton disabled label={"Disabled"} />
<hr />
<PrimaryButton>
  <span style={{color: "yellow"}}>Custom</span> Label
</PrimaryButton>
<PrimaryButton
  label={"Icons"}
  icon={"favorite"}
  trailingIcon={"favorite_border"}
/>
<hr />
<Button
  unelevated
  ripple={false}
  label={"RMWC"}
/>
</>
```