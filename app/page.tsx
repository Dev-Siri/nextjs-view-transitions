import Link from "next/link";

export default function Home() {
  return (
    <Link href="/page-2">
      <h1
        className="text-6xl font-bold"
        style={{ viewTransitionName: "animated-text" }}
      >
        Page 1
      </h1>
    </Link>
  );
}
