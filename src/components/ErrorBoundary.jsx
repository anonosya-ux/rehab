import React from 'react';

/**
 * Standard React Error Boundary
 * Catches unhandled errors in children components.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-8">
          <div className="glass-heavy p-10 rounded-[32px] border border-red-500/20 max-w-lg mx-auto">
            <h2 className="text-3xl font-display font-medium text-text-primary mb-4">Что-то пошло не так</h2>
            <p className="text-text-secondary mb-8">Мы извиняемся за технические неполадки. Пожалуйста, обновите страницу.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-400 transition-colors"
            >
              Обновить страницу
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
