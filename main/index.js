import React from 'react';
import ReactDom from 'react-dom';
import {registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start} from 'qiankun/es';
import Framework from './Framework';


function render({appContent}) {
    ReactDom.render(<Framework content={appContent}/>, document.getElementById('root'));
}

function getActiveRule(routerPrefix) {
    return location => location.pathname.startsWith(routerPrefix)
}

registerMicroApps([
    {
        name: 'app1',
        entry: '//localhost:7100',
        render,
        activeRule: getActiveRule('/app1')
    },
    {
        name: 'app2',
        entry: '//localhost:7101',
        render,
        activeRule: getActiveRule('/app2')
    }
]);

setDefaultMountApp('/app1');

start({
    prefetch: true,
    jsSandbox: true,
    singular: true,
    fetch: window.fetch
});

runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted');
});