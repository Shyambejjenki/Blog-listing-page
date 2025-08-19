import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogDetails from './components/BlogDetails'

export default function App() {
  const [blogs, setBlogs] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/blogs.json')
      .then(r => r.json())
      .then(setBlogs)
      .catch(() => setBlogs([]))
  }, [])

  const openDetails = (id) => navigate(`/blog/${id}`)

  return (
    <div className="app">
      <header className="container">
        <h1>📖 My Blog</h1>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<BlogList blogs={blogs} onReadMore={openDetails} />} />
          <Route path="/blog/:id" element={<BlogDetails blogs={blogs} />} />
        </Routes>
      </main>
      <footer className="container footer">© {new Date().getFullYear()} My Blog</footer>
    </div>
  )
}
