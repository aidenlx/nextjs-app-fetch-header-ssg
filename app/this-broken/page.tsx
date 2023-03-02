export const dynamic = "error";

export default async function Page() {
  await fetch("https://example.com/", {
    headers: { Authorization: `Bearer 123` },
  });
  return null;
}
