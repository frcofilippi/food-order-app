import classes from "./Checkout.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../UI/Button";

const Checkout = (props) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    zipcode: "",
    city: "",
  };

  const yupValidator = Yup.object({
    firstName: Yup.string()
      .max(25, "First name must be 25 characters or less")
      .required("First name is a required field."),
    lastName: Yup.string()
      .max(25, "Last name must be 25 characters or less")
      .required("Last name is a required field"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    street: Yup.string().required("Streen address information is required"),
    zipcode: Yup.string().required(
      "Zipcode is required to calculate the shipping cost"
    ),
    city: Yup.string().required("The city is required for checking out."),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yupValidator,
    onSubmit: props.onConfirm
  });

  return (
    <form className={classes["checkout-form"]} onSubmit={formik.handleSubmit}>
        <h2 className={classes['form-title']}>Your checkout details:</h2>
      <div className={classes["form-row"]}>
        <div className={classes["form-column"]}>
          <label htmlFor="firstName">First name:</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p className={classes.validationMessage}>
              {formik.errors.firstName}
            </p>
          ) : null}
        </div>
        <div className={classes["form-column"]}>
          <label htmlFor="lastName">Last name:</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p className={classes.validationMessage}>
              {formik.errors.lastName}
            </p>
          ) : null}
        </div>
      </div>
      <div className={classes["form-row"]}>
        <div className={classes["form-column"]}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={classes.validationMessage}>{formik.errors.email}</p>
          ) : null}
        </div>
      </div>
      <div className={classes["form-row"]}>
        <div className={classes["form-column"]}>
          <label htmlFor="street">Street name:</label>
          <input
            id="street"
            name="street"
            type="text"
            value={formik.values.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.street && formik.errors.street ? (
            <p className={classes.validationMessage}>{formik.errors.street}</p>
          ) : null}
        </div>
        <div className={classes["form-column"]}>
          <label htmlFor="zipcode">Zip code:</label>
          <input
            id="zipcode"
            name="zipcode"
            type="number"
            value={formik.values.zipcode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.zipcode && formik.errors.zipcode ? (
            <p className={classes.validationMessage}>{formik.errors.zipcode}</p>
          ) : null}
        </div>
        <div className={classes["form-column"]}>
          <label htmlFor="city">City:</label>
          <input
            id="city"
            name="city"
            type="text"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.city && formik.errors.city ? (
            <p className={classes.validationMessage}>{formik.errors.city}</p>
          ) : null}
        </div>
      </div>
      <div className={classes["form-row"]}>
        <Button label={"Confirm"} />
      </div>
    </form>
  );
};

export default Checkout;
