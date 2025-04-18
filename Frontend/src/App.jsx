import { useState, useEffect } from 'react'
import React from 'react'
import "prismjs/themes/prism-tomorrow.css"
// import "prismjs/components/prism-jsx"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import axios from "axios"
import Markdown from "react-markdown"
import "highlight.js/styles/github-dark.css"
import rehypeHighlight from "rehype-highlight"



const App = () => {

  const [code, setcode] = useState(`function sum(){return a+b ;}`)
  const [review, setreview] = useState(``)


  useEffect(() => {
    prism.highlightAll()

  }, [])

  async function reviewcode() {
    const res = await axios.post('http://localhost:3000/ai/get_review', { code });
    console.log(res)

    setreview(res.data)


  }

  return (
    <>
      <main>
        <div className='left'>
          <div className="code">
            {/* <pre>
              <code className="language-javascript">{}</code>
            </pre> */}
            <Editor
              value={code}
              onValueChange={code => setcode(code)}
              padding={10}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              // style={{
              //   fontFamily,
              //   fontSize
              // border="1px solid black",
              // borderRadius="5px",
              // height="100%",
              // width="100%"
              // }}
              style={{
                fontFamily: '"fira code " , "fira mono" , "monospace"',
                fontSize: 16,
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div className='review' onClick={reviewcode}>Review</div>
        </div>
        <div className='right'>
          <Markdown
          rehypePlugins={rehypeHighlight}
          >
            {review}
          </Markdown>

        </div>


      </main>


    </>
  )
}

export default App