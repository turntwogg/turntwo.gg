import React from 'react'

import Container from '../Container'

import './Hero.css'

const breakPoints = [
  '(max-width: 600px)',
  '(min-width: 601px)',
  '(min-width: 1201px)',
]

const HeroImages = ({ images }) => {
  const workingImages = images.filter(image => image)
  const defaultImage = workingImages[0]

  return (
    <picture>
      {images.map((image, index) => (
        <source srcSet={image} media={breakPoints[index]} key={index} />
      ))}
      <img alt="" className="hero-img" src={defaultImage} role="presentation" />
    </picture>
  )
}

const Hero = ({ images, maxHeight, text, ...rest }) => (
  <div className="hero" {...rest}>
    <div className="hero-inner" style={{ maxHeight }}>
      <div className="hero-content">
        <Container>
          <h2 className="hero-text">{text}</h2>
        </Container>
      </div>
      <HeroImages images={images} />
    </div>
  </div>
)

export default Hero
