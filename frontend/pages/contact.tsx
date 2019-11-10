import Wrapper from "../providers";
import { CREATE_CONTACT } from "../queries/contact";
import { useMutation } from "@apollo/react-hooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Nav } from "../components/nav";
import { Top } from "../components/top";
import { Footer } from "../components/footer";
import { Message } from '../components/message';

const About = () => {
  let name;
  let email;
  let message;
  const [addTodo, { data }] = useMutation(CREATE_CONTACT);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Top />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Nav />
        <div style={{ width: "calc(100% - 290px)", paddingTop: "10px" }}>
          <h1 className="title">Contact Us</h1>

          <div style={{ width: "400px" }}>
            {
              (data !== undefined) ?
                <Message id={data.createContact.contact.id} />
              :
                <>
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        ref={node => {
                          name = node;
                        }}
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    {/* <p className="help is-danger">This email is invalid</p> */}
                  </div>

                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input
                        className="input is-danger"
                        type="text"
                        ref={node => {
                          email = node;
                        }}
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                    <p className="help is-danger">This email is invalid</p>
                  </div>

                  <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        style={{ resize: "none" }}
                        ref={node => {
                          message = node;
                        }}
                      ></textarea>
                    </div>
                  </div>

                  <div className="field is-grouped">
                  <div className="control">
                    <button
                      className="button is-link"
                      onClick={e => {
                        addTodo({ variables: {
                          input: {
                            data: {
                              name: name.value,
                              email: email.value,
                              message: message.value,
                            }
                          }
                        } });
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                </>
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper(About);
