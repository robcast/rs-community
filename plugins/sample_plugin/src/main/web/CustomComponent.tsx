import * as React from 'react';
import * as _ from 'underscore';

import { Component, ComponentProps, ComponentContext } from 'platform/api/components';
import { SparqlClient } from 'platform/api/sparql';

export interface Props extends ComponentProps {
    limit?: number
}

interface State {
    result?: SparqlClient.SparqlSelectResult
}

class CustomComponent extends Component<Props, State> {
    static defaultProps = {limit: 10}

    constructor(props: Props, context: ComponentContext) {
        super(props, context);

        this.state = {};
    }

    componentDidMount() {
        // using now from underscode.js, which is a local plugin dependency
        console.log(_.now());

        // using RS Platform API
        SparqlClient.select(
            `SELECT ?s ?p ?o WHERE { ?s ?p ?o } LIMIT ${this.props.limit}`
        ).onValue(
            result => this.setState({result})
        )
    }

    render() {
        const { result } = this.state;
        if (result) {

        return (
            <div>
                <p>Hello from Third Party Component!</p>
                <div>
                    {
                        this.state.result.results.bindings.map(
                            b => (
                                <div>
                                    {'s: ' + b['s'].value + ' p: ' + b['p'] + 'o: ' + b['o']}
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        );
        } else {
            return <div>Loading...</div>
        }
    }
};

export default CustomComponent;
