import classes from './App.module.scss'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import MapLayout from './components/Map/Map'

import { IconContext } from '@phosphor-icons/react'
import { MapProvider } from 'react-map-gl'
import { GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import useSidebarStore from './store/sidebarStore'

import 'mapbox-gl/dist/mapbox-gl.css'
import ProspectMode from './components/ProspectMode/ProspectMode'

function App() {
  const showProspect = useSidebarStore((state) => state.showProspect)

  return (
    <>
      <GeoapifyContext apiKey="70982f5ded674a84abaa673ee6b6d2c7">
        <MapProvider>
          <IconContext.Provider
            value={{
              color: '#333',
            }}
          >
            {showProspect && <ProspectMode />}
            <div className={classes.App}>
              <div className={classes.App__up}>
                <Header />
              </div>
              <div className={classes.App__down}>
                <Sidebar />
                <MapLayout />
              </div>
            </div>
          </IconContext.Provider>
        </MapProvider>
      </GeoapifyContext>
    </>
  )
}

export default App
