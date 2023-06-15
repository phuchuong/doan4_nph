import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './modules/homes/index/index.component';

import { FooderComponent } from './shared/layout/fooder/fooder.component';
import { HttpClientModule } from '@angular/common/http';
import { TopbarComponent } from './shared/layout/topbar/topbar.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { RightbarComponent } from './shared/layout/rightbar/rightbar.component';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { KhachhangComponent } from './modules/homes/khachhang/khachhang.component';
import { HoadonbanComponent } from './modules/homes/hoadonban/hoadonban.component';

import { ChitiethdbComponent } from './modules/homes/chitiethdb/chitiethdb.component';
import { LoaispComponent } from './modules/homes/loaisp/loaisp.component';
import { ApiService } from './core/services/api.service';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './modules/homes/admin/admin.component';
import { TrangthaiComponent } from './modules/homes/trangthai/trangthai.component';
import { NhacungcapComponent } from './modules/homes/nhacungcap/nhacungcap.component';
import { HoadonnhapComponent } from './modules/homes/hoadonnhap/hoadonnhap.component';
import { NhanvienComponent } from './modules/homes/nhanvien/nhanvien.component';
import { ThongkeComponent } from './modules/homes/thongke/thongke.component';
import { ThongbaoComponent } from './modules/homes/thongbao/thongbao.component';
import { DangnhapComponent } from './modules/homes/dangnhap/dangnhap.component';
import { TintucComponent } from './modules/homes/tintuc/tintuc.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,

    TopbarComponent,
    FooderComponent,
     TopbarComponent,
     SidebarComponent,
     RightbarComponent,

     KhachhangComponent,
     HoadonbanComponent,

     ChitiethdbComponent,
     LoaispComponent,
     AdminComponent,
     TrangthaiComponent,

     NhacungcapComponent,
     HoadonnhapComponent,
     NhanvienComponent,
     ThongkeComponent,
     ThongbaoComponent,
     DangnhapComponent,
     TintucComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [ApiService,AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
