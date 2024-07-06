import "./Footer.css"
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
  return (
    <div className="h-28">
      <div className="flex justify-center ">
      <LinkedinLogo className="ml-2 mr-2"size={48} weight='bold' />
      <InstagramLogo className="ml-2 mr-2"size={48} weight='bold' />
      <FacebookLogo className="ml-2 mr-2"size={48} weight='bold' />
      </div>
    </div>
  )
}

export default Footer
