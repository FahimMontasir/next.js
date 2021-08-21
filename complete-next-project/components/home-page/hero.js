import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="hero">
        <Image
          src="/vercel.svg"
          alt="vercel logo black"
          width={300}
          height={100}
        />
        <h1>Hi, I am Fahim</h1>
        <p>
          I blog about programming -especially frontend frameworks like React.
        </p>
      </div>
    </section>
  );
};
export default Hero;
