import { Outlet } from "react-router-dom";
import { Box } from "components/Box";
import { Header,Link } from "./SharedLayout.styled";
import { Suspense } from "react";
import { Loader } from "components/Loader/Loader";

export const SharedLayout = () => {
    return (
            <Box
      m="0 auto"
      p="0 16px"
    >
<Header>
        <nav>
          <Link to="/"end>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
</Header>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>

</Box>
    
    );
};