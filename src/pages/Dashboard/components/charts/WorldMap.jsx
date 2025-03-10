import { useEffect, useRef, useState } from 'react';
import { mockMapData } from './config/worldMapConfig';

export default function WorldMap() {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if AMap is loaded
    if (!window.AMap) {
      setError('Failed to load AMap');
      return;
    }

    try {
      // Create map instance
      const map = new window.AMap.Map(mapContainer.current, {
        zoom: 4,
        center: [116.397428, 39.90923],
        viewMode: '3D',
        mapStyle: 'amap://styles/dark',
        features: ['bg', 'building', 'point'],
        pitch: 35
      });
      mapInstance.current = map;

      // Add toolbar and scale
      map.addControl(new window.AMap.ToolBar());
      map.addControl(new window.AMap.Scale());

      // Create markers and info windows
      mockMapData.forEach(item => {
        const position = cityCoordinates[item.name];
        if (!position) return;

        // Create marker
        const div = document.createElement('div');
        div.className = 'custom-marker';
        div.innerHTML = `
          <div class="relative group">
            <div class="absolute -inset-2 bg-indigo-500/20 rounded-full blur-lg group-hover:bg-indigo-500/30 transition-all duration-300"></div>
            <div class="relative bg-indigo-500 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-lg border border-indigo-400/50">
              <span class="text-xs">${item.value}</span>
            </div>
          </div>
        `;

        const marker = new window.AMap.Marker({
          position,
          content: div,
          offset: new window.AMap.Pixel(-15, -15)
        });

        // Create info window
        const info = new window.AMap.InfoWindow({
          isCustom: true,
          content: `
            <div class="bg-gray-900/95 backdrop-blur-xl p-4 rounded-lg border border-purple-500/20 shadow-xl">
              <h3 class="text-white font-semibold mb-2">${item.name}</h3>
              <div class="space-y-1 text-sm">
                <p class="text-gray-400">LED Screens: <span class="text-white">${item.value}</span></p>
                <p class="text-gray-400">Daily Traffic: <span class="text-white">${item.traffic}K+</span></p>
                <div class="mt-2 pt-2 border-t border-gray-800">
                  <p class="text-gray-400">Large: <span class="text-white">${item.details.large}</span></p>
                  <p class="text-gray-400">Medium: <span class="text-white">${item.details.medium}</span></p>
                  <p class="text-gray-400">Small: <span class="text-white">${item.details.small}</span></p>
                  <p class="text-gray-400 mt-1">Daily Revenue: <span class="text-green-400">${item.details.revenue}</span></p>
                </div>
              </div>
            </div>
          `,
          offset: new window.AMap.Pixel(0, -30)
        });

        // Bind mouse events
        marker.on('mouseover', () => {
          info.open(map, position);
        });
        marker.on('mouseout', () => {
          info.close();
        });

        marker.setMap(map);
      });

      // Add custom styles
      const style = document.createElement('style');
      style.textContent = `
        .custom-marker {
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .custom-marker:hover {
          transform: scale(1.1);
        }
        .amap-info-content {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }
        .amap-info-sharp {
          display: none !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        if (mapInstance.current) {
          mapInstance.current.destroy();
        }
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      };
    } catch (err) {
      console.error('Map initialization failed:', err);
      setError('Map initialization failed');
    }
  }, []);

  if (error) {
    return (
      <div className="w-full h-[400px] rounded-lg bg-gray-800/50 flex items-center justify-center">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div ref={mapContainer} className="w-full h-[400px] rounded-lg overflow-hidden" />
  );
}

// City coordinates
const cityCoordinates = {
  'Beijing': [116.407526, 39.90403],
  'Shanghai': [121.473701, 31.230416],
  'Guangzhou': [113.264434, 23.129162],
  'Shenzhen': [114.057868, 22.543099],
  'Hangzhou': [120.155070, 30.274084],
  'Chengdu': [104.065735, 30.659462],
  'Wuhan': [114.298572, 30.584355],
  "Xi'an": [108.940175, 34.341568],
  'Chongqing': [106.504962, 29.533155],
  'Nanjing': [118.767413, 32.041544]
};
