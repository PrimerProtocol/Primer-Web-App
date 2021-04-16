import React from 'react'
import Contract from './components/Contract'
import '../styles/Marketplace.css'

const mockData = {
    personalName: 'Rabbit BUNNYEARS',
    personaltitle: 'Vice President',
    businessName: 'Yearn Finance',
    phoneNumber: '212 555 6342',
    address: '10475744 Block, BRK-Avenue Ethereum',
    price: 35,
    priceDenomination: 'USD'
}

const Marketplace = () => {
    return (
        <div className='market'>
                <header className='market-header'>
                    <h1>Freelance Marketplace</h1>
                    <h3>Powered by Ethereum 2.0!</h3>
                </header>
                <div className='market-contract-list'>
                    <Contract data={mockData}/>
                    <Contract data={mockData}/>
                    <Contract data={mockData}/>
                    <Contract data={mockData}/>
                </div>
        </div>
    )
}

export default Marketplace