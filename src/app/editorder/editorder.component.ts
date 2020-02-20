import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {
  u_EmailId:string;
  track_id: number;
  status:string;
  track_update: FormGroup;
  name: string[] = ['packing', 'on the way ', 'delivered'];
  constructor(public _ac_routes: ActivatedRoute, public _rou: Router, public _trackData: UserserviceService) { }

  ngOnInit() {
    this.u_EmailId=localStorage.getItem('u_EmailId');
    this.track_id = this._ac_routes.snapshot.params['track_id'];
    console.log(this.track_id);
    this.track_update = new FormGroup({
      // track_id: new FormControl(null),
      status: new FormControl(null)
    });
    this._trackData.getTrackById(this.track_id).subscribe(
      (data: any) => {
        console.log(data);
        this.formDataBind(data[0]);

      }
    );
  }
  formDataBind(item: User) {
    console.log(this.track_id);
    this.track_update.patchValue({
      // track_id: item.track_id,
      status: item.status
    });
  }
  onTrackSubmit() {
    this._trackData.updateuser(this.track_id,this.track_update.value).subscribe(
      (data: User) => {

        this._rou.navigate(['/dashboard']);
      }
    );
  }
  onTrackCancel() {
    this._rou.navigate(['/dashboard']);
  }
}
