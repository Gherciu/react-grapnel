<div align="center">
  <img width="200" height="200"
    src="https://raw.githubusercontent.com/Gherciu/react-grapnel/master/logo.png">
  <h1>react-grapnel</h1>
  <p>⚓ A set of useful React hooks</p>
</div>

[![GitHub](https://img.shields.io/github/license/Gherciu/react-grapnel)](https://github.com/Gherciu/react-grapnel/blob/master/LICENSE)
[![Multipack](https://img.shields.io/badge/Generated%20from-Gherciu%2Fmultipack-green)](https://github.com/Gherciu/multipack)

## Getting started.

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

See more hooks in description below

#### State manipulation

- [useCounter](https://gherciu.github.io/react-grapnel/docs/doc-api-use-counter): A hook that tracks state of a number.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**[@Gherciu/react-grapnel](https://github.com/Gherciu/react-grapnel)** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](https://github.com/Gherciu/react-grapnel/blob/master/LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/react-grapnel/contributors)).

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/react-grapnel)
