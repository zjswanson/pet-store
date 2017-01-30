// all properties are strings, except boolean for adopted and an array of strings for colors
function Animal() {
  this.animalName="";
  this.species= "";
  this.age="";
  this.colors=[""];
  this.breed="";
  this.adopted=false;
  this.vaccinated="";
  this.biography="";
}



function List() {
  this.animalList=[];
};


// method for updating animal values.  requires string input on first parameter.
Animal.prototype.addAnimalDetail = function (category,value) {
  this[category] = value;
};

List.prototype.addToList = function (animal) {
   this.animalList.push(animal);
};

List.prototype.sortAdopted = function (isAdopted) {
  var returnArray = [];
  for (i=0;i<this.animalList.length;i++) {
    var currentAnimal = this.animalList[i]
    if (currentAnimal["adopted"]=== isAdopted)
      returnArray.push(currentAnimal);
  };
  return returnArray;
};


var testAnimal1 = new Animal ()
testAnimal1["adopted"] = true;
var testAnimal2 = new Animal();
var testAnimal3 = new Animal();
var testList = new List();


// 
// $(document).ready(function() {
//   $("#cat1").click(function() {
//     $("#welcome-page").show();
//   });
//
//
//
// });
