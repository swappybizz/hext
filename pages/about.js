import Head from "next/head";
import Header from "../components/header/Header";
import Image from "next/image";
import PageHeader from "../components/header/page-header";
export default function About() {
  return (
    <>
      <Head id="us">
        <title>Om Oss</title>
      </Head>
      <header classNameName="header header-page">
        <Header />
        <PageHeader title="About Us" />
      </header>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden ">
                <Image
                  alt="content"
                  width={502}
                  height={502}
                  src="/images/ingrid.jpg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Ingrid Solvang
              </h2>
              <h3>Kontormedarbeider</h3>
              <h4>Phone: 98673086</h4>
              <h4>ingridsolvang@smtak.no</h4>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden ">
                <Image
                  alt="content"
                  width={502}
                  height={502}
                  src="/images/dad.jpeg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Mitek Ciesla
              </h2>
              <h3>Daglig Leder</h3>
              <h5>Avdelnings leder Skrå Tak</h5>
              <h4>Phone: 96691582</h4>
              <h4>mitekciesla@smtak.no</h4>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden ">
                <Image
                  alt="content"
                  width={442}
                  height={502}
                  src="/images/pawel.jpg"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Pawel Ciesla
              </h2>
              <h3>Daglig Leder</h3>
              <h3>Avdelnings leder Flate Tak</h3>
              <h4>Phone: 46268749</h4>
              <h4>pawelciesla@smtak.no</h4>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
