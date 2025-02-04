import React, { useState } from "react";
export default function ConatctUs({ contactType }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [state, setState] = useState({
    fullName: "",
    emailAddeess: "",
    type: contactType.length ? contactType[0].code : "",
    mobileNumber: "",
    message: "",
    isChecked: null,
  });
  const [invalidState, setInvalidState] = useState({
    fullNameInvalid: false,
    EmailInvalid: false,
    mobileNumberInvalid: false,
    typeInvalid: false,
    messageInvalid: false,
    isCheckedInvalid: false,
  });
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const updateState = (val, prop, invalidProp) => {
    setSuccess(false);
    setState((prvState) => ({ ...prvState, [prop]: val }));
    if (invalidProp) {
      setInvalidState((prvState) => ({
        ...prvState,
        [invalidProp]: false,
      }));
    }
  };

  const checks = () => {
    if (state.fullName === "" || state.fullName < 3) {
      setInvalidState((prvState) => ({
        ...prvState,
        fullNameInvalid: true,
      }));
      return false;
    } else if (
      state.emailAddeess === "" ||
      !validateEmail(state.emailAddeess)
    ) {
      setInvalidState((prvState) => ({
        ...prvState,
        EmailInvalid: true,
      }));
      return false;
    } else if (state.type === "") {
      setInvalidState((prvState) => ({
        ...prvState,
        typeInvalid: true,
      }));
      return false;
    } else if (state.message === "") {
      setInvalidState((prvState) => ({
        ...prvState,
        messageInvalid: true,
      }));
      return false;
    } else if (state.isChecked === false || state.isChecked === null || state.isChecked === undefined) {
      setInvalidState((prvState) => ({
        ...prvState,
        isCheckedInvalid: true,
      }));
      return false;
    }
    else if (state.isChecked === false|| state.isChecked === null) {
      setInvalidState((prvState) => ({
        ...prvState,
        isCheckedInvalid: true,
      }));
      return false;
    }
    return true;
  };
  const onSubmit = () => {
    if (checks()) {
      setLoading(true);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      };
      fetch(
        "https://userapi.gridgamers.com/api/v1/setting/contactus",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          setSuccess(true);
          setLoading(false);
          setState({
            fullName: "",
            emailAddeess: "",
            type: contactType.length ? contactType[0].code : "",
            mobileNumber: "",
            message: "",
          });
        });
      // setTimeout(() => {
      //   setLoading(false);
      // }, 1000);
    }
  };
  return (
    <div className="xs:px-0 md:px-20 3xl:px-0  xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  xl:max-w-screen-xl  2xl:max-w-screen-2xl   py-0 md:py-16    mt-[40px] lg:mt-24 mx-auto">
      <p
        style={{ fontFamily: "Sigmar One" }}
        className="    text-white-300 font-bold text-center     	text-[24px] lg:text-[32px]   "
      >
        Contact us
      </p>
      <p className="    text-white-300 text-center     	text-[14px] lg:text-[18px]   ">
        Get in Touch With Us
      </p>

      <div className="lg:w-1/2 xs:w-full m-auto mt-[50px]  bg-transparent md:block p-2">
        {success && (
          <p className="    text-green-500 text-center mb-[10px]     	text-[14px] lg:text-[18px]   ">
            Your message has been sent successfully.Our representative will
            conact you shortly,thanks!
          </p>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4	 ">
          <div className=" mb-4">
            <label
              htmlFor="name"
              className="text-[16px] font-medium leading-[30px] text-white-300"
            >
              Full Name
            </label>
            <input
              value={state.fullName}
              onChange={(e) =>
                updateState(e.target.value, "fullName", "fullNameInvalid")
              }
              style={{
                borderColor: invalidState.fullNameInvalid ? "red" : null,
              }}
              type="text"
              id="name"
              name="name"
              className="p-[12px] w-full  leading-[30px] mt-[4px] border-[1px] text-white-300 border-[#C8C8C8] rounded-[15px] bg-transparent"
              placeholder="Enter Your Full Name"
            />
          </div>

          <div className=" mb-4">
            <label
              htmlFor="message"
              className="text-[16px] font-medium text-white-300 leading-[30px]"
            >
              Email
            </label>
            <input
              style={{
                borderColor: invalidState.EmailInvalid ? "red" : null,
              }}
              value={state.emailAddeess}
              onChange={(e) =>
                updateState(e.target.value, "emailAddeess", "EmailInvalid")
              }
              type="message"
              id="Email"
              name="Email"
              className="p-[12px] leading-[30px] w-full mt-[4px] border-[1px] text-white-300 border-[#C8C8C8] rounded-[15px] bg-transparent"
              placeholder="Enter Your Email Address"
            />
          </div>

          <div className=" mb-4">
            <label
              htmlFor="name"
              className="text-[16px] font-medium leading-[30px] text-white-300"
            >
              Phone Number
            </label>
            <input
              style={{
                borderColor: invalidState.mobileNumberInvalid ? "red" : null,
              }}
              value={state.mobileNumber}
              onChange={(e) =>
                updateState(
                  e.target.value,
                  "mobileNumber",
                  "mobileNumberInvalid"
                )
              }
              type="tel"
              id="name"
              name="name"
              className="p-[12px] w-full  leading-[30px] mt-[4px] border-[1px] text-white-300 border-[#C8C8C8] rounded-[15px] bg-transparent"
              placeholder="Enter Your Phone Number"
            />
          </div>

          <div className=" mb-4 ">
            <label
              htmlFor="message"
              className="text-[16px] font-medium text-white-300 leading-[30px]"
            >
              Potential
            </label>
            <select
              style={{
                borderColor: invalidState.typeInvalid ? "red" : null,
              }}
              value={state.type}
              onChange={(e) =>
                updateState(e.target.value, "type", "typeInvalid")
              }
              className=" classic p-[16px] w-full 0      leading-[30px] mt-[4px] border-[1px] text-white-300 border-[#C8C8C8] rounded-[15px] bg-transparent"
            >
              {contactType.map((x) => {
                return (
                  <option
                    key={x.id}
                    className="rounded-[15px]  bg-black-600"
                    value={x.code}
                  >
                    {x.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="w-full mb-4">
          <label
            htmlFor="message"
            className="text-[16px] font-medium text-white-300 leading-[30px]"
          >
            Message
          </label>
          <textarea
            style={{
              borderColor: invalidState.messageInvalid ? "red" : null,
            }}
            value={state.message}
            onChange={(e) =>
              updateState(e.target.value, "message", "messageInvalid")
            }
            id="message"
            name="message"
            className="p-[20px] leading-[30px] h-[122px] w-full mt-[4px] border-[1px] text-white-300 border-[#C8C8C8] rounded-[15px] bg-transparent"
            placeholder="Type here.."
            defaultValue={""}
          />
        </div>

        <div className="flex w-full">
          <input
            style={{
              borderColor: invalidState.isCheckedInvalid ? "red" : null,
            }}
            type="checkbox"
            id="vehicle3"
            name="vehicle3"
            onClick={(e) => {
              setState((prvState) => ({
                ...prvState,
                isChecked: !state.isChecked,
              }));
              setInvalidState((prvState) => ({
                ...prvState,
                isCheckedInvalid: false,
              }));
            }}
            checked={state.isChecked}
          />
          <label
            style={{
              color: invalidState.isCheckedInvalid ? "red" : null,
            }}
            color="white"
            className="text-white-300 ml-5"
            for="vehicle2"
          >
            {" "}
            By checking this box you agreed to receive an SMS from us
          </label>
        </div>

        <div className="p-[2px] w-full mt-[40px]">
          <button
            onClick={onSubmit}
            className="w-full bg-[#298BE2] text-white-300 p-[20px] rounded-[15px]"
          >
            {loading ? "Sending... Please wait..." : "Send Message"}
          </button>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  // Call the fetch method and passing
  // the pokeAPI link
  const response = await fetch(
    "https://userapi.gridgamers.com/api/v1/lookup/contact-type"
  );

  // Parse the JSON
  const data = await response?.json();

  // Finally we return the result
  // inside props as allPokemons
  return {
    props: { contactType: data?.response },
  };
}
