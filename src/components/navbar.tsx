import { links } from "@/lib/datas"
import Header from "./header"
import HamburgerMenu from "./hamburger-menu"



export default function Navbar(){
    return(
     <nav>
        <HamburgerMenu links={links}/>
        <Header links={links}/>
     </nav>
    )
}