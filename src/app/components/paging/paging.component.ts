import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import {athletesData} from '../../data/paging_data'
@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {
  @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;
  public data: any[];

  public ngOnInit(): void {
      this.data = athletesData;
  }
}
