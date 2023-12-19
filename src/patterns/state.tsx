interface State {
  proceedToNext(order: Order): void;
  toString(): string;
}

class Order {
  private state: State;

  constructor() {
    this.state = new PendingState();
  }

  public proceedToNext() {
    this.state.proceedToNext(this);
  }

  public setState(state: State) {
    this.state = state;
  }

  public toString(): string {
    return this.state.toString();
  }
}

class PendingState implements State {
  public proceedToNext(order: Order): void {
    console.log('Proceeding from Pending to Shipped...');
    order.setState(new ShippedState());
  }

  public toString(): string {
    return 'Pending';
  }
}

class ShippedState implements State {
  public proceedToNext(order: Order): void {
    console.log('Proceeding from Shipped to Delivered...');
    order.setState(new DeliveredState());
  }

  public toString(): string {
    return 'Shipped';
  }
}

class DeliveredState implements State {
  public proceedToNext(order: Order): void {
    console.log('Already delivered. Thank you!');
  }

  public toString(): string {
    return 'Delivered';
  }
}

let order = new Order();
console.log(order.toString()); // Output: Pending

order.proceedToNext();
console.log(order.toString()); // Output: Shipped

order.proceedToNext();
console.log(order.toString()); // Output: Delivered

order.proceedToNext(); // Output: Already delivered. Thank you!
