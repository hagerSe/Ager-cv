import React from "react";
import { Mail, Phone, MapPin, GraduationCap, Code, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import profileImage from './assets/53.jpg';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black/50 p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-gray-800 to-black text-white w-full max-w-md md:max-w-lg lg:max-w-xl p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-700"
      >

        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center space-x-6 p-4 rounded-2xl bg-gradient-to-r from-gray-800/70 to-gray-700/50 backdrop-blur-sm border border-gray-600"
        >
          <motion.img
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            src={profileImage}
            alt="Ager Derege"
            className="w-24 h-24 rounded-full border-4 border-red-500 shadow-lg object-cover"
          />
          <div>
            <motion.h2 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl font-bold italic bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
            >
              Ager Dereje
            </motion.h2>
            <motion.p 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-base text-gray-300 font-semibold"
            >
              MERN & PERN Stack Developer | Full Stack Web Developer
            </motion.p>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-full h-0.5 bg-gradient-to-r from-red-500 to-red-700 mt-2"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all duration-300 border border-gray-800"
        >
          <h3 className="font-bold text-lg text-red-400 flex items-center gap-2 mb-2">
            <Star className="w-5 h-5" /> About Me
          </h3>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Experienced <span className="text-red-400 font-semibold">2+ years</span> in web development, specializing in MERN and PERN stack technologies for full-stack applications. Passionate about creating beautiful and functional web experiences. Worked on different real-world problem-solving projects.
          </p>
        </motion.div>

        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-4 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all duration-300 border border-gray-800"
        >
          <h3 className="font-bold text-lg text-red-400 flex items-center gap-2 mb-2">
            <GraduationCap className="w-5 h-5" /> Education
          </h3>
          <p className="text-sm md:text-base text-gray-200 font-semibold">Bahir Dar University</p>
          <p className="text-xs md:text-sm text-red-400 font-bold">4th Year Student</p>
          <div className="mt-2 w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
           
          </div>
          <p className="text-xs text-gray-500 mt-1">Expected Graduation: 2026</p>
        </motion.div>

        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-4 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all duration-300 border border-gray-800"
        >
          <h3 className="font-bold text-lg text-red-400 flex items-center gap-2 mb-3">
            <Code className="w-5 h-5" /> Technical Skills
          </h3>
          
          <div className="mb-4">
            <p className="text-sm text-red-400 font-semibold mb-2">MERN Stack</p>
            <div className="flex flex-wrap gap-2">
              {["MongoDB", "Express.js", "React", "Node.js"].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="px-3 py-1.5 bg-gray-800/50 rounded-lg text-xs text-gray-300 border border-red-900/50 hover:bg-red-900/20 hover:border-red-700 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="text-sm text-red-400 font-semibold mb-2">PERN Stack</p>
            <div className="flex flex-wrap gap-2">
              {["PostgreSQL", "Express.js", "React", "Node.js"].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="px-3 py-1.5 bg-gray-800/50 rounded-lg text-xs text-gray-300 border border-red-900/50 hover:bg-red-900/20 hover:border-red-700 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-red-400 font-semibold mb-2">Professional Skills</p>
            <div className="flex flex-wrap gap-2">
              {["Leadership", "Problem Solving", "Team Collaboration", "Communication", "Project Management"].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                  className="px-3 py-1.5 bg-gray-800/50 rounded-lg text-xs text-gray-300 border border-red-900/50 hover:bg-red-900/20 hover:border-red-700 transition-colors"
                >
                  ✓ {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-4 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all duration-300 border border-gray-800"
        >
          <h3 className="font-bold text-lg text-red-400 flex items-center gap-2 mb-3">
            <Mail className="w-5 h-5" /> Contact Information
          </h3>
          
          <motion.div whileHover={{ x: 5 }} className="space-y-3">
            <p className="text-sm text-gray-300 flex items-center gap-3">
              <Phone className="w-4 h-4" /> 
              <span>+251 984 935 677</span>
            </p>
            <p className="text-sm text-gray-300 flex items-center gap-3">
              <Mail className="w-4 h-4" /> 
              <span>agerneshdereje8@email.com</span>
            </p>
            <motion.p 
              whileHover={{ x: 5 }}
              className="text-sm text-gray-300 flex items-center gap-3"
            >
              <FaGithub className="w-4 h-4" />
              <a
                href="https://github.com/HagerSe"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition-colors duration-300"
              >
                github.com/hagerSe
              </a>
            </motion.p>
            <p className="text-sm text-gray-300 flex items-center gap-3">
              <MapPin className="w-4 h-4" /> 
              <span>Bahirdar City, Ethiopia</span>
            </p>
          </motion.div>
        </motion.div>

        
      </motion.div>
    </div>
  );
}

export default App;