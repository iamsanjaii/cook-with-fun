document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".auto", {
    strings: ["to", "Cook with Fun 2.0"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  });
});
const GiveRecipe = document.getElementById("recipe-btn");
// GiveRecipe.addEventListener("click", function () {
//   console.log("Hello World");
// });
GiveRecipe.addEventListener("click", function () {
  var typed = new Typed(".recipe-tutorial", {
    strings: [
      "To make refreshing lemon juice, start by rolling and juicing 4 large lemons to yield about 1 cup of juice, straining out seeds and pulp if desired. Dissolve 1 cup of granulated sugar in 1 cup of hot water to create a simple syrup. Combine the lemon juice and simple syrup in a pitcher, then add 4 cups of cold water, adjusting sweetness to taste. Serve over ice, optionally garnished with fresh mint leaves, and refrigerate for an hour if you prefer it chilled. This recipe yields 6-8 servings of homemade lemon juice.",
    ],
    typeSpeed: 50,
    // backSpeed: null,
    loop: false,
  });
});
