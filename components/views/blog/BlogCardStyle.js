import { Card, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { grey } from '@mui/material/colors';

export const BlogCard = styled(Card)(({theme})=>({
    padding:theme.spacing(5),
    transition:'0.3s ease all',
    boxShadow:theme.shadows[3],
    '&:hover':{
        transform:'translateY(-10px)',
        background:theme.palette.secondary.main,
        color: theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.common.black,
        'span':{
            color: theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.common.black
        }
    }
}));

export const Title = styled(Typography)(({theme})=>({
    fontSize:18,
    fontWeight:600,
}));

export const Author = styled(Typography)(({theme})=>({
    fontSize:12,
    textAlign:'right',
    color:grey[600],
    display:'block'
}));