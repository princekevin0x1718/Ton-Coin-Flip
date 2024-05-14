import TonConnectButton from "@/features/TonConnectButton/TonConnectButton"

function MainPageHeader() {
  return (
    <header className="flex justify-around items-center">
      <span>avatar</span>
      <span>emr</span>
      <TonConnectButton />
    </header>
  )
}

export default MainPageHeader
