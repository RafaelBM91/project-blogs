import * as React from "react";
import styled from "styled-components";
import { LanguageContext } from "../../context/language";
import { BlogML, CardML } from "../../mangoLy";
export interface AboutProps {}

const CardPadding = styled.div`
  padding: 50px;
`;
const About: React.SFC<AboutProps> = () => {
  const { languageConfig, language } = React.useContext(LanguageContext);
  return language === "en" ? (
    <BlogML bgColor="#FAFAFA">
      <CardML>
        <CardPadding>
          <h1>About us</h1>
          <p>
            Delta Protect is a cybersecurity application provider, with a focus
            on proactive security trough security by design.
          </p>
          <p>
            We help companies to see Cybersecurity as a strategic investment and
            not as an expense, all of this at an attractive and accessible cost
            for any company. We understand the logic of the business and exploit
            it to find the most critical vulnerabilities, solving the causes
            from the root.
          </p>
          <p>
            Our White Hat Hackers are backed with + 10 years of experience
            penetrating companies, implementing DevSecOps and Forensics.
          </p>
        </CardPadding>
      </CardML>
    </BlogML>
  ) : (
    <BlogML>
      <CardML>
        <CardPadding>
          <h1>Nosotros</h1>
          <p>
            Delta Protect es un proveedor de aplicaciones de seguridad
            cibernética, con un enfoque en seguridad proactiva a través de la
            seguridad por diseño.
          </p>
          <p>
            Ayudamos a las empresas a ver la Ciberseguridad como una inversión
            estratégica y no como gasto, todo esto a un costo atractivo y
            accesible para cualquier empresa. Entendemos la lógica del negocio y
            lo explotamos para encontrar Las vulnerabilidades más críticas,
            resolviendo las causas desde la raíz.
          </p>
          <p>
            Nuestros White Hat Hackers están respaldados con más de 10 años de
            experiencia. empresas penetrantes, implementando DevSecOps y
            Forensics.
          </p>
        </CardPadding>
      </CardML>
    </BlogML>
  );
};

export default About;
