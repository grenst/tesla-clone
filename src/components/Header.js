import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container show={burgerStatus}>
      <FadingBack show={burgerStatus} />
      <a href="https://github.com/grenst/tesla-clone">
        <img className="logo" src="/images/logo.png" alt="" />
        <br></br>
        <span className="coded">
          coded by <span>Makarova Olena</span>
        </span>
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop Tesla</a>
        <a href="#">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}></CustomMenu>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWraper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWraper>

        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const FadingBack = styled.div`
  position: absolute;
  left: -100px;
  top: -100px;
  height: 200vh;
  width: 300vw;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  background-size: 1000%;
  transition: all 0.2s;
  background-position: ${(props) => (props.show ? "right" : "left")};
  z-index: ${(props) => (props.show ? "21" : "-10")};
  backdrop-filter: ${(props) => (props.show ? "blur(5px)" : "blur(0)")};
`;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: ${(props) => (props.show ? "10" : "1")};
  .logo {
    width: 150px;
    filter: brightness(0);
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  @media (max-width: 805px) {
    display: none;
  }
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  z-index: 211;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  box-shadow: 5px 5px 25px 5px rgba(0, 0, 0, 0.6);
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  background-size: 1000%;

  filter: ${(props) => (props.show ? "opacity(100%)" : "opacity(0)")};
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: filter 0.4s cubic-bezier(0.76, 0, 0.24, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  li {
    margin: 8px 15px;
    line-height: 25px;
    display: block;
    cursor: pointer;
    padding: 8px 25px;
    background-color: transparent;
    background-size: 2500%;
    border-radius: 20px;
    background-position: left;
    border: none;
    transition: all 0.3s ease-in;
    &:hover {
      background-color: rgba(66, 66, 66, 0.1);
      border-radius: 20px;
    }
    a {
      font-weight: 600;
    }
  }
`;

const CloseWraper = styled.div`
  display: flex;
  justify-content: flex-end;
  line-height: 60px;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  transform: scale(1.3);
  border-radius: 20px;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: rgba(66, 66, 66, 0.1);
  }
`;
