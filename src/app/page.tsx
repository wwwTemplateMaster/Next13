// import Image from "next/image";

// export default function Home() {
//   return (

//     // <main className="flex min-h-screen flex-col items-center justify-between p-24">
//     //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//     //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//     //       Get started by editing&nbsp;
//     //       <code className="font-mono font-bold">src/app/page.tsx</code>
//     //     </p>
//     //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//     //       <a
//     //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//     //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //       >
//     //         By{" "}
//     //         <Image
//     //           src="/vercel.svg"
//     //           alt="Vercel Logo"
//     //           className="dark:invert"
//     //           width={100}
//     //           height={24}
//     //           priority
//     //         />
//     //       </a>
//     //     </div>
//     //   </div>

//     //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//     //     <Image
//     //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//     //       src="/next.svg"
//     //       alt="Next.js Logo"
//     //       width={180}
//     //       height={37}
//     //       priority
//     //     />
//     //   </div>

//     //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//     //     <a
//     //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2 className={`mb-3 text-2xl font-semibold`}>
//     //         Docs{" "}
//     //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//     //           -&gt;
//     //         </span>
//     //       </h2>
//     //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//     //         Find in-depth information about Next.js features and API.
//     //       </p>
//     //     </a>

//     //     <a
//     //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2 className={`mb-3 text-2xl font-semibold`}>
//     //         Learn{" "}
//     //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//     //           -&gt;
//     //         </span>
//     //       </h2>
//     //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//     //         Learn about Next.js in an interactive course with&nbsp;quizzes!
//     //       </p>
//     //     </a>

//     //     <a
//     //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2 className={`mb-3 text-2xl font-semibold`}>
//     //         Templates{" "}
//     //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//     //           -&gt;
//     //         </span>
//     //       </h2>
//     //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//     //         Explore starter templates for Next.js.
//     //       </p>
//     //     </a>

//     //     <a
//     //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//     //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <h2 className={`mb-3 text-2xl font-semibold`}>
//     //         Deploy{" "}
//     //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//     //           -&gt;
//     //         </span>
//     //       </h2>
//     //       <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
//     //         Instantly deploy your Next.js site to a shareable URL with Vercel.
//     //       </p>
//     //     </a>
//     //   </div>
//     // </main>
//   );
// }

import React from "react";

import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

import Link from "next/link";
import Pricing from "./assets/pricing";
// import MainPage from "./assets/mainpage";

import "./assets/css/varela.css";

import "./assets/css/bootstrap.min.css";

import "./assets/css/font-awesome.min.css";
import "./assets/css/style.css";

// import "./globals.css";

export default function Home() {
  return (
    <>
      {/* // Main Page */}
      <>
        <Head>
          <>
            {/* Basic Page Needs
    ================================================== */}
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <title>Web Dev Portfolio</title>
            <meta name="description" content="" />
            <meta name="author" content="" />
            <meta name="keywords" content="" />
            {/* Mobile Specific Metas
    ================================================== */}
            <meta
              name="viewport"
              content="width=device-width, minimum-scale=1.0"
            />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            {/* Fonts */}
            {/* 
    ================================================== */}
            <link
              rel="apple-touch-icon"
              sizes="144x144"
              href="/assets/img/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/assets/img/favicon_plain.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/assets/img/favicon_plain.png"
            />
            <link
              rel="icon"
              sizes="16x16"
              href="/assets/img/favicon_plain.png"
            />
            <link rel="manifest" href="/assets/img/manifest.json" />
            <link
              rel="mask-icon"
              href="/assets/img/safari-pinned-tab.svg"
              color="#5bbad5"
            />
            <meta name="theme-color" content="#ffffff" />
            {/* Stylesheets
    ================================================== */}
          </>
        </Head>

        {/* Hero Section, Background Image change in css */}
        <div id="top" className="hero background-overlay">
          {/* Name & Description */}
          <div className="hero-content">
            <h1>ByteBard Shad</h1>
            <h2 style={{ textAlign: "center" }}>aka: BBS</h2>
          </div>
          {/* /.hero-content */}
          <div className="hero-arrow page-scroll home-arrow-down">
            <a className="" href="#intro">
              <i className="fa fa-angle-double-down" aria-hidden="true" />
            </a>
          </div>
          {/* /.hero-arrow */}
        </div>
        {/* /.hero */}
        {/* End Hero */}
        {/* Header */}
        <header id="masthead" className="site-header">
          <nav
            id="primary-navigation"
            className="site-navigation"
            data-spy="affix"
          >
            <div className="container">
              <div className="navbar-header page-scroll">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#portfolio-perfect-collapse"
                  aria-expanded="false"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                {/* Name */}
                <div className="page-scroll site-logo">
                  <a href="#top">ByteBard Shad</a>
                </div>
              </div>
              {/* /.navbar-header */}
              <div
                className="main-menu collapse navbar-collapse"
                id="portfolio-perfect-collapse"
              >
                {/* Navigation */}
                <ul className="nav navbar-nav navbar-right">
                  <li className="page-scroll">
                    <a href="#top">Home</a>
                  </li>

                  <li className="page-scroll">
                    <a href="#works">Projects</a>
                  </li>

                  <li className="page-scroll">
                    <a href="#pricing">Pricing</a>
                  </li>

                  <li className="page-scroll">
                    <a href="#intro">Intro</a>
                  </li>
                  <li className="page-scroll">
                    <a href="#services">Services</a>
                  </li>
                  <li className="page-scroll">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
                {/* /.navbar-nav */}
              </div>
              {/* /.navbar-collapse */}
            </div>
          </nav>
          {/* /.primary-navigation */}
        </header>
        {/* /#header */}
        {/* End Header */}

        {/* Main content */}
        <main id="main" className="site-main">
          {/* Templates */}
          {/* Portfolio/Works section */}
          <section className="site-section section-works" id="works">
            <div className="container">
              {/* <h2>WEBSITE SAMPLES</h2> */}
              <h2 className="section-subtitle">
                <span>CHECK OUT OUR PROJECTS</span>
              </h2>
              <div className="portfolio">
                <ul className="portfolio-sorting list-inline">
                  <li>
                    <a href="#" className="active" data-group="all">
                      all
                    </a>
                  </li>
                  <li>
                    <a href="#" className="" data-group="e_portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="" data-group="e_store">
                      Online Store
                    </a>
                  </li>
                  <li>
                    <a href="#" className="" data-group="e_bookings">
                      Booking
                    </a>
                  </li>
                </ul>
                {/* /.portfolio-sorting  */}
                <div id="grid" className="row justify-content-center">
                  {/* Portfolio item */}
                  <div
                    className="col-lg-3 col-md-4 col-sm-6"
                    data-groups='["e_store"]'
                    style={{ marginBottom: 50 }}
                  >
                    {/* Adding margin-right */}
                    <div className="portfolio-item">
                      <div className="portfolio-item-thumb">
                        <img
                          src="/e_commerce1.png"
                          alt=""
                          className="img-res"
                        />
                        <a
                          href="#"
                          className="rectangle"
                          data-toggle="modal"
                          data-target="#portfolioItem1"
                        >
                          <i className="fa fa-search" />
                        </a>
                      </div>
                      {/* /.portfolio-item-thumb  */}
                      <div className="portfolio-info">
                        <h3>E-Commerce Template #1</h3>
                      </div>
                      {/* /.portfolio-info  */}
                    </div>
                  </div>
                  {/* /.col-md-3  */}
                  {/* Portfolio item */}
                  <div
                    className="col-lg-3 col-md-4 col-sm-6"
                    data-groups='["e_store"]'
                    style={{ marginBottom: 50 }}
                  >
                    <div className="portfolio-item">
                      <div className="portfolio-item-thumb">
                        <img
                          src="/e_commerce2.png"
                          alt=""
                          className="img-res"
                        />
                        <a
                          href="#"
                          className="rectangle"
                          data-toggle="modal"
                          data-target="#portfolioItem2"
                        >
                          <i className="fa fa-search" />
                        </a>
                      </div>
                      {/* /.portfolio-item-thumb  */}
                      <div className="portfolio-info">
                        <h3>E-Commerce Template #2</h3>
                      </div>
                      {/* /.portfolio-info  */}
                    </div>
                  </div>
                  {/* /.col-md-3  */}
                  {/* Portfolio item */}
                  <div
                    className="col-lg-3 col-md-4 col-sm-6"
                    data-groups='["e_store"]'
                    style={{ marginBottom: 50 }}
                  >
                    <div className="portfolio-item">
                      <div className="portfolio-item-thumb">
                        <img
                          src="/e_commerce3.png"
                          alt=""
                          className="img-res"
                        />
                        <a
                          href="#"
                          className="rectangle"
                          data-toggle="modal"
                          data-target="#portfolioItem3"
                        >
                          <i className="fa fa-search" />
                        </a>
                      </div>
                      {/* /.portfolio-item-thumb  */}
                      <div className="portfolio-info">
                        <h3>E-Commerce Template #3</h3>
                      </div>
                      {/* /.portfolio-info  */}
                    </div>
                  </div>
                  {/* /.col-md-3  */}
                  {/* Portfolio item */}
                  <div
                    className="col-lg-3 col-md-4 col-sm-6"
                    data-groups='["e_portfolio"]'
                    style={{ marginBottom: 50 }}
                  >
                    <div className="portfolio-item">
                      <div className="portfolio-item-thumb">
                        <img
                          src="/portfolio_woman.png"
                          alt=""
                          className="img-res"
                        />
                        <a
                          href="#"
                          className="rectangle"
                          data-toggle="modal"
                          data-target="#portfolioItem4"
                        >
                          <i className="fa fa-search" />
                        </a>
                      </div>
                      {/* /.portfolio-item-thumb  */}
                      <div className="portfolio-info">
                        <h3>Portfolio</h3>
                        <p>Graphics Design</p>
                      </div>
                      {/* /.portfolio-info  */}
                    </div>
                  </div>
                  {/* /.col-md-3  */}
                  {/* Portfolio item */}
                  <div
                    className="col-lg-3 col-md-4 col-sm-6"
                    data-groups='["e_bookings"]'
                    style={{ marginBottom: 50 }}
                  >
                    <div className="portfolio-item">
                      <div className="portfolio-item-thumb">
                        <img src="/hotel.png" alt="" className="img-res" />
                        <a
                          href="#"
                          className="rectangle"
                          data-toggle="modal"
                          data-target="#portfolioItem5"
                        >
                          <i className="fa fa-search" />
                        </a>
                      </div>
                      {/* /.portfolio-item-thumb  */}
                      <div className="portfolio-info">
                        <h3>Luxe Hotel</h3>
                      </div>
                      {/* /.portfolio-info  */}
                    </div>
                  </div>
                  {/* /.col-md-3  */}
                  {/* Portfolio item */}
                  <div
                    className="col-lg-3 col-md-4 col-sm-6"
                    data-groups='["e_portfolio"]'
                    style={{ marginBottom: 50 }}
                  >
                    <div className="portfolio-item">
                      <div className="portfolio-item-thumb">
                        <img src="/resume_1.png" alt="" className="img-res" />
                        <a
                          href="#"
                          className="rectangle"
                          data-toggle="modal"
                          data-target="#portfolioItem6"
                        >
                          <i className="fa fa-search" />
                        </a>
                      </div>
                      {/* /.portfolio-item-thumb  */}
                      <div className="portfolio-info">
                        <h3>Resume Website</h3>
                      </div>
                      {/* /.portfolio-info  */}
                    </div>
                  </div>
                  {/* /.col-md-3  */}
                  {/* Portfolio item */}
                  <div
                    className="col-lg-3 col-md-4 col-sm-6"
                    data-groups='["e_bookings"]'
                    style={{ marginBottom: 50 }}
                  >
                    <div className="portfolio-item">
                      <div className="portfolio-item-thumb">
                        <img src="/automobile.png" alt="" className="img-res" />
                        <a
                          href="#"
                          className="rectangle"
                          data-toggle="modal"
                          data-target="#portfolioItem7"
                        >
                          <i className="fa fa-search" />
                        </a>
                      </div>
                      {/* /.portfolio-item-thumb  */}
                      <div className="portfolio-info">
                        <h3>Automobile Website</h3>
                      </div>
                      {/* /.portfolio-info  */}
                    </div>
                  </div>
                  {/* /.col-md-3  */}
                  {/* Portfolio item */}
                  <div
                    className="col-lg-3 col-md-4 col-sm-6"
                    data-groups='["e_store"]'
                    style={{ marginBottom: 50 }}
                  >
                    <div className="portfolio-item">
                      <div className="portfolio-item-thumb">
                        <img src="/Yamifood.png" alt="" className="img-res" />
                        <a
                          href="#"
                          className="rectangle"
                          data-toggle="modal"
                          data-target="#portfolioItem8"
                        >
                          <i className="fa fa-search" />
                        </a>
                      </div>
                      {/* /.portfolio-item-thumb  */}
                      <div className="portfolio-info">
                        <h3>Yamifood Restaurant</h3>
                      </div>
                      {/* /.portfolio-info  */}
                    </div>
                  </div>
                  {/* /.col-md-3  */}
                </div>
                {/* /#grid */}
              </div>
            </div>
          </section>
          {/* End About section */}

          {/*  Pricing */}
          <section className="site-section section-pricing" id="pricing">
            <Pricing />
          </section>

          {/* Pricing */}

          {/* Intro section */}
          <section className="site-section section-hello" id="intro">
            <div className="container">
              <p className="section-subtitle">
                <span>
                  "I can't fix your WIFI, but I can build your website."
                </span>
              </p>
              <div className="row">
                <div className="col-sm-4">
                  <div className="main-service text-right">
                    <div className="rectangle">
                      <img
                        src="/javascript.png"
                        alt=""
                        style={{ width: 32, height: 32 }}
                        aria-hidden="true"
                      />
                    </div>
                    {/* /.rectangle */}
                    <h3>We Script Success</h3>
                    <p className="custom-paragraph">
                      Like JavaScript, our approach is dynamic and responsive.
                      We craft solutions that adapt and evolve, ensuring your
                      projects thrive in the digital landscape.
                    </p>
                  </div>
                  {/* /.main-service */}
                  <div className="main-service text-right">
                    <div className="rectangle">
                      <img
                        src="/html.png"
                        alt=""
                        style={{ width: 32, height: 32 }}
                      />
                    </div>
                    <h3>Foundation of Success</h3>
                    <p className="custom-paragraph">
                      HTML provides the foundation for a webpage, and we
                      prioritize clear and organized communication to ensure
                      every aspect of your project is structured for success.
                    </p>
                  </div>
                  {/* /.main-service */}
                </div>
                <div className="col-sm-4">
                  <div className="big-rectangle">
                    <img
                      src="/react.png"
                      alt=""
                      style={{ maxWidth: 206, height: "auto" }}
                    />
                  </div>
                  {/* /.big-rectangle */}
                </div>
                <div className="col-sm-4">
                  <div className="main-service text-left">
                    <div className="rectangle">
                      <img
                        src="/css.png"
                        alt=""
                        style={{ width: 32, height: 32 }}
                      />
                    </div>
                    <h3>Style Assurance</h3>
                    <p className="custom-paragraph">
                      With meticulous attention to detail, we ensure quality
                      control across every aspect of your project. From
                      functionality to cross-browser compatibility, our testing
                      processes guarantee that your specifications are met with
                      precision.
                    </p>
                  </div>
                  {/* /.main-service */}
                  <div className="main-service text-left">
                    <div className="rectangle">
                      <img
                        src="/python.png"
                        alt=""
                        style={{ width: 32, height: 32 }}
                      />
                    </div>
                    {/* /.rectangle */}
                    <h3>Code Craftsmanship</h3>
                    <p className="custom-paragraph">
                      Python emphasizes clean and elegant code, and we develop
                      meaningful digital products and experiences with design
                      thinking and creative craftsmanship.
                    </p>
                  </div>
                  {/* /.main-service */}
                </div>
              </div>
            </div>
            <div
              className="container"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/potsgres.png"
                alt=""
                width={52}
                height={52}
                style={{ margin: "0 15px", animation: "fadeIn 1s ease-out" }}
              />
              <img
                src="/node.png"
                alt=""
                width={52}
                height={52}
                style={{
                  margin: "0 15px",
                  animation: "fadeIn 1s ease-out 0.2s",
                }}
              />
              <img
                src="/nextjs.png"
                alt=""
                width={32}
                height={32}
                style={{
                  margin: "0 15px",
                  animation: "fadeIn 1s ease-out 0.4s",
                }}
              />
              <img
                src="/tailwind.png"
                alt=""
                width={32}
                height={32}
                style={{
                  margin: "0 15px",
                  animation: "fadeIn 1s ease-out 0.6s",
                }}
              />
              <img
                src="/mysql.png"
                alt=""
                width={52}
                height={52}
                style={{
                  margin: "0 15px",
                  animation: "fadeIn 1s ease-out 0.8s",
                }}
              />
            </div>
          </section>
          {/* /.section-hello */}
          {/* Intro */}

          {/* Skills section */}
          <section className="site-section section-skills">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h2>FULLSTACK WEB DEVELOPMENT</h2>
                  <div className="rounded-image">
                    <img
                      src="/fullstack_web.jpg"
                      width="100%"
                      height="100%"
                      alt="Fullstack Image"
                    />
                  </div>
                  {/* <img src="/assets/img/web_design.jpg" width="100%" height="100%" alt="Fullstack Image"> */}
                </div>
                <div className="col-sm-6">
                  <h2>Core Strenghts</h2>
                  <div className="progress-group">
                    <p>Front-End Development:</p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={100}
                      />
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.progress-group */}
                  <div className="progress-group">
                    <p>Back-End Development</p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={100}
                      />
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.progress-group */}
                  <div className="progress-group">
                    <p>Mobile App Development</p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={95}
                      />
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.progress-group */}
                  <div className="progress-group">
                    <p>Database Management:</p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={100}
                      />
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.progress-group */}
                  <div className="progress-group">
                    <p>Version Control &amp; Deployment</p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={90}
                      />
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.progress-group */}
                </div>
              </div>
            </div>
          </section>
          {/* /.section-skills */}
          {/* End Skills section */}
          {/* End Counters section */}
          {/* Services section */}
          <section className="site-section section-services" id="services">
            <div className="container">
              <div className="carousel slide" id="services-carousel">
                <div className="item-controls text-center">
                  <a
                    href="#services-carousel"
                    className="left btn carousel-control"
                    data-slide="prev"
                  >
                    <i className="fa fa-angle-left" aria-hidden="true" />
                  </a>
                  <a
                    href="#services-carousel"
                    className="right btn carousel-control"
                    data-slide="next"
                  >
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </a>
                </div>
                {/* /.item-controls */}
                <div className="carousel-indicators nav-tabs text-center">
                  <a
                    data-target="#services-carousel"
                    href="#"
                    data-slide-to={0}
                    className="active"
                  >
                    <div className="col-xs-4 col-sm-fifth">
                      <div className="service">
                        <div className="rectangle">
                          <i className="fa fa-desktop" aria-hidden="true" />
                        </div>
                        <p className="hidden-xs">Front-End Development</p>
                      </div>
                    </div>{" "}
                  </a>
                  {/* /.item */}
                  <a
                    data-target="#services-carousel"
                    href="#"
                    data-slide-to={1}
                  >
                    <div className="col-xs-4 col-sm-fifth">
                      <div className="service">
                        <div className="rectangle">
                          <i className="fa fa-server" aria-hidden="true" />
                        </div>
                        <p className="hidden-xs">Back-End Development</p>
                      </div>
                    </div>{" "}
                  </a>
                  {/* /.item */}
                  <a
                    data-target="#services-carousel"
                    href="#"
                    data-slide-to={2}
                  >
                    <div className="col-xs-4 col-sm-fifth">
                      <div className="service">
                        <div className="rectangle">
                          <i className="fa fa-tablet" aria-hidden="true" />
                        </div>
                        <p className="hidden-xs">Mobile App Development</p>
                      </div>
                    </div>{" "}
                  </a>
                  {/* /.item */}
                  <a
                    data-target="#services-carousel"
                    href="#"
                    data-slide-to={3}
                  >
                    <div className="col-xs-4 col-sm-fifth">
                      <div className="service">
                        <div className="rectangle">
                          <i className="fa fa-database" aria-hidden="true" />
                        </div>
                        <p className="hidden-xs">Database Management</p>
                      </div>
                    </div>{" "}
                  </a>
                  {/* /.item */}
                  <a
                    data-target="#services-carousel"
                    href="#"
                    data-slide-to={4}
                  >
                    <div className="col-xs-4 col-sm-fifth">
                      <div className="service">
                        <div className="rectangle">
                          <i className="fa fa-code-fork" aria-hidden="true" />
                        </div>
                        <p className="hidden-xs">
                          Version Control &amp; Deployment
                        </p>
                      </div>
                    </div>{" "}
                  </a>
                  {/* /.item */}
                </div>
                {/* /.carousel-indicators */}
                <div className="carousel-inner">
                  {/* Item 1 */}
                  <div id="item1" className="item tab-pane active">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="service-info">
                          <h3 className="service-title">
                            Front-End Development:
                          </h3>
                          <p>
                            We believe content is king. Flashy visuals are
                            great, but they shouldn't overshadow the message. We
                            design around your actual content, not dummy text,
                            to ensure your website is both beautiful and
                            functional. This avoids cluttered layouts and
                            ensures your site works perfectly once real data is
                            in place. Our content-first approach keeps users
                            engaged and informed, leading to a better experience
                            for everyone.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <img
                          src="/web_design.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* /.item */}
                  {/* Item 2 */}
                  <div id="item2" className="item tab-pane">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="service-info">
                          <h3 className="service-title">
                            Back-End Development
                          </h3>
                          <p>
                            A stunning design is just the beginning. We take
                            your vision and make it a reality with robust
                            back-end development. We build the hidden engine
                            that powers your website, ensuring seamless
                            functionality and a flawless user experience. From
                            databases to servers, we handle the complex
                            infrastructure so you can focus on what matters most
                            – your business. With our back-end expertise, your
                            website won't just look great, it will run
                            flawlessly.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <img
                          src="/web_development.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* /.item */}
                  {/* Item 3 */}
                  <div id="item3" className="item tab-pane">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="service-info">
                          <h3 className="service-title">
                            Mobile App Development
                          </h3>
                          <p>
                            Mobile App Development: Reach Your Audience
                            Anywhere, Anytime. In today's mobile-driven world, a
                            strong app is essential. We create exceptional
                            mobile experiences that connect you with your
                            audience on their favorite devices. Our team crafts
                            intuitive, feature-rich apps that are visually
                            stunning and a joy to use. Expand your reach, boost
                            engagement, and take your business to the next level
                            with a powerful mobile app.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <img
                          src="/mobile_app.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* /.item */}
                  {/* Item 4 */}
                  <div id="item4" className="item tab-pane">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="service-info">
                          <h3 className="service-title">
                            Database Management:
                          </h3>
                          <p>
                            Data is the lifeblood of your business. A
                            well-designed database management services to ensure
                            your data is secure, organized, and accessible. We
                            handle everything from design and implementation to
                            maintenance and optimization, allowing you to focus
                            on leveraging your data for growth and success. With
                            our reliable database solutions, you can trust that
                            your valuable information is always in good hands.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <img
                          src="/database.jpg"
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* /.item */}
                  {/* Item 5 */}
                  <div id="item5" className="item tab-pane">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="service-info">
                          <h3 className="service-title">
                            Version Control &amp; Deployment
                          </h3>
                          <p>
                            Keep your projects on track and your team in sync.
                            We utilize industry-leading version control systems
                            like Git to manage code changes, facilitate
                            collaboration, and ensure project history is always
                            accessible. Our streamlined deployment processes get
                            your updates and new features live quickly and
                            efficiently. With our version control and deployment
                            expertise, you can focus on building great things,
                            not managing the technical details.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <img src="/git.jpg" className="img-responsive" alt="" />
                      </div>
                    </div>
                  </div>
                  {/* /.item */}
                </div>
                {/* /.carousel-inner */}
              </div>
              {/* /.carousel */}
            </div>
          </section>
          {/* /.section-services */}
          <section className="site-section section-team" id="team">
            {/* Me section */}
            <section className="section-background section-me background-overlay text-center">
              <div className="container page-scroll">
                <h2>Ready to Start Your Project?</h2>
                <p></p>
                <p>
                  We'd love to hear about it! Contact us today for a free
                  consultation.
                </p>
                <p />
                <a href="#contact" className="btn">
                  Get Started Now
                </a>
              </div>
            </section>
            {/* End Contacts section */}
            {/* Social Networks section */}
            <section className="section-networks blue-bg">
              <div className="container">
                <a href="#" className="rectangle">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="rectangle">
                  <i className="fa fa-linkedin" />
                </a>
                <a href="#" className="rectangle">
                  <i className="fa fa-github" />
                </a>
                <a href="#" className="rectangle">
                  <i className="fa fa-envelope" />
                </a>
              </div>
            </section>
            {/* /.section-networks*/}
            {/* End Social Networks section */}
          </section>
        </main>
        {/* /#main */}
        {/* End Main content */}
        {/* Contacts section */}
        <section className="site-section section-contact" id="contact">
          <div className="container">
            <h2 className="section-subtitle">
              <span>CONTACT US</span>
            </h2>
            <div className="row">
              <form>
                <div className="col-md-4">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    // required=""
                  />
                </div>
                <div className="col-md-4">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    // required=""
                  />
                </div>
                <div className="col-md-4">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Subject"
                    // required=""
                  />
                </div>
                <div className="col-sm-12">
                  <textarea
                    className="form-control"
                    placeholder="Your Message"
                    // required=""
                    defaultValue={""}
                  />
                </div>
                <div className="col-sm-12">
                  <button className="btn btn-inverted">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* /.section-contact*/}
        {/* Footer */}
        <footer id="colophon" className="site-footer">
          <div className="container-fluid">
            <ul className="list-unstyled list-inline">
              <li className="page-scroll">
                <a href="#top">Home</a>
              </li>

              <li className="page-scroll">
                <a href="#works">Projects</a>
              </li>

              <li className="page-scroll">
                <a href="#intro">Intro</a>
              </li>

              <li className="page-scroll">
                <a href="#services">Services</a>
              </li>
              <li className="page-scroll">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className="page-scroll">
              <a href="#top" className="rectangle">
                <i className="fa fa-angle-double-up" />
              </a>
            </div>
          </div>
          <div className="container text-center">
            <p className="copyright">
              ©
              <a href="#home" target="_blank">
                ByteBard Shad
              </a>{" "}
              - 2024
            </p>
          </div>
        </footer>
        {/* /#footer */}
        {/* End Footer */}
        {/* Modals */}
        <div
          id="portfolioItem1"
          className="modal fade fade-scale"
          role="dialog"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-end">
                {" "}
                {/* Align items to the end */}
                <a className="rectangle" data-dismiss="modal">
                  <i className="fa fa-times" />
                </a>
              </div>
              <div className="modal-body">
                {/* Set width and height of the iframe directly */}
                <iframe
                  id="websiteIframe"
                  // src="https://wwwtemplatemaster.github.io/E-store-1/"
                  frameBorder={0}
                  style={{ width: "100%", height: 600 }}
                />
              </div>
              <div className="modal-footer">
                <a href="#" className="btn">
                  Visit Page
                </a>
              </div>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
        {/* /.modal */}
        <div
          id="portfolioItem2"
          className="modal fade fade-scale"
          role="dialog"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-end">
                {/* Align items to the end */}
                <a className="rectangle" data-dismiss="modal">
                  <i className="fa fa-times" />
                </a>
              </div>
              <div className="modal-body">
                <iframe
                  id="websiteIframe"
                  // src="https://wwwtemplatemaster.github.io/E-store-2/"
                  frameBorder={0}
                  style={{ width: "100%", height: 600 }}
                />
              </div>
              <div className="modal-footer">
                <a href="#" className="btn">
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div
          id="portfolioItem3"
          className="modal fade fade-scale"
          role="dialog"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-end">
                {/* Align items to the end */}
                <a className="rectangle" data-dismiss="modal">
                  <i className="fa fa-times" />
                </a>
              </div>
              <div className="modal-body">
                <iframe
                  id="websiteIframe"
                  // src="https://wwwtemplatemaster.github.io/E-store-3/"
                  frameBorder={0}
                  style={{ width: "100%", height: 600 }}
                />
              </div>
              <div className="modal-footer">
                <a href="#" className="btn">
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div
          id="portfolioItem4"
          className="modal fade fade-scale"
          role="dialog"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-end">
                {/* Align items to the end */}
                <a className="rectangle" data-dismiss="modal">
                  <i className="fa fa-times" />
                </a>
              </div>
              <div className="modal-body">
                <iframe
                  id="websiteIframe"
                  // src="https://wwwtemplatemaster.github.io/Portfolio-1/"
                  frameBorder={0}
                  style={{ width: "100%", height: 600 }}
                />
              </div>
              <div className="modal-footer">
                <a href="#" className="btn">
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div
          id="portfolioItem5"
          className="modal fade fade-scale"
          role="dialog"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-end">
                <a className="rectangle" data-dismiss="modal">
                  <i className="fa fa-times" />
                </a>
              </div>
              <div className="modal-body">
                <iframe
                  id="websiteIframe"
                  // src="https://wwwtemplatemaster.github.io/Luxe_Hotel/"
                  frameBorder={0}
                  style={{ width: "100%", height: 600 }}
                />
              </div>
              <div className="modal-footer">
                <a href="#" className="btn">
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div
          id="portfolioItem6"
          className="modal fade fade-scale"
          role="dialog"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-end">
                <a className="rectangle" data-dismiss="modal">
                  <i className="fa fa-times" />
                </a>
              </div>
              <div className="modal-body">
                <iframe
                  id="websiteIframe"
                  // src="https://wwwtemplatemaster.github.io/Resume_1/"
                  frameBorder={0}
                  style={{ width: "100%", height: 600 }}
                />
              </div>
              <div className="modal-footer">
                <a href="#" className="btn">
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div
          id="portfolioItem7"
          className="modal fade fade-scale"
          role="dialog"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-end">
                <a className="rectangle" data-dismiss="modal">
                  <i className="fa fa-times" />
                </a>
              </div>
              <div className="modal-body">
                <iframe
                  id="websiteIframe"
                  // src="https://wwwtemplatemaster.github.io/Automobile/"
                  frameBorder={0}
                  style={{ width: "100%", height: 600 }}
                />
              </div>
              <div className="modal-footer">
                <a href="#" className="btn">
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div
          id="portfolioItem8"
          className="modal fade fade-scale"
          role="dialog"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-end">
                <a className="rectangle" data-dismiss="modal">
                  <i className="fa fa-times" />
                </a>
              </div>
              <div className="modal-body">
                <iframe
                  id="websiteIframe"
                  // src="https://wwwtemplatemaster.github.io/Yamifood_restaurant/"
                  frameBorder={0}
                  style={{ width: "100%", height: 600 }}
                />
              </div>
              <div className="modal-footer">
                <a href="#" className="btn">
                  Visit Page
                </a>
              </div>
            </div>
          </div>
        </div>

        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/bootstrap.min.js" />
        <Script src="/bootstrap-progressbar.min.js" />
        <Script src="/jquery.countTo.min.js" />
        <Script src="/jquery.easing.min.js" />
        <Script src="/jquery.shuffle.min.js" />
        <Script src="/slick.min.js" />
        <Script src="/touchswipe.min.js" />
        <Script src="/script.js" />
      </>
      {/* // Main Page */}
      {/* <Pricing /> */}
    </>
  );
}

{
  /* // return (
//   <>
//        {/* <Pricing /> */
}
{
  /* //         </> */
}
{
  /* //   );
  } */
}
