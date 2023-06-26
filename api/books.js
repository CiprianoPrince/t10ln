'use strict'

const urlToFile = (url) => {
  const urlArray = url.split(',')
  const urlData = urlArray[1]

  const stringData = atob(urlData)
  let stringDataCharNum = stringData.length
  const arrayData = new Uint8Array(stringDataCharNum)
  while (stringDataCharNum--) {
    arrayData[stringDataCharNum] = stringData.charCodeAt(stringDataCharNum)
  }
  return arrayData
}

const convertImageSize = (imageFile, desiredWidth) => {
  return new Promise((resolve, reject) => {
  const imgFileName = imageFile.name
  const imgFileType = imageFile.type

  const reader = new FileReader()
  reader.readAsDataURL(imageFile)

  reader.onload = (readerEvent) => {
    const img = document.createElement('img')
    img.src = readerEvent.target.result

    img.onload = (imgEvent) => {
      const aspectRadio = desiredWidth / imgEvent.target.width
      const canvas = document.createElement('canvas')
      // canvas.width = desiredWidth
      // canvas.height = imgEvent.target.height * aspectRadio
      canvas.width = 150
      canvas.height = 200
      const context = canvas.getContext('2d')
      context.drawImage(img, 0, 0, 150, 200)
      const newImgUrl = context.canvas.toDataURL(imgFileType, 90)

      const imgEl = document.getElementById('img')
      imgEl.src = newImgUrl

      const blobData = urlToFile(newImgUrl)
      const newFile = new File([blobData], imgFileName, { type: imgFileType })
      console.log(newFile)

      resolve(newFile)
    }
  }
  })
}
// this is form element
const addNovelForm = document.getElementById('novel-form')
addNovelForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  // get the values from the form #novel-form
  const novelFormData = new FormData(addNovelForm)

  const imgFile = novelFormData.get('cover')

  const newImgFile = await convertImageSize(imgFile, 150)
  novelFormData.set('cover', newImgFile)

  const response = await fetch('http://127.0.0.1:3000/upload', {
    method: 'POST',
    body: novelFormData,
  })

  const result = await response.json()

  if (localStorage.getItem('novels')) {
    const novels = JSON.parse(localStorage.getItem('novels'))
    const newNovelDatas = [result, ...novels]
    localStorage.setItem('novels', JSON.stringify(newNovelDatas))
  } else {
    localStorage.setItem('novels', JSON.stringify(result))
  }
})
