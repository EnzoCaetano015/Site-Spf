import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Anchor, Clover, Gem, JapaneseYen, Landmark, Pyramid, Sparkles } from "lucide-react"
import * as Styled from "./start.styled"
// import placeholder from "./placeholder.svg" // Substitua pela sua imagem real

export default function SplashScreen() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [activeSymbol, setActiveSymbol] = useState(0)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const mythologySymbols = [
        { name: "Mitologia Nórdica", color: "#ef4444", icon: <Landmark size={30} /> },
        { name: "Mitologia Japonesa", color: "#3b82f6", icon: <JapaneseYen size={30} /> },
        { name: "El Dorado", color: "#eab308", icon: <Gem size={30} /> },
        { name: "Atlântida", color: "#22c55e", icon: <Anchor size={30} /> },
        { name: "Mitologia Egípcia", color: "#ec4899", icon: <Pyramid size={30} /> },
        { name: "Mitologia Brasileira", color: "#a855f7", icon: <Clover size={30} /> },
    ]

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const particles = Array.from({ length: 100 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: ["#FFD700", "#C0C0C0", "#B87333"][Math.floor(Math.random() * 3)],
            opacity: Math.random() * 0.5 + 0.2,
        }))

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach((p) => {
                ctx.globalAlpha = p.opacity
                ctx.fillStyle = p.color
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fill()
                p.x += p.speedX
                p.y += p.speedY
                if (p.x < 0) p.x = canvas.width
                if (p.x > canvas.width) p.x = 0
                if (p.y < 0) p.y = canvas.height
                if (p.y > canvas.height) p.y = 0
            })
            requestAnimationFrame(animate)
        }

        animate()

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const timer = setTimeout(() => setLoading(false), 4000)
        const symbolInterval = setInterval(() => {
            setActiveSymbol((prev) => (prev + 1) % mythologySymbols.length)
        }, 2000)

        window.addEventListener("resize", resize)
        return () => {
            clearTimeout(timer)
            clearInterval(symbolInterval)
            window.removeEventListener("resize", resize)
        }
    }, [mythologySymbols.length])

    return (
        <Styled.Wrapper>
            <Styled.Canvas ref={canvasRef} />

            <Styled.AnimatedBackground>
                <Styled.GlowTop initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ duration: 2 }} />
                <Styled.GlowBottom initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ duration: 2, delay: 0.5 }} />
            </Styled.AnimatedBackground>

            <Styled.MainContent>

                {/* Círculo giratório com ícone e símbolos */}
                <motion.div initial={{ opacity: 10, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
                    <Styled.CircleWrapper className="CircleWrapper" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
                        {/* <Styled.CircleImage src={placeholder} alt="circle" className="CircleImage" /> */}
                        <Styled.Sparkle className="Sparkle" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }}>
                            <Sparkles size={64} color="#FFD700" />
                        </Styled.Sparkle>
                    </Styled.CircleWrapper>

                    {Array.from({ length: 6 }).map((_, index) => (
                        <Styled.Symbol
                            key={index}

                            className="Symbol"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeSymbol === index ? 1 : 0.3 }}
                            $top={30 + 20 * Math.sin((index * Math.PI * 2) / 6)}
                            $left={50 + 15 * Math.cos((index * Math.PI * 2) / 6)}
                        >
                            <Styled.SymbolInner

                                className={`SymbolInner ${activeSymbol === index ? "Active" : "Inactive"}`}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                                $active={activeSymbol === index}
                            >
                                <span style={{ color: mythologySymbols[index].color }}>
                                    {mythologySymbols[index].icon}
                                </span>
                            </Styled.SymbolInner>
                        </Styled.Symbol>
                    ))}
                </motion.div>

                {/* Título com subtítulo animado */}
                <Styled.TitleWrapper initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }}>
                    <Styled.Title>SPF 2025</Styled.Title>
                    <Styled.Divider initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ delay: 1.3, duration: 1.5 }} />
                    <AnimatePresence>
                        {activeSymbol !== null && (
                            <Styled.Subtitle
                                as={motion.p}
                                key={activeSymbol}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.42, 0, 0.58, 1] // easeInOut
                                }}
                            >
                                {mythologySymbols[activeSymbol].name}
                            </Styled.Subtitle>
                        )}
                    </AnimatePresence>
                </Styled.TitleWrapper>

                {/* Botão de entrada ou loader */}
                <div style={{ marginTop: 0 }}>
                    <AnimatePresence mode="wait">
                        {loading ? (
                            <Styled.LoaderWrapper
                                key="loader"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}

                            >
                                <Styled.Loader
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                                <Styled.LoadingText
                                    as={motion.p}
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    Invocando poderes ancestrais...
                                </Styled.LoadingText>
                            </Styled.LoaderWrapper>
                        ) : (
                            <Styled.EnterButton
                                as={motion.button}
                                key="enter"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => navigate("/home")}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >

                                Entre no reino
                            </Styled.EnterButton>
                        )}
                    </AnimatePresence>
                </div>
            </Styled.MainContent>
        </Styled.Wrapper>
    )
}
