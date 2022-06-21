
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// PAGE LAYOUTS
import { NavBar } from './layout/NavBar'
import SearchBar from './layout/SearchBar'
//import SearchBar from './layout/SearchBar'


import RegisterScreen from './pages/RegisterScreen'
import LoginScreen from './pages/LoginScreen'
import ProductScreen from './pages/ProductScreen'
import PlaceOrderScreen from './pages/PlaceOrderScreen'
import ShippingScreen from './pages/ShippingScreen'
import PaymentScreen from './pages/PaymentScreen'
import CartScreen from './pages/CartScreen'
import OrderScreen from './pages/OrderScreen'
import UserListScreen from './pages/UserListScreen'
import UserEditScreen from './pages/UserEditScreen'
import Footer from './components/Footer'
import HomeScreen from './pages/HomeScreen'


const App = () => {
  return (
    <Router>
      <NavBar />
      <main className='py-3 mt-5'>
      <Route render={({ history }) => <SearchBar history={history} />} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/placeorder' component={PlaceOrderScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/order/:id' component={OrderScreen} />

        <Route path='/admin/userlist' component={UserListScreen} />
        <Route path='/admin/user/:id/edit' component={UserEditScreen} />
        <Route path='/' component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  )
}

export default App;
