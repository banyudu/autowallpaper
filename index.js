'use strict'

const wallpaper = require('wallpaper')

class AutoWallpaper {
  run (papers, interval) {
    if (!Array.isArray(papers)) {
      papers = [ papers ]
    }
    if (papers.length === 0) {
      return
    }
    let lastIndex = null
    setInterval(() => {
      let index = 0
      while (papers.length > 1 && index === lastIndex) {
        index = Math.floor(Math.random() * (papers.length))
      }
      lastIndex = index
      let file = papers[index]
      console.log('index: ', index)
      console.log('file: ', file)
      wallpaper.set(file)
    }, interval)
  }
}
const AW = new AutoWallpaper()
module.exports = AW
