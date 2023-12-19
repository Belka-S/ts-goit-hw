type User = {
  id: number;
  name: string;
  email: string;
};

type Address = {
  userId: number;
  street: string;
  city: string;
  country: string;
};

type PaymentData = {
  userId: number;
  cardNumber: string;
  expiryDate: string;
};

class UserService {
  getUser(id: number): User {
    console.log(`Fetching user data for userId: ${id}`);
    return { id, name: 'John Doe', email: 'john.doe@example.com' };
  }

  updateUser(user: User): void {
    console.log(`Updating user: ${JSON.stringify(user)}`);
  }
}

class AddressService {
  getAddresses(userId: number): Address[] {
    console.log(`Fetching addresses for userId: ${userId}`);
    return [{ userId, street: '123 Street', city: 'City', country: 'Country' }];
  }

  updateAddress(userId: number, address: Address): void {
    console.log(`Updating address for userId: ${userId}`);
  }
}

class PaymentService {
  getPaymentData(userId: number): PaymentData {
    console.log(`Fetching payment data for userId: ${userId}`);
    return { userId, cardNumber: '1234 5678 9012 3456', expiryDate: '01/25' };
  }

  updatePaymentData(userId: number, paymentData: PaymentData): void {
    console.log(`Updating payment data for userId: ${userId}`);
  }
}

class UserProfileFacade {
  constructor(
    private userService: UserService,
    private addressService: AddressService,
    private paymentService: PaymentService,
  ) {}

  getUserProfile(userId: number): User {
    const user = this.userService.getUser(userId);
    user['addresses'] = this.addressService.getAddresses(userId);
    user['paymentData'] = this.paymentService.getPaymentData(userId);
    return user;
  }

  updateUserProfile(
    userId: number,
    userData: User,
    address: Address,
    paymentData: PaymentData,
  ): void {
    this.userService.updateUser(userData);
    this.addressService.updateAddress(userId, address);
    this.paymentService.updatePaymentData(userId, paymentData);
  }
}
