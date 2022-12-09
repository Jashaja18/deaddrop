import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { CreateMessageButton } from './CreateMessageButton.js';

export function CreateAnonymousLink({url}) {
  url = url.replace(/['"]+/g, '');
  const [open, setOpen] = React.useState(false);
  const [link, setLink] = React.useState('');
  const [copied, setCopied] = React.useState(false);
  
  const handleClick = () => {
    setOpen(true);
    setCopied(true);
    navigator.clipboard.writeText(url);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  if (!copied) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: '100%',
            maxWidth: 500,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={url}
            unselectable='on'
            onChange={handleLinkChange}
          />
          <Button variant="contained" onClick={handleClick}>
            Copy Link
          </Button>
        </Paper>
        <Snackbar
          anchorOrigin={{
            vertical: 'middle',
            horizontal: 'center',
          }}
          open={open}
          autoHideDuration={4000}
          message="Copied to clipboard!"
          action={
            <>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      </Box>
    );
        } else {
          return (
            <div>                
              <CreateMessageButton />
            </div>
          );
        }
}