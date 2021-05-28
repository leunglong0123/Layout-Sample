import React, { useState, useEffect } from "react"
import { navigate } from "gatsby" //import navigate from gatsby
import SideBar from "../components/layout/SideBar"
import object from "../common/object"
import ShowPost from "../components/ShowPost"
import { Button } from "antd"
const PostPage = (props) => {
  const target_post = object.find((x) => x.titleID === props.params.id)
  console.log("target", target_post)

  return (
    <SideBar
      props={
        <div>
          <ShowPost post={target_post} />
          <Button
            onClick={() => {
              navigate("/home")
            }}
          >
            Back
          </Button>
        </div>
      }
    />
  )
}

export default PostPage
