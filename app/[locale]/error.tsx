"use client";
export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <div style={{ height: "100vh" }}>
      <h1 style={{ textAlign: "center", height: 700 }}>
        Opps!!! {error.message}
      </h1>
    </div>
  );
}
