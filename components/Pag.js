import React, {useEffect, useState} from 'react';

import { PAGInit } from 'libpag';
import Link from 'next/link'
const Pag = ()=>{
  const [view, setView] = useState(true);
  useEffect(() => {
    console.log('Effect!')
    PAGInit().then(async (PAG) => {
      const buffer1 = await fetch("/summer_entry-fx.pag").then((response) => response.arrayBuffer());
      const pagFile1 = await PAG.PAGFile.load(buffer1);
      const canvas1 = document.getElementById('pag1');
      canvas1.width = 360;
      canvas1.height = 360;
      const pagView1 = await PAG.PAGView.init(pagFile1, canvas1);
      pagView1.setRepeatCount(0);
      console.log(buffer1, canvas1, pagView1);
      await pagView1.play();
      // fetch("/summer_entry-fx.pag").then((response) => response.arrayBuffer()).then(async buffer1=>{
        
      // })
      

      const buffer2 = await fetch("/summer-high.pag").then((response) => response.arrayBuffer());
      const pagFile2 = await PAG.PAGFile.load(buffer2);
      const canvas2 = document.getElementById('pag2');
      canvas2.width = 360;
      canvas2.height = 360;
      const pagView2 = await PAG.PAGView.init(pagFile2, canvas2);
      pagView2.setRepeatCount(0);
      console.log(buffer2, canvas2, pagView2);
      await pagView2.play();

      const buffer3 = await fetch("/summer-mid.pag").then((response) => response.arrayBuffer());
      const pagFile3 = await PAG.PAGFile.load(buffer3);
      const canvas3 = document.getElementById('pag3');
      canvas3.width = 360;
      canvas3.height = 360;
      const pagView3 = await PAG.PAGView.init(pagFile3, canvas3);
      pagView3.setRepeatCount(0);
      console.log(buffer3, canvas3, pagView3);
      await pagView3.play();
    }).catch(e=>{
      console.log(e)
    });

    return ()=>{
      setView(false);
    }
  }, [])

  return <div className="App">
    <div className='title'>*.pag</div>
    
  <header className="App-header">
    <div style={{margin:"20px 0"}}>
      <Link href="/webp">
        <a>webp로 이동</a>
      </Link>
    </div>
    {
      view &&
      <div style={{display:'flex'}}>
        <canvas id="pag1"></canvas>
        <canvas id="pag2"></canvas>
        <canvas id="pag3"></canvas>
      </div>
    }
    
  </header>
</div>

}

export default Pag