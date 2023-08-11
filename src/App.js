import './App.css';
import memory from './assets/images/icon-memory.svg'
import reaction from './assets/images/icon-reaction.svg'
import verbal from './assets/images/icon-verbal.svg'
import visual from './assets/images/icon-visual.svg'
import Button from './components/Button'

function App() {
  // Próximos passos
  // Espaçar as letras do item-score

  return (
    <div className="App flex font-primary justify-center items-center h-screen">
      <div className='summary-container mt-4 md:grid md:grid-cols-2 md:max-w-2xl'>   
        <div className="result-container bg-gradient-to-b from-LightSlateBlue to-LightRoyalBlue rounded-b-3xl md:rounded-3xl py-4 text-center sm:z-10">
          <div className="result-score mt-10 md:mt-6">
            <h1 className='text-xl font-bold m-2 text-LightLavender'>Seu Resultado</h1>
            <div className="inline-block rounded-full bg-gradient-to-b from-VioletBlue to-PersianBlue px-12 py-10 m-4">
              <p className='text-6xl font-bold text-White'>76</p>
              <p className='text-LightLavender'>de 100</p>
            </div>
          </div>
          
          <div className="result-message m-4 items-center">
            <p className='text-3xl font-bold m-2 text-White'>Ótimo</p>
            <p className='text-LightLavender'>Seu resultado foi maior que 65% das pessoas que fizeram esse teste.</p>
          </div>
        </div>

        <div className="summary-container shadow-xl rounded-b-2xl py-10 pb-4 sm:z-0 md:ml-[-30px]">
          <div className="summary-table px-8 md:pl-[4rem]">
            <h2 className='text-xl'>Resumo</h2>
            <ul>
              <li className='flex items-center rounded-lg bg-LightRed-light text-LightRed-dark p-3 my-4 justify-between'>
                <div className='flex items-center'>
                  <img src={memory} className='mr-2' alt="" />Reação
                </div>
                <p>80<span className='text-DarkGrayBlue'>/100</span></p>
              </li>
                <li className='flex items-center rounded-lg bg-OrangeyYellow-light text-OrangeyYellow-dark p-3 my-4 justify-between'>
                  <div className='flex items-center'>
                    <img src={reaction} className='mr-2' alt="" />Memória 
                  </div>
                  <p>92<span className='text-DarkGrayBlue'>/100</span></p>
                </li>
                <li className='flex items-center rounded-lg bg-GreenTeal-light text-GreenTeal-dark p-3 my-4 flex justify-between'>
                  <div className='flex items-center'>
                    <img src={verbal} className='mr-2' alt="" />Verbal
                  </div>
                  <p>61<span className='text-DarkGrayBlue'>/100</span></p>
                </li>
                <li className='flex items-center rounded-lg bg-CobaltBlue-light text-CobaltBlue-dark p-3 my-4 flex justify-between'>
                  <div className='flex items-center'>
                    <img src={visual} className='mr-2' alt="" />Visual
                  </div>  
                  <p>72<span className='text-DarkGrayBlue'>/100</span></p>
                </li>
            </ul>
          < Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
