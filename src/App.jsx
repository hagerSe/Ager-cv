import React from "react";
import { Mail, Phone, MapPin, Globe, GraduationCap, Code } from "lucide-react";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-green-900 text-white w-[350px] p-6 rounded-xl shadow-lg">
        <h1 className="text-center text-xl font-bold mb-4"></h1>

        <div className="flex items-center space-x-5 p-2 rounded-b-3xl">
          <img
            src="/agii.jpg"
            alt="Ager Derege"
            className="w-20 h-20 rounded-full border-green-800"
          />
          <div>
            <h2 className="text-lg font-bold italic">Ager Derege</h2>
            <p className="text-sm text-gray-600"></p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-bold underline text-yellow-500 flex items-center"> 
             </h3>
          <p className="text-sm text-gray-300">
            Experienced in web development, specializing in front-end and
            back-end technologies.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="font-bold underline text-yellow-500 flex items-center">
           Languages
          </h3>
          <ul className="text-sm text-gray-300">
            <li>Amharic</li>
            <li>English</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-bold underline text-yellow-500 flex items-center">
             Contact
          </h3>
          <p className="text-sm text-gray-300 flex items-center">
            <Phone className="mr-2" /> 09 84 93 56 77
          </p>
          <p className="text-sm text-gray-300 flex items-center">
            <Mail className="mr-2" /> agerneshdereje8@email.com
          </p>
          <p className="text-sm text-gray-300 flex items-center">
            <MapPin className="mr-2" /> Ethiopia, Bahirdar city
          </p>
        </div>

        <div className="mt-4">
          <h3 className="font-bold underline text-yellow-500 flex items-center">
            <GraduationCap className="mr-2 text-black" /> Education
          </h3>
          <p className="text-sm text-gray-300">University Name is BahirDar</p>
          <p className="text-xs text-gray-400">Bachelor's Degree</p>
        </div>

        <div className="mt-4">
          <h3 className="font-bold underline text-yellow-500 flex items-center">
            <Code className="mr-2 text-black" /> Skills
          </h3>
          <ul className="text-sm text-gray-300">
            <li>✔ Frontend</li>
            <li>✔ Backend</li>
            <li>✔ Leadership</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
