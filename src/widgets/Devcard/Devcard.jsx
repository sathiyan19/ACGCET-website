import React from 'react'

import './Devcard.css'

const Devcard = ({title,desc,link,pic}) => {
  return (
    <article class="devcard">
  <img
    class="devcard__background"
    // src="https://i.imgur.com/QYWAcXk.jpeg"
    src={pic}
    alt="Developer pic"
    width="1920"
    height="2193"
  />
  <div class="devcard__content | flow">
    <div class="devcard__content--container | flow">
      <h2 class="devcard__title">{title}</h2>
      <p class="devcard__description">
        {desc}
      </p>
    </div>
    <a href={link} target='blank' class="devcard__button">LinkedIn</a>
  </div>
</article>
  )
}

export default Devcard