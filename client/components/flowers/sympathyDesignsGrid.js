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
            src: "../assets/flowerAssets/sympathyDesigns/sympathy1.jpg",
            thumbnail: "../assets/flowerAssets/sympathyDesigns/sympathy1.jpg",
            thumbnailWidth: 375,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/sympathyDesigns/sympathy2.jpg",
            thumbnail: "../assets/flowerAssets/sympathyDesigns/sympathy2.jpg",
            thumbnailWidth: 440,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/sympathyDesigns/sympathy3.jpg",
            thumbnail: "../assets/flowerAssets/sympathyDesigns/sympathy3.jpg",
            thumbnailWidth: 375,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/sympathyDesigns/sympathy4.jpg",
            thumbnail: "../assets/flowerAssets/sympathyDesigns/sympathy4.jpg",
            thumbnailWidth: 494,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/sympathyDesigns/sympathy5.jpg",
            thumbnail: "../assets/flowerAssets/sympathyDesigns/sympathy5.jpg",
            thumbnailWidth: 375,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/sympathyDesigns/sympathy6.jpg",
            thumbnail: "../assets/flowerAssets/sympathyDesigns/sympathy6.jpg",
            thumbnailWidth: 445,
            thumbnailHeight: 500,
            caption: ""
        }
    ]
};