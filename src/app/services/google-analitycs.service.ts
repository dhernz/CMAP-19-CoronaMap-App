import { Injectable } from '@angular/core';
declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalitycsService {

  constructor() { 
    console.log(gtag)
  }

  trackPagesHandler(pagename,pagePath){
    gtag('config', 'UA-161996333-1', {
      'page_title' : pagename,
      'page_path': pagePath
    });
  }

  trackEventHandler(action,eventCategory) {
    const eventData = {
      event_category: eventCategory,
      event_label: action,
      non_interaction: true,
    };
    gtag('event', action, eventData);
  }
}
