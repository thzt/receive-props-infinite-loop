import React from 'react';

import NumberSelector from '../../number-selector/index.jsx';

<div>
    <div>
        <span>selected number: </span>
        <span>{selectedNumber}</span>
    </div>

    {/* 向子组件传递属性 */}
    <NumberSelector numbers={numbers} onChange={onChange} />
</div>