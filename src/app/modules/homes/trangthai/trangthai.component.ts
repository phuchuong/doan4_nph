

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
  selector: 'app-trangthai',
  templateUrl: './trangthai.component.html',
  styleUrls: ['./trangthai.component.scss']
})
export class TrangthaiComponent
  extends BaseComponent
  implements OnInit, AfterViewInit
{
  list_NPH= {
    MaTT: null,
    TrangThai: '',
    ThoiGian: '',
    MaHDB: '',


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
    this.Api_NPH.get('/api/TTDonHang').subscribe((res) => {
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
    this.Api_NPH.delete('api/TTDonHang/' + id).subscribe((res) => {
      this.showModal();
    });
  }

  creat() {
    this.formHeader = 'Thêm loại sản phẩm';
    this.list_NPH = {
      MaTT: null,
      TrangThai: '',
      ThoiGian: '',
      MaHDB: '',
    };
  }
  editproduct(a: any) {
    this.formHeader = 'Sửa loại sản phẩm';

    this.list_NPH.MaTT = a.MaTT;
    this.list_NPH.TrangThai = a.TrangThai;
    this.list_NPH.ThoiGian = a.ThoiGian;
    this.list_NPH.MaHDB = a.MaTT;
  }


  save(nut: any) {
    if (nut == 'Thêm loại sản phẩm') {
      this.Api_NPH.post('/api/TTDonHang', this.list_NPH).subscribe((data: any) => {
        this.list_NPH = {
          MaTT: null,
          TrangThai: '',
          ThoiGian: '',
          MaHDB: '',

        };
        this.showModal();
      });
    } else {
      //sửa sản phẩm
      console.log(this.list_NPH);
      this.Api_NPH.put('/api/TTDonHang', this.list_NPH);

      this.Api_NPH
        .put(`/api/TTDonHang/?madonhang=${this.list_NPH.MaTT}`, this.list_NPH)
        .subscribe((data: any) => {
          this.list_NPH = {
            MaTT: null,
            TrangThai: '',
            ThoiGian: '',
            MaHDB: '',

          };

          this.showModal();
        });
    }
  }
}


