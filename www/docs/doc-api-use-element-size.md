---
id: doc-api-use-element-size
title: useElementSize
sidebar_label: useElementSize
---

This hook returns an object containing the width and height of an element ref. If executed server-side (no window object) the value of width and height will be undefined.

- It can be used directly from `react-grapnel` package or installed separately via npm runing: `npm i react-grapnel-use-element-size`

```jsx
import React from 'react'
import useElementSize from 'react-grapnel-use-element-size'

const App = () => {
  const { elementRef, width, height } = useElementSize()
  return (
    <div ref={elementRef}>
      <span>elementRef width: {width}</span>
      <span>elementRef height: {height}</span>
    </div>
  )
}
```

Or use via cdn:

```html
<!--index.html-->
<script src="https://cdn.jsdelivr.net/npm/react-grapnel-use-element-size@latest/build/index.js"></script>
<script>
  const App = () => {
    const { elementRef, width, height } = reactGrapnelUseElementSize()
    return (
      <div ref={elementRef}>
        <span>elementRef width: {width}</span>
        <span>elementRef height: {height}</span>
      </div>
    )
  }
</script>
```
