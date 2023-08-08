import useFormField from "@/utils/useFormField";
import DropShadowText from "./DropShadowText";
import InputField from "./InputField";
import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [firstNameField, firstNameProps] = useFormField("");
  const [lastNameField, lastNameProps] = useFormField("");
  const [emailField, emailProps] = useFormField("");
  const [companyField, companyProps] = useFormField("");
  const [geoInterestedField, geoInterestedProps] = useFormField("");
  const [areYouField, areYouProps] = useFormField("");
  const [trafficTypesField, trafficTypesProps] = useFormField("");
  const [productsInterestedField, productInterestedProps] = useFormField("");
  const [contactField, contactProps] = useFormField("");
  const [messageField, messageProps] = useFormField("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let error = false;
    if (firstNameField.value.trim() == "") {
      error = true;
      firstNameField.setError("First Name is required");
    }
    if (lastNameField.value.trim() == "") {
      error = true;
      lastNameField.setError("Last Name is required");
    }
    if (companyField.value.trim() == "") {
      error = true;
      companyField.setError("Company is required");
    }
    if (geoInterestedField.value.trim() == "") {
      error = true;
      geoInterestedField.setError("GEO is required");
    }
    if (areYouField.value.trim() == "") {
      error = true;
      areYouField.setError("This field is required");
    }
    if (trafficTypesField.value.trim() == "") {
      error = true;
      trafficTypesField.setError("Traffic types are required");
    }
    if (productsInterestedField.value.trim() == "") {
      error = true;
      productsInterestedField.setError("This field is required");
    }
    if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailField.value,
      )
    ) {
      error = true;
      emailField.setError("You have entered an invalid email address!");
    }
    if (emailField.value.trim() == "") {
      error = true;
      emailField.setError("Email is required");
    }
    if (contactField.value.trim() == "") {
      error = true;
      contactField.setError("Contact number is required");
    }
    if (messageField.value.trim() == "") {
      error = true;
      messageField.setError("Message is required");
    }
    if (!error) handleSubmit();
  };
  const handleSubmit = async () => {
    // try {
    //   setIsSubmitting(true);
    //   const data = {
    //     name: nameField.value,
    //     email: emailField.value,
    //     contact: contactField.value,
    //     message: requestField.value,
    //   };
    //   const res = await appsApi.post("contactus/create", data);
    //   if (res.status == 201) {
    //     props.onClose();
    //     toast.success("Request submitted!");
    //   }
    // } catch (error) {
    //   if (
    //     error.response &&
    //     error.response.data &&
    //     error.response.data.message
    //   ) {
    //     toast.error(error.response.data.message);
    //   }
    //   console.error(error);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };
  return (
    <div className="md:contactUs-div relative aspect-[0.926] max-w-6xl mx-auto bg-darkBg md:border-x-[2px] border-t-[1px] md:border-t-[2px] border-emerald-300">
      <div className="absolute w-20 h-10 hidden md:block skew-x-[48deg] right-[18px] border-r-[2px] border-emerald-300" />
      <div className="absolute w-20 h-10 hidden md:block -skew-x-[46deg] left-[17px] border-l-[2px] border-emerald-300" />
      <div className="mt-[100px] max-md:default-max-width">
        <DropShadowText withLine={false}>Take the First Step</DropShadowText>

        <div className="grid grid-cols-1 md:grid-cols-2 md:px-[120px] items-center justify-center contactUs-grid">
          <InputField
            type={"text"}
            placeholder={"First name"}
            {...firstNameProps}
          />
          <InputField
            type={"text"}
            placeholder={"Last name"}
            {...lastNameProps}
          />
          <InputField
            type={"text"}
            placeholder={"Email Address"}
            {...emailProps}
          />
          <InputField
            type={"tel"}
            placeholder={"Contact Number"}
            {...contactProps}
          />
          <InputField type={"text"} placeholder={"Company"} {...companyProps} />
          <InputField
            type={"text"}
            placeholder={"Traffic Types"}
            {...trafficTypesProps}
          />
          <InputField
            type={"text"}
            placeholder={"GEOs Interested in"}
            {...geoInterestedProps}
          />
          <InputField
            type={"text"}
            placeholder={"Products Interested in"}
            {...productInterestedProps}
          />
          <InputField type={"text"} placeholder={"Are you?"} {...areYouProps} />

          <InputField
            type={"textArea"}
            placeholder={"Message"}
            {...messageProps}
          />
        </div>
        <div className="mt-[140px] pb-[120px]">
          {isSubmitting ? (
            <Button type="outlined" color="primary">
              Submitting...
            </Button>
          ) : (
            <Button onClick={validate} type="solid" color="primary">
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
