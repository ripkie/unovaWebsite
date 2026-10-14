/** Escape '<' so user/data values cannot terminate the script element. */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[]; }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
