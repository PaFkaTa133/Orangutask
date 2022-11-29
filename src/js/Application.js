import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
  }

  addBananas() {
    const elem = document.createElement("p");
    document.getElementById("emojis").appendChild(elem);
    let newArr = this.emojis.map((monkey) => monkey + this.banana);
    elem.innerHTML = newArr;
  }
}
