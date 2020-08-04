import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import Contracts from './Components/Contracts/Contracts';
import Partners from './Components/Partners/Partners';
import FNS from './Components/FNS/FNS';
import Declaration from './Components/Declaration/Declaration';
import Footer from './Components/Fotter/Footer';
import FileContent from './Components/FileContent/FileContent';

function App(props) {
	return (
		<div className="App">
			<Header
				Dispatch={props.Dispatch}
				fileName={props.State.fileName}
			/>
			<NavBar />
			<div className="appContent">
				<Route path='/Contracts' render={() =>
					<Contracts
						Contracts={props.State.Contracts}
						Dispatch={props.Dispatch} />} />
				<Route path='/Partners' render={() =>
					<Partners
						Partners={props.State.Partners}
						Dispatch={props.Dispatch} />} />
				<Route path='/FNS' render={() =>
					<FNS
						FNS={props.State.FNS}
						Dispatch={props.Dispatch} />} />
				<Route path='/Declarations' render={() =>
					<Declaration
						Declaration={props.State.Declaration}
						Dispatch={props.Dispatch} />} />
				<FileContent />
			</div>
			<Footer fileName={props.State.fileName} />
		</div>
	);
}

export default App;
