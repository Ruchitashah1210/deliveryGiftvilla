import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  u_EmailId: string;
  arr: User[] = [];
  displayedColumns: string[] = ['u_EmailId', 'order_id', 'pro_name', 'status', 'action'];
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
  user_tbl: User[] = [];
  ngOnInit() {
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
}

