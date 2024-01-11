import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, Box, Button, ButtonGroup, Stack, TextField } from '@mui/material';
import { CalendarMonth, Mood, PersonAdd, PhotoCamera, VideoCameraBack } from '@mui/icons-material';




function Modall({open,handleClose,handleOpen}) {
    
  return (
    <Modal
    
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={{ p:4,  bgcolor: 'background.paper', boxShadow: 24, position:"absolute" , top:"50%" , left:"50%", transform:'translate(-50%, -50%)',  width:{xs:"97%" , sm : "400px"} } }>
      <Typography sx={{textAlign:"center"}} id="modal-modal-title" variant="h6" component="h5">
        Creat a Post
      </Typography>
    <Box sx={{display:"flex" , justifyContent:"space-between" , width:"125px" , alignItems:"center"}}>
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        <Typography variant="body1" color="inherit">Elias Zerz</Typography>
    </Box>
    <TextField
    sx={{mt:"30px" ,mb:"20px"}}
          id="standard-multiline-static"
          label="Write a post "
          multiline
          rows={4}
          placeholder='What is in your Mind ?🤨'
          // defaultValue="What is in your Mind ?🤨"
          variant="standard"
        />
          <Stack direction="row" spacing={2}>
        <Mood  color='primary'/>
        
            <PhotoCamera color='success'/>
            <VideoCameraBack color='secondary'/>
            <PersonAdd color='error'/>
        </Stack>

        <ButtonGroup
  disableElevation
  variant="contained"
sx={{width:"100%" , mt:"20px"}}
>
  <Button sx={{flexGrow:"1"}}>Post</Button>
  <Button><CalendarMonth/></Button>
</ButtonGroup>
    </Box>
  
  
  </Modal>
  )
}

export default Modall
