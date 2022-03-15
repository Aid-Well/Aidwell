import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import SearchResults from './containers/SearchResults'

class App extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <SearchResults/>
        )
    }
}

ReactDOM.render(
    (
    <Provider store = {store}>
    <App/>
    </Provider>
    ),
    document.getElementById('root')
  );

