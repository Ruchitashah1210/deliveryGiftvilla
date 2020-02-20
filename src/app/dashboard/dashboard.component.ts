import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { User } from '../user';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  u_EmailId: string;
  u_Name:string;
  order_id:number;
  status:string;
  pro_name:string;
  user_tbl: User[] = [];
  tarck_id:number;
  displayedColumns: string[] = ['order_id','u_EmailId', 'pro_name','bill_date' , 'status', 'act'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _userdataservice: UserserviceService, public _dailog: MatDialog, private _roter: Router) {
    this.dataSource = new MatTableDataSource();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.u_Name=localStorage.getItem('u_Name');
    this._userdataservice.getUserData().subscribe(
      (data: User[]) => {
        console.log(data);
        this.user_tbl = data;
        this.dataSource.data = this.user_tbl;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }
  onEditClick(track_id){
    console.log(track_id);
    this._roter.navigate(['/editorder',track_id]);
  }
}

