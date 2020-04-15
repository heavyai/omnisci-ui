Standard

```js
import { SimpleListItem } from "@rmwc/list"
const initialState = {
  selected: "Cookies"
}

const options = ["Cookies", "Pizza", "Ice Cream"]
const listItems = options.map((option, i) => (
  <SimpleListItem
    text={option}
    selected={state.selected === option}
    onClick={() => setState({ selected: option })}
    key={i}
  />
))
;<List>{listItems}</List>
```

Compact

```js
import { SimpleListItem } from "@rmwc/list"

const initialState = {
  selected: "Cookies"
}

const options = ["Cookies", "Pizza", "Ice Cream"]
const listItems = options.map((option, i) => (
  <SimpleListItem
    text={option}
    selected={state.selected === option}
    onClick={() => setState({ selected: option })}
    key={i}
  />
))
;<List compact>{listItems}</List>
```

Extra compact

```js
import { SimpleListItem } from "@rmwc/list"

const initialState = {
  selected: "Cookies"
}

const options = ["Cookies", "Pizza", "Ice Cream"]
const listItems = options.map((option, i) => (
  <SimpleListItem
    text={option}
    selected={state.selected === option}
    onClick={() => setState({ selected: option })}
    key={i}
  />
))
;<List extraCompact>{listItems}</List>
```
