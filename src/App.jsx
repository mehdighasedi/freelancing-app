import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="container xl:max-w-screen-xl">
      <QueryClientProvider client={queryClient}>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
