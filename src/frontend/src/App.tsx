import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Layout } from "./components/Layout";
import { LoadingSkeleton } from "./components/LoadingSkeleton";

const AnalyzePage = lazy(() => import("./pages/AnalyzePage"));
const ResultsPage = lazy(() => import("./pages/ResultsPage"));
const CropsPage = lazy(() => import("./pages/CropsPage"));
const CropDetailPage = lazy(() => import("./pages/CropDetailPage"));
const HistoryPage = lazy(() => import("./pages/HistoryPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, retry: 1 },
  },
});

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="p-6">
              <LoadingSkeleton count={3} />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  beforeLoad: () => {
    throw redirect({ to: "/analyze" });
  },
  component: () => null,
});

const analyzeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/analyze",
  component: AnalyzePage,
});

const resultsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/results",
  component: ResultsPage,
});

const cropsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/crops",
  component: CropsPage,
});

const cropDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/crops/$cropId",
  component: CropDetailPage,
});

const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/history",
  component: HistoryPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  analyzeRoute,
  resultsRoute,
  cropsRoute,
  cropDetailRoute,
  historyRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
