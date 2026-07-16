import Cards from "./components/Cards";
function App() {
  // let myobj = {
  //   name: "Aarushi",
  //   age: 18 
  //   }
  //   let newArr = [1,2,34,5]
  return (

    <>
      <h1 className="bg-green-400 text-black p-4 rounded-2xl mt-6">
        Tailwind Test
      </h1>
      < Cards username="Aarushi" age = "18" />
      <Cards age = "24"/>
    </>
  );
}

export default App;

{/* <Cards username="aarushi" /*someObj = {myobj} someArr = {newArr} *//> */ }