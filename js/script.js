const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const countdown = document.querySelector('#countdown')
const comingSoon = document.querySelector('.bg h1')
const uploadDate = new Date(`February 06 2021 00:00:00`)

let load = 0
let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers/23202637#23202637
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

// Update countdown time
function updateCountdown() {
  const currentTime = new Date()
  const diff = uploadDate - currentTime

  const d = Math.floor(diff / 1000 / 60 / 60 / 24)
  const h = Math.floor(diff / 1000 / 60 / 60) % 24
  const m = Math.floor(diff / 1000 / 60) % 60
  const s = Math.floor(diff / 1000) % 60

  // Add values to DOM
  days.innerHTML = d
  hours.innerHTML = h < 10 ? '0' + h : h
  minutes.innerHTML = m < 10 ? '0' + m : m
  seconds.innerHTML = s < 10 ? '0' + s : s
}

// Set media query for tablets
const mediaQuery = window.matchMedia('(max-width: 768px)')

// Show blurring before countdown
setTimeout(() => {
  countdown.style.display = 'flex'
  comingSoon.style.display = 'block'
}, 1000)

// Run every second
setInterval(updateCountdown, 1000)
