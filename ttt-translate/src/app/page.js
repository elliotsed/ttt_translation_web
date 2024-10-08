"use client"
import React, { useState } from 'react';
import Image from "next/image";
import LanguageChanger from "./[locale]/components/languageChanger"


export default function Home() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    setSubmitted(true);
    console.log(formData);
    event.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitted(false);
      } else {
        alert(data.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSubmitted(false);

      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the email, please try again');
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);

    }
  };

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
          <div className="d-none d-md-block">
            <LanguageChanger />
          </div>

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
                <a className="nav-link mx-2" href="#partner">Partners</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#contact">Contact</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>



      {/*Carousel Start*/}
      <div id="carouselExampleAutoplaying" data-bs-ride="carousel" className="carousel slide d-md-none">

        <div className="carousel-inner" style={{ marginTop: "96px" }}>
          <div className="carousel-item active" data-bs-interval="5000">
            <img src="/co-travailleur.jpg" className="d-block w-100 imgCarousel" alt="..." />

            <div className="text-dark d-none d-md-block carousel-caption">
              <p><span className="custom-title fw-bold">Highly Professional</span> <br /> Translation Services <br /> You Can Trust
              </p>
            </div>

            <div className="text-dark d-md-none carousel-caption">
              <p><span className="custom-title fw-bold">Highly Professional</span> <br /> Translation Services
              </p>
            </div>

          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="/manwithlaptop.jpg" className="d-block w-100 imgCarousel" alt="..." />

            <div className="text-dark d-none d-md-block carousel-caption ">
              <p><span className="custom-title fw-bold">Open Your Business</span> <br /> To The Whole World</p>
            </div>

            <div className="text-dark d-md-none carousel-caption ">
              <p><span className="custom-title fw-bold">Open Your Business</span> <br /> To The World</p>
            </div>

          </div>
          <div className="carousel-item " data-bs-interval="5000">
            <img src="/carousel3.jpg" className="d-block w-100 imgCarousel" alt="..." />

            <div className="text-dark d-none d-md-block carousel-caption">
              <p><span className="custom-title fw-bold">Work Easily</span> <br /> With Our Professional <br /> Translation Agency
              </p>
            </div>

            <div className="text-dark d-md-none carousel-caption">
              <p><span className="custom-title fw-bold">Work Easily</span> <br /> With Our Agency
              </p>
            </div>

          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>

      <div id="carouselExampleAutoplaying2" data-bs-ride="carousel" className="carousel slide d-none d-md-block">

        <div className="carousel-inner" style={{ marginTop: "96px" }}>
          <div className="carousel-item" data-bs-interval="5000">
            <img src="/co-travailleurz.jpg" className="d-block w-100 imgCarousel" alt="..." />

            <div className="text-dark d-none d-md-block carousel-caption">
              <p><span className="custom-title fw-bold">Highly Professional</span> <br /> Translation Services <br /> You Can Trust
              </p>
            </div>

            <div className="text-dark d-md-none carousel-caption">
              <p><span className="custom-title fw-bold">Highly Professional</span> <br /> Translation Services
              </p>
            </div>

          </div>
          <div className="carousel-item active" data-bs-interval="5000">
            <img src="/manwithlaptopz.jpg" className="d-block w-100 imgCarousel" alt="..." />

            <div className="text-dark d-none d-md-block carousel-caption ">
              <p><span className="custom-title fw-bold">Open Your Business</span> <br /> To The Whole World</p>
            </div>

            <div className="text-dark d-md-none carousel-caption ">
              <p><span className="custom-title fw-bold">Open Your Business</span> <br /> To The World</p>
            </div>

          </div>
          <div className="carousel-item " data-bs-interval="5000">
            <img src="/carousel3z.jpg" className="d-block w-100 imgCarousel" alt="..." />

            <div className="text-dark d-none d-md-block carousel-caption">
              <p><span className="custom-title fw-bold">Work Easily</span> <br /> With Our Professional <br /> Translation Agency
              </p>
            </div>

            <div className="text-dark d-md-none carousel-caption">
              <p><span className="custom-title fw-bold">Work Easily</span> <br /> With Our Agency
              </p>
            </div>

          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>

      <div className="mt-3 w-50 d-md-none d-lg-none">
        <LanguageChanger />
      </div>

      {/* Services offered and type of translation */}
      <div className="row mt-5">
        <h1 className="mb-3 custom-title fw-bold">We offer a Wide Range of Translation Services</h1>

        <div className="col-lg-6 col-md-6 mt-2">
          <p>
            Our team of professional translators offers a comprehensive range of translation services to meet all your needs. Whether you have financial, commercial, marketing, legal, or religious documents to translate, we are here to help.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 mt-2">
          <p>
            We also specialize in subtitling services, ensuring accurate and timely provision of subtitles for video content. Our goal is to enhance accessibility for diverse audiences and improve overall comprehension of the content.
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-2" id="services">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title custom-title fw-bold">Documents Translations</h5>
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
                </svg> Legal documents
                  translations</li>
                <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 20 20">
                  <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                </svg> Bible/Faith-related Content Translations</li>
                <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 20 20">
                  <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                </svg> Certified Translations: CV, Certificates, Academic and Administrative Documents Translations and Adaptations</li>
                <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  viewBox="0 0 20 20">
                  <path fill="green" d="m14.83 4.89l1.34.94l-5.81 8.38H9.02L5.78 9.67l1.34-1.25l2.57 2.4z" />
                </svg> Other types of translations</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-2">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title custom-title fw-bold">Localization Services</h5>
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
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 mt-2">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title custom-title fw-bold">Transcription Services</h5>
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
              <h5 className="card-title custom-title fw-bold">Subtitling</h5>
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

      {/*Section Why Choose US*/}
      <div className="row mt-5" id="whyUs">
        <div className="col-lg-6 col-md-6 d-none d-md-block">
          <img className="w-100 h-100 img-fluid" src="/negociationMade.jpg"
            alt="Images représentant des hommes d'affaire se serrant la main" style={{ borderRadius: "10px" }} />
        </div>
        <div className="col-lg-6 col-md-6 d-none d-md-block d-flex justify-content-center align-items-center mt-5">
          <div className="align-items-center">
            <h1 className="text-center fw-bold custom-title">Why Choose US?</h1>
            <h2 className="text-center custom-title mt-5" style={{ fontSize: "30px" }}><span><svg xmlns="http://www.w3.org/2000/svg" width="50"
              height="50" viewBox="0 0 32 32">
              <path fill="currentColor"
                d="m29.482 8.624l-10-5.5a1 1 0 0 0-.964 0l-10 5.5a1 1 0 0 0 0 1.752L18 15.591V26.31l-3.036-1.67L14 26.391l4.518 2.485a.998.998 0 0 0 .964 0l10-5.5A1 1 0 0 0 30 22.5v-13a1 1 0 0 0-.518-.876M19 5.142L26.925 9.5L19 13.858L11.075 9.5Zm9 16.767l-8 4.4V15.59l8-4.4Z" />
              <path fill="currentColor" d="M10 16H2v-2h8zm2 8H4v-2h8zm2-4H6v-2h8z" />
            </svg></span> Fast Delivery</h2>
            <p className="text-center">Your documents are promptly translated and returned to you, maintaining efficiency
              without compromising quality.</p>

            <h2 className="text-center custom-title mt-5" style={{ fontSize: "30px" }}>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12.408.966H9.375m1.517 0v2.6M5.07 2.749L3.997 3.822L2.925 4.894m1.072-1.072L5.836 5.66M1.142 9.2v3.033m0-1.517h2.6m-.817 5.822l1.072 1.073l1.073 1.072m-1.073-1.072l1.839-1.839M18.858 4.894l-1.072-1.072l-1.073-1.073m1.073 1.073L15.947 5.66m-6.572 4.407a1.517 1.517 0 1 0 0-3.034a1.517 1.517 0 0 0 0 3.034" />
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M17.748 8.683a7.15 7.15 0 1 0-8.89 8.884m3 5.467h8.458a2.533 2.533 0 0 0 2.542-2.523v-6.606a2.189 2.189 0 0 0-1.9-2.211a2.1 2.1 0 0 0-1.152 3.969a5.994 5.994 0 0 0 0 4.428a4.674 4.674 0 0 0-7.338-1.265" />
                  <path d="M11.633 13.625a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75" />
                </g>
              </svg></span> Professional Translations
            </h2>
            <p className="text-center">Experience the pinnacle of linguistic excellence with our professional translation
              services, where every word is meticulously crafted by expert linguists, ensuring flawless communication
              across languages.</p>

            <h2 className="text-center custom-title mt-5" style={{ fontSize: "30px" }}>
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
              <h2 className="text-center custom-title fw-bold" style={{ fontSize: "40px" }}>Why Choose US?</h2>
            </div>
          </div>

          <div className="text-center mt-5">
            <h2 className='custom-title'><span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
              <path fill="currentColor"
                d="m29.482 8.624l-10-5.5a1 1 0 0 0-.964 0l-10 5.5a1 1 0 0 0 0 1.752L18 15.591V26.31l-3.036-1.67L14 26.391l4.518 2.485a.998.998 0 0 0 .964 0l10-5.5A1 1 0 0 0 30 22.5v-13a1 1 0 0 0-.518-.876M19 5.142L26.925 9.5L19 13.858L11.075 9.5Zm9 16.767l-8 4.4V15.59l8-4.4Z" />
              <path fill="currentColor" d="M10 16H2v-2h8zm2 8H4v-2h8zm2-4H6v-2h8z" />
            </svg></span> Fast Delivery</h2>
            <p>Your documents are promptly translated and returned to you, maintaining efficiency
              without compromising quality.</p>
          </div>

          <div className="text-center mt-5">
            <h2 className='custom-title'>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M12.408.966H9.375m1.517 0v2.6M5.07 2.749L3.997 3.822L2.925 4.894m1.072-1.072L5.836 5.66M1.142 9.2v3.033m0-1.517h2.6m-.817 5.822l1.072 1.073l1.073 1.072m-1.073-1.072l1.839-1.839M18.858 4.894l-1.072-1.072l-1.073-1.073m1.073 1.073L15.947 5.66m-6.572 4.407a1.517 1.517 0 1 0 0-3.034a1.517 1.517 0 0 0 0 3.034" />
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M17.748 8.683a7.15 7.15 0 1 0-8.89 8.884m3 5.467h8.458a2.533 2.533 0 0 0 2.542-2.523v-6.606a2.189 2.189 0 0 0-1.9-2.211a2.1 2.1 0 0 0-1.152 3.969a5.994 5.994 0 0 0 0 4.428a4.674 4.674 0 0 0-7.338-1.265" />
                  <path d="M11.633 13.625a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75" />
                </g>
              </svg></span> Professional Translations
            </h2>
            <p>Experience the pinnacle of linguistic excellence with our professional translation
              services.</p>
          </div>

          <div className="text-center mt-5">
            <h2 className='custom-title'>
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

      {/*Global companies that trust us*/}
      <div className="row mt-5" id="partner">
        <h1 className="text-center custom-title fw-bold">Global Companies That Work With US</h1>
        <div className='row mt-3'>
          <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
            <a className="d-flex justify-content-center" href="https://www.globalvoicesmedia.com/" target="blank">
              <img src="/global_voices_media_logo.jpeg" className="d-block w-75" alt="..." />
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
            <a className="d-flex justify-content-center" href="https://www.primefocustechnologies.com/" target="blank">
              <img src="/PFT (2)_0.jpg" className="d-block w-75" alt="..." />
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
            <a className="d-flex justify-content-center" href="https://www.productionhub.com/profile/christian-dubbing-studio" target="blank">
              <img src="/cds.jpeg" className="d-block w-75" alt="..." />
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
            <a className="d-flex justify-content-center" href="https://thetranslationgate.com/" target="blank">
              <img src="/tgate.webp" className="d-block w-75" alt="..." />
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
            <a className="d-flex justify-content-center" href="https://www.captioningstar.com/" target="blank">
              <img src="/captioningstar_logo.jpeg" className="d-block w-75" alt="..." />
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
            <a className="d-flex justify-content-center" href="https://viax-translations.com/" target="blank">
              <img src="/viax_corporate_language_solutions_logo.jpeg" className="d-block w-75" alt="..." />
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
            <a className="d-flex justify-content-center" href="https://www.somyatrans.com/" target="blank">
              <img src="/somya.png" className="d-block w-75" alt="..." />
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
            <a className="d-flex justify-content-center" href="https://www.verztec.com/index.php/us/" target="blank">
              <img src="/Verztec.jpg" className="d-block w-75" alt="..." />
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
            <a className="d-flex justify-content-center" href="https://www.transcriptionstar.com/" target="blank">
              <img src="/transstar.jpeg" className="d-block w-75" alt="..." />
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
            <a className="d-flex justify-content-center" href="https://lexico-translations.com/home-2/" target="blank">
              <img src="/lexico.png" className="d-block w-75" alt="..." />
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
            <a className="d-flex justify-content-center" href="https://lwtcommunications.com/" target="blank">
              <img src="/lwt.jpeg" className="d-block w-75" alt="..." />
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
            <a className="d-flex justify-content-center" href="https://www.bylanguages.com/" target="blank">
              <img src="/bylanguages.png" className="d-block w-75" alt="..." />
            </a>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
            <a className="d-flex justify-content-center" href="https://www.verbolabs.com/" target="blank">
              <img src="/verbo.png" className="d-block w-75" alt="..." />
            </a>
          </div>
        </div>

      </div>
      <hr className="my-5"></hr>



      {/*Mot du CEO*/}
      <div className="row mt-5" id="ceo">
        <img src="/langLG.jpg" alt="" className="img-fluid" />

        <div className="mt-5 d-flex justify-content-center">
          <div className="card w-75">
            <div className="card-body">
              <blockquote className="blockquote blockquote-custom bg-white px-3 pt-4">
                <div className="blockquote-custom-icon bg-info shadow-1-strong">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                    <path fill="white"
                      d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054q.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054q.094-.558.31-.992q.217-.434.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                  </svg>
                </div>
                <p className="mb-0 mt-2 fst-italic">
                  The vision our team at TTT ENGLISH MISSION CENTER has so preciously kept over the years has been to maximize the efficiency of all our services and customer experience while always topping quality. And it&apos;s so exciting to know that this vision will continue to drive us for the years to come.
                </p>
                <footer className="blockquote-footer pt-4 mt-4 border-top">
                  Léon Bichat |
                  <cite title="Source Title">Founder & CEO</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

      </div>
      <hr className="my-5"></hr>

      {/*Contact US Now*/}
      <section className="mb-4">
        <div className="row" id="contact">
          <div className="col-md-6">
            <img src="/contactUs.jpg" className="w-100" alt="" style={{ borderRadius: "10px" }} />
            <h1 className="text-center mt-3 custom-title fw-bold">Do You Have Any Questions?</h1>
            <p className="text-center mx-auto mb-5">Please do not hesitate to contact us
              directly. <br />
              Our team will come back to you within a matter of hours to help you.</p>
          </div>

          <div className="col-md-6 mb-md-0 mb-5">

            <form id="contact-form" name="contact-form" onSubmit={handleSubmit} method="POST">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-outline mb-4">
                    <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                    <label className="form-label" htmlFor="name">Your name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-outline mb-4">
                    <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                    <label className="form-label" htmlFor="email">Your email</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-outline mb-4">
                    <input type="text" id="subject" name="subject" className="form-control" value={formData.subject} onChange={handleChange} required />
                    <label className="form-label" htmlFor="subject">Subject</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-outline mb-4">
                    <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                    <label className="form-label" htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>

              {!submitted && <button type="submit" className="btn text-white" style={{ backgroundColor: "#45526e" }}>Submit</button>}
              {submitted && <p className='text-info'>Sending...</p>}
              <div className="status"></div>
            </form>
          </div>


        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#45526e", borderRadius: "10px" }}>
        <div className="container-fluid p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  TTT English Mission Center </h6>
                <p>
                  Our mission is to provide high-quality translation and language services to clients worldwide. With a focus on accuracy, professionalism, and customer satisfaction, we strive to exceed your expectations in every project.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <g fill="white">
                    <path
                      d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06z" />
                    <path
                      d="m12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086z" />
                  </g>
                </svg> Calavi, Benin, Africa</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                  <path fill="white"
                    d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56m-14.18 92.63l-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26" />
                </svg> tttmission@gmail.com</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="white"
                    d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3" />
                </svg> 00 229 946 051 00</p>
              </div>
            </div>
          </section>

          <hr className="my-3"></hr>

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2024 Copyright - TTT English Mission
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                {/* Facebook */}
                <a className="btn btn-outline-light btn-floating m-1" role="button"><svg
                  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="white"
                    d="M14.2 2.875A4.625 4.625 0 0 0 9.575 7.5v2.575H7.1c-.124 0-.225.1-.225.225v3.4c0 .124.1.225.225.225h2.475V20.9c0 .124.1.225.225.225h3.4c.124 0 .225-.1.225-.225v-6.975h2.497c.103 0 .193-.07.218-.17l.85-3.4a.225.225 0 0 0-.218-.28h-3.347V7.5a.775.775 0 0 1 .775-.775h2.6c.124 0 .225-.1.225-.225V3.1c0-.124-.1-.225-.225-.225z" />
                </svg></a>

                {/* Twitter */}
                <a className="btn btn-outline-light btn-floating m-1" role="button"><svg
                  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="white"
                    d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
                </svg></a>

                {/* Google */}
                <a className="btn btn-outline-light btn-floating m-1" role="button"><svg
                  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="white"
                    d="M6 12a6 6 0 0 0 11.659 2H12v-4h9.805v4H21.8c-.927 4.564-4.962 8-9.8 8c-5.523 0-10-4.477-10-10S6.477 2 12 2a9.99 9.99 0 0 1 8.282 4.393l-3.278 2.295A6 6 0 0 0 6 12" />
                </svg></a>

                {/* Instagram */}
                <a className="btn btn-outline-light btn-floating m-1" role="button"><svg
                  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="white"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                </svg></a>
              </div>
            </div>
          </section>
        </div>
      </footer>

    </div>
  );
}
