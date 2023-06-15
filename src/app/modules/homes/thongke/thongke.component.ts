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

import { ViewChild } from '@angular/core';
// import { chitiethoadonban }
// data={}

@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.scss'],
})
export class ThongkeComponent
  extends BaseComponent
  implements OnInit, AfterViewInit
{
  list_NPH = {
    MaHDB: null,
    NgayDat: '',
    ThanhTien: 0,
    DiaChi: '',
    SDT: '',
    HoTen: '',
    GhiChu: '',
    PhiVanChuyen: 0,
    TrangThai: '',
    MaKH: '',
    IDNV: '',
  };

  public list_item: any;
  public list_item1: any;
  public tongtien = 0;
  public tonkho = 0;

  constructor(injector: Injector, private Api_NPH: ApiService) {
    super(injector);
  }

  formHeader = '';
  // TenSP!: string;

  ngOnInit(): void {
    this.showModal();
    this.GetDataMonthYearOfHDB();
    this.ThongkespBanchay();
  }

  showModal() {
    this.Api_NPH.get('/api/HoaDonBan').subscribe((res) => {
      this.list_item = res;
      console.log(this.list_item);
      this.tongtien = this.tongdoanhthu(this.list_item);

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

    this.Api_NPH.get('/api/DienThoai').subscribe((res) => {
      this.list_item = res;
      console.log(this.list_item);
      this.tonkho = this.tongtonkho(this.list_item);

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

  tongdoanhthu(dh: any) {
    return dh.reduce(function (accumulator: any, currentValue: any) {
      return accumulator + currentValue.ThanhTien;
    }, 0);
  }

  tongtonkho(dh: any) {
    return dh.reduce(function (accumulator: any, currentValue: any) {
      return accumulator + currentValue.SoLuong;
    }, 0);
  }

  // Twrite
      //get current date
      currentDate = new Date();
      day = String(this.currentDate.getDate()).padStart(2, '0');
      month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
      year = this.currentDate.getFullYear();
      formattedDate = `${this.day}/${this.month}/${this.year}`;
     //
     listhdbDMY:any[]=[];

     DoanhThuNgay=0;
     DoanhThuThang=0;
     Soluonghoadonngay=0;
     Soluonghoadontheothang=0;

     ChonThang="";
     ChonThangDich="";
     ChonNam="";
     ChonNamDich="";

     GetDataMonthYearOfHDB()
     {
        this.Api_NPH.get('/api/HoaDonBan').subscribe((res) => {
          this.listhdbDMY=res;
          this.listhdbDMY.forEach((e:any) => {
            e.Day=parseInt((e.NgayDat.split('-'))[2].slice(0,2));
            e.Month=parseInt((e.NgayDat.split('-'))[1]);
            e.Year=parseInt((e.NgayDat.split('-'))[0]);
          });
          const ChonNgay=parseInt(this.day);
          const ChonThang=parseInt(this.month);
            setTimeout(() => {
              // this.ThongkeTheoNgay(ChonNgay);
              this.ThongkeTheoThang(ChonThang);
            }, 100);
        })
     }

    //  ThongkeTheoNgay(Ngaydachon:any)
    //  {

    //   console.log(Ngaydachon)

    //    this.listhdbDMY.forEach((e)=>{
    //      if(e.Day==Number(Ngaydachon))
    //      {
    //        this.DoanhThuNgay+=e.ThanhTien;
    //      }
    //    })
    //  }
     ThongkeTheoThang(thangdachon: any) {
      if (this.ChonThang != '' && this.ChonThangDich != '' && this.ChonNam!="" && this.ChonNamDich!="") {
        this.Soluonghoadontheothang = 0;
        this.DoanhThuThang = 0;
        //chọn tháng này tháng kia năm này năm kia
        if (Number(this.ChonNam) < Number(this.ChonNamDich))
        {
          if (Number(this.ChonThang) < Number(this.ChonThangDich)) {
            let numbers = Array.from(
              { length: Number(this.ChonThangDich) - Number(this.ChonThang) + 1 },
              (_, index) => index + Number(this.ChonThang)
            );
            let numbersYear = Array.from(
              { length: Number(this.ChonNamDich) - Number(this.ChonNam) + 1 },
              (_, index) => index + Number(this.ChonNam)
            );
            console.log(numbersYear);
            this.listhdbDMY.forEach((e) => {
              if (numbers.includes(e.Month) && numbersYear.includes(e.Year)) {
                this.Soluonghoadontheothang += 1;
                this.DoanhThuThang += e.ThanhTien;
              }
            });
            console.log(this.Soluonghoadontheothang);
            console.log(this.DoanhThuThang);
          } else {
            alert('Tháng đích không thể nhỏ hơn tháng bắt đàu');
          }
        }
        else {
          alert("Năm đích không thể nhỏ hơn năm bắt đầu")
        }
      }
      else if (this.ChonThang != '' && this.ChonThangDich != '' && this.ChonNam!="" && this.ChonNamDich=="")
      {
        this.Soluonghoadontheothang = 0;
        this.DoanhThuThang = 0;
        // chọn tháng này tháng kia
        if (Number(this.ChonThang) < Number(this.ChonThangDich)) {
          let numbers = Array.from(
            { length: Number(this.ChonThangDich) - Number(this.ChonThang) + 1 },
            (_, index) => index + Number(this.ChonThang)
          );
          this.listhdbDMY.forEach((e) => {
            if (numbers.includes(e.Month) && e.Year == Number(this.ChonNam)) {
              this.Soluonghoadontheothang += 1;
              this.DoanhThuThang += e.ThanhTien;
            }
          });
          console.log(this.Soluonghoadontheothang);
          console.log(this.DoanhThuThang);
        } else {
          alert('Tháng đích không thể nhỏ hơn tháng bắt đàu');
        }
      }
      else if (this.ChonThang != '' && this.ChonThangDich == '' && this.ChonNam!="" && this.ChonNamDich=="")
      {
        this.Soluonghoadontheothang = 0;
        this.DoanhThuThang = 0;
        //chọn 1 tháng 1 năm
          this.listhdbDMY.forEach((e) => {
            if (e.Month==Number(this.ChonThang) && e.Year == Number(this.ChonNam)) {
              this.Soluonghoadontheothang += 1;
              this.DoanhThuThang += e.ThanhTien;
            }
          });
          console.log(this.Soluonghoadontheothang);
          console.log(this.DoanhThuThang);
      }
      else if (this.ChonThang == '' && this.ChonThangDich == ''&& this.ChonNam!="" && this.ChonNamDich!="") {
        this.Soluonghoadontheothang = 0;
        this.DoanhThuThang = 0;
        //chọn năm này đến năm kia
        if (Number(this.ChonNam) < Number(this.ChonNamDich)) {
          let numbers = Array.from(
            { length: Number(this.ChonNamDich) - Number(this.ChonNam) + 1 },
            (_, index) => index + Number(this.ChonNam)
          );
          this.listhdbDMY.forEach((e) => {
            if (numbers.includes(e.Year)) {
              this.Soluonghoadontheothang += 1;
              this.DoanhThuThang += e.ThanhTien;
            }
          });
          console.log(this.Soluonghoadontheothang);
          console.log(this.DoanhThuThang);
        } else {
          alert('Năm đích không thể nhỏ hơn Năm bắt đàu');
        }
      }
      else if(this.ChonThang == '' && this.ChonThangDich == ''&& this.ChonNam!="" && this.ChonNamDich=="")
      {
        this.Soluonghoadontheothang = 0;
        this.DoanhThuThang = 0;
        //chọn 1 năm
        this.listhdbDMY.forEach((e)=>{
          if(e.Year==Number(this.ChonNam))
          {
            this.Soluonghoadontheothang += 1;
            this.DoanhThuThang+=e.ThanhTien;
          }
        })
      }
      else if (this.ChonThang != '' && this.ChonThangDich != '') {
        this.Soluonghoadontheothang = 0;
        this.DoanhThuThang = 0;
        //chọn tháng này đén tháng kia
        if (Number(this.ChonThang) < Number(this.ChonThangDich)) {
          let numbers = Array.from(
            { length: Number(this.ChonThangDich) - Number(this.ChonThang) + 1 },
            (_, index) => index + Number(this.ChonThang)
          );
          this.listhdbDMY.forEach((e) => {
            if (numbers.includes(e.Month)) {
              this.Soluonghoadontheothang += 1;
              this.DoanhThuThang += e.ThanhTien;
            }
          });
          console.log(this.Soluonghoadontheothang);
          console.log(this.DoanhThuThang);
        } else {
          alert('Tháng đích không thể nhỏ hơn tháng bắt đàu');
        }
      }
      else if (this.ChonThang != '' && this.ChonThangDich == '') {
        //chon tháng
        thangdachon = Number(this.ChonThang);
        console.log(thangdachon);
        this.Soluonghoadontheothang = 0;
        this.DoanhThuThang = 0;
        this.listhdbDMY.forEach((e) => {
          if (e.Month == Number(thangdachon)) {
            this.Soluonghoadontheothang += 1;
            this.DoanhThuThang += e.ThanhTien;
          }
        });
      }
      else {
        console.log(thangdachon);
        this.Soluonghoadontheothang = 0;
        this.DoanhThuThang = 0;
        this.listhdbDMY.forEach((e) => {
          if (e.Month == Number(thangdachon)) {
            this.Soluonghoadontheothang += 1;
            this.DoanhThuThang += e.ThanhTien;
          }
        });
      }
      }


      //xóa các tháng năm chọn
      ChonlaiFilter()
      {
        this.ChonThang="";
        this.ChonThangDich="";
        this.ChonNam="";
        this.ChonNamDich="";
        const ChonThang=parseInt(this.month);
        this.ThongkeTheoThang(ChonThang);
      }


      listSpdaban:any[]=[];
      listSort:any[]=[];
      ThongkespBanchay()
      {
        this.Api_NPH.get('/api/CTHDB').subscribe((res) => {
          this.list_item = res;
          this.list_item.forEach((e:any) => {
            let check=false;
            let i=0;
            if(this.listSpdaban.length==0)
            {
              this.listSpdaban.push({idsp:e.MaDT,soluong:e.SoLuong})
            }
            else{
              this.listSpdaban.forEach(e1=>{
                if(e1.idsp==e.MaDT)
                {
                  e1.soluong+=e.SoLuong
                  check=false;
                  i=1;
                }
                else{
                  check=true;
                }
              })
              if(check=true && i==0)
              {
                this.listSpdaban.push({idsp:e.MaDT,soluong:e.SoLuong})
              }
            }

          });
          console.log(this.listSpdaban);
          this.listSpdaban.forEach((e:any)=>{
           this.Api_NPH.get('/api/DienThoai/iddienthoai?iddienthoai=' +e.idsp.toString()).subscribe(res=>{

              e.info=res;
           })
          })
          this.listSort=this.listSpdaban.sort((a, b) => b.soluong - a.soluong);
          console.log(this.listSort);

        })
      }
  //end
}
