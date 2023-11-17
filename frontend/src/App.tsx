import { useCookies } from "react-cookie";
import { Route } from "wouter";
import { LoginRoute } from "./routes/login";
import { Toaster } from "sonner";
import { SWRConfig } from "swr";
import { swrGetFetcher } from "./utils";
import { RegisterRoute } from "./routes/register";

function Admin() {
  return <h1>User logged in</h1>;
}

function App() {
  const [cookies] = useCookies([import.meta.env.VITE_JWT_COOKIE! as "user_tk"]);

  return (
    <SWRConfig value={{ fetcher: swrGetFetcher }}>
      <div className="p-4">
        <Toaster richColors position="bottom-center" />
        <Route path="/" component={cookies.user_tk ? Admin : LoginRoute} />
        <Route path="/sign-in" component={LoginRoute} />
        <Route path="/sign-up" component={RegisterRoute} />
      </div>
    </SWRConfig>
  );
}

export default App;
