import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "¿Cómo puede ayudar su agencia a mi negocio agropecuario en redes sociales?",
    answer:
    "Nuestra agencia se especializa en estrategias de marketing digital adaptadas al sector agropecuario. Trabajamos para aumentar tu visibilidad en línea, conectarte con tu audiencia objetivo y crear contenido relevante que resalte los valores y la calidad de tus productos o servicios agropecuarios."
  },
  {
    question: "¿Ofrecen servicios personalizados para diferentes tipos de empresas agropecuarias?",
    answer:
    "Sí, ofrecemos servicios completamente personalizados. Entendemos que cada negocio en el sector agropecuario es único, por lo que diseñamos estrategias de marketing que se adaptan específicamente a las necesidades y objetivos de cada uno de nuestros clientes."
  },
  {
    question: "¿Cuánto tiempo se tarda en ver resultados después de implementar una estrategia de marketing digital?",
    answer:
    "El tiempo para ver resultados puede variar dependiendo de varios factores, como el tipo de estrategia implementada y los objetivos específicos de su negocio. Generalmente, nuestros clientes comienzan a ver mejoras en su presencia en línea y el compromiso del público dentro de los primeros tres a seis meses."
  },
  {
    question: "¿Cómo miden el éxito de las campañas de marketing digital?",
    answer:
    "Utilizamos una variedad de herramientas y métricas para medir el éxito de nuestras campañas, incluyendo el aumento del tráfico web, la participación en redes sociales, las tasas de conversión y el retorno de inversión (ROI). Nuestro enfoque se basa en datos para asegurar que cada campaña genere resultados medibles y valiosos para su negocio."
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
          ¿Alguna pregunta?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
Preguntas frecuentes
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1">
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#f3d35c"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
