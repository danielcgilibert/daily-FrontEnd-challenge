'use client'
import { Award } from '@/types/award'
import { Dispatch, useState } from 'react'
import AwardItem from './awardItem'

interface PropsAwardCategory extends Award {
  setSelectedWinners: Dispatch<any>
  selectedWinners: any
}

const AwardCategory = ({
  id,
  title,
  items,
  setSelectedWinners,
  selectedWinners,
}: PropsAwardCategory) => {
  const [selectWinner, setSelectWinner] = useState<string | null>(null)

  const handleChangeWinners = (awardId: string) => {
    setSelectWinner(awardId)
    setSelectedWinners(new Map(selectedWinners.set(id, awardId)))
  }

  return (
    <div key={id} className={`border-2 border-[#343A40] rounded-sm `}>
      <div className="bg-[#343A40] rounded-sm p-2 ">
        <h2 className="text-xl">{title}</h2>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-5 p-4 ">
        {items.map(item => (
          <AwardItem
            key={item.id}
            {...item}
            selectWinner={selectWinner}
            handleChangeWinners={handleChangeWinners}
          />
        ))}
      </div>
    </div>
  )
}

export default AwardCategory
