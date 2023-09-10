# lib-name

[![](https://img.shields.io/npm/v/lib-name?color=a1b858&label=npm)](https://www.npmjs.com/package/lib-name)
![](https://img.shields.io/badge/supports-vue%202%2F3-brightgreen)
[![](https://img.shields.io/npm/dependency-version/lib-name/vue-demi)](https://github.com/vueuse/vue-demi)

[Vue3 Demo](https://lvjiaxuan.github.io/lib-name)

[Vue2 Demo](https://lvjiaxuan.github.io/lib-name/vue2)

## Install

```sh
pnpm i lib-name
```

## Props

<!-- eslint-skip -->
```ts
props: {
  // ......
},
```

## Development

1. Install
```sh
pnpm i
pnpm pg:i
```

2. Confirm `playgrounds/vue3/src/App.vue`
```xml
<script setup lang="ts">
// For build
// import libName from 'lib-name'
import LibName from './../../../src'
// ...
```

3. Run the dev script
```sh
pnpm dev
```

### Preview vue 2/3

- `pnpm preview:3`
- `pnpm preview:2`