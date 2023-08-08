import Head from "next/head";
import { SITE_DOMAIN } from "@/utils/api";
import Hero from "@/layouts/Hero";
import Products from "@/layouts/Products";
import Publishers from "@/layouts/Publishers";
import Advertisers from "@/layouts/Advertisers";
import AboutUs from "@/layouts/AboutUs";
import FAQ from "@/layouts/FAQ";
import Footer from "@/layouts/Footer";
import ContactUs from "@/layouts/ContactUs";

function Home({ data }) {
  // const { datainfo } = data;

  const canonicalURL = `${SITE_DOMAIN}`;
  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalURL} />
        <title>o9 Networks</title>
        <meta name="title" content="o9 Networks" />
        <meta name="description" content="o9 des" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-x-hidden">
        <Hero />
        <Products />
        <Publishers />
        <Advertisers />
        <AboutUs />
        <FAQ />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}

// export async function getServerSideProps({ res }) {
//   res.setHeader(
//     "Cache-Control",
//     "public, s-maxage=10, stale-while-revalidate=59",
//   );
//   let data = {};
//   const response = await appsApi.get("getAllData");
//   if (response.status === 200) {
//     data = response.data;
//   }

//   return { props: { data: data } };
// }

export default Home;
