const genres = [
  'Action',
  'Adult',
  'Adventure',
  'Comedy',
  'Drama',
  'Ecchi',
  'Fantasy',
  'Gender Bender',
  'Harem',
  'Historical',
  'Horror',
  'Josei',
  'Martial Arts',
  'Mature',
  'Mecha',
  'Mystery',
  'Psychological',
  'Romance',
  'School Life',
  'Sci-fi',
  'Seinen',
  'Shoujo',
  'Shoujo Ai',
  'Shounen',
  'Shounen Ai',
  'Slice of Life',
  'Smut',
  'Sports',
  'Supernatural',
  'Tragedy',
  'Wuxia',
  'Xianxia',
  'Xuanhuan',
  'Yaoi',
  'Yuri',
]

const path = require('path')
const fs = require('fs')

try {
  const uploadPath = path.join(__dirname, '../src/data/uploads/korea/')

  genres.forEach((genre) => {
    if (!fs.existsSync(`${uploadPath}${genre}`)) {
      fs.mkdirSync(`${uploadPath}${genre}`)
    }
  })
} catch (err) {
  console.error(err)
}
