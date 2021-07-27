# Ahoj Forge

## Markdown

Tady je pár vlastností Markdownu, které nabízí VuePress

### Ukaž/skryj detaily

::: details Klikni pro více info
```js
console.log('Hello, VuePress!')
```
:::

### Upozornění

::: tip
Tohle je doporučení
:::

::: warning
Tohle je varování
:::

::: danger
Tohle je nebezpečné varování
:::

::: details
Toto je blok s detaily
:::

### Varianty kódu

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

### Zkratky

V našich tutoriálech používáme klasické HTML, CSS, and JavaScript.

*[HTML]: Hyper Text Markup Language
*[CSS]: Cascading Style Sheets
