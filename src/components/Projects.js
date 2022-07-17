import React from "react";
import pizza from "../assets/portfolio/pizza.png";
import codepen from "../assets/portfolio/codepen.png";
import cryptoverse from "../assets/portfolio/cryptoverse.png";


const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-auto text-white bg-gradient-to-b from-gray-800 pt-24 to-black md:mt-[100px] "
    >
      <div className="pt-[100px] max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 text-white border-cyan-600">
            Projects
          </p>
          <p className="py-6 font-medium tracking-wide">
            // Check my recent projects
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div>
            <div
              style={{ backgroundImage: `url(${pizza})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 duration-200 text-center">
                <span className="text-2xl font-bold text-gray-100 tracking-wider">
                  The Pizza Shop
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://the-pizza-shop.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg tracking-wider hover:scale-110 duration-200">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/DivyankRawat/ThePizzaShop"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg tracking-wider hover:scale-110 duration-200">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-2 py-4 pb-[30px] text-center">
              <p className="text-lg tracking-wide">
                <b className="text-lg border-b-4 border-cyan-600">The Pizza Shop</b>
                <p className="mt-[10px]">
                  Its a e-commerce website that sells pizzas. I built this webiste for an Internship test as per the tempate provided.Tech stack used to built the application involves{" "}
                  <b>ReactJS and Redux Toolkit</b>.
                </p>
              </p>
            </div>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${cryptoverse})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 text-center duration-200">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Cryptoverse
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://cryptoverse-1289.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/DivyankRawat/Cryptoverse"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg tracking-wider hover:scale-110 duration-200">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-3 py-4 pb-[30px] text-center">
              <p className="text-lg tracking-wide  ">
                <b className="text-lg border-b-4 border-cyan-600">Cryptoverse</b>
                <p className="mt-[10px]">
                  Web Application which tells realtime price and news about all the cryuptocurrencies available.
                  Tech Stack used to build this website is <b>React JS, Redux Toolkit, AntD CSS, and 2 different APIs</b>.
                </p>
              </p>
            </div>
          </div>
          <div>
            <div
              style={{ backgroundImage: `url(${codepen})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100 text-center duration-200">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Codepen
                </span>
                <div className="pt-8 text-center">
                  <a
                    href="https://github.com/DivyankRawat/Codepen.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-3 py-4 pb-[30px] text-center">
              <p className="text-lg tracking-wide  ">
                <b className="text-lg border-b-4 border-cyan-600">
                  Codepen.io
                </b>
                <p className="mt-[10px]">
                  It is a clone website of codepen. As the name says The main functionality of the website is code editor.
                  Anyone can write HTML, CSS, and JS and can see work done in the display at the bottom. Tech stck used in this webiste
                  is <b>ReactJS, Codemirror and Firebase for Authentication</b>. Even if a user logs out the code will be there due to custom hooks and use of local storage.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
