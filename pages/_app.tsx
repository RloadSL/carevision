import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import TextApp from "@/components/TextApp";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import "../assets/styles/layout.scss";
import {Lato} from '@next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight:['400','300','700']
})

const App = ({ Component, pageProps }: AppProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const displayModal = () => {
    setModalVisible(true);
  };
  return (
    <div className={`${lato.className} app`}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="carevision" />
        <meta name="author" content="Rload Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header displayModal={displayModal} />
      <Component {...pageProps} displayModal={displayModal} />
      {modalVisible && (
        <Modal onClose={() => setModalVisible(false)}>
          <div>
            <h2 className="title">
              <TextApp labelID="form.title" />
            </h2>
            <ContactForm />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default App;
