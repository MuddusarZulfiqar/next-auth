import React, { useRef } from 'react';
 import { Editor } from '@tinymce/tinymce-react';

 export default function App({setEditorText}) {
   const editorRef = useRef(null);
   return (
     <div style={{marginBottom:'20px'}}>
       <Editor
         apiKey='131a2ydfoeqnjcm1ae8b92kq7bhkxbfef1k524lwsmg5lwdj'
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue=""
         init={{
           height: 500,
           menubar: true,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table advtable tableofcontents paste code help wordcount',
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic forecolor backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'table'+
           'removeformat | help ',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
         
         onChange={(e)=>setEditorText(e.target.getContent())}
       />
     </div>
   );
 }