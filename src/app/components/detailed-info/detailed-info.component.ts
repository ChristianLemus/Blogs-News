import { Component, OnInit } from "@angular/core";
import { BlogsNewsService } from "../../services/blogs-news/blogs-news.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detailed-info",
  templateUrl: "./detailed-info.component.html",
  styleUrls: ["./detailed-info.component.css"],
})
export class DetailedInfoComponent implements OnInit {
  blogsNews: any = [];
  idNewBlog: number = 0;

  constructor(
    private blogsNewsService: BlogsNewsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBlogsNews();
    this.getIdBlogNew();
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

  getIdBlogNew() {
    this.activatedRoute.params.subscribe((params) => {
      this.idNewBlog = Number(params["id"]);
    });
  }
}
