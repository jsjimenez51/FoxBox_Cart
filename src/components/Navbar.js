import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { InputBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { fade } from '@material-ui/core/styles/colorManipulator';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search'

const styles = theme => ({
    root: {
        width: '100%',
      },
      grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
        color: '#ff9800',
      },
      title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
        alignItems: 'left',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit,
          width: 'auto',
        },
      },
    //   searchIcon: {
    //     width: theme.spacing.unit * 9,
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'left',
    //   },
      actionFood: {
        marginLeft: '1rem',
      },
      actionCart: {
        marginLeft: '1rem',
      },
      ul: {
        listStyle: 'none',
        width: '50%',
      },
      link: {
        color: '#ff9800',
        textDecoration: 'none',
      },
      actLink: {
        color: '#ff9800',
        textDecoration: 'none',
      },
      inputRoot: {
        color: 'secondary',
        width: '100%',
        justifyContent: 'center',
      },
      inputInput: {
        justifyContent: 'center',
        color: '#fff',
        paddingTop: '5px',
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200,
          },
        },
      },
});

 function Navbar(props) {
    const { classes } = props;
    return(
        <nav className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              <Link className={classes.link} to="/">Fox Box</Link>
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              {/* <div className={classes.searchIcon}>
                <SearchIcon />
              </div> */}
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.actionFood}>
                <Link className={classes.actLink} to="/"><i className="material-icons">fastfood</i></Link>
            </div>
            <div className={classes.actionCart}>
                <Link className={classes.actLink} to="/cart"><i className="material-icons">shopping_cart</i></Link>
            </div>
          </Toolbar>
        </AppBar>
      </nav>
    );
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);