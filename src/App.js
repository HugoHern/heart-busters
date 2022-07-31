import React from "react"
import "./App.css"
import  DatingCardStack from "./components/DatingCardStack.js"
import styled from "@emotion/styled"
import ReactPlayer from "react-player"

export default function App() {
  const Wrapper = styled(DatingCardStack)`
    background: #1f2937;
  `

  const Item = styled.div`
    background: #f9fafb;
    width: 200px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    text-shadow: 0 10px 10px #d1d5db;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    transform: ${() => {
      let rotation = Math.random() * (5 - -5) + -5
      return `rotate(${rotation}deg)`
    }};
  `

  return (
    <div className="App">
      <Wrapper onVote={(item, vote) => console.log(item.props, vote)}>
        <Item data-value="waffles" whileTap={{ scale: 1.15 }}>
          🧇
        </Item>
        <Item data-value="pancakes" whileTap={{ scale: 1.15 }}>
          🥞
        </Item>
        <Item data-value="donuts" whileTap={{ scale: 1.15 }}>
          <div><ReactPlayer width='100px' height='100px'url='https://www.youtube.com/watch?v=3zgFRFom6uA'/></div>
        </Item>
      </Wrapper>
    </div>
  )
}