import FlipTheCoin from "@/features/FlipTheCoin"

function MainPageFooter() {
  return (
    <footer className="grid grid-cols-[1fr,1fr,1.2fr,1fr,1fr] items-center">
      <span>leaders</span>
      <span>friends</span>
      <FlipTheCoin />
      <span>boost</span>
      <span>how to</span>
    </footer>
  )
}

export default MainPageFooter
