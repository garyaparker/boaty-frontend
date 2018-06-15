import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Input } from 'mdbreact';
import axios from 'axios';


export default class login extends Component {
    constructor(props) {
        super(props);

        this.width = 320;
        this.height = 0;
        this.streaming = false;
    }

    captureImage() {
        const canvas = this.canvas;
        const context = canvas.getContext('2d');
        canvas.width = this.width;
        canvas.height = this.height;
        context.drawImage(this.video, 0, 0, this.width, this.height);

        const data = canvas.toDataURL('image/jpeg');
        this.image.setAttribute('src', data);
        this.image.setAttribute('width', this.width);
        this.image.setAttribute('height', this.height);
    }

    getCanvasRef(canvas) {
        this.canvas = canvas;
    }

    getImageRef(image) {
        this.image = image;
    }

    getVideoRef(video) {
        if (video) {
            this.video = video;

            video.addEventListener('canplay', () => {
                if (!this.streaming) {
                    this.height = video.videoHeight / (video.videoWidth / this.width);
                    video.setAttribute('width', this.width);
                    video.setAttribute('height', this.height);
                    this.canvas.setAttribute('width', this.width);
                    this.canvas.setAttribute('height', this.height);
                    this.streaming = true;
                }
            }, false);
        }
    }

    handleClickStart(event) {
        event.target.style.display = 'none';

        if (navigator.mediaDevices) {
            navigator.mediaDevices.getUserMedia({
                audio: false,
                video: {
                    facingMode: 'user',
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                }
            }).then((stream) => {
                this.video.srcObject = stream;
                this.video.play();
            }).catch(console.error);
        } else {
            alert('Video not supported');
        }
    }

    handleClickCapture(event) {
        this.captureImage();
    }

    handleLogin(event) {
        const base64String = this.image && this.image.src;
        const base64Data = base64String.replace('data:image/jpeg:base64', '');
        const formData = new FormData();
        // const blob = new Blob([base64Data], { type: 'image/jpeg'});

        formData.append('file', base64Data);
        formData.append('userName', this.props.match.params.userName);
        axios.post('/api/login', formData)
            .then((res) => this.props.history.push('/youLoggedInBruv'))
            .catch(console.error);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <canvas ref={(canvas) => this.getCanvasRef(canvas)} className="capture-canvas"></canvas>
                        <Card className="mt-3">
                            <img
                                ref={(image) => this.getImageRef(image)}
                                className="img-fluid"
                                src="https://nc3t.com/wp-content/uploads/2016/08/boaty.jpg"
                            />
                            <video ref={(video) => this.getVideoRef(video)} className="img-fluid"></video>
                            <CardBody>
                                <CardTitle>Login</CardTitle>
                                <Button onClick={this.handleClickStart.bind(this)}>Start Capture</Button>
                                <Button onClick={this.handleClickCapture.bind(this)}>Capture Boaty</Button>
                                <Button onClick={this.handleLogin.bind(this)}>Login witYoFace</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
};