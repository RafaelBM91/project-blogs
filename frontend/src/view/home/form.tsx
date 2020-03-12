import * as React from "react";
import { LanguageContext } from "../../context/language";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_DIAGNOSTIG } from "../../graphql/querys/diagnostic";
import Wrapper from "../../graphql/provider";
//Mango-ly
import { FormML } from "../../mangoLy";

//Styled-Components
import { HomeSectionTitle } from "./SectionStyled";
import {
  TitleForm,
  BgColor,
  SendOk,
  InputSubmit,
  ContainerImg,
  ContainerText
} from "./formStyled";
//Image
import img1 from "../img/home/formImg1.png";
import img2 from "../img/home/formImg2.png";
import img3 from "../img/home/formImg3.png";
import img4 from "../img/home/formImg4.png";
import img5 from "../img/home/formImg8.jpg";
import check from "../img/home/formCheck.svg";
export interface FormComponentProps {}
interface iInitialValue {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
}

const FormComponent: React.SFC<FormComponentProps> = () => {
  const { languageConfig, language } = React.useContext(LanguageContext);
  let form = languageConfig[language].home.form;
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
            name: valueForm.value2,
            url: valueForm.value1,
            email: valueForm.value3,
            phone: valueForm.value4
          }
        }
      }
    });
    setSendOk(true);
    setValueForm(initialValue);
  };
  const TitleFomr = () => {
    return languageConfig[language] ? (
      <HomeSectionTitle>
        <h2>
          {form.title1}
          <strong>{form.span1}</strong>
        </h2>
        <div>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
      </HomeSectionTitle>
    ) : null;
  };
  return languageConfig[language] ? (
    <BgColor>
      <FormML.Container title={<TitleFomr />}>
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
                  {form.title2}
                  {/* <br /> */}
                  <span>{form.title2br}</span>
                </h2>
                <h5>
                  <strong>{form.span3}</strong>
                  {form.title3}
                </h5>
              </TitleForm>
              <FormML.Input2
                color="#2C3E50"
                borderColor="#2A93F0"
                placeholder={form.input1}
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
                placeholder={form.input2}
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
                placeholder={form.input3}
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
                placeholder={form.input4}
                mytype="text"
                required={true}
                initialValue={initialValue}
                value={valueForm}
                name="value4"
                setValue={setValueForm}
              />
              <InputSubmit type="submit" value={form.button} />
            </>
          )}
        </FormML>
      </FormML.Container>
    </BgColor>
  ) : null;
};

export default Wrapper(FormComponent);
