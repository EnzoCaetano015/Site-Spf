import { useState, useEffect, type ReactNode } from 'react';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    CircularProgress,
    Alert,
    Stack,
} from '@mui/material';
import { Save, Landmark, JapaneseYen, Gem, Anchor, Pyramid, Clover, } from 'lucide-react';
import axios from 'axios';

interface Team {
    id: number;
    name: string;
    points: number;
    color?: string;
    icon?: ReactNode;
}

const teamColors = [
    '#ef4444',
    '#3b82f6',
    '#eab308',
    '#22c55e',
    '#ec4899',
    '#a855f7'
];

const teamIcons: ReactNode[] = [
    <Landmark size={24} />,
    <JapaneseYen size={24} />,
    <Gem size={24} />,
    <Anchor size={24} />,
    <Pyramid size={24} />,
    <Clover size={24} />
];

const DashboardContent = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    useEffect(() => {
        async function fetchTeams() {
            try {
                const res = await axios.get('https://spf-api.caetanodev.com/times');
                const data = Array.isArray(res.data) ? res.data : [];

                const enriched = data.map((team, index) => ({
                    ...team,
                    color: teamColors[index % teamColors.length],
                    icon: teamIcons[index % teamIcons.length]
                }));

                setTeams(enriched);
            } catch (error) {
                setMessage({ type: 'error', text: `${error}: Erro ao carregar equipes.` });
            } finally {
                setLoading(false);
            }
        }

        fetchTeams();
    }, []);

    const handlePointChange = (id: number, points: number) => {
        setTeams(prev =>
            prev.map(team => (team.id === id ? { ...team, points } : team))
        );
    };

    const handleSave = () => {
        setSaving(true);
        Promise.all(
            teams.map(team =>
                axios.put(`https://spf-api.caetanodev.com/times/${team.id}/pontuacao`, {
                    pontos: team.points
                })
            )
        )
            .then(() =>
                setMessage({ type: 'success', text: 'Pontuações atualizadas com sucesso!' })
            )
            .catch(() =>
                setMessage({ type: 'error', text: 'Erro ao salvar pontuações.' })
            )
            .finally(() => setSaving(false));
    };

    if (loading) {
        return (
            <Grid container justifyContent="center" alignItems="center" sx={{ height: 300 }}>
                <CircularProgress />
            </Grid>
        );
    }

    return (
        <>
            {message && <Alert severity={message.type}>{message.text}</Alert>}

            <Stack
                gap={2}
                sx={(theme) => ({
                    flexDirection: "row",

                    [theme.breakpoints.down('md')]: {
                        flexDirection: "column",
                    },
                })}
            >
                {teams.map(team => (

                    <Card
                        sx={{
                            bgcolor: '#2D304A',
                            color: '#fff',
                        }}>
                        <CardContent>
                            <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
                                <Typography variant="h6" gutterBottom display="flex" alignItems="center" gap={1}>
                                    <span style={{ color: team.color }}>{team.icon}</span>
                                    {team.name}
                                </Typography>
                                <TextField
                                    label="Pontos"
                                    type="number"
                                    value={team.points}
                                    onChange={e => handlePointChange(team.id, parseInt(e.target.value, 10))}
                                    fullWidth
                                    sx={{
                                        input: { color: '#fff' },
                                        label: { color: '#ccc' },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': { borderColor: '#fff' },
                                            '&:hover fieldset': { borderColor: '#fff' },
                                            '&.Mui-focused fieldset': { borderColor: '#fff' }
                                        }
                                    }}
                                />
                            </Stack>
                        </CardContent>
                    </Card>
                ))}
            </Stack>

            <Button
                variant="contained"
                startIcon={<Save />}
                onClick={handleSave}
                disabled={saving}
                sx={{ mt: 4, bgcolor: '#22c55e', '&:hover': { bgcolor: '#16a34a' } }}
            >
                {saving ? 'Salvando...' : 'Salvar Alterações'}
            </Button>
        </>
    );
};

export default DashboardContent;
