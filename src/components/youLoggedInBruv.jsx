import React from 'react';
import { Card, CardBody, CardImage, CardTitle } from 'mdbreact';


const youLoggedInBruv = () => (
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <Card>
                    <CardBody>
                        <CardTitle> You Logged In Bruv !!!!</CardTitle>
                        <CardImage className="img-fluid" src="https://assets.pando.com/_versions/2013/10/2x08-raging-bender-futurama-18555675-720-540_featured.jpg" />
                    </CardBody>
                </Card>
            </div>
        </div>
    </div>
);

export default youLoggedInBruv;