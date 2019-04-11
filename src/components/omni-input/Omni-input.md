Standard text input
```js
initialState = {
  label: "Standard",
  value: null
};
<OmniInput
  label={state.label}
  value={state.value}
  onInputChange={(value) => setState({ value })}
/>
```

```js
initialState = {
  label: "Number",
  value: null
};
<OmniInput
  label={state.label}
  value={state.value}
  type="number"
  onInputChange={(value) => setState({ value })}
/>
```

```js
initialState = {
  label: "Icons",
  value: null
};
<OmniInput
  label={state.label}
  value={state.value}
  onInputChange={(value) => setState({ value })}
  icon="search"
  trailingIcon="close"
/>
```

```js
initialState = {
  label: "Textarea",
  value: null
};
<OmniInput
  label={state.label}
  value={state.value}
  onInputChange={(value) => setState({ value })}
  isTextarea={true}
/>
```

```js
initialState = {
  label: "Disabled",
  value: null
};
<OmniInput
  label={state.label}
  value={state.value}
  isDisabled={true}
  onInputChange={(value) => setState({ value })}
/>
```

```js
initialState = {
  label: "Invalid",
  value: null
};
<OmniInput
  label={state.label}
  value={state.value}
  isInvalid={true}
  onInputChange={(value) => setState({ value })}
/>
