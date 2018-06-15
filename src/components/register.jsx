import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasImage: false
    };

    this.width = 320;
    this.height = 0;
    this.streaming = false;
  }

  captureImage() {

  }

  getCanvasRef(canvas) {
    this.canvas = canvas;
  }

  getImageRef(image) {
    this.image = image;
  }

  getVideoRef(video) {
    this.video = video;

    video.addEventListener('canplay', () => {
      if (!this.streaming) {
        this.height = video.videoHeight / (video.videoWidth / this.width);
        video.setAttribute('width', width);
        video.setAttribute('height', height);
        this.canvas.setAttribute('width', width);
        this.canvas.setAttribute('height', height);
        this.streaming = true;
      }
    }, false);
  }

  handleClickAgain(event) {
    this.setState({ hasImage: false });
  }

  handleClick(event) {
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

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <canvas ref={(canvas) => this.getCanvasRef(canvas)} className="capture-canvas"></canvas>
            <Card className="mt-3">
              {
                this.state.hasImage ? (
                  <CardImage
                    ref={(image) => this.getImageRef(image)}
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
                  />
                ) : (
                  <video ref={(video) => this.getVideoRef(video)} className="img-fluid"></video>
                )
              }
              <CardBody>
                <CardTitle>Register</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                {
                  this.state.hasImage ? (
                    <Button onClick={this.handleClickAgain.bind(this)}>Capture Again</Button>
                  ) : (
                    <Button onClick={this.handleClick.bind(this)}>Start Capture</Button>
                  )
                }
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
};
