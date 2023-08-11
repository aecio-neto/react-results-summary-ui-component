import './App.css';
// import { useState } from 'react';
import memory from './assets/images/icon-memory.svg'
import reaction from './assets/images/icon-reaction.svg'
import verbal from './assets/images/icon-verbal.svg'
import visual from './assets/images/icon-visual.svg'
import Button from './components/Button'

const scores = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
]

const ResultCard = () => {
  return (
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
  )
}

const CustomListItem = ({ backgroundColor, category, text, score }) => {
  // provavelmente terá um map para incluir os itens, será preciso criar uma id.


  return (
    <li className={`flex items-center rounded-lg bg-${backgroundColor}-light text-${backgroundColor}-dark p-3 my-4 justify-between`}>
      <div className='flex items-center'>
        <img src={scores.category} className='mr-2' alt="" />{text}
      </div>
      <p>{score}<span className='text-DarkGrayBlue'>/100</span></p>
    </li>
  );
};

const SummaryTable = () => {
  return (
    <ul>
      {/* CustomListItem = ({ backgroundColor, category, text, score }) */}
      <CustomListItem backgroundColor="LightRed" category={reaction} text="Reação" score={80} />
      <CustomListItem backgroundColor="OrangeyYellow" category={memory} text="Memória" score={92} />
      <CustomListItem backgroundColor="GreenTeal" category={verbal} text="Verbal" score={61} />
      <CustomListItem backgroundColor="CobaltBlue" category={visual} text="Visual" score={72} />
    </ul>
  )
}

const SummaryCard = () => {
  return (
    <div className="summary-container shadow-xl rounded-b-2xl py-10 pb-4 sm:z-0 md:ml-[-30px]">
      <div className="summary-table px-8 md:pl-[4rem]">
        <h2 className='text-xl'>Resumo</h2>
      < SummaryTable />
      < Button />
      </div>
    </div>
  )
}

function ResultsSummary() {
  return (
    <div className='results-summary-container mt-4 md:grid md:grid-cols-2 md:max-w-2xl'>   
        <ResultCard />
        <SummaryCard />
    </div>
  )
}

export default function App() {
  // Próximos passos
  // Espaçar as letras do item-score

  return (
    <div className="App flex font-primary justify-center items-center h-screen">
      <ResultsSummary />
    </div>
  );
}
