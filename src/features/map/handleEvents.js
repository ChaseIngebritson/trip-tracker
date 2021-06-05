export default function handleEvents (map, props) {
  const { onClick, setCenter, setZoom, setBearing, setPitch } = props

  map.on('click', onClick)

  map.on('dragend', (event) => {
    const center = event.target.getCenter()
    setCenter([center.lng, center.lat])
  })

  map.on('moveend', (event) => {
    const center = event.target.getCenter()
    setCenter([center.lng, center.lat])
  })

  map.on('zoomend', (event) => {
    const zoom = event.target.getZoom()
    setZoom(zoom)
  })

  map.on('zoomend', (event) => {
    const zoom = event.target.getZoom()
    setZoom(zoom)
  })

  map.on('pitchend', (event) => {
    const pitch = event.target.getPitch()
    setPitch(pitch)
  })

  map.on('rotateend', (event) => {
    const bearing = event.target.getBearing()
    setBearing(bearing)
  })
}