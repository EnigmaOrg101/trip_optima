import { useEffect, useRef, useState } from 'react'
import MapGL from 'react-map-gl'
import mapboxgl from 'mapbox-gl'

import classes from './Map.module.scss'
import MapButtons from './MapButtons'

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFqaWhvIiwiYSI6ImNsaWg1ZmEyNTBxZjIzZm1wam51aGZ5YzEifQ.Sk1PZ3TrFEMIxSC4I9DBdA'

const MapLayout = () => {
  const mapRef = useRef(null)
  const [lnglat, setLngLat] = useState(null)

  useEffect(() => {
    // fetch current location coords
    navigator.geolocation.watchPosition((success) => {
      const { latitude, longitude } = success.coords
      setLngLat([longitude, latitude])
    }),
      (error) => {
        console.log(error)
        alert('Please allow location access')
      }
  }, [])

  return (
    <div className={classes.map}>
      {lnglat && (
        <MapGL
          id="map"
          style={{
            borderRadius: '2rem',
          }}
          ref={mapRef}
          initialViewState={{
            longitude: lnglat[0],
            latitude: lnglat[1],
            zoom: 14,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
          mapboxAccessToken={mapboxgl.accessToken}
          onLoad={(e) => {
            const geolocate = new mapboxgl.GeolocateControl({
              positionOptions: {
                enableHighAccuracy: true,
              },
              trackUserLocation: true,
              showUserHeading: true,
              showAccuracyCircle: false,
              showUserLocation: true,
            })

            e.target.addControl(geolocate, 'top-left')

            setTimeout(() => {
              geolocate.trigger()
            }, 1000)
          }}
          onClick={(e) => {
            const { lng, lat } = e.lngLat
            console.log(lng, lat)
          }}
        >
          <MapButtons />
        </MapGL>
      )}
    </div>
  )
}

export default MapLayout
