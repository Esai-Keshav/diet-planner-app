import { useEffect, useState } from "react";
import type { Hotel, PaginatedResponse } from "./types";

// const API_URL = "http://127.0.0.1:8000/api/hotels/";
const API_URL = "https://render-test-gspe.onrender.com/api/hotels/";

export default function Hotels() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadHotels() {
      try {
        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error(`Error ${res.status}`);
        }

        const data: PaginatedResponse<Hotel> = await res.json();
        setHotels(data.results);
      } catch (err) {
        setError(`Failed to load hotels ${err}`);
      } finally {
        setLoading(false);
      }
    }

    loadHotels();
  }, []);

  if (loading) return <p>Loading hotels...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {hotels.map((hotel) => (
        <li key={hotel.id}>
          <img src={hotel.image_url} alt="" className="size-44" />
          <strong>{hotel.name}</strong> — {hotel.city}
        </li>
      ))}
    </ul>
  );
}
