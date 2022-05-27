document.body.addEventListener('keyup', event => {
  playSound(event.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click', () => {
  let song = document.querySelector('#input').value

  if (song !== '') {
    let songArry = song.split('')
    playComposition(songArry)
  }
})

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`)
  /* template string = ` ` */
  let keyElement = document.querySelector(`div[data-key="${sound}"]`)

  if (audioElement) {
    audioElement.currentTime = 0
    audioElement.play()
  }

  if (keyElement) {
    keyElement.classList.add('active')

    setTimeout(() => {
      keyElement.classList.remove('active')
    }, 300)
  }
}

function playComposition(songArry) {
  let wait = 0

  for (let songItem of songArry) {
    setTimeout(() => {
      playSound(`key${songItem}`)
    }, wait)

    wait += 250
  }
}
