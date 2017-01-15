const AutoWallpaper = require('..')
describe('Wallpaper', () => {
  describe('class', () => {
    it('should has a constructor', () => {
      let aw = new AutoWallpaper([], 5)
      aw.run()
    })
  })

  describe('wallpapers', () => {
    it('should accept empty array', () => {
      let aw = new AutoWallpaper([], 5)
      aw.run()
    })
    it('should accept string', () => {
      let aw = new AutoWallpaper('/tmp/a', 5)
      aw.run()
    })
  })
})
