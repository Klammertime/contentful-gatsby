import React, { useContext, useState } from 'react'
import { slide as Menu } from 'react-burger-menu'

let styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '26px',
    height: '22px',
    right: '30px',
    top: '30px',
  },
  bmBurgerBars: {
    background: '#151515',
    height: '2px',
    marginTop: '4px',
    marginBottom: '4px',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '28px',
    width: '28px',
    right: 24,
    top: 24,
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

// create a button that calls a context function to set a new open state when clicked
// const Button = () => {
//   const ctx = useContext(MyContext)
//   return <button onClick={ctx.toggleMenu}>Toggle menu</button>
// }

// create a navigation component that wraps the burger menu
const Navigation = () => {
  const ctx = useContext(MyContext)

  return (
    <Menu
      right
      width="300px"
      styles={styles}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
    >
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="portfolio" className="menu-item" href="/portfolio">
        Portfolio
      </a>
      <a id="blog" className="menu-item" href="/blog">
        Blog
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  )
}

// default export here
const BurgerMenu = () => {
  return (
    <MyProvider>
      <div>
        {/*<Button />*/}
        <Navigation />
      </div>
    </MyProvider>
  )
}

export default BurgerMenu
