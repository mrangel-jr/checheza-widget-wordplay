import Core from 'checheza_core';
import style from '../assets/style';

class MainDomain {
    constructor(widget) { 
        this.widget = widget;
    }

    // method called after render, add logics, event listeners etc. here
    start() {
        Core.log("It works!");
    }

    // return markup here.
    render() { 
        return `<h1 class="${style.example_style}> ${this.widget.name} </h1>`
    }
}

export default MainDomain;