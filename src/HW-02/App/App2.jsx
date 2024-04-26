import "./App2.css";
import Counter from "../Exercases/Exercases";

function App2() {
  return (
    <>
      <Counter initialValue={10} />
      {/* <Counter /> не передавая initalValue работает со статика */}
    </>
  );
}

export default App2;
