import React from "react"
import { navigate } from "gatsby" //import navigate from gatsby
import SideBar from "../components/layout/SideBar"
const Setting = () => {
  return (
    <SideBar
      props={
        <div>
          <h1>This is setting</h1>
          <button
            onClick={() => {
              navigate("/home")
            }}
          >
            go home
          </button>
        </div>
      }
    />
  )
}

export default Setting
