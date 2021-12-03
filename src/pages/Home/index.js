import './style.css';
import Split from 'react-split'
import PainelA from '../../components/PainelA';
import PainelB from '../../components/PainelB';
import { AuthProvider } from '../../context/AuthContext';

function Home() {
  return (
    <AuthProvider >
      <div className="home">
        <Split
        style={{height: '100vh'}}
        sizes={[101, 1]}
        minSize={1}
        direction="vertical"
        cursor="col-resize"
        olor={'#000000'}
        >
          <Split 
          style={{display: 'flex'}}
          sizes={[25, 75]}
          minSize={300}
          gutterSize={5}
          >
            <PainelA />
            <PainelB />
          </Split>
        </Split>
      </div>
    </AuthProvider>
  );
}

export default Home;