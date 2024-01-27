
// Used for all cards created
// A component written to avoid repeating the outermost div and className determination.

import React from 'react'
import styles from "./Card.module.scss"

const Card = ({children, cardClass}) => {
  return (
    <div className={`${styles.card} ${cardClass}`}>
      {children}
      </div>
  )
}

export default Card