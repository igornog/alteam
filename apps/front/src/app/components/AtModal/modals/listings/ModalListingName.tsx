import { Box } from '@mui/material'
import { ClientListing } from '@yjcapp/app'
import { CloseCircle, CloseSquare, TickSquare } from 'iconsax-react'
import React, { useState } from 'react'
import { useAppDispatch } from '../../../../utils/hooks/reduxHook'
import { ModalSize } from '../../../../utils/redux/types/settings.type'
import { handleUpdateListing } from '../../../../utils/redux/actions/listing.action'
import AtButton, { AtButtonKind, AtButtonVariant } from '../../../AtButton/AtButton'
import AtLine from '../../../AtLine/AtLine'
import AtTextField from '../../../AtTextField/AtTextField'
import AtTypography from '../../../AtTypography/AtTypography'
import AtModal from '../../AtModal'


const ModalListingName: React.FunctionComponent<
  ModalListingNameProps
> = (props: ModalListingNameProps) => {
  const dispatch = useAppDispatch()
  const [listingName, setListingName] = useState<string>()

  const handleSave = () => {
    dispatch(handleUpdateListing({ id: props.listing?.id, listingName: listingName }))
    props.onClose?.()
  }

  return (
    <AtModal
      isOpen={props.open}
      size={ModalSize.Small}
      onClose={props.onClose}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        padding={2.5}
        paddingBottom={0}
      >
        <AtTypography variant={'h4'}>Edit Listing Name</AtTypography>
        <AtButton
          kind={AtButtonKind.Default}
          variant={AtButtonVariant.Text}
          startIcon={<CloseCircle />}
          $iconSize={24}
          onClick={props.onClose}
        />
      </Box>

      <AtLine spacingTop={20} spacingBottom={5} />

      <Box display={'flex'} flexDirection={'column'} gap={3.5} padding={2.5}>

      <AtTextField
          label={'Listing name'}
          value={props.listing?.listingName}
          placeholder={'Enter Listing name'}
          onValueChange={(e) =>
            setListingName(e)
          }
        />

        <Box display={'flex'} justifyContent={'flex-end'} gap={2.5}>
          <AtButton
            onClick={props.onClose}
            kind={AtButtonKind.Danger}
            variant={AtButtonVariant.Text}
            name={'Cancel'}
            endIcon={<CloseSquare size={16} />}
          />
          <AtButton
            onClick={handleSave}
            kind={AtButtonKind.Success}
            variant={AtButtonVariant.Contained}
            name={'Save Changes'}
            endIcon={<TickSquare size={16} />}
          />
        </Box>
      </Box>
    </AtModal>
  )
}

interface ModalListingNameProps {
  listing?: ClientListing;
  open: boolean
  onClose?: () => void
}

export default ModalListingName
