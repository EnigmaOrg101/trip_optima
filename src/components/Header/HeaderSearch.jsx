import classes from './HeaderSearch.module.scss'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { GeoapifyGeocoderAutocomplete } from '@geoapify/react-geocoder-autocomplete'
import { useMap } from 'react-map-gl'
import mapboxgl from 'mapbox-gl'
import useMarkerStore from '../../store/markerStore'

const HeaderSearch = () => {
  const { map } = useMap()

  const marker = useMarkerStore((state) => state.searchMarker)
  const setMarker = useMarkerStore((state) => state.setSearchMarker)

  const onSelect = (result) => {
    if (result) {
      const { lat, lon: lng } = result.properties
      console.log(lat, lng)

      if (marker) {
        marker.remove()
      }

      const newMarker = new mapboxgl.Marker({
        color: '#333333b9',
      })
        .setLngLat([lng, lat])
        .addTo(map.getMap())

      setMarker(newMarker)

      map.flyTo({
        center: [lng, lat],
        zoom: 12,
        curve: 2,
        speed: 1.2,
      })
    } else {
      console.error('Invalid result object:', result)
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
      className={classes.header__search}
    >
      <MagnifyingGlass color="#333333b9" size={24} />
      <GeoapifyGeocoderAutocomplete
        filterByCountryCode={['np']}
        placeholder="Search for a location"
        placeSelect={onSelect}
      />
    </form>
  )
}

export default HeaderSearch
