import { Component, OnInit } from "@angular/core";
import { BlogsNewsService } from "../../services/blogs-news/blogs-news.service";

@Component({
  selector: "app-blogs-news",
  templateUrl: "./blogs-news.component.html",
  styleUrls: ["./blogs-news.component.css"],
})
export class BlogsNewsComponent implements OnInit {
  blogsNews: any = [];

  constructor(private blogsNewsService: BlogsNewsService) {}

  ngOnInit(): void {
    this.getBlogsNews();
  }

  getBlogsNews() {
    this.blogsNewsService.getBlogsNews().subscribe(
      (res) => {
        if (res) {
          this.blogsNews = res;
        }
      },
      (err) => {
        console.log("Error", err);
      }
    );
  }
}
