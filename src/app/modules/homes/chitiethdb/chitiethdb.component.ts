



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
  selector: 'app-chitiethdb',
  templateUrl: './chitiethdb.component.html',
  styleUrls: ['./chitiethdb.component.scss']
})
export class ChitiethdbComponent
  extends BaseComponent
  implements OnInit, AfterViewInit
{
  list_NPH= {
    MaCTHDB: null,
    MaSP: '',
    ThanhTien: 0,
    SoLuong:'',
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
    this.Api_NPH.get('/api/CTHDB').subscribe((res) => {
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
    this.formHeader = 'Thêm CTHDB';
    this.list_NPH = {
      MaCTHDB: null,
      MaSP: '',
      ThanhTien: 0,
      SoLuong:'',
      MaHDB: '',
    };
  }
  editproduct(a: any) {
    this.formHeader = 'Sửa CTHDB';

    this.list_NPH.MaCTHDB = a.MaCTHDB;
    this.list_NPH.MaSP = a.MaSP;
    this.list_NPH.ThanhTien = a.ThanhTien;
    this.list_NPH.SoLuong = a.SoLuong;
    this.list_NPH.MaHDB = a.MaHDB;


  }


  save(nut: any) {
    if (nut == 'Thêm CTHDB') {
      this.Api_NPH.post('/api/CTHDB', this.list_NPH).subscribe((data: any) => {
        this.list_NPH = {
          MaCTHDB: null,
          MaSP: '',
          ThanhTien: 0,
          SoLuong:'',
          MaHDB: '',
        };
        this.showModal();
      });
    } else {
      //sửa sản phẩm
      console.log(this.list_NPH);
      this.Api_NPH.put('/api/CTHDB', this.list_NPH);

      this.Api_NPH
        .put(`/api/CTHDB/?macthdb=${this.list_NPH.MaHDB}`, this.list_NPH)
        .subscribe((data: any) => {
          this.list_NPH = {
            MaCTHDB: null,
            MaSP: '',
            ThanhTien: 0,
            SoLuong:'',
            MaHDB: '',
          };

          this.showModal();
        });
    }
  }

  deleteproduct(id: any) {
    this.Api_NPH.delete('api/CTHDB/' + id).subscribe((res) => {
      this.showModal();
    });
  }
  Search() {
    if (this.list_NPH.MaHDB == '') {
      this.ngOnInit();
    } else {
      this.list_item = this.list_item.filter((res: any) => {
        return res.MaHDB.toLocaleLowerCase().match(
          this.list_NPH.MaHDB.toLocaleLowerCase()
        );
      });
    }
  }
}




