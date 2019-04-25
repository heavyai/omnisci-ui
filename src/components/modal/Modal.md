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
  isOpen: false
};
<>
  <Dialog
    className="danger"
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
      <Icon icon="error_outline"/>
      This is a danger dialog.
      This is a danger dialog.
      This is a danger dialog.
      This is a danger dialog.
      This is a danger dialog.
      This is a danger dialog.
      This is a danger dialog.
      This is a danger dialog.
      This is a danger dialog.
      This is a danger dialog.
      This is a danger dialog.
      This is a danger dialog.
    </DialogContent>
    <DialogActions>
      <DialogButton theme="secondary" action="close">Cancel</DialogButton>
      <DialogButton unelevated action="accept" isDefaultAction>
        Do it
      </DialogButton>
    </DialogActions>
  </Dialog>

  <Button unelevated onClick={() => setState({isOpen: true})}>
    Open Danger Modal
  </Button>
</>
```