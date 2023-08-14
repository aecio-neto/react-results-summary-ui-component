import ResultCard from "./ResultCard"
import SummaryCard from "./SummaryCard"

function ResultsSummary({ scores }) {
  return (
    <div className='results-summary-container mt-4 md:grid md:grid-cols-2 md:max-w-2xl'>   
        <ResultCard scores={scores} />
        <SummaryCard />
    </div>
  )
}

export default ResultsSummary