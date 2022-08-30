import Drawer from "../components/Drawer";
import Flex from "../components/Flex";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Header from "../components/Header";
import Hero from "../components/Hero";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.png";
import img3 from "../assets/3.webp";
import uiDesign from "../assets/uiDesign.jpg";
import graphicDesign from "../assets/graphicDesign.webp";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div id="what-we-do" />
      <Flex
        title="Website &amp; Web App Development"
        content="An interactive website is not only cool. It's SEO friendly and boosts your search engine rankings. Our team of developers with global experience bring diversity to every project and reimagine your ideas to be the best it can be. We cover all the basics as we transform thoughts on paper to an expert outcome; stunning with the extra advantage of competitiveness and user-friendliness."
        subtitle="WEB TOOLS"
        imgAlt="image of graphic design"
        img={img3}
      />
      <Flex
        title="Mobile App Development"
        content="Our cross-disciplinary teams are highly collaborative, pushing the boundaries of what brands can enable for their users. Building is one of our favorite things to do. We get to explore and create a clever user experience across mobile platforms. How we get it done? Our engineers, strategists and quality assurance professionals turn ideas and designs into functional, reliable products. From strategy and development through to final implementation, we can help you build a powerful product for the market."
        subtitle="CUSTOM SOFTWARE"
        imgAlt="image of graphic design"
        img={img1}
        reverse
      />
      <Flex
        title="UI &amp; UX Design"
        content="Our interdisciplinary team consists of visual artists, writers, content curators and bloggers who offer their unique perspectives in technical and creative content documentation and production. Our approach is to tell a captivating story through photography, videography, 2D & 3D design and animation to bring the idea to life. We also offer content strategy and editorial services deployed across digital media, print media, VR and below the line marketing outlets.      "
        subtitle="DESIGN"
        imgAlt="image of UI and UX deesign"
        img={uiDesign}
      />
      <Flex
        title="Graphic Design"
        content="Our talented team of designers creates stunning, crisp, and high-quality flyers, business cards, promotional banners, and other graphic materials to help you build a professional brand identity."
        subtitle="DESIGN &amp; CONTENT"
        imgAlt="image of graphic design"
        img={graphicDesign}
        reverse
      />
      {/* <Flex
        title="Social Media Management"
        content="Our interdisciplinary team consists of visual artists, writers, content curators and bloggers who offer their unique perspectives in technical and creative content documentation and production. Our approach is to tell a captivating story through photography, videography, 2D & 3D design and animation to bring the idea to life. We also offer content strategy and editorial services deployed across digital media, print media, VR and below the line marketing outlets.      "
        subtitle="SOCIALS &amp; BRANDING"
        imgAlt="image of graphic design"
        img={img3}
      /> */}
      {/* <Flex
        title="Technical Writing"
        content="Our interdisciplinary team consists of visual artists, writers, content curators and bloggers who offer their unique perspectives in technical and creative content documentation and production. Our approach is to tell a captivating story through photography, videography, 2D & 3D design and animation to bring the idea to life. We also offer content strategy and editorial services deployed across digital media, print media, VR and below the line marketing outlets.      "
        subtitle="WRITING"
        imgAlt="image of graphic design"
        img={img1}
      /> */}
      {/* <Projects /> */}
      <GetStarted />
      <Footer />
      <Drawer />
      <div className="pointer" />
    </>
  );
}
