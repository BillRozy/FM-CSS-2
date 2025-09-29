import vr from '../assets/mobile/image-interactive.jpg'
import vrDesktop from '../assets/desktop/image-interactive.jpg'
import deepEarth from '../assets/mobile/image-deep-earth.jpg'
import deepEarthDesktop from '../assets/desktop/image-deep-earth.jpg'
import nightArcade from '../assets/mobile/image-night-arcade.jpg'
import nightArcadeDesktop from '../assets/desktop/image-night-arcade.jpg'
import soccerTeam from '../assets/mobile/image-soccer-team.jpg'
import soccerTeamDesktop from '../assets/desktop/image-soccer-team.jpg'
import grid from '../assets/mobile/image-grid.jpg'
import gridDesktop from '../assets/desktop/image-grid.jpg'
import fromAbove from '../assets/mobile/image-from-above.jpg'
import fromAboveDesktop from '../assets/desktop/image-from-above.jpg'
import pocketBorealis from '../assets/mobile/image-pocket-borealis.jpg'
import pocketBorealisDesktop from '../assets/desktop/image-pocket-borealis.jpg'
import curiosity from '../assets/mobile/image-curiosity.jpg'
import curiosityDesktop from '../assets/desktop/image-curiosity.jpg'
import makeItFishye from '../assets/mobile/image-fisheye.jpg'
import makeItFishyeDesktop from '../assets/desktop/image-fisheye.jpg'

function LeaderSection() {
  return (
    <section className='flex flex-col gap-600 tablet:grid tablet:gap-0 tablet:grid-cols-[minmax(608px,1fr)] tablet:grid-rows-[minmax(284px,1fr)243px] desktop:grid-cols-2 desktop:grid-rows-8 desktop:max-h-[500px]'>
      <img srcSet={`${vrDesktop} 731w, ${vr} 654w`} sizes="(min-width: 1000px) 731px, 654px" src={vr} alt="Virtual Reality" className='object-contain object-top w-full h-full tablet:row-span-full tablet:col-start-1 tablet:col-end-1 desktop:col-span-full desktop:object-left-top' />
      <div className='flex flex-col gap-200 tablet:gap-300 mx-300 tablet:row-start-2 tablet:col-start-1 tablet:col-end-1 bg-white tablet:mx-0 tablet:pt-600 desktop:row-start-4 desktop:row-end-9 desktop:col-start-2 desktop:col-end-3 desktop:pl-[96px] desktop:pt-[97px] desktop:max-w-[541px] desktop:place-self-end'>
        <h1 className='text-preset4 tablet:text-preset2 uppercase text-center desktop:text-start'>The leader in interactive VR</h1>
        <p className='text-preset6 opacity-50 text-center desktop:text-start'>
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
        </p>
      </div>
    </section>
  )
}

function SeeAllButton() {
  return <button type="button" className='border border-black text-black text-preset7 uppercase px-[40.5px] py-[13px] hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer'>See All</button>
}

function PortfolioSection() {
  const portfolioItems = [
    {
      title: <span>Deep <br />Earth</span>,
      mobile: deepEarth,
      desktop: deepEarthDesktop
    },
    {
      title: <span>Night <br />Arcade</span>,
      mobile: nightArcade,
      desktop: nightArcadeDesktop
    },
    { title: <span>Soccer <br />Team VR</span>, mobile: soccerTeam, desktop: soccerTeamDesktop },
    { title: <span>The <br />Grid</span>, mobile: grid, desktop: gridDesktop },
    { title: <span>From Up <br />Above VR</span>, mobile: fromAbove, desktop: fromAboveDesktop },
    { title: <span>Pocket <br />Borealis</span>, mobile: pocketBorealis, desktop: pocketBorealisDesktop },
    { title: <span>The <br />Curiosity</span>, mobile: curiosity, desktop: curiosityDesktop },
    { title: <span>Make It <br />Fisheye</span>, mobile: makeItFishye, desktop: makeItFishyeDesktop }
  ]
  return (
    <section className="flex flex-col items-center gap-400 desktop:gap-1000">
      <div className='flex justify-center items-center mb-200 desktop:justify-between w-full tablet:mb-0'>
        <h1 className="text-preset4 tablet:text-preset2 uppercase text-center desktop:text-start">Our Creations</h1>
        <span className='hidden desktop:block'><SeeAllButton></SeeAllButton></span>
      </div>
      <div className="grid grid-cols-1 gap-300 desktop:gap-400 desktop:grid-cols-4 desktop:grid-rows-[minmax(450px,1fr)] w-full">
        {portfolioItems.map((item, index) => (
          <figure key={index} className='relative group cursor-pointer h-[120px] desktop:h-auto desktop:max-h-[450px]'>
            <img srcSet={`${item.desktop} 256w, ${item.mobile} 654w`} sizes="(min-width: 1000px) 256px, 654px" src={item.mobile} alt="" className='object-cover object-top w-full h-full' />
            <div className='absolute top-0 h-full w-3/4 desktop:w-full desktop:h-3/4 desktop:top-auto desktop:bottom-0 left-0 bg-linear-to-r desktop:bg-linear-to-t from-black/60 to-black/0'></div>
            <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-75 transition-opacity duration-300'></div>
            <figcaption className='absolute top-[52px] left-[20px] text-white text-preset5 desktop:text-preset4 uppercase group-hover:text-black desktop:left-[40px] desktop:top-[354px]'>{item.title}</figcaption>
          </figure>
        ))}
      </div>
      <span className='desktop:hidden'><SeeAllButton></SeeAllButton></span>
    </section>
  )
}
export default function Main() {
  return (
    <main className='w-full px-300 py-[96px] tablet:px-1000 desktop:pt-[160px] desktop:pb-[182px] desktop:px-[164px] bg-white flex flex-col gap-800 desktop:gap-[184px]'>
      <LeaderSection></LeaderSection>
      <PortfolioSection></PortfolioSection>
    </main>
  )
}
