import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  posts: any;

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.service.getPosts((next) => this.posts = next);
  }

}
