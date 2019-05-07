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
    Open Danger Modal
  </Button>
  <Button unelevated onClick={() => setState({isOpen: true, type: "warning"})}>
    Open Warning Modal
  </Button>
  <Button unelevated onClick={() => setState({isOpen: true, type: "success"})}>
    Open Success Modal
  </Button>
  <Button unelevated onClick={() => setState({isOpen: true, type: null})}>
    Open Standard Modal
  </Button>
</>
```