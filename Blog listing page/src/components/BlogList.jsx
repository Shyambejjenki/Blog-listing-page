import React, { useMemo, useState } from 'react'
import BlogCard from './BlogCard'

export default function BlogList({ blogs, onReadMore }) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return blogs.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q)
    )
  }, [blogs, query])

  return (
    <section>
      <div className="container" style={{padding: '6px 0 14px'}}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search posts..."
          style={{width:'100%', padding:'10px 12px', borderRadius:10, border:'1px solid rgba(255,255,255,.15)', background:'transparent', color:'white'}}
        />
      </div>
      <div className="grid">
        {filtered.map(b => (
          <BlogCard key={b.id} blog={b} onReadMore={() => onReadMore(b.id)} />
        ))}
      </div>
    </section>
  )
}
