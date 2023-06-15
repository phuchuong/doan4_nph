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
  selector: 'app-nhacungcap',
  templateUrl: './nhacungcap.component.html',
  styleUrls: ['./nhacungcap.component.scss']
})
export class NhacungcapComponent   extends BaseComponent implements OnInit,AfterViewInit  {

  list_NPH= {
    MaNCC: null,
    TenNCC : '',
    SDT : '',
    Email: '',
    DiaChi:'',

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
    this.Api_NPH.get('/api/nhacungcap').subscribe((res) => {
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
    this.Api_NPH.delete('api/nhacungcap/' + id).subscribe((res) => {
      this.showModal();
    });
  }

  creat() {
    this.formHeader = 'Thêm nhà cung cấp';
    this.list_NPH = {
      MaNCC: null,
      TenNCC : '',
      SDT : '',
      Email: '',
      DiaChi:'',
    };
  }
  editproduct(a: any) {
    
    this.formHeader = 'Sửa nhà cung cấp';
    this.list_NPH.MaNCC = a.MaNCC;
    this.list_NPH.TenNCC = a.TenNCC;
    this.list_NPH.SDT = a.SDT;
    this.list_NPH.Email = a.Email;
    this.list_NPH.DiaChi = a.DiaChi;

  }


  save(nut: any) {
    if (nut == 'Thêm nhà cung cấp') {
      this.Api_NPH.post('/api/nhacungcap', this.list_NPH).subscribe((data: any) => {
        this.list_NPH = {
          MaNCC: null,
          TenNCC : '',
          SDT : '',
          Email: '',
          DiaChi:'',
        };
        this.showModal();
      });
    } else {
      //sửa sản phẩm
      console.log(this.list_NPH);
      this.Api_NPH.put('/api/nhacungcap', this.list_NPH);

      this.Api_NPH
        .put(`/api/nhacungcap/?manhacungcap=${this.list_NPH.MaNCC}`, this.list_NPH)
        .subscribe((data: any) => {
          this.list_NPH = {
            MaNCC: null,
            TenNCC : '',
            SDT : '',
            Email: '',
            DiaChi:'',
          };

          this.showModal();
        });
    }
  }
  Search() {
    if (this.list_NPH.TenNCC == '') {
      this.ngOnInit();
    } else {
      this.list_item = this.list_item.filter((res: any) => {
        return res.TenNCC.toLocaleLowerCase().match(
          this.list_NPH.TenNCC.toLocaleLowerCase()
        );
      });
    }
  }

}
