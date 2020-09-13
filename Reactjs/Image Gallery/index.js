import React from "react";
import ImageCard from "../ImageCard/index";

import "./style.css";
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      images: []
    };
  }

  //  executed when something chnages in input filed
  onTextChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  };

  //  executed when user tries to add an image to gallery
  onImageAdd = () => {
    //  first copying the old data
    const newImages = [...this.state.images];

    //  second pushing the new data in array
    newImages.push(this.state.inputValue);

    //  3rd updating the view
    this.setState({
      images: newImages
    });

    //  4th clearing the input
    this.clearInput();
  };

  //  used to clear the input field
  clearInput = () => {
    this.setState({
      inputValue: ""
    });
  };

  render = () => {
    return (
      <div className="gallery-container">
        <p className="title">---------- Image Gallery ----------</p>
        <div className="input-area">
          <input
            className="add-input"
            type="text"
            placeholder="Enter image Url"
            onChange={this.onTextChange}
            value={this.state.inputValue}
          />
          <button onClick={this.onImageAdd} className="add-btn">
            Add
          </button>
        </div>

        <div className="gallery-area">
          {this.state.images.map((imageUrl) => {
            return <ImageCard key={imageUrl} url={imageUrl} />;
          })}
        </div>
      </div>
    );
  };
}

export default Gallery;
