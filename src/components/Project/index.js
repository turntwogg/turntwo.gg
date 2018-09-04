import React from 'react'

import Button from '../Button'
import Ratio from '../Ratio'

const emptyImg = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='

import './Project.css'

const Project = ({ project }) => (
  <div className="project">
    <div className="project-content">
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="project-action">
        <Button href={project.url}>View Project</Button>
      </div>
    </div>
    <div className="project-img">
      <Ratio ratio={3 / 4}>
        <picture>
          <source srcSet={project.img} media="(min-width: 750px)" />
          <img src={emptyImg} alt="" role="presentation" />
        </picture>
      </Ratio>
    </div>
  </div>
)

export default Project
