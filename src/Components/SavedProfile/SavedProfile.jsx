import React from 'react';
import { Card } from 'react-bootstrap';
import profileOne from '../../assets/profileOne.png';
import profileTwo from '../../assets/profileTwo.png';
import profileThree from '../../assets/profileThree.png';
import location from '../../assets/location.png';
import ratingstar from '../../assets/ratingstar.png';
import "./savedprofile.css"; 


const SavedProfile = () => {
  return (
    <div className="">

      <div className="">
        <h3 className='my-listing mx-3 mt-5'>Saved profile</h3>


<div className='mt-3'>
  <Card body border='light' bg='' className='p-2'>
    <div className="profile-containers">
      <div>
        <img src={profileOne} alt="profileOne" className="saved-profile-image" />
      </div>
      <div className="profile-texts">
        <h1 className='profile-names m-0 p-0'>Abdul Suleiman</h1>
        <div className='profile-infos'>
          <div className='m-0 p-0'>
            <img src={location} alt="location" className="location" />
            Apo Duste, Abuja
          </div>
          <div className='m-0 p-0 rating-container'>
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <span className="rating-text">4.5 * 250 Reviews</span>
          </div>
          <div className='m-0 p-0'>150 Houses sold in total</div>
          <button className='profile-buttons mt-1'>Rentals</button>
        </div>
        <div className='review-open-container'>
          <div className="reviews">No Reviews Yet</div>
          <button className='open-profiles'>Open profile</button>
        </div>
      </div>
    </div>
  </Card>

  <Card body  border='light' bg='' className=' mt-3 p-2'>
    <div className="profile-containers">
      <div className="">
        <img src={profileTwo} alt="profileOne" className="saved-profile-image" />
      </div>
      <div className="profile-texts">
        <div className=''>MD Lotex Properties</div>
        <h1 className='profile-names m-0 p-0'>Abdul Suleiman</h1>
        <div className='profile-infos m-0 p-0'>
          <div className='m-0 p-0'>
            <img src={location} alt="location" className="location" />
            Apo Duste, Abuja
          </div>
          <div className='m-0 p-0 rating-container'>
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <span className="rating-text">4.5 * 250 Reviews</span>
          </div>
          <div className='m-0 p-0'>150 Houses sold in total</div>
          <div className="button-container mt-1">
            <button className='profile-buttons'>Selling a house</button>
            <button className='profile-buttons'>Buying a House</button>
          </div>
          <button className='profile-buttons mt-2'>8 Years experience</button>
        </div>
        <div className='review-open-container'>
          <div className="reviews">12 Reviews</div>
          <button className='open-profiles'>Open profile</button>
        </div>
      </div>
    </div>
  </Card>

  <Card body border='light' className=' mt-3 p-2'>
    <div className="profile-containers">
      <div className="">
        <img src={profileThree} alt="profileOne" className="saved-profile-image" />
      </div>
      <div className="profile-texts">
        <div className=''>MD Lotex Properties</div>
        <h1 className='profile-names m-0 p-0'>Abdul Suleiman</h1>
        <div className='profile-infos m-0 p-0'>
          <div className='m-0 p-0'>
            <img src={location} alt="location" className="location" />
            Apo Duste, Abuja
          </div>
          <div className='m-0 p-0 rating-container'>
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <img src={ratingstar} alt="ratingstar" className="star" />
            <span className="rating-text">4.5 * 250 Reviews</span>
          </div>
          <div className='m-0 p-0'>150 Houses sold in total</div>
          <div className="button-container mt-1">
          <button className='profile-buttons mt-2'>8 Years experience</button>
            <button className='profile-buttons'>Selling a house</button>
            <button className='profile-buttons'>Buying a House</button>
          </div>
        </div>
        <div className='review-open-container'>
          <div className="reviews">No Reviews</div>
          <button className='open-profiles'>Open profile</button>
        </div>
      </div>
    </div>
  </Card>
</div>

      </div>
    </div>
  );
};

export default SavedProfile;
