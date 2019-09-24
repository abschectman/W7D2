
export const thunk = function(store) { 
  debugger
  return function(next) {
    return function(action) { 
      if (typeof action === 'function') {
        debugger
        return action(store.dispatch, store.getState)
      }
      debugger
      return next(action);
    }
  }
}