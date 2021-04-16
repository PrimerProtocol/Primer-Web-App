import React from 'react'
import Tilt from 'react-tilt'
import '../../styles/components/BusinessCard.css'

const BusinessCard = (props) => {
    const data = props.data
    return (
        <div className='business-card-container'>
        <Tilt className='business-card' options={{max:25}}>
            <div className='business-card-banner'>
                <p>{data.phoneNumber}</p>
                <p>{data.businessName}</p>
            </div>
            <div className='business-card-content'>
                <div className='business-card-group'>
                    <h2>{data.personalName}</h2>
                    <h3>{data.personalTitle}</h3>
                </div>
                <p>{data.address}</p>
            </div>
        </Tilt>
        </div>
    )
}

export default BusinessCard