import React from 'react';
import dva, { connect } from 'dva-no-router';
import { Provider } from 'react-redux';
import model from '../model/index';

const checkServer = () => Object.prototype.toString.call(global.process) === '[object process]';

const __NEXT_DVA_STORE__ =  '__NEXT_DVA_STORE__'

function createDvaStore(initialState) {
  let app;
  if (initialState) {
    app = dva({
      initialState,
    });
  } else {
    app = dva({});
  }
  const isArray = Array.isArray(model);
  if (isArray) {
    model.forEach((m) => {
      app.model(m);
    });
  } else {
    app.model(model);
  }
  app.router(() => {});
  app.start();
  const store = app._store
  return store;
}

function getOrCreateStore(initialState) {
  const isServer = checkServer();
  if (isServer) { // run in server
    return createDvaStore(initialState);
  }
  if (!window[__NEXT_DVA_STORE__]) {
    window[__NEXT_DVA_STORE__] = createDvaStore(initialState);
  }
  return window[__NEXT_DVA_STORE__];
}

export default function withDva(...args) {
  return function CreateNextPage(Component) {
    const ComponentWithDva = (props = {}) => {
      const { store, initialProps, initialState } = props;
      const ConnectedComponent = connect(...args)(Component);
      const initStore = store && store.dispatch 
        ? store 
        : getOrCreateStore(initialState)
      return React.createElement(
        Provider,
        { store: initStore },
        React.createElement(ConnectedComponent, {
          ...initialProps,
          store: initStore
        }),
      );
    };
    ComponentWithDva.getInitialProps = async (props = {}) => {
      const isServer = checkServer();
      const store = getOrCreateStore(props.req);
      const initialProps = Component.getInitialProps
        ? await Component.getInitialProps({ ...props, isServer, store })
        : {};
      return {
        store,
        initialProps,
        initialState: store.getState(),
      };
    };
    return ComponentWithDva;
  };
}
