import Link from 'next/link'
const IndexPage = ()=>{

  return <div>
    <Link href="/pag">
      <a style={{margin:'20px'}}>pag로 이동</a>
    </Link>

    <Link href="/webp">
      <a style={{margin:'20px'}}>webp로 이동</a>
    </Link>
  </div>
}

export default IndexPage