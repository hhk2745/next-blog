import React, {useEffect, useState, useRef} from 'react';

// import { PAGInit } from 'libpag';
import Link from 'next/link';
// import { Blob } from 'blob-polyfill';


// export async function getStaticProps({res, response}) {
//   // console.log(res, response);
//   // res.setHeader(
//   //   'Cache-Control',
//   //   'public, s-maxage=10, stale-while-revalidate=59'
//   // )

//   // Fetch data from external API
  
//   // return { props: {bufferJson1, bufferJson2} }/
//   // return { props: {bufferJson1, bufferJson2, bufferJson3} }
// }

const Pag2 = ({bufferJson1, bufferJson2, bufferJson3})=>{

  const canvas1 = useRef(null);
  const canvas2 = useRef(null);
  const canvas3 = useRef(null);
  
  // console.log(`@@`, props);
  useEffect(()=>{
    (import('libpag')).then(res=>res)
    .then(({PAGInit})=>{
      PAGInit().then(async (PAG) => {

        const fetch1 = await fetch(`https://image.dallalive.com/test/summer_entry-fx.pag`);
        const fetch2 = await fetch(`https://image.dallalive.com/test/summer-high.pag`);
        const fetch3 = await fetch(`https://image.dallalive.com/test/summer-mid.pag`);
        const buffer1 = await fetch1.arrayBuffer();
        const buffer2 = await fetch2.arrayBuffer();
        const buffer3 = await fetch3.arrayBuffer();
        const pag1 = await PAG.PAGFile.load(buffer1);
        const pag2 = await PAG.PAGFile.load(buffer2);
        const pag3 = await PAG.PAGFile.load(buffer3);

        canvas1.current.width = 300;
        canvas1.current.height = 300;
        const pagView1 = await PAG.PAGView.init(pag1, canvas1.current);
        pagView1.setRepeatCount(0);
        await pagView1.play();
        
        canvas2.current.width = 300;
        canvas2.current.height = 300;
        const pagView2 = await PAG.PAGView.init(pag2, canvas2.current);
        pagView2.setRepeatCount(0);
        await pagView2.play();

        canvas3.current.width = 300;
        canvas3.current.height = 300;
        const pagView3 = await PAG.PAGView.init(pag3, canvas3.current);
        pagView3.setRepeatCount(0);
        await pagView3.play();

        // canvasSnowman.width = 300;
        // canvasSnowman.height = 300;
        // const pagView = await PAG.PAGView.init(pag2, canvasSnowman);
        // pagView.setRepeatCount(0);
        // await pagView.play();
      });
    });
  })

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
      <div style={{display:'flex'}}>
        <canvas ref={canvas1}></canvas>
        <canvas ref={canvas2}></canvas>
        <canvas ref={canvas3}></canvas>
      </div>

    </header>
  </div>
}

export default Pag2