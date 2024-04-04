import { Typography } from '@mui/material';
import { useRef, ReactNode } from 'react';
import { register } from 'swiper/element/bundle';
import styled from 'styled-components';
import ForwardArrowIcon from '../icons/ForwardArrowIcon';
import { resetBox } from 'src/styles/mixIns';
// Регистрируем веб-компоненты Swiper
register();

interface SliderProps {
  slides: ReactNode[];
  showNextButton?: boolean;
  title?: string;
  slidePerView: string;
  spaceBetween?: string;
}

const SwiperContainer = styled.div`
  width: 100%;
  ${resetBox()};
`;

const NavContainer = styled.div`
  ${resetBox()};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NextButton = styled.button`
  margin: 0 0 10px;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Slider: React.FC<SliderProps> = ({
  slides,
  showNextButton = false,
  title,
  slidePerView,
  spaceBetween,
}) => {
  const swiperElRef = useRef<HTMLElement>(null);

  const scrollNext = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (swiperElRef.current as any)?.swiper.slideNext();
  };

  return (
    <SwiperContainer>
      <NavContainer>
        <Typography
          variant="h2"
          align="left"
          sx={{ marginBottom: '10px', marginLeft: '8px' }}
        >
          {title}
        </Typography>
        {showNextButton && (
          <NextButton type="button" onClick={scrollNext}>
            <ForwardArrowIcon fill="rgba(0, 0, 0, 1)" />
          </NextButton>
        )}
      </NavContainer>
      <swiper-container
        ref={swiperElRef}
        slides-per-view={slidePerView}
        space-between={spaceBetween}
      >
        {slides.map((slide, index) => (
          <swiper-slide key={index}>{slide}</swiper-slide>
        ))}
      </swiper-container>
    </SwiperContainer>
  );
};

export default Slider;