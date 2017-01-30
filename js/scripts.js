// all properties are strings, except boolean for adopted and an array of strings for colors
function Animal(animalName,species,age,colors,breed,vaccinated,biography) {
  this.animalName= animalName;
  this.species= species;
  this.age=age;
  this.colors=colors;
  this.breed=breed;
  this.adopted=false;
  this.vaccinated=vaccinated;
  this.biography=biography;
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

var clearForm = function(){
  $("#pet-species").val("");
  $("#pet-breed").val("");
  $("#pet-age").val("");
  $("#pet-name").val("");
  $("#pet-colors").val("");
  $("input:radio[name=vaccinated]:checked").prop("checked",false);
  $("#pet-bio").val("");
}
var globalList = new List();


//Front end
$(document).ready(function(){
  $("form#enter-pet-form").submit(function(event){
    event.preventDefault();
    var species = $("#pet-species").val();
    var breed = $("#pet-breed").val();
    var age = $("#pet-age").val();
    var animalName = $("#pet-name").val();
    var colors = $("#pet-colors").val();
    var vaccinated = $("input:radio[name=vaccinated]:checked").val();
    var biography = $("#pet-bio").val();
    var newAnimal = new Animal(animalName,species,age,colors,breed,vaccinated,biography);
    globalList.addToList(newAnimal);
    clearForm();
  });

});
