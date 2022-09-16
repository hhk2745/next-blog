import React, { useState, useEffect, useRef } from 'react';
import ReactQuill, {Quill, QuillOptions, UnprivilegedEditor} from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import ImageResize from 'quill-image-resize-module-react';



// import 'react-quill/dist/quill.bubble.css';
// import 'react-quill/dist/quill.core.css';

const Editor = ()=>{
  const [value, setValue] = useState('');
  const [readOnly, setReadOnly] = useState(false);
  const quillRef = useRef(null);

  Quill.register("modules/imageResize", ImageResize);
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: [ 'Resize', 'DisplaySize', 'Toolbar' ],
      displayStyles: {
        backgroundColor: 'black',
        border: '5px solid red',
        color: 'white'
        // other camelCase styles for size display
    }
      // See optional "config" below
    }
  }
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ]

  useEffect(() => {
    // Quill.register('modules/imageResize', ImageResize);
  }, []);
  const editorFocus = (selection, source, editor)=>{
    console.log(selection, source, editor);
  }
  const editorChange = (value, delta, source, editor)=>{
    setValue(value);
  }
  return <>
    <div className='editorContainer'>
      <div className='quillWrap'>
        <ReactQuill theme="snow" 
        value={value || ""}
        onChange={editorChange} 
        onFocus={editorFocus}
        modules={modules}
        formats={formats}
          readOnly={readOnly}
          className={"test"}
          ref={quillRef}
          preserveWhitespace
        />
      </div>
      <div className='viewWrap'>
        <div>
          <div className='title'>
            HTML CODE
          </div>
          <p>
            {value}
          </p>
        </div>
        <div>
          <div className='title'>
            VIEW
          </div>
          <p dangerouslySetInnerHTML={{__html: value}}></p>
        </div>
      </div>
    </div>
  </>
}


export default Editor