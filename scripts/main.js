// When the document loads
// $(document).ready(function(){

//     console.log("Hello");

//     // -----------------------------------------
//     // Home Page

//     // When the document loads, animate the hero image upwards
//     $(".hero-image").animate({top: '-=100px'});

//     // -----------------------------------------
//     // Browse Page

//     // Hide all description text from the plant cards
//     $("#descriptionText").hide();

//   }); 

//   // When the card is clicked
//   $(".card").click(function(){

//     // Toggle the price & description text
//     $("#priceText").toggle();
//     $("#descriptionText").toggle();

//     // Resize the image to fit the additional content
//     $(".card-img-top").toggleClass("small");

//   });

//creating an array of objects

const plants = [
  {
  "name": "Fikus Tree",
  "price": 350,
  "description": "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space.",
  "image": "plant1.png"
},
{
  "name": "White Sprite Succulent",
  "price": 200,
  "description": "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
  "image": "plant2.png"
},
{
  "name": "Snake Plant",
  "price": 400,
  "description": "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
  "image": "plant3.png"
},
{
  "name": "Parlour Palm",
  "price": 350,
  "description": "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
  "image": "plant4.png"
},
{
  "name": "Japanese Maple",
  "price": 1200,
  "description": "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
  "image": "plant5.png"
}
  
];

function loadPlants () {
  for (let i = 0; i < plants.length; i++) {
      console.log(plants[i]);
      
  }
}

loadPlants();




