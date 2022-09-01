import React, {useEffect, useState} from 'react';

import { PAGInit } from 'libpag';
import Link from 'next/link'
const Pag = ()=>{
  useEffect(() => {
    PAGInit().then((PAG) => {
      const url = '/like.pag';
      fetch(url)
        .then((response) => response.arrayBuffer())
        .then(async (buffer) => {
          console.log(`@@`,typeof buffer, buffer);
          const pagFile = await PAG.PAGFile.load(buffer);
          const canvas = document.getElementById('pag1');
          if(canvas){
            canvas.width = 300;
            canvas.height = 300;
            const pagView = await PAG.PAGView.init(pagFile, canvas);
            pagView.setRepeatCount(0);
            await pagView.play();
          }
          
        });


        const url2 = '/snowman.pag';
        fetch(url2)
          .then((response) => response.arrayBuffer())
          .then(async (buffer) => {
            const pagFile = await PAG.PAGFile.load(buffer);
            const canvas = document.getElementById('pag2');
            if(canvas){
              canvas.width = 300;
              canvas.height = 300;
              const pagView = await PAG.PAGView.init(pagFile, canvas);
              pagView.setRepeatCount(0);
              await pagView.play();
            }
            
          });
    });
      
  });

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

export default Pag