import React from 'react'
import ReactDom from 'react-dom'

import App from './src/index.js'


export async function bootstrap() {
    console.log('react app bootstrap')
}

export async function mount(props) {
    ReactDom.render(<App/>, document.getElementById('app1_root'));
}

export async function unmount(props) {
    ReactDom.unmountComponentAtNode(document.getElementById('app1_root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
    bootstrap().then(mount);
}