```js
import { SimpleDangerDialog } from "./Dialog"
import { Button } from "@rmwc/button";

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

<Button
  unelevated
  onClick={() => setState({isOpen: true})}
  label={"Open Danger Dialog"}
/>
</>
```

```js
import { SimpleWarningDialog } from "./Dialog"
import { Button } from "@rmwc/button";

initialState = {
  isOpen: false,
  lastAction: null
};

<>
<SimpleWarningDialog
  title={"Important title"}
  primaryLabel={"Do it"}
  secondaryLabel={"Cancel"}
  message={"This is a warning"}
  open={state.isOpen}
  onClose={action => {
    setState({isOpen: false, lastAction: action})
  }}
/>

<Button
  unelevated
  onClick={() => setState({isOpen: true})}
  label={"Open Warning Dialog"}
/>
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
import { Button } from "@rmwc/button";

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

<Button
  unelevated
  onClick={() => setState({isOpen: true})}
  label={"Open Danger Dialog"}
/>
</>
```

```js
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton
} from "@rmwc/dialog";
import { Button } from "@rmwc/button";
import { IconButton } from "@rmwc/icon-button";
import { Icon } from "@rmwc/icon";

initialState = {
  isOpen: false,
  type: "danger"
};
<>
  <Dialog
    className={state.type}
    open={state.isOpen}
    onClose={evt => {
      setState({isOpen: false})
    }}
  >
    <DialogTitle>
      Dialog title
      <IconButton
        icon="close"
        onClick={evt => {
          setState({isOpen: false})
        }}
      />
    </DialogTitle>
    <DialogContent>
      { ["danger", "warning"].includes(state.type) && (
        <Icon icon="warning_outline"/>
      )}
      { state.type === "success" && (
        <Icon icon="check_circle_outline"/>
      )}
      <div className="dialog-message">
        This is a {state.type} dialog. 
      </div>
    </DialogContent>
    <DialogActions>
      <DialogButton theme="secondary" action="close">Cancel</DialogButton>
      <DialogButton unelevated action="accept" isDefaultAction>
        Do it
      </DialogButton>
    </DialogActions>
  </Dialog>

  <Button unelevated onClick={() => setState({isOpen: true, type: "danger"})}>
    Open Danger Dialog
  </Button>
  <Button unelevated onClick={() => setState({isOpen: true, type: "warning"})}>
    Open Warning Dialog
  </Button>
  <Button unelevated onClick={() => setState({isOpen: true, type: "success"})}>
    Open Success Dialog
  </Button>
  <Button unelevated onClick={() => setState({isOpen: true, type: null})}>
    Open Standard Dialog
  </Button>
</>
```