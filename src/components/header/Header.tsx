import styles from './Header.module.css';

import RocketSvg from '../../assets/rocket.svg';

export function Header () {
  return (
    <header className={styles.heading}>
      <img src={RocketSvg} alt="" />
      <h1>alpha<span>do</span><span>it</span></h1>
    </header>
  )
}