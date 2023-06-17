import { useEffect, useRef, useState } from 'react'
import MapGL from 'react-map-gl'
import mapboxgl from 'mapbox-gl'

import classes from './Map.module.scss'
import MapButtons from './MapButtons'

import useLocationStore from '../../store/locationStore'
import useMarkerStore from '../../store/markerStore'
import useMapStore from '../../store/mapStore'

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFqaWhvIiwiYSI6ImNsaWg1ZmEyNTBxZjIzZm1wam51aGZ5YzEifQ.Sk1PZ3TrFEMIxSC4I9DBdA'

const MapLayout = () => {
  const mapRef = useRef(null)
  const [lnglat, setLngLat] = useState(null)
  const setCurrentLocation = useLocationStore(
    (state) => state.setCurrentLocation
  )

  const setDestinationLocation = useLocationStore(
    (state) => state.setDestinationLocation
  )

  const setDestinationAddress = useLocationStore(
    (state) => state.setDestinationAddress
  )

  const setMarker = useMarkerStore((state) => state.setMarker)

  const marker = useMarkerStore((state) => state.marker)

  const mapStyle = useMapStore((state) => state.mapStyle)

  useEffect(() => {
    // on mount get current location
    navigator.geolocation.watchPosition((success) => {
      const { latitude, longitude } = success.coords
      setLngLat([longitude, latitude])
      setCurrentLocation([longitude, latitude])
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
          projection={'globe'}
          ref={mapRef}
          initialViewState={{
            longitude: lnglat[0],
            latitude: lnglat[1],
            zoom: 14,
          }}
          mapStyle={mapStyle}
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
            setDestinationLocation([lng, lat])
            // reverse geocoding through clicked coordinates
            fetch(
              `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=70982f5ded674a84abaa673ee6b6d2c7`
            )
              .then((res) => res.json())
              .then((data) => {
                setDestinationAddress(data.features[0].properties.formatted)
              })
            if (marker) {
              marker.remove()
            }

            const newMarker = new mapboxgl.Marker({})
              .setLngLat([lng, lat])
              .addTo(mapRef.current.getMap())

            setMarker(newMarker)
          }}
        >
          <MapButtons />
        </MapGL>
      )}
    </div>
  )
}

export default MapLayout
