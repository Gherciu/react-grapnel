<div align="center">
  <img width="200" height="200"
    src="https://raw.githubusercontent.com/Gherciu/react-grapnel/master/logo.png">
  <h1>react-grapnel-use-element-size</h1>
  <p>This hook returns an object containing the width and height of an element ref. Part of <a href="https://github.com/Gherciu/react-grapnel">react-grapnel</a> monorepo</p>
  <p>
    <a href="https://gherciu.github.io/react-grapnel/">Site</a>
    | <a href="https://gherciu.github.io/react-grapnel/docs/doc-introduction">Getting Started</a>
    | <a href="https://gherciu.github.io/react-grapnel/docs/doc-api-introduction">API</a>
    | <a href="https://gherciu.github.io/react-grapnel/blog/">Blog</a>
  </p>
</div>

[![GitHub](https://img.shields.io/github/license/Gherciu/react-grapnel)](https://github.com/Gherciu/react-grapnel/blob/master/LICENSE)
[![Multipack](https://img.shields.io/badge/Generated%20from-Gherciu%2Fmultipack-green)](https://github.com/Gherciu/multipack)

## Getting started

- It can be used directly from `react-grapnel` package or installed separately via npm runing: `npm i react-grapnel-use-element-size`

```js
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

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

#### Or you can sponsor via [Open Collective](https://opencollective.com/gherciu-gheorghe/)

[![Open Collective](https://opencollective.com/gherciu-gheorghe/tiers/sponsor.svg?avatarHeight=60)](https://opencollective.com/gherciu-gheorghe/)

## Author

**[@Gherciu/react-grapnel](https://github.com/Gherciu/react-grapnel)** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](https://github.com/Gherciu/react-grapnel/blob/master/LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/react-grapnel/contributors)).

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/react-grapnel)
