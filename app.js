class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
      this.bookingFee = bookingFee;
    }
  
    calculatePrice(distanceInMiles, durationInMinutes) {
      const distanceCost = distanceInMiles * this.costPerMile;
      const timeCost = durationInMinutes * this.costPerMinute;
      const totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;
      return totalPrice;
    }
  }
  
  // Example usage:
  const calculator = new UberPriceCalculator(5, 0.5, 1.25, 2.5);
  const distance = 10; // miles
  const duration = 20; // minutes
  const price = calculator.calculatePrice(distance, duration);
  console.log("Estimated Uber price: $" + price.toFixed(2));