import * as React from 'react';

import { Component, ComponentProps, ComponentContext } from 'platform/api/components';

export interface Props extends ComponentProps {}

interface State {}

class CustomComponent extends Component<Props, State> {
    constructor(props: Props, context: ComponentContext) {
        super(props, context);
        this.state = {};
    }

    render() {
        return <div>Hello from Second Third Party Component!</div>;
    }
};

export default CustomComponent;
