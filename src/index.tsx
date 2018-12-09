'use strict';

interface TesterInterface {
  paragraphElement: HTMLCollectionOf<Element>
}

class ClickButtonSample implements TesterInterface {
  paragraphElement: HTMLCollectionOf<Element> = null;

  constructor() {
    this.paragraphElement = document.getElementsByClassName('divBox');
    for (let x: number = 0; x < this.paragraphElement.length; x++) {
      // if the function in the event listener becomes an arrow function, hell breaks loose
      this.paragraphElement[x].addEventListener("click", function() {
        let heightElement: any = this.getElementsByClassName('texthere');
        let heightValue: number = heightElement[0].offsetHeight;
        console.log('heightValue: ', heightValue);
        this.style.height = this.style.height === '' ? `${heightValue}px` : '' ;
      });
      this.paragraphElement[x].addEventListener("resize", function() {
        let heightElement: any = this.getElementsByClassName('texthere');
        let heightValue: number = heightElement[0].offsetHeight;
        console.log('heightValue: ', heightValue);
        this.style.height = this.style.height === '' ? `${heightValue}px` : '' ;
      });
    };
  }
}

if (document.getElementsByClassName('divBox')) {
  new ClickButtonSample()
}
