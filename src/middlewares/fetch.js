export default store => next => action => {
  const {url, type, ...rest} = action;
  if (!action.hasOwnProperty('url')) {
    return next(action);
  } else {
    fetch(url)
      .then(res => res.json())
      .then(response => next({ ...rest, type, response }))
      .catch(error => next({ ...rest, type, error }));
  }
}