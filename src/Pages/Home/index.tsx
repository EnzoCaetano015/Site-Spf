import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Clock, Trophy } from "lucide-react"
import * as Styled from "./home.styled"
import { Grid, Paper, Typography, Box, Stack, Button, Avatar, CircularProgress, TableContainer, Table, TableHead, TableBody, TableCell, TableRow } from "@mui/material"
import { useTeams } from "../../Hook/use-teams"
import { NavBar } from "../../Components/navBard"
import { Anubis, Ciclone, Hammer, Poseidon, Tample, Flower, Logo } from "../../Assets"

const TARGET_DATE = new Date("2025-05-29T00:00:00").getTime()

export default function HomePage() {

    const [isVisible, setIsVisible] = useState(false)
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    const { teams, loading } = useTeams()

    useEffect(() => {
        setIsVisible(true)
    }, [])

    useEffect(() => {
        const update = () => {
            const diff = TARGET_DATE - Date.now()
            const days = Math.floor(diff / (1000 * 60 * 60 * 24))
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
            const minutes = Math.floor((diff / (1000 * 60)) % 60)
            const seconds = Math.floor((diff / 1000) % 60)
            setTimeLeft({ days, hours, minutes, seconds })
        }
        update()
        const i = setInterval(update, 1000)
        return () => clearInterval(i)
    }, [])

    // top 3 para o pódio
    const podiumTeams = [...teams]
        .sort((a, b) => b.points - a.points)
        .slice(0, 3)

    const placeColors = ["#BEA32E", "#81858C", "#CD7F32"] // ouro, prata, bronze
    const placeLabels = ["1st", "2nd", "3rd"]

    return (
        <Styled.Wrapper>
            <NavBar adm={false} />
            <Styled.Container>
                <Styled.HeroSection>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.8 }}
                        className="heroContent"
                    >
                        <div className="heroText">
                            <h1>
                                Semana Paulo<span style={{ color: "#fde047" }}> Freire</span> 2025
                            </h1>
                            <p>
                                Bem-vindo ao site da Semana Paulo Freire 2025 da ETEC MCM. Com o tema “Mitologias — Ecos do Passado, Vozes do Presente”, esta edição propõe uma reflexão sobre como os mitos ainda influenciam nossa cultura e modo de pensar. Inspirados nos ideais de Paulo Freire, os projetos apresentados aqui valorizam o diálogo, a criatividade e o protagonismo dos estudantes. Explore os conteúdos e participe dessa experiência de aprendizado transformador.
                            </p>
                        </div>
                        <div className="heroImage">
                            <Logo width={600} height={600}/>
                        </div>
                    </motion.div>
                </Styled.HeroSection>

                <Styled.Section>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isVisible ? 1 : 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="card"
                    >
                        <h2 style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <Clock color="#fde047" /> Contagem regressiva do evento
                        </h2>

                        <Stack
                            direction={"row"}
                            sx={(theme) => ({
                                justifyContent: "space-around",

                                [theme.breakpoints.down('sm')]: {
                                    flexDirection: "column",
                                    gap: 2
                                }
                            })}
                        >
                            {[
                                { label: "Dias", value: timeLeft.days },
                                { label: "Horas", value: timeLeft.hours },
                                { label: "Minutos", value: timeLeft.minutes },
                                { label: "Segundos", value: timeLeft.seconds },
                            ].map((seg) => (
                                <>
                                    <Stack
                                        key={seg.label}
                                        sx={(theme) => ({
                                            width: "20%",

                                            [theme.breakpoints.down('sm')]: {
                                                width: "auto",

                                            }
                                        })}
                                    >
                                        <Paper
                                            sx={{
                                                p: 2,
                                                textAlign: "center",
                                                bgcolor: "#2D304A",
                                            }}
                                            elevation={4}
                                        >
                                            <Typography variant="h3" color="warning.main" sx={{ color: "#F2D750", fontWeight: 600 }}>
                                                {String(seg.value).padStart(2, "0")}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" sx={{ color: "#787A8B", fontWeight: 600 }}>
                                                {seg.label}
                                            </Typography>
                                        </Paper>
                                    </Stack>
                                </>
                            ))}
                        </Stack>

                    </motion.div>
                </Styled.Section>

                <Styled.Section id="rankings">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isVisible ? 1 : 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <Typography variant="h6" gutterBottom display="flex" alignItems="center" gap={1}>
                            <Trophy color="#fde047" />
                            Classificações das equipes
                        </Typography>

                        {loading ? (
                            <Grid container justifyContent="center" sx={{ py: 4 }}>
                                <CircularProgress color="warning" />
                            </Grid>
                        ) : (
                            <>
                                <Typography variant="h4" gutterBottom textAlign="center" sx={{ color: "#fff", fontWeight: 600, mb: 2 }}>
                                    Pódio do Campeonato
                                </Typography>
                                <Grid
                                    container
                                    justifyContent="center"
                                    spacing={4}
                                    sx={(theme) => ({
                                        mb: 4,
                                        bgcolor: "rgba(30, 41, 59, 0.5)",
                                        height: 300,
                                        display: "flex",
                                        alignItems: "center",
                                        borderRadius: 5,
                                        boxShadow: "0px 6px 10px 5px rgba(0, 0, 0, 0.2)",

                                        [theme.breakpoints.down('sm')]: {
                                            paddingBlock: 3,
                                            height: "auto",
                                        },
                                    })}
                                >
                                    {podiumTeams.map((team, idx) => (
                                        <Grid key={team.id}>
                                            <Paper sx={{
                                                p: 2,
                                                textAlign: "center",
                                                width: 200,
                                                bgcolor: "#2D304A",
                                                minHeight: 190
                                            }}
                                                elevation={6}>
                                                <Avatar
                                                    sx={{
                                                        bgcolor: "#2D304A",
                                                        width: 70,
                                                        height: 70,
                                                        mx: "auto",
                                                        mb: 1,
                                                    }}
                                                >
                                                    {team.icon}
                                                </Avatar>
                                                <Typography variant="h5" sx={{ color: "#fff" }}>{team.name}</Typography>
                                                <Typography variant="h6" sx={{ color: "#787A8B" }} display="block">
                                                    {team.points} pts
                                                </Typography>
                                                <Button
                                                    size="small"
                                                    sx={{
                                                        mt: 1,
                                                        color: "#fff",
                                                        fontSize: 15,
                                                        backgroundColor: placeColors[idx],
                                                        "&:hover": {
                                                            backgroundColor: placeColors[idx],
                                                            opacity: 0.9,
                                                        },
                                                    }}
                                                >
                                                    {placeLabels[idx]}
                                                </Button>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>

                                <TableContainer className="tabela" component={Paper} sx={{ bgcolor: "rgba(30,41,59,0.5)" }} elevation={20}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>Rank</TableCell>
                                                <TableCell sx={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>Time</TableCell>
                                                <TableCell align="right" sx={{ fontSize: 15, fontWeight: 600, color: "#fff" }}>Pontos</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {[...teams]
                                                .sort((a, b) => b.points - a.points)
                                                .map((team, i) => (
                                                    <TableRow key={team.id} hover>
                                                        <TableCell>
                                                            <Paper
                                                                variant="outlined"
                                                                sx={{
                                                                    width: 32,
                                                                    height: 32,
                                                                    display: "inline-flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    borderRadius: "50%",
                                                                    bgcolor: "rgba(0,0,0,0.2)",
                                                                    fontSize: 15,
                                                                    color: "#fff"
                                                                }}
                                                            >
                                                                {i + 1}
                                                            </Paper>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Box display="flex" alignItems="center" gap={1}>
                                                                <Box
                                                                    sx={{
                                                                        width: 12,
                                                                        height: 12,
                                                                        borderRadius: "50%",
                                                                        bgcolor: team.color,
                                                                    }}
                                                                />
                                                                <Typography variant="h6" sx={{ color: "#fff" }}>{team.name}</Typography>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            <Typography fontWeight="bold" variant="h6" sx={{ color: "#fff" }}>{team.points}</Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </>
                        )}
                    </motion.div>
                </Styled.Section>
                <Styled.Section>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: isVisible ? 1 : 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
                        <h2 style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <Trophy color="#fde047" /> Competing Teams
                        </h2>
                        <Styled.TeamGrid>
                            {[
                                { name: "Mitologia Nórdica - 1A", color: "#ef4444", icon: <Hammer />, texto: "Guerreiros de Asgard, empunhando o poder do trovão de Thor e a sabedoria de Odin, enfrentam desafios com o poder dos antigos vikings." },

                                { name: "Mitologia Japonesa - 2A", color: "#3b82f6", icon: <Flower />, texto: "Guiados pelos espíritos do Xintoísmo e pelo código dos samurais, eles misturam harmonia e precisão como as flores de cerejeira ao vento da primavera." },

                                { name: "El Dorado - 1B", color: "#eab308", icon: <Tample />, texto: "Buscadores da cidade dourada, eles enfrentam desafios com a astúcia de antigos exploradores e a riqueza do conhecimento esquecido de seus ancestrais." },

                                { name: "Atlântida - 2B", color: "#22c55e", icon: <Poseidon />, texto: "Descendentes da civilização perdida, eles aproveitam os segredos das profundezas e a sabedoria de um mundo sob as ondas." },

                                { name: "Mitologia Egípcia - 1C", color: "#ec4899", icon: <Anubis />, texto: "Abençoados pelos faraós e guiados por Anúbis e Ísis, eles resolvem os enigmas da esfinge e comandam os antigos poderes do Nilo." },

                                { name: "Mitologia Brasileira - 2C", color: "#a855f7", icon: <Ciclone />, texto: "Guardiões dos mistérios da Amazônia, eles dançam com a astúcia do Saci e o encantamento das águas de Iara e das matas." },

                            ].map((team, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                                    className="teamCard"
                                >
                                    <Box
                                        className="teamIcon"
                                    >
                                        {team.icon}
                                    </Box>

                                    <div className="teamName">{team.name}</div>
                                    <div className="teamDesc">
                                        {team.texto}
                                    </div>
                                </motion.div>
                            ))}
                        </Styled.TeamGrid>
                    </motion.div>
                </Styled.Section>
            </Styled.Container>

            <Styled.Footer>
                <p>© Semana Paulo Freire 2025. Todos os direitos reservados.</p>
            </Styled.Footer>
        </Styled.Wrapper>
    )
}
