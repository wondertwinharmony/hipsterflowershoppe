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
            src: "../assets/flowerAssets/weddings/wedding1.jpg",
            thumbnail: "../assets/flowerAssets/weddings/wedding1.jpg",
            thumbnailWidth: 348,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/weddings/wedding2.jpg",
            thumbnail: "../assets/flowerAssets/weddings/wedding2.jpg",
            thumbnailWidth: 752,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/weddings/wedding3.jpg",
            thumbnail: "../assets/flowerAssets/weddings/wedding3.jpg",
            thumbnailWidth: 753,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/weddings/wedding4.jpg",
            thumbnail: "../assets/flowerAssets/weddings/wedding4.jpg",
            thumbnailWidth: 752,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/weddings/wedding5.jpg",
            thumbnail: "../assets/flowerAssets/weddings/wedding5.jpg",
            thumbnailWidth: 752,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/weddings/wedding6.jpg",
            thumbnail: "../assets/flowerAssets/weddings/wedding6.jpg",
            thumbnailWidth: 333,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/weddings/wedding7.jpg",
            thumbnail: "../assets/flowerAssets/weddings/wedding7.jpg",
            thumbnailWidth: 750,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/weddings/wedding8.jpg",
            thumbnail: "../assets/flowerAssets/weddings/wedding8.jpg",
            thumbnailWidth: 410,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/weddings/wedding9.jpg",
            thumbnail: "../assets/flowerAssets/weddings/wedding9.jpg",
            thumbnailWidth: 750,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/weddings/wedding10.jpg",
            thumbnail: "../assets/flowerAssets/weddings/wedding10.jpg",
            thumbnailWidth: 639,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/weddings/wedding11.jpg",
            thumbnail: "../assets/flowerAssets/weddings/wedding11.jpg",
            thumbnailWidth: 333,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/weddings/wedding12.jpg",
            thumbnail: "../assets/flowerAssets/weddings/wedding12.jpg",
            thumbnailWidth: 334,
            thumbnailHeight: 500,
            caption: ""
        },
        {
            src: "../assets/flowerAssets/weddings/wedding13.jpg",
            thumbnail: "../assets/flowerAssets/weddings/wedding13.jpg",
            thumbnailWidth: 750,
            thumbnailHeight: 500,
            caption: ""
        }
    ]
};
