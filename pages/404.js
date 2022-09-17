import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, [router]);
  return (
    <>
      <Head>
        <title>Ninja List | 404</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="not-found">
        <h1>Oooops..</h1>
        <h2>That page cannot be found</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
}

export default NotFound;
