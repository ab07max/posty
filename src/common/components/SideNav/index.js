import React from "react";
import { Menu, Layout, Button } from "antd";
import {
	VideoCameraOutlined,
	DatabaseOutlined,
	FormOutlined,
	BorderOuterOutlined,
} from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";
import firebase from "firebase";

const { Sider } = Layout;

const logout = () => {
	firebase.auth().signOut();
};

const SideNav = ({ location }) => {
	const { pathname } = location;

	return (
		<Sider theme="light">
			<div className="logo" />
			<Menu
				theme="light"
				mode="inline"
				selectedKeys={["/" + pathname.split("/")[1]]}
			>
				<Menu.Item key="/">
					<Link to="/"></Link>
					<VideoCameraOutlined />
					<span className="nav-text">Video Feed</span>
				</Menu.Item>
				<Menu.Item key="/analytics">
					<Link to="/analytics"></Link>
					<DatabaseOutlined />
					<span className="nav-text">Analytics</span>
				</Menu.Item>
				<Menu.Item key="/reports">
					<Link to="/reports"></Link>
					<FormOutlined />
					<span className="nav-text">Reports</span>
				</Menu.Item>
				<Menu.Item key="/sketch">
					<Link to="/sketch"></Link>
					<BorderOuterOutlined />
					<span className="nav-text">Sketch</span>
				</Menu.Item>
				<Button style={{ marginLeft: "10%" }} onClick={logout}>
					Log Out
				</Button>
			</Menu>
		</Sider>
	);
};

export default withRouter(SideNav);
