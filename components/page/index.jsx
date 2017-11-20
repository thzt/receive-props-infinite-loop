import statefulTemplate from 'stateful-template';

import Template from 'jsxt-loader!babel-loader!./parts/template.jsx';
import state from './parts/state';
import events from './parts/events';
import './parts/style.scss';

export default statefulTemplate({
    Template,
    state,
    events,
});