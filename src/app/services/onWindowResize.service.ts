import { HostListener, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnWindowResizeServise {

  windowWidth: number
  mobile: boolean
  mobileScreen = 900

  constructor
    () {
    this.windowWidth = window.innerWidth;
    console.log("OnWindowResizeServise")
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
