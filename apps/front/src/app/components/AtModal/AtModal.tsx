import { Dialog, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import { black } from '../../utils/colors';
import { convertHexToRGBA } from '../../utils/helpers';
import { ModalSize } from '../../utils/redux/types/settings.type';

const AtModal: React.FunctionComponent<AtModalProps> = (
  props: AtModalProps
) => {
  return (
    <Dialog
      open={props.isOpen}
      TransitionComponent={Transition}
      keepMounted={true}
      onClose={props.onClose}
      fullWidth={true}
      maxWidth={props.size ?? ModalSize.Medium}
      BackdropProps={{
        style: {
          backgroundColor: convertHexToRGBA(black, 0.5),
        },
      }}
      PaperProps={{
        style: {
          padding: 0,
          boxShadow: 'none',
        },
      }}
    >
      {props.children}
    </Dialog>
  );
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AtModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  size?: ModalSize;
}

export default AtModal;
