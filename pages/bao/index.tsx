import { keyframes, css, Global } from '@emotion/core'
import styled from '@emotion/styled'

// import BaoLayout from "../../src/components/bao/BaoLayout";

// export default function Bao() {
//     return (
//         <BaoLayout>
//             <h3>Home (대시보드들어갈 예정)</h3>
//         </BaoLayout>
//     )
// };


const Home = () => (
    <div>
        <Basic>Cool Styles</Basic>
        <Combined>
            With <code>:hover</code>.
    </Combined>
        <Animated>Let's bounce.</Animated>
    </div>
)

export default Home

const globalStyles = (
    <Global
        styles={css`
      html,
      body {
        padding: 3rem 1rem;
        margin: 0;
        background: papayawhip;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
      }
    `}
    />
)

const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`

const hoverStyles = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`
const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`

const Basic = styled('div')`
  ${basicStyles};
`

const Combined = styled('div')`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`
const Animated = styled('div')`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`