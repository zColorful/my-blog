---
title: "学习VitePress1"
editLink: true
---

# {{ $frontmatter.title }}

## 学习 vite-press

![vue](https://v3.cn.vuejs.org/logo.png)

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

:smirk:

:hankey:

[所有表情包地址](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

[[toc]]

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log("Hello, VitePress!");
```

:::

```js
export default {
  name: "MyComponent",
  // ...
};
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

```css{1-2}
* {
  margin: 0;
  padding: 0;
}
```

<!-- 导入代码片段 -->

<<< @/index.md

![vue](/favicon.ico)

```js
<script setup>
  {{ 1 + 1 }}
</script>
```

```html
<span v-for="i in 3">{{ i }}</span>
```

<script setup>
import CustomComponent from '../../components/CustomComponent.vue'
</script>

# Docs

This is a .md using a custom component

<CustomComponent />

## More docs

<VueClickAway />

```json
{
  "workbench.colorTheme": "One Dark Pro Mix",
  "editor.fontSize": 15,
  "editor.lineHeight": 1.9,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.renderWhitespace": "all",
  "editor.rulers": [],
  "editor.lineNumbers": "interval",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",
  "editor.wordWrap": "on",
  "workbench.iconTheme": "vscode-icons",
  "workbench.editor.limit.value": 5,
  "prettier.tabWidth": 2,
  "prettier.singleQuote": true,
  "prettier.semi": false,
  "prettier.eslintIntegration": true,
  "markdown.preview.doubleClickToSwitchToEditor": true,
  "importCost.smallPackageSize": 50,
  "importCost.mediumPackageSize": 100,
  "sync.autoUpload": false,
  "sync.removeExtensions": true,
  "[jsonc]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "sync.forceUpload": false,
  "[vue]": {
    "editor.defaultFormatter": "Vue.volar"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": false
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[typescript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[json]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "Wscats.eno"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[postcss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[less]": {
    "editor.defaultFormatter": "vscode.css-language-features"
  },
  "explorer.confirmDelete": false,
  "files.associations": {
    "*.html": "html",
    "*.css": "css"
  },
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
  "files.autoSave": "onFocusChange",
  "files.insertFinalNewline": false,
  "prettier.trailingComma": "none",

  "scss.lint.unknownAtRules": "ignore",
  "editor.cursorSmoothCaretAnimation": true,
  "editor.quickSuggestions": {
    "strings": true
  },
  "css.validate": false,
  "cSpell.userWords": ["esbenp", "unref"],
  "github.copilot.enable": {
    "*": true,
    "yaml": false,
    "plaintext": false,
    "markdown": true,
    "vue": false
  },
  "kite.showWelcomeNotificationOnStartup": false,
  "git.confirmSync": false,
  "editor.inlineSuggest.enabled": true,
  "npm.keybindingsChangedWarningShown": true,
  "vsicons.dontShowNewVersionMessage": true,
  "editor.unicodeHighlight.allowedCharacters": {
    " ": true
  },
  "workbench.startupEditor": "none",
  "prettier.requireConfig": true,
  "prettier.bracketSameLine": true,
  "prettier.enable": true,
  "prettier.jsxSingleQuote": true,
  "search.followSymlinks": false
}
```
