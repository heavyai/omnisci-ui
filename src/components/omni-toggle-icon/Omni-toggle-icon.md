```js
<OmniToggleIcon
  iconOn="favorite"
  iconOff="favorite_border"
/>

<OmniToggleIcon
  iconOff={
    <div style={{
        background: "lime",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
      }}
    />
  }
  iconOn={
    <div style={{
        background: "red",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
      }}
    />
  }
/>

```