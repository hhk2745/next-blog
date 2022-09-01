import React, {useEffect, useState} from 'react';

// import { PAGInit } from 'libpag';
import Link from 'next/link';
// import { Blob } from 'blob-polyfill';


export async function getServerSideProps({res, response}) {
  // console.log(res, response);
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  // Fetch data from external API
  const pagLike = await fetch(`https://image.dallalive.com/test/like.pag`);
  const pagSnowman = await fetch(`https://image.dallalive.com/test/snowman.pag`);
  const bufferLike = await pagLike.arrayBuffer();
  const bufferSnowman = await pagSnowman.arrayBuffer();
  const like = JSON.stringify(Array.from(new Uint8Array(bufferLike)));
  const snowman = JSON.stringify(Array.from(new Uint8Array(bufferSnowman)));
  return { props: {like, snowman} }
}

const Pag2 = (props)=>{
  // console.log(`@@`, props);
  useEffect(()=>{
    (import('libpag')).then(res=>res)
    .then(({PAGInit})=>{
      PAGInit().then(async (PAG) => {
        const like = new Uint8Array(JSON.parse(props.like)).buffer;
        const snowman = new Uint8Array(JSON.parse(props.snowman)).buffer;
        const fileLike = await PAG.PAGFile.load(like);
        const fileSnowman = await PAG.PAGFile.load(snowman);
        const canvasLike = document.getElementById('pag1');
        const canvasSnowman = document.getElementById('pag2');
        if(canvasLike){
          canvasLike.width = 300;
          canvasLike.height = 300;
          const pagView = await PAG.PAGView.init(fileLike, canvasLike);
          pagView.setRepeatCount(0);
          await pagView.play();
        }
        if(canvasSnowman){
          canvasSnowman.width = 300;
          canvasSnowman.height = 300;
          const pagView = await PAG.PAGView.init(fileSnowman, canvasSnowman);
          pagView.setRepeatCount(0);
          await pagView.play();
        }
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
        <canvas id="pag1"></canvas>
        <canvas id="pag2"></canvas>
        <canvas id="pag3"></canvas>
      </div>

    </header>
  </div>
}

export default Pag2