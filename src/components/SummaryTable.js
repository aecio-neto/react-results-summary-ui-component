import memory from '../assets/images/icon-memory.svg'
import reaction from '../assets/images/icon-reaction.svg'
import verbal from '../assets/images/icon-verbal.svg'
import visual from '../assets/images/icon-visual.svg'
import CustomListItem from './CustomListItem'

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

export default SummaryTable