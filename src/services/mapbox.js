import axios from 'axios'

const service = axios.create({
  baseURL: 'https://api.mapbox.com/',
});

export async function geocode (search) {
  return service.get(`/geocoding/v5/mapbox.places/${search}.json`, {
    params: {
      access_token: process.env.REACT_APP_MAPBOXGL_ACCESS_TOKEN
    }
  })
  .then((response) => response.data)
}
