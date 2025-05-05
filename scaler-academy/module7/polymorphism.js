// Ploymorphism
// Polymorphism is a key concept in object-oriented programming (OOP) that allows methods to do different things based on the object it is acting upon, even though they share the same name. This ability to process objects differently based on their data type or class is what makes polymorphism a powerful tool in OOP. There are two main types of polymorphism: compile-time (method overloading) and runtime (method overriding).
class animal {
  sound() {
    console.log(`Animal makes different sounds`);
  }
}

class dog {
  sound() {
    console.log(`Dog Barks`);
  }
}

class cat {
  sound() {
    console.log(`Cat Mews`);
  }
}

var animal1 = new animal();
animal1.sound();
var dog1 = new dog();
dog1.sound();
var cat1 = new cat();
cat1.sound();

//                            ****example 2
class Animal {
  sound() {
    console.log(`Animal makes different sounds`);
  }
}

class Dog extends Animal {
  sound() {
    console.log(`Dog Barks`);
  }
}

class Cat extends Animal {
  sound() {
    console.log(`Cat Mews`);
  }
}

class Cow extends Animal {
  sound() {
    console.log(`Cow Moos`);
  }
}

var animals = [new Animal(), new Dog(), new Cat(), new Cow()];

animals.forEach((animal) => {
  animal.sound();
});
