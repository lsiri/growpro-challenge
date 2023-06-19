import './App.css'
import BicycleList from './pages/BicycleList'
import {basePrice} from 'src/utils/pricingManager';
function App() {

  const date = new Date();

  return (
    <div className="App">
      <header>
        <h1>Alquiler de bicicletas</h1>
        <h2>¡Tenemos las mejores bicicletas en alquiler!</h2>
        <h3>Nuestra tarifa de alquiler para el día de hoy ({date.toLocaleDateString()}) 
        es de {basePrice()} USD por dia + el valor agregado de la bici seleccionada. </h3>
      </header>
      <section>
        <div>
          Por favor, seleccione la bici que desea alquilar desde el siguiente listado
        </div>

        <div style={{paddingTop:"20px"}}>
          <BicycleList />
        </div>
      </section>

    </div>
  )
}

export default App
