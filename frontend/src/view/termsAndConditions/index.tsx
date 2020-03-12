import * as React from "react";
import { LanguageContext } from "../../context/language";

import { BlogML } from "../../mangoLy";
export interface TermsAndConditionsProps {}

const TermsAndConditions: React.SFC<TermsAndConditionsProps> = () => {
  const { languageConfig, language } = React.useContext(LanguageContext);
  return language === "es" ? (
    <BlogML>
      <h1>Terminos y condiciones</h1>
      <p>
        Delta Exponential Technologies (“Delta”), con domicilio en Av. de las
        Fuentes No. 330 Int. 7, Col. Jardines del Pedregal, Álvaro Obregón,
        01900, Ciudad de México, México. actuará como responsable de las bases
        de datos de la información personal que usted proporcione cumpliendo con
        todo lo dispuesto por la Ley Federal de Protección de Datos Personales
        en Posesión de los Particulares, con base en los principios que
        establece esta misma para su desempeño, así como sus reglamentos,
        circulares o cualquier otra reglamentación relacionados.
      </p>
      <p>
        Los datos personales y/o sensibles que sean proporcionados por el
        titular de los datos personales a través de los mostradores, recopilado
        por vendedores, representantes y/o distribuidores de los servicios que
        presta Delta serán protegidos e incorporados en los sistemas que
        utilizan Delta, sus tenedoras, subsidiarias, filiales, sus respectivos
        empleados y/o por los terceros que por la naturaleza de sus funciones
        estén en contacto con dichos datos con el propósito de cumplir las
        obligaciones que se derivan de la relación jurídica existente entre el
        titular de los datos personales y Delta.
      </p>
      <p>
        La finalidad de la solicitud de los datos personales realizada por Delta
        es la identificación del cliente o proveedor de forma inmediata para que
        puedan acceder a los servicios que proporciona Delta, sus tenedoras,
        subsidiarias y/o filiales, por lo que, de manera enunciativa más no
        limitativa, podrá solicitar que el propietario de los datos personales
        proporcione su nombre, teléfono ya sea móvil y/o fijo, correo
        electrónico y domicilio.
      </p>
      <p>
        La información recabada por Delta será utilizada para el manejo y
        administración de los servicios que ofrece, así como para generar datos
        estadísticos necesarios para conocer las preferencias de consumo del
        público en general, de la misma manera Delta podrá utilizar dicha
        información con fines publicitarios y/o comerciales.
      </p>
      <p>
        Los propietarios de los datos personales al proporcionar sus datos a
        Delta, sus tenedoras, subsidiarias, filiales, agentes y/o distribuidores
        expone su aceptación plena y sin reservas a las condiciones de uso y
        disposiciones aquí contenidas para el manejo de la información
        proporcionada.
      </p>
      <p>
        Los propietarios de los datos personales podrán pedir mediante un correo
        electrónico a la siguiente dirección contact@deltaprotect.co la
        limitación del uso o divulgación de sus datos y Delta en un plazo de 20
        días atenderá la solicitud, notificando dicha limitación.
      </p>
      <p>
        Delta, sus tenedoras, subsidiarias y filiales se comprometen a llevar a
        cabo todas las acciones tendientes a proteger la información y datos
        personales que usted proporcione. Cualquier titular de los datos
        personales proporcionados a Delta o, en su caso, su representante legal
        podrá ejercer los derechos de acceso, rectificación, cancelación y
        oposición, y Delta proveerá los medios que le permita un oportuno
        ejercicio de sus derechos. El ejercicio de los derechos de acceso,
        rectificación, cancelación, oposición, limitación de uso o la revocación
        del consentimiento, podrá solicitarse por escrito al correo electrónico:
        contact@deltaprotect.co La rectificación o cancelación no tendrá efectos
        retroactivos.
      </p>
      <p>
        Para iniciar el proceso de acceso, rectificación, cancelación,
        rectificación u oposición de datos personales, el titular deberá
        realizar la solicitud por escrito al correo señalado en párrafo
        inmediato anterior manifestando su voluntad de rectificar o cancelar los
        datos proporcionados a Delta. Dicha solicitud deberá contener y
        acompañar lo siguiente:
      </p>
      <ol>
        <li>
          El nombre del titular y domicilio u otro medio para comunicarle la
          respuesta a su solicitud.
        </li>
        <li>
          Los documentos que acrediten la identidad o, en su caso, la
          representación legal del titular.
        </li>
        <li>
          La descripción clara y precisa de los datos personales respecto de los
          que se busca ejercer alguno de los derechos antes mencionados.
        </li>
        <li>
          Cualquier otro elemento o documento que facilite la localización de
          los datos personales.
        </li>
      </ol>
      <p>
        Delta comunicará al titular en veinte días hábiles, contados desde la
        fecha en que se recibió la solicitud de acceso, rectificación,
        cancelación u oposición, la determinación adoptada a efecto de que, si
        resulta procedente, se haga efectiva la misma dentro de los quince días
        siguientes a la fecha en que se comunica la respuesta.
      </p>
      <p>
        En caso de contar con alguna duda acerca del presenta aviso de
        privacidad podrá contactarnos al correo electrónico
        contact@deltaprotect.co o al teléfono +52 1 5551876769.
      </p>
      <p>
        En caso de que usted no esté de acuerdo con cualquiera de las
        condiciones aquí establecidas, no deberá hacer uso de nuestros
        servicios, ni proporcionarnos datos o información alguna.
      </p>
      <p>
        Delta se reserva el derecho de cambiar, modificar, complementar y/o
        alterar el presente aviso, en cualquier momento, en cuyo caso se hará de
        su conocimiento a través de la publicación del presente en el portal de
        la empresa.
      </p>
    </BlogML>
  ) : (
    <BlogML>
      <h1>Terms and Conditions</h1>
      <p>
        Delta Exponential Technologies (“Delta”), domiciled at Av. De las
        Fuentes No. 330 Int. 7, Col. Jardines del Pedregal, Álvaro Obregón,
        01900, Mexico City, Mexico. will act as responsible for the bases of
        personal information data that you provide in compliance with everything
        provided by the Federal Law on Protection of Personal Data In Possession
        of Individuals, based on the principles that establishes the same for
        its performance, as well as its regulations, circulars or any other
        related regulations.
      </p>
      <p>
        The personal and / or sensitive data that are provided by the holder of
        personal data through the counters, collected by sellers,
        representatives and / or distributors of the services that Delta loans
        will be protected and incorporated into systems that use Delta, its
        holders, subsidiaries, subsidiaries, their respective employees and / or
        by third parties that by the nature of their duties are in contact with
        said data in order to comply with the obligations arising from the legal
        relationship between the holder of personal data and Delta.
      </p>

      <p>
        The purpose of the request for personal data made by Delta is the
        identification of the customer or supplier immediately so that can
        access the services provided by Delta, its holders, subsidiaries and /
        or subsidiaries, so, but not limiting, may request that the owner of
        personal data provide your name, mobile phone and / or landline, mail
        Electronic and address.
      </p>
      <p>
        The information collected by Delta will be used for handling and
        administration of the services offered, as well as to generate
        data necessary statistics to know the consumption preferences of
        the general public, in the same way Delta may use such information for
        advertising and / or commercial purposes.
      </p>

      <p>
        The owners of personal data by providing their data to Delta, its
        holders, subsidiaries, subsidiaries, agents and / or distributors
        exposes its full and unreserved acceptance to the conditions of use and
        provisions contained herein for information management provided.
      </p>
      <p>
        The owners of personal data may request by email email to the following
        address contact@deltaprotect.co the Limitation of the use or disclosure
        of your data and Delta within a period of 20 days will attend the
        request, notifying said limitation.
      </p>

      <p>
        Delta, its holders, subsidiaries and subsidiaries undertake to take
        carry out all actions aimed at protecting information and data personal
        that you provide. Any data holder personnel provided to Delta or, where
        appropriate, its legal representative may exercise the rights of access,
        rectification, cancellation and opposition, and Delta will provide the
        means allowed by a timely Exercise of your rights. The exercise of
        access rights, rectification, cancellation, opposition, limitation of
        use or revocation of consent, may be requested in writing by email:
        contact@deltaprotect.co The rectification or cancellation will not take
        effect retroactive.
      </p>
      <p>
        To start the process of access, rectification, cancellation,
        rectification or opposition of personal data, the owner must make the
        request in writing to the mail indicated in paragraph immediately
        previous expressing their willingness to rectify or cancel data provided
        to Delta. This request must contain and accompany the following:
      </p>
      <ol>
        <li>
          The name of the owner and address or other means to communicate the
          Response to your request.
        </li>
        <li>
          The documents that prove the identity or, where appropriate, the legal
          representation of the holder.
        </li>
        <li>
          The clear and precise description of personal data regarding that one
          seeks to exercise any of the aforementioned rights.
        </li>

        <li>
          Any other element or document that facilitates the location of
          Personal information.
        </li>
      </ol>
      <p>
        Delta will notify the holder in twenty business days, counted from the
        date on which the request for access, rectification was received,
        cancellation or opposition, the determination taken so that, if It is
        appropriate, it becomes effective within fifteen days following the date
        on which the response is communicated.
      </p>
      <p>
        If you have any questions about this notice of privacy you can contact
        us by email contact@deltaprotect.co or by phone +52 1 5551876769.
      </p>
      <p>
        In case you do not agree with any of the conditions set forth herein,
        you must not use our services, or provide us with data or any
        information.
      </p>
      <p>
        Delta reserves the right to change, modify, complement and / or alter
        this notice, at any time, in which case it will be made your knowledge
        through the publication of this in the portal of the company.
      </p>
    </BlogML>
  );
};

export default TermsAndConditions;
