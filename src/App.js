import './App.css'
import { useState } from 'react'
import ResultsSummary from './components/ResultsSummary'

export default function App() {
  const [scores, setScores] = useState([
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
  ]);

  return (
    <div className="App flex font-primary justify-center items-center h-screen">
      <ResultsSummary scores={ scores }/>
    </div>
  )
}
