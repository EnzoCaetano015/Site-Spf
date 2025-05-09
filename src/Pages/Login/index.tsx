import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Shield, Eye, EyeOff } from "lucide-react"
import {
    Box, Typography, Paper, TextField, IconButton, Button, CircularProgress
} from "@mui/material"
import * as Styled from "./login.style"
import axios, { AxiosError } from "axios"

export default function AdminLoginPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)

        try {
            const res = await axios.post("http://localhost:8000/login", {
                usuario: username,
                senha: password,
            })

            if (res.data.message === "Login bem-sucedido") {
                navigate("/Admin")
            }
        } catch (err) {
            const axiosError = err as AxiosError<{ detail: string }>
            setError(axiosError.response?.data?.detail || "Erro no login")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Styled.Wrapper>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="motion-container"
            >
                <Box textAlign="center" mb={4}>
                    <Shield size={48} color="#fde047" />
                    <Typography variant="h4" fontWeight="bold" mt={2}  mb={1} color="white">
                        Login da Contagem
                    </Typography>
                    <Typography variant="body1" color="rgba(255,255,255,0.7)">
                        Acesso ao painel de pontos das equipes
                    </Typography>
                </Box>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <Paper elevation={6} className="form-card">
                        {error && (
                            <Box className="error-box">{error}</Box>
                        )}

                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Username"
                                variant="outlined"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                sx={{ mb: 2 }}
                                InputProps={{ style: { color: "white" } }}
                                InputLabelProps={{ style: { color: "#ccc" } }}
                            />

                            <TextField
                                fullWidth
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    style: { color: "white" },
                                    endAdornment: (
                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                            {showPassword ? <EyeOff color="#ccc" size={18} /> : <Eye color="#ccc" size={18} />}
                                        </IconButton>
                                    )
                                }}
                                InputLabelProps={{ style: { color: "#ccc" } }}
                            />

                            <Button
                                fullWidth
                                type="submit"
                                disabled={isLoading}
                                sx={{
                                    mt: 3,
                                    backgroundColor: "#fde047",
                                    color: "#1e293b",
                                    fontWeight: "bold",
                                    "&:hover": { backgroundColor: "#facc15" },
                                }}
                            >
                                {isLoading ? (
                                    <CircularProgress size={20} sx={{ color: "#1e293b" }} />
                                ) : (
                                    "Login"
                                )}
                            </Button>
                        </form>

                       
                    </Paper>

                    <Box mt={4} textAlign="center">
                        <Typography
                            component="a"
                            href="/Home"
                            sx={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", textDecoration: "none"}}
                        >
                            Return to Home Page
                        </Typography>
                    </Box>
                </motion.div>
            </motion.div>
        </Styled.Wrapper>
    )
}
