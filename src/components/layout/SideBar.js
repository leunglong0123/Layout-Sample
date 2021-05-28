import React, { useState } from "react"
import object from "../../common/object"
import ListPost from "../ListPost"
import { navigate } from "gatsby" //import navigate from gatsby
import { Layout, Menu, Button, Breadcrumb } from "antd"
import { UserOutlined, LaptopOutlined } from "@ant-design/icons"
import "./SideBar.less"
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

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
      <Layout style={{ height: "100vh" }}>
        <Header className="header">
          <Menu theme="dark" mode="horizontal">
            Blood Bread Factory
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Posts">
                {post.map((eachPost) => (
                  <Menu.Item
                    style={{ height: "100%", borderRight: 0 }}
                    key={eachPost.titleID}
                    onClick={() => ClickHandler(eachPost)}
                  >
                    <ListPost
                      onClick={() => setCurPost(eachPost)}
                      post={eachPost}
                    />
                  </Menu.Item>
                ))}
              </SubMenu>

              <Menu.Item
                key="Setting"
                onClick={() => navigate("/setting")}
                icon={<LaptopOutlined />}
              >
                Setting
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div className="right-pane">{element}</div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      {/* <h1 className="pageHeader">Home</h1>
      <hr />
      <div className="splitScreen">
        <div className="left-pane">
          {post.map((eachPost) => (
            <li key={eachPost.titleID}>
              <ListPost onClick={() => setCurPost(eachPost)} post={eachPost} />
              <Button
                type="primary"
                onClick={() => ClickHandler(eachPost)}
                style={{ marginLeft: 8 }}
              >
                view
              </Button>
            </li>
          ))}

          <hr />
          <button onClick={() => navigate("/setting")} post={post}>
            Setting
          </button>
        </div>
        <div className="right-pane">{element}</div>
      </div> */}
    </div>
  )
}

export default SideBar
