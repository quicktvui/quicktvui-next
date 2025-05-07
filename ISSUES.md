# ISSUES

## [`Vue 3: resolveComponent can only be used in render() or setup()`](https://stackoverflow.com/questions/64231911/vue-3-resolvecomponent-can-only-be-used-in-render-or-setup)

```ts
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue: path.resolve('./node_modules/vue')
      }
    }
  }
}
```
