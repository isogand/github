import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from "next/link";
import {useRouter} from "next/router";
import styles from './nav-bar.module.css';


const drawerWidth = 240;


function DrawerAppBar(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                Github
            </Typography>
            <Divider/>
            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{textAlign: 'center'}}>
                        <Link href="/">
                            <ListItemText  primary='Home'/>
                        </Link>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton sx={{textAlign: 'center'}}>
                        <Link href="/Profile">
                            <ListItemText  primary='Profile'/>
                        </Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const router = useRouter();
    const currentRoute = router.pathname;
    return (
        <Box  sx={{display: 'flex'}}>
            <AppBar className={styles.nav} component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        Github
                    </Typography>

                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{textAlign: 'center'}}>
                                <Link href="/">
                                  <ListItemText className={currentRoute === "/" ? "active" : "non-active"} primary='Home'/>
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    </Box>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{textAlign: 'center'}}>
                                <Link href="/Profile">
                                  <ListItemText className={currentRoute === "/Profile" ? "active" : "non-active"} primary='Profile'/>
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{p: 3}}>
                <Toolbar/>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
