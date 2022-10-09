import { useEffect, useState } from "react"
import "./post.css"

export default function Post() {

  const [blogs, setBlogs] = useState(null)

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        res.json()
      })
      .then(data => {
      setBlogs(data)
      })
  },[])



  return (
    <div className='post'>
      <img className="postimg"
        src="pex1.jpg" alt=""
      />
      <div className="postinfo">
        <div className="postcats">
          <span className="postcat">music</span>
          <span className="postcat">life</span>
        </div>
        <span className="posttittle">
          Lorem ipsum
        </span>
        <hr />
        <span className="postdate">1 hr ago</span>
      </div>
      <div className="postdesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cumque quibusdam neque del
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cumque quibusdam neque del
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cumque quibusdam neque del
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cumque quibusdam neque del

      </div>
    </div>
  )
}




