import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScreenWidth]'
})
export class ScreenWidthDirective {

  windowWidth: number
  mobileScreen = 900
  mobile: boolean

  constructor() {
    this.windowWidth = window.innerWidth;
    console.log(this.mobileScreen)
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.windowWidth = window.innerWidth;
    // console.log(this.windowWidth)
    if (window.innerWidth > this.mobileScreen) {
      // console.log($(window).width())
      return this.mobile = false;
    } else {
      return this.mobile = true;
    }
    // console.log(this.isMobile)
  }

  isMobile() {
    if ($(window).width() > this.mobileScreen) {
      console.log($(window).width())
      return false;
    }
    return true;
  }

}
