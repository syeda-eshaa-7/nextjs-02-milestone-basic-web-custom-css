import React from "react";
import Image from "next/image";
import Link from "next/link";



function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="">I am not your normal developer</p>
          <p className="py-2 text-gray-700">
            Hi, I am a passionate Frontend Developer eager to start my career in
            web development. With a strong foundation in HTML, CSS, and
            JavaScript, I love turning designs into functional, interactive
            websites. I recently completed my studies and have worked on several
            personal projects to sharpen my skills in building responsive and
            user-friendly interfaces.
          </p>
          <p className="py-2 text-gray-700">
            Iam always exploring new tools and technologies like React, Tailwind
            CSS, and TypeScript to stay updated with industry trends. As a quick
            learner and problem solver, I am excited to contribute to real-world
            projects, collaborate with teams, and grow in this ever-evolving
            field. Lets connect and create something amazing together!
          </p>
          <Link href={"#projects"}>
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <Image 
        src={"https://media.istockphoto.com/id/1292038829/photo/laptop-computer-with-blue-pink-lighting-and-blank-screen-place-on-dark-background-3d.jpg?s=1024x1024&w=is&k=20&c=W4uysywnB9cvTD4W0OKvOFytZSIVGiNy-YdwBJ4Ut3w="}
       alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;