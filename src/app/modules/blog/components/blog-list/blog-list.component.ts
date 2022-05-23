import { Component, OnInit } from '@angular/core';
import { BlogService } from '@components/blog/services/blog.service';
import { Blog } from 'src/app/model/blog.model';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
    audio = new Audio();
    blogList: Blog[];
    constructor(private blogService: BlogService) {
        this.blogList = this.blogService.blogs;
    }

    ngOnInit(): void {
        this.audio.src = 'assets/output.mp3';
        // this.audio.load();
        // this.audio.play();
    }
}
