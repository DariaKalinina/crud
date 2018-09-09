export default store => next => action => {
  if (!action.hasOwnProperty('generateId')) {
    return next(action);
  } else if (action.generateId !== null) {
    return next(action);
  } else {
    return next({
      ...action,
      generateId: (Date.now() + Math.random()).toString()
    })
  }
}