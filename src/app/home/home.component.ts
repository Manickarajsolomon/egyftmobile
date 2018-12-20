import { Component, OnInit } from '@angular/core';
import { SidebarModule } from '../sidebar/sidebar.module';
import { MatSidenav } from '@angular/material/sidenav';
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Success alert with timer
    // swal({
    //   type: 'success',
    //   title: 'Your work has been saved',
    //   showConfirmButton: false,
    //   timer: 1500
    // })

    // Error alert with timer
    // swal({
    //   title: 'Error!',
    //   text: 'Do you want to continue',
    //   type: 'error',
    //   confirmButtonText: 'OK',
    //   // timer: 1500
    // })
    // example link reference
    // https://sweetalert2.github.io/

  }

}
