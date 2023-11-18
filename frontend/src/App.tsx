import { useCookies } from "react-cookie";
import { Redirect, Route } from "wouter";
import { LoginRoute } from "./routes/login";
import { Toaster } from "sonner";
import { SWRConfig } from "swr";
import { COOKI_NAME, swrGetFetcher } from "./utils";
import { RegisterRoute } from "./routes/register";
import { ProductRoute } from "./routes/products";
import { Suspense } from "react";
import { ProductRouteSkeleton } from "./components/products/skeleton";

function App() {
  const [cookies] = useCookies([COOKI_NAME]);

  return (
    <SWRConfig value={{ fetcher: swrGetFetcher }}>
      <div className="p-4">
        {/* this component provides feedback to the user */}
        <Toaster richColors position="bottom-center" />

        {/* root path */}
        <Route path="/">
          {cookies[COOKI_NAME] ? (
            <Redirect to="/products" />
          ) : (
            <Redirect to="/sign-in" />
          )}
        </Route>

        {/* if user is logged in then redirect to /products */}
        <Route path="/sign-in">
          {cookies[COOKI_NAME] ? <Redirect to="/products" /> : <LoginRoute />}
        </Route>

        {/* if user is logged in then redirect to /products and don't let him access to register form */}
        <Route path="/sign-up">
          {cookies[COOKI_NAME] ? (
            <Redirect to="/products" />
          ) : (
            <RegisterRoute />
          )}
        </Route>

        {/* if user is logged in then he can acces to /products route, otherwise redirect to login form */}
        <Route path="/products">
          {cookies[COOKI_NAME] ? (
            <Suspense fallback={<ProductRouteSkeleton />}>
              <ProductRoute />
            </Suspense>
          ) : (
            <Redirect to="/sign-in" />
          )}
        </Route>
      </div>
    </SWRConfig>
  );
}

export default App;
