import { styled } from "@mui/material"

export const Wrapper = styled("div")(() => ({
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #0f172a, #6b21a8)",
    color: "#fff",
}))

export const Container = styled("main")(({ theme }) => ({
    padding: theme.spacing(2, 2),
    maxWidth: 1280,
    margin: "0 auto",
}))

export const HeroSection = styled("section")(({ theme }) => ({
    marginBottom: theme.spacing(16),

    ".heroContent": {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(4),

        [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            alignItems: "center",
        },
    },

    ".heroText": {
        flex: 1,
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: theme.spacing(2),

            [theme.breakpoints.up("md")]: {
                fontSize: "3rem",
            },
            [theme.breakpoints.up("lg")]: {
                fontSize: "3.5rem",
            },
        },
        p: {
            fontSize: "1.125rem",
            color: "rgba(255,255,255,0.8)",
            marginBottom: theme.spacing(3),
        },
    },

    ".heroButtons": {
        display: "flex",
        flexWrap: "wrap",
        gap: theme.spacing(2),

        a: {
            display: "flex",
            alignItems: "center",
            gap: theme.spacing(1),
            padding: theme.spacing(1.5, 3),
            borderRadius: 8,
            fontWeight: 700,
            textDecoration: "none",
            transition: "0.3s",

            "&.rankings": {
                backgroundColor: "#facc15",
                color: "#0f172a",
                "&:hover": {
                    backgroundColor: "#fde047",
                },
            },

            "&.login": {
                backgroundColor: "#334155",
                color: "#fff",
                "&:hover": {
                    backgroundColor: "#475569",
                },
            },
        },
    },

    ".heroImage": {
        flex: 1,
        marginTop: theme.spacing(4),

        img: {
            borderRadius: 12,
            boxShadow: theme.shadows[8],
            maxWidth: "100%",
            height: "auto",
        },
    },
}))

export const Section = styled("section")(({ theme }) => ({
    marginBottom: theme.spacing(16),

    ".card": {
        backgroundColor: "rgba(30, 41, 59, 0.5)",
        backdropFilter: "blur(6px)",
        padding: theme.spacing(4),
        borderRadius: theme.shape.borderRadius * 2,
        boxShadow: theme.shadows[10],        
    },

}))

export const TableWrapper = styled("div")(() => ({
    overflowX: "auto",
    table: {
        width: "100%",
        borderCollapse: "collapse",
    },
    th: {
        padding: "12px 16px",
        textAlign: "left",
    },
    td: {
        padding: "12px 16px",
    },
    ".teamDot": {
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        marginRight: "8px",
    },
}))

export const TeamGrid = styled("div")(({ theme }) => ({
    display: "grid",
    gap: theme.spacing(3),

    gridTemplateColumns: "1fr",
    [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
    },

    ".teamCard": {
        backgroundColor: "rgba(30, 41, 59, 0.7)",
        borderRadius: 12,
        padding: theme.spacing(4),
        boxShadow: theme.shadows[4],
        transition: "box-shadow 0.3s",
        "&:hover": {
            boxShadow: theme.shadows[8],
        },
    },

    ".teamIcon": {
        width: 64,
        height: 64,
        fontSize: 32,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: theme.spacing(2),
    },

    ".teamName": {
        fontSize: "1.25rem",
        fontWeight: 600,
        marginBottom: theme.spacing(1),
    },

    ".teamDesc": {
        color: "rgba(255, 255, 255, 0.7)",
    },
}))

export const Footer = styled("footer")(({ theme }) => ({
    backgroundColor: "#0f172a",
    padding: theme.spacing(1, 2),
    textAlign: "center",
    color: "rgba(255,255,255,0.6)",
}))
