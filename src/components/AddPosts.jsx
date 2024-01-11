
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from '@mui/material';
import React from 'react';
import Modall from './Modall';
function AddPosts() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
  <>
<Tooltip  title="Add Post" sx={{position :"fixed" , bottom:"10px" , left:"10px"}}>
      <Fab color="primary" onClick={handleOpen} >
      <AddIcon />
    </Fab>
</Tooltip>
<Modall open={open} handleOpen={handleOpen}  handleClose={handleClose}  />
</>
  )
}

export default AddPosts
