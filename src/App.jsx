import AppFooter from "./components/AppFooter/AppFooter"
import AppHeader from "./components/AppHeader/AppHeader"
import Details from "./components/Details/Details"
import Products from "./components/Products/Products"


const App = () => {
  return (
    <div>
    <AppHeader/>
    <Details/>
    <Products/>
    <AppFooter/>
    </div>
  )
}

export default App