"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error-state">
      <h1>Something went wrong</h1>
      <p>Unable to load portfolio data.</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
