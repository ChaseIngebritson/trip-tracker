export default function handleEvents (map, props) {
  const { onIdle, onClick, setIdle, onDrag, setCenter, setZoom, setBearing, setPitch } = props

  map.on('idle', (event) => {
    if (onIdle) onIdle(event)
    
    setIdle(true)
  })

  map.on('click', (event) => {
    if (onClick) onClick(event)
  })

  map.on('drag', (event) => {
    if (onDrag) onDrag(event)
  })

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