﻿import { Component, Inject, OnInit } from '@angular/core';
import { CourseService } from '../../../../../services/course.service';
import { Course } from '../../../../../classes/Course';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './lms/pages/dashboard/pages/create/createcourse/createcourse.component.html'
})
export class CreateCourse implements OnInit {
    private course: Course = new Course('', '', '', '', '');
    constructor(
        @Inject(CourseService) private _CourseService: CourseService,
        @Inject(Router) private router: Router,
        @Inject(ActivatedRoute) private _ActivatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        let id = this._ActivatedRoute.snapshot.params['id'];
        if (!id)
            this.router.navigate(['/dashboard']);

        this.course.GroupId = id;
    }

    Create() {
        this._CourseService.createCourse(this.course).subscribe((course) => { this.course = course; }
            , error => console.error(error),
            () => {
                if (this.course.Id)
                {
                    this.router.navigate(['/dashboard', 'group', this.course.GroupId]);
                }
                else
                    console.log('Error creating group');
            });
    }
}