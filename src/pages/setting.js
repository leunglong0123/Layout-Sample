import React from "react"
import { navigate } from "gatsby" //import navigate from gatsby
import SideBar from "../components/layout/SideBar"
import { Button } from "antd"
const Setting = () => {
  return (
    <SideBar
      props={
        <div>
          <h1>This is setting</h1>
          <Button
            onClick={() => {
              navigate("/home")
            }}
          >
            go home
          </Button>
        </div>
      }
    />
  )
}

export default Setting
