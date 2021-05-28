import React, { useState } from "react"
import ShowPost from "../components/ShowPost"
import object from "../common/object"
import SideBar from "../components/layout/SideBar"
import "./home.css"

const Home = () => {
  const [curPost, setCurPost] = useState("")

  const ClickHandler = (param) => {
    setCurPost(param)
  }

  const post = object
  console.log(post)
  return (
    <div>
      <SideBar
        props={<ShowPost post={curPost} />}
        ClickHandler={ClickHandler}
      />
    </div>
  )
}

export default Home
