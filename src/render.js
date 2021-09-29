const root = document.querySelector('#root');

export const render = (htmlString) => {
  root.innerHTML = htmlString;
  
  // TODO: If your markup needs event listeners, add them here. (You can import the handler functions from another module!)
};
