import { Skeleton } from "@/components/ui/skeleton";

interface LoadingSkeletonProps {
  variant?: "card" | "list" | "detail";
  count?: number;
}

function CardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-subtle">
      <div className="flex items-start gap-4">
        <Skeleton className="h-14 w-14 rounded-lg shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-2/5" />
          <Skeleton className="h-4 w-3/5" />
          <Skeleton className="h-3 w-4/5" />
        </div>
        <Skeleton className="h-10 w-16 rounded-full shrink-0" />
      </div>
    </div>
  );
}

function ListSkeleton() {
  return (
    <div className="space-y-2">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
        >
          <Skeleton className="h-8 w-8 rounded-md shrink-0" />
          <div className="flex-1 space-y-1.5">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-3 w-1/2" />
          </div>
          <Skeleton className="h-6 w-12 rounded-full" />
        </div>
      ))}
    </div>
  );
}

function DetailSkeleton() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-start gap-5">
          <Skeleton className="h-20 w-20 rounded-xl shrink-0" />
          <div className="flex-1 space-y-3">
            <Skeleton className="h-7 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-card p-4 space-y-2"
          >
            <Skeleton className="h-3 w-2/3" />
            <Skeleton className="h-7 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function LoadingSkeleton({
  variant = "card",
  count = 3,
}: LoadingSkeletonProps) {
  if (variant === "list") return <ListSkeleton />;
  if (variant === "detail") return <DetailSkeleton />;
  return (
    <div className="space-y-4">
      {Array.from({ length: count }, (_, i) => `skeleton-${i}`).map((key) => (
        <CardSkeleton key={key} />
      ))}
    </div>
  );
}
