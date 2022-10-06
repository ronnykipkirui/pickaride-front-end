import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img src="pex1.jpg" alt="" className="writeimg" />
            <form className="writeform">
                <div className="writeformgroup">
                    <label htmlFor="fileinput">
                        <i className="writeicon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileinput" style={{ display: "none" }} />
                    <input type="text" placeholder="tittle" className="writeinput" autoFocus={true} />
                </div>
                <div className="writeformgroup">
                    <textarea placeholder="tell your story..."
                        type="text"
                        className="writeinput writetext">

                    </textarea>
                </div>
                <button className="writesubmit">publish</button>
            </form>
        </div>
    )
}
