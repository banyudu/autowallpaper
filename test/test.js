'use strict'

const aw = require('..')
describe('Wallpaper', () => {
  describe('wallpapers', () => {
    it('should accept string', () => {
      aw.run('/tmp/a', 5)
    })
  })
})
