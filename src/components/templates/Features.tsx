import Template from "./Template";
import { features, featureTitle } from "../../data/HomePage/Features";

export default function Features() {
  return (
    <Template>
      <span className="mb-16">
        <h2 className="text-xl mt-14 sm:text-3xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          {featureTitle}
        </h2>
      </span>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <section
            key={index}
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="w-12 h-12 text-purple-400 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-background">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.description}</p>
          </section>
        ))}
      </section>
    </Template>
  );
}
