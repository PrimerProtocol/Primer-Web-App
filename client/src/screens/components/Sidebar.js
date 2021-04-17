import React, { useState } from 'react'
import chevron from '../../assets/chevron.svg'
import '../../styles/components/Sidebar.css'

const Sidebar = () => {
    const [contractActive, setContractActive] = useState(false)
    const [watchedActive, setWatchedActive] = useState(false)

    // Conditional classNames 
    const contractChevronClass = contractActive ? 'chevron active' : 'chevron'
    const contractListClass = contractActive ? 'sidebar-menu-content' : 'sidebar-menu-content collapsed'
    const watchedChevronClass = watchedActive ? 'chevron active' : 'chevron'
    const watchedListClass = watchedActive ? 'sidebar-menu-content' : 'sidebar-menu-content collapsed'

    return (
        <div className='sidebar'>
            <div className='sidebar-menu'>
                <div className='sidebar-menu-header'>
                    <h3>Active Contracts</h3>
                    <img
                        onClick={() => setContractActive(!contractActive)}
                        src={chevron} alt='chevron'
                        className={contractChevronClass}
                    />
                </div>
                <div className={contractListClass}>
                    <div className='sidebar-menu-item'>
                        <h4>Yearn Finance #2</h4>
                        <p>5 ETH</p>
                    </div>
                    <div className='sidebar-menu-item'>
                        <h4>Me9 #5</h4>
                        <p>2 ETH</p>
                    </div>
                </div>
            </div>
            <div className='sidebar-menu'>
                <div className='sidebar-menu-header'>
                    <h3>Watched Contracts</h3>
                    <img
                        onClick={() => setWatchedActive(!watchedActive)}
                        src={chevron} alt='chevron'
                        className={watchedChevronClass}
                    />
                </div>
                <div className={watchedListClass}>
                    <div className='sidebar-menu-item'>
                        <h4>Aeveus #4</h4>
                        <p>4 ETH</p>
                    </div>
                    <div className='sidebar-menu-item'>
                        <h4>Escaped26 #8</h4>
                        <p>2 ETH</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar