import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Ini adalah paragraf menggunakan JSX</p>
      <button onClick={alert('Button Clicked')} className='btn btn-primary'>click Me</button>
    </div>
  );
}

export default App;
