import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="flex flex-col items-center justify-center min-h-[300px] gap-4 p-8 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>
          <div className="space-y-1">
            <h3 className="font-display text-lg font-semibold text-foreground">
              Something went wrong
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              {this.state.error?.message ??
                "An unexpected error occurred. Please try again."}
            </p>
          </div>
          <Button
            variant="outline"
            onClick={this.handleReset}
            data-ocid="error.retry_button"
          >
            Try Again
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}

interface InlineErrorProps {
  message?: string;
  onRetry?: () => void;
}

export function InlineError({ message, onRetry }: InlineErrorProps) {
  return (
    <div
      className="flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4"
      data-ocid="error_state"
    >
      <AlertTriangle className="h-5 w-5 text-destructive shrink-0" />
      <p className="text-sm text-destructive flex-1">
        {message ?? "Unable to load data. Please try again."}
      </p>
      {onRetry && (
        <Button
          size="sm"
          variant="outline"
          onClick={onRetry}
          data-ocid="error.retry_button"
        >
          Retry
        </Button>
      )}
    </div>
  );
}
