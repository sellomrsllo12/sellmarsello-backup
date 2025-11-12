
import { Mail, Github, Linkedin } from "lucide-react";
export default function Profile() {
  return (
    <section 
    id="profile"
    className="w-full bg-grey text-white justiy-center items-center">
      <div className="text-center">
        <h2 className="text-2xl mb-2 font-semibold">Marsello Meliano Maail</h2>
        <h3 className="mb-4">Binus University Student | Data Enthusiast | Software Development</h3>
        <p className="text-lg text-gray-300">
          Hello! People usually call me Sello. When I take a break </p>
          <p className="text-lg text-gray-300">
          from the digital world, I play music as a way to heal. 
        </p>
        <p className="text-lg text-gray-300">
          Music, math, and coding are all parts of who I am.
        </p>

        <div className="mt-4 flex space-x-4 justify-center items-center text-gray-300">
          <a href="https://github.com/sellomrsllo12"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-transform hover:scale-110">
            <Github size={28}/>
          </a>
          <a href="https://www.linkedin.com/in/marsellomaail/" 
          target="_blank"
          rel="noopener noreferrer">
            <Linkedin size={28}/>
          </a>

          <a href="mailto: sello26marsello@gmail.com">
            <Mail
            size={28}/>
          </a>

        </div>

      </div>

    </section>
  );
}
