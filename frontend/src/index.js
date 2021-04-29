import React from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from 'react-redux'
import Journal from "./App";
import {createStore} from 'redux'
import {reduceFunction} from './reducers'

const mapStateToProps = state => {
  return {
    Entries: state
  };
};

const store = createStore(reduceFunction);

const Container = connect(mapStateToProps)(Journal);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        
          <Container />
      
      </Provider>
    );
  };
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
  rootElement
);



export {store}