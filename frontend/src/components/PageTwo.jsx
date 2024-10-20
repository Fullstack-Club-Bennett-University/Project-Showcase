// // import React, { useEffect } from "react";
// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import { MdMiscellaneousServices } from "react-icons/md";
// // import { FcSalesPerformance } from "react-icons/fc";
// // import { FcManager } from "react-icons/fc";
// // import { PiCertificate } from "react-icons/pi";
// // import { FaCameraRetro } from "react-icons/fa";
// // import Footer from "./Footer";

// // gsap.registerPlugin(ScrollTrigger);

// // const PageTwo = () => {
// //   useEffect(() => {
// //     gsap.fromTo(
// //       ".heading",
// //       { opacity: 0, y: -50 },
// //       {
// //         opacity: 1,
// //         y: 0,
// //         duration: 1.2,
// //         ease: "power3.out",
// //         scrollTrigger: {
// //           trigger: ".heading",
// //           start: "top 90%", // Adjusted to trigger earlier
// //         },
// //       }
// //     );

// //     gsap.fromTo(
// //       ".paragraph",
// //       { opacity: 0, y: -50 },
// //       {
// //         opacity: 1,
// //         y: 0,
// //         duration: 1,
// //         ease: "power3.out",
// //         scrollTrigger: {
// //           trigger: ".paragraph",
// //           start: "top 90%", // Adjusted to trigger earlier
// //         },
// //       }
// //     );

// //     gsap.fromTo(
// //       ".card",
// //       { opacity: 0, scale: 0.8 },
// //       {
// //         opacity: 1,
// //         scale: 1,
// //         duration: 0.8,
// //         ease: "back.out(1.7)",
// //         stagger: 0.3,
// //         scrollTrigger: {
// //           trigger: ".card",
// //           start: "top 95%", // Adjusted to trigger earlier
// //         },
// //       }
// //     );

// //     gsap.fromTo(
// //       ".last-section",
// //       { opacity: 0, y: 30 },
// //       {
// //         opacity: 1,
// //         y: 0,
// //         duration: 1,
// //         ease: "power3.out",
// //         scrollTrigger: {
// //           trigger: ".last-section",
// //           start: "top 90%", // Adjusted to trigger earlier
// //         },
// //       }
// //     );
// //   }, []);

// //   return (
// //     <div className="h-screen p-4 text-black md:p-8 bg-slate-100">
// //       <h2 className="mb-6 text-3xl font-bold text-center md:text-4xl heading">
// //         <h2>Helps you manage and channelize everything</h2>
// //         <h2>university-related efficiently.</h2>
// //       </h2>
// //       <p className="mb-12 text-base text-center md:text-lg paragraph">
// //         Our simple CMS software provides everything you need, <br />
// //         in one easy-to-use yet powerful system.
// //       </p>

// //       <div className="flex flex-col justify-center  gap-8 mt-20 md:flex-row">
// //         <div className="w-full h-[200px] p-4 text-center bg-white rounded-lg shadow-md md:w-1/3 card ">
// //           <div className="flex justify-center mb-4 text-5xl ">
// //             <FcManager />
// //           </div>
// //           <h3 className="mb-2 text-lg font-semibold md:text-xl">CMS</h3>
// //           <p className="text-gray-600">
// //             Navigate the Unseen: The CMS Solution that Illuminates Every
// //             Interaction with Your Collaborators and Prospects.
// //           </p>
// //           {/* <a href="#" className="inline-block mt-4 text-blue-500">
// //             Read more →
// //           </a> */}
// //         </div>

// //         <div className="w-full p-4 text-center bg-white rounded-lg shadow-md md:w-1/3 card">
// //           <div className="flex justify-center mb-4 text-4xl">
// //             <PiCertificate />
// //           </div>

// //           <h3 className="mb-2 text-lg font-semibold md:text-xl">
// //             Certificate-Generation
// //           </h3>
// //           <p className="text-gray-600">
// //             Tired of Signing Certificates manually ? we provide Automated Signs
// //             for multiple certificates at a time.
// //           </p>
// //           {/* <a href="#" className="inline-block mt-4 text-blue-500">
// //             Read more →
// //           </a> */}
// //         </div>

// //         <div className="w-full p-4 text-center bg-white rounded-lg shadow-md md:w-1/3 card">
// //           <div className="flex justify-center mb-4 text-4xl text-center text-cyan-600">
// //             <FaCameraRetro />
// //           </div>
// //           <h3 className="mb-2 text-lg font-semibold md:text-xl">
// //             Find your photo
// //           </h3>
// //           <p className="text-gray-600">
// //             Finding yourself in the crowd of thousands ? we got your back
// //             providing separate image classifications with machine learning for
// //             every profile
// //           </p>
// //         </div>
// //       </div>

// //       {/* <div className="flex items-center justify-center mt-20 md:mt-20 last-section"> */}
// //       {/* <Footer /> */}
// //       {/* <div>
// //           <div className="text-2xl font-bold md:text-4xl">
// //             <h1 className="text-center">
// //               <br /> choose us
// //             </h1>
// //           </div>
// //           <div className="flex justify-center mt-4 md:mt-6">
// //             <p className="text-sm text-center md:text-base">
// //               At Really Simple Systems CRM, we are dedicated to <br />
// //               helping businesses manage better.
// //             </p>
// //           </div>
// //         </div> */}
// //     </div>

// //     // </div>
// //   );
// // };

// // export default PageTwo;

// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MdMiscellaneousServices } from "react-icons/md";
// import { FcSalesPerformance } from "react-icons/fc";
// import { FcManager } from "react-icons/fc";
// import { PiCertificate } from "react-icons/pi";
// import { FaCameraRetro } from "react-icons/fa";
// import Footer from "./Footer";

// gsap.registerPlugin(ScrollTrigger);

// const PageTwo = () => {
//   useEffect(() => {
//     gsap.fromTo(
//       ".heading",
//       { opacity: 0, y: -50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".heading",
//           start: "top 90%", // Adjusted to trigger earlier
//         },
//       }
//     );

//     gsap.fromTo(
//       ".paragraph",
//       { opacity: 0, y: -50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".paragraph",
//           start: "top 90%", // Adjusted to trigger earlier
//         },
//       }
//     );

//     gsap.fromTo(
//       ".card",
//       { opacity: 0, scale: 0.8 },
//       {
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: "back.out(1.7)",
//         stagger: 0.3,
//         scrollTrigger: {
//           trigger: ".card",
//           start: "top 95%", // Adjusted to trigger earlier
//         },
//       }
//     );

//     gsap.fromTo(
//       ".last-section",
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".last-section",
//           start: "top 90%", // Adjusted to trigger earlier
//         },
//       }
//     );
//   }, []);

//   return (
//     <div className="h-screen p-4 text-black md:p-8 bg-slate-100">
//       <h2 className="mb-6 text-3xl font-bold text-center md:text-4xl heading">
//         <h2>Helps you manage and channelize everything</h2>
//         <h2>university-related efficiently.</h2>
//       </h2>
//       <p className="mb-12 text-base text-center md:text-lg paragraph">
//         Our simple CMS software provides everything you need, <br />
//         in one easy-to-use yet powerful system.
//       </p>

//       <div className="flex flex-col justify-center items-stretch gap-8 mt-20 md:flex-row h-[60vh]">
//         <div className="w-full h-full p-4 text-center bg-white rounded-lg shadow-md md:w-1/3 card">
//           <div className="flex justify-center mb-4 text-5xl ">
//             <FcManager />
//           </div>
//           <h3 className="mb-2 text-lg font-semibold md:text-xl">CMS</h3>
//           <p className="text-gray-600">
//             Navigate the Unseen: The CMS Solution that Illuminates Every
//             Interaction with Your Collaborators and Prospects.
//           </p>
//         </div>

//         <div className="w-full h-full p-4 text-center bg-white rounded-lg shadow-md md:w-1/3 card">
//           <div className="flex justify-center mb-4 text-4xl">
//             <PiCertificate />
//           </div>

//           <h3 className="mb-2 text-lg font-semibold md:text-xl">
//             Certificate-Generation
//           </h3>
//           <p className="text-gray-600">
//             Tired of Signing Certificates manually? We provide Automated Signs
//             for multiple certificates at a time.
//           </p>
//         </div>

//         <div className="w-full h-full p-4 text-center bg-white rounded-lg shadow-md md:w-1/3 card">
//           <div className="flex justify-center mb-4 text-4xl text-center text-cyan-600">
//             <FaCameraRetro />
//           </div>
//           <h3 className="mb-2 text-lg font-semibold md:text-xl">
//             Find your photo
//           </h3>
//           <p className="text-gray-600">
//             Finding yourself in the crowd of thousands? We got your back
//             providing separate image classifications with machine learning for
//             every profile.
//           </p>
//         </div>
//       </div>

//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default PageTwo;

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FcManager } from "react-icons/fc";
import { PiCertificate } from "react-icons/pi";
import { FaCameraRetro } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const PageTwo = () => {
  useEffect(() => {
    gsap.fromTo(
      ".heading",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".heading",
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      ".paragraph",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".paragraph",
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      ".card",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".card",
          start: "top 95%",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen p-4 text-black md:p-8 bg-slate-100 flex flex-col items-center justify-center">
      <h2 className="mb-6 text-3xl font-bold text-center md:text-4xl heading">
        Helps you manage and channelize everything
        <br />
        university-related efficiently.
      </h2>
      <p className="mb-12 text-base text-center md:text-lg paragraph">
        Our simple CMS software provides everything you need,
        <br />
        in one easy-to-use yet powerful system.
      </p>

      <div className="flex flex-col items-center justify-center gap-8 md:flex-row w-full h-full">
        <div className="w-full md:w-1/3 h-80 p-6 text-center bg-white rounded-lg shadow-lg card flex flex-col justify-center items-center">
          <div className="flex justify-center mb-4 text-7xl">
            <FcManager />
          </div>
          <h3 className="mb-2 text-2xl font-bold">CMS</h3>
          <p className="text-lg text-gray-600">
            Navigate the Unseen: The CMS Solution that Illuminates Every
            Interaction with Your Collaborators and Prospects.
          </p>
        </div>

        <div className="w-full md:w-1/3 h-80 p-6 text-center bg-white rounded-lg shadow-lg card flex flex-col justify-center items-center">
          <div className="flex justify-center mb-4 text-7xl">
            <PiCertificate />
          </div>
          <h3 className="mb-2 text-2xl font-bold">Certificate-Generation</h3>
          <p className="text-lg text-gray-600">
            Tired of Signing Certificates manually? We provide Automated Signs
            for multiple certificates at a time.
          </p>
        </div>

        <div className="w-full md:w-1/3 h-80 p-6 text-center bg-white rounded-lg shadow-lg card flex flex-col justify-center items-center">
          <div className="flex justify-center mb-4 text-7xl text-cyan-600">
            <FaCameraRetro />
          </div>
          <h3 className="mb-2 text-2xl font-bold">Find your photo</h3>
          <p className="text-lg text-gray-600">
            Finding yourself in the crowd of thousands? We provide separate
            image classifications with machine learning for every profile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
