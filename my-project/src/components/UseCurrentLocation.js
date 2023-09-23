import { useEffect, useState } from "react";

export function useCurrentLocation() {
  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (geoPosition) => {
        setPosition({
          latitude: geoPosition.coords.latitude,
          longitude: geoPosition.coords.longitude,
        });
        setLoading(false);
      },
      (geoError) => {
        setError(geoError);
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
      }
    );
  }, []);

  return {
    position,
    error,
    loading,
  };
}
