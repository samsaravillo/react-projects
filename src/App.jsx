import './App.css';

let language = "testing";



function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name} Header here</h1>
    </header>
  )
}

function App() {
  return <div>
    <Header name="Sam" />
    <p>Hello, React! {language.toUpperCase()}</p>
  </div>;
}

export default App;
