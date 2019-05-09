import Head from 'next/head';
import React from 'react'

class Index extends React.PureComponent {
  static async getInitialProps() {}

  render() {
    return (
      <div>
        <Head>
          <title>index title</title>
        </Head>
        <a href="/home">link home</a>
      </div>
    );
  }
}

export default Index;