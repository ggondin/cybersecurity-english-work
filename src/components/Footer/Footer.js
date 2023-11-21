import Icon from '../../components/Icon/Icon'
import React from 'react'
import IconLinkedin from '../../assets/icon-linkedin.png'
import IconTwitter from '../../assets/icon-twitter.png'
import IconEmail from '../../assets/icon-email.png'
import styles from './Footer.module.css'
import FooterLink from '../FooterLink/FooterLink'
import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
     const location = useLocation();
     const currentQuery = window.location.pathname
     console.log('current query',currentQuery, location)

     return (
          <>
               <footer className={styles.background}>
                    <div className={styles.allFooterContent}>
                         <div className={styles.allFooterTextContent}>
                              <div className={styles.aboutUs}>

                                   <span className={styles.text}>
                                        <p className={styles.title}>ABOUT</p>
                                        <p className={styles.paragraph}>Our mission is to empower individuals and organizations with the knowledge and tools to defend against the ever-evolving landscape of cyber threats. We are dedicated to providing comprehensive, accessible, and up-to-date information on various types of malware, along with practical guidance on how to safeguard your digital world.</p>
                                   </span>

                              </div>

                              <div className={styles.line}></div>

                              <div className={styles.navigate}>
                                   <p className={styles.title}>NAVIGATE</p>
                                   <span className={styles.spanLink}>
                                        <FooterLink className={styles.link} to='/'>HOME</FooterLink>
                                        <FooterLink className={styles.link} to='/malwares'>MALWARES</FooterLink>
                                        <FooterLink className={styles.link} to='/team'>MEET THE TEAM</FooterLink>
                                   </span>
                              </div>
                         </div>

                         <div className={styles.copyright}>
                              <p>© 2023 Ânima Cyber Security | All Rights Reserved
                                   Privacy Policy | Terms and Conditions
                              </p>

                              <span className={styles.icons}>
                                   <Icon src={IconLinkedin} width='30px' height='30px' margin='0 10% 0 10%' />
                                   <Icon src={IconTwitter} width='30px' height='30px' margin='0 10% 0 10%' />
                                   <Icon src={IconEmail} width='30px' height='30px' margin='0 10% 0 10%' />
                              </span>
                         </div>
                    </div>

               </footer>
          </>
     )
}
