import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

function Header(props) {
  const { isAuth } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            REACT TODO
          </Typography>
          {
            isAuth
              ? <IconButton color="inherit" aria-label="Menu">
                <AccountCircle />
              </IconButton>
              : <Button color="inherit">Login</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

export default Header;
