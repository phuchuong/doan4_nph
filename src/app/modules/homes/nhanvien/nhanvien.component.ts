

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

@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.scss']
})
export class NhanvienComponent  extends BaseComponent  implements OnInit, AfterViewInit {

  list_NPH= {
    IDNV :null,
    TenNV : '',
    ChucVu :'',
    SDT :'',
    DiaChi :'',
    Email :'',

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
    this.Api_NPH.get('/api/NhanVien').subscribe((res) => {
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

  deleteproduct(id: any) {
    this.Api_NPH.delete('api/NhanVien/' + id).subscribe((res) => {
      this.showModal();
    });
  }

  creat() {
    this.formHeader = 'Thêm nhân viên ';
    this.list_NPH = {
      IDNV :null,
      TenNV : '',
      ChucVu :'',
      SDT :'',
      DiaChi :'',
      Email :'',
    };
  }
  editproduct(a: any) {
    this.formHeader = 'Sửa nhân viên';

    this.list_NPH.IDNV = a.IDNV;
    this.list_NPH.TenNV = a.TenNV;
    this.list_NPH.ChucVu = a.ChucVu;
    this.list_NPH.SDT = a.SDT;
    this.list_NPH.DiaChi = a.DiaChi;
    this.list_NPH.Email = a.Email;

  }


  save(nut: any) {
    if (nut == 'Thêm nhân viên') {
      this.Api_NPH.post('/api/NhanVien', this.list_NPH).subscribe((data: any) => {
        this.list_NPH = {
          IDNV :null,
          TenNV : '',
          ChucVu :'',
          SDT :'',
          DiaChi :'',
          Email :'',

        };
        this.showModal();
      });
    } else {
      //sửa sản phẩm
      console.log(this.list_NPH);
      this.Api_NPH.put('/api/NhanVien', this.list_NPH);

      this.Api_NPH
        .put(`/api/NhanVien/?manhanvien=${this.list_NPH.IDNV}`, this.list_NPH)
        .subscribe((data: any) => {
          this.list_NPH = {
            IDNV :null,
            TenNV : '',
            ChucVu :'',
            SDT :'',
            DiaChi :'',
            Email :'',

          };

          this.showModal();
        });
    }
  }
  Search() {
    if (this.list_NPH.TenNV == '') {
      this.ngOnInit();
    } else {
      this.list_item = this.list_item.filter((res: any) => {
        return res.TenNV.toLocaleLowerCase().match(
          this.list_NPH.TenNV.toLocaleLowerCase()
        );
      });
    }
  }

}
