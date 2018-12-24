import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Layout from './connect.config';
import store from "./store";


import './styles/index.scss';
import 'antd/dist/antd.css'


/**
 * redering the app after wraping the Layout component into 
 * a store provider. 
 * the provider pass the store to all the child component using props,
 * this way all the child components will have access to
 */
ReactDOM.render(<Provider store={store}>
                <Layout/>  
                </Provider>, document.getElementById('root'));


