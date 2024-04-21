"use client";

import { useState } from "react";

// Carousel Slide

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Carousel Slide

// MOdal Expand

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Separator } from "@/components/ui/separator";
import { preprocessDescription, preprocessBulletPoints } from "./format";

// MOdal Expand

// Tooltip

import { Tooltip } from "react-tooltip";

// Tooltip

// Tabs

import { Feature_tabs } from "./listng_tabs/feature_tabs";

import { Rating_Tabs } from "./listng_tabs/rating_tabs";

// Tabs

import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Avatar } from "@/components/ui/avatar";

interface Product {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;

  host: {
    name: string;
    avatarUrl: string;
  };
}

// Badge

const VerifiedIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
    />
  </svg>
);

const MerchantIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14l9-5-9-5-9 5 9 5zM5.2 18c1.1 1.6 2.8 2.5 4.7 2.5s3.6-.9 4.7-2.5m-9.4 0a5.56 5.56 0 0 1 4.7-2.5 5.56 5.56 0 0 1 4.7 2.5"
    />
  </svg>
);

// Badge

// See More/ Expand

// const ProductDescription = ({
//   productDescription,
//   isExpanded,
//   toggleExpansion,
//   shortenedDescription,
// }) => {
//   return (
//     <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
//       {/* // <div style={{ paddingLeft: "8px", paddingRight: "8px" }}> */}
//       <p style={{ margin: 0 }}>
//         {isExpanded ? productDescription : shortenedDescription}...
//         <button onClick={toggleExpansion}>
//           {isExpanded ? "See Less" : "See More"}
//         </button>
//       </p>
//     </div>
//   );
// };

// See More/ Expand

const ProductListing = ({ product }: { product?: Product }) => {
  // See More/ Expand

  // Fuck this shit
  // const [isExpanded, setIsExpanded] = useState(false);

  // // Toggle expansion and popover visibility
  // const toggleExpansion = () => {
  //   setIsExpanded(!isExpanded);
  // };

  // Fuck this shit
  // const [isExpanded, setIsExpanded] = useState(false);
  // const [parentHeight, setParentHeight] = useState("400px"); // Initial height

  // const toggleExpansion = () => {
  //   setIsExpanded(!isExpanded);
  //   setParentHeight(isExpanded ? "400px" : "auto"); // Toggle between initial and expanded height
  // };

  // See More/ Expand

  // Provide default object if product is undefined
  const safeProduct: Product = product || {
    title: "Title",

    description:
      "Samsung X, Type 2-2023 Model. \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    bulletPoints: ["Point 1", "Point 2", "Point 3"],
    // description: "Samsung X, Type 2-2023 Model",

    // description:
    //   "Samsung X, Type 2-2023 Model. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 9.99,
    rating: 4.5,
    imageUrl1:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    imageUrl2:
      "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    imageUrl3:
      "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    imageUrl4:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    imageUrl5:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",

    // imageUrl:
    //   "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    host: {
      name: "UN",
      avatarUrl: "https://github.com/shadcn.png",

      // "/public/images/user.jpg",
      // avatarUrl: "/images/user.jpg",
    },
  };

  // // Expand

  // Split the description into words
  const words = safeProduct.description.split(" ");

  // Initial number of words to show
  const initialWordsToShow = 5;

  // Join the initial words to create a shortened description
  const shortenedDescription = words.slice(0, initialWordsToShow).join(" ");

  // // // Split the description into an array of words
  // const words = safeProduct.description.split(" ");

  // // // Join the first 10 words back together
  // const shortenedDescription = words.slice(6).join(" ");

  // // // Expand

  return (
    <div
      style={{
        width: "300px",
        height: "400px",
        // height: parentHeight,
        overflow: "hidden",
        transition: "height 0.5s",
      }}
      // className="shadow-none"
    >
      {/* // <div style={{ width: "300px", height: "400px", overflow: "hidden" }}> */}
      <Card
        style={{
          height: "100%",
          borderRadius: "16px",
          overflow: "hidden",
          border: "none", // Add this line to remove the border
        }}
        className="shadow-none"
      >
        {/* Caruosel Image */}

        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {/* Iterate over the image URLs in safeProduct */}
            {Object.keys(safeProduct)
              .filter((key) => key.startsWith("imageUrl"))
              .map((key, index) => (
                <CarouselItem key={index}>
                  <div className="p-0">
                    {/* <div className="p-1"> */}
                    <Card>
                      <img
                        src={safeProduct[key]}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                        style={{
                          width: "100%",
                          height: "275px",
                          objectFit: "cover",
                          borderRadius: "16px",
                          border: "none", // Add this line to remove the border around the image
                        }}
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
          {/* <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="p-0">
                  <Card>
                    <img
                      src={slide.url}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover "
                      style={{
                        width: "100%",
                        height: "275px",
                        objectFit: "cover",
                        borderRadius: "16px",
                        border: "none", 
                      }}
                    />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent> */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Carousel Image */}

        {/* Product Image */}
        {/* <img
          src={safeProduct.imageUrl}
          alt={safeProduct.title}
          style={{
            width: "100%",
            height: "280px",
            objectFit: "cover",
            borderRadius: "16px 16px 16px 16px",
          }}
        /> */}

        {/* Product Details */}
        {/* Product Details */}
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "120px",
            // border: "none",
          }}
        >
          {/* Host Information */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // border: "none",
              // paddingLeft: "16px",
            }}
          >
            {/* <Avatar
              src={safeProduct.host.avatarUrl}
              alt={safeProduct.host.name}
            /> */}

            <Avatar>
              <AvatarImage
                src={safeProduct.host.avatarUrl}
                alt={safeProduct.host.name}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div style={{ marginLeft: "8px" }}>
              <p style={{ margin: 0, fontSize: "14px" }}>
                {safeProduct.host.name}
              </p>
            </div>
            {/* Star Rating */}
            <Popover>
              <PopoverTrigger asChild>
                <div
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <a
                    data-tooltip-id="product_rating"
                    data-tooltip-content="See Product Rating"
                    data-tooltip-place="top"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-500" // Apply Tailwind CSS color class
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 .292l1.768 4.773 4.97.41c.398.033.57.537.252.805l-3.81 3.182 1.355 4.944c.109.398-.292.72-.612.502L10 13.36l-4.523 2.66c-.32.189-.721-.104-.612-.502l1.355-4.944-3.81-3.182c-.318-.268-.146-.772.252-.805l4.97-.41L10 .292z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <Tooltip id="product_rating" />
                  </a>
                  <p className="ml-1 text-base font-semibold">
                    {safeProduct.rating}
                  </p>{" "}
                  {/* Added text-lg and font-bold classes */}
                  {/* <p>{safeProduct.rating}</p> */}
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[350px]">
                <Rating_Tabs />
              </PopoverContent>
            </Popover>

            {/* Star Rating */}
          </div>

          {/* Title */}
          <CardTitle
            title={safeProduct.title}
            style={{ paddingLeft: "16px" }}
          />

          {/* Description */}
          <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
            {/* Original Code */}
            {/* <p style={{ margin: 0, height: "40px" }}>
              {safeProduct.description}
            </p> */}

            {/* Original Code */}

            {/* Initial See more */}
            {/* <ProductDescription
              productDescription={safeProduct.description}
              isExpanded={isExpanded}
              toggleExpansion={toggleExpansion}
              shortenedDescription={shortenedDescription}
            /> */}

            {/* Initial See more */}

            {/* See more popover */}
            <Popover>
              <PopoverTrigger asChild>
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="View Description..."
                  data-tooltip-place="top"
                >
                  <p
                    style={{ margin: 0, fontSize: "14px", lineHeight: "20px" }}
                  >
                    {shortenedDescription}
                    <span style={{ cursor: "pointer" }}> See more...</span>
                  </p>

                  <Tooltip id="my-tooltip" />
                </a>
              </PopoverTrigger>

              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between flex-wrap">
                    <h4>Description</h4>
                    <div>
                      {/* <div className="flex items-center space-x-2"> */}

                      {/* Popover */}
                      <Popover>
                        <PopoverTrigger asChild>
                          {/* Tooltip */}
                          <a
                            data-tooltip-id="view_features"
                            data-tooltip-content="View Features"
                            data-tooltip-place="top"
                          >
                            {/* Tooltip */}

                            {/* Icon */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                              style={{
                                visibility: "visible",
                                display: "block",
                              }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                              />
                            </svg>
                            {/* Tooltip */}

                            <Tooltip id="view_features" />
                          </a>
                          {/* Tooltip */}

                          {/* </div> */}
                        </PopoverTrigger>

                        <PopoverContent className="w-80">
                          <Feature_tabs />
                        </PopoverContent>
                      </Popover>
                      {/* Popover */}

                      {/* <Separator className="my-2" /> */}
                    </div>

                    {/* <Separator className="my-2" /> */}
                  </div>

                  {/* <p className="text-sm leading-5">{safeProduct.description}</p> */}
                  {/* Split the description into paragraphs */}
                  {/* Preprocess and render the description */}
                  {preprocessDescription(safeProduct.description).map(
                    (paragraph, index) => (
                      <div key={index} className="text-sm leading-5">
                        {paragraph}
                      </div>
                    )
                  )}

                  {/* If the description contains bullet points or other structured content,
    preprocess and render them accordingly */}
                  {preprocessBulletPoints(safeProduct.bulletPoints)}

                  {/* Add more headings and content sections as needed */}

                  {/* Add more headings and content sections as needed */}
                </div>
              </PopoverContent>
            </Popover>

            {/* See more popover */}
          </div>

          {/* Price */}
          <CardFooter
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p className="text-base font-semibold text-green-400">
              ${safeProduct.price}
            </p>

            <div style={{ marginLeft: "auto", paddingRight: "4px" }}>
              <Badge style={{ marginRight: "4px" }}>{VerifiedIcon}</Badge>
              {/* <Badge style={{ marginRight: "4px" }}>Verified</Badge> */}
              <Badge>{MerchantIcon}</Badge>
              {/* <Badge>Merchant</Badge> */}
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductListing;

//

// import React, { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";

//

// function CarouselPage() {
// const slides = [
//   {
//     url: "/images/image1.jpg",
//   },
//   {
//     url: "/images/image2.jpg",
//   },
//   {
//     url: "/images/image3.jpg",
//   },

//   {
//     url: "/images/image4.jpg",
//   },
//   {
//     url: "/images/image5.jpg",
//   },
// ];

//   {
// url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
//   },
//   {
// url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
//   },
//   {
// url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
//   },
//   {
// url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
//   },
//   {
//     url: "/img/image5.jpg",
//   },
// ];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   //   return (
//   return (
//     <div className="max-w-[308px] h-[303px] w-full m-auto py-16 px-4 relative group">
//       <div
//         style={{
//           backgroundImage: `url(${slides[currentIndex].url})`,
//           // width: "288px",
//           // height: "273px",
//           width: "308px",
//           height: "303px",
//         }}
//         className="rounded-2xl bg-center bg-cover duration-500 flex justify-center items-center"
//       >
//         {/* Left Arrow */}
//         <div className="hidden group-hover:block absolute left-4 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//           <BsChevronCompactLeft onClick={prevSlide} size={25} />
//         </div>
//         {/* Right Arrow */}
//         <div className="hidden group-hover:block absolute right-1 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//           <BsChevronCompactRight onClick={nextSlide} size={25} />
//         </div>
//       </div>
//       <div className="flex justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//         {/* <div className="flex justify-center py-2 absolute bottom-0 left-1/2 transform -translate-x-1/2"> */}

//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             // className="text-2xl cursor-pointer"
//             className={`text-2xl cursor-pointer ${
//               slideIndex === currentIndex ? "text-blue-500" : "text-gray-500"
//             }`}
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CarouselPage;
