import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"sjda 12-32ss dsad"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Abhishek"}
          </p>
          <p>
            <b>Phone</b>
            {2131232123}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"23-02-2002"}
          </p>
          <p>
            <b>Delivered At</b>
            {"23-02-2003"}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b>#{"asdasdsadsad"}
          </p>
          <p>
            <b>Paid At</b>
            {"23-02-2003"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹{1800}
          </p>
          <p>
            <b>Shipping Charges</b>₹{110}
          </p>
          <p>
            <b>Tax</b>₹{0.18}
          </p>
          <p>
            <b>Total Amount</b>₹{0.18 + 110 + 1800}
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{120}</span>
            </div>
          </div>
          <div>
            <h4>BBQ Burger</h4>
            <div>
              <span>{10}</span> x <span>{210}</span>
            </div>
          </div>
          <div>
            <h4>Tandoori Burger</h4>
            <div>
              <span>{10}</span> x <span>{310}</span>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹{1800}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;