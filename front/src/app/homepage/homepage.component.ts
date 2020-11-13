import { Component, OnInit } from '@angular/core';

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

  Menu:any = null;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.getData(this.postsLocation)
    console.log(this.Posts)
    this.getData(this.categoriesLocation)  
    this.Menu = document.querySelector('#Menu')
  }

  ngAfterViewInit():void{   
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
    //this.getData(this.postsLocation)
    this.filteredPosts = []
    this.filteredPosts= this.Posts.filter(post => {
      return post.category == categoryObj.id
    })
    if(this.filteredPosts = []) this.filteredPosts = null
    console.log(this.filteredPosts)
  }

  empty =(A)=>{
    while(A.length > 0) {
      A.pop();  
    }
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

  zoomOut = (card) =>{
    console.log(card)
    
  }


}
