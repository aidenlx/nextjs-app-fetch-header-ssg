export const dynamic = "error";

export default async function Page() {
  await fetch("https://example.com/");
  return null;
}
