# Microfrontends in Vite - POC

this repo is a poc implementation to see if the following points are possible

- [x] use shared ui
- [x] share state between apps
- [x] render react in vue
- [x] render vue in vue
- [x] use nested routing with vue/react
- [ ] use error boundaries
- [x] configure turborepo as monorepo
- [x] configure prod/dev build environment
- [ ] azure deployment

```
// install all dependencies
pnpm i

// launche local development
pnpm dev

// serve react (required for dev)
cd apps/react-remote && pnpm build && pnpm preview
cd apps/vue-remote && pnpm build && pnpm preview
```
