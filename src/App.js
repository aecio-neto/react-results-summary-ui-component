import './App.css'
// import { useState } from 'react'
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

const CustomListItem = ({ colorVariant, category, text, score }) => {
  const bgColor = {
    red: 'bg-LightRed-light',
    yellow: 'bg-OrangeyYellow-light',
    green: 'bg-GreenTeal-light',
    blue: 'bg-CobaltBlue-light',
  }

  const textColor = {
    red: 'text-LightRed-dark',
    yellow: 'text-OrangeyYellow-dark',
    green: 'text-GreenTeal-dark',
    blue: 'text-CobaltBlue-dark',
  }

  return (
    <li className={`flex items-center rounded-lg ${bgColor[colorVariant]} ${textColor[colorVariant]} p-3 my-4 justify-between`}>
      <div className='flex items-center'>
        <img src={category} className='mr-2' alt="" />{text}
      </div>
      <p>{score}<span className='text-DarkGrayBlue'>/100</span></p>
    </li>
  )
}

const SummaryTable = () => {
  return (
    <ul>
      <CustomListItem colorVariant="red" category={reaction} text="Reação" score={80} />
      <CustomListItem colorVariant="yellow" category={memory} text="Memória" score={92} />
      <CustomListItem colorVariant="green" category={verbal} text="Verbal" score={61} />
      <CustomListItem colorVariant="blue" category={visual} text="Visual" score={72} />
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
  return (
    <div className="App flex font-primary justify-center items-center h-screen">
      <ResultsSummary />
    </div>
  )
}
