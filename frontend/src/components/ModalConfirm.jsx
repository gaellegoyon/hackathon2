import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useCurrentUserContext } from "../contexts/userContext";

function ModalConfirm() {
  const { open, setOpen } = useCurrentUserContext();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        BackdropProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
            backdropFilter: "blur(1px)",
          },
        }}
      >
        <DialogTitle id="responsive-dialog-title">
          Confirmation de la réservation
        </DialogTitle>
        <DialogContent>
          <div className="flex flex-col justify-center items-center">
            <h2 className=" text-main-font text-black text-xl">GLA 250 SUV</h2>
            <div className="bg-vehicle1 w-[55%] h-[15vh] bg-contain" />
            <p>Du 19/01/2023 à 8h</p>
            <p>au</p>
            <p>20/01/2023 à 17h</p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Annuler
          </Button>
          <Button onClick={handleClose} autoFocus>
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalConfirm;
