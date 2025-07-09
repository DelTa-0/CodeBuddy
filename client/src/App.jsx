import './App.css';
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import Markdown from "react-markdown";
import ReactMarkdown from "react-markdown"
import axios from "axios";

import { useEffect, useState } from 'react';

function App() {
  const [code, setCode] = useState("");
  const [review,setReview]=useState("");

  useEffect(() => {
    Prism.highlightAll();
  }, [code]); 

  async function reviewCode() {
    const response= await axios.post('http://localhost:3000/ai/get-review',{code});
    setReview(response.data)
    }

    function ReviewDisplay({ review }) {
  if (!review || !review.parts) return null;

  
  const markdown = review.parts.map(part => part.text).join("\n\n");

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(newCode) => setCode(newCode)}
              highlight={(newCode) =>
                Prism.highlight(newCode, Prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: "monospace",
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div className="review" onClick={reviewCode}>review</div>
        </div>
        <div className="right">
          <ReviewDisplay review={review}/>
        </div>
      </main>
    </>
  );
}

export default App;
