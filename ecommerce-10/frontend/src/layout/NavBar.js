import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Nav } from 'react-bootstrap'
import { logout } from '../actions/userActions'

export const NavBar = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5'>
      <div className='container'>
        <LinkContainer to='/'>
          <a className='navbar-brand'>The Shop</a>
        </LinkContainer>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item active'>
              <LinkContainer to='/cart'>
                <a className='nav-link'>
                  {userInfo ? (
                    <>
                      <i className='fas fa-shopping-cart'></i> Cart (
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)})
                    </>
                  ) : (
                    <>
                      <i className='fas fa-shopping-cart'></i> Cart
                    </>
                  )}
                </a>
              </LinkContainer>
            </li>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='/'
                    id='navbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    {userInfo ? userInfo.name : <i className='fa fa-user'></i>}
                  </a>
                  <div
                    className='dropdown-menu dropdown-menu-end animate slideIn'
                    aria-labelledby='navbarDropdown'
                  >
                    {userInfo ? (
                      //   <a className='dropdown-item' href='/'>
                      //   Another action
                      // </a>
                      <div title={userInfo.name} id='username'>
                        <LinkContainer to='/profile'>
                          <a className='dropdown-item'>My Profile</a>
                        </LinkContainer>
                        <a className='dropdown-item' onClick={logoutHandler}>
                          Logout
                        </a>
                        {/* <NavDropdown.Item onClick={logoutHandler}>
                          Logout
                        </NavDropdown.Item> */}
                      </div>
                    ) : (
                      <LinkContainer to='/login'>
                        <Nav.Link>
                          <i className='fas fa-user'></i> Sign In
                        </Nav.Link>
                      </LinkContainer>
                    )}

                    {userInfo && userInfo.isAdmin && (
                      <>
                        <div className='dropdown-divider' />
                        <LinkContainer to='/admin/userlist'>
                          <a className='dropdown-item'>Shoppers</a>
                        </LinkContainer>
                        <LinkContainer to='/admin/productlist'>
                          <a className='dropdown-item'>Products</a>
                        </LinkContainer>
                        <LinkContainer to='/admin/orderlist'>
                          <a className='dropdown-item'>Orders</a>
                        </LinkContainer>
                      </>
                    )}

                  </div>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}
