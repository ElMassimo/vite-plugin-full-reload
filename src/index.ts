import { relative } from 'path'
import { green, dim } from 'chalk'
import { watch } from 'chokidar'

import type { WatchOptions } from 'chokidar'
import type { Plugin, ViteDevServer } from 'vite'

/**
 * Configuration for the watched paths.
 */
interface Config extends WatchOptions {
  /**
   * Whether full reload should happen regardless of the file path.
   * @default true
   */
  always?: boolean

  /**
   * Whether to log when a file change triggers a full reload.
   * @default true
   */
  log?: boolean

  /**
   * Files will be resolved against this path.
   * @default process.cwd()
   */
  root?: string
}

/**
 * Allows to automatically reload the page when a watched file changes.
 */
export default (paths: string | string[], config: Config = {}): Plugin => ({
  name: 'vite-plugin-full-reload',

  configureServer ({ ws, config: { logger } }: ViteDevServer) {
    const { root = process.cwd(), log = true, always = true, ...watchOptions } = config

    const reload = (path: string) => {
      ws.send({ type: 'full-reload', path: always ? '*' : path })
      if (log)
        logger.info(`${green('page reload')} ${dim(relative(root, path))}`, { clear: true, timestamp: true })
    }

    watch(paths, { cwd: root, ignoreInitial: true, ...watchOptions })
      .on('add', reload)
      .on('change', reload)
  },
})
