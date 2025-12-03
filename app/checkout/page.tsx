"use client";
import { useState } from "react";
import Layout from "@/components/layout/Layout";

export default function CheckoutPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Checkout">
      <section className="checkout-section pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Checkout Faqs */}
              <div className="checkout-faqs wow fadeInUp" id="checkout-faq">
                <div className="alert gray-bg">
                  <h6>
                    Returning customer?{" "}
                    <button
                      className="collapsed card-header"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse0"
                    >
                      Click here
                    </button>
                  </h6>
                  <div
                    id="collapse3"
                    className="collapse"
                    data-bs-parent="#checkout-faq"
                  >
                    <form>
                      <p>Please login your account.</p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="email"
                              id="email-address"
                              name="email-address"
                              className="form_control"
                              placeholder="Your Email Address"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="form_control"
                              placeholder="Your Password"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-footer d-flex align-items-center">
                        <button type="submit" className="theme-btn style-one">
                          Login
                        </button>
                        <div className="form-check ms-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="loss-passowrd"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="loss-passowrd"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a href="checkout.html" className="cl-pass">
                        Lost your password?
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="row">
            <div className="col-lg-12">
              <div className="checkout-wrapper mt-50 wow fadeInUp">
                <form className="checkout-form">
                  <div className="row">
                    <div className="col-xl-8">
                      <h4 className="title mb-15">Billing Details</h4>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form_group">
                            <label>First Name*</label>
                            <input
                              type="text"
                              className="form_control"
                              placeholder="First Name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form_group">
                            <label>Last Name*</label>
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Last Name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form_group">
                            <label>Company Name</label>
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Your Company Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form_group">
                            <label>Address*</label>
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Street Address"
                              required
                            />
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Apartment, suite, unit etc. (optional)"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form_group">
                            <label>Town / City*</label>
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Town / City"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form_group">
                            <label>Country*</label>
                            <input
                              type="text"
                              className="form_control"
                              placeholder="United Kingdom (UK)"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form_group">
                            <label>Postcode / Zip*</label>
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Postcode / Zip"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form_group">
                            <label>Contact Info*</label>
                            <input
                              type="email"
                              className="form_control"
                              placeholder="Email Address"
                              name="email"
                              required
                            />
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Your Phone"
                              name="number"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form_group">
                            <label>Order Notes (optional)</label>
                            <textarea
                              name="order-note"
                              className="form_control"
                              placeholder="Notes about your order, e.g. special notes for delivery."
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Shopping Cart Area */}
                    <div className="col-xl-4">
                      <div className="shopping-cart-area mb-50 wow fadeInDown">
                        <h4 className="title mb-15">Your order</h4>
                        <div className="shopping-cart-total">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>Cart Subtotal</td>
                                <td className="price">$270</td>
                              </tr>
                              <tr>
                                <td>Shipping Fee</td>
                                <td className="price">$50</td>
                              </tr>
                              <tr>
                                <td className="total">
                                  <span>Order Total</span>
                                </td>
                                <td className="total price">
                                  <span>$320</span>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan={2} className="accordion-td">
                                  <div
                                    className="form_group"
                                    id="accordion-coupon"
                                  >
                                    <label
                                      onClick={() => setIsOpen(!isOpen)}
                                      style={{ cursor: "pointer" }}
                                    >
                                      Have A Coupon?
                                    </label>

                                    <div
                                      id="collapse01"
                                      className={`collapse ${
                                        isOpen ? "show" : ""
                                      }`}
                                      style={{
                                        transition: "height 0.3s ease",
                                        overflow: "hidden",
                                        height: isOpen ? "auto" : "0",
                                      }}
                                    >
                                      <input
                                        type="text"
                                        className="form_control mt-2"
                                        placeholder="Coupon Code"
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <button className="theme-btn style-one">
                            Complete Order
                          </button>
                        </div>
                      </div>

                      {/* Payment Method */}
                      <div className="payment-method mb-30 wow fadeInDown">
                        <h4 className="title mb-20">Payment Method</h4>
                        <ul id="paymentMethod" className="mb-20">
                          <li className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="method1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="method1"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse0"
                            >
                              Cash On Delivery
                            </label>
                            <div
                              id="collapse0"
                              className="collapse show"
                              data-bs-parent="#paymentMethod"
                            >
                              <p>
                                Pay with cash remains a simple and reliable
                                choice, transcending the complexities of modern
                                finance.
                              </p>
                            </div>
                          </li>
                          <li className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="method2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="method2"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse1"
                            >
                              Direct Bank Transfer
                            </label>
                            <div
                              id="collapse1"
                              className="collapse"
                              data-bs-parent="#paymentMethod"
                            >
                              <p>
                                Please proceed with your payment directly into
                                our bank account. Kindly use your Order ID as
                                the payment reference. Your order will be
                                processed once the payment reflects in our
                                account.
                              </p>
                            </div>
                          </li>
                          <li className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="method3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="method3"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapse2"
                            >
                              Paypal
                            </label>
                            <div
                              id="collapse2"
                              className="collapse"
                              data-bs-parent="#paymentMethod"
                            >
                              <p>
                                You can make your payment via PayPal. If you
                                don't have a PayPal account, you can use your
                                credit card to complete the transaction.
                              </p>
                            </div>
                          </li>
                        </ul>
                        <p>
                          We will utilize your personal data to process your
                          order, enhance your experience on our website, and for
                          other purposes outlined in our{" "}
                          <a href="#">privacy policy</a>.
                        </p>
                        <button className="theme-btn style-one">
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
