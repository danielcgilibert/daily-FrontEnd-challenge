'use client'
import AwardCategory from '@/components/awardCategory'
import { Award } from '@/types/award'
import { useEffect, useState } from 'react'

const getAwards = async () =>
  await fetch('http://localhost:3000/api/awards').then(res => res.json())

const AwardList = () => {
  const [awards, setAwards] = useState<Award[]>([])
  const [selectedWinners, setSelectedWinners] = useState<Object[]>([])

  useEffect(() => {
    getAwards().then(result => setAwards(result))
  }, [])

  return (
    <>
      <div className="flex flex-col gap-5 ">
        {awards.map(award => (
          <AwardCategory
            key={award.id}
            {...award}
            selectedWinners={selectedWinners}
            setSelectedWinners={setSelectedWinners}
          />
        ))}
      </div>
      <button className="bg-[#33403e] rounded-sm  px-1 py-2 hover:bg-opacity-40 transition-colors w-full ">
        Submit
      </button>
    </>
  )
}

export default AwardList
