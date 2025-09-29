const links = [
  'About',
  'Careers',
  'Events',
  'Products',
  'Support'
]

export function OverflowMenu() {
  return (
    <nav aria-label="Mobile Primary Menu">
      <ul className='flex flex-col gap-300 uppercase text-preset5 text-white'>
        {links.map(link => (
          <li key={link} className='hover:underline'>
            <a href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function Menu({ inFooter = false }) {
  return (
    <nav aria-label="Primary Menu" className={` ${inFooter ? 'block' : 'hidden'} desktop:block text-white tablet:max-h-[25px]`}>
      <ul className={`flex gap-200 desktop:gap-400 capitalize text-preset6 ${inFooter ? 'flex-col tablet:flex-row' : ''}`}>
        {links.map(link => (
          <li key={link} className='flex flex-col justify-center items-center gap-2 group cursor-pointer'>
            <a href={`#${link.toLowerCase()}`} className=''>
              {link}
            </a>
            <div className='h-[2px] bg-white w-2/4 group-hover:opacity-100 opacity-0 hidden desktop:block'></div>
          </li>
        ))}
      </ul>
    </nav>
  )
}