import { Injectable } from '@angular/core';
declare let ga: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalitycsService {

  constructor() { }

  trackPagesHandler(pagePath){
    ga('set', 'page', pagePath);
    ga('send', 'pageview');
  }

  trackEventHandler(eventAction, eventLabel, eventCategory) {
    const eventData = {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
    };
    ga('send', 'event', eventData);
  }
}
