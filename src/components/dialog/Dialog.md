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
  onStateChange={e => console.log("state change", e)}
  onClose={buttonLabel => {
    setState({isOpen: false, lastAction: buttonLabel})
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
  onClose={buttonLabel => {
    setState({isOpen: false, lastAction: buttonLabel})
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
  onClose={buttonLabel => {
    setState({isOpen: false, lastAction: buttonLabel})
  }}
  onCloseFromHeader={buttonLabel => {
    console.log("closed from header")
    setState({isOpen: false, lastAction: buttonLabel})
  }}
/>

<WarningButton
  unelevated
  onClick={() => setState({isOpen: true})}
>
  Open Dialog with Close Callback
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
  onClose={buttonLabel => {
    setState({isOpen: false, lastAction: buttonLabel})
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
  onClose={buttonLabel => {
    setState({isOpen: false, lastAction: buttonLabel})
  }}
/>

<PrimaryButton
  unelevated
  onClick={() => setState({isOpen: true})}
>
Open info Dialog
</PrimaryButton>
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
  hideCloseIcon
  title={"Title"}
  primaryLabel={"Do it"}
  secondaryLabel={"Cancel"}
  message={"This is an info dialog without a close X icon"}
  open={state.isOpen}
  onClose={buttonLabel => {
    setState({isOpen: false, lastAction: buttonLabel})
  }}
/>

<PrimaryButton
  unelevated
  onClick={() => setState({isOpen: true})}
>
Open Dialog without X to close
</PrimaryButton>
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
  hideCloseIcon
  title={"Title"}
  primaryLabel={"Do it"}
  secondaryLabel={"Cancel"}
  open={state.isOpen}
  onClose={buttonLabel => {
    setState({isOpen: false, lastAction: buttonLabel})
  }}
>
<div>
  This is an info dialog with custom content, <br />
  Here is a button:  
  <PrimaryButton
    unelevated
  >
  Button
  </PrimaryButton>
</div>
</SimpleInfoDialog>

<PrimaryButton
  unelevated
  onClick={() => setState({isOpen: true})}
>
Open Dialog with custom content
</PrimaryButton>
</>
```

```js
import { SimpleInfoDialog } from "./Dialog"
import { PrimaryButton, SecondaryButton } from "../button/Button"

initialState = {
  isOpen: false,
  lastAction: null
};

<>
<SimpleInfoDialog
  title={"Title"}
  footer={
    <>
      <div>A custom message</div>
      <PrimaryButton
        onClick={() => setState({isOpen: false, lastAction: "Apply"})}
      >
      Ok
      </PrimaryButton>
    </>
  }
  message={"This is an info dialog with custom footer"}
  open={state.isOpen}
  onClose={buttonLabel => {
    setState({isOpen: false, lastAction: buttonLabel})
  }}
/>

<PrimaryButton
  unelevated
  onClick={() => setState({isOpen: true})}
>
Open Dialog with custom footer
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
  onClose={e => {
    setState({isOpen: false})
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

```js
import { SimpleDialog } from "./Dialog"
import { PrimaryButton } from "../button/Button"

initialState = {
  isOpen: false,
  lastAction: null
};

<>
<SimpleDialog
  title={"Title"}
  primaryLabel={"Do it"}
  secondaryLabel={"Cancel"}
  message={"This is a generic dialog"}
  open={state.isOpen}
  onClose={buttonLabel => {
    setState({isOpen: false, lastAction: buttonLabel})
  }}
/>

<PrimaryButton
  unelevated
  onClick={() => setState({isOpen: true})}
>
Open generic Dialog
</PrimaryButton>
</>
```