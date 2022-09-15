import React, { useState, useEffect } from 'react';
import ReactQuill, {Quill, QuillOptions} from 'react-quill';
import 'react-quill/dist/quill.snow.css';


// import 'react-quill/dist/quill.bubble.css';
// import 'react-quill/dist/quill.core.css';

const Editor = ()=>{
  const [value, setValue] = useState('');
  
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
  }
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
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

  useEffect(()=>{
    console.log(value);
  }, [value])

  return <>
    <div className='editorContainer'>
      <div className='quillWrap'>
        <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} formats={formats}/>
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