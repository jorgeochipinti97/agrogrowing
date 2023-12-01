import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "Carlos Watkins",
    customerTitle: "Propietario de una Granja Ganadera",
    content:
      "Desde que empezamos a trabajar con Agrogrowing, hemos visto un cambio notable en nuestra presencia digital. Su enfoque específico para el agro nos ha ayudado a conectar con nuestros clientes de una manera más eficaz. ¡Nuestro alcance en redes sociales se ha duplicado y las ventas están en aumento!",
    image: testimonial1,
  },
  {
    customerName: "Ana Gutierrez",
    customerTitle: "Marketer de una Empresa de Insumos Agrícolas",
    content:
      "Estoy impresionado con la dedicación y el conocimiento del equipo de Agrogrowing. Han logrado transmitir la esencia de mi granja en cada campaña, mostrando una comprensión profunda del sector agropecuario. Gracias a ellos, nuestra marca es ahora reconocida en el mercado.",
    image: testimonial2,
  },
  {
    customerName: "María Ramírez",
    customerTitle: "Gerente de una Cooperativa Agrícola",
    content:
      "Colaborar con Agrogrowing ha sido una de las mejores decisiones que hemos tomado. Su creatividad y estrategias personalizadas han elevado nuestra marca a un nuevo nivel. La respuesta del mercado ha sido extraordinaria, reflejando un aumento significativo en la demanda de nuestros productos.",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Testimonios
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
Personas con las que crecimos
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div>
                  
                <img src={testimonial.image} alt="" width="45px"   />
                </div>
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
