import React, { useContext, useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import Link from '../ui/link'

let styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '26px',
    height: '22px',
    right: '30px',
    top: '30px',
    'z-index': 10,
  },
  bmBurgerBars: {
    background: '#151515',
    height: '2px',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '28px',
    width: '28px',
    right: 24,
    top: 26,
    color: '#151515',
  },
  bmCross: {
    background: '#151515',
    width: '2px',
    height: '20px',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: 0,
  },
  bmMenu: {
    background: 'white',
    color: '#151515',
    paddingTop: '45px',
    fontSize: '1.15em',
    display: 'flex',
    height: '100vh',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#151515',
    padding: '0.8em',
  },
  bmItem: {
    display: 'block',
    marginRight: 0,
    marginLeft: 0,
    padding: '12px 36px',
    color: '#151515',
    fontSize: '17px',
    lineHeight: '24px',
    textTransform: 'none',
    fontWeight: 600,
  },
  bmOverlay: {
    background: 'transparent',
  },
}

// make a new context
const MyContext = React.createContext()

// create the provider
const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)

  return (
    <MyContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen),
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}
// TODO remove or use
// create a button that calls a context function to set a new open state when clicked
// const Button = () => {
//   const ctx = useContext(MyContext)
//   return <button onClick={ctx.toggleMenu}>Toggle menu</button>
// }

// create a navigation component that wraps the burger menu
const Navigation = ({ navLinks }) => {
  const ctx = useContext(MyContext)

  return (
    <Menu
      right
      width="300px"
      styles={styles}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
    >
      {navLinks.map((nav, index) => (
        <Link
          key={`${nav.label}${index}`}
          id={nav.id}
          to={nav.page}
          className="menu-item"
          activeClassName="active"
        >
          {nav.label}
        </Link>
      ))}
    </Menu>
  )
}

// default export here
const BurgerMenu = ({ navLinks }) => {
  return (
    <MyProvider>
      <div>
        {/*TODO remove or use*/}
        {/*<Button />*/}
        <Navigation navLinks={navLinks} />
      </div>
    </MyProvider>
  )
}

export default BurgerMenu
