import { useRouter } from "next/router";
import Head from "next/head";
import en from "../locales/en/restaurant.json";
import pt from "../locales/pt/restaurant.json";

import Hero from "../components/organisms/Hero";
import Header from "../components/molecules/Header";
import Container from "../components/layouts/Container";

const Restaurant = () => {
  const router = useRouter();
  const { locale } = router;

  let t;
  switch (locale) {
    case "en":
      t = en;
      break;
    case "pt":
      t = pt;
      break;
  }

  return (
    <div className="flex flex-col items-center min-h-screen relative overflow-x-hidden">
      <Head>
        <title>Quinta Dona Iria - Enoturismo | Restaurant</title>
      </Head>
      <Hero
        title={t.heroTitle}
        image="url(/images/20220423-donairia-004.jpg)"
      />

      {/* Reservation Form */}
      <section>
        <Container>
          <div className="flex flex-col gap-16 items-center">
            <img
              src="/graphics/wordmark-dark.svg"
              alt=""
              className="w-48 lg:w-64"
            />
            <Header heading={t.headerHeading} subheading={t.headerSubheading} />
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Restaurant;
