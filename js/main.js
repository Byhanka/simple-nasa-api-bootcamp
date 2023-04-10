//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// worked with house Hayden

let iframe = document.querySelector('iframe');
let image = document.querySelector('img');

function spacePicture(){
    let moon = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=8XhBlnNzyIcdxcq6dzZahKq6Qu8ITQZeJHyBcFRv&date=${moon}`
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h1').innerText = data.date
      document.querySelector('h2').innerText = data.title
      document.querySelector('h3').innerText = data.explanation
      if(data.media_type === 'image'){
        image.src = data.url
        image.classList.remove('hidden')
        iframe.classList.add('hidden')
      } else if (data.media_type === 'video'){
        iframe.src = data.url
        image.classList.add('hidden')
        iframe.classList.remove('hidden')
      } else {
        console.log('unknown media type', data.media_type)
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
});
}
document.querySelector('button').addEventListener('click', spacePicture)
