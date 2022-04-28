import React from 'react';
import { useFormik } from 'formik';

const states = ["AK", "AL", "AR", "AS", "AZ", 
                "CA", "CO", "CT", "DC", "DE", 
                "FL", "GA", "GU", "HI", "IA", 
                "ID", "IL", "IN", "KS", "KY", 
                "LA", "MA", "MD", "ME", "MI", 
                "MN", "MO", "MP", "MS", "MT", 
                "NC", "ND", "NE", "NH", "NJ", 
                "NM", "NV", "NY", "OH", "OK", 
                "OR", "PA", "PR", "RI", "SC", 
                "SD", "TN", "TX", "UM", "UT", 
                "VA", "VI", "VT", "WA", "WI", 
                "WV", "WY"]

const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    }
 
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Required';
      } else if (!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(values.phoneNumber)) {
        errors.phoneNumber = 'Invalid phone number';
    }

    if (!values.address) {
        errors.address = 'Required';
    }

    if (!values.city) {
        errors.city = 'Required';
    }

    if (!values.state) {
        errors.state = 'Required';
    }

    if (!values.zipcode) {
        errors.zipcode = 'Required';
      } else if (!/(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/i.test(values.zipcode)) {
        errors.zipcode = 'Invalid zip code';
    }

    if (!values.cardFirstName) {
        errors.cardFirstName = 'Required';
    }
  
    if (!values.cardLastName) {
        errors.cardLastName = 'Required';
    }

    if (!values.cardNumber) {
        errors.cardNumber = 'Required';
      } else if (!/([0-9]{13,19}$)/i.test(values.cardNumber)) {
        errors.cardNumber = 'Invalid credit card number';
    }

    if (!values.cvc) {
        errors.cvc = 'Required';
    } else if (!/(^[0-9]{3,4}$)/i.test(values.cvc)) {
        errors.cvc = 'Invalid CVC';
    }

    if (!values.expDate) {
        errors.expDate = 'Required';
        
    } else if (!/(^(0[1-9]|1[0-2])\/?([0-9]{2})$)/i.test(values.expDate)) {
        errors.expDate = 'Invalid Date'
    }

    if (!values.sameAddresses) {
        if (!values.billingAddress) {
            errors.billingAddress = 'Required';
        }

        if (!values.billingCity) {
            errors.billingCity = 'Required';
        }
    
        if (!values.billingState) {
            errors.billingState = 'Required';
        }
    
        if (!values.billingZipcode) {
            errors.billingZipcode = 'Required';
          } else if (!/(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/i.test(values.billingZipcode)) {
            errors.billingZipcode = 'Invalid zip code';
        }
    }

    return errors;
  };

const PaymentForm = ({ item }) => {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          address: '',
          apartment: '',
          city: '',
          state: 'AK',
          zipcode: '',
          cardFirstName: '',
          cardLastName: '',
          cardNumber: '',
          cvc: '',
          expDate: '',
          sameAddresses: true,
          billingAddress: '',
          billingApartment: '',
          billingCity: '',
          billingState: 'AK',
          billingZipcode: ''
        },
        validate,
        onSubmit: (values) => {
            window.location.href="/#/store/" + item.name.replaceAll(" ", "-").toLowerCase() + "/checkout/confirm";
            console.log(values);
        },
    });
    return(
        <div>
            <form id="form1" onSubmit={formik.handleSubmit}>
                <div style={{ fontSize: "16pt", fontWeight: "bolder", color: "#190944", marginTop: "10px" }}>
                    Shipping Information
                </div>
                <div className='form-row'>
                    <div>
                        <input style={{ width: "150px" }} className="input-field" placeholder="First Name" id="firstName"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} />
                        {formik.touched.firstName && formik.errors.firstName ? (<div className="error-message">{formik.errors.firstName}</div>) : null}
                    </div>
                    <div>
                        <input style={{ width: "150px" }} className="input-field" placeholder="Last Name" id="lastName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} />
                        {formik.touched.lastName && formik.errors.lastName ? (<div className="error-message">{formik.errors.lastName}</div>) : null}
                    </div>
                </div>
                <div className='form-row'>
                    <div>
                        <input style={{ width: "320px" }} className="input-field" placeholder="Email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                        {formik.touched.email && formik.errors.email ? (<div className="error-message">{formik.errors.email}</div>) : null}
                    </div>
                    <div>
                        <input style={{ width: "150px" }} className="input-field" placeholder="Phone Number" id="phoneNumber" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phoneNumber} />
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (<div className="error-message">{formik.errors.phoneNumber}</div>) : null}
                    </div>
                </div>
                <div className='form-row'>
                    <div>
                        <input style={{ width: "320px" }} className="input-field" placeholder="Street Address" id="address" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} />
                        {formik.touched.address && formik.errors.address ? (<div className="error-message">{formik.errors.address}</div>) : null}
                    </div>
                </div>
                <div className='form-row'>
                    <input style={{ width: "320px" }} className="input-field" placeholder="Apartment, suite, etc." id="apartment" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.apartment} />
                </div>
                <div className='form-row'>
                    <div>
                        <input style={{ width: "150px" }} className="input-field" placeholder="City" id="city" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} />
                        {formik.touched.city && formik.errors.city ? (<div className="error-message">{formik.errors.city}</div>) : null}
                    </div>
                    <div>
                        <select id="state" className='select-field' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.state}>
                            {states.map(state => <option value={state}>{state}</option>)}
                            {formik.touched.state && formik.errors.state ? (<div className="error-message">{formik.errors.state}</div>) : null}
                        </select>
                    </div>
                    <div>
                        <input style={{ width: "150px" }} className="input-field" placeholder="Zip Code" id="zipcode" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.zipcode} />
                        {formik.touched.zipcode && formik.errors.zipcode ? (<div className="error-message">{formik.errors.zipcode}</div>) : null}
                    </div>
                </div>
                <div style={{ fontSize: "16pt", fontWeight: "bolder", color: "#190944", marginTop: "20px" }}>
                    Payment Information
                </div>
                <div className='form-row'>
                    <div>
                        <input style={{ width: "150px" }} className="input-field" placeholder="Cardholder First Name" id="cardFirstName"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cardFirstName} />
                        {formik.touched.cardFirstName && formik.errors.cardFirstName ? (<div className="error-message">{formik.errors.cardFirstName}</div>) : null}
                    </div>
                    <div>
                        <input style={{ width: "150px" }} className="input-field" placeholder="Cardholder Last Name" id="cardLastName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cardLastName} />
                        {formik.touched.cardLastName && formik.errors.cardLastName ? (<div className="error-message">{formik.errors.cardLastName}</div>) : null}
                    </div>
                </div>
                <div className='form-row'>
                    <div>
                        <input style={{ width: "150px" }} className="input-field" placeholder="Cardholder Number" id="cardNumber"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cardNumber} />
                        {formik.touched.cardNumber && formik.errors.cardNumber ? (<div className="error-message">{formik.errors.cardNumber}</div>) : null}
                    </div>
                    <div>
                        <input style={{ width: "50px" }} className="input-field" placeholder="CVC" id="cvc" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cvc} />
                        {formik.touched.cvc && formik.errors.cvc ? (<div className="error-message">{formik.errors.cvc}</div>) : null}
                    </div>
                    <div>
                        <input style={{ width: "50px" }} className="input-field" placeholder="MM/YY" id="expDate" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.expDate} />
                        {formik.touched.expDate && formik.errors.expDate ? (<div className="error-message">{formik.errors.expDate}</div>) : null}
                    </div>
                </div>
                <div className='form-row'>
                    <input type="checkbox" className='input-checkbox' id="sameAddresses" onChange={formik.handleChange} onBlur={formik.handleBlur} checked={formik.values.sameAddresses} />
                    Billing Address Same as Mailing Address
                </div>
                {!formik.values.sameAddresses ?
                <div>
                    <div style={{ fontSize: "16pt", fontWeight: "bolder", color: "#190944", marginTop: "20px" }}>
                        Billing Address
                    </div>
                    <div className='form-row'>
                        <div>
                            <input style={{ width: "320px" }} className="input-field" placeholder="Street Address" id="billingAddress" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.billingAddress} />
                            {formik.touched.billingAddress && formik.errors.billingAddress ? (<div className="error-message">{formik.errors.billingAddress}</div>) : null}
                        </div>
                    </div>
                    <div className='form-row'>
                        <div>
                            <input style={{ width: "320px" }} className="input-field" placeholder="Apartment, suite, etc." id="billingApartment" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.billingApartment} />
                            {formik.touched.billingApartment && formik.errors.billingApartment ? (<div className="error-message">{formik.errors.billingApartment}</div>) : null}
                        </div>
                    </div>
                    <div className='form-row'>
                        <div>
                            <input style={{ width: "150px" }} className="input-field" placeholder="City" id="billingCity" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.billingCity} />
                            {formik.touched.billingCity && formik.errors.billingCity ? (<div className="error-message">{formik.errors.billingCity}</div>) : null}
                        </div>
                        <div>
                            <select id="billingState" className='select-field' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.billingState}>
                                {states.map(state => <option value={state}>{state}</option>)}
                                {formik.touched.billingState && formik.errors.billingState ? (<div className="error-message">{formik.errors.billingState}</div>) : null}
                            </select>
                        </div>
                        <div>
                            <input style={{ width: "150px" }} className="input-field" placeholder="Zip Code" id="billingZipcode" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.billingZipcode} />
                            {formik.touched.billingZipcode && formik.errors.billingZipcode ? (<div className="error-message">{formik.errors.billingZipcode}</div>) : null}
                        </div>
                    </div>
                </div> : null}
            </form>
        </div>
    )
}

export default PaymentForm;
