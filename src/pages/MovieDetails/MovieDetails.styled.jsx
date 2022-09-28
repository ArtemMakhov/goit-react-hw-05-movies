import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
display: block;
text-decoration: none;
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p=>p.theme.colors.muted};
background-color: ${p=>p.theme.colors.primary};
margin-bottom: ${p=>p.theme.space[2]}px;
width: 300px;
text-align: center;
`
export const Title = styled.p`
font-size:${p=> p.theme.fontSizes.l};
font-weight:${p=>p.theme.fontWeights.bold};
margin-bottom: ${p=>p.theme.space[3]}px;
`
export const Text = styled.p`
margin-bottom: ${p => p.theme.space[3]}px;
`
export const GenresList = styled.ul`
display:flex;

li:last-child{
    margin-right: 0;
}
`
export const List = styled.li`
    margin-right: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
`
export const InfoTitle = styled.p`
 font-size:${p => p.theme.fontSizes.m};
 font-weight: ${p=>p.theme.fontWeights.bold};
`
export const InfoLink = styled(Link)`
display: block;
text-decoration: none;
margin-top: ${p=>p.theme.space[3]}px;
font-weight: ${p=>p.theme.fontWeights.bold};
color: ${p=>p.theme.colors.primary};

&:hover{
    color: ${p=>p.theme.colors.red};
}
`