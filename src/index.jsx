import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import statefulTemplate from 'stateful-template';

import './index.scss';
import Template from 'jsxt-loader!babel-loader!./index.template.jsx';
import state from './index.state';
import events from './index.events';

const Page = statefulTemplate({
    Template,
    state,
    events,
});

ReactDOM.render(
    <Page />,
    document.querySelector('#container')
);