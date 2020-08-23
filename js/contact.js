console.log("contact js loaded");

// HTML should be onclick. not onClick!!
function promptTY(e) {
  e.preventDefault(); // in order for this to work, e must be passed into the inlineEventHandlerAttribute as a parameter! AND, element must be button and NOT input.

  console.log("TY!");
}