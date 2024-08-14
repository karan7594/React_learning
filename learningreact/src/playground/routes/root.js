import React from "react";
import styled from "styled-components";
import { routeNames, routeTitles } from "./routes";
import { NavLink, Outlet } from "react-router-dom";

const Sidebar = styled.div`
  width: 256px;
  height: 100vh;
  background-color: #f7f7f7;
  border-radius: solid 2px #e3e3e3;
  display: flex;
  flex-direction: column;
  font-family: "Courier New", Courier, monospace;
  & h1 {
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 1rem 0rem;
    line-height: 1;
    & a {
      width: 100%;
      font-size: 1rem;
      display: flex;
      align-items: center;
      overflow: hidden;
      justify-content: center;
      gap: 1rem;

      line-height: 1;
    }
  }
  & nav{
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: column;
    align-items: center;
  }
`;
const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 1rem 0rem;
  line-height: 1;
  text-decoration: none;
  list-style:none;
  width: 100%;
  font-size: 1rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  gap: 1rem;
  list-style: none;
    font-size: 16px;
    font-family: monospace;
  line-height: 1;
`;
const RemoveSideBar = styled.div`
  position: absolute;
  right: 15px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 15px;
  padding: 5px;
  &:hover {
    background-color: #e3e3e3;
    color: blue;
    border-radius: 8px;
  }
`;

const Canvas=styled.div`
    background-color: white;
    color:black;
    width:100%;
    padding-top:1rem;
`

const ListWrapper=styled.ul`
    display: flex;
    list-style: none;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;
`

const Root = ({ props}) => {
  const [showSideBar, setShowSiderBar] = React.useState(true);
  return (
    <div style={{ display: "flex" }}>
      {showSideBar && (
        <Sidebar>
          <h1 style={{ position: "relative" }}>
            <a href="/">React Components</a>
            <RemoveSideBar
              onClick={() => {
                setShowSiderBar(false);
              }}
            >
              X
            </RemoveSideBar>
          </h1>
          <nav>
            <ListWrapper >
                {routeNames.map((routeName,index)=>(
                    <li key={index}>
                        <NavItem to={`/${routeName}`}  >
                            {routeTitles[index]}
                        </NavItem>
                    </li>
                ))}
            </ListWrapper>
          </nav>
        </Sidebar>
      )}
      <Canvas>
        <Outlet/>
      </Canvas>
    </div>
  );
};

export default Root;
