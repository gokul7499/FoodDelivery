import React, { useState } from "react";
import { toast } from "react-toastify";
function Payment({ setShowPayment }) {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [paymentID, setPaymentID] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const handlePayment = () => {
    if (selectedMethod === "") {
      toast("Please Select a Payment Method");
      return;
    }
    toast.success(`Payment by ${selectedMethod} is successful!`);
    
    setShowPayment(false);
  };

  return (
    <div className="w-full mt-6 bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4 border border-green-300">
      <h2 className="text-xl font-semibold text-gray-700">
        Choose Payment Method
      </h2>

      <div className="flex flex-col gap-3">
        {["UPI", "Credit Card", "Debit Card", "Google Pay", "PhonePe"].map(
          (method, index) => (
            <label key={index} className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value={method.toLowerCase()}
                className="accent-green-500"
                onChange={() => setSelectedMethod(method.toLowerCase())}
              />
              {method}
            </label>
          )
        )}
      </div>

      {/* Show UPI / GPay / PhonePe Input */}
      {["upi", "google pay", "phonepe"].includes(selectedMethod) && (
        <input
          type="text"
          value={paymentID}
          onChange={(e) => setPaymentID(e.target.value)}
          placeholder="Enter UPI ID or Mobile Number"
          className="p-3 border rounded-md w-full focus:outline-green-400"
        />
      )}

      {/* Show Debit/Credit Card Fields */}
      {["debit card", "credit card"].includes(selectedMethod) && (
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Card Number"
            value={cardDetails.number}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, number: e.target.value })
            }
            className="p-3 border rounded-md w-full focus:outline-green-400"
          />
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="MM/YY"
              value={cardDetails.expiry}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, expiry: e.target.value })
              }
              className="p-3 border rounded-md w-1/2 focus:outline-green-400"
            />
            <input
              type="password"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cvv: e.target.value })
              }
              className="p-3 border rounded-md w-1/2 focus:outline-green-400"
            />
          </div>
        </div>
      )}

      <button
        onClick={handlePayment}
        className="mt-4 w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600"
      >
        Confirm Payment
      </button>
    </div>
  );
}

export default Payment;
