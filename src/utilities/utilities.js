// Function to calculate currency exchange.
export function calculatePrice(price, currency) {
    // Choose currency exchange (default = GBP, USD, EUR, CAD).
    switch (currency) {
        case 'USD':
            return price * 1.23;
        case 'EUR':
            return price * 1.17;
        case 'CAD':
            return price * 1.60;
        default:
            return price;
    };
};

// Function to calculate total.
export function calculateTotal(cart, currency) {
    // Set total to 0.
    let total = 0;

    // For each item in the cart.
    Object.keys(cart).forEach((itemName) => {
        // Update total with the item's price and quantity. 
        total += cart[itemName].price * cart[itemName].quantity;
    });
    
    // Return calculatePrice function to 2 decimals.
    return calculatePrice(total, currency).toFixed(2);
};

// Function to display currency symbol.
export function getCurrencySymbol(currencyFilter) {
    // Choose currency symbol (default = '', £, $, €, $).
    switch (currencyFilter) {
      case 'GBP':
        return '£';
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'CAD':
        return '$';
      default:
        return '';
    }
  }
  