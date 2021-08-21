import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

const Contact = () => {
  return (
    <>
      <Head>
        <title>contact me</title>
        <meta name="description" content="how to get help from me" />
      </Head>
      <ContactForm />
    </>
  );
};
export default Contact;
