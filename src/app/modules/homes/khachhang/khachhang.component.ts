


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
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.scss']
})
export class KhachhangComponent
  extends BaseComponent
  implements OnInit, AfterViewInit
{
  list_NPH= {
    MaKH: '',
    TenKH: '',
    Diachi: '',
    SDT: '',
    Email: '',
    Tendangnhap: '',
    Matkhau: '',

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
    this.Api_NPH.get('/api/KhachHang').subscribe((res) => {
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
    this.Api_NPH.delete('api/KhachHang/' + id).subscribe((res) => {
      this.showModal();
    });
  }

  creat() {
    this.formHeader = 'Thêm loại sản phẩm';
    this.list_NPH = {
      MaKH: 'KH'+this.RandomNumber(),
      TenKH: '',
      Diachi: '',
      SDT: '',
      Email: '',
      Tendangnhap: '',
      Matkhau: '',
    };
  }
  editproduct(a: any) {
    this.formHeader = 'Sửa loại sản phẩm';

    this.list_NPH.MaKH = a.MaKH;
    this.list_NPH.TenKH = a.TenKH;
    this.list_NPH.Diachi = a.Diachi;
    this.list_NPH.SDT = a.SDT;
    this.list_NPH.Email = a.Email;
    this.list_NPH.Tendangnhap = a.Tendangnhap;
    this.list_NPH.Matkhau = a.Matkhau;


  }

  RandomNumber()
  {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
  save(nut: any) {
    if (nut == 'Thêm loại sản phẩm') {
      this.Api_NPH.post('/api/KhachHang', this.list_NPH).subscribe((data: any) => {
        this.list_NPH = {
          MaKH: '',
          TenKH: '',
          Diachi: '',
          SDT: '',
          Email: '',
          Tendangnhap: '',
          Matkhau: '',
        };
        this.showModal();
      });
    } else {
      //sửa sản phẩm
      console.log(this.list_NPH);
      this.Api_NPH.put('/api/KhachHang', this.list_NPH);

      this.Api_NPH
        .put(`/api/KhachHang/?makhachhang=${this.list_NPH.MaKH}`, this.list_NPH)
        .subscribe((data: any) => {
          this.list_NPH = {
            MaKH: '',
            TenKH: '',
            Diachi: '',
            SDT: '',
            Email: '',
            Tendangnhap: '',
            Matkhau: '',
          };

          this.showModal();
        });
    }
  }
}


