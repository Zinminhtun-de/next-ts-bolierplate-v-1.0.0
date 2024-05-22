'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { styled } from '@mui/material';
// import { useGetBanner } from '@/services/user';

interface SliderProps {
  data: string[];
}

const SliderStyled = styled(Swiper)<{}>(({ theme }) => ({
  '&.swiper': {
    height: '150px',
    '& .swiper-pagination': {
      '& .swiper-pagination-bullet': {
        backgroundColor: theme.colors?.grey[300],
        '&.swiper-pagination-bullet-active': {
          backgroundColor: theme.colors?.primary,
        },
      },
    },
  },
}));

const ImageSlider: React.FC = () => {
  // const { data: bannerData, isLoading } = useGetBanner();

  return (
    <SliderStyled
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {/* {bannerData?.data?.map((each, key) => (
        <SwiperSlide key={key}>
          <Image src={each.bannerImageUrl} width={400} height={120} alt="slider" />
        </SwiperSlide>
      ))} */}
    </SliderStyled>
  );
};

export default ImageSlider;
