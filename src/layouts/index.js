import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import 'normalize.css/normalize.css'
import './index.css'

const Layout = ({ children, data }) => (
  <div className="site">
    <Helmet
      title={`${
        data.site.siteMetadata.title
      } | Your Premier Esports Product Consultancy`}
      meta={[
        {
          name: 'description',
          content: 'Your Premier Esports Product Consultancy',
        },
      ]}
    />
    <Header />
    <main className="site-content">{children()}</main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
