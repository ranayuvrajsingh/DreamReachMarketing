"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Caught global error:", error);
  }, [error]);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Something went wrong!</h1>
      <p>We're working on it. Please try again.</p>
      <button onClick={() => reset?.()} style={{ marginTop: "1rem" }}>
        Try again
      </button>
    </div>
  );
}
