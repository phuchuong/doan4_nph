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
  selector: 'app-hoadonnhap',
  templateUrl: './hoadonnhap.component.html',
  styleUrls: ['./hoadonnhap.component.scss']
})
export class HoadonnhapComponent extends BaseComponent implements OnInit,AfterViewInit {

  list_NPH= {
    MaHDN: null,
    MaNCC : '',
    NgayNhap : '',
    TongTien: '',
    IDNV:'',

  };

  public list_item: any;
  public list_item1:any;

  constructor(injector: Injector, private Api_NPH: ApiService) {
    super(injector);
  }

  formHeader = '';
  // TenSP!: string;

  ngOnInit(): void {
    this.showModal();
  }

  showModal() {
    this.Api_NPH.get('/api/HoaDonNhap').subscribe((res) => {
      this.list_item = res;

      console.log(this.list_item);

      setTimeout(() => {
        this.loadScripts(
          'assets/js/hide_menu.js',
          'assets/js/slide_show.js',
          'assets/js/vendor.min.js',
          'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js '
        );
      });
    });
  }

  ngAfterViewInit() {
    this.loadScripts('assets/js/hide_menu.js', 'assets/js/slide_show.js');
  }

  deleteproduct(id: any) {
    this.Api_NPH.delete('api/HoaDonNhap/' + id).subscribe((res) => {
      this.showModal();
    });
  }

  creat() {
    this.formHeader = 'Thêm hóa đơn nhập';
    this.list_NPH = {
      MaHDN: null,
      MaNCC : '',
      NgayNhap : '',
      TongTien: '',
      IDNV:'',
    };
  }
  editproduct(a: any) {
    this.formHeader = 'Sửa hóa đơn nhập';

    this.list_NPH.MaHDN = a.MaHDN;
    this.list_NPH.MaNCC = a.MaNCC;
    this.list_NPH.NgayNhap = a.NgayNhap;
    this.list_NPH.TongTien = a.TongTien;

  }


  save(nut: any) {
    if (nut == 'Thêm hóa đơn nhập') {
      this.Api_NPH.post('/api/HoaDonNhap', this.list_NPH).subscribe((data: any) => {
        this.list_NPH = {
          MaHDN: null,
          MaNCC : '',
          NgayNhap : '',
          TongTien: '',
          IDNV:'',
        };
        this.showModal();
      });
    } else {
      //sửa sản phẩm
      console.log(this.list_NPH);
      this.Api_NPH.put('/api/HoaDonNhap', this.list_NPH);

      this.Api_NPH
        .put(`/api/HoaDonNhap/?mahdn=${this.list_NPH.MaHDN}`, this.list_NPH)
        .subscribe((data: any) => {
          this.list_NPH = {
            MaHDN: null,
            MaNCC : '',
            NgayNhap : '',
            TongTien: '',
            IDNV:'',
          };

          this.showModal();
        });
    }
  }
  Search() {
    if (this.list_NPH.MaNCC == '') {
      this.ngOnInit();
    } else {
      this.list_item = this.list_item.filter((res: any) => {
        return res.MaHDN.toLocaleLowerCase().match(
          this.list_NPH.MaNCC.toLocaleLowerCase()
        );
      });
    }
  }

  view(MaHDN: any) {
    this.Api_NPH.get('/api/CTHDN/mahdn?mahdn=' + MaHDN).subscribe((res) => {
      this.list_item1 = res;
      console.log('ss',this.list_item1);
    });
  };

}
