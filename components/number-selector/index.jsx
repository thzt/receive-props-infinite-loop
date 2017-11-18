import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import statefulTemplate from 'stateful-template';

import './index.scss';
import Template from 'jsxt-loader!babel-loader!./index.template.jsx';
import state from './index.state';
import events from './index.events';

export default statefulTemplate({
    Template,
    state,
    events,
});