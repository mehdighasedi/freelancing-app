import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import { DarkModeProvider } from "./context/DarkModeContext";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import SubmittedProjects from "./pages/SubmittedProjects";
import Proposals from "./pages/Proposals";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import NotAccess from "./ui/NotAccess";

const queryClient = new QueryClient();
function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster
          toastOptions={{
            success: {
              duration: 5000,
              // theme: {
              //   primary: "green",
              // },
            },
          }}
        />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route
            path="/owner"
            element={
              <ProtectedRoutes>
                <OwnerLayout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
          <Route
            path="/freelancer"
            element={
              <ProtectedRoutes>
                <FreelancerLayout />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="projects" element={<SubmittedProjects />} />
            <Route path="proposals" element={<Proposals />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/not-access" element={<NotAccess />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
