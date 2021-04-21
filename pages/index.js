import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Result from "../components/Result";
import requests from "../utils/requests";

export default function Home({ results }) {
  console.log(results);
  return (
    <div className="">
      <Head>
        <title>Huli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Result results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  // console.log("context", context);

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
//https://api.themoviedb.org/3/treding/all/week?api_key="4107580bad3636aecbb11e5a7a075711"&language=en-US
