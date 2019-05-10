import Head from 'next/head';
import React from 'react'
import styles from '@styles/pages/home.less'

class Home extends React.PureComponent {
  static async getInitialProps({ ctx }) {
    
  }

  render() {

    return (
      <div>
        <Head>
          <title>home title</title>
        </Head>
        <p className={styles.color}>home</p>
      </div>
    );
  }
}

export default Home