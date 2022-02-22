import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from '@emotion/styled';
import Image from 'next/image';

import Banner1 from '../../../../assets/img/banner01.png'
import Banner2 from '../../../../assets/img/banner02.png'
import Banner3 from '../../../../assets/img/banner03.png'
import Banner4 from '../../../../assets/img/banner04.png'

const SlideContainer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const StyledSlider = styled(Slider)`
  .slick-slide div {
    height: 400px; // 설정 안할시 Bottom에 5px 여백이 생겨 고정값 작성
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
  }
  .slick-dots {
    position: absolute;
    bottom: 25px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;

    display: block;

    width: 20px;
    height: 20px;
    padding: 5px;

    cursor: pointer;

    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }
  .slick-dots li button:hover,
  .slick-dots li button:focus {
    outline: none;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-family: 'slick';
    font-size: 6px;
    line-height: 20px;

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    content: '•';
    text-align: center;

    opacity: 0.5;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: gold;
  }
  .slick-prev {
    left: 25% !important;
    z-index: 1;
  }
  .slick-next {
    right: 25% !important;
    z-index: 0;
  }
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

    display: block;

    width: 20px;
    height: 20px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: transparent;
    outline: none;
    background: transparent;
  }
  .slick-prev:hover:before,
  .slick-prev:focus:before,
  .slick-next:hover:before,
  .slick-next:focus:before {
    opacity: 1;
  }
  .slick-prev:hover:before,
  .slick-next:hover:before {
    color: gold;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
  }

  .slick-prev:before,
  .slick-next:before {
    font-family: 'slick';
    font-size: 35px;
    line-height: 1;

    opacity: 0.75;
    color: white;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev {
    left: -25px;
  }
  [dir='rtl'] .slick-prev {
    right: -25px;
    left: auto;
  }
  .slick-prev:before {
    content: '←';
  }
  [dir='rtl'] .slick-prev:before {
    content: '→';
  }

  .slick-next {
    right: -25px;
  }
  [dir='rtl'] .slick-next {
    right: auto;
    left: -25px;
  }
  .slick-next:before {
    content: '→';
  }
  [dir='rtl'] .slick-next:before {
    content: '←';
  }`
  const BannerWrapper = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
  `

  return (
  <div>
    <StyledSlider {...settings}>
      <BannerWrapper>
        <Image src={Banner1} alt='banner1' layout='fill' objectFit='cover' />
      </BannerWrapper>
      <BannerWrapper>
        <Image src={Banner2} alt='banner2' layout='fill' objectFit='cover' />
      </BannerWrapper>
      <BannerWrapper>
        <Image src={Banner3} alt='banner3' layout='fill' objectFit='cover' />
      </BannerWrapper>
      <BannerWrapper>
        <Image src={Banner4} alt='banner4' layout='fill' objectFit='cover' />
      </BannerWrapper>
    </StyledSlider>
  </div>
  )
}

export default SlideContainer;