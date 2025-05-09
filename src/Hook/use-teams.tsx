import { useEffect, useState, } from "react"
import { Anchor, Clover, Gem, JapaneseYen, Landmark, Pyramid } from "lucide-react"
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
          <Landmark size={30} />,
          <JapaneseYen size={30} />,
          <Gem size={30} />,
          <Anchor size={30} />,
          <Pyramid size={30} />,
          <Clover size={30} />
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
