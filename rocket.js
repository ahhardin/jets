class Rocket {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size
  }

  launch() {
    console.log('3, 2, 1, blastoff!');
  }

  engageSecondaryEngines() {
    console.log('Secondary Engines Engaged!');
  };

}

export default Rocket
