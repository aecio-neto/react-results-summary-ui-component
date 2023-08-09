import './App.css';

function App() {

  return (
    <div className="App flex justify-center items-center h-screen">
      <div className='summary-container w-1/2 flex flex-row'>
        
        <div className="result-container bg-red-100 rounded-3xl p-4 text-center w-1/2 z-10">  
          <div className="result-score">
            <h1 className='text-xl font-bold m-4'>Seu Resultado</h1>
            <div className="inline-block rounded-full bg-gray-100 p-8 m-4">
              <p>76 <br /><span>de 100</span></p>
            </div>
          </div>
          
          <div className="result-message m-4">
            <p className='text-3xl m-4'>Ótimo</p>
            <p className='px-8'>Seu resultado foi maior que 65% das pessoas que fizeram esse teste.</p>
          </div>
        </div>

        <div className="summary-container bg-gray-100 rounded-2xl p-4 w-1/2 text-center z-0 ml-[-30px]">
          <div className="summary-table">
            <h2>Summary</h2>
            <p>imagem abaixo</p>
            <img src="favicon-32x32.png" alt="" />
            <ul>
              <li>
                <div>
                  <img src="./assets/images/icon-memory.svg" alt="" />Reação <span>80/100</span>
                </div>
              </li>
                <li>
                  <div>
                    <img src="assets/images/icon-memory.svg" alt="" />Memória <span>92/100</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="./assets/images/icon-memory.svg" alt="" />Verbal <span>61/100</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="./assets/images/icon-memory.svg" alt="" />Visual <span>72/100</span>
                  </div>            
                </li>
            </ul>
          </div>
          
          <button>Continuar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
