import React from "react";
import { Mail, Phone, MapPin, GraduationCap, Code } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-green-900 text-white w-[350px] p-6 rounded-xl shadow-lg">


        <div className="flex items-center space-x-5 p-2 rounded-b-3xl">
          <img
            src="/agii.jpg"
            alt="Ager Derege"
            className="w-20 h-20 rounded-full border-2 border-green-800"
          />
          <div>
            <h2 className="text-lg font-bold italic">Ager Derege</h2>
            <p className="text-sm text-gray-300">Full Stack Web Developer</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-bold underline text-yellow-500">About</h3>
          <p className="text-sm text-gray-300">
            Experienced in web development, specializing in front-end and
            back-end technologies.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="font-bold underline text-yellow-500">Languages</h3>
          <ul className="text-sm text-gray-300 list-disc list-inside">
            <li>Amharic</li>
            <li>English</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-bold underline text-yellow-500">Contact</h3>
          <p className="text-sm text-gray-300 flex items-center">
            <Phone className="mr-2" /> 09 84 93 56 77
          </p>
          <p className="text-sm text-gray-300 flex items-center">
            <Mail className="mr-2" /> agerneshdereje8@email.com
          </p>
          <p className="text-sm text-gray-300 flex items-center">
            <FaGithub className="mr-2" />
            <a
              href="https://github.com/HagerSe"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              hagerSe
            </a>
          </p>
          <p className="text-sm text-gray-300 flex items-center">
            <MapPin className="mr-2" /> Ethiopia, Bahirdar City
          </p>
        </div>

        <div className="mt-4">
          <h3 className="font-bold underline text-yellow-500 flex items-center">
            <GraduationCap className="mr-2 text-black" /> Education
          </h3>
          <p className="text-sm text-gray-300">Bahir Dar University</p>
          <p className="text-xs text-gray-400"> 3<sup>rd</sup>  years IT(information technology) student</p>
        </div>

        <div className="mt-4">
          <h3 className="font-bold underline text-yellow-500 flex items-center">
            <Code className="mr-2 text-black" /> Skills
          </h3>
          <p className="text-sm text-yellow-300 mt-1">Frontend</p>
          <ul className="text-sm text-gray-300 list-disc list-inside ml-4">
            <li>✔ HTML</li>
            <li>✔ CSS</li>
            <li>✔ JavaScript</li>
            <li>✔ TailwindCSS</li>
            <li>✔ React</li>
          </ul>
          <p className="text-sm text-yellow-300 mt-2">Backend</p>
          <ul className="text-sm text-gray-300 list-disc list-inside ml-4">
            <li>✔ Node.js</li>
            <li>✔ MongoDB</li>
            <li>✔ Express.js</li>
                and Leadership skill. 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
