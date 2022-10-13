import { Component, OnInit } from '@angular/core';
import { endpointsInfo } from './metadata/information-endpoint';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss'],
})
export class DocumentationComponent implements OnInit {
  endPointsInformation: any = [];
  endpointsFilterInformation: any;
  categoriaSelection: any;
  typeInformation: any;
  constructor() {}

  ngOnInit(): void {
    this.endPointsInformation = endpointsInfo;
    this.endPointsInformation.find((x: any) => {
      if (x.name == 'One CGIAR Control List') {
        this.endpointsFilterInformation = x;
      }
    });
  }

  getMensaje(e: any) {
    if (typeof e === 'string') {
      this.categoriaSelection =
        this.endpointsFilterInformation.subcategories.find((object: any) => {
          if (object.name == e) return object;
        });
      this.typeInformation = 'subCategorie';
    }
    if (typeof e === 'object') {
      this.categoriaSelection = undefined;
      let informationEnd: any;
      informationEnd = this.endpointsFilterInformation.subcategories.find(
        (object: any) => {
          if (object.name == e.categoria) return object;
        }
      );
      this.categoriaSelection = informationEnd.endpoints.find((obj: any) => {
        if (obj.name == e.endpoint) return obj;
      });
      this.typeInformation = 'endpoint';
    }
  }
}
