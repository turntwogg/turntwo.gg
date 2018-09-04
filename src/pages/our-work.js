import React from 'react'

import Container from '../components/Container'
import Hero from '../components/Hero'
import Project from '../components/Project'

import projectsHero from '../images/projects-hero.jpg'
import projectsHeroMedium from '../images/projects-hero-medium.jpg'
import projectsHeroSmall from '../images/projects-hero-small.jpg'

import projects from '../data/projects'

const OurWork = () => (
  <div className="page page-projects">
    <Hero
      images={[projectsHeroSmall, projectsHeroMedium, projectsHero]}
      text="Our Work"
      maxHeight="33vh"
    />
    <Container>
      <div className="projects">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </Container>
  </div>
)

export default OurWork
