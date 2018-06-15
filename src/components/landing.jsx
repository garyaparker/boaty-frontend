import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Input } from 'mdbreact';

export default class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <Card>
                                <CardBody>
                                    <CardImage className="img-fluid" src="https://nc3t.com/wp-content/uploads/2016/08/boaty.jpg" />
                                    <CardTitle>Welcome</CardTitle>

                                    <Input label="Username" value={this.state.value} onChange={this.handleChange}/>
                                    <Button href={`/login/${this.state.value}`}>Login</Button>
                                    <Button href="/register">Register</Button>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
        );
    }}

