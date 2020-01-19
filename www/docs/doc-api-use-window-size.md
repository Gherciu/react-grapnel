---
id: doc-api-use-window-size
title: useWindowSize
sidebar_label: useWindowSize
---

This hook returns an object containing the window's width and height. If executed server-side (no window object) the value of width and height will be undefined.

- It can be used directly from `react-grapnel` package or installed separately via npm runing: `npm i react-grapnel-use-window-size`

```jsx
import React from 'react'
import useWindowSize from 'react-grapnel-use-window-size'

const App = () => {
  const { width, height } = useWindowSize()
  return (
    <div>
      <span>Window width: {width}</span>
      <span>Window height: {height}</span>
    </div>
  )
}
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/react-grapnel-use-window-size@latest/build/index.js"></script>
<script>
  const App = () => {
    const { width, height } = reactGrapnelUseWindowSize()
    return (
      <div>
        <span>Window width: {width}</span>
        <span>Window height: {height}</span>
      </div>
    )
  }
</script>
```
