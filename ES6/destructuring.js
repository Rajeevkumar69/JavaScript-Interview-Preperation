let user = {
  id: "123",
  firstName: "Chamcham",
  lastName: "Roy",

  address: {
    city: "Begusarai",
    pincode: "123654",
  },
};

let {
  lastName,
  address: { pincode },
} = user;

console.log(pincode, lastName);
