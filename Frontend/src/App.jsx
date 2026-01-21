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

  const [code, setcode] = useState(``)
  const [review, setreview] = useState(``)
  const [answer, setanswer] = useState(``)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {
    prism.highlightAll()

  }, [])

  async function reviewcode() {
    if (!code.trim()) {
      setError("Please enter some code to review")
      return
    }
    
    setIsLoading(true)
    setError(null)
    setreview("")
    setanswer("")
    
    try {
      const res = await axios.post('http://localhost:3000/ai/get_review', { code : code });
      console.log(res)
      setreview(res.data)
      setanswer(res.data)
    } catch (err) {
      setError("Failed to get review or answer. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <h1 className="main-title">
            <span className="title-icon"></span>
            <span className="title-text">
              <span className="title-main">AI Code Reviewer & Bot Assistant</span>
              <span className="title-subtitle">Intelligent Code Analysis, Feedback & Question Answering</span>
            </span>
          </h1>
        </div>
      </header>
      
      <main>
        <div className='left'>
          <div className="code-section-header">
            <h2 className="section-title">
              <span className="section-icon"></span>
              Your Code or Question
            </h2>
          </div>
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => {
                setcode(code)
                setError(null)
              }}
              padding={10}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              style={{
                fontFamily: '"fira code " , "fira mono" , "monospace"',
                fontSize: 16,
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <button 
            className={`review-btn ${isLoading ? 'loading' : ''}`} 
            onClick={reviewcode || askquestion}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <span className="btn-icon"></span>
                <span>Review Code or Ask Question</span>
              </>
            )}
          </button>
          {error && (
            <div className="error-message">
              <span className="error-icon"></span>
              {error}
            </div>
          )}
        </div>

        <div className='right'>
          <div className="review-section-header">
            <h2 className="section-title">
              <span className="section-icon"></span>
              AI Review or Answer
            </h2>
          </div>
          <div className="review-content">
            {isLoading ? (
              <div className="loading-state">
                <div className="loading-spinner-large"></div>
                <p>AI is analyzing your code...</p>
              </div>
            ) : review || answer ? (
              <Markdown
                rehypePlugins={rehypeHighlight}
              >
                {review || answer}
              </Markdown>
            ) : (
              <div className="empty-state">
                <div className="empty-icon"></div>
                <p className="empty-text">Write your code or ask a question and click "Review" or "Ask" to get AI-powered feedback!</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
