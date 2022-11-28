import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  name=""
  publishedAt=""
  title=""
  author=""
  urlToImage=""
  description=""
  url=""
  content=""

  readValues= ()=>{
    let data={
      "name":this.name,
      "publishedAt":this.publishedAt,
      "title":this.title,
      "author":this.author,
      "urlToImage":this.urlToImage,
      "description":this.description,
      "url":this.url,
      "content":this.content
    }
    console.log(data)
  }

}
