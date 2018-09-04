import React from 'react'
import Link from 'gatsby-link'

import Container from '../components/Container'
import Hero from '../components/Hero'
import Button from '../components/Button'

import aboutHero from '../images/about-hero.jpg'
import aboutHeroMedium from '../images/about-hero-medium.jpg'
import aboutHeroSmall from '../images/about-hero-small.jpg'

import './what-we-do.css'

const services = [
  {
    title: 'User Experience',
    text:
      "We're huge proponents of user-centered design, products will live or die based on the quality of the user experience. Working with small and large clients has provided us with a solid foundation of principles that delight users and keep them coming back.",
  },
  {
    title: 'Development',
    text:
      "We've built sites and applications that serve millions of monthly users. We take advantage of the latest technology and trends to build the highest quality products.",
  },
  {
    title: 'User Interface Design',
    text:
      'Clean and consistent design is one of the corner stones of a successful application or product. We design for the user and thoroughly test all our decisions.',
  },
  {
    title: 'Branding',
    text:
      'If you need a complete branding experience, we can work with you to develop a brand users will fall in love with. From logos to typography and colors, we can help you stand out from the crowd.',
  },
  {
    title: 'Marketing',
    text:
      "There's not a point in building a great product if no one knows about it. We're able to help craft a marketing strategy that gets your product in front of your target market and focuses on conversions and user engagement.",
  },
]

const WhatWeDo = () => (
  <div className="page page-about">
    <Hero
      images={[aboutHeroSmall, aboutHeroMedium, aboutHero]}
      text="We Build Quality Digital Products"
      maxHeight="33vh"
    />
    <Container>
      <div className="page-intro">
        <p className="lede">
          <span className="logo">
            Turn<strong>Two</strong>
          </span>{' '}
          is a premier digital product development consultancy. With over a
          decade of experience, we've partnered with Fortune 500's as well as
          small startups to produce quality digital products and applications.
          With a focus on gaming and the esports industry, we are the choice to
          bring your product to life.
        </p>

        <p>
          <Button>Get Started</Button>
        </p>
      </div>

      <h2 className="header-underline">We Build Products</h2>
      <p>
        We help clients bring their ideas to life, from concept to final
        product. Whether you are starting with an idea or have an existing
        product, we have the experience to jump in and execute. We can help{' '}
        <strong>modernize</strong>, <strong>update</strong>, or{' '}
        <strong>rebuild</strong> your exsiting product. We're up-to-date with
        the current industry trends and technniques.
      </p>
      <div className="services">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <h3 className="service-title header-underline">{service.title}</h3>
            <p className="service-text">{service.text}</p>
          </div>
        ))}
      </div>
    </Container>
  </div>
)

export default WhatWeDo
