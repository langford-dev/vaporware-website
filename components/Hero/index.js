import Link from "next/link";
import styles from "./styles";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
      <section className={styles.container}>
        <h1 className="lg:text-9xl text-8xl max-w-5xl font-bold mb-8 text-left lg:text-center">
          We bring your ideas to
          <Typewriter
            options={{
              strings: ["Life.", "World."],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        {/* <p className="text-3xl opacity-70">Let’s make it happen.</p> */}
        {/* <p className="border-b text-2xl">
          <Link href="/">Let&apos;s talk</Link>
        </p> */}
      </section>
    </>
  );
};

export default Hero;
