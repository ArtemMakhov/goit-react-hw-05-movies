import styled from "styled-components";

export const ListReviews = styled.ul`
padding-top:${p=>p.theme.space[5]}px;
padding-bottom:${p => p.theme.space[5]}px;
li:last-child{
margin-bottom: ${p=> p.theme.space[0]};
}
`
export const Article = styled.li`
    margin-bottom:${p => p.theme.space[4]}px;
`
export const Author = styled.h3`
margin-bottom: ${p=>p.theme.space[2]}px;
`
export const Content = styled.p`
background-color: ${p=>p.theme.colors.muted};
`
