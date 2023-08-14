import SummaryTable from "./SummaryTable"
import Button from "./Button"

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

export default SummaryCard