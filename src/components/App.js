import { useState } from 'react';
import '../styles/App.scss';

function App() {

  const [numberOfErrors, setnumberofErrors] = useState(0);
  const [lastLetter, setlastLetter] = useState('');
  const [userLetter, setUserLetter] = useState([]);
  const word = "katacroker";
  

  const renderSolutionLetters = () => {
    const keyWord = word.split('');
   return keyWord.map(letter => {
     return (
     <li className="letter"></li>
     )
  });
}

/*  if (keyWord.includes(lastLetter)) {
        <li className="letter"></li>
     } else {
     <li className="letter">{letter}</li>
     } */

  const handleLastLetter = (ev) => {
    ev.preventDefault();
    setlastLetter(ev.currentTarget.value);
    setUserLetter([...userLetter, lastLetter]);
   // const expresion = "^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$";
   // let expresion = new RegExp([a - zA - Z]);
 }
 console.log(userLetter);
  

  const handleClickBtn = (ev) => {
    ev.preventDefault();
    setnumberofErrors(numberOfErrors + 1);
    //console.log(numberOfErrors);
  };



  return (
    <div className="App">
      <div className="page">
        <header>
          <h1 className="header__title">Juego del ahorcado</h1>
        </header>
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución:</h2>
              <ul className="letters">
                {renderSolutionLetters()}
              </ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">
                <li className="letter">f</li>
                <li className="letter">q</li>
                <li className="letter">h</li>
                <li className="letter">p</li>
                <li className="letter">x</li>
              </ul>
            </div>
            <form className="form">
              <label className="title" htmlFor="last-letter">Escribe una letra:</label>
              <input
                value={lastLetter}
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                onChange={handleLastLetter}
              />
            </form>
            <button onClick={handleClickBtn}>Incrementar</button>
          </section>
          <section className={`dummy error-${numberOfErrors}`}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
