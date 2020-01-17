```js
import { SimpleDangerDialog } from "./Dialog"
import { DangerButton } from "../button/Button"

initialState = {
  isOpen: false
};

<>
<SimpleDangerDialog
  title={"Important title"}
  primaryLabel={"Do it"}
  secondaryLabel={"Don't do it"}
  message={"This is an important message"}
  open={state.isOpen}
  onStateChange={e => console.log("state change", e)}
  primaryAction={ () => {
    setState({isOpen: false})
  }}
  secondaryAction={ () => {
    setState({isOpen: false})
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
  isOpen: false
};

<>
<SimpleWarningDialog
  title={"Important title"}
  message={"This is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warning"}
  open={state.isOpen}
  onClose={() => {
    setState({isOpen: false})
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
  isOpen: false
};

<>
<SimpleWarningDialog
  title={"Important title"}
  primaryLabel={"Do it"}
  secondaryLabel={"Cancel"}
  message={"This is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warningThis is a warning"}
  open={state.isOpen}
  primaryAction={ () => {
    console.log("primary action")
  }}
  secondaryAction={ () => {
    console.log("secondary action")
  }}
  onClose={() => {
    console.log("closed")
    setState({isOpen: false})
  }}
  onCloseFromHeader={() => {
    console.log("closed from header")
    setState({isOpen: false})
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
  isOpen: false
};

<>
<SimpleSuccessDialog
  title={"Title"}
  message={"This is a success"}
  open={state.isOpen}
  onClose={() => {
    setState({isOpen: false})
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
  isOpen: false
};

<>
<SimpleInfoDialog
  title={"Title"}
  message={"This is an info"}
  open={state.isOpen}
  onClose={() => {
    setState({isOpen: false})
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
  isOpen: false
};

<>
<SimpleInfoDialog
  hideCloseIcon
  title={"Title"}
  message={"This is an info dialog without a close X icon"}
  open={state.isOpen}
  onClose={() => {
    setState({isOpen: false})
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
  isOpen: false
};

<>
<SimpleInfoDialog
  hideCloseIcon
  title={"Title"}
  open={state.isOpen}
  onClose={() => {
    setState({isOpen: false})
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
  isOpen: false
};

<>
<SimpleInfoDialog
  title={"Title"}
  footer={
    <>
      <div>A custom message</div>
      <PrimaryButton
        onClick={() => setState({isOpen: false})}
      >
      Custom button
      </PrimaryButton>
    </>
  }
  message={"This is an info dialog with custom footer"}
  open={state.isOpen}
  onClose={() => {
    setState({isOpen: false})
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
  isOpen: false
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
  isOpen: false
};

<>
<SimpleDialog
  title={"Title"}
  message={"This is a generic dialog"}
  open={state.isOpen}
  onClose={() => {
    setState({isOpen: false})
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

```js
import { SimpleDialog } from "./Dialog"
import { PrimaryButton } from "../button/Button"

initialState = {
  isOpen: false
};

<>
<SimpleDialog
  message={"Dialog with a default button"}
  open={state.isOpen}
  onClose={() => {
    setState({isOpen: false})
  }}
/>

<PrimaryButton
  unelevated
  onClick={() => setState({isOpen: true})}
>
Open default buttons
</PrimaryButton>
</>
```

```js
import { SimpleDialog } from "./Dialog"
import { PrimaryButton } from "../button/Button"

initialState = {
  isOpen: false
};

<>
<SimpleDialog
  message={"Dialog with a default button"}
  open={state.isOpen}
  primaryAction={ () => {
    console.log("primary action")
    setState({isOpen: false})
  }}
  secondaryAction={ () => {
    console.log("secondary action")
    setState({isOpen: false})
  }}
/>

<PrimaryButton
  unelevated
  onClick={() => setState({isOpen: true})}
>
Open action callbacks
</PrimaryButton>
</>