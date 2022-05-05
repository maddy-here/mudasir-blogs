import React, { Fragment } from "react";
import Head from 'next/head';
import ContactForm from "../components/contact/contact-form";

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content= 'lets discuss about latest trends in web technologies and javascript frameworks' />
      </Head>
      <section className='container'>
        <ContactForm />
      </section>
    </Fragment>
  );
};

export default Contact;
