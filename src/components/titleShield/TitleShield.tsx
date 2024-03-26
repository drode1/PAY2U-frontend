import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cake from '../../assets/cake.png';
import ArrowRight from "../icons/ArrowRight";

const StyledDiv = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;  
  gap: 4px;
`;

const StyledLinkDiv = styled.div`
  margin: 22px 0 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const StyledCardContent = styled(CardContent)`
  position: relative;
  width: 343px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row; 
  justify-content: space-between;
`;

const BackgroundImage = styled.img` 
  position: absolute;
  bottom: 0;
  right: 16px;
  width: 100px;
  height: 100px;  
  margin: 0;
  padding: 0;
`;

const StyledParagraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 50%;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2; 
  letter-spacing: -0.078px;
  color: rgba(234, 65, 127, 1);
`;

const TitleShield = () => (
  <Card >
    <StyledCardContent>
      <StyledDiv>
        <Typography className="textCardH1">Мои подписки</Typography>
        <Typography className="textSmallRegular" sx={{ color: 'rgba(167, 177, 186, 1)' }}>Управление подписками, контроль списаний, кешбэк
          с автоплатежей</Typography>
        <Link to="/onboarding1" style={{ textDecoration: 'none' }}>
          <StyledLinkDiv>
            <ArrowRight />
            <StyledParagraph>Подробнее</StyledParagraph>
          </StyledLinkDiv>
        </Link>
      </StyledDiv>
      <BackgroundImage src={cake} alt="Фон" />
    </StyledCardContent>
  </Card>
);

export default TitleShield;