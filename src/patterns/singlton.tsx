class App {
  private static instance: App;

  constructor() {
    if (!App.instance) {
      App.instance = this;
    }

    return App.instance;
  }

  // ...
}
