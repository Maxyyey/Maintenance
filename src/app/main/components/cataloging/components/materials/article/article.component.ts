import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewArticleComponent } from './viewarticle/viewarticle.component';

import { EditArticlePopupComponent } from './editarticlepopup/editarticlepopup.component';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  constructor(private dialogRef : MatDialog) { }

  ngOnInit(): void { }

  onAddNewBtnClick(){
    // this.router.navigate(['/adduser']);
    this.dialogRef.open(ViewArticleComponent, {});
    
  }
  editbox(){
    
    this.dialogRef.open(EditArticlePopupComponent, {});
    
  }
  // Component logic here
}


