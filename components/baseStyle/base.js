import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const Title = styled(Typography)(({theme})=>({
    fontWeight:'bold',
    textTransform:'uppercase',
    textAlign:'center'
}));

// Tabs Styles
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";

export const Tabs = styled(TabsUnstyled)(({theme})=>({
    // backgroundColor:theme.palette.secondary.main,
    // height:3
}));

export const TabsList = styled(TabsListUnstyled)(({theme})=>({
    justifyContent:'center'
}));

export const Tab = styled(TabUnstyled)(({theme})=>({
    padding:theme.spacing(2,7),
    marginRight:theme.spacing(2),
    backgroundColor:theme.palette.secondary.main,
    color:theme.palette.primary.main,
    borderRadius:theme.spacing(1),
    border:'unset',
    cursor:'pointer',
    fontSize:theme.spacing(4.4),
    fontWeight:'bold',
    textTransform:'uppercase',
    '&:hover':{
        backgroundColor:theme.palette.secondary.dark,
    },
    '&.Mui-selected':{
        backgroundColor:theme.palette.primary.main,
        color:theme.palette.secondary.main,
        '&:hover':{
            backgroundColor:theme.palette.primary.dark,
        }
    }
}));

export const TabPanel = styled(TabPanelUnstyled)(({theme})=>({
    padding:theme.spacing(5,0),
}));

