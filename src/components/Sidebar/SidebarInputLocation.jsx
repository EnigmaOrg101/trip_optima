import classes from './SidebarInputLocation.module.scss'
import { GeoapifyGeocoderAutocomplete } from '@geoapify/react-geocoder-autocomplete'
import { PencilSimple } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'

import { useMap } from 'react-map-gl'
import mapboxgl from 'mapbox-gl'

import useLocationStore from '../../store/locationStore'
import useMarkerStore from '../../store/markerStore'
import SidebarInputLocationIcon from './SidebarInputLocationIcon'
import useSidebarStore from '../../store/sidebarStore'

const GEOAPIFY_API_KEY = '70982f5ded674a84abaa673ee6b6d2c7'

const SidebarInputLocation = () => {
  const { map } = useMap()

  const marker = useMarkerStore((state) => state.marker)

  const setMarker = useMarkerStore((state) => state.setMarker)

  const [inputActivated, setInputActivated] = useState(false)

  const setCurrentLocation = useLocationStore(
    (state) => state.setCurrentLocation
  )
  const setDestinationLocation = useLocationStore(
    (state) => state.setDestinationLocation
  )

  const destinationAddress = useLocationStore(
    (state) => state.destinationAddress
  )

  const setDestinationAddress = useLocationStore(
    (state) => state.setDestinationAddress
  )

  const currentLocation = useLocationStore((state) => state.currentLocation)

  const destinationLocation = useLocationStore(
    (state) => state.destinationLocation
  )

  const travelMode = useLocationStore((state) => state.travelMode)

  const routeMode = useLocationStore((state) => state.routeMode)

  const avoidHighways = useLocationStore((state) => state.avoidHighways)

  const avoidTolls = useLocationStore((state) => state.avoidTolls)

  const setDistance = useLocationStore((state) => state.setDistance)

  const setDuration = useLocationStore((state) => state.setDuration)

  const setAlertMode = useLocationStore((state) => state.setAlertMode)

  const reroute = useLocationStore((state) => state.reroute)

  const setSidebarMode = useSidebarStore((state) => state.setSidebarMode)

  const sourcePlaceSelect = (result) => {
    if (result) {
      const { lat, lon: lng } = result.properties
      setCurrentLocation([lng, lat])
    } else {
      console.error('Invalid result object:', result)
    }
  }

  const destinationPlaceSelect = (result) => {
    if (result) {
      const { lat, lon: lng } = result.properties
      setDestinationLocation([lng, lat])
      setDestinationAddress(result.properties.formatted)

      if (marker) {
        marker.remove()
      }

      const newMarker = new mapboxgl.Marker({})
        .setLngLat([lng, lat])
        .addTo(map.getMap())

      setMarker(newMarker)

      map.flyTo({
        center: [lng, lat],
        zoom: 14,
      })
    } else {
      console.error('Invalid result object:', result)
    }
  }

  useEffect(() => {
    if (reroute) reRoute()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reroute])

  useEffect(() => {
    if (currentLocation && destinationLocation) showRoute()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentLocation,
    destinationLocation,
    travelMode,
    routeMode,
    avoidTolls,
    avoidHighways,
  ])

  const xClickHandler = (e) => {
    e.preventDefault()
    setInputActivated(!inputActivated)
  }

  const showRoute = async () => {
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/routing?waypoints=${currentLocation[1]},${
          currentLocation[0]
        }|${destinationLocation[1]},${destinationLocation[0]}&mode=${
          travelMode.api
        }&apiKey=${GEOAPIFY_API_KEY}&type=${routeMode}${
          avoidHighways ? '&avoid=highways' : ''
        }${avoidTolls ? '&avoid=tolls' : ''}&distance&format=geojson`
      )
      const response_json = await fetch(
        `https://api.geoapify.com/v1/routing?waypoints=${currentLocation[1]},${
          currentLocation[0]
        }|${destinationLocation[1]},${destinationLocation[0]}&mode=${
          travelMode.api
        }&apiKey=${GEOAPIFY_API_KEY}&type=${routeMode}${
          avoidHighways ? '&avoid=highways' : ''
        }${avoidTolls ? '&avoid=tolls' : ''}&distance&format=json`
      )
      const data = await response.json()
      console.log(data)

      if (data.properties.waypoints[1].lon === 84.4404216) {
        console.log('You are potentially passing through a danger route')
        setAlertMode(true)
        setSidebarMode('Explore')
      }
      const data_json = await response_json.json()

      const distance = data_json.results[0].distance
      const distanceInKm = (distance / 1000).toFixed(2)

      const duration = data_json.results[0].time

      const hours = Math.floor(duration / 3600)
      const minutes = Math.floor((duration % 3600) / 60)

      let formattedDuration = ''

      if (hours > 0) {
        formattedDuration += `${hours}hr `
      }

      formattedDuration += `${minutes}min`

      setDistance(distanceInKm)
      setDuration(formattedDuration)

      if (!data) return

      if (map.getMap().getLayer('route')) {
        map.getMap().removeLayer('route')
      }

      if (map.getMap().getSource('route')) {
        map.getMap().removeSource('route')
      }

      map.getMap().addSource('route', {
        type: 'geojson',
        data: data,
      })

      map.getMap().addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#0074D9',
          'line-opacity': 0.7,
          'line-width': 7,
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  const reRoute = async () => {
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/routing?waypoints=${currentLocation[1]},${currentLocation[0]}|${destinationLocation[1]},${destinationLocation[0]}&mode=${travelMode.api}&apiKey=${GEOAPIFY_API_KEY}&type=${routeMode}&avoid=location:27.690494,84.440231|location:27.689594,84.440251|location:27.688405,84.440190|location:27.687541,84.440007|location:27.685993,84.439886|location:27.684877,84.439743|location:27.688855,84.439011|location:27.690116,84.438950|location:27.689684,84.441431|location:27.687901,84.441776|location:27.686425,84.441288|location:27.686893,84.437852|location:27.686677,84.438991|location:27.687793,84.438686|location:27.691268,84.439093|location:27.691340,84.441309|location:27.690224,84.441390|location:27.691088,84.440231|location:27.690206,84.440170|location:27.688918,84.440093|location:27.686713,84.439886|location:27.688435,84.440028|location:27.688713,84.440076|location:27.689257,84.440105|location:27.691456,84.440266|location:27.691810,84.440302&distance&format=geojson`
      )
      const response_json = await fetch(
        `https://api.geoapify.com/v1/routing?waypoints=${currentLocation[1]},${currentLocation[0]}|${destinationLocation[1]},${destinationLocation[0]}&mode=${travelMode.api}&apiKey=${GEOAPIFY_API_KEY}&type=${routeMode}&avoid=location:27.690494,84.440231|location:27.689594,84.440251|location:27.688405,84.440190|location:27.687541,84.440007|location:27.685993,84.439886|location:27.684877,84.439743|location:27.688855,84.439011|location:27.690116,84.438950|location:27.689684,84.441431|location:27.687901,84.441776|location:27.686425,84.441288|location:27.686893,84.437852|location:27.686677,84.438991|location:27.687793,84.438686|location:27.691268,84.439093|location:27.691340,84.441309|location:27.690224,84.441390|location:27.691088,84.440231|location:27.690206,84.440170|location:27.688918,84.440093|location:27.686713,84.439886|location:27.688435,84.440028|location:27.688713,84.440076|location:27.689257,84.440105|location:27.691456,84.440266|location:27.691810,84.440302&distance&format=json`
      )
      const data = await response.json()
      console.log(data)

      const data_json = await response_json.json()

      const distance = data_json.results[0].distance
      const distanceInKm = (distance / 1000).toFixed(2)

      const duration = data_json.results[0].time

      const hours = Math.floor(duration / 3600)
      const minutes = Math.floor((duration % 3600) / 60)

      let formattedDuration = ''

      if (hours > 0) {
        formattedDuration += `${hours}hr `
      }

      formattedDuration += `${minutes}min`

      setDistance(distanceInKm)
      setDuration(formattedDuration)

      if (!data) return

      if (map.getMap().getLayer('route')) {
        map.getMap().removeLayer('route')
      }

      if (map.getMap().getSource('route')) {
        map.getMap().removeSource('route')
      }

      map.getMap().addSource('route', {
        type: 'geojson',
        data: data,
      })

      map.getMap().addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#007',
          'line-opacity': 0.7,
          'line-width': 7,
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={classes['sidebar__input-location']}>
      <label htmlFor="location">Location</label>

      <form className={classes['sidebar__input-container']}>
        <SidebarInputLocationIcon />
        {inputActivated ? (
          <GeoapifyGeocoderAutocomplete
            placeholder="From"
            filterByCountryCode={['np']}
            placeSelect={sourcePlaceSelect}
          />
        ) : (
          <>
            <div className={classes['currentLocation']}>
              <span>Your location</span>
              <button onClick={xClickHandler} className={classes['x']}>
                <PencilSimple
                  size={20}
                  color="rgba(0, 0, 0, 0.5)"
                  className={classes['icon']}
                />
              </button>
            </div>
          </>
        )}

        <GeoapifyGeocoderAutocomplete
          placeholder="Type destination or click on map"
          placeSelect={destinationPlaceSelect}
          filterByCountryCode={['np']}
          value={destinationAddress}
        />
      </form>
    </div>
  )
}

export default SidebarInputLocation
