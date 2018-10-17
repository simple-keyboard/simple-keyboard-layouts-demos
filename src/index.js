/**
 * simple-keyboard documentation
 * https://github.com/hodgef/simple-keyboard
 */

import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

/**
 * Available layouts
 * https://github.com/hodgef/simple-keyboard-layouts/tree/master/src/lib/layouts
 */
import layout from "simple-keyboard-layouts/build/layouts/japanese";

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  layout: layout
});

/**
 * Update simple-keyboard when input is changed directly
 */
document.querySelector(".input").addEventListener("change", event => {
  keyboard.setInput(event.target.value);
});

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);

  /**
   * Shift functionality
   */
  if (button === "{lock}" || button === "{shift}") handleShiftButton();
}

function handleShiftButton() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle
  });
}
