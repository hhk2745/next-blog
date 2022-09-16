import Link from 'next/link';
import Image from "next/image";


function Webp() {
  return <div className="App">
    
    <div className='title'>
      <Link href="/webp">
        <a>WEBP</a>
      </Link>
      <Link href="/pag">
        <a>CSR-PAG</a>
      </Link>
      <Link href="/pag2">
        <a>SSR-PAG</a>
      </Link>
    </div>
    <header className="App-header">
      <div style={{margin:"20px 0"}}>
        
      </div>

      <div style={{display:'flex'}}>
        <Image src="/summer_entry-fx.webp" alt="a" width={500} height={500}/>
        <Image src="/summer-high.webp" alt="b" width={500} height={500}/>
        <Image src="/summer-mid.webp" alt="c" width={500} height={500}/>
      </div>

    </header>

  </div>
}




export default Webp