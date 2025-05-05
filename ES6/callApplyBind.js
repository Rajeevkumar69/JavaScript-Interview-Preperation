let employee = {
  firstName: "Rajeev",
  lastName: "Kumar",

  getFullName: function (city) {
    console.log(`${this.firstName} ${this.lastName} from ${city}`);
  },
};

let customer = {
  firstName: "Harsh",
  lastName: "Babu",
};

// Call
employee.getFullName.call(customer, "Begusarai");

// Apply
employee.getFullName.apply(customer, ["Delhi"]);

// Bind
let result = employee.getFullName.bind(customer);
result("Patna");
