export async function getPokemonFetch() {
  let response = await fetch('https://pokemon---api.herokuapp.com/api/v1/pokemon?limit=10');
  let data = await response.json();
  return data;
}

getPokemonFetch()
  .then(data => console.log(data))
  .catch(reason => console.log(reason.message));

