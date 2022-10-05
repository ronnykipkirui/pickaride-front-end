import "./post.css"

export default function Post() {
  return (
    <div className="posts">
      <img className="postimg"
        src="pex1" alt=""
      />
      <div className="postinfo">
        <div className="postcats">
          <span className="postcat">music</span>
          <span className="postcat">life</span>
        </div>
        <span className="posttittle">
          Lorem ipsum, dolor sit amet consectetur 
          adipisicing elit.
        </span>
        <hr />
        <span className="postdate">1 hr ago</span>
      </div>
    </div>

  )
}
