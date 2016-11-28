

### Links
Links are components that functions as `<a href='route'></a>` tags.  To use
them, use `<Link to='/route'></Link>` in a component.  Remember to import
`Link` from 'react-router'.

#### Example
```js
// ...
import { Link } from 'react-router'

// .. in App
<Link to='/route'>link_name</Link>
```

### "Composing" Views
There are certain components that contains other components.  For example, a
navbar or a footer.  

One approach is to just create a header, footer component and add it to every
route component we're using.  That's a lot of repetition.

React-router lets us do that by nesting `<Routes>`.  

**Note**: Be sure to add `{this.props.children}` to the wrapper component
(our App).  Router inserts the inner component, so we can render the inside of
the component with `{this.props.children}`, without knowing the specific
component name.

#### Example
```js
// index.js
// ...
render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      {/* make them children of 'App' */}
      <Route path='/about' component={About} />
      <Route path='/repos' component={Repos} />
    </Route>
  </Router>),
  document.getElementById('app')
)
```

```js
// App.js
// ...
render() {
  return (
    <div>Hello, React Router!
      <ul role="nav">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/repos">Repos</Link></li>
      </ul>
      {/* render the child components in App, which comes from Render */}
      {this.props.children}
    </div>
  )
```
