console.log('Client side Javascript file loaded')

// fetch('url').then(response => {
//   response.json().then(data => {
//     console.log(`Data :${data}`)
//   })
// })

weatherForm = document.querySelector('form')
search = document.querySelector('input')
messageOne = document.querySelector('#message-1')

weatherForm.addEventListener('submit', (e) => {
  
  e.preventDefault()

  console.log('Inside submit')
  fetch(`http://localhost:4000/weather`).then(response => {
    console.log('Inside fetch :::', response.json())
    response.json().then(data => {
      console.log(`Data :${JSON.stringify(data)}`)
      messageOne.innerText = data.forecast
    })
  })
})