import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import store from './store'
import SearchResults from './containers/SearchResults'
import Login from './containers/Login';
import Main from './containers/Main';

//user/signup -> for account sign up
//user/login -> for account login
//main -> after logging in, main page
//main/findCharities - > form for finding charities
//user/makeAD -> make a donation

class App extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Login />} />
                        <Route exact path='/main' element={<Main />} />
                        <Route exact path='/searchResults' element={<SearchResults />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

ReactDOM.render(
    (
    <Provider store = {store}>
    <App />
    </Provider>
    ),
    document.getElementById('root')
  );

