import { useNavigate } from "react-router-dom"
import RoutingPath from "../routes/RoutingPath"
import styled from "styled-components"

interface iProps {
  isColored? : any
  onClick?: () => void
}

export const Navigation = () => {

    const navigate = useNavigate()
    return (
      <Container>
        <ConetentContainer>
          <img src="" alt="bild" />
        </ConetentContainer>
        <ConetentContainer>
          <P isColored="red" onClick={() => navigate(RoutingPath.homeView)}>Home</P>
          <P onClick={() => navigate(RoutingPath.movieView)}>Moives</P>
        </ConetentContainer>
      </Container>
    );
}

const P = styled.p<iProps>`
color: ${props => props.isColored ? props.isColored : "blue"}`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
border: 1px black solid;
`

const ConetentContainer = styled.div`
display: flex;
`