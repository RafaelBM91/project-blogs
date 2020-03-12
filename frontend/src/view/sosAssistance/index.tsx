import * as React from "react";
import { LanguageContext } from "../../context/language";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_EMERGENCI } from "../../graphql/querys/emergenci";
import Wrapper from "../../graphql/provider";
//Mango-ly
import { FormML } from "../../mangoLy";

//Styled-Components
import {
  TitleForm,
  InputSubmit,
  SendOk,
  ContainerImg,
  ContainerText
} from "../home/formStyled";
import check from "../img/home/formCheck.svg";

export interface SOSAssistanceProps {}
interface iInitialValue {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value5: string;
  value6: string;
  value7: string;
  value8: string;
}
const SOSAssistance: React.SFC<SOSAssistanceProps> = () => {
  const { languageConfig, language } = React.useContext(LanguageContext);
  let sosAssistance = languageConfig[language].sosAssistance;
  let sendForm = languageConfig[language].sendForm;
  const [sendOk, setSendOk] = React.useState(false);
  const initialValue: iInitialValue = {
    value1: "",
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    value6: "",
    value7: "",
    value8: ""
  };
  const [valueForm, setValueForm] = React.useState(initialValue);
  const [addTodo, { data }] = useMutation(CREATE_EMERGENCI);
  const hadleSubmit = (e: any) => {
    e.preventDefault();
    addTodo({
      variables: {
        input: {
          data: {
            name: valueForm.value1,
            url: valueForm.value5,
            email: valueForm.value3,
            phone: valueForm.value4,
            company: valueForm.value2,
            description: valueForm.value6,
            typeofatack: valueForm.value7,
            compromisedsystem: valueForm.value8
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
                    {sosAssistance.title1}
                    <span>{sosAssistance.title2}</span>
                  </h2>
                  <h5>
                    {sosAssistance.text1}

                    {sosAssistance.text2}
                  </h5>
                </TitleForm>
                <FormML.Input2
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={sosAssistance.input[0]}
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
                  placeholder={sosAssistance.input[1]}
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
                  placeholder={sosAssistance.input[2]}
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
                  placeholder={sosAssistance.input[3]}
                  mytype="text"
                  required={true}
                  initialValue={initialValue}
                  value={valueForm}
                  name="value4"
                  setValue={setValueForm}
                />
                <FormML.Input2
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={sosAssistance.input[4]}
                  mytype="text"
                  required={true}
                  initialValue={initialValue}
                  value={valueForm}
                  name="value5"
                  setValue={setValueForm}
                />
                <FormML.TextArea2
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={sosAssistance.input[5]}
                  // mytype=""
                  required={true}
                  initialValue={initialValue}
                  value={valueForm}
                  name="value6"
                  setValue={setValueForm}
                />
                <FormML.TextArea2
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={sosAssistance.input[6]}
                  // mytype=""
                  required={true}
                  initialValue={initialValue}
                  value={valueForm}
                  name="value7"
                  setValue={setValueForm}
                />
                <FormML.TextArea2
                  color="#2C3E50"
                  borderColor="#2A93F0"
                  placeholder={sosAssistance.input[7]}
                  // mytype=""
                  required={true}
                  initialValue={initialValue}
                  value={valueForm}
                  name="value8"
                  setValue={setValueForm}
                />
                <InputSubmit type="submit" value={sosAssistance.button} />
              </>
            )}
          </FormML>
        </FormML.Container>
      </>
    )
  );
};

export default Wrapper(SOSAssistance);
