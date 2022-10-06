import './TopNavbar.css';

import { withStyles } from '@mui/styles';

import TextField from '@mui/material/TextField';

const StyledTextField = withStyles({
  root: {
    '& input': {
      color: 'white',
      'text-align': 'center',
    },

    '& label': {
      color: 'white',
    },

    '& label.Mui-focused': {
      color: 'white',
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },

      '&:hover fieldset': {
        borderColor: 'white',
      },

      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

const TopNavbar = ({ url, changeUrl, appName, changeAppName, appMode, changeAppMode }) => {
  return (
    <div className='top-navbar main-theme'>
      <div className='icon'>
        <i>
          <b>Instabug</b>
        </i>
      </div>

      <div className='configs'>
        <StyledTextField
          className='base-url'
          label='Base URL'
          variant='outlined'
          fullWidth
          value={url}
          onChange={(event) => changeUrl(event.target.value)}
        />

        <StyledTextField
          className='app-name'
          label='App Name'
          variant='outlined'
          fullWidth
          value={appName}
          onChange={(event) => changeAppName(event.target.value)}
        />

        <StyledTextField
          className='app-mode'
          label='App Mode'
          variant='outlined'
          fullWidth
          value={appMode}
          onChange={(event) => changeAppMode(event.target.value)}
        />
      </div>
    </div>
  );
};

export default TopNavbar;
