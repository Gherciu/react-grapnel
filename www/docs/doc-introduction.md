---
id: doc-introduction
title: Introduction
sidebar_label: Introduction
---

⚓ `react-grapnel` is a set of useful React hooks

- Install: `npm i react-grapnel`

```jsx
import React from 'react'
import { useCounter } from 'react-grapnel'
// Or install needed hooks separately
// import useCounter from 'react-grapnel-use-counter'

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
<script src="https://cdn.jsdelivr.net/npm/react-grapnel@latest/build/index.js"></script>
<script>
  const App = () => {
    const { count, increment, decrement } = reactGrapnel.useCounter(0)
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
