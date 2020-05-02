import React from 'react';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';

import { FaColumns, FaQrcode, FaCog, FaSignOutAlt } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  menuList: {
    marginTop: 64,
  },
  menuText: {
    fontWeight: 600,
    fontSize: 12,
    color: '#323C47',
    textTransform: 'uppercase',
  },
}));

export default function Nav() {
  const classes = useStyles();
  return (
    <MenuList className={classes.menuList}>
      <MenuItem component={Link} to="/dashboard">
        <ListItemIcon>
          <FaColumns fontSize="26px" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap className={classes.menuText}>
          Dashboard
        </Typography>
      </MenuItem>
      <MenuItem component={Link} to="/dashboard/qrcode">
        <ListItemIcon>
          <FaQrcode fontSize="26px" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap className={classes.menuText}>
          Gerar QRCODE
        </Typography>
      </MenuItem>
      <MenuItem component={Link} to="/dashboard/perfil">
        <ListItemIcon>
          <FaCog fontSize="26px" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap className={classes.menuText}>
          Configurações
        </Typography>
      </MenuItem>
      <MenuItem component={Link} to="/">
        <ListItemIcon>
          <FaSignOutAlt fontSize="26px" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap className={classes.menuText}>
          Sair
        </Typography>
      </MenuItem>
    </MenuList>
  );
}
