import { Component } from "@angular/core";
import { DATA } from "../../data/filter_data";

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.css']
})
export class EditingComponent{

  public data: any[] = DATA;

}
