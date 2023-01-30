


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
  selector: 'app-hoadonban',
  templateUrl: './hoadonban.component.html',
  styleUrls: ['./hoadonban.component.scss']
})
export class HoadonbanComponent
  extends BaseComponent
  implements OnInit, AfterViewInit
{
  list_NPH= {
    MaHDB: null,
    NgayDat: '',
    ThanhTien: 0,
    DiaChi:'',
    SDT: '',
    HoTen: '',
    GhiChu: '',
    PhiVanChuyen: 0,
    MaKH: ''
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
    this.Api_NPH.get('/api/HoaDonBan').subscribe((res) => {
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
    this.formHeader = 'Thêm HoaDonBan';
    this.list_NPH = {
      MaHDB: null,
      NgayDat: '',
      ThanhTien: 0,
      DiaChi:'',
      SDT: '',
      HoTen: '',
      GhiChu: '',
      PhiVanChuyen: 0,
      MaKH: ''
    };
  }
  editproduct(a: any) {
    this.formHeader = 'Sửa HoaDonBan';

    this.list_NPH.MaHDB = a.MaHDB;
    this.list_NPH.NgayDat = a.NgayDat;
    this.list_NPH.ThanhTien = a.ThanhTien;
    this.list_NPH.DiaChi = a.DiaChi;
    this.list_NPH.SDT = a.SDT;
    this.list_NPH.HoTen = a.HoTen;
    this.list_NPH.GhiChu = a.GhiChu;
    this.list_NPH.PhiVanChuyen = a.PhiVanChuyen;
    this.list_NPH.MaKH = a.MaKH;

  }


  save(nut: any) {
    if (nut == 'Thêm HoaDonBan') {
      this.Api_NPH.post('/api/HoaDonBan', this.list_NPH).subscribe((data: any) => {
        this.list_NPH = {
          MaHDB: null,
          NgayDat: '',
          ThanhTien: 0,
          DiaChi:'',
          SDT: '',
          HoTen: '',
          GhiChu: '',
          PhiVanChuyen: 0,
          MaKH: ''
        };
        this.showModal();
      });
    } else {
      //sửa sản phẩm
      console.log(this.list_NPH);
      this.Api_NPH.put('/api/HoaDonBan', this.list_NPH);

      this.Api_NPH
        .put(`/api/HoaDonBan/?maHoaDonBan=${this.list_NPH.MaHDB}`, this.list_NPH)
        .subscribe((data: any) => {
          this.list_NPH = {
            MaHDB: null,
            NgayDat: '',
            ThanhTien: 0,
            DiaChi:'',
            SDT: '',
            HoTen: '',
            GhiChu: '',
            PhiVanChuyen: 0,
            MaKH: ''
          };

          this.showModal();
        });
    }
  }

  deleteproduct(id: any) {
    this.Api_NPH.delete('api/HoaDonBan/' + id).subscribe((res) => {
      this.showModal();
    });
  }
  Search() {
    if (this.list_NPH.MaKH == '') {
      this.ngOnInit();
    } else {
      this.list_item = this.list_item.filter((res: any) => {
        return res.MaKH.toLocaleLowerCase().match(
          this.list_NPH.MaKH.toLocaleLowerCase()
        );
      });
    }
  }
}




