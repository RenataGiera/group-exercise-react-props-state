interface JokesType {
  joke: {
    id: number,
    joke: string,
  }
}

const ShowJoke: React.FC<JokesType> = ( {joke: {id, joke} }) => {

return (
  <>
   <li key={id}>{id}: {joke} </li>
  </>
);
}

export default ShowJoke;