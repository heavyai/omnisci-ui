```js
import { SimpleDangerDialog } from "./Dialog"
import { DangerButton } from "../button/Button"

initialState = {
  isOpen: false,
  lastAction: null
};

<>
<SimpleDangerDialog
  title={"Important title"}
  primaryLabel={"Do it"}
  secondaryLabel={"Cancel"}
  message={"This is an important message"}
  open={state.isOpen}
  onClose={action => {
    setState({isOpen: false, lastAction: action})
  }}
/>

<DangerButton
  unelevated
  onClick={() => setState({isOpen: true})}
>
Open Danger Dialog
</DangerButton>
</>
```

```js
import { SimpleWarningDialog } from "./Dialog"
import { WarningButton } from "../button/Button"

initialState = {
  isOpen: false,
  lastAction: null
};

<>
<SimpleWarningDialog
  title={"Important title"}
  primaryLabel={"Do it"}
  secondaryLabel={"Cancel"}
  message={"This is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warning"}
  open={state.isOpen}
  onClose={action => {
    setState({isOpen: false, lastAction: action})
  }}
/>

<WarningButton
  unelevated
  onClick={() => setState({isOpen: true})}
>
Open Warning Dialog
</WarningButton>
</>
```

```js
import { SimpleSuccessDialog } from "./Dialog"
import { SuccessButton } from "../button/Button"

initialState = {
  isOpen: false,
  lastAction: null
};

<>
<SimpleSuccessDialog
  title={"Title"}
  primaryLabel={"Do it"}
  secondaryLabel={"Cancel"}
  message={"This is a success"}
  open={state.isOpen}
  onClose={action => {
    setState({isOpen: false, lastAction: action})
  }}
/>

<SuccessButton
  unelevated
  onClick={() => setState({isOpen: true})}
>
Open Success Dialog
</SuccessButton>
</>
```

```js
import { SimpleInfoDialog } from "./Dialog"
import { PrimaryButton } from "../button/Button"

initialState = {
  isOpen: false,
  lastAction: null
};

<>
<SimpleInfoDialog
  title={"Title"}
  primaryLabel={"Do it"}
  secondaryLabel={"Cancel"}
  message={"This is an info"}
  open={state.isOpen}
  onClose={action => {
    setState({isOpen: false, lastAction: action})
  }}
/>

<PrimaryButton
  unelevated
  onClick={() => setState({isOpen: true})}
>
Open Success Dialog
</PrimaryButton>
</>
```

```js
import { DangerDialog } from "./Dialog"
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton
} from "@rmwc/dialog";
import { DangerButton } from "../button/Button"

initialState = {
  isOpen: false,
  lastAction: null
};

<>
<DangerDialog
  open={state.isOpen}
  onClose={action => {
    setState({isOpen: false, lastAction: action})
  }}
>
  <DialogTitle>
    Dialog title
  </DialogTitle>
    <DialogContent>
      This is dangerous. 
    </DialogContent>
    <DialogActions>
      <DialogButton
        unelevated
        ripple={false}
        className="danger"
        action="accept"
        isDefaultAction
      >
        Do it
      </DialogButton>
    </DialogActions>
</DangerDialog>

<DangerButton
  onClick={() => setState({isOpen: true})}
>
  Open Danger Dialog
</DangerButton>
</>
```