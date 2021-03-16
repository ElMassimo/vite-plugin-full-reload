<h2 align='center'><samp>vite-plugin-full-reload</samp></h2>

<p align='center'>Automatically reload the page when files are modified</p>

<p align='center'>
  <a href='https://www.npmjs.com/package/vite-plugin-full-reload'>
    <img src='https://img.shields.io/npm/v/vite-plugin-full-reload?color=222&style=flat-square'>
  </a>
  <a href='https://github.com/ElMassimo/vite-plugin-full-reload/blob/main/LICENSE.txt'>
    <img src='https://img.shields.io/badge/license-MIT-blue.svg'>
  </a>
</p>

<br>

[vite-plugin-full-reload]: https://github.com/ElMassimo/vite-plugin-full-reload
[vite-plugin-live-reload]: https://github.com/arnoson/vite-plugin-live-reload
[Vite Ruby]: https://github.com/ElMassimo/vite_ruby
[JS From Routes]: https://github.com/ElMassimo/js_from_routes

## Installation 💿

Install the package as a development dependency:

```bash
npm i -D vite-plugin-full-reload # yarn add -D vite-plugin-full-reload
```

## Usage 🚀

Add it to your plugins in `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  plugins: [
    FullReload(['config/routes.rb', 'app/views/**/*'])
  ],
})
```

This is useful to trigger a page refresh for files that are not being imported, such as server-rendered templates.

## Background 📜

When using _[Vite Ruby]_, I wanted to see changes to server-rendered layout or template without having to manually reload the page.

Also, in _[JS From Routes]_ path helpers are generated when Rails reload is triggered.

Triggering a page reload when `config/routes.rb` is modified makes the DX very smooth.

## Acknowledgements

- <kbd>[vite-plugin-live-reload]</kbd>

  This is a nice plugin, I found it after quickly developing this one.

  I've made [two](https://github.com/arnoson/vite-plugin-live-reload/pull/3) [PRs](https://github.com/arnoson/vite-plugin-live-reload/pull/5) that are needed to support these use cases.

  If they are merged, this might become a "preset" of that library instead.

## License

This library is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
