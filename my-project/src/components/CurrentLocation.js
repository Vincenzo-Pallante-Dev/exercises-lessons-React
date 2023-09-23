import { useCurrentLocation } from "./UseCurrentLocation";

export function CurrentLocation() {
  const { position, error, loading } = useCurrentLocation();

  return (
    <div>
      <h1>Posizione corrente:</h1>

      <p>Latitudine: {position.latitude}</p>
      <p>Longitudine: {position.longitude}</p>

      {error && <div>Si è verificato un errore</div>}
      {loading && <div>Caricamento...</div>}
    </div>
  );
}
