import { Injectable } from '@angular/core';
import { reject } from 'q';

@Injectable()
export class Data {
  private cars = [
    { id: 1, owner: 'Cars Market', make: 'Volkswagen', model: 'Polo', price: '100 000$', engine: 'V type engine', img: 'assets/images/volkswagen-polo.jpg', date: '10/14/2017', comments: [{text: "Very good", tag:"All"}, { text: "I have used the owner service before and I recommend it.", tag: "Owner" }, { text: "Good engine", tag: "Engine"}], description: 'The Polo is a fine choice if you are looking for a small hatchback that is also classy inside. It is one of the quietest cars in its class, and the 1.2-litre petrol engine we recommend is smooth and fuel efficient.' },
    { id: 2, owner: 'CarsBg', make: 'Audi', model: 'A3', price: '120 000$,', engine: 'Gas engine', img: 'assets/images/audi-a3.jpg', date: '09/20/2017', comments: [{text: "Not so cheap", tag: "Price"}, { text:"Comfortable", tag: "All" }, { text: "I have used the owner service before and I recommend it.", tag: "Owner" }, { text: "Good engine", tag: "Engine"}], description: 'The A3 is available with a range of strong, efficient engines, and if you avoid the optional sports suspension, it strikes an excellent balance between comfort and control. We recommend the Sportback version, which comes with five doors and more rear leg room to boost practicality.' },
    { id: 3, owner: 'East Beach Auto', make: 'Kia', model: 'Sportage', price: '110 000$', engine: 'Diesel engine', img: 'assets/images/kia-sportage.jpg', date: '11/30/2017', comments: [{text: "Easy to ride", tag: "All"}, { text: "I have used the owner service before and I recommend it.", tag: "Owner" }, { text: "Good engine", tag: "Engine"}], description: 'The latest Sportage is well priced, especially if you go for our recommended 2 trim level. Plus, it holds its value well and has a practical interior. True, the 1.7-litre diesel engine is nott the last word in refinement, and the driving dynamics cannot match the best in this class' },
    { id: 4, owner: 'West Park Auto', make: 'Nissan', model: 'Qashqai', price: '100 000$', engine: 'Gas engine', img: 'assets/images/nissan.jpg', date: '09/15/2017', comments: [{text: "Easy to ride", tag: "All"}, { text:"Stylish!", tag: "All" }, { text: "I have used the owner service before and I recommend it.", tag: "Owner" }, { text: "Not bad engine", tag: "Engine"}], description: 'The Qashqai is the car that started the trend for small, family-friendly SUVs, and it remains one of the best following a recent update.' },
    { id: 5, owner: 'Euro Cars', make: 'Ford', model: 'Focus', price: '110 000$', engine: 'Diesel engine', img: 'assets/images/ford-focus.jpg', date: '08/30/2017', comments: [{text: "Not so cheap", tag: "Price"}, { text:"Comfortable", tag: "All" }, { text: "I have used the owner service before and I recommend it.", tag: "Owner" }, { text: "Good engine", tag: "Engine"}], description: 'For many people, the Ford Focus is the de facto family hatchback. But while it is fun to drive and comes loaded with kit, many of its rivals offer more space and feel classier inside. If you are mainly going to be driving around town, the 1.0-litre Ecoboost petrol engine is ideal; if you need more grunt for regular motorway use, then the 1.5-litre diesel is the most sensible choice.' },
    { id: 6, owner: 'Best Cars', make: 'Ford', model: 'Fiesta', price: '100 000$', engine: 'Gas engine', img: 'assets/images/ford-fiesta.jpg', date: '07/10/2017', comments: [{text: "Not so cheap", tag: "Price"}, { text:"Comfortable", tag: "All" }, { text: "I have used the owner service before and I recommend it.", tag: "Owner" }, { text: "Good engine", tag: "Engine"}], description: 'Like its popular predecessor, this new model is great fun to drive and available with Ecoboost petrol engines that are punchy, quiet and frugal. However, it feels more modern inside and has a much better infotainment system.' },
    { id: 7, owner: 'My Car Ltd.', make: 'Volkswagen', model: 'Golf', price: '100 000$', engine: 'V type engine', img: 'assets/images/volkswagen-golf.jpg', date: '06/30/2017', comments: [{text: "Not so cheap", tag: "Price"}, { text:"Comfortable", tag: "All" }, { text: "I have used the owner service before and I recommend it.", tag: "Owner" }, { text: "Good engine", tag: "Engine"}], description: 'The Golf is a mainstay of this list. What is more, it is fully deserving of its success, blending a comfortable ride with class-leading refinement and a spacious and classy interior. It might be a little pricier than some rivals, and its boot is not the biggest around, but in every other respect it is a superb car.' },
    { id: 8, owner: 'Ladies Cars', make: 'Mercedes-Benz', model: 'A-Class', price: '300 000$', engine: 'Gas engine', img: 'assets/images/mercedes-a-class.jpg', date: '11/25/2017', comments: [{text: 'Engines are too noisy', tag: "Engine"}, {text: 'The ride is pretty firm.'}, { text: "I have used the owner service before and I recommend it.", tag: "Owner" }, { text: "Good engine", tag: "Engine"}], description: 'The car has extrovert design it is a stylish premium hatchback. It does come with a generous amount of safety kit, though, and will hold its value relatively well.' },
    { id: 9, owner: 'Rilla Cars', make: 'BMW', model: '4 Series', price: '190 000$', engine: 'Diesel engine', img: 'assets/images/bmw.jpg', date: '10/23/2017', comments: [{text: "Good price", tag: "Price"}, { text:"Comfortable", tag: "All"  }, { text: "Problems with owner", tag: "Owner" }, { text: "Good engine", tag: "Engine"}], description: 'This seventh-generation model popped up in 2012 and was updated in 2017 with some mild styling tweaks, new engines, a new infotainment system and, unusually for a revised model, a price cut. It is still not the cheapest family car you can buy, but the Golf is a superb all-rounder that offers everything most people will ever need. And with strong resale values and a range of fuel-efficient turbocharged engines, it should cost you surprisingly little to run over three years.' },
    { id: 10, owner: 'Sporty Cars.', make: 'Ford', model: 'Kuga', price: '90 000$', engine: 'Gas engine', img: 'assets/images/ford-kuga.jpg', date: '11/11/2017', comments: [{text: "Good price", tag: "Price"}, { text:"Comfortable", tag: "All"  }, { text: "I have used the owner service before and I recommend it.", tag: "Owner" }, { text: "Good engine", tag: "Engine"}], description: 'The car on sale today is actually the second-generation Kuga, launched in 2013, although it was facelifted in late 2016. It competes against popular mid-size SUVs such as the Mazda CX-5 and Skoda Kodiaq, although the slightly smaller Volkswagen Tiguan is also a rival.' },
    { id: 11, owner: 'Ivanov Ltd.', make: 'Volkswagen', model: 'Golf', price: '100 000$', engine: 'Gas engine', img: 'assets/images/volkswagen-golf.jpg', date: '02/20/2017', comments: [{text: "Easy to ride", tag: "All" }, { text:"Stylish!", tag: "All"  }, { text: "Problems with owner", tag: "Owner" }, { text: "Good engine", tag: "Engine"}], description: 'This seventh-generation model popped up in 2012 and was updated in 2017 with some mild styling tweaks, new engines, a new infotainment system and, unusually for a revised model, a price cut. It is still not the cheapest family car you can buy, but the Golf is a superb all-rounder that offers everything most people will ever need. And with strong resale values and a range of fuel-efficient turbocharged engines, it should cost you surprisingly little to run over three years.'},
    { id: 12, owner: 'Janes Cars Ltd.', make: 'Mercedes-Benz', model: 'A-Class', price: '300 000$', engine: 'Gas engine', img: 'assets/images/mercedes-a-class.jpg', date: '01/25/2017', comments: [{text: 'Engines are too noisy', tag: "Engine"}, {text: 'The ride is pretty firm.', tag: "All"}], description: 'The car has extrovert design it is a stylish premium hatchback. It does come with a generous amount of safety kit, though, and will hold its value relatively well.' },
    { id: 13, owner: 'Mountain Cars', make: 'BMW', model: '4 Series', price: '188 000$', engine: 'V type engine', img: 'assets/images/bmw.jpg', date: '08/15/2017', comments: [{text: "Easy to ride"}, { text:"Stylish!", tag: "All" }, { text: "Best owner", tag: "Owner" }, { text: "Good engine", tag: "Engine"}], description: 'Few coupés can match the all-round abilities of the 4 Series Coupé. This is a car that looks great, is enjoyable to drive and has room for four inside. It may feature many of the same interior fittings as the 3 Series saloon, but that is hardly a bad thing, and you get BMWs excellent iDrive infotainment system.'},
    { id: 14, owner: 'Angelov Ltd.', make: 'Ford', model: 'Kuga', price: '100 000$', engine: 'Gas engine', img: 'assets/images/ford-kuga.jpg', date: '11/18/2017', comments: [{text: "Not so cheap", tag: "Price"}, { text:"Comfortable", tag: "All" }, { text: "I have used the owner service before and I recommend it.", tag: "Owner" }, { text: "Good engine", tag: "Engine"}], description: 'The car on sale today is actually the second-generation Kuga, launched in 2013, although it was facelifted in late 2016. It competes against popular mid-size SUVs such as the Mazda CX-5 and Skoda Kodiaq, although the slightly smaller Volkswagen Tiguan is also a rival.' },
    { id: 15, owner: 'CarsBg', make: 'Ford', model: 'Focus', price: '110 000$', engine: 'Diesel engine', img: 'assets/images/ford-focus.jpg', date: '08/30/2017', comments: [{text: "Not so cheap", tag: "Price"}, { text:"Comfortable", tag: "All" }, { text: "I have used the owner service before and I recommend it.", tag: "Owner" }, { text: "Good engine", tag: "Engine"}], description: 'For many people, the Ford Focus is the de facto family hatchback. But while it is fun to drive and comes loaded with kit, many of its rivals offer more space and feel classier inside. If you are mainly going to be driving around town, the 1.0-litre Ecoboost petrol engine is ideal; if you need more grunt for regular motorway use, then the 1.5-litre diesel is the most sensible choice.' },
    { id: 16, owner: 'West Park Auto', make: 'BMW', model: '4 Series', price: '190 000$', engine: 'Gas engine', img: 'assets/images/bmw.jpg', date: '08/15/2017', comments: [{text: "Easy to ride", tag: "All"}, { text:"Stylish!", tag: "All" }, { text: "I have used the owner service before and I recommend it.", tag: "Owner" }, { text: "Good engine", tag: "Engine"}], description: 'Few coupés can match the all-round abilities of the 4 Series Coupé. This is a car that looks great, is enjoyable to drive and has room for four inside. It may feature many of the same interior fittings as the 3 Series saloon, but that is hardly a bad thing, and you get BMWs excellent iDrive infotainment system.'}
  ];

  private owners = [
    { id: 1, name: 'CarsBg', img: 'assets/images/logo3.png', cars: [{ make: 'Audi', model: 'A3' }, { make: 'Ford', model: 'Focus' }] },
    { id: 2, name: 'West Park Auto', img: 'assets/images/logo1.png', cars: [{ make: 'Nissan', model: 'Qashqai' }, { make: 'BMW', model: '4 Series' }] },
    { id: 3, name: 'Stoev Ltd.', img: 'assets/images/logo2.jpg', cars: [{ make: 'Ford', model: 'Kuga' }]},
    { id: 4, name: 'AutoBulgaria', img: 'assets/images/logo3.png', cars: [{ make: 'Mercedes-Benz', model: 'A-Class' }, { make: 'Volkswagen', model: 'Golf' }]},
    { id: 5, name: 'Speed Ltd.', img: 'assets/images/logo1.png', cars: [ { make: 'Ford', model: 'Fiesta' }]},
    { id: 6, name: 'East Beach Auto', img: 'assets/images/logo1.png', cars: [{ make: 'Kia', model: 'Sportage' }, { make: 'Ford', model: 'Focus' }] },
    { id: 7, name: 'Rilla Cars', img: 'assets/images/logo2.jpg', cars: [{ make: 'Mercedes-Benz', model: 'A-Class' }, { make: 'BMW', model: '4 Series' }] },
    { id: 8, name: 'Mladenov Bros Ltd.', img: 'assets/images/logo2.jpg', cars: [{ make: 'Ford', model: 'Kuga' }]},
    { id: 9, name: 'Cars Market', img: 'assets/images/logo3.png', cars: [{ make: 'Mercedes-Benz', model: 'A-Class' }, { make: 'Volkswagen', model: 'Polo' }]},
    { id: 10, name: 'My Car Ltd.', img: 'assets/images/logo1.png', cars: [ { make: 'Ford', model: 'Fiesta' }, { make: 'Volkswagen', model: 'Golf' }]},
    { id: 11, name: 'Cars for you', img: 'assets/images/logo1.png', cars: [ { make: 'Ford', model: 'Fiesta' }]},
    { id: 12, name: 'Euro Cars', img: 'assets/images/logo3.png', cars: [{ make: 'Kia', model: 'Sportage' }, { make: 'Ford', model: 'Focus' }] },
    { id: 13, name: 'Luxury Cars', img: 'assets/images/logo1.png', cars: [{ make: 'Mercedes-Benz', model: 'A-Class' }, { make: 'BMW', model: '4 Series' }] },
    { id: 14, name: 'Angelov Ltd.', img: 'assets/images/logo3.png', cars: [{ make: 'Ford', model: 'Kuga' }]},
    { id: 15, name: 'Zhelev Cars Ltd.', img: 'assets/images/logo1.png', cars: [{ make: 'Mercedes-Benz', model: 'A-Class' }, { make: 'Volkswagen', model: 'Golf' }]},
    { id: 16, name: 'Ivanov Ltd.', img: 'assets/images/logo2.jpg', cars: [ { make: 'Ford', model: 'Fiesta' }, { make: 'Volkswagen', model: 'Golf' }]},
    { id: 17, name: 'Mountain Cars', img: 'assets/images/logo1.png', cars: [{ make: 'Mercedes-Benz', model: 'A-Class' }, { make: 'BMW', model: '4 Series' }] },
    { id: 18, name: 'Sporty Cars.', img: 'assets/images/logo3.png', cars: [{ make: 'Ford', model: 'Kuga' }]},
    { id: 19, name: 'Ladies Cars', img: 'assets/images/logo1.png', cars: [{ make: 'Mercedes-Benz', model: 'A-Class' }, { make: 'Volkswagen', model: 'Golf' }]},
    { id: 20, name: 'Janes Cars Ltd.', img: 'assets/images/logo2.jpg', cars: [ { make: 'Ford', model: 'Fiesta' }, { make: 'Volkswagen', model: 'Golf' }]},
    { id: 21, name: 'Best Cars', img: 'assets/images/logo3.png', cars: [ { make: 'Ford', model: 'Fiesta' }]},
  ];


  all() {
    return new Promise((resolve, reject) => {
      resolve(this.cars);
    });
  }

  byId(id: number) {
    return new Promise((resolve, reject) => {
      let car = this.cars.find(c => c.id === id);

      resolve(car);
    });
  }

  allOwners() {
    return new Promise((resolve, reject) => {
      resolve(this.owners);
    });
  }

  ownerById(id: number) {
    return new Promise((resolve, reject) => {
      let owner = this.owners.find(o => o.id === id);

      resolve(owner);
    });
  }
}
