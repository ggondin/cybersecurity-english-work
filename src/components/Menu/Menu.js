import React from 'react'
import styles from './Menu.module.css'
import AnimasecLogo from '../../assets/animasec-logo.png'
import AnimaLogo from '../../assets/anima-logo.png'
import MenuLink from '../MenuLink/menuLink'
import Icon from '../Icon/Icon'

export default function Menu() {
     return (
          <header className={styles.background}>
               <nav className={styles.nav}>
                    <Icon src={AnimasecLogo} alt='Logo do ANIMASEC' width='150px' height='104.082px' margin="0 10% 0 0" />
                    <MenuLink to='/'>HOME</MenuLink>
                    <MenuLink to='/malwares'>MALWARES</MenuLink>
                    <MenuLink to='/team'>MEET THE TEAM</MenuLink>
                    <Icon  src={AnimaLogo} alt='Logo do ANIMASEC' width='140px' height='140px' margin="0 0 0 10%" />

               </nav>
          </header>
     )
}
