"use client"

import React, { Component, ErrorInfo, ReactNode } from "react"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console for debugging
    console.error("ErrorBoundary caught an error:", error, errorInfo)

    // In production, you would log to an error reporting service
    // Example: Sentry.captureException(error, { contexts: { react: errorInfo } })

    this.setState({
      error,
      errorInfo,
    })
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    })
  }

  handleGoHome = () => {
    window.location.href = "/"
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
          <div className="max-w-2xl w-full text-center">
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-red-500/10 p-6 border border-red-500/20">
                <AlertTriangle className="h-12 w-12 text-red-400" aria-hidden="true" />
              </div>
            </div>

            <h1 className="font-serif text-3xl font-bold text-white mb-4">
              Something Went Wrong
            </h1>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We apologize for the inconvenience. An unexpected error has occurred.
              Our team has been notified and is working to resolve the issue.
            </p>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="mb-8 p-6 bg-[#1A1A1A] border border-[#2D2D2D] rounded-lg text-left">
                <h2 className="text-sm font-semibold text-white mb-2">Error Details:</h2>
                <pre className="text-xs text-red-400 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack && (
                    <div className="mt-4 text-muted-foreground">
                      {this.state.errorInfo.componentStack}
                    </div>
                  )}
                </pre>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gold"
                size="lg"
                onClick={this.handleReset}
                className="min-h-[44px]"
                aria-label="Try again"
              >
                <RefreshCw className="h-4 w-4 mr-2" aria-hidden="true" />
                Try Again
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={this.handleGoHome}
                className="min-h-[44px]"
                aria-label="Go to home page"
              >
                <Home className="h-4 w-4 mr-2" aria-hidden="true" />
                Go Home
              </Button>
            </div>

            <p className="mt-8 text-xs text-muted-foreground/60">
              If this problem persists, please contact our support team.
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
