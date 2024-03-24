import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CoursesActions } from "./action-types";
import { CoursesHttpService } from "./services/courses-http.service";
import { concatMap, map } from "rxjs/operators";
import { allCoursesLoaded } from "./course.actions";

@Injectable()
export class CoursesEffects{
    
    loadCourses$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.loadAllCourses),
        concatMap(action => this.coursesHttpService.findAllCourses()),
        map(courses => allCoursesLoaded({courses}))
    ))

    constructor(private actions$: Actions, private coursesHttpService: CoursesHttpService){}
}