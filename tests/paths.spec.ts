import { describe, expect, it } from 'vitest'
import { normalizePaths } from '../src'

const root = '/root'
const expectNormalized = (path: any) => expect(normalizePaths(root, path))

describe('normalizePaths', () => {
  it('it handles strings and arrays', () => {
    expectNormalized('/absolute/**/*.js')
      .toEqual(['/absolute/**/*.js'])

    expectNormalized('relative/**/*.vue')
      .toEqual(['/root/relative/**/*.vue'])

    expectNormalized(['/absolute/**/*.js', 'relative/**/*.vue'])
      .toEqual(['/absolute/**/*.js', '/root/relative/**/*.vue'])
  })
})
