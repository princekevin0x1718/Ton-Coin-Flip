import Image from "next/image"

import MainPageFooter from "@/components/MainPageFooter"
import MainPageHeader from "@/components/MainPageHeader"
import BetAmountClientWrapper from "@/features/BetAmount"
import HeadOrTail from "@/features/HeadOrTail"
import NewUsersBucket from "@/features/NewUsersBucket"
import CoinFlipProvider from "@/providers/CoinFlipProvider"

export const dynamic = "force-dynamic"

export default function Home() {
  return (
    <NewUsersBucket>
      <CoinFlipProvider>
        <main className="min-h-screen grid grid-rows-[auto,1fr,auto] gap-4 bg-amber-100">
          <MainPageHeader />
          <div className="px-8 flex flex-col gap-4">
            <h1 className="text-2xl font-extrabold text-orange-500 text-center">
              Double or nothing
            </h1>
            <div className="flex justify-center">
              <Image
                src="https://static.vecteezy.com/system/resources/previews/019/046/339/original/gold-coin-money-symbol-icon-png.png"
                width={128}
                height={128}
                alt="main ottocoin image"
              />
            </div>
            <BetAmountClientWrapper />
            <HeadOrTail />
          </div>
          <MainPageFooter />
        </main>
      </CoinFlipProvider>
    </NewUsersBucket>
  )
}
