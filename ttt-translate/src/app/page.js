"use client";
import Image from "next/image";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Home() {
  return (

    <div className="container-fluid">
      {/* Navigation bar */}
      <nav className="navbar fixed-top bg-white navbar-expand-sm navbar-light" id="neubar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image
              src="/logotttrsz.png"
              alt="Logo TTT English Mission"
              width={500}
              height={70}
              className="w-100"
            />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a className="nav-link mx-2" aria-current="page" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#whyUs">Why US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#ceo">CEO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#contact">Contact</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/*Carousel Start*/}
      <div id="carouselExampleSlidesOnly" data-bs-ride="carousel" className="carousel slide carousel-fade">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" style={{ marginTop: "96px" }}>
          <div className="carousel-item active">
            <img src="/co-travailleur.jpg" className="d-block w-100 imgCarousel" alt="..." />

            <div className="text-dark fw-bold carousel-caption">
              <p><span style={{ color: "orange" }}>High Professional</span> <br /> Translation Services <br /> You Can Trust
              </p>
            </div>

          </div>
          <div className="carousel-item">
            <img src="/manwithlaptop.jpg" class="d-block w-100 imgCarousel" alt="..." />

            <div className="text-dark fw-bold carousel-caption ">
              <p><span style={{ color: "orange" }}>Open Your Business</span> <br /> To The Whole World</p>
            </div>

          </div>
          <div className="carousel-item ">
            <img src="/carousel3.jpg" class="d-block w-100 imgCarousel" alt="..." />

            <div className="text-dark fw-bold carousel-caption">
              <p><span style={{ color: "orange" }}>Work Easily</span> <br /> With Our Professional <br /> Translation Agency
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Services offered and type of translation */}
      <div className="row mt-5">
        <h1 className="mb-3">We offer a Wide Range of Translation Services</h1>

        <div className="col-lg-6 col-md-6 mt-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quod. Mollitia itaque incidunt porro
            similique id. Architecto, explicabo quos. Doloremque inventore neque consequatur est consectetur illo esse
            nulla dolore. Omnis!
          </p>
        </div>
        <div className="col-lg-6 col-md-6 mt-2">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id voluptas vero aliquid ducimus esse similique?
            Saepe, nesciunt at. A animi quos quae dignissimos non reprehenderit quasi similique porro odio perspiciatis?
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-2" id="services">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Documents Translations</h5>
              <p className="card-text">
                <ul className="list-group">
                  <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 20 20">
                    <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                  </svg> Financial documents translations</li>
                  <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 20 20">
                    <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                  </svg> Commercial, Marketing & Business documents
                    translations</li>
                  <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 20 20">
                    <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                  </svg> legal documents
                    translations</li>
                  <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 20 20">
                    <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                  </svg> Christian and Bible content translations conducted by Spirit-filled Christians</li>
                  <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 20 20">
                    <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                  </svg> Other types of translations</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-2">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Localization Services</h5>
              <p className="card-text">
                <ul className="list-group">
                  <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 20 20">
                    <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                  </svg> Penetrate foreign markets</li>
                  <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 20 20">
                    <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                  </svg> Reach new clients or
                    consumer groups</li>
                  <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                    viewBox="0 0 20 20">
                    <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                  </svg> Increase international sales</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-2">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Transcription Services</h5>
              <ul className="list-group">
                <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 20 20">
                  <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                </svg> Accurate and efficient conversion of audio files into written text</li>
                <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 20 20">
                  <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                </svg> Facilitation of access to the content</li>
                <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 20 20">
                  <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                </svg> Increase international sales</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-2">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Subtitling</h5>
              <ul className="list-group">
                <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 20 20">
                  <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                </svg> Accurate and timely provision of subtitles for video content</li>
                <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 20 20">
                  <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                </svg> Enhancement of accessibility for diverse audiences</li>
                <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 20 20">
                  <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                </svg> Improved comprehension of the content</li>
              </ul>
            </div>
          </div>
        </div>



      </div>
      <hr className="my-5"></hr>

      {/* Section Why Choose US */}
      <div className="row mt-5" id="whyUs">
        <div className="col-lg-6 col-md-6 d-none d-md-block">
          <img className="w-100 h-100 img-fluid" src="/negociationMade.jpg"
            alt="Images représentant des hommes d'affaire se serrant la main" style={{ borderRadius: "10px" }} />
        </div>
        <div className="col-lg-6 col-md-6 d-none d-md-block d-flex justify-content-center align-items-center mt-5">
          <div className="align-items-center">
            <h1 className="text-center">Why Choose Us?</h1>
            <h2 className="text-center mt-5" style={{ fontSize: "30px" }}><span><svg xmlns="http://www.w3.org/2000/svg" width="50"
              height="50" viewBox="0 0 32 32">
              <path fill="currentColor"
                d="m29.482 8.624l-10-5.5a1 1 0 0 0-.964 0l-10 5.5a1 1 0 0 0 0 1.752L18 15.591V26.31l-3.036-1.67L14 26.391l4.518 2.485a.998.998 0 0 0 .964 0l10-5.5A1 1 0 0 0 30 22.5v-13a1 1 0 0 0-.518-.876M19 5.142L26.925 9.5L19 13.858L11.075 9.5Zm9 16.767l-8 4.4V15.59l8-4.4Z" />
              <path fill="currentColor" d="M10 16H2v-2h8zm2 8H4v-2h8zm2-4H6v-2h8z" />
            </svg></span> Fast Delivery</h2>
            <p className="text-center">Your documents are promptly translated and returned to you, maintaining efficiency
              without compromising quality.</p>

            <h2 className="text-center mt-5" style={{ fontSize: "30px" }}>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12.408.966H9.375m1.517 0v2.6M5.07 2.749L3.997 3.822L2.925 4.894m1.072-1.072L5.836 5.66M1.142 9.2v3.033m0-1.517h2.6m-.817 5.822l1.072 1.073l1.073 1.072m-1.073-1.072l1.839-1.839M18.858 4.894l-1.072-1.072l-1.073-1.073m1.073 1.073L15.947 5.66m-6.572 4.407a1.517 1.517 0 1 0 0-3.034a1.517 1.517 0 0 0 0 3.034" />
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17.748 8.683a7.15 7.15 0 1 0-8.89 8.884m3 5.467h8.458a2.533 2.533 0 0 0 2.542-2.523v-6.606a2.189 2.189 0 0 0-1.9-2.211a2.1 2.1 0 0 0-1.152 3.969a5.994 5.994 0 0 0 0 4.428a4.674 4.674 0 0 0-7.338-1.265" />
                  <path d="M11.633 13.625a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75" />
                </g>
              </svg></span> Professional Translations
            </h2>
            <p className="text-center">Experience the pinnacle of linguistic excellence with our professional translation
              services, where every word is meticulously crafted by expert linguists, ensuring flawless communication
              across languages.</p>

            <h2 className="text-center mt-5" style={{ fontSize: "30px" }}>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zm-3-6a2.5 2.5 0 0 1 2.5 2.5c0 .31-.06.61-.16.89C21.8 13.5 20.46 13 19 13c-3.31 0-6 2.69-6 6v.54c-.36-1.04-1.35-1.74-2.5-1.74c-1.5 0-2.7 1.2-2.7 2.7V22H4c-1.1 0-2-.9-2-2v-3.8h1.5c1.5 0 2.7-1.2 2.7-2.7S5 10.8 3.5 10.8H2V7a2 2 0 0 1 2-2h4V3.5C8 2.12 9.12.998 10.5.998S13 2.12 13 3.5V5h4a2 2 0 0 1 2 2v4z" />
              </svg></span> Flexible Translation Solutions
            </h2>
            <p className="text-center">Our translation service offers unparalleled flexibility, accommodating projects of all
              sizes and types to meet your specific requirements. From short documents to large-scale projects, we deliver
              customized translation solutions tailored to your needs.</p>
          </div>

        </div>

        {/* Version Mobile */}
        <div className="d-md-none">
          <div className="position-relative">
            <img className="w-100 overlayImage" src="/negociationMade.jpg"
              alt="Images représentant des hommes d'affaire se serrant la main" />

            <div className="position-absolute top-50 start-50 translate-middle">
              <h1 className="text-center text-dark" style={{ fontSize: "40px" }}>Why Choose Us?</h1>
            </div>
          </div>

          <div className="text-center mt-5">
            <h2><span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
              <path fill="currentColor"
                d="m29.482 8.624l-10-5.5a1 1 0 0 0-.964 0l-10 5.5a1 1 0 0 0 0 1.752L18 15.591V26.31l-3.036-1.67L14 26.391l4.518 2.485a.998.998 0 0 0 .964 0l10-5.5A1 1 0 0 0 30 22.5v-13a1 1 0 0 0-.518-.876M19 5.142L26.925 9.5L19 13.858L11.075 9.5Zm9 16.767l-8 4.4V15.59l8-4.4Z" />
              <path fill="currentColor" d="M10 16H2v-2h8zm2 8H4v-2h8zm2-4H6v-2h8z" />
            </svg></span> Fast Delivery</h2>
            <p>Your documents are promptly translated and returned to you, maintaining efficiency
              without compromising quality.</p>
          </div>

          <div className="text-center mt-5">
            <h2>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12.408.966H9.375m1.517 0v2.6M5.07 2.749L3.997 3.822L2.925 4.894m1.072-1.072L5.836 5.66M1.142 9.2v3.033m0-1.517h2.6m-.817 5.822l1.072 1.073l1.073 1.072m-1.073-1.072l1.839-1.839M18.858 4.894l-1.072-1.072l-1.073-1.073m1.073 1.073L15.947 5.66m-6.572 4.407a1.517 1.517 0 1 0 0-3.034a1.517 1.517 0 0 0 0 3.034" />
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17.748 8.683a7.15 7.15 0 1 0-8.89 8.884m3 5.467h8.458a2.533 2.533 0 0 0 2.542-2.523v-6.606a2.189 2.189 0 0 0-1.9-2.211a2.1 2.1 0 0 0-1.152 3.969a5.994 5.994 0 0 0 0 4.428a4.674 4.674 0 0 0-7.338-1.265" />
                  <path d="M11.633 13.625a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75" />
                </g>
              </svg></span> Professional Translations
            </h2>
            <p>Experience the pinnacle of linguistic excellence with our professional translation
              services.</p>
          </div>

          <div className="text-center mt-5">
            <h2>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zm-3-6a2.5 2.5 0 0 1 2.5 2.5c0 .31-.06.61-.16.89C21.8 13.5 20.46 13 19 13c-3.31 0-6 2.69-6 6v.54c-.36-1.04-1.35-1.74-2.5-1.74c-1.5 0-2.7 1.2-2.7 2.7V22H4c-1.1 0-2-.9-2-2v-3.8h1.5c1.5 0 2.7-1.2 2.7-2.7S5 10.8 3.5 10.8H2V7a2 2 0 0 1 2-2h4V3.5C8 2.12 9.12.998 10.5.998S13 2.12 13 3.5V5h4a2 2 0 0 1 2 2v4z" />
              </svg></span> Flexible Translation Solutions
            </h2>
            <p>Our translation service offers unparalleled flexibility, accommodating projects of all
              sizes and types to meet your specific requirements.</p>
          </div>

        </div>


      </div>
      <hr className="my-5"></hr>
    </div>
  );
}
