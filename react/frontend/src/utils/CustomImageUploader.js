import React from "react";
import defaultImage from "../assets/logo192.png";

class CustomImageUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: defaultImage
    }
  }

  componentDidMount() {
    if(this.props.imageFile){
      this.setState({imagePreviewUrl: this.props.imageFile})
    }
  }

  handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let myUploadedFile;

    if(e.target.files[0]){
      myUploadedFile = e.target.files[0];
    } else { myUploadedFile = this.state.file };
    
    reader.onloadend = () => {
      this.setState({
        file: myUploadedFile,
        imagePreviewUrl: reader.result
      }, () => {
        this.props.customOnHanldeImage(myUploadedFile)
      });
    };
    reader.readAsDataURL(myUploadedFile);
  }

  render() {
    return (
        <div >
          <img
            src={this.state.imagePreviewUrl}
            alt="profilepic"
          />
          <input type="file" onChange={e => this.handleImageChange(e)} />
        </div>
    );
  }
}

export default CustomImageUploader;
