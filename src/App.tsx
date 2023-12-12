import './App.css';
import { useState } from 'react';
import ChuckCard from './components/chuck_card';
import ChuckInfo from './components/chuck_info';
import ChuckJokes from './components/chuck_jokes_display';
import Joke from './joke';

function App() {

	const [chuckGreeting] = useState<string>("I am Chuck Norris!!!")
	const [whalesSaved] = useState<number>(700)
	const [roundHouseKicks] = useState<number>(300000)
	const [jokes] = useState<Array<Joke>>([{
		"id": 1,
		"joke": "Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.",
	},
	{
		"id": 2,
		"joke": "Time waits for no man. Unless that man is Chuck Norris.",
	},
	{
		"id": 3,
		"joke": "The dinosaurs looked at Chuck Norris the wrong way once. You know what happened to them.",
	},
	{
		"id": 4,
		"joke": "Chuck Norris does not own a stove, oven, or microwave, because revenge is a dish best served cold.",
	}])

	return (
		<div className="App">

			<h1>React props and state</h1>
			<ChuckCard greeting={chuckGreeting} />

			<h2>Chuck Info: </h2>
			<ChuckInfo whalesSaved={whalesSaved} houseKicks={roundHouseKicks} />

			<h2>Jokes: </h2>
			<ChuckJokes jokesList={jokes} />

		</div>
	);
}

export default App;
