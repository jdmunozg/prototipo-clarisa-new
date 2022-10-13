import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { VerticalMenuComponent } from './components/vertical-menu/vertical-menu.component';
import { HorizontalMenuComponent } from './components/horizontal-menu/horizontal-menu.component';


@NgModule({
  declarations: [
    DocumentationComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule
  ]
})
export class DocumentationModule { }
