let customerData = {
  id: "1236547",

  personalDetails: {
    fname: "SIG",
    lname: "Doe",
    age: 56,
  },

  address: {
    city: "IA",
    pincode: "01265",
    state: "NA",
    country: "AMERICA",

    billingAddress: {
      //  city: "IAAA",
      pincode: "878451",
    },
  },
};

let result1 = customerData.personalDetails?.fname || "Not Available";
let result2 = customerData?.address?.billingAddress?.city || "Not Available";

console.log(result1);
console.log(result2);
