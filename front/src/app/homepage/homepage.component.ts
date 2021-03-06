import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  postsLocation = '../../assets/jsonData/Posts.json';
  categoriesLocation = '../../assets/jsonData/Categories.json';

  filteredPosts: any;
  Posts: any = null;
  Categories: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getData(this.postsLocation)
    this.getData(this.categoriesLocation)
  }

  getData= async (url)=>{
    await fetch(url, {mode: 'no-cors'})
    .then(response => response.json())
    .then(data=> {
      if(url == this.postsLocation){
        this.Posts = data;
        this.filteredPosts = data;
      }
      else{this.Categories = data;}
    })
    .catch(error => console.error(error))
  }

  filter(categoryObj){
    this.filteredPosts = []
    this.filteredPosts= this.Posts.filter(post => {
      return post.category == categoryObj.id
    })
    console.log(this.filteredPosts)
    if(this.filteredPosts.length == 0) this.filteredPosts = null
  }

  orderAsc(){
     this.filteredPosts.sort( (a,b) =>{
      return a.createdAt - b.createdAt 
    })
  }

  orderDesc(){
    this.filteredPosts.sort( (a,b) =>{
     return b.createdAt - a.createdAt 
   })
  }
  
  empty(A){
    while(A.length > 0) {
      A.pop();  
    }
  }
  
  goToArticle(p){
    this.router.navigate(["/ArticlePage", p.id])
  }

  async testPosts(){
    await this.getData(this.postsLocation)
    console.log(this.Posts)
    return this.Posts
  }

  reset(){
    this.ngOnInit()
  }

}
