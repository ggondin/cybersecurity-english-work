import React from 'react'
import styles from './TeamCard.module.css'

export default function TeamCard({ id, course, name, description }) {
     return (

          <div className={styles.studentCard}>
               <p className={styles.course}>{course}</p>
               <h4 className={styles.name}>{name}</h4>
               <p className={styles.description}>{description}</p>
          </div>

     )
}
