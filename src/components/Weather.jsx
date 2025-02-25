import useGeolocation from "../hooks/useGeolocation";

export default function Weather() {
  const { loading, error, data: geoData } = useGeolocation();
  if (loading) {
    return <p className="text-blue-500 text-lg font-semibold">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-red-500 text-lg font-semibold">
        Error: {error.message}
      </p>
    );
  }

  return (
    <div className="bg-gradient-to-b from-blue-400 to-indigo-600 shadow-lg rounded-lg p-6 mt-10 text-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Your coordinates
      </h2>
      <p className="text-lg font-semibold">Latitude: {geoData.latitude}</p>
      <p className="text-lg font-semibold">Longitude: {geoData.longitude}</p>
    </div>
  );
}
