var button = document.querySelector('button');
var audio = document.querySelector('audio');
var body = document.body;
var timeout;

var animateBackground = function() {
  body.classList.remove('active');
  setTimeout(function() {document.body.classList.add('active')}, 0)
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    body.classList.remove('active');
  }, audio.duration * 1000)
}

var play = function() {
  if (!audio.paused) {
    audio.pause();
    audio.currentTime = 0;
  }
  animateBackground();
  audio.play();
  button.blur();
}

button.addEventListener('click', play)

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
} else {
  var iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  body.appendChild(iframe);
}
