import * as React from 'react';

export default (props) => <div>{props.children() || null}</div>;
