import { Box } from '@mui/material';
import { NavBar } from '../../Components/navBard';
import DashboardContent from '../../Components/card';
import DashboardFooter from '../../Components/footer';
import RequireAuth from '../../Hook/useAuth';

export const AdminDashboardPage = () => (
    <>
        <RequireAuth>
            <Box sx={{ background: "linear-gradient(to bottom, #0f172a, #6b21a8)", }}>
                <NavBar adm={true} />
                <Box sx={{ m: 5, minHeight: "76vh" }}>
                    <DashboardContent />
                </Box>
                <DashboardFooter />
            </Box>
        </RequireAuth>
    </>
);


