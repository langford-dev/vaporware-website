import Drawer from "../components/Drawer";
import Flex from "../components/Flex";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import Hero from "../components/Hero";
import websites from "../assets/websites.webp";
import mobileAppDev from "../assets/mobileAppDev.jpg";
import uiDesign from "../assets/uiDesign2.webp";
import graphicDesign from "../assets/graphicDesign.webp";
import enterpriseApps from "../assets/enterpriseApps.webp";
import MetaHead from "../components/Meta";

export default function Home() {
  return (
    <>
      <MetaHead />
      <Header />
      <Hero />
      <div id="what-we-do" />
      <Flex
        title="Website &amp; Web App Development"
        content="We create SEO-friendly websites and web apps to increase traffic and exposure for your business or institution. We've got you covered for all your website needs. We are only a few clicks away."
        subtitle="WEB TOOLS"
        imgAlt="image of graphic design"
        img={websites}
      />
      <Flex
        title="Enterprise Applications"
        content="We develop enterprise applications with custom features that are tailored to meet specific business needs. Our team of application developers works with you from start to finish, carefully planning each step in order to deliver the highest quality software solutions."
        subtitle="CUSTOM SOFTWARE"
        imgAlt="image of enterprise applications"
        img={enterpriseApps}
        reverse
      />
      <Flex
        title="Mobile App Development"
        content="Our skilled development team develops cross-platform mobile apps for iOS and Android devices with customized features to fit your needs. All you need to do is come up with a concept, and we'll handle the rest!"
        subtitle="MOBILE"
        imgAlt="image of graphic design"
        img={mobileAppDev}
      />
      <Flex
        title="Graphic Design"
        content="We design and print stunning high-quality flyers, business cards, promotional banners, and other graphic materials to help you build an outstanding and professional brand identity."
        subtitle="DESIGN &amp; CONTENT"
        imgAlt="image of graphic design"
        img={graphicDesign}
        reverse
      />
      <Flex
        title="UI &amp; UX Design"
        content="At Vapourware Studios, we have highly skilled UI &amp; UX designers who collaborate to create modern, well-structured, and perfect user interfaces, resulting in immersive experiences."
        subtitle="DESIGN"
        imgAlt="image of UI and UX design"
        img={uiDesign}
      />
      <GetStarted />
      <Footer />
      <Drawer />
      <div className="pointer" />
    </>
  );
}
