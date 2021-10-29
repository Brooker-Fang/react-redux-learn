import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from '../store/actions/counter.actions'
import * as modelActions from '../store/actions/model.actions'

function Counter({increment, increment_async, decrement, count, show, changeModel}) {
  return (<div>
    <button onClick={() => increment_async(5)}>+</button>
    {count}
    <button onClick={() => decrement(3)}>-</button>
    {show ? 'true' : 'false'}
    <button onClick={() => changeModel(!show)}>show</button>
  </div>)
}
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    show: state.model.show
  }
}

/* const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: 'increment', payload: 5}),
    decrement: () => dispatch({type: 'decrement', payload: 3})
  }
} */
const mapDispatchToProps = (dispatch) => bindActionCreators({...counterActions, ...modelActions}, dispatch)
/* 
  connect: connect()执行返回 新的函数，传入要接收store的组件,connect()(组件)
   1、connect 帮助组件订阅store，当store中状态发生变化，会重新渲染组件
   2、connect 接收两个函数参数，
      第一个参数负责接收store的state的状态，映射为 新传入组件 的props的属性
      第二个参数负责接收store的dispatch方法
  
*/
export default connect(mapStateToProps, mapDispatchToProps)(Counter)