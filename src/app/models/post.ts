import { Optional } from '@angular/core';
export class Post {
    id: number;
    userId: number;
    title: string;
    body: string;
    constructor(@Optional() userId: number,@Optional() title: string,@Optional() body: string, @Optional() id:number) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.body = body;
    }

}
