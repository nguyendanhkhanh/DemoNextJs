import React from 'react'
import styles from '../../styles/main-layout.module.scss'

interface Props {
  children: any
}

const HomeLayout = (props: Props) =>  {
  const {children} = props
  return (
    <div className={styles.container}>
      <h1>Main Layout</h1>
      <div>{children}</div>
    </div>
  )
}

export default HomeLayout
