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
    document.getElementById("emojis").innerHTML = emojis;

    let newArr = this.emojis.map(myFunction);

    function myFunction(emojis, banana) {
      return emojis + banana;
    }
    console.log(newArr);
    document.getElementById("emojis").innerHTML = newArr;
  }

  addBananas() {
    const elem = document.createElement("p");
    elem.innerHTML = this.banana;
    document.getElementById("emojis").append(elem);

    /* const newArr = this.emojis.map(function(emojis)
    {
      return emojis += this.banana;
    }
    );
    innerHTML = this.banana;

    function myFunction(item, index, arr) {
      arr[index] = emojis + banana;
    }*/
  }
}
