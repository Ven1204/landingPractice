import { init } from './utils/initCarLayer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    init()
  }, [])

  return (
    <div className="App">
      <div className="hero">
        <h1 className="title">Cars</h1>
        <p className="text">asdgfbsjdfnsajddaflknafgoa´gsgfoáhigdsljdgfahg´WOJF´JGIOÑHGAOIGAGSKÑNGFDJ´LSFJLCKVBLNdslfgbsfds</p>
        <p>
          <button className="btn">English</button>
          <button className="btn">Spanish</button>

        </p>
      </div>

      <div className="pricing">
        <h1>Our Packages</h1>
        <div className="pricing-table">
          <div className="pricing-card">
            <p className="title">€ 999999</p>
            <p className="info">asdfgasfdgfhgjhkjgdfhdgafsashdjgdfhsdgasfagdshfjgfhdgdhfdhsdgsdfsfasdfgsdfsf</p>
            <button className="btn">Buy now</button>
          </div>

          <div className="pricing-card">
            <p className="title">€ 999999</p>
            <p className="info">asdfgasfdgfhgjhkjgdfhdgafsashdjgdfhsdgasfagdshfjgfhdgdhfdhsdgsdfsfasdfgsdfsf</p>
            <button className="btn">Buy now</button>
          </div>

          <div className="pricing-card">
            <p className="title">€ 999999</p>
            <p className="info">asdfgasfdgfhgjhkjgdfhdgafsashdjgdfhsdgasfagdshfjgfhdgdhfdhsdgsdfsf</p>
            <button className="btn">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
