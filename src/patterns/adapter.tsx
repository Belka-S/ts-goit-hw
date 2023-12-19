class OldService {
  public oldRequest(): string {
    return 'Old Service Request';
  }
}

// Новий інтерфейс
interface NewInterface {
  request(): string;
}

// Адаптер, який перетворює старий інтерфейс на новий
class Adapter implements NewInterface {
  constructor(private oldService: OldService) {}

  public request(): string {
    const result = this.oldService.oldRequest();

    return `Adapter: (TRANSLATED) ${result}`;
  }
}

// Клієнтський код, що працює з новим інтерфейсом
class Client {
  constructor(private newInterface: NewInterface) {}

  public useService(): void {
    console.log(this.newInterface.request());
  }
}

const oldService = new OldService();
const adapter = new Adapter(oldService);
const client = new Client(adapter);

client.useService();
