'use strict' 

const wallpaper = require('wallpaper')

class AutoWallpaper {
  constructor (papers, interval) {
    if (!Array.isArray(papers)) {
      papers = [papers]
    }
    this.papers = papers
    this.interval = interval
  }

  run () {
    setInterval(() => {
      let index = Math.random() * (this.papers.length)
      wallpaper.set(this.papers[index])
    }, this.interval)
  }
}

module.exports = AutoWallpaper
