import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  children?: any;
  width?: string | number;
}

function getDynamicWidth() {
  const { innerWidth: width } = window;

  return (
    ((width / 100).toFixed(2) + (width / 250).toFixed(2)).toString() + "vw"
  );
}

export default function CustomModal(props: ModalProps) {
  const { open, onClose, children, width } = props;

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width ? width : getDynamicWidth(),
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>{children}</Box>
        </Fade>
      </Modal>
    </div>
  );
}
