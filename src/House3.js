import React from 'react';
import house from './assets/images/1354/1354-house-plan.jpg';
import floorplan from './assets/images/1354/1354_house_floor_plan.jpg';
import Gallery from 'react-grid-gallery';

const IMAGES = [
    {src: `${house}`, thumbnail: `${house}`, thumbnailWidth: 331, thumbnailHeight: 180},
    {src: `${floorplan}`},
]

class House3 extends React.Component {
    render() {
        return (
            <div className="house-container">
                <div className="main-image">
                    <Gallery images={IMAGES} margin='0' />
                </div>
                <h1 className="house-header"> Model Home 3 </h1>
                <div className="detail-holder">
                    <div className="detail-row">
                        <p className="detail-header"> Bedrooms </p><p className="details"> 3 </p>
                    </div>
                    <div className="detail-row">
                        <p className="detail-header"> Bathrooms </p><p className="details"> 2 </p>
                    </div>                    
                    <div className="detail-row">
                        <p className="detail-header"> Living Area </p><p className="details"> 1,738 sqft </p>
                    </div>
                    <div className="detail-row">
                        <p className="detail-header"> Garage </p><p className="details"> 2 Car </p>
                    </div>                                        
                </div>
            </div>
        )
    }
}

export default House3;

//https://www.nelsondesigngroup.com/content/house-plan-1354-allisa