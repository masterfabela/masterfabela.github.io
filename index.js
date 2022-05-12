const getRandomNumber = (maxNumber) => {
  return Math.random() * maxNumber;
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const getRandomCoord = () => {
  const firstCoord = getRandomNumber(70);
  return firstCoord - getRandomNumber(70);
};

const moveMapToRandomWithAnimation = (map, duration) => {
  map.flyTo(getRandomCoords(), getRandomArbitrary(5, 14), {
    duration: duration,
  });
};

const getRandomCoords = () => {
  return [getRandomArbitrary(-100, 100), getRandomArbitrary(-100, 100)];
};

var map = L.map('map').setView(getRandomCoords(), 14);
const satellite = L.tileLayer(
  'https://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png',
  { subdomains: ['otile1', 'otile2', 'otile3', 'otile4'] }
);

L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: '',
    maxZoom: 14,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(map);
/*
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
}).addTo(map);*/
//satellite.addTo(map);
const duration = 120;
moveMapToRandomWithAnimation(map, duration);
setInterval(() => {
  moveMapToRandomWithAnimation(map, duration);
}, duration * 1000);
