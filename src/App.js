import "./App.css";
import AxiosApi from "./hooks/axiosApi";
import "./App.css";
import Content from "./components/Content";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  const [info, loading, error] = AxiosApi();

  return (
    <div className="App">
      {error && <p>Error al obtener los personajes</p>}
      {loading ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="App__content">
          <Header info={info}></Header>
          <Content info={info}></Content>
          <Form info={info}></Form>
        </div>
      )}
    </div>
  );
}

export default App;
