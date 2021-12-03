import React from 'react'
import styles from '../../styles/MainLayout.module.scss'
import Header from '../Header'
interface Props {
  children: any
}

const MainLayout = (props: Props) => {
  const { children } = props
  return (
    <div className={styles.container}>
      <Header title="Home" medicine={true} />
      <h1>Main Layout</h1>
      <div>{children}</div>
    </div>
  )
}

export default MainLayout
