import './App.css';
import Split from 'react-split'
import PainelA from './components/PainelA';
import PainelB from './components/PainelB';

function App() {
  return (
    <div className="App">
      <Split
      style={{height: '100vh'}}
      sizes={[101, 1]}
      minSize={1}
      direction="vertical"
      cursor="col-resize"
      >
        <Split 
        style={{display: 'flex'}}
        sizes={[30, 70]}
        gutterSize={2}
        >
          <PainelA />
          <PainelB />
        </Split>
      </Split>
    </div>
  );
}

export default App;
