/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";

export default function useGeolocation() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const onSuccess = (e) => {
      setLoading(false);
      setError(null);
      setData(e.coords);
    };

    const onError = (e) => {
      setError(e);
      setLoading(false);
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  return { loading, error, data };
}
