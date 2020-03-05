```js
initialState = {
  label: "Standard",
  value: null, 
  options: new Array(200).fill(0).map((d, i) => ({label: i, value: i}))
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

```js
<MultiSelect
  isDisabled
  placeholder={"Disabled"}
/>
```

```js
initialState = {
  label: "Error",
  value: {label: 2, value: 2}, 
  options: new Array(200).fill(0).map((d, i) => ({label: i, value: i}))
};

<MultiSelect
  isClearable
  hasError
  options={state.options}
  value={state.value}
  placeholder={state.label}
  onChange={(e) => setState({ value: e })}
/>
```

```js
initialState = {
  label: "Required",
  value: {label: 2, value: 2}, 
  options: new Array(200).fill(0).map((d, i) => ({label: i, value: i}))
};

<MultiSelect
  isClearable
  isRequired
  options={state.options}
  value={state.value}
  placeholder={state.label}
  onChange={(e) => setState({ value: e })}
/>
```

```js
initialState = {
  placeholder: "placeholder text, no label",
  value: null, 
  options: new Array(200).fill(0).map((d, i) => ({label: i, value: i}))
};

<MultiSelect
  noLabel
  options={state.options}
  value={state.value}
  placeholder={state.placeholder}
  onChange={(e) => setState({ value: e })}
/>
```

```js
initialState = {
  placeholder: "Custom menu, not searchable, loading icon",
  value: null
};

<MultiSelect
  placeholder={state.placeholder}
  isLoading
  isSearchable={false}
  value={state.value}
  components={{
    Menu: ({ innerRef, innerProps}) => (
      <div
        ref={innerRef}
        onMouseDown={(e) => {
          innerProps.onMouseDown(e)
          setState({ value: {label: "foo", value: "foo"} })
        }}
        style={{
          padding: "20px",
          background: "red",
          color: "white"
        }}
      >
      Custom menu
      </div>
    )
  }}
/>
```
```js
initialState = {
  placeholder: "Menu stays open",
  value: null, 
  options: new Array(3).fill(0).map((d, i) => ({label: i, value: i}))
};

<MultiSelect
  noLabel
  menuIsOpen
  options={state.options}
  value={state.value}
  placeholder={state.placeholder}
  onChange={(e) => setState({ value: e })}
/>
```
