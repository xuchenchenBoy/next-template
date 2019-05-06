import Head from 'next/head';
import Link from 'next/link'
import axios from 'axios'
import React from 'react'
import styles from '../styles/pages/index.less'

class IndexPage extends React.PureComponent {
  static async getInitialProps() {
    const res = await axios.get('http://rap2api.taobao.org/app/mock/10621/integral/user/statRank');
    return { stats: res.data }
  }

  componentDidMount() {
    console.log('did mount')
  }

  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <p className={styles.color}>Hello world!</p>
        <Link href="/about"><a href="">link about</a></Link>
      </div>
    );
  }
}

export default IndexPage;