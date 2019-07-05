/*
路由配置
*/
import Login from "../components/login";
import Layout from "../components/layout";
import Tree from "../components/tree";
export default [
  {
    path: "/layout",
    name: "layout",
    component: Layout
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/tree",
    name: "tree",
    component: Tree
  }
];
