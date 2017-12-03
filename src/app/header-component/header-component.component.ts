import { Response } from '@angular/http';
import { DataStorageService } from '../shared/data-storage.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorage: DataStorageService) {}

  ngOnInit() {}

  onSaveData() {
    this.dataStorage.storeRecipes()
      .subscribe(
        (resp: Response) => {
          console.log(resp);
        },
        (err) => {
          alert(err);
        }
      );
  }

  onGetData() {
    this.dataStorage.getRecipes();
  }
}
