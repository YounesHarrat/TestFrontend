import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-articlepage',
  templateUrl: './articlepage.component.html',
  styleUrls: ['./articlepage.component.css']
})
export class ArticlepageComponent implements OnInit {

  sub: Subscription;
  Posts:any;
  articleId: string;
  article =[];

  constructor(public route: ActivatedRoute) {}

  async ngOnInit() {
    this.sub = this.route.params
      .subscribe(v => {
        console.log(v)
        this.articleId = v.articleId;
      });
      await this.getData()
    this.filter(this.articleId)
  }

  getData= async ()=>{
    await fetch('../../assets/jsonData/Posts.json', {mode: 'no-cors'})
    .then(response => response.json())
    .then(data=> {
        this.Posts = data;
    })
    .catch(error => console.error("error"))
  }

  filter(articleId){
    this.article= this.Posts.filter(post => {
      return post.id == articleId
    })
  }

  testPosts(){
    this.Posts = null;
    this.getData()
    console.log(this.Posts)
    return this.Posts;
  }

}
