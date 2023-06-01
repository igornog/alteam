import React, { useState } from 'react'
import AtFrame from '../Frame/Frame'
import ModalGeneralInformation from '../Modal/modals/ModalGeneralInformation'
import TimelineStatusCard from '../Card/Timeline/StatusCard'
import TimelineStatusFinalCard from '../Card/Timeline/StatusFinalCard'
import Slider from "react-slick";
import styled from 'styled-components'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import Box from '@mui/material/Box/Box'

const StyledSlider = styled(Slider)`
  padding: 15px 50px 0 0;
  position: relative;
  overflow: hidden;
  

  .slick-track {
    display: flex;
    gap: 10px;
    margin: 20px 0;
  }
  
  .slick-prev,
  .slick-next {
    position: absolute;
    cursor: pointer;
    width: 12px;
    top: 5%;
    transform: translateY(-50%);
    z-index: 1;
  }
  
  .slick-prev {
    right: 40px;
  }
  
  .slick-next {
    right: 10px;
  }
`

const FadeBox = styled(Box)`
  height: 230px;
  position: absolute; 
  width: 100px;
  z-index: 9999;
  top: 235px;
  right: 40px;
  background: linear-gradient(to right,transparent,rgba(255,255,255,0.7));
`

const ListingStatusTimeline: React.FunctionComponent<GeneralProps> = (
  props: GeneralProps,
) => {
  const [openModal, setOpenModal] = useState(false)

  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 3.33,
    slidesToScroll: 1,
    nextArrow: <ArrowRight2 />,
    prevArrow: <ArrowLeft2 />
  };

  return (
    <AtFrame
      title={'Listing Status'}
      backgroundColor={'#FBFCFF'}
      onClick={() => setOpenModal(true)}
      overflow={'hidden'}
    >
      <FadeBox></FadeBox>
      <StyledSlider {...settings}>
        <TimelineStatusCard />
        <TimelineStatusCard />
        <TimelineStatusCard />
        <TimelineStatusFinalCard finalCard={true} />
        <TimelineStatusCard />
        <TimelineStatusCard />
      </StyledSlider>


      <ModalGeneralInformation
        open={openModal}
        listing={props.listing}
        onClose={() => setOpenModal(false)}
      />

    </AtFrame>
  )
}

interface GeneralProps {
  listing: any
  isAuthenticated?: boolean
  isSmallScreen?: boolean

}

export default ListingStatusTimeline