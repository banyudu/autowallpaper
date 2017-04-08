'use strict'

const wallpaper = require('wallpaper')
const fs = require('fs')
const _ = require('lodash')
const path = require('path')

class AutoWallpaper {
  run (dir, interval) {
    if (typeof dir !== 'string' || typeof interval !== 'number') {
      console.warn('Invalid arguments')
      return
    }
    let lastPaper = null
    setInterval(() => {
      try {
        if (!fs.existsSync(dir) || !fs.lstatSync(dir).isDirectory()) {
          console.warn(`${dir} not exists or is not a directory`)
          return
        }
        const files = fs.readdirSync(dir)
        const papers = _.filter(files, (file) => { return /\.(png|jpe?g|gif)$/i.test(file) })
        let index = 0
        while (papers.length > 1 && papers[index] === lastPaper) {
          index = Math.floor(Math.random() * (papers.length))
        }
        lastPaper = papers[index]
        wallpaper.set(path.join(dir, papers[index]))
      } catch (error) {
        console.error(error)
      }
    }, interval)
  }
}
const AW = new AutoWallpaper()
module.exports = AW
