'use client'
import { Award } from '@/types/award'
import { Dispatch, SetStateAction, useState } from 'react'
import AwardItem from './awardItem'

interface PropsAwardCategory extends Award {
  selectedWinners: Object[]
  setSelectedWinners: Dispatch<SetStateAction<Object[]>>
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

    const exist = selectedWinners.find(
      //aqui
      winner => winner.categoryId === id && winner.awardId !== selectWinner
    )

    if (exist) return

    setSelectedWinners(prev => [...prev, { categoryId: id, awardId }])
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
