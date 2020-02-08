import * as React from "react";
import { LanguageContext } from "../../context/language";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_DIAGNOSTIG } from "../../graphql/querys/diagnostic";
import Wrapper from "../../graphql/provider";
//Mango-ly
import { FormML } from "../../mangoLy";
//Components
import Nav from "../nav";
//Styled-Components
import {
  TitleForm,
  InputSubmit,
  SendOk,
  ContainerImg,
  ContainerText
} from "../home/formStyled";
import check from "../img/home/formCheck.svg";

export interface FreeDiagnosticProps {}
interface iInitialValue {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
}
const FreeDiagnostic: React.SFC<FreeDiagnosticProps> = () => {
  const { languageConfig, language } = React.useContext(LanguageContext);
  let freeDiagnostic = languageConfig[language].freeDiagnostic;
  let sendForm = languageConfig[language].sendForm;
  const [sendOk, setSendOk] = React.useState(false);
  const initialValue: iInitialValue = {
    value1: "",
    value2: "",
    value3: "",
    value4: ""
  };
  const [valueForm, setValueForm] = React.useState(initialValue);
  const [addTodo, { data }] = useMutation(CREATE_DIAGNOSTIG);
  const hadleSubmit = (e: any) => {
    e.preventDefault();
    addTodo({
      variables: {
        input: {
          data: {
            name: valueForm.value1,
            url: valueForm.value2,
            email: valueForm.value3,
            phone: valueForm.value4
          }
        }
      }
    });
    setSendOk(true);
    setValueForm(initialValue);
  };

  return (
    languageConfig[language] && (
      <>
        <FormML.Container bgColor="#FAFAFA">
          <FormML width="auto" onSubmit={(e: any) => hadleSubmit(e)}>
            {sendOk ? (
              <SendOk>
                <ContainerImg>
                  <img src={check} alt="icon" />
                </ContainerImg>
                <ContainerText>
                  <h3>{sendForm.title}</h3>
                  <p>{sendForm.text}</p>
                </ContainerText>
              </SendOk>
            ) : (
              <>
                <TitleForm>
                  <h2>
                    {freeDiagnostic.title1}
                    <br />
                    {freeDiagnostic.title2}
                  </h2>
                  <h5>
                    <strong>{freeDiagnostic.span1}</strong>
                    {freeDiagnostic.text1}
                    {/* <br /> */}
                    {freeDiagnostic.text2}
                  </h5>
                </TitleForm>
                <FormML.Input2
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={freeDiagnostic.input[0]}
                  mytype="text"
                  required={true}
                  initialValue={initialValue}
                  value={valueForm}
                  name="value1"
                  setValue={setValueForm}
                />
                <FormML.Input2
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={freeDiagnostic.input[1]}
                  mytype="text"
                  required={true}
                  initialValue={initialValue}
                  value={valueForm}
                  name="value2"
                  setValue={setValueForm}
                />
                <FormML.Input2
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={freeDiagnostic.input[2]}
                  mytype="email"
                  required={true}
                  initialValue={initialValue}
                  value={valueForm}
                  name="value3"
                  setValue={setValueForm}
                />
                <FormML.Input2
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={freeDiagnostic.input[3]}
                  mytype="text"
                  required={true}
                  initialValue={initialValue}
                  value={valueForm}
                  name="value4"
                  setValue={setValueForm}
                />
              </>
            )}

            <InputSubmit type="submit" value={freeDiagnostic.button} />
            <p></p>
          </FormML>
        </FormML.Container>
      </>
    )
  );
};

export default Wrapper(FreeDiagnostic);
