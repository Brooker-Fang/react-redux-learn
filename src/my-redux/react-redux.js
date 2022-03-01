import React, { useContext, useLayoutEffect, useState } from 'react';
import { bindActionCreators } from './bindActionCreators '
const Context = React.createContext()
export function Provider({store, children}) {
  return <Context.Provider value={store}>{children}</Context.Provider>
}

export const connect = (mapStateToProps, mapDispatchToProps) => (WrapperComponent) => props => {
  const [, forceUpdate] = useState({})
  const store = useContext(Context)
  const stateProps = mapStateToProps(store.getState())
  let dispatchProps = { dispatch: store.dispatch }
  if(typeof mapDispatchToProps === "function") {
    dispatchProps = mapDispatchToProps(store.dispatch)
  } else {
    // object
    dispatchProps = bindActionCreators(mapDispatchToProps, store.dispatch)
  }
  useLayoutEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate({})
    })
    return () => {
      unsubscribe()
    }
  }, [store])
  return <WrapperComponent {...props} {...dispatchProps} {...stateProps}/>
}