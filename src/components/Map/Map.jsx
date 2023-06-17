import { useEffect, useRef, useState } from 'react'
import MapGL from 'react-map-gl'
import mapboxgl from 'mapbox-gl'

import classes from './Map.module.scss'
import MapButtons from './MapButtons'

import useLocationStore from '../../store/locationStore'
import useMarkerStore from '../../store/markerStore'
import useMapStore from '../../store/mapStore'
import useRushStore from '../../store/rushStore'
import MapInfo from './MapInfo'

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFqaWhvIiwiYSI6ImNsaWg1ZmEyNTBxZjIzZm1wam51aGZ5YzEifQ.Sk1PZ3TrFEMIxSC4I9DBdA'

const GEOAPIFY_API_KEY = '70982f5ded674a84abaa673ee6b6d2c7'

const MapLayout = () => {
  const mapRef = useRef(null)
  const [lnglat, setLngLat] = useState(null)
  const setCurrentLocation = useLocationStore(
    (state) => state.setCurrentLocation
  )

  const currentLocation = useLocationStore((state) => state.currentLocation)

  const setDestinationLocation = useLocationStore(
    (state) => state.setDestinationLocation
  )

  const setDestinationAddress = useLocationStore(
    (state) => state.setDestinationAddress
  )

  const setMarker = useMarkerStore((state) => state.setMarker)

  const marker = useMarkerStore((state) => state.marker)

  const mapStyle = useMapStore((state) => state.mapStyle)

  const rushMode = useRushStore((state) => state.rushMode)

  const rushRadius = useRushStore((state) => state.rushRadius)

  const rushParams = useRushStore((state) => state.rushParams)

  useEffect(() => {
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

  useEffect(() => {
    if (rushMode) {
      console.log(rushParams, rushRadius, currentLocation)
      fetch(
        `https://api.geoapify.com/v2/places?categories=${rushParams}&filter=circle:${currentLocation[0]},${currentLocation[1]},${rushRadius}&bias=proximity:${currentLocation[0]},${currentLocation[1]}&limit=8&apiKey=${GEOAPIFY_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          data.features.forEach((feature) => {
            const { lat, lon } = feature.properties
            const newMarker = new mapboxgl.Marker({
              color: '#333',
            })
              .setLngLat([lon, lat])
              .addTo(mapRef.current.getMap())
            // add popup
            newMarker.setPopup(
              new mapboxgl.Popup().setHTML(
                `<h3>${feature.properties.name}</h3><p>${feature.properties.formatted}</p>`
              )
            )
          })
        })
        .catch((err) => console.log(err))

      fetch(
        `https://api.geoapify.com/v1/isoline?lat=${currentLocation[1]}&lon=${currentLocation[0]}&type=time&mode=drive&range=${rushRadius}&apiKey=${GEOAPIFY_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (mapRef?.current?.getMap().getLayer('isoline-line')) {
            mapRef?.current?.getMap().removeLayer('isoline-line')
          }
          if (mapRef?.current?.getMap().getLayer('isoline-fill')) {
            mapRef?.current?.getMap().removeLayer('isoline-fill')
          }
          if (mapRef?.current?.getMap().getSource('isoline-data-source')) {
            mapRef?.current?.getMap().removeSource('isoline-data-source')
          }
          mapRef?.current.getMap().addSource('isoline-data-source', {
            type: 'geojson',
            data: data,
          })
          mapRef?.current.getMap().addLayer({
            id: 'isoline-line',
            type: 'line',
            source: 'isoline-data-source',
            paint: {
              'line-color': '#6666ff',
              'line-width': 2,
            },
          })
          mapRef?.current.getMap().addLayer({
            id: `isoline-fill`,
            type: 'fill',
            source: 'isoline-data-source',
            paint: {
              'fill-color': '#6666ff',
              'fill-opacity': 0.3,
            },
          })
        })
        .catch((err) => console.log(err))
    }
  }, [rushMode, rushRadius, rushParams])

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
              .catch((err) => console.log(err))
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
          <MapInfo />
        </MapGL>
      )}
    </div>
  )
}

export default MapLayout
