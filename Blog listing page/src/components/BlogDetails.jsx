import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function BlogDetails({ blogs }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const blog = blogs.find(b => String(b.id) === id)

  if (!blog) return (
    <div className="details">
      <button className="btn back" onClick={() => navigate(-1)}>← Back</button>
      <p>Blog not found.</p>
    </div>
  )

  return (
    <div className="details">
      <button className="btn back" onClick={() => navigate(-1)}>← Back</button>
      <h2 className="title">{blog.title}</h2>
      <img className="thumb" src={blog.thumbnail} alt={blog.title} />
      <p style={{whiteSpace:'pre-wrap', lineHeight:'1.5rem'}}>{blog.content}</p>
    </div>
  )
}
