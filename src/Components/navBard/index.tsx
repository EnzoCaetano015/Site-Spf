import { Button, Stack, Typography, type AppBarProps } from "@mui/material"
import * as Styled from "./index.styled"
import { Home, LogIn, LogOut, Shield } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface NavBarProps extends AppBarProps {
    adm: boolean
}

export const NavBar = ({ adm, ...rest }: NavBarProps) => {

    const navigate = useNavigate()


    return (
        <>
            <Styled.NavBar {...rest}>

                <Typography
                    variant="h5"
                    sx={{
                        display: "flex",
                        gap: 1
                    }}>
                    <Shield size={20} color="#fde047" />
                    SPF
                </Typography>

                <Stack gap={2} direction={"row"}>
                    {!adm ? (
                        <>
                            <Button
                                onClick={() => { navigate('/Home') }}
                                startIcon={<Home size={18} />}
                                sx={{
                                    color: "#E5E7EB",
                                    fontSize: 13,
                                    backgroundColor: "transparent",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "#334155",
                                    },
                                }}
                            >
                                Home
                            </Button>


                            <Button
                                onClick={() => { navigate('/Login') }}
                                startIcon={<LogIn size={18} />}
                                sx={{
                                    color: "#1E293B",
                                    fontSize: 13,
                                    backgroundColor: "#FACC15",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "#FDE047",
                                    },
                                }}
                            >
                                Admin
                            </Button>
                        </>
                    ) : (
                        <Button
                            onClick={() => { navigate('/Login') }}
                            startIcon={<LogOut size={18} />}
                            sx={{
                                color: "#E5E7EB",
                                fontSize: 13,
                                backgroundColor: "transparent",
                                fontWeight: "bold",
                                textTransform: "none",
                                "&:hover": {
                                    backgroundColor: "#334155",
                                },
                            }}
                        >
                            Logout
                        </Button>
                    )}


                </Stack>
            </Styled.NavBar>
        </>
    )
}