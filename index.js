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
    console.log('this.interval is: ', this.interval)
    console.log('this.papers is: ', this.papers)
    setInterval(() => {
      let index = Math.random() * (this.papers.length)
      console.log('index is: ', index, ', image is: ', this.papers[index])
      wallpaper.set(this.papers[index])
    }, this.interval)
  }
}

module.exports = AutoWallpaper
