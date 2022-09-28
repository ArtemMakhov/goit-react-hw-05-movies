import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.li`
padding: ${p => p.theme.space[2]}px;
`
export const MovieCard = styled(Link)`
    text-decoration: none;
`
