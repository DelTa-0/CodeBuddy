

import './App.css'
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs"
import { useEffect } from 'react'

function App() {
  useEffect(()=>{
    prism.highlightAll()
  })

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <pre>
              <code className="language-javascript">
                {`function sum(){
                  return 1+1;
                }`}</code>
            </pre>
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
