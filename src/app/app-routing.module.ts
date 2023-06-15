import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './modules/homes/admin/admin.component';

import { ChitiethdbComponent } from './modules/homes/chitiethdb/chitiethdb.component';
import { HoadonbanComponent } from './modules/homes/hoadonban/hoadonban.component';
import { IndexComponent } from './modules/homes/index/index.component';
import { KhachhangComponent } from './modules/homes/khachhang/khachhang.component';
import { LoaispComponent } from './modules/homes/loaisp/loaisp.component';
import { TrangthaiComponent } from './modules/homes/trangthai/trangthai.component';
import { FooderComponent } from './shared/layout/fooder/fooder.component';
import { RightbarComponent } from './shared/layout/rightbar/rightbar.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { TopbarComponent } from './shared/layout/topbar/topbar.component';
import { NhacungcapComponent } from './modules/homes/nhacungcap/nhacungcap.component';
import { HoadonnhapComponent } from './modules/homes/hoadonnhap/hoadonnhap.component';
import { NhanvienComponent } from './modules/homes/nhanvien/nhanvien.component';
import { ThongkeComponent } from './modules/homes/thongke/thongke.component';
import { ThongbaoComponent } from './modules/homes/thongbao/thongbao.component';
import { TintucComponent } from './modules/homes/tintuc/tintuc.component';

const routes: Routes = [

{path:'fooder', component: FooderComponent},
{path:'', component: IndexComponent},
{path:'topbar', component: TopbarComponent},
{path:'sidebar', component: SidebarComponent},
{path:'rightbar',component:RightbarComponent},
{path:'loaisanpham',component:LoaispComponent},
{path:'hoadonban',component:HoadonbanComponent},
{path:'cthdban',component:ChitiethdbComponent},
{path:'khachhang',component:KhachhangComponent},
{path:'admin',component:AdminComponent},
{path:'trangthai',component:TrangthaiComponent},
{path:'nhacungcap',component:NhacungcapComponent},
{path:'hoadonnhap',component:HoadonnhapComponent},
{path:'nhanvien',component:NhanvienComponent},
{path:'thongke',component:ThongkeComponent},
{path:'thongbao',component:ThongbaoComponent},
{path:'tintuc',component:TintucComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
