
import { Header,Footer } from './components'
import { AllRoutes } from './routes/AllRoutes'
import './App.css';

function App() {

  return (
    <>
    <div className="app dark:bg-slate-800">
    <Header/>
    <AllRoutes />
    <Footer/>
    </div>
    </>
  )
}

export default App
