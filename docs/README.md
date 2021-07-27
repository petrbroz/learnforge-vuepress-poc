# Hello Forge

## Markdown

Here's some nice little Markdown features that VuePress provides

### Show/Hide Details

::: details Click me to view the code
```js
console.log('Hello, VuePress!')
```
:::

### Alerts

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block
:::

### Code Switcher

<CodeSwitcher :languages="{js:'JavaScript',ts:'TypeScript'}">
<template v-slot:js>

```js
module.exports = function (str) {
    return typeof str === 'string' && str.trim() === str
}
```

</template>
<template v-slot:ts>

```ts
export default function isString (str: string) : str is string {
    return typeof str === 'string' && str.trim() === str
}
```

</template>
</CodeSwitcher>

### Abbreviations

In our tutorials we use plain HTML, CSS, and JavaScript.

*[HTML]: Hyper Text Markup Language
*[CSS]: Cascading Style Sheets
