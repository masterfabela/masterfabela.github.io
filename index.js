const getRandomNumber = (maxNumber) => {
  return Math.random() * maxNumber;
};

const getRandomCoord = () => {
  const firstCoord = getRandomNumber(70);
  return firstCoord - getRandomNumber(70);
};

var map = L.map('map').setView([getRandomCoord(), getRandomCoord()], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'your.mapbox.access.token',
}).addTo(map);
