import React from 'react'
import "./StaysCard.scss";
import { AiFillStar } from 'react-icons/ai';

const StaysCard = ({ stay }) => {

  return (
    <div className="card border-0 w-100">
      <div className="windBnb__stays_image w-100">
        <img src={stay.photo} alt="img" className='w-100 h-100' />
      </div>
      <div className="card-body w-100 px-0">
        <div className="windBnb__stays_info row justify-content-between align-items-center">
          <div className="  windBnb__stays_info__left d-flex align-items-center pe-0 justify-content-start">
            {stay.superHost && <span className='super_host'>Super Host</span>}
            <span className='type'>{stay.type}{stay.superHost && `${stay.beds !== null ? `.${stay.beds} beds` : `.(No beds)`}`}</span>
          </div>
          <div className="windBnb__stays_info__right ps-0  d-flex justify-content-end align-items-center">
            <AiFillStar className="star" />
            <span className='rating'>{stay.rating}</span>
          </div>
        </div>
        <div className="windBnb__stays_title p-0">
          <h5 className='title'>{stay.title}</h5>
        </div>
      </div>
    </div>
  )
}

export default StaysCard;