import React from 'react'

import Container from '../Container'
import Button from '../Button'
import Divider from '../Divider'

import './Footer.css'

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer-top">
      <Container>
        <div className="site-footer-block" style={{ textAlign: 'center' }}>
          <p>Interested in working with us? Drop us a line</p>
          <p>
            <Button href="mailto:hello@turntwo.gg">hello@turntwo.gg</Button>
          </p>
        </div>

        <Divider light type="small" />

        <div className="site-footer-block">
          <ul className="social-media-list">
            <li className="social-media-list-item">
              <a
                className="social-media-list-link"
                href="//twitter.com/turntwogg"
              >
                Twitter
              </a>
            </li>
            <li className="social-media-list-item">
              <a
                className="social-media-list-link"
                href="//github.com/turntwogg"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <Divider light type="small" />

        <p className="site-footer-copyright">
          &copy;{' '}
          <span className="logo">
            Turn<strong>Two</strong>
          </span>, inc. All Rights Reserved.
        </p>
      </Container>
    </div>
  </footer>
)

export default Footer
