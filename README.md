# vue3-manager

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## axios 问题

Axios 遭受了严重的供应链投毒攻击‌

攻击时间‌：2026年3月31日（UTC），对应北京时间约3月31日8:00–12:00。

‌受影响版本‌：

- axios@1.14.1
- axios@0.30.4

‌攻击方式‌：

- 攻击者‌劫持了 Axios 核心维护者 @jasonsaayman 的 npm 账号‌。
- 绕过正常的 CI/CD 发布流程，‌手动向 npm 仓库推送恶意版本‌。
- 在 Axios 包中注入‌虚假依赖 `plain-crypto-js@4.2.1‌`，该依赖无合法用途，仅用于执行恶意脚本。

恶意行为‌：

- 安装时自动触发 postinstall 脚本，下载并运行‌跨平台远程控制木马（RAT）‌。
- 支持 ‌Windows、macOS、Linux‌ 全平台感染。
- 执行后‌自毁痕迹‌，删除自身文件并替换为干净版本，难以事后发现。

```bash
npm install --ignore-scripts
```
