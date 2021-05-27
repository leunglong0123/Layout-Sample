import React, { useState } from "react"
import object from "../../common/object"
import ListPost from "../ListPost"
import { navigate } from "gatsby" //import navigate from gatsby
const SideBar = (props) => {
  const [curPost, setCurPost] = useState("")

  const ClickHandler = (param) => {
    console.log(param)
    navigate("/" + param.titleID)
  }
  const post = object
  const element = props.props
  return (
    <div className="Container">
      <h1 className="pageHeader">Home</h1>
      <hr />
      <div className="splitScreen">
        <div className="left-pane">
          {post.map((eachPost) => (
            <li key={eachPost.titleID}>
              <ListPost onClick={() => setCurPost(eachPost)} post={eachPost} />
              <button onClick={() => ClickHandler(eachPost)}>view</button>
            </li>
          ))}
          <hr />
          <button onClick={() => navigate("/setting")} post={post}>
            Setting
          </button>
        </div>
        <div className="right-pane">{element}</div>
      </div>
    </div>
  )
}

export default SideBar
