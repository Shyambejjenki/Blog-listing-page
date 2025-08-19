import React from 'react'

export default function BlogCard({ blog, onReadMore }) {
  return (
    <article className="card">
      <img className="thumb" src={blog.thumbnail} alt={blog.title} />
      <h2 className="title">{blog.title}</h2>
      <p className="desc">{blog.description}</p>
      <button className="btn" onClick={onReadMore}>Read More →</button>
    </article>
  )
}
