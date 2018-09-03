import React, { PureComponent } from 'react'
import Link from 'gatsby-link'
import { withRouter } from 'react-router'

import './Header.css'

const links = [
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'Projects',
    to: '/projects',
  },
  {
    title: 'Contact',
    to: '/contact',
  },
]

class Header extends PureComponent {
  state = {
    navHidden: true,
  }

  handleClick = () => {
    this.setState(prevState => ({ navHidden: !prevState.navHidden }))
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navHidden: true })
    }
  }

  render() {
    return (
      <header className="site-header">
        <Link to="/" className="site-title">
          Turn<strong>Two</strong>
        </Link>

        <button className="site-nav-trigger" onClick={this.handleClick}>
          Menu
          <span className="hamburger">
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </span>
        </button>

        <nav className="site-nav" aria-hidden={this.state.navHidden}>
          {links.map((link, index) => (
            <Link
              to={link.to}
              className="site-nav-link"
              activeClassName="site-nav-link--is-active"
              key={index}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </header>
    )
  }
}

export default withRouter(Header)
