//Fontcion pour changer les couleurs des cubes.
//ligne1
let test1 = document.getElementById("l1Square1");
let test2 = document.getElementById("l1Square2");
let test3 = document.getElementById("l1Square3");
let test4 = document.getElementById("l1Square4");

//Ligne2
let test5 = document.getElementById("l2Square1"); //Création de la variable test pris pour l'élément avec ID "Square".
let test6 = document.getElementById("l2Square2");
let test7 = document.getElementById("l2Square3");
let test8 = document.getElementById("l2Square4");
let test9 = document.getElementById("l2Square5");

//ligne3
let test10 = document.getElementById("l3Square1");
let test11 = document.getElementById("l3TopSquare1");//Ligne du haut
let test12 = document.getElementById("l3TopSquare2");
let test13 = document.getElementById("l3TopSquare3");
let test14 = document.getElementById("l3BottomSquare1");//ligne du bas
let test15 = document.getElementById("l3BottomSquare2");
let test16 = document.getElementById("l3BottomSquare3");


//Ligne1
test1.addEventListener("click", fonctionTest, false); //Mise en place de la fonction "fonctionTest" pour le changement de couleur a chaque fois que l'on clique sur l'élément.
test2.addEventListener("click", fonctionTest, false);
test3.addEventListener("click", fonctionTest, false);
test4.addEventListener("click", fonctionTest, false);

//Ligne2
test5.addEventListener("click", fonctionTest, false);
test6.addEventListener("click", fonctionTest, false);
test7.addEventListener("click", fonctionTest, false);
test8.addEventListener("click", fonctionTest, false);
test9.addEventListener("click", fonctionTest, false);

//ligne3
test10.addEventListener("click", fonctionTest, false);
test11.addEventListener("click", fonctionTest, false);
test12.addEventListener("click", fonctionTest, false);
test13.addEventListener("click", fonctionTest, false);
test14.addEventListener("click", fonctionTest, false);
test15.addEventListener("click", fonctionTest, false);
test16.addEventListener("click", fonctionTest, false);


function fonctionTest(){//Création de la fonction qui permet de changer de couleur
  if (this.classList.contains("bg-red")){//This permet de mettre la fonction sur plusieur éléments sans l'écrire pluieur fois.
    this.classList.add("bg-yellow")
    this.classList.remove("bg-red")
    }
    else if (this.classList.contains("bg-yellow")){
      this.classList.add("bg-blue")
      this.classList.remove("bg-yellow")
    }
    else if (this.classList.contains("bg-blue")){
      this.classList.add("bg-white")
      this.classList.remove("bg-blue")
    }
    else if (this.classList.contains("bg-white")){
      this.classList.add("bg-red")
      this.classList.remove("bg-white")
    }
    }
