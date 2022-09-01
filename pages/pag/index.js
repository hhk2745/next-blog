import React, {useEffect} from 'react';
import dynamic from 'next/dynamic'

const CodeMirror = dynamic(() => {
  return import('../../components/Pag')
}, { ssr: false })

function Pag({ data }) {
  return CodeMirror && <CodeMirror/>
}

export default Pag

