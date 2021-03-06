import React from 'react'
import Link from 'gatsby-link'

import Container from '../components/Container'
import Hero from '../components/Hero'
import Button from '../components/Button'

import aboutHero from '../images/about-hero.jpg'
import aboutHeroMedium from '../images/about-hero-medium.jpg'
import aboutHeroSmall from '../images/about-hero-small.jpg'

import services from '../data/services'

import './what-we-do.css'

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
          <Button to="/contact">Get Started</Button>
        </p>
      </div>

      <h2 className="header-underline">We Build Products</h2>
      <p style={{ marginBottom: 48 }}>
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
