import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" sm:pb-0 w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full z-0">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-600 tracking-wide">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold tracking-wider">
            <p> <span className="text-cyan-300">Hello</span>, I'm Divyank. Nice to meet you.</p>
          </div>
          <div>
            <p className="text-lg tracking-wide pb-[50px]">
              I am a Final year CSE student and I have worked as an Intern in a
              Noida based startup. I've been fortunate enough to get exposed to
              multiple technologies and have worked on them. My major stack of
              working is <b>NodeJS, MongoDB and ExpressJS</b> for the backend and{" "}
              <b>ReactJS or NextJS</b> to design the frontend of the website.
              Currently I am learning <b>Blockchain</b> as I like how it works and
              my skills are improving day by day. Ive worked on multiple web
              applications and deployed some of them. section of this page. You can
              checkout my{" "}
              <a
                href="https://drive.google.com/file/d/152P5c8zjOFROdjTNgRiocm7rjXn7IMXq/view?usp=sharing"
                className="text-cyan-500 hover:cursor-pointer hover:scale-110 font-medium tracking-wide"
                target="_blank"
                rel="noreferrer"
              >
                RESUME
              </a>{" "}
              here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
