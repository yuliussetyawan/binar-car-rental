class Car {
  constructor() {
    this.filterCarContainer = document.getElementById("car-container");
    this.searchBtn = document.getElementById("search-button");
    this.clearBtn = document.getElementById("clear-button");
    this.driverType = document.getElementById("driver-type");
    this.alert = document.getElementById("alert-warning");
    this.date = document.getElementById("date-pick");
    this.pickTime = document.getElementById("pick-time");
    this.passengerAmount = document.getElementById("passenger-amount");
  }

  async init() {
    await this.load();
    document.body.onload = this.carAvailable;
    this.searchBtn.onclick = this.run;
    this.clearBtn.onclick = this.clear;
  }

  carAvailable = () => {
    let cars = "";
    // load available cars
    Component.list
      .filter((car) => car.available)
      .map((car) => {
        cars += car.render();
        this.filterCarContainer.innerHTML = cars;
      });
  };

  run = () => {
    let cars = "";
    let dateTime = Date.parse(this.date.value + "T" + this.pickTime.value);

    const filteredCar = Component.list
      .filter(
        (car) =>
          Date.parse(car.availableAt) >= dateTime &&
          car.capacity >= this.passengerAmount.value
      )
      .map((car) => {
        cars += car.render();
        this.filterCarContainer.innerHTML = cars;
      });

    if (filteredCar.length === 0) {
      this.filterCarContainer.innerHTML = "";
      this.alert.classList.remove("visually-hidden");
      
    } else {
      this.alert.classList.add("visually-hidden");
      console.log(dateTime);
    }
  };

  clear = () => {
    let child = this.filterCarContainer.firstElementChild;

    while (child) {
      child.remove();
      child = this.filterCarContainer.firstElementChild;
    }
  };

  async load() {
    const cars = await Binar.listCars();
    Component.init(cars);
  }
}
