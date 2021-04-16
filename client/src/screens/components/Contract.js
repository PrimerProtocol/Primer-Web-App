import React from 'react'
import '../../styles/components/Contract.css'
import BusinessCard from './BusinessCard'

const Contract = (props) => {
    const data = props.data
    
    return (
        <div className='contract'>
            <BusinessCard data={data}/>
            <div className='contract-details'>
                <h3>{data.personalName}</h3>
                <p>Starting at {data.price}</p>
                <button
                    className='contract-button'
                    onCLick={() => console.log('click')}
                >See Details!</button>
            </div>
        </div>
    )
}

export default Contract