import classes from "./App.module.scss";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MapLayout from "./components/Map/Map";

function App() {
  return (
    <>
      <div className={classes.App}>
        <div className={classes.App__up}>
          <Header />
        </div>
        <div className={classes.App__down}>
          <Sidebar />
          <MapLayout />
        </div>
      </div>
    </>
  );
}

export default App;
