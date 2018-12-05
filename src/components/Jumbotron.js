import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';


export default class JumboTron extends Component {
    render(){
        return (
            <div>
                <Jumbotron>
                <h1>Hello,World!</h1>
                <Button color="primary">Learn More</Button>
                </Jumbotron>
            </div>
        )
    }
}
