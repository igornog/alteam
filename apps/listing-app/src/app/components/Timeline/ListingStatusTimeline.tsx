import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { ClientListing } from '@yjcapp/app'
import AtFrame from '../Frame/Frame'
import ModalGeneralInformation from '../Modal/modals/ModalGeneralInformation'
import TimelineStatusCard from '../Card/Timeline/StatusCard'
import TimelineStatusFinalCard from '../Card/Timeline/StatusFinalCard'

const ListingStatusTimeline: React.FunctionComponent<GeneralProps> = (
  props: GeneralProps,
) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <AtFrame
      title={'Listing Status'}
      padding={'0px'}
      backgroundColor={'#FBFCFF'}
      onClick={() => setOpenModal(true)}
    >

      <Grid container={true} gap={'10px'} alignItems={'stretch'}>
        <TimelineStatusCard/>
        <TimelineStatusCard/>
        <TimelineStatusCard/>
        <TimelineStatusFinalCard finalCard={true}/>
      </Grid>

      <ModalGeneralInformation
        open={openModal}
        listing={props.listing}
        onClose={() => setOpenModal(false)}
      />

    </AtFrame>
  )
}

interface GeneralProps {
  listing: ClientListing
  isAuthenticated?: boolean
  isSmallScreen?: boolean
}

export default ListingStatusTimeline