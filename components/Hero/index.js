import styles from "./styles";
import Image from "next/image";
import scroll from "../../assets/svg/scroll.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className={styles.container}>
        <h1 className="hero-h1 lg:text-[7rem] mt-10 text-7xl max-w-5xl font-bold mb-8 text-center h-3/6">
          Your <span className="hero-h1-gradient">Creative</span> Digital Agency

          {/* We Bring Your
          <div className="lg:h-[140px] h-[100px] -mb-5 lg:mb-0 lg:mt-3">
            <Typewriter
              options={{
                strings: ["Ideas", "Designs", "Dreams", "Vision"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          To Life */}
        </h1>
        <Link href="#what-we-do">
          <div className="scroll-icon mt-20 lg:mt-10">
            <Image src={scroll} alt="scroll icon" />
          </div>
        </Link>
      </section>
    </>
  );
};

export default Hero;
