$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

var fungusHP = 100;
var attackPoints = 100;

function onReady() {
  $('.attack-btn').on('click', handleAttack);

  // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!

  function handleAttack(event) {
    let attackType = $(this).attr('class').split(' ')[1];

    // Update state variables for attack and hit points with switch statement.
    switch (attackType) {
      case 'arcane-sceptre':
        fungusHP -= 12;
        attackPoints -= 14;
        break;
      case 'entangle':
        fungusHP -= 23;
        attackPoints -= 9;
        break;
      case 'dragon-blade':
        fungusHP -= 38;
        attackPoints -= 47;
        break;
      case 'star-fire':
        fungusHP -= 33;
        attackPoints -= 25;
        break;
    }
