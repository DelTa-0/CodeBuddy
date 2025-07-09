

import './App.css'
import Editor from "react-simple-code-editor"
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs"
import { useEffect, useState } from 'react'

function App() {
  useEffect(()=>{
    prism.highlightAll()
  })
  const [code,setcode]=useState()
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor value={code}
            onValueChange={code=>setcode(code)}
            highlight={code=>prism.highlight(code,prism.languages.javascript,"javascript")}
            padding={10}
            style={
              {
                fontFamily:"monospace",
                fontSize:12,
                border:"1px solid #ddd",
                borderRadius:"5px",
                height:"100%",
                width:"100%",

              }
            }/>

            
          </div>
          <div className="review">review</div>
        </div>
        <div className="right">
        </div>
      </main>
    </>
  )
}


export default App
