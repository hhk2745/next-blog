import Link from 'next/link'
function Webp() {
  return <div className="App">
    
    <div className='title'>*.webp</div>
    <header className="App-header">
      <div style={{margin:"20px 0"}}>
        <Link href="/pag">
          <a>PAG로 이동</a>
        </Link>
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