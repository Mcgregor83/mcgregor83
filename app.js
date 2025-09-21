// Datos de estaciones y marcas
const estacionesData = {
  "estaciones": [
    {
      "id": 1,
      "nombre": "Repsol Chamberí",
      "marca": "Repsol",
      "direccion": "Calle de Santa Engracia, 15, 28010 Madrid",
      "lat": 40.4378,
      "lon": -3.7044,
      "precios": {
        "gasolina95": 1.459,
        "gasoleo": 1.389,
        "gasolina98": 1.629
      },
      "horario": "24 horas",
      "servicios": ["Tienda", "Lavado", "Aire comprimido"]
    },
    {
      "id": 2,
      "nombre": "Cepsa Castellana",
      "marca": "Cepsa", 
      "direccion": "Paseo de la Castellana, 89, 28046 Madrid",
      "lat": 40.4521,
      "lon": -3.6879,
      "precios": {
        "gasolina95": 1.449,
        "gasoleo": 1.379,
        "gasolina98": 1.619
      },
      "horario": "6:00 - 22:00",
      "servicios": ["Tienda", "Cafetería"]
    },
    {
      "id": 3,
      "nombre": "BP Moncloa",
      "marca": "BP",
      "direccion": "Avenida de la Moncloa, 12, 28008 Madrid", 
      "lat": 40.4297,
      "lon": -3.7167,
      "precios": {
        "gasolina95": 1.469,
        "gasoleo": 1.399,
        "gasolina98": 1.639
      },
      "horario": "24 horas",
      "servicios": ["Tienda", "Lavado", "Restaurante"]
    },
    {
      "id": 4,
      "nombre": "Shell Arturo Soria",
      "marca": "Shell",
      "direccion": "Calle de Arturo Soria, 145, 28043 Madrid",
      "lat": 40.4589,
      "lon": -3.6234,
      "precios": {
        "gasolina95": 1.479,
        "gasoleo": 1.409,
        "gasolina98": 1.649
      },
      "horario": "6:00 - 23:00", 
      "servicios": ["Tienda", "Aire comprimido"]
    },
    {
      "id": 5,
      "nombre": "Galp Avenida América",
      "marca": "Galp",
      "direccion": "Avenida de América, 32, 28002 Madrid",
      "lat": 40.4423,
      "lon": -3.6756,
      "precios": {
        "gasolina95": 1.439,
        "gasoleo": 1.369,
        "gasolina98": 1.609
      },
      "horario": "7:00 - 22:00",
      "servicios": ["Tienda"]
    },
    {
      "id": 6,
      "nombre": "Independiente Low Cost",
      "marca": "Independiente",
      "direccion": "Calle de Alcalá, 234, 28027 Madrid",
      "lat": 40.4089,
      "lon": -3.6543,
      "precios": {
        "gasolina95": 1.419,
        "gasoleo": 1.349,
        "gasolina98": 1.589
      },
      "horario": "24 horas",
      "servicios": ["Autoservicio"]
    },
    {
      "id": 7,
      "nombre": "Repsol Atocha",
      "marca": "Repsol",
      "direccion": "Glorieta de Atocha, 1, 28012 Madrid",
      "lat": 40.4067,
      "lon": -3.6900,
      "precios": {
        "gasolina95": 1.465,
        "gasoleo": 1.395,
        "gasolina98": 1.635
      },
      "horario": "24 horas", 
      "servicios": ["Tienda", "Lavado", "Aire comprimido", "Cafetería"]
    },
    {
      "id": 8,
      "nombre": "Cepsa Cuatro Caminos",
      "marca": "Cepsa",
      "direccion": "Plaza de Cuatro Caminos, 5, 28020 Madrid",
      "lat": 40.4567,
      "lon": -3.7023,
      "precios": {
        "gasolina95": 1.455,
        "gasoleo": 1.385,
        "gasolina98": 1.625
      },
      "horario": "6:30 - 22:30",
      "servicios": ["Tienda", "Aire comprimido"]
    },
    {
      "id": 9,
      "nombre": "BP Méndez Álvaro", 
      "marca": "BP",
      "direccion": "Calle de Méndez Álvaro, 44, 28045 Madrid",
      "lat": 40.3967,
      "lon": -3.6789,
      "precios": {
        "gasolina95": 1.475,
        "gasoleo": 1.405,
        "gasolina98": 1.645
      },
      "horario": "24 horas",
      "servicios": ["Tienda", "Lavado", "Restaurante", "Aire comprimido"]
    },
    {
      "id": 10,
      "nombre": "Independiente Getafe",
      "marca": "Independiente", 
      "direccion": "Carretera de Andalucía, km 12, 28901 Getafe",
      "lat": 40.3156,
      "lon": -3.7234,
      "precios": {
        "gasolina95": 1.409,
        "gasoleo": 1.339,
        "gasolina98": 1.579
      },
      "horario": "24 horas",
      "servicios": ["Autoservicio", "Tienda"]
    }
  ],
  "marcas": [
    {"nombre": "Todas", "valor": "", "color": "#6c757d"},
    {"nombre": "Repsol", "valor": "Repsol", "color": "#ff6b35"},
    {"nombre": "Cepsa", "valor": "Cepsa", "color": "#e31e24"}, 
    {"nombre": "BP", "valor": "BP", "color": "#00a651"},
    {"nombre": "Shell", "valor": "Shell", "color": "#ffde17"},
    {"nombre": "Galp", "valor": "Galp", "color": "#0066cc"},
    {"nombre": "Independiente", "valor": "Independiente", "color": "#17a2b8"}
  ]
};

// Estado global de la aplicación
let appState = {
  userLocation: null,
  allStations: [],
  filteredStations: [],
  currentFilters: [''],
  favorites: [],
  activeTab: 'nearby'
};

// Elementos del DOM
let elements = {};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
  initializeDOM();
  initializeApp();
});

function initializeDOM() {
  elements = {
    useLocationBtn: document.getElementById('useLocationBtn'),
    searchBtn: document.getElementById('searchBtn'),
    locationInput: document.getElementById('locationInput'),
    loadingState: document.getElementById('loadingState'),
    errorState: document.getElementById('errorState'),
    errorMessage: document.getElementById('errorMessage'),
    filtersGrid: document.getElementById('filtersGrid'),
    clearFiltersBtn: document.getElementById('clearFiltersBtn'),
    stationsList: document.getElementById('stationsList'),
    favoritesList: document.getElementById('favoritesList'),
    resultsCount: document.getElementById('resultsCount'),
    favoritesCounter: document.getElementById('favoritesCounter'),
    emptyState: document.getElementById('emptyState'),
    emptyFavoritesState: document.getElementById('emptyFavoritesState'),
    tabButtons: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    nearbyTab: document.getElementById('nearbyTab'),
    favoritesTab: document.getElementById('favoritesTab')
  };
}

function initializeApp() {
  loadFavorites();
  generateFilters();
  setupEventListeners();
  updateFavoritesCounter();
  
  // Inicializar con datos por defecto (simular ubicación en Madrid)
  appState.userLocation = {
    lat: 40.4168,
    lon: -3.7038
  };
  
  // Cargar estaciones iniciales
  loadAllStations();
}

function loadAllStations() {
  // Calcular distancias desde ubicación por defecto
  const estacionesConDistancia = estacionesData.estaciones.map(estacion => ({
    ...estacion,
    distancia: calcularDistancia(
      appState.userLocation.lat,
      appState.userLocation.lon,
      estacion.lat,
      estacion.lon
    )
  }));
  
  // Ordenar por distancia
  estacionesConDistancia.sort((a, b) => a.distancia - b.distancia);
  
  appState.allStations = estacionesConDistancia;
  appState.filteredStations = [...estacionesConDistancia];
  
  renderCurrentTab();
}

// Cargar favoritos del localStorage
function loadFavorites() {
  try {
    const savedFavorites = localStorage.getItem('estaciones-favoritas');
    appState.favorites = savedFavorites ? JSON.parse(savedFavorites) : [];
  } catch (error) {
    console.error('Error cargando favoritos:', error);
    appState.favorites = [];
  }
}

// Guardar favoritos en localStorage
function saveFavorites() {
  try {
    localStorage.setItem('estaciones-favoritas', JSON.stringify(appState.favorites));
    updateFavoritesCounter();
  } catch (error) {
    console.error('Error guardando favoritos:', error);
  }
}

// Generar filtros dinámicamente
function generateFilters() {
  const filtersHTML = estacionesData.marcas.map(marca => `
    <label class="filter-checkbox">
      <input type="checkbox" value="${marca.valor}" ${marca.valor === '' ? 'checked' : ''}>
      <span class="filter-label">${marca.nombre}</span>
    </label>
  `).join('');
  
  elements.filtersGrid.innerHTML = filtersHTML;
}

// Configurar event listeners
function setupEventListeners() {
  // Botón de geolocalización
  if (elements.useLocationBtn) {
    elements.useLocationBtn.addEventListener('click', obtenerUbicacion);
  }
  
  // Búsqueda manual
  if (elements.searchBtn) {
    elements.searchBtn.addEventListener('click', buscarManual);
  }
  
  if (elements.locationInput) {
    elements.locationInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        buscarManual();
      }
    });
  }
  
  // Filtros
  if (elements.filtersGrid) {
    elements.filtersGrid.addEventListener('change', handleFilterChange);
  }
  
  if (elements.clearFiltersBtn) {
    elements.clearFiltersBtn.addEventListener('click', clearAllFilters);
  }
  
  // Tabs
  elements.tabButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      switchTab(this.dataset.tab);
    });
  });
}

// Función de geolocalización
function obtenerUbicacion() {
  if (!navigator.geolocation) {
    showError('La geolocalización no está disponible en este navegador.');
    return;
  }
  
  showLoading('Obteniendo ubicación...');
  hideError();
  
  const options = {
    timeout: 10000,
    enableHighAccuracy: true,
    maximumAge: 300000
  };
  
  navigator.geolocation.getCurrentPosition(
    posicionObtenida,
    errorGeolocalizacion,
    options
  );
}

function posicionObtenida(position) {
  appState.userLocation = {
    lat: position.coords.latitude,
    lon: position.coords.longitude
  };
  
  hideLoading();
  buscarEstacionesCercanas();
}

function errorGeolocalizacion(error) {
  hideLoading();
  
  let mensaje = 'No se pudo obtener la ubicación.';
  
  switch(error.code) {
    case error.PERMISSION_DENIED:
      mensaje = 'Acceso a la ubicación denegado. Mostrando estaciones de Madrid.';
      break;
    case error.POSITION_UNAVAILABLE:
      mensaje = 'Ubicación no disponible. Mostrando estaciones de Madrid.';
      break;
    case error.TIMEOUT:
      mensaje = 'Tiempo de espera agotado. Mostrando estaciones de Madrid.';
      break;
  }
  
  showError(mensaje);
  
  // Mostrar estaciones de Madrid como fallback
  setTimeout(() => {
    hideError();
    loadAllStations();
  }, 3000);
}

// Búsqueda manual
function buscarManual() {
  const location = elements.locationInput.value.trim();
  
  if (!location) {
    showError('Por favor, introduce una ubicación para buscar.');
    return;
  }
  
  showLoading('Buscando estaciones...');
  hideError();
  
  // Simulamos geocodificación
  setTimeout(() => {
    // Coordenadas simuladas basadas en la búsqueda
    const coordenadasSimuladas = simularGeocodificacion(location);
    
    appState.userLocation = coordenadasSimuladas;
    
    hideLoading();
    buscarEstacionesCercanas();
    elements.locationInput.value = '';
  }, 1500);
}

function simularGeocodificacion(location) {
  const ubicaciones = {
    'madrid': { lat: 40.4168, lon: -3.7038 },
    'barcelona': { lat: 41.3851, lon: 2.1734 },
    'valencia': { lat: 39.4699, lon: -0.3763 },
    'sevilla': { lat: 37.3891, lon: -5.9845 },
    'bilbao': { lat: 43.2627, lon: -2.9253 }
  };
  
  const locationLower = location.toLowerCase();
  
  // Buscar coincidencia parcial
  for (const [ciudad, coords] of Object.entries(ubicaciones)) {
    if (locationLower.includes(ciudad) || ciudad.includes(locationLower)) {
      return coords;
    }
  }
  
  // Por defecto, Madrid
  return ubicaciones.madrid;
}

// Buscar estaciones cercanas
function buscarEstacionesCercanas() {
  if (!appState.userLocation) {
    showError('No se pudo determinar la ubicación.');
    return;
  }
  
  // Calcular distancias y ordenar
  const estacionesConDistancia = estacionesData.estaciones.map(estacion => ({
    ...estacion,
    distancia: calcularDistancia(
      appState.userLocation.lat,
      appState.userLocation.lon,
      estacion.lat,
      estacion.lon
    )
  }));
  
  // Ordenar por distancia
  estacionesConDistancia.sort((a, b) => a.distancia - b.distancia);
  
  appState.allStations = estacionesConDistancia;
  appState.filteredStations = [...estacionesConDistancia];
  
  switchTab('nearby');
}

// Cálculo de distancia usando fórmula de Haversine
function calcularDistancia(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radio de la Tierra en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Manejo de cambios en filtros
function handleFilterChange(event) {
  if (!event.target.matches('input[type="checkbox"]')) return;
  
  const checkbox = event.target;
  const value = checkbox.value;
  
  // Obtener filtros actualmente marcados
  const checkedFilters = Array.from(elements.filtersGrid.querySelectorAll('input[type="checkbox"]:checked'))
    .map(cb => cb.value);
  
  // Si es "Todas" y se marca
  if (value === '' && checkbox.checked) {
    // Desmarcar todos los demás
    elements.filtersGrid.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      if (cb.value !== '') {
        cb.checked = false;
      }
    });
    appState.currentFilters = [''];
  } else if (value === '' && !checkbox.checked) {
    // Si se desmarca "Todas", permitirlo solo si hay otros marcados
    const otherFilters = checkedFilters.filter(f => f !== '');
    if (otherFilters.length === 0) {
      checkbox.checked = true; // Mantener marcado
      return;
    }
    appState.currentFilters = otherFilters;
  } else {
    // Desmarcar "Todas" si se marca otra opción
    const todasCheckbox = elements.filtersGrid.querySelector('input[value=""]');
    if (todasCheckbox && checkbox.checked) {
      todasCheckbox.checked = false;
    }
    
    // Obtener filtros sin "Todas"
    const otherFilters = checkedFilters.filter(f => f !== '');
    appState.currentFilters = otherFilters;
    
    // Si no hay filtros marcados, marcar "Todas"
    if (appState.currentFilters.length === 0) {
      if (todasCheckbox) {
        todasCheckbox.checked = true;
      }
      appState.currentFilters = [''];
    }
  }
  
  renderCurrentTab();
}

// Limpiar todos los filtros
function clearAllFilters() {
  elements.filtersGrid.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.checked = cb.value === '';
  });
  appState.currentFilters = [''];
  renderCurrentTab();
}

// Renderizar el tab actual
function renderCurrentTab() {
  if (appState.activeTab === 'nearby') {
    renderStations();
  } else if (appState.activeTab === 'favorites') {
    renderFavorites();
  }
}

// Renderizar estaciones cercanas
function renderStations() {
  let stationsToShow = [...appState.allStations];
  
  // Aplicar filtros
  if (!appState.currentFilters.includes('') && appState.currentFilters.length > 0) {
    stationsToShow = stationsToShow.filter(estacion => 
      appState.currentFilters.includes(estacion.marca)
    );
  }
  
  elements.stationsList.innerHTML = '';
  
  if (stationsToShow.length === 0) {
    showEmptyState();
    return;
  }
  
  hideEmptyState();
  
  stationsToShow.forEach(estacion => {
    const stationCard = createStationCard(estacion, false);
    elements.stationsList.appendChild(stationCard);
  });
  
  updateResultsCount(stationsToShow.length);
}

// Renderizar favoritos
function renderFavorites() {
  // Los favoritos no se filtran por marca, se muestran todos
  let favoritesToShow = [...appState.favorites];
  
  // Si el usuario quiere aplicar filtros también a favoritos, descomentamos esto:
  // if (!appState.currentFilters.includes('') && appState.currentFilters.length > 0) {
  //   favoritesToShow = favoritesToShow.filter(estacion => 
  //     appState.currentFilters.includes(estacion.marca)
  //   );
  // }
  
  elements.favoritesList.innerHTML = '';
  
  if (favoritesToShow.length === 0) {
    showEmptyFavoritesState();
    // No mostrar contador en favoritos vacíos
    return;
  }
  
  hideEmptyFavoritesState();
  
  favoritesToShow.forEach(estacion => {
    const stationCard = createStationCard(estacion, true);
    elements.favoritesList.appendChild(stationCard);
  });
  
  // Actualizar contador en el contexto de favoritos
  const favoritesCountText = `${favoritesToShow.length} favorito${favoritesToShow.length !== 1 ? 's' : ''} guardado${favoritesToShow.length !== 1 ? 's' : ''}`;
  
  // Buscar si hay un elemento de contador en la tab de favoritos
  const favoritesResults = elements.favoritesTab.querySelector('.results-header .results-info');
  if (favoritesResults) {
    favoritesResults.textContent = favoritesCountText;
  }
}

// Crear tarjeta de estación
function createStationCard(estacion, isFavoritesList = false) {
  const isFavorite = appState.favorites.some(fav => fav.id === estacion.id);
  const brandClass = `brand-${estacion.marca.toLowerCase().replace(' ', '-')}`;
  
  const card = document.createElement('div');
  card.className = 'card station-card';
  card.innerHTML = `
    <div class="card__body">
      <div class="station-header">
        <div class="station-info">
          <div class="station-brand ${brandClass}">${estacion.marca}</div>
          <h4>${estacion.nombre}</h4>
          <div class="station-address">${estacion.direccion}</div>
          ${estacion.distancia !== undefined ? `<div class="station-distance">
            <i class="fas fa-location-arrow"></i>
            <span>${estacion.distancia.toFixed(1)} km</span>
          </div>` : ''}
        </div>
        <button class="favorite-btn ${isFavorite ? 'is-favorite' : ''}" 
                data-station-id="${estacion.id}">
          <i class="fas fa-heart"></i>
        </button>
      </div>
      
      <div class="station-prices">
        <div class="price-item">
          <div class="fuel-type">Gasolina 95</div>
          <div class="price">${estacion.precios.gasolina95.toFixed(3)}</div>
        </div>
        <div class="price-item">
          <div class="fuel-type">Gasóleo</div>
          <div class="price">${estacion.precios.gasoleo.toFixed(3)}</div>
        </div>
        <div class="price-item">
          <div class="fuel-type">Gasolina 98</div>
          <div class="price">${estacion.precios.gasolina98.toFixed(3)}</div>
        </div>
      </div>
      
      <div class="station-details">
        <div class="station-schedule">
          <i class="fas fa-clock"></i>
          <span>${estacion.horario}</span>
        </div>
        <div class="station-services">
          ${estacion.servicios.map(servicio => 
            `<span class="service-tag">${servicio}</span>`
          ).join('')}
        </div>
      </div>
    </div>
  `;
  
  // Event listener para favoritos
  const favoriteBtn = card.querySelector('.favorite-btn');
  favoriteBtn.addEventListener('click', function() {
    toggleFavorite(estacion, isFavoritesList);
  });
  
  return card;
}

// Toggle favorito
function toggleFavorite(estacion, isInFavoritesList = false) {
  const existingIndex = appState.favorites.findIndex(fav => fav.id === estacion.id);
  
  if (existingIndex >= 0) {
    // Quitar de favoritos
    appState.favorites.splice(existingIndex, 1);
  } else {
    // Añadir a favoritos
    appState.favorites.push(estacion);
  }
  
  saveFavorites();
  
  // Actualizar interfaz
  updateFavoriteButtons();
  
  // Si estamos en la tab de favoritos, re-renderizar
  if (appState.activeTab === 'favorites') {
    renderFavorites();
  }
}

// Actualizar botones de favorito
function updateFavoriteButtons() {
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    const stationId = parseInt(btn.dataset.stationId);
    const isFavorite = appState.favorites.some(fav => fav.id === stationId);
    
    btn.classList.toggle('is-favorite', isFavorite);
  });
}

// Actualizar contador de favoritos
function updateFavoritesCounter() {
  if (elements.favoritesCounter) {
    elements.favoritesCounter.textContent = appState.favorites.length;
  }
}

// Actualizar contador de resultados
function updateResultsCount(count) {
  if (elements.resultsCount) {
    elements.resultsCount.textContent = `${count} estación${count !== 1 ? 'es' : ''} encontrada${count !== 1 ? 's' : ''}`;
  }
}

// Cambiar de tab
function switchTab(tabName) {
  appState.activeTab = tabName;
  
  // Actualizar botones de tab
  elements.tabButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  
  // Actualizar contenido de tabs
  elements.tabContents.forEach(content => {
    content.classList.toggle('active', content.id === `${tabName}Tab`);
  });
  
  // Renderizar contenido del tab activo
  renderCurrentTab();
}

// Estados de loading y error
function showLoading(message = 'Cargando...') {
  if (elements.loadingState) {
    const span = elements.loadingState.querySelector('span');
    if (span) span.textContent = message;
    elements.loadingState.classList.remove('hidden');
  }
}

function hideLoading() {
  if (elements.loadingState) {
    elements.loadingState.classList.add('hidden');
  }
}

function showError(message) {
  if (elements.errorMessage) {
    elements.errorMessage.textContent = message;
  }
  if (elements.errorState) {
    elements.errorState.classList.remove('hidden');
  }
}

function hideError() {
  if (elements.errorState) {
    elements.errorState.classList.add('hidden');
  }
}

function showEmptyState() {
  if (elements.emptyState) {
    elements.emptyState.style.display = 'block';
  }
  updateResultsCount(0);
}

function hideEmptyState() {
  if (elements.emptyState) {
    elements.emptyState.style.display = 'none';
  }
}

function showEmptyFavoritesState() {
  if (elements.emptyFavoritesState) {
    elements.emptyFavoritesState.style.display = 'block';
  }
}

function hideEmptyFavoritesState() {
  if (elements.emptyFavoritesState) {
    elements.emptyFavoritesState.style.display = 'none';
  }
}