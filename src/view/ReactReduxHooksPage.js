import React, {useCallback} from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useDispatch, useSelector } from '../my-redux/react-redux'

export default function ReactReduxHooksPage() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)
  const add = useCallback(() => {
    dispatch({type: 'increment', payload: 1})
  }, [dispatch])
  return (
    <div>
      <h3>ReactReduxHooksPage</h3>
      <div>store === {count}</div>
      <button onClick={add}>Add</button>
    </div>
  )
}
