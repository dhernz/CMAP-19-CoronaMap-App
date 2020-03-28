import { Component, OnInit } from '@angular/core';
import { GoogleAnalitycsService } from '../services/google-analitycs.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage implements OnInit {

  constructor(private ga: GoogleAnalitycsService) { }

  ngOnInit() {
    this.ga.trackPagesHandler('Recommendations','/recommendations');
  }

}
