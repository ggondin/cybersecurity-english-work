import React from 'react'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.backgroundHome}>
      <div className={styles.mission}>
        <span className={styles.missionTitle}>
          <p>Ânima Cyber Security</p>
        </span>
        <span className={styles.paragraph}>
          <p>
            Our mission is to empower individuals and organizations with the knowledge and tools to defend against the ever-evolving landscape of cyber threats. We are dedicated to providing comprehensive, accessible, and up-to-date information on various types of malware, along with practical guidance on how to safeguard your digital world.
          </p>
        </span>
      </div>

      <div className={styles.missionExplained}>
        <div className={styles.missionExplainedBox}>

          <span className={styles.missionExplainedTitle}>
            <p>Mission</p>
          </span>

          <span className={styles.missionExplainedParagraph}>
            <p>Our commitment to cybersecurity education is rooted in the belief that knowledge is the first line of defense against cyberattacks. We strive to demystify the intricate world of malware, ensuring that everyone, from beginners to experts, can understand the threats they face and the steps they can take to mitigate them.</p>
            <p>Through our educational resources, we aim to foster a safer digital environment, where individuals and businesses can navigate the online realm with confidence and resilience. Our mission is to make cyber security knowledge accessible, understandable, and actionable for all, enabling a more secure and informed society.</p>
          </span>

        </div>
      </div>
    </div>
  )
}
