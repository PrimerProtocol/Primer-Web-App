import React from 'react'
import '../../styles/components/Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <h2 className='footer-title'>Primer</h2>
            <ul className='footer-ul'>
                <li className='footer-li'>
                    Github:
                    <a className='footer-link' href='https://github.com/PrimerProtocol/Primer-Web-App'>Primer-Web-App</a>
                </li>
                <li className='footer-li'>
                    Design:
                    <a className='footer-link' href='https://github.com/JoshuaTrujillo15'>JoshuaTrujillo15</a>
                </li>
                <li className='footer-li'>
                    Event:
                    <a className='footer-link' href='https://ethglobal.co/'>ETHGlobal</a>
                </li>
            </ul>
            <br/>
            <p>P.S. This is all filler data, subject to change! :)</p>
        </footer>
    )
}

export default Footer