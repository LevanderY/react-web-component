import './web-component';

const SCRIPT_NAME = 'dialog-window'; 

// Function to create and inject the custom web component into the page
const createHtmlElement = () => {
  const widgetElement = document.createElement(SCRIPT_NAME);
  document.body.insertAdjacentElement('afterbegin', widgetElement);
}

// Call the function to create and add the web component to the page
createHtmlElement()