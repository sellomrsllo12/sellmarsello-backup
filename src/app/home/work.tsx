
export default function MyWork() {
  return(
    <section className="w-full bg-black text-gray-900 px-6 py-24 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
        <p className="text-gray-700 mb-6">
          Here are some of the projects I've worked on recently:
        </p>

        <ul className="space-y-4">
          <li className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold">AgRimbun</h3>
            <p className="text-gray-600">
              AgRimbun is a data-driven application designed to support sustainable agriculture and empower local farmers. It combines weather, soil, and crop data to deliver smart insights and interactive visualizations that help users make better farming decisions. Beyond being a monitoring tool, AgRimbun tells meaningful stories through data — raising awareness about sustainable farming and the people behind it.
            </p>
          </li>

          <li className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold">Sanitas</h3>
            <p className="text-gray-600">
              Sanitas is a digital health platform designed to make medical information and first aid guidance more accessible to everyone. It helps users handle emergencies through interactive first-aid tutorials, smart symptom-based medicine recommendations, and quick access to nearby pharmacies or clinics. Beyond providing practical health tools, Sanitas connects people with trusted medical partners and promotes a culture of awareness and preparedness. Built with a focus on families, the app encourages Indonesians to take proactive steps toward a healthier, safer, and more informed lifestyle.
            </p>
          </li>
        </ul>
      </div>

   </section>
  )
}
    