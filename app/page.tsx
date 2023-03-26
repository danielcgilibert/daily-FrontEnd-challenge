import AwardList from '@/components/awardList'

export default async function Home() {
  return (
    <main className="flex flex-col gap-3 p-6 md:p-14">
      <h1 className="font-medium text-6xl text-[#F8F9FA] text-center">
        Awards 2023
      </h1>
      <AwardList />
    </main>
  )
}
