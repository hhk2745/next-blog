import Link from 'next/link'
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
        <img src="/summer_entry-fx.webp" />
        <img src="/summer-high.webp" />
        <img src="/summer-mid.webp" />
      </div>

    </header>

  </div>
}




export default Webp