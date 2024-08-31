import reactLogo from "./assets/react.svg";
import "./App.css";
import Countries from "./components/Countries/Countries";
function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React World Tour</h1>
      <Countries></Countries>
    </>
  );
}

export default App;
