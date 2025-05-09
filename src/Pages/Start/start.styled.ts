import { Stack, styled } from "@mui/material"
import { motion } from "framer-motion"

export const Wrapper = styled("section")({
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
})

export const Canvas = styled("canvas")({
    position: "absolute",
    inset: 0,
    zIndex: 0,
    background: "linear-gradient(to bottom, #0f172a, #6b21a8, #0f172a)",
})

export const AnimatedBackground = styled("div")({
    position: "absolute",
    inset: 0,
    zIndex: 10,
})

export const GlowTop = styled(motion.div)({
    position: "absolute",
    top: "25%",
    left: "25%",
    width: "16rem",
    height: "16rem",
    backgroundColor: "rgba(253, 224, 71, 0.2)",
    borderRadius: "9999px",
    filter: "blur(40px)",
})

export const GlowBottom = styled(motion.div)({
    position: "absolute",
    bottom: "25%",
    right: "25%",
    width: "20rem",
    height: "20rem",
    backgroundColor: "rgba(168, 85, 247, 0.2)",
    borderRadius: "9999px",
    filter: "blur(40px)",
})

export const MainContent = styled(Stack)(({ theme }) => ({
    position: "relative",
    zIndex: 20,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    ".CircleWrapper": {
        position: "relative",
        width: "16rem",
        height: "16rem",

        [theme.breakpoints.up("md")]: {
            width: "20rem",
            height: "20rem",
        },
    },

    ".CircleImage": {
        width: "100%",
        height: "100%",
        opacity: 0.8,
    },

    ".Sparkle": {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },

    ".Symbol": {
        position: "absolute",
        transform: "translate(-50%, -50%)",
    },

    ".Active": {
        backgroundColor: "rgba(253, 224, 71, 0.3)",
    },

    ".Inactive": {
        backgroundColor: "rgba(51, 65, 85, 0.3)",
    },
}))

export const TitleWrapper = styled(motion.div)(({ theme }) => ({
    textAlign: "center",
    marginTop: theme.spacing(4),

    "& h1": {
        fontSize: "3rem",
        fontWeight: "bold",
        background: "linear-gradient(to right, #fde047, white, #fde047)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        marginBottom: "0.5rem",

        [theme.breakpoints.up("md")]: {
            fontSize: "4rem",
        },
    },

    "& p": {
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: "1.25rem",
        marginTop: theme.spacing(2),
    },
}))

export const Divider = styled(motion.div)({
    height: "2px",
    width: "100%",
    maxWidth: "30rem",
    margin: "0 auto 1rem",
    background: "linear-gradient(to right, transparent, #fde047, transparent)",
})

export const LoaderWrapper = styled(motion.div)({
    display: "flex",
    flexDirection: "column",
    marginTop: "3rem",
    alignItems: "center",
    justifyContent: "center",
})

export const Loader = styled(motion.div)({
    width: "4rem",
    height: "4rem",
    borderRadius: "50%",
    border: "4px solid rgba(253, 224, 71, 0.3)",
    borderTop: "4px solid #fde047",
    position: "relative",
})

export const LoadingText = styled(motion.p)({
    color: "rgba(255, 255, 255, 0.7)",
    marginTop: "1rem",
})

export const EnterButton = styled(motion.button)(({ theme }) => ({
    marginTop: "3rem",
    padding: "1rem 2.5rem",
    background: "linear-gradient(to right, #f59e0b, #fbbf24)",
    color: "#0f172a",
    fontWeight: "bold",
    fontSize: "1.125rem",
    borderRadius: "9999px",
    boxShadow: "0 5px 15px rgba(255, 215, 0, 0.3)",
    position: "relative",
    overflow: "hidden",
    zIndex: 10,
    cursor: "pointer",
    border: "none",

    [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
        padding: "0.75rem 2rem",
    },

    "&:hover": {
        boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)",
        transform: "scale(1.05)",
    },

    "&:active": {
        transform: "scale(0.95)",
    },
}))

export const CircleWrapper = styled(motion.div)(({ theme }) => ({
    position: "relative",
    width: "16rem",
    height: "16rem",

    [theme.breakpoints.up("md")]: {
        width: "20rem",
        height: "20rem",
    },
}))

export const CircleImage = styled("img")({
    width: "100%",
    height: "100%",
    opacity: 0.8,
})

export const Sparkle = styled(motion.div)({
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

export const Symbol = styled(motion.div)<{ $top: number; $left: number }>(({ $top, $left }) => ({
    position: "absolute",
    top: `${$top}%`,
    left: `${$left}%`,
    transform: "translate(-50%, -50%)",
}))

export const SymbolInner = styled(motion.div)<{ $active: boolean }>(({ $active, theme }) => ({
    width: "3rem",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backdropFilter: "blur(4px)",
    fontSize: "1.5rem",
    backgroundColor: $active ? "rgba(253, 224, 71, 0.3)" : "rgba(51, 65, 85, 0.3)",

    [theme.breakpoints.up("md")]: {
        width: "6rem",
        height: "6rem",
        fontSize: "3rem",
    },
}))

export const Title = styled("h1")({
    fontSize: "3rem",
    fontWeight: "bold",
    background: "linear-gradient(to right, #fde047, white, #fde047)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "0.5rem",
})

export const Subtitle = styled(motion.p)({
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "1.25rem",
    marginTop: "0.5rem",
})