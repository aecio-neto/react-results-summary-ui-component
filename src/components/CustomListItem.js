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
      <p>
        {score}
        <span className='text-DarkGrayBlue'>
          <span className="mx-1">/</span>
          100
        </span>
      </p>
    </li>
  )
}

export default CustomListItem