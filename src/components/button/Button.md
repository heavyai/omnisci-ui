```js
import { Button, ButtonIcon } from "@rmwc/button";
import {
  PrimaryButton,
  SecondaryButton,
  DangerButton,
  WarningButton,
  SuccessButton,
} from "./Button";
<>
<PrimaryButton>Primary</PrimaryButton>
<PrimaryButton disabled>Disabled</PrimaryButton>
<hr />
<SecondaryButton><ButtonIcon icon={"favorite"} />Secondary</SecondaryButton>
<SecondaryButton disabled><ButtonIcon icon={"favorite"} />Disabled</SecondaryButton>
<hr />
<DangerButton>Danger</DangerButton>
<DangerButton disabled>Disabled</DangerButton>
<hr />
<WarningButton>Warning</WarningButton>
<WarningButton disabled>Disabled</WarningButton>
<hr />
<SuccessButton>Success</SuccessButton>
<SuccessButton disabled>Disabled</SuccessButton>
<hr />
<PrimaryButton>
  <span style={{color: "yellow"}}>Custom</span> Label
</PrimaryButton>
<PrimaryButton><ButtonIcon icon={"favorite"} />With icon</PrimaryButton>
<hr />
<Button
  unelevated
  ripple={false}
 >RMWC
</Button>
</>
```