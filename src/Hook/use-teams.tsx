import { useEffect, useState, } from "react"
import { Anubis, Ciclone, Hammer, Poseidon, Tample, Flower } from "../Assets"
import axios from "axios"

interface Team {
  id: number
  name: string
  points: number
  color?: string
  icon?: React.ReactNode
}

export function useTeams() {
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTeams() {
      try {
        const res = await axios.get("https://spf-api.caetanodev.com/times")
        const teamColors = [
          "#ef4444", "#3b82f6", "#eab308", "#22c55e", "#ec4899", "#a855f7"
        ]

        const teamIcons = [
          <Hammer />,
          <Flower />,
          <Tample />,
          <Poseidon />,
          <Anubis />,
          <Ciclone />
        ]

        const enriched = res.data.map((team: object, index: number) => ({
          ...team,
          color: teamColors[index % teamColors.length],
          icon: teamIcons[index % teamIcons.length],
        }))

        setTeams(enriched)
      } catch (err) {
        console.error("Erro ao buscar times:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchTeams()
  }, [])

  return { teams, loading }
}
