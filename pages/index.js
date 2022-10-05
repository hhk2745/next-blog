import Link from 'next/link'
import helloAPI from './api/hello'
const IndexPage = ()=>{

  return <div>
    <Link href="/pag">
      <a style={{margin:'20px'}}>pag로 이동</a>
    </Link>

    <Link href="/webp">
      <a style={{margin:'20px'}}>webp로 이동</a>
    </Link>


    <div onClick={()=>{
      fetch('/api/hello').then(async (res)=>{
        const data = await res.json();
        console.log(data);
      })
    }}>
      Hello
    </div>
    <div onClick={()=>{
      fetch('/api/photos').then(async (res)=>{
        const data = await res.json();
        console.table(data);
      })
    }}>
      Photos
    </div>
  </div>
}

export default IndexPage