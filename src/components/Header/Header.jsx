import { styled } from "styled-components"

const HeaderStyle = styled.header`
  background-color: #343a40;
  height: 40px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const H3 = styled.h3`
  color: white;
  font-size: 24px;
`
const Img = styled.img`
  width: 200px;
  height: 200px;
`

function Header() {
  return (
    <HeaderStyle>
      <H3>Trần Kiến Quân</H3>
      <Img src="5.png" />
      <H3>41703148</H3>
    </HeaderStyle>
  )
}

export default Header
