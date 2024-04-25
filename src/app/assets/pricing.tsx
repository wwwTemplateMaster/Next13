import "../assets/css/pricing.css";

export default function Pricing() {
  return (
    <>
      <section>
        <h1
          className="text-center text-4xl md:text-5xl text-gray-800 font-bold leading-tight tracking-wide"
          style={{ fontSize: "3.5rem" }}
        >
          <span style={{ color: "#34D399" }}>Our</span> Pricing Plans
        </h1>
        <div
          className="mx-auto bg-indigo-200 w-24 h-1 mt-4 rounded"
          style={{ opacity: 0.75 }}
        ></div>
        <div className="demo">
          <div className="container">
            <div className="pricing-row">
              {/* <div className="row"> */}
              {/* <div className="pricing-col pricing-sm-6"> */}
              <div className="col-md-4 col-sm-6">
                <div className="pricingTable">
                  <div className="pricingTable-header">
                    <h3 className="title">Standard</h3>
                  </div>
                  <div className="price-value">
                    <span className="amount">₱4,950</span>
                    {/* <span className="amount" style={{ color: "#34D399" }}>
                      ₱ 4,950
                    </span> */}
                  </div>

                  {/* Options */}
                  <ul className="pricing-content">
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700 mr-3">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      1 Page Design w/ 3 Menu Layout
                    </li>

                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      Mobile Responsive
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      Admin Access
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      500 MB Storage Space
                    </li>

                    {/* <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      Messenger Chat Plugin{" "}
                    </li> */}

                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      Free Web Hosting, SSL Secured Site and Custom Domain
                      (Vercel)
                    </li>
                  </ul>

                  {/* Options */}

                  <div className="pricingTable-header">
                    <h3 className="title" style={{ cursor: "pointer" }}>
                      Start Trial
                    </h3>
                  </div>
                </div>
              </div>
              {/* <div className="pricing-col pricing-sm-6"> */}
              <div className="col-md-4 col-sm-6">
                <div className="pricingTable purple">
                  <div className="pricingTable-header">
                    <h3 className="title">Premium</h3>
                  </div>
                  <div className="price-value">
                    <span className="amount">₱8,850</span>
                    {/* <span className="duration">per month</span> */}
                  </div>
                  <ul className="pricing-content">
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700 mr-3">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      1 Page Design w/ 4 Menu Layout
                    </li>

                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      Mobile Responsive
                    </li>

                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      Admin Access
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      2Gb Storage Space{" "}
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      Google Map, 3 Custom Email
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      Messenger Chat Plugin{" "}
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      Free Web Hosting, SSL Secured Site and Custom Domain
                      (Vercel)
                    </li>
                  </ul>
                  {/* <div className="pricingTable-signup">
                    <a href="#">Start trial</a>
                  </div> */}

                  <div className="pricingTable-header">
                    <h3 className="title" style={{ cursor: "pointer" }}>
                      Start Trial
                    </h3>
                  </div>
                </div>
              </div>

              {/* 3rd */}
              {/* <div className="pricing-col pricing-sm-6"> */}
              <div className="col-md-4 col-sm-6">
                <div className="pricingTable red">
                  <div className="pricingTable-header">
                    <h3 className="title">Business</h3>
                  </div>
                  <div className="price-value">
                    <span className="amount">₱14,950</span>
                  </div>
                  <ul className="pricing-content">
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700 mr-3">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      5 Page Design w/ 5 Menu Layout{" "}
                    </li>

                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      Mobile Responsive
                    </li>

                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      Admin Access
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      10Gb Storage Space
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      Google Map, 5 Custom Email
                    </li>

                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      Messenger Chat Plugin{" "}
                    </li>

                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      Free Web Hosting, SSL Secured Site and Custom Domain
                      (Vercel)
                    </li>
                  </ul>
                  <div className="pricingTable-header">
                    <h3 className="title" style={{ cursor: "pointer" }}>
                      Start Trial
                    </h3>
                  </div>
                  {/* <div className="pricingTable-signup">
                    <a href="#">Start trial</a>
                  </div> */}
                </div>
              </div>

              {/* 3rd */}
            </div>
          </div>
        </div>
      </section>
      {/* New Pricing */}
    </>
  );
}
