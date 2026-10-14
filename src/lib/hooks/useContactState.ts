"use client";
import { useState } from "react";

export function useContactState() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "produk",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Unable to send your message. Please try again.");
      } else {
        setSent(true);
      }
    } catch {
      setError("Connection failed. Check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };
  return { form, setForm, sent, setSent, loading, setLoading, error, setError, handleSubmit };
}
export type ContactSectionProps = ReturnType<typeof useContactState>;
