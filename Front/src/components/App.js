import React from 'react';
import ReactLoading from 'react-loading';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './home/Home';
import NotFound from './notFound/NotFound';
import Axios from 'axios';
import Hint from './hints/Hint'

const url = 'http://localhost:3001/json';

function App() {

  const [gameData, setGameData] = React.useState(undefined);
  const [loading, setLoading] = React.useState(true);

  const updateData = (value) => {
    Axios.post(url, value).then(() => setGameData(value));
  }

  const loadGameData = () => {
    Axios.get(url)
		.then(res => {
			setGameData(res.data);
			setLoading(false);
		})
		.catch((err) => console.log(err));
  }

  React.useEffect(() => {loadGameData()}, [])

  return (    
    <>
      {loading ? 
		<ReactLoading type="balls" color="#fff" /> :
		
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

export default App;
