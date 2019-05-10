
import Link from 'next/link';
import React from 'react';
import WithDva from '../utils/store';

class Page extends React.Component {
  static async getInitialProps(props) {
    const {
      pathname, query, isServer, store,
    } = props;
    await store.dispatch({ type: 'index/init' });
    return {
      pathname, 
      query, 
      isServer, 
    };
  }

  clickDiv = () => {
    this.props.dispatch({ 
      type: 'index/caculate', 
      delta: 1 
    })
  }

  render() {
    const { index } = this.props;
    const { count } = index;
    return (
      <div onClick={this.clickDiv}>
        <p>click me</p>
        <p>{count}</p>
      </div>
    );
  }
}

export default WithDva((state) => { return { index: state.index }; })(Page);
