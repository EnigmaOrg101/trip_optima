import classes from './App.module.scss'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import MapLayout from './components/Map/Map'

import { IconContext } from '@phosphor-icons/react'
import { MapProvider } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

function App() {
  return (
    <>
      <MapProvider>
        <IconContext.Provider
          value={{
            color: '#333',
          }}
        >
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
    </>
  )
}

export default App
