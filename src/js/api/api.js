// import { genres } from '../genre/Genre.js'

// const addNovelForm = document.getElementById('novel-form')

// // convert to formdata to javascript object
// const convertFormDataToObject = (formdata) => {
//   const formdataObject = {}
//   formdata.forEach((value, key) => {
//     if (key == 'cover') console.log(value)

//     if (genres.includes(key)) {
//       if (!formdataObject.hasOwnProperty('genre')) {
//         formdataObject['genre'] = [key]
//         return
//       }
//       formdataObject.genre.push(key)
//       return
//     }
//     formdataObject[key] = value
//   })
//   return formdataObject
// }

// const submitNovelButtonEventListener = () => {
//   addNovelForm.addEventListener('submit', function (e) {
//     e.preventDefault()
//     // get the values from the form #novel-form
//     const novelFormData = new FormData(this)

//     const convertedData = convertFormDataToObject(novelFormData)

//     // post novel data to crud crud endpoint
//     const endpoint = `https://novels.free.beeceptor.com`
//     axios
//       .post(endpoint, convertedData, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//       .then((response) => {
//         console.log(response)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   })
// }

// export default submitNovelButtonEventListener
