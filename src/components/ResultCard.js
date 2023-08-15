
const ResultCard = ({ scores }) => {
  const totalScore = scores.reduce((acc, { score }) => acc + score, 0)
  const averageScore = Math.round(totalScore / scores.length)

  return (
    <div className="result-container bg-gradient-to-b from-LightSlateBlue to-LightRoyalBlue rounded-b-3xl md:rounded-3xl py-4 text-center sm:z-10">
      <div className="result-score mt-[8rem] md:mt-4">
        <h1 className='text-xl font-bold m-2 text-LightLavender'>Seu Resultado</h1>
        <div className="inline-block rounded-full bg-gradient-to-b from-VioletBlue to-PersianBlue px-12 py-10 m-4">
          <p className='text-6xl font-bold text-White'>{averageScore}</p>
          <p className='text-LightLavender'>de 100</p>
        </div>
      </div>
      
      <div className="result-message m-4 items-center">
        <h2 className='text-3xl font-bold m-2 text-White'>Ótimo</h2>
        <p className='text-LightLavender'>Seu resultado foi maior que 65% das pessoas que fizeram esse teste.</p>
      </div>
    </div>
  )
}

export default ResultCard