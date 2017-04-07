'use strict'

const aw = require('..')
describe('Wallpaper', () => {
  describe('wallpapers', () => {
    it('should accept empty array', () => {
      aw.run([], 5)
    })
    it('should accept string', () => {
      aw.run('/tmp/a', 5)
    })
    it('should accept array', () => {
      aw.run(['/tmp/a', '/tmp/b'], 5)
    })
  })
})
