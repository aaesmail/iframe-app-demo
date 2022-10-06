import { useState } from 'react';

import './SideNavbar.css';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { withStyles } from '@mui/styles';

import TokenCard from '../TokenCard/TokenCard';

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

const SideNavbar = ({ selectedToken, onCardClick }) => {
  const [tokenList, setTokenList] = useState([]);
  const [token, setToken] = useState('');

  const addToken = () => {
    setTokenList([ ...tokenList, token ]);
    onCardClick(token);
    setToken('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addToken();
    }
  };

  return (
    <div className='side-navbar main-theme'>
      <div className='token-list'>
        {
          tokenList.map((token, index) =>
            <TokenCard
              key={index}
              stateToken={token}
              selectedToken={selectedToken}
              onCardClick={() => onCardClick(token)}
            />
          )
        }
      </div>

      <div className='input-group'>
        <StyledTextField
          label='State Token'
          variant='outlined'
          fullWidth
          value={token}
          onChange={(event) => setToken(event.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div className='add-token'>
          <Button
            className='add-token-btn'
            variant='contained'
            onClick={addToken}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
