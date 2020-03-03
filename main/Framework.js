import React from 'react';

function goto(title, href) {
    return function (e) {
        e?.preventDefault();
        window.history.pushState({}, title, href);
    }
}

function SubApp(props) {
    const {content} = props;
    return (
        <div>
            <div dangerouslySetInnerHTML={{__html: content}} />
        </div>
    )
}

export default function Framework(props) {
    return (
        <div>
            <ul>
                <li onClick={goto('App1', '/app1')}>app1</li>
                <li onClick={goto('App2', '/app2')}>app2</li>
            </ul>
            <SubApp {...props}/>
        </div>
    )
}