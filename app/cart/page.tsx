'use client';
import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Gourmet Griddl Masterpiece",
      price: 125,
      quantity: 1,
      img: "/assets/images/product/cart-1.jpg",
      link: "/menu-details",
    },
    {
      id: 2,
      title: "Skyline Epicurean Delight",
      price: 150,
      quantity: 1,
      img: "/assets/images/product/cart-2.jpg",
      link: "/menu-details",
    },
    {
      id: 3,
      title: "Burger and Soft Drinks",
      price: 45,
      quantity: 1,
      img: "/assets/images/product/cart-3.jpg",
      link: "/menu-details",
    },
  ]);

  const shippingFee = 50;

  const handleIncrease = (id: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartSubtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const orderTotal = cartSubtotal + shippingFee;

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Cart">
      <section className="cart-section pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              {/* Cart Table */}
              <div className="cart-wrapper wow fadeInUp">
                <div className="cart-table table-responsive">
                  <table className="table">
                    <tbody>
                      {cartItems.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="text-center py-5">
                            Your cart is empty 😢
                          </td>
                        </tr>
                      ) : (
                        cartItems.map((item) => (
                          <tr key={item.id}>
                            <td className="thumbnail-title">
                              <Image
                                src={item.img}
                                alt={item.title}
                                width={80}
                                height={80}
                              />
                              <span className="title">
                                <Link href={item.link}>{item.title}</Link>
                              </span>
                            </td>
                            <td className="price">${item.price}</td>
                            <td className="quantity">
                              <div className="quantity-input">
                                <button
                                  onClick={() => handleDecrease(item.id)}
                                  className="quantity-down"
                                >
                                  <i className="far fa-minus"></i>
                                </button>
                                <input
                                  className="quantity"
                                  type="text"
                                  value={item.quantity}
                                  readOnly
                                />
                                <button
                                  onClick={() => handleIncrease(item.id)}
                                  className="quantity-up"
                                >
                                  <i className="far fa-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="subtotal">
                              ${item.price * item.quantity}
                            </td>
                            <td className="remove">
                              <button
                                onClick={() => handleRemove(item.id)}
                                className="btn btn-link p-0 text-danger"
                              >
                                <i className="fas fa-trash-alt"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cart Middle */}
              <div className="cart-middle mt-40 wow fadeInUp">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="coupon-box mb-30">
                      <form>
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Coupon Code"
                          />
                          <button
                            className="theme-btn style-one"
                            type="submit"
                          >
                            Apply Coupon
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="update-cart float-lg-right mb-30">
                      <button className="theme-btn style-one">
                        Update Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Totals */}
            <div className="col-xl-4">
              <div className="shopping-cart-total mb-30 wow fadeInUp">
                <h4 className="title">Cart Totals</h4>
                <table className="table mb-25">
                  <tbody>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td className="price">${cartSubtotal}</td>
                    </tr>
                    <tr>
                      <td>Shipping Fee</td>
                      <td className="price">${shippingFee}</td>
                    </tr>
                    <tr>
                      <td className="total">
                        <span>Order Total</span>
                      </td>
                      <td className="total price">
                        <span>${orderTotal}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link href="/checkout" className="theme-btn style-one">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}