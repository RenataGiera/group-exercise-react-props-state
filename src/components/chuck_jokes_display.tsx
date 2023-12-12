import Joke from '../joke';
import ShowJoke from './chuck_joke';
interface ChuckJokeProps {
  jokesList: Array<Joke>;
}

const ChuckJokes: React.FC<ChuckJokeProps> = ( {jokesList} ) => {
  return (
    <>
    <ul>
      {jokesList.map((li) => <ShowJoke joke={li}/>)}
    </ul> 
    </>
  );
}

export default ChuckJokes;