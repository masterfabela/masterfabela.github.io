window.L_DISABLE_3D = true;
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

var map = L.map('map').setView(getRandomCoords(), 13);
const satellite = L.tileLayer(
  'https://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png'
);

L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  {
    detectRetina: true,
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

const blurLayer = document.querySelector('#map .blur');
const generalContainer = document.querySelector('#map .general-container');

generalContainer.addEventListener('mouseenter', () => {
  blurLayer.classList.add('active');
});

generalContainer.addEventListener('mouseleave', () => {
  blurLayer.classList.remove('active');
});

/*
 * Workaround for 1px lines appearing in some browsers due to fractional transforms
 * and resulting anti-aliasing.
 * https://github.com/Leaflet/Leaflet/issues/3575
 */
(function () {
  var originalInitTile = L.GridLayer.prototype._initTile;
  L.GridLayer.include({
    _initTile: function (tile) {
      originalInitTile.call(this, tile);

      var tileSize = this.getTileSize();

      tile.style.width = tileSize.x + 1 + 'px';
      tile.style.height = tileSize.y + 1 + 'px';
    },
  });
})();
