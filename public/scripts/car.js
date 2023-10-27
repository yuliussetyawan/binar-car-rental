class Component {
  static list = [];

  static init(cars) {
    this.list = cars.map((car) => new this(car));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="mb-3 d-flex align-items-stretch">
        <div class="card rounded overflow-hidden w-100">
          <img src="${this.image}" alt="${this.model}" height="100" class="object-fit-cover" style="height: 190px;">
          <div class="card-body d-flex flex-column">
              <h3 class="card-title fs-6">${this.model} /${this.manufacture}</h3>
              <h3 class="fs-5 fw-bold">Rp. ${this.rentPerDay} / hari</h3>${this.description}</p>
              <div class="mb-2">
                  <div class="d-flex align-items-center gap-2 mb-3" >
                      <img src="./images/assets/fi_users.svg">
                      <p class="m-0">${this.capacity} Orang</p>
                  </div>
                  <div class="d-flex gap-2 align-items-center mb-3" >
                      <img src="./images/assets/fi_settings.svg">
                      <p class="m-0">${this.transmission}</p>
                  </div>
                  <div class="d-flex gap-2 align-items-center mb-3" >
                      <img src="./images/assets/fi_calendar.svg">
                      <p class="m-0">Tahun ${this.year}</p>
                  </div>
              </div>
              <button class="mt-auto align-self-start btn btn-success col-lg-12">Pilih Mobil</button>
          </div>
        </div>
      </div>
   `;
  }
}
