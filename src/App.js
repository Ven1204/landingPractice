import { init } from './utils/initCarLayer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    init()
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
