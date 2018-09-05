import React from 'react'
import Link from 'gatsby-link'

import Container from '../components/Container'
import Hero from '../components/Hero'

import heroBg from '../images/hero-bg.jpg'
import heroBgMedium from '../images/hero-bg-medium.jpg'
import heroBgSmall from '../images/hero-bg-small.jpg'

import whatWeDo from '../images/what-we-do.jpg'
import whyWeDoIt from '../images/why-we-do-it.jpg'
import whoWeAre from '../images/who-we-are.jpg'

import './index.css'

const rows = [
  {
    title: 'What We Do',
    text:
      'We are a full service design and engineering consultancy specializing in esports and gaming products. We can take an idea at any stage, craft a strategy and execute it.',
    img: whatWeDo,
  },
  {
    title: 'Why We Do It',
    text:
      'We are passionate about the web and about gaming. We wanted to create a development agency that specializes in providing custom websites, applications, and branding to the gaming industry.',
    img: whyWeDoIt,
  },
  {
    title: 'Who We Are',
    text:
      "We are a team of talented and specialized engineers with a love for all things gaming and web. We have over a decade of experience and have worked with clients such as YMCA, Stanford, Berkeley, Pantheon, & CH2M. We know what we're doing.",
    img: whoWeAre,
  },
]

const IndexPage = () => (
  <div className="page page-index">
    <Hero
      images={[heroBgSmall, heroBgMedium, heroBg]}
      text={
        <span>
          Your Premier <span className="color-primary">Esports</span> Product
          Consultancy
        </span>
      }
    />
    <Container>
      <div className="index-grid">
        {rows.map((row, index) => (
          <div className="index-grid-row" key={index}>
            <div className="index-grid-item">
              <h3 className="index-grid-item-title">{row.title}</h3>
              <p className="index-grid-item-text">{row.text}</p>
            </div>
            <div className="index-grid-item">
              <img
                src={row.img}
                className="index-grid-item-img"
                alt=""
                role="presentation"
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  </div>
)

export default IndexPage
