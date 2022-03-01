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

function useStores() {
  const store = useContext(Context)
  return store
}
export function useSelector (selector) {
  const [, forceUpdate] = useState({})
  const store = useStores()
  const selectedState = selector(store.getState())
  // 订阅与取消订阅
  useLayoutEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate({})
    })
    return () => {
      unsubscribe()
    }
  }, [store])
  return selectedState
}

export function useDispatch() {
  return useStores().dispatch
}