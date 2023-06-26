export const genres = [
  'Action',
  'Adult',
  'Adventure',
  'Comedy',
  'Drama',
  'Ecchi',
  'Fantasy',
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

const toCapitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const genresCheckBoxDiv = document.getElementById('genres-checkbox-div')
const row = genresCheckBoxDiv.children[0]
const generateGenre = () => {
  genres.forEach((genre) => {
    // create a column with a span of 2 for each genre
    const colspan3 = document.createElement('div')
    colspan3.classList.add('col-3')

    // create an input checkbox for each genre
    const inputbox = document.createElement('input')
    inputbox.className = 'form-check-input'
    inputbox.type = 'checkbox'
    inputbox.name = genre

    // create an label for each genre
    const label = document.createElement('label')
    label.classList.add('form-check-label', 'me-3')
    label.for = toCapitalize(genre)
    label.innerHTML = genre

    // insert genre input and label into the created div element '.col-3'
    // then append to the div #genres-checkbox-div
    colspan3.append(inputbox, label)
    row.append(colspan3)
  })
}
generateGenre()
// export default genres
