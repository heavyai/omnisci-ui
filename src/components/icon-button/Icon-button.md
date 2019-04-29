```js
import { IconButton } from "@rmwc/icon-button";
<>
<IconButton
  icon="favorite"
  onIcon="favorite_border"
/>

<IconButton
  icon={
    <div style={{
        background: "#0089D1",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
      }}
    />
  }
  onIcon={
    <div style={{
        background: "red",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
      }}
    />
  }
/>
</>
```