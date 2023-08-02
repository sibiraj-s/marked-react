# CHANGELOG

All notable changes to this project will be documented in this file.

> **Tags**
>
> - Features
> - Bug Fixes
> - Performance Improvements
> - Dependency Updates
> - Breaking Changes
> - Enhancements
> - Documentation
> - Internal

## v2.0.0 (2023-08-02)

#### Features

- update marked to v6.0.0 ([82f6141](https://github.com/sibiraj-s/marked-react/commit/82f6141))
- remove types/marked dependency ([82f6141](https://github.com/sibiraj-s/marked-react/commit/82f6141))

## v1.4.0 (2023-07-03)

#### Bug Fixes

- remove deprecated defaultProps ([31ae07d](https://github.com/sibiraj-s/marked-react/commit/31ae07d))

#### Features

- export ReactParser and ReactRenderer ([4646dde](https://github.com/sibiraj-s/marked-react/commit/4646dde))

#### Internal

- add npm package provenance ([223af24](https://github.com/sibiraj-s/marked-react/commit/223af24))

## v1.3.2 (2022-12-29)

#### Bug Fixes

- disable sourcemaps ([3e1edfd](https://github.com/sibiraj-s/marked-react/commit/3e1edfd))

## v1.3.1 (2022-10-25)

#### Bug Fixes

- fix alignment in table cells ([2552244](https://github.com/sibiraj-s/marked-react/commit/2552244))

#### Dependency Updates

- update marked to v4.1.1 ([33ea78a](https://github.com/sibiraj-s/marked-react/commit/33ea78a))
- update typescript to v4.8.4 ([f8bef5c](https://github.com/sibiraj-s/marked-react/commit/f8bef5c))
- update rollup to v3 ([df6cb0e](https://github.com/sibiraj-s/marked-react/commit/df6cb0e))

## v1.3.0 (2022-08-30)

#### Features

- port to typescript ([40630ca](https://github.com/sibiraj-s/marked-react/commit/40630ca))
- fix ReactRenderer types ([c9be9fb](https://github.com/sibiraj-s/marked-react/commit/c9be9fb))

## v1.2.0 (2022-07-16)

#### Features

- support parsing inline markdown ([08dbf23](https://github.com/sibiraj-s/marked-react/commit/08dbf23))

## v1.1.2 (2022-05-28)

#### Bug Fixes

- fix compat with new ts@4.7's node16 resolution ([e8937d8](https://github.com/sibiraj-s/marked-react/commit/e8937d8))

## v1.1.1 (2022-05-07)

#### Bug Fixes

- fix renderer types ([53a2ed2](https://github.com/sibiraj-s/marked-react/commit/53a2ed2))

## v1.1.0 (2022-04-01)

#### Features

- add support for react 18 ([f4f5779](https://github.com/sibiraj-s/marked-react/commit/f4f5779))

## v1.0.3 (2022-02-03)

#### Dependency Updates

- update marked to v4.0.12 ([95f1ddc](https://github.com/sibiraj-s/marked-react/commit/95f1ddc))
- update devDependencies ([f91563b](https://github.com/sibiraj-s/marked-react/commit/f91563b))

## v1.0.2 (2022-01-07)

#### Dependency Updates

- update marked to v4.0.10 ([c91ec6b](https://github.com/sibiraj-s/marked-react/commit/c91ec6b))
- update devDependencies ([3cecace](https://github.com/sibiraj-s/marked-react/commit/3cecace))

#### Internal

- update LICENSE ([98e2357](https://github.com/sibiraj-s/marked-react/commit/98e2357))

## v1.0.1 (2022-01-07)

#### Bug Fixes

- make `value` and `renderer` optional in typings ([861bc25](https://github.com/sibiraj-s/marked-react/commit/861bc25))

#### Dependency Updates

- update marked to v4.0.9 ([2951a34](https://github.com/sibiraj-s/marked-react/commit/2951a34))

## v1.0.0 (2021-11-21)

#### Dependency Updates

- update marked to v4.0.4 ([bcc5e0b](https://github.com/sibiraj-s/marked-react/commit/bcc5e0b))

## v0.3.0 (2021-11-02)

#### Dependency Updates

- update marked to v4 ([60be0d5](https://github.com/sibiraj-s/marked-react/commit/60be0d5))

## v0.2.1 (2021-10-30)

#### Bug Fixes

- prevent renderer from invoking element factory ([2a9c7c6](https://github.com/sibiraj-s/marked-react/commit/2a9c7c6))
- increment internal element id with renderer invokation ([c4e2139](https://github.com/sibiraj-s/marked-react/commit/c4e2139))

#### Enhancements

- improve trees haking with webpack ([cce1ed6](https://github.com/sibiraj-s/marked-react/commit/cce1ed6))

#### Documentation

- add examples for syntax highlighting in code blocks ([4d4f10b](https://github.com/sibiraj-s/marked-react/commit/4d4f10b))
- deploy demo to Github pages ([5ab9f86](https://github.com/sibiraj-s/marked-react/commit/5ab9f86))

## v0.2.0 (2021-10-29)

#### Features

- render inline items inside heading ([52f9e4f](https://github.com/sibiraj-s/marked-react/commit/52f9e4f))
- support custom renderer ([a082d26](https://github.com/sibiraj-s/marked-react/commit/a082d26))
- add `marked` to dependencies ([9529896](https://github.com/sibiraj-s/marked-react/commit/9529896))

#### Bug Fixes

- fix joining URL's with relative paths ([fece177](https://github.com/sibiraj-s/marked-react/commit/fece177))

#### Performance Improvements

- don't create components for plain strings ([755c7af](https://github.com/sibiraj-s/marked-react/commit/755c7af))

#### Breaking Changes

- options are now direct props of `Markdown` component ([5b8b370](https://github.com/sibiraj-s/marked-react/commit/5b8b370))

## v0.1.2 (2021-10-27)

#### Features

- render task list with gfm enabled ([43acef4](https://github.com/sibiraj-s/marked-react/commit/43acef4))

## v0.1.1 (2021-10-27)

#### Features

- render images inside links ([fd3603b](https://github.com/sibiraj-s/marked-react/commit/fd3603b))

## v0.1.0 (2021-10-27)

- Initial Release. React component for markdown.
