import Counter from './view/Counter'
import MyReduxPage from './view/MyReduxPage'
import ReactReduxPage from './view/ReactReduxPage'
import ReactReduxHooksPage from './view/ReactReduxHooksPage'
function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <MyReduxPage></MyReduxPage>
      <ReactReduxPage></ReactReduxPage>
      <ReactReduxHooksPage></ReactReduxHooksPage>
    </div>
  );
}

export default App;
