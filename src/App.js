
import './App.css';
import { GetImageOfDay } from './Components/Image-day';

function App() {
  return (
    <div>
      <section className='container'>
        <h1><img src="https://lyricstranslate.com/files/styles/artist/public/Rick_and_Morty_logo.png" alt="" /></h1>
      </section>
      <div>

        <div>
          <GetImageOfDay />
        </div>
      </div>
    </div>
  );
}

export default App;
