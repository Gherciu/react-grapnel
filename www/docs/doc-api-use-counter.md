---
id: doc-api-use-counter
title: useCounter
sidebar_label: useCounter
---

A hook that tracks state of a number

- It can be used directly from `react-grapnel` package or installed separately via npm runing: `npm i react-grapnel-use-counter`

```jsx
import React from 'react'
import useCounter from 'react-grapnel-use-counter'

const App = () => {
  const { count, increment, decrement } = useCounter(0)
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/react-grapnel-use-counter@latest/build/index.js"></script>
<script>
  const App = () => {
    const { count, increment, decrement } = reactGrapnelUseCounter(0)
    return (
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    )
  }
</script>
```
