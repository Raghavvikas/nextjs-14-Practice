import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Next JS with fundamentals{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <Link href={"/auth"}>Auth</Link>
        <Link href={"/courses"}>Courses</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/auth"}>Auth</Link>
        <Link href={"/auth"}>Auth</Link>
      </div>
    </main>
  );
}
