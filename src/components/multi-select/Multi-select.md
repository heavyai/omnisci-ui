```js
initialState = {
  label: "Standard",
  value: null, 
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
};

<MultiSelect
  isClearable
  options={state.options}
  value={state.value}
  placeholder={state.label}
  onChange={(e) => setState({ value: e })}
/>
```

```js
initialState = {
  label: "Multiple select",
  value: null, 
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
};

<MultiSelect
  isMulti
  isClearable
  options={state.options}
  value={state.value}
  placeholder={state.label}
  onChange={(e) => setState({ value: e })}
/>
```