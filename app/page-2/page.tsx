import Link from "next/link";

export default function PageTwo() {
  return (
    <Link href="/">
      <h1
        className="text-6xl mt-20 font-bold"
        style={{ viewTransitionName: "animated-text" }}
      >
        Page 2
      </h1>
    </Link>
  );
}
