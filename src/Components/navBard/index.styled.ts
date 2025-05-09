import { AppBar, styled } from "@mui/material";

export const NavBar = styled(AppBar)(() => ({
    position: "sticky",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#2D304A",
    paddingBlock: 12

}))