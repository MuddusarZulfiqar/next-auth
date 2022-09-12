import { styled } from '@mui/system';
import { grey } from '@mui/material/colors';
import { Typography } from '@mui/material';

export const HeadMain = styled('div')(({theme}) => ({
    backgroundColor: grey[200],
    minHeight:400,
    paddingInline:theme.spacing(10),
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center'
}));

export const Title = styled(Typography)(({theme})=>({
    fontWeight:'bold',
    letterSpacing:theme.spacing(1.2)
}));