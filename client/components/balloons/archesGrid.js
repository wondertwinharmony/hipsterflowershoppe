import React from 'react';
import { Component } from 'react';
import Gallery from 'react-grid-gallery';


export default class ImgGallery extends Component {
    constructor(props){
        super(props);

        this.state = {
            images: this.props.images
        };

        this.onSelectImage = this.onSelectImage.bind(this);

    }

    onSelectImage (index, image) {
        var images = this.state.images.slice();
        var img = images[index];
        if(img.hasOwnProperty("isSelected"))
            img.isSelected = !img.isSelected;
        else
            img.isSelected = true;

        this.setState({
            images: images
        });
    }

    render () {
        return (
          <div className="flowers-content">
                <div className="galleryContainer" style={{ minHeight: "1px" }}>
                <Gallery
            images={this.state.images}
            onSelectImage={this.onSelectImage}
            enableImageSelection={false}
            rowHeight={300}/>
                </div>
                </div>
        );
    }
}

ImgGallery.propTypes = {
    images: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            src: React.PropTypes.string.isRequired,
            thumbnail: React.PropTypes.string.isRequired,
            srcset: React.PropTypes.array,
            caption: React.PropTypes.string,
            thumbnailWidth: React.PropTypes.number.isRequired,
            thumbnailHeight: React.PropTypes.number.isRequired,
            isSelected: React.PropTypes.bool
        })
    ).isRequired
};

ImgGallery.defaultProps = {
    images: [
        {
            src: "../assets/balloonAssets/arches/arch1.jpg",
            thumbnail: "../assets/balloonAssets/arches/arch1.jpg",
            thumbnailWidth: 667,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/balloonAssets/arches/arch2.jpg",
            thumbnail: "../assets/balloonAssets/arches/arch2.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/balloonAssets/arches/arch3.jpg",
            thumbnail: "../assets/balloonAssets/arches/arch3.jpg",
            thumbnailWidth: 375,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/balloonAssets/arches/arch4.jpg",
            thumbnail: "../assets/balloonAssets/arches/arch4.jpg",
            thumbnailWidth: 375,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/balloonAssets/arches/arch5.jpg",
            thumbnail: "../assets/balloonAssets/arches/arch5.jpg",
            thumbnailWidth: 667,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/balloonAssets/arches/arch6.jpg",
            thumbnail: "../assets/balloonAssets/arches/arch6.jpg",
            thumbnailWidth: 375,
            thumbnailHeight: 500,
            caption: ""
        }
    ]
};
