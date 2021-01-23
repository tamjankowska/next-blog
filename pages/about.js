import Head from "next/head";
import Link from "next/link";

function About() {
    return (
        <div>
        <Head>
            <title>About</title>
        </Head>
            <Link href="/">
                <a>Back home</a>
            </Link>
            <h1>About</h1>
         
        </div>
    )
}

export default About;