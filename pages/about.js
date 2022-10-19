import MetaHead from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <MetaHead title="Vapourware Studios —— About" />
      <Header />
      <div className="pointer" />
      <main>
        <div className="page-banner-img">
          <div className="h-full w-full flex items-center">
            <div className="max-w-7xl pt-32 m-auto p-5">
              <h1 className="lg:text-[5rem] text-6xl leading-[75px] font-bold lg:leading-[120px]">
                A passion-driven team
              </h1>
            </div>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className="lg:flex-1 mb-10">
            <h1 className={styles.title}>About Us.</h1>
          </div>
          <div className="lg:flex-1">
            <p className={styles.p}>
              We are a talented team of developers and designers specialized in
              creating elegant websites, mobile apps, graphics, UI and UX
              designs that promote your business, increase conversions and drive
              awareness.
            </p>
            <br />
            <p className={styles.p}>
              We build meaningful products and believe that great digital
              experiences come from a combination of technical skill and empathy
              for the people who will use them.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const styles = {
  p: `text-xl leading-8 opacity-80`,
  title: `underline_ lg:text-4xl font-bold`,
  contentWrapper: `max-w-7xl m-auto p-5 py-20 lg:px-10 font-medium lg:flex justify-evenly`,
};

export default About;
