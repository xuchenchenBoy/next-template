import Head from 'next/head';
import Link from 'next/link'
import React from 'react'
import styles from '../styles/pages/home.less'
import * as types from '../model/home/types'
import { connect } from 'react-redux'

class Home extends React.PureComponent {
  static async getInitialProps({ ctx }) {
    const { store } = ctx;
    store.dispatch({
      type: types.HOME_INFO_REQ
    })
  }

  componentDidMount() {
    console.log('did mount')
  }

  render() {
    const { homeInfo } = this.props;
    const { status } = homeInfo;

    return (
      <div>
        <Head>
          <title>home title</title>
        </Head>
        <p className={styles.color}>{status}</p>
        <Link href="/about"><a href="">link about</a></Link>
      </div>
    );
  }
}

export default connect((state => ({ ...state.home })))(Home);