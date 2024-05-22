// script.js

class CommercialItem extends HTMLElement {
    constructor() {
      super(); // Call the parent class constructor
  
      // Attach a shadow root to the element
      this.attachShadow({ mode: 'open' });
  
      // Add styles to the shadow root
      const commercialItemStyles = `
        <style>
          :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 20px;
            padding: 20px;
            border: 1px solid #000;
            border-radius: 10px;
          }
          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
        </style>
      `;
      this.shadowRoot.innerHTML = commercialItemStyles;
  
      // Create an img element
      const itemPictureImg = document.createElement('img');
      // Get the value of the host's `picture` attribute and set it as the src of the img
      itemPictureImg.src = this.getAttribute('picture');
      this.shadowRoot.appendChild(itemPictureImg);
  
      // Create a div for the product name
      const itemNameDiv = document.createElement('div');
      // Get the value of the `name` attribute and set it as the content of the div
      itemNameDiv.textContent = this.getAttribute('name');
      this.shadowRoot.appendChild(itemNameDiv);
  
      // Create a div for the product price
      const itemPriceDiv = document.createElement('div');
      // Get the value of the `price` attribute, add a currency symbol, and set it as the content of the div
      itemPriceDiv.textContent = `${this.getAttribute('price')} Ft`;
      this.shadowRoot.appendChild(itemPriceDiv);
    }
  }
  
  // Define the custom element
  customElements.define('commercial-item', CommercialItem);
  