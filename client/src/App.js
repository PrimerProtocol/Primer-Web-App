import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './screens/components/Navbar'
import Marketplace from './screens/Marketplace'
import ContractList from './screens/ContractList'
import ContractDetails from './screens/ContractDetails'
import Profile from './screens/Profile'
import Footer from './screens/components/Footer'


function App() {
	return (
		<Router>
			<div className='screen'>
				<Navbar />
				<Route path='/' exact component={Marketplace} />
				<Route path='/contracts' exact component={ContractList} />
				<Route path='/contract/:id' exact component={ContractDetails} />
				<Route path='/profile/' exact component={Profile} />
				<Footer/>
			</div>
		</Router>
	)
}

export default App;
