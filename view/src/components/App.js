import React from 'react';
import ReactLoading from 'react-loading';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './home/Home';
import NotFound from './notFound/NotFound';
import axios from 'axios';
import Hint from './hints/Hint';

const url = 'http://localhost:8000/api/json';

export default function App() {

	const [gameData, setGameData] = React.useState(undefined);
	const [loading, setLoading] = React.useState(true);

	const updateData = React.useMemo(() => value => {
		axios.post(url, value).then(() => setGameData(value));
	}, []);

	const loadGameData = React.useMemo(() => () => {
		axios.get(url)
			.then(res => {
				setGameData(res.data);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	React.useEffect(() => { loadGameData() }, []);

	return (    
		<>
			{loading ? 
				<ReactLoading type="circle" color="#fff" /> 
				
				:
				
				<BrowserRouter>
					<Switch>
						<Route path="/" exact={true}> 
							<Home gameData={gameData} />
						</Route>

						{gameData.map((elem, id) => 
							<Route key={id} path={`/${elem.link}`} exact={true}> 
								<Hint key={id} gameData={gameData} updateData={updateData} cmdRef={elem.link} cmdId={id}  />
							</Route>
						)}

						<Route component={NotFound}/>
					</Switch>
				</BrowserRouter> 
			}
		</>
	);
}
