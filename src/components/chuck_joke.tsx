import Joke from '../joke';
interface ChuckJokeProps {
  jokesList: Array<Joke>;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ( props ) => {
const jokesList = props.jokesList;
const jokes = jokesList.map((joke) => (
  <p key={joke.id}>{joke.id}: {joke.joke} </p>
));

return (
  <>
  {jokes }
  </>
);
}

export default ChuckJoke;
