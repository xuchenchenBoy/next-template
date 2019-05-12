import Head from 'next/head';
import React from 'react'
import styles from '@styles/pages/home.less'

const Home = () => {
  return (
    <div>
      <Head>
        <title>home title</title>
      </Head>
      <p className={styles.color}>home</p>
    </div>
  )
}

export default Home