const getRandomNumber = (maxNumber) => {
  return Math.random() * maxNumber;
};

const getRandomCoord = () => {
  const firstCoord = getRandomNumber(70);
  return firstCoord - getRandomNumber(70);
};

const moveMapToRandomWithAnimation = (map, duration) => {
  map.flyTo(getRandomCoords(), 8, {
    duration: duration,
  });
};

const getRandomCoords = () => {
  return [getRandomCoord(), getRandomCoord()];
};

var map = L.map('map').setView(getRandomCoords(), 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'your.mapbox.access.token',
}).addTo(map);
const duration = 40;
moveMapToRandomWithAnimation(map, duration);
setInterval(() => {
  moveMapToRandomWithAnimation(map, duration);
}, duration * 1000);
