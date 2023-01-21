import { useRouter } from "next/router";
import Footer from "../organisms/Footer";
import Navigation from "../organisms/Navigation";

export default function Layout({ children }) {
  const router = useRouter();
  if (router.pathname.includes("/coming-soon")) return <main>{children}</main>;

  return (
    <div className="bg-tan-50 flex flex-col">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
