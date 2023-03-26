import { Item } from '@/types/award'

interface PropsAwardItem extends Item {
  handleChangeWinners: (awardId: string) => void
  selectWinner: string | null
}
const AwardItem = ({
  id,
  photoUrL,
  title,
  selectWinner,
  handleChangeWinners,
}: PropsAwardItem) => {
  return (
    <div
      className={`grid grid-cols-1 grid-rows-1  p-2 text-center min-h-full   ${
        selectWinner === id && 'bg-[#839788] rounded'
      }`}>
      <div className="relative  border-2 border-[#DEE2E6] hover:scale-105 transition-transform">
        <img src={photoUrL} alt={id} />

        <div className="absolute z-10 bg-[#212529] w-full   bottom-0 bg-opacity-90 text-left p-2 pr-5 ">
          <h3 className="break-words">{title}</h3>
        </div>
      </div>

      <button
        className="bg-[#343A40] rounded-md px-1 py-2 hover:bg-[#2b3138] transition-colors w-full mt-5"
        onClick={() => handleChangeWinners(id)}>
        Select
      </button>
    </div>
  )
}

export default AwardItem
