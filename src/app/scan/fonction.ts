 // Fonction pour calculer la distance entre deux points géographiques en mètres
 function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371000; // Rayon de la Terre en mètres
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance en mètres
    return distance;
  }
  
  export function isWithin20Meters(userLocation: { latitude: number, longitude: number }, targetLocation: { latitude: number, longitude: number }): boolean {
    const distance = calculateDistance(
      userLocation.latitude,
      userLocation.longitude,
      targetLocation.latitude,
      targetLocation.longitude
    );
  
    return distance < 20;
  }
  