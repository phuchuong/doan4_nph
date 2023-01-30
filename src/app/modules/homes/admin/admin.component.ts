

import { ApiService } from './../../../core/services/api.service';
import {
  AfterViewInit,
  Component,
  Injector,
  OnInit,
  Renderer2,
} from '@angular/core';

import { BaseComponent } from 'src/app/core/common/base-component';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

// data={}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent
  extends BaseComponent
  implements OnInit, AfterViewInit
{
  list_NPH= {
    MaAdmin: null,
    TenAdmin: '',
    TenDangNhap:'',
    MatKhau:'',
  };

  public list_item: any;

  constructor(injector: Injector, private Api_NPH: ApiService) {
    super(injector);
  }

  formHeader = '';
  // TenSP!: string;

  ngOnInit(): void {
    this.showModal();
  }

  showModal() {
    this.Api_NPH.get('/api/Admin').subscribe((res) => {
      this.list_item = res;

      console.log(this.list_item);

      setTimeout(() => {
        this.loadScripts(
          'assets/js/hide_menu.js',
          'assets/js/slide_show.js',
          'assets/js/vendor.min.js',
          // 'assets/libs/peity/jquery.peity.min.js',
          // 'assets/libs/apexcharts/apexcharts.min.js',
          // 'assets/libs/jquery-vectormap/jquery-jvectormap-1.2.2.min.js',
          // 'assets/libs/jquery-vectormap/jquery-jvectormap-us-merc-en.js',
          // 'assets/js/pages/dashboard-1.init.js',
          // 'assets/js/app.min.js',
          'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js '
        );
      });
    });
  }

  ngAfterViewInit() {
    this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
  }


  creat() {
    this.formHeader = 'Thêm ADMIN';
    this.list_NPH = {
      MaAdmin: null,
      TenAdmin: '',
      TenDangNhap:'',
      MatKhau:'',
    };
  }
  editproduct(a: any) {
    this.formHeader = 'Sửa ADMIN';

    this.list_NPH.MaAdmin = a.MaAdmin;
    this.list_NPH.TenAdmin = a.TenAdmin;
    this.list_NPH.TenDangNhap = a.TenDangNhap;
    this.list_NPH.MatKhau = a.MatKhau;
  }


  save(nut: any) {
    if (nut == 'Thêm ADMIN') {
      this.Api_NPH.post('/api/Admin', this.list_NPH).subscribe((data: any) => {
        this.list_NPH = {
          MaAdmin: null,
          TenAdmin: '',
          TenDangNhap:'',
          MatKhau:'',
        };
        this.showModal();
      });
    } else {
      //sửa sản phẩm
      console.log(this.list_NPH);
      this.Api_NPH.put('/api/Admin', this.list_NPH);

      this.Api_NPH
        .put(`/api/Admin/?maAdmin=${this.list_NPH.MaAdmin}`, this.list_NPH)
        .subscribe((data: any) => {
          this.list_NPH = {
            MaAdmin: null,
            TenAdmin: '',
            TenDangNhap:'',
            MatKhau:'',
          };

          this.showModal();
        });
    }
  }

  deleteproduct(id: any) {
    this.Api_NPH.delete('api/Admin/' + id).subscribe((res) => {
      this.showModal();
    });
  }

  Search() {
    if (this.list_NPH.TenAdmin == '') {
      this.ngOnInit();
    } else {
      this.list_item = this.list_item.filter((res: any) => {
        return res.TenAdmin.toLocaleLowerCase().match(
          this.list_NPH.TenAdmin.toLocaleLowerCase()
        );
      });
    }
  }
}




