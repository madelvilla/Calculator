# Calculator
1.  It initializes variables to store references to DOM elements representing the calculator's display, number buttons, operator buttons, decimal button, equals button, and clear button.


2. Event Listeners:
   - It adds event listeners to the number buttons, operator buttons, decimal button, equals button, and clear button.
   - When a number button is clicked, it appends the corresponding number to the display.
   - When an operator button is clicked, it appends the corresponding operator to the display.
   - When the decimal button is clicked, it appends a decimal point to the display.
   - When the equals button is clicked, it triggers the "calculate" function.
   - When the clear button is clicked, it triggers the "clear display" function.


3. The "apendToDisplay" function appends the provided value to the display.


4. - The 'calculate' function evaluates the mathematical expression in the display using the 'eval' function.
   - If the expression is valid, it updates the display with the result. If an error occurs during evaluation, it displays "ERROR" on the display.


5.  The 'clearDisplay' function clears the display by setting its value to an empty string.


6.- It adds a keydown event listener to the document to enable keyboard input.
  - If a valid key is pressed (number, operator, decimal point, backspace, or Enter), it performs the corresponding action:
  - For numbers, operators, and decimal point, it appends them to the display.
  - For Enter, it triggers the 'calculate' function.
  - For backspace, it triggers the 'clearDisplay' function.


Overall, this code provides the basic functionality of a calculator, allowing users to input numbers and operators either by clicking buttons or using keyboard shortcuts. It also handles calculation and error display appropriately.

