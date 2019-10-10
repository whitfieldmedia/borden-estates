import React from 'react';
import house from './assets/images/1341B/1341B_house_plan.png';
import floorplan from './assets/images/1341B/1341B_floor_plan.png';
import Gallery from 'react-grid-gallery';

const IMAGES = [
    {src: `${house}`, thumbnail: `${house}`, thumbnailWidth: 331, thumbnailHeight: 180},
    {src: `${floorplan}`}
]

class House2 extends React.Component {
    render() {
        return (
            <div className="house-container">
                <div className="main-image">
                    <Gallery images={IMAGES} margin="0" />
                </div>
                <h1 className="house-header"> Model Home 2 </h1>
                <div className="detail-holder">
                    <div className="detail-row">
                        <p className="detail-header"> Bedrooms </p> <p className="details"> 3 </p>
                    </div>
                    <div className="detail-row">
                        <p className="detail-header"> Bathrooms </p> <p className="details"> 2 </p>
                    </div>
                    <div className="detail-row">
                        <p className="detail-header"> Living Area </p><p className="details"> 1,650 sqft </p> 
                    </div>
                    <div className="detail-row">
                        <p className="detail-header"> Garage </p><p className="details"> 2 Car </p>
                    </div>                                                            
                </div>
            </div>
        )
    }
}

export default House2;

//https://www.nelsondesigngroup.com/content/house-plan-1341b-mariah-ii