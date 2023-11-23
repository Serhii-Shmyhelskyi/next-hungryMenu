"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <div>
      <h1 style={{ color: "black", textAlign: "center" }}>
        Opps!!! {error.message}
      </h1>
    </div>
  );
}
