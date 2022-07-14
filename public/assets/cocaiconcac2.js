function Since04_body()
{
    $("body").html(`
    
    
    
    <!------bostrpnotice thongbao----->


<div id="boy98bl_notice" style="display:none;position: fixed;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    top: 20%;
    right: 0;
    text-align: center;z-index:99999;"><div class="sprite_2" style="position: relative;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    top: 20%;
    right: 0;
    text-align: center;"></div><p class="">Chúc mừng <b id="phone_thang">boy98bl</b> vừa chiến thắng <b id="tienthang">boy98bl</b> Vnđ. <Br> <small><font color="red" onclick="tatnotie()">[Tắt]</font></small></p></div>
    

<!-- Modal -->
<div class="modal fade" id="modal_thongbao" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><center>TIN TỨC </center></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="noidung_thongbao">
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Đóng lại !</button>
      </div>
    </div>
  </div>
</div>
    
    <div class="modal fade" id="modal_huongdan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><center>HƯỚNG DẪN </center></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="noidung_huongdan">
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Đóng lại !</button>
      </div>
    </div>
  </div>
</div>
    <div class="navbar">
        <div class="container">
            <div class="navbar-header">
               
                <a class="navbar-brand navbar-brand-image" href="/">
                    <div class="hidden-xs">
                        <img src="image/logo3.png" style="margin-top: 6px;
    margin-bottom: 10px;
    width: 600px;" alt="">
                    </div>
                    <div class="visible-xs">
                        <img src="image/logo3.png" style="margin-top: 10px;
    /* margin: 13px; */
    width: 350px;" alt="">
                    </div>
                </a>
            </div>


        </div>
    </div>

    <div class="mainbar hidden-xs">
        <div class="container">

        </div>
    </div>
    <div class="container" id="thongbao" style="display:none">
        <div class="content">
            <div class="content-container">
                <center id="msg_thongbao">

                </center>
                <br>
                <br>
               
            </div>
        </div>
    </div>
    <div class="container" id="baotri">
        <div class="content">
            <div class="content-container">
                <div class="py-5" style="min-height:80px !important;">
                    <div class="output" id="output">
                        <h3 class="cursor"></h3>
                            <h4></h4>
                    </div>
                </div>

             
            <center>
                <button type="submit" class="btn btn-success" onclick="$(\'#modal_huongdan\').modal()" id="nutkiemtra">HƯỚNG DẪN</button>
            </center>
                <div class="text-center mt-5">
                    <div class="" role="group" aria-label="...">
                        <button style="
    border-color: #ccc;" class="btn btn-info" server-action="change" server-id="1000" server-rate="1000">
                            Chẵn Lẻ
                        </button>
                        <button  style="
    
    border-color: #ccc;" class="btn btn-info" server-action="change" server-id="10000" server-rate="10000">
                            Tài xỉu
                        </button>
                        <button  style="
    
    border-color: #ccc;" class="btn btn-info" server-action="change" server-id="1" server-rate="1">
                            Chẵn Lẻ 2
                        </button>
                        <button  style="
    
    border-color: #ccc;" class="btn btn-info" server-action="change" server-id="2" server-rate="1">
                            Gấp 3
                        </button>
                        

                        <button  style="
    
    border-color: #ccc;" class="btn btn-info" server-action="change" server-id="5" server-rate="1">
                            Tổng 3 số
                        </button>

                        <button  style="
    
    border-color: #ccc;" class="btn btn-info" server-action="change" server-id="6" server-rate="1">
                            1 phần 3
                        </button>
                    </div>
                </div>

              
                <div class="row justify-content-md-center box-cl">

                    <div class="col-md-6 mt-3 cl">
                        <div class="panel panel-primary">
                            <div class="panel-heading text-center">
                                CÁCH CHƠI
                            </div>
                            <div class="panel-body turn" turn-tab="10000" style="padding-top: 0px;">
                                
                                - Chuyển tiền vào một trong các tài khoản : <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover text-center">
                                        <thead>
                                            <tr role="row" class="bg-primary">
                                                <th class="text-center text-white">Số điện thoại</th>
                                                <th class="text-center text-white">Cược tối thiểu</th>
                                                <th class="text-center text-white">Cược tối đa</th>
                                            </tr>
                                        </thead>
                                        <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_1" class="">
                                        </tbody>
                                    </table>
                                </div> <br>
                                - Nội dung chuyển : <b>T</b> hoặc <b>X</b> (nếu đuôi mã giao dịch có các số sau) <br>
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover text-center">
                                        <thead>
                                            <tr role="row" class="bg-primary">
                                                <th class="text-center text-white">Nội dung</th>
                                                <th class="text-center text-white">Số</th>
                                                <th class="text-center text-white">Tiền nhận</th>

                                            </tr>
                                        </thead>
                                        <tbody role="alert" aria-live="polite" aria-relevant="all" id="result-table"
                                            class="">

                                            <tr>
                                                <td><b>X</b></td>
                                                <td> <b>1</b> - <b>2</b> - <b>3</b> - <b>4</b>
                                                </td>
                                                <td><b>x2.3 tiền cược</b></td>
                                            </tr>
                                            <tr>
                                                <td><b>T</b></td>
                                                <td><b>5</b> - <b>6</b> - <b>7</b> - <b>8</b>
                                                </td>
                                                <td><b>x2.3 tiền cược</b></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                                - Tiền thắng sẽ = <b>Tiền cược*2.3</b> <br>
                                - <b>Lưu ý : Mức cược mỗi số khác nhau, nếu chuyển sai hạn mức hoặc sai nội dung sẽ
                                    không được hoàn tiền.</b>




                            </div>

                            <div class="panel-body turn" turn-tab="1000" style="padding-top: 0px;">
                                
                                - Chuyển tiền vào một trong các tài khoản : <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover text-center">
                                        <thead>
                                            <tr role="row" class="bg-primary">
                                                <th class="text-center text-white">Số điện thoại</th>
                                                <th class="text-center text-white">Cược tối thiểu</th>
                                                <th class="text-center text-white">Cược tối đa</th>
                                            </tr>
                                        </thead>
                                        <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_2" class="">
                                        </tbody>
                                    </table>
                                </div> <br>
                                - Nội dung chuyển : <b>A</b> hoặc <b>B</b> (nếu đuôi mã giao dịch có các số sau) <br>
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover text-center">
                                        <thead>
                                            <tr role="row" class="bg-primary">
                                                <th class="text-center text-white">Nội dung</th>
                                                <th class="text-center text-white">Số</th>
                                                <th class="text-center text-white">Tiền nhận</th>

                                            </tr>
                                        </thead>
                                        <tbody role="alert" aria-live="polite" aria-relevant="all" id="result-table"
                                            class="">

                                            <tr>
                                                <td><b>B</b></td>
                                                <td> <b>1</b> - <b>3</b> - <b>5</b> - <b>7</b>
                                                </td>
                                                <td><b>x2.3 tiền cược</b></td>
                                            </tr>
                                            <tr>
                                                <td><b>A</b></td>
                                                <td><b>2</b> - <b>4</b> - <b>6</b> - <b>8</b>
                                                </td>
                                                <td><b>x2.3 tiền cược</b></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                                - Tiền thắng sẽ = <b>Tiền cược*2.3</b> <br>
                                <b>Lưu ý : Mức cược mỗi số khác nhau, nếu chuyển sai hạn mức hoặc sai nội dung sẽ không
                                    được hoàn tiền.</b>



                            </div>

                            <div class="panel-body turn" turn-tab="1" style="padding-top: 0px;">
                                
                                - Chuyển tiền vào một trong các tài khoản : <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover text-center">
                                        <thead>
                                            <tr role="row" class="bg-primary">
                                                <th class="text-center text-white">Số điện thoại</th>
                                                <th class="text-center text-white">Cược tối thiểu</th>
                                                <th class="text-center text-white">Cược tối đa</th>
                                            </tr>
                                        </thead>
                                        <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_7" class="">
                                        </tbody>
                                    </table>
                                </div> <br>
                                - Nội dung chuyển : <b>A2</b> hoặc <b>B2</b> hoặc <b>T2</b> hoặc <b>X2</b> (nếu đuôi mã giao dịch có các số sau) <br>

                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover text-center">
                                        <thead>
                                            <tr role="row" class="bg-primary">
                                                <th class="text-center text-white">Nội dung</th>
                                                <th class="text-center text-white">Số</th>
                                                <th class="text-center text-white">Tiền nhận</th>

                                            </tr>
                                        </thead>
                                        <tbody role="alert" aria-live="polite" aria-relevant="all" id="result-table"
                                            class="">

                                            <tr>
                                                <td><b>B2</b></td>
                                                <td> <b>1</b> - <b>3</b> - <b>5</b> - <b>7</b> -
                                                    <b>9</b></td>
                                                <td><b>x1.95 tiền cược</b></td>
                                            </tr>
                                            <tr>
                                                <td><b>A2</b></td>
                                                <td><b>0</b> -<b>2</b> - <b>4</b> - <b>6</b> -
                                                    <b>8</b></td>
                                                <td><b>x1.95 tiền cược</b></td>
                                            </tr>
                                            
                                            <tr>
                                                <td><b>X2</b></td>
                                                <td><b>0</b> -<b>1</b> - <b>2</b> - <b>3</b> -
                                                    <b>4</b></td>
                                                <td><b>x1.95 tiền cược</b></td>
                                            </tr>
                                            
                                            <tr>
                                                <td><b>T2</b></td>
                                                <td><b>5</b> -<b>6</b> - <b>7</b> - <b>8</b> -
                                                    <b>9</b></td>
                                                <td><b>x1.95 tiền cược</b></td>
                                            </tr>
                                            

                                        </tbody>
                                    </table>
                                </div>

                                - Tiền thắng sẽ = <b>Tiền cược*1.95</b> <br>
                                <br>
                                <b>Lưu ý : Mức cược mỗi số khác nhau, nếu chuyển sai hạn mức hoặc sai nội dung sẽ không
                                    được hoàn tiền.</b>



                            </div>

                            <div class="panel-body turn" turn-tab="2" style="padding-top: 0px;">
                               
                                -  Chuyển vào các tài khoản sau: <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover text-center">
                                        <thead>
                                            <tr role="row" class="bg-primary">
                                                <th class="text-center text-white">Số điện thoại</th>
                                                <th class="text-center text-white">Cược tối thiểu</th>
                                                <th class="text-center text-white">Cược tối đa</th>
                                            </tr>
                                        </thead>
                                        <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_3" class="">
                                        </tbody>
                                    </table>
                                </div> 
                                <br>
- Nội dung chuyển : <b>G3</b> (nếu đuôi mã giao dịch có các số sau):


                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover text-center">
                                        <thead>
                                            <tr role="row" class="bg-primary">
                                                <th class="text-center text-white">Cách tính</th>
                                                <th class="text-center text-white">Số</th>
                                                <th class="text-center text-white">Tiền nhận</th>

                                            </tr>
                                        </thead>
                                       <tbody role="alert" aria-live="polite" aria-relevant="all" id="result-table" class="">
<tr>
<td>2 số cuối mã GD</td>
<td>
<b>02</b> <b>13</b> - <b>17</b> - <b>19</b> - <b>21</b>-  <b>29</b> -  <b>35</b>  - <b>37</b> -  <b>47</b> - <b>49</b> - <b>51</b> - <b>54</b> - <b>57</b> - <b>63</b> - <b>64</b> - <b>74</b> - <b>83</b> - <b>91</b> - <b>95</b> - <b>96</b> </td>
<td><b>x3 tiền cược</b></td>
</tr>
<tr>
<td>2 số cuối mã GD</td>
<td>
<b>66</b> - <b>99</b> </td>
<td><b>x4 tiền cược</b></td>
</tr>
<tr>
<td>3 số cuối mã GD</td>
<td>
<b>123</b> - <b>234</b> - <b>456</b> - <b>678</b> - <b>789</b> </td>
<td><b>x5 tiền cược</b></td>
</tr>
</tbody>
                                    </table>
                                </div>


                            </div>



                            <div class="panel-body turn" turn-tab="6" style="padding-top: 0px;">
                                 - Chuyển tiền vào một trong các tài khoản : <div
                                    class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover text-center">
                                        <thead>
                                            <tr role="row" class="bg-primary">
                                                <th class="text-center text-white">Số điện thoại</th>
                                                <th class="text-center text-white">Cược tối thiểu</th>
                                                <th class="text-center text-white">Cược tối đa</th>
                                            </tr>
                                        </thead>
                                        <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_4" class="">
                                        </tbody>
                                    </table>
                                </div> <br>
                                - Nội dung chuyển : <b>N1</b> hoặc <b>N2</b> hoặc <b>N3</b> (nếu đuôi mã giao dịch có các số sau)
                                <br>

                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover text-center">
                                        <thead>
                                            <tr role="row" class="bg-primary">
                                                <th class="text-center text-white">Nội dung</th>
                                                <th class="text-center text-white">Số cuối</th>
                                                <th class="text-center text-white">Tiền nhận</th>

                                            </tr>
                                        </thead>
                                        <tbody role="alert" aria-live="polite" aria-relevant="all" id="result-table"
                                            class="">

                                            <tr>
                                                <td><b>N1</b></td>
                                                <td><b>1</b> - <b>2</b> - <b>3</b></td>
                                                <td><b>x3 tiền cược</b></td>
                                            </tr>

                                            <tr>
                                                <td><b>N2</b></td>
                                                <td><b>4</b> - <b>5</b> - <b>6</b></td>
                                                <td><b>x3 tiền cược</b></td>
                                            </tr>

                                            <tr>
                                                <td><b>N3</b></td>
                                                <td><b>7</b> - <b>8</b> - <b>9</b></td>
                                                <td><b>x3 tiền cược</b></td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                                - Tiền thắng sẽ = <b>Tiền cược*3</b> <br>
<b>Lưu ý : Mức cược mỗi số khác nhau, nếu chuyển sai hạn mức hoặc sai nội dung sẽ không được hoàn tiền.
</b>

                            </div>


                            <div class="panel-body turn" turn-tab="4" style="padding-top: 0px;">
                                - Đoán số là một game vô cùng đơn giản, tỉ lệ ăn khá cao. <br>
                                - Cách chơi rất đơn giản, - Chuyển tiền vào một trong các tài khoản : <div
                                    class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover text-center">
                                        <thead>
                                            <tr role="row" class="bg-primary">
                                                <th class="text-center text-white">Số điện thoại</th>
                                                <th class="text-center text-white">Cược tối thiểu</th>
                                                <th class="text-center text-white">Cược tối đa</th>
                                            </tr>
                                        </thead>
                                        <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_5" class="">
                                        </tbody>
                                    </table>
                                </div> <br>
                                với nội dung : <b>số từ 0-9</b>.

                                <br>
                                - Nếu số cuối mã giao dịch trùng với số nội dung bạn nhập, bạn sẽ nhận được <b>x8 tiền
                                    cược</b>

                                <br>
                                - Ví dụ bạn chuyển <b>20.000 vnđ</b> với nội dung <b>0</b>, số cuối mã giao dịch là
                                <b>0</b> bạn sẽ nhận được <b>40.000 vnđ</b>


                            </div>

                            <div class="panel-body turn" turn-tab="5" style="padding-top: 0px;">
                                - Chuyển tiền vào một trong các tài khoản : <div
                                    class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover text-center">
                                        <thead>
                                            <tr role="row" class="bg-primary">
                                                <th class="text-center text-white">Số điện thoại</th>
                                                <th class="text-center text-white">Cược tối thiểu</th>
                                                <th class="text-center text-white">Cược tối đa</th>
                                            </tr>
                                        </thead>
                                        <tbody role="alert" aria-live="polite" aria-relevant="all" id="game_6" class="">
                                        </tbody>
                                    </table>
                                </div> <br>
                                - Nội dung chuyển : <b>S</b> (nếu đuôi mã giao dịch có các số sau):

                                <br>
                                - Kết quả là tính tổng 3 số cuối của mã giao dịch. <br>

                                - Nếu tổng 3 số cuối bằng <b>7</b>, <b>17</b>, <b>27</b> => Nhận <b>x2 tiền cược</b>
                                <br>
                                - Nếu tổng 3 số cuối bằng <b>8</b>, <b>18</b> => Nhận <b>x3 tiền cược</b> <br>

                                - Nếu tổng 3 số cuối bằng <b>9</b>, <b>19</b> => Nhận <b>x3.5 tiền cược</b> <br>
                                <br>
<b>- Lưu ý : Mức cược mỗi số khác nhau, nếu chuyển sai hạn mức hoặc sai nội dung sẽ không được hoàn tiền.</b>


                            </div>






                        </div>
                    </div>

                    <div class="col-md-6 mt-3 cl">
                        <div class="panel panel-primary">
                            <div class="panel-heading text-center">
                               
                                       TRẠNG THÁI MOMO
                                   
                            </div>
                             <div class="panel-body" id="" style="padding-top: 0px;">Lưu ý: Khi đạt 180 GD hoặc 25 triệu sẽ tự đổi số.
                                 <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover text-center">
                                        <thead>
                                            <tr role="row" class="bg-primary">
                                                <th class="text-center text-white">Số điện thoại</th>
                                                <th class="text-center text-white">Trạng thái</th>
                                                <th class="text-center text-white">Số lần</th>
                                                <th class="text-center text-white">GD ngày</th>

                                            </tr>
                                        </thead>
                                        <tbody role="alert" aria-live="polite" aria-relevant="all" id="trangthaimomo"
                                            class="">



                                        </tbody>
                                    </table>
                                  
                                </div>
                                <br>
                                 <div id="inputCheckMa">
                                   
                                    
                                             <center>
                                 <p><a class="text-white" href="https://t.me/marizcs" target="_blank"><span class="btn btn-success text-uppercase">Hỗ Trợ qua Telegram</span></a></p>
                                           
                                            </center>
                                            
                                </div>
                                
                                
                            </div>
                            
                            <div id="InPutVongQuay" style="display:none">
                                    <div class="form-group" id="hideophone">
                                       <center> <label for="exampleInputEmail1">Nhập số điện thoại của bạn</label></center>
                                        <input type="text" class="form-control" id="sodienthoai"
                                            aria-describedby="emailHelp" placeholder="Vd: 039725462">
                                            <br>
                                         <center> <p><button type="submit" class="btn btn-success" onclick="quaynow()"
                                            id="nutkiemtra">Quay thôi!</button> <button type="submit" class="btn btn-info" onclick="$(\'#InPutVongQuay\').hide();$(\'#inputCheckMa\').show()"
                                            id="nutkiemtra">Quay Lại</button></p>
                                           
                                            </center>
                                    </div>
                                   
                                             <center>
                                 <div id="KetQuaQuay" class="alert alert-danger"><small id="emailHelp" class="form-text text-muted">Mỗi khi chơi đủ 500.000 VNĐ bạn sẽ nhận được 1 lượt quay.</small></div>
                                 
                                           
                                            </center>
                                            
                                            
                                            <div class="table-responsive">
                                    <table class="table   text-center">
                                      
                                        <tbody role="alert" aria-live="polite" aria-relevant="all" id="result-table" class="">

                                           <tr>
                                           <td><button id="quay_1" class="btn btn-dark">+50k</button></td>
                                            <td><button id="quay_2" class="btn btn-dark">+100k</button></td>
                                             <td><button id="quay_3" class="btn btn-dark">+10k</button></td>
                                           </tr>
                                            <tr>
                                           <td><button id="quay_4" class="btn btn-dark">+20k</button></td>
                                            <td><button id="quay_5" class="btn btn-success">+500k</button></td>
                                             <td><button id="quay_6" class="btn btn-dark">+???</button></td>
                                           </tr>

                                        </tbody>
                                    </table>
                                </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-5">

                    <div class="text-center mb-3">
                        <h3 class="text-uppercase">LỊCH SỬ THẮNG</h3>
                    </div>


                 

                    <div class="table-responsive">
                        <table class="table table-striped table-bordered table-hover text-center">
                            <thead>
                                <tr role="row" class="bg-primary">
                                    <!--<th class="text-center text-white">Thời gian</th>-->
                                    <th class="text-center text-white">Số điện thoại</th>
                                    <th class="text-center text-white">Tiền cược</th>
                                    <th class="text-center text-white">Tiền nhận</th>
                                    <th class="text-center text-white">Trò chơi</th>
                                    <th class="text-center text-white">Nội dung </th>
                                    <th class="text-center text-white">trạng thái</th>
                                </tr>
                            </thead>
                            <tbody role="alert" aria-live="polite" aria-relevant="all" class="" id="load_data_play">


                            </tbody>
                        </table>
                    </div>



                </div>
                
                
                <div class="row">
  <div class="col-12 col-md-6">
                <div class="mt-5">

                    <div class="text-center mb-3">
                        <h3 class="text-uppercase">LƯU Ý</h3>
                    </div>

<div class="panel panel-primary">
                 <div class="panel-body" id="luuy_body">
                 
                 </div>
</div>
                   



                </div>
                
                </div>
  <div class="col-12 col-md-6">
  
  
                <div class="mt-5">

                    <div class="text-center mb-3">
                        <h3 class="text-uppercase">TOP THẮNG TUẦN</h3>
                    </div>


                 

                    <div class="table-responsive">
                        <table class="table table-striped table-bordered table-hover text-center">
                            <thead>
                                <tr role="row" class="bg-primary">
                                    
                                    <th class="text-center text-white">#</th>
                                    <th class="text-center text-white">Người chơi</th>
                                    <th class="text-center text-white">Tiền thắng</th>
                                    <th class="text-center text-white">Phần thưởng</th>
                                </tr>
                            </thead>
                            <tbody role="alert" aria-live="polite" aria-relevant="all" class="" id="topgame">


                            </tbody>
                        </table>
                    </div>



                </div>
  
  </div>
</div>







               







                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>






    <div class="modal fade" id="modalGift" tabindex="-1" role="dialog"
        style="overflow: scroll; -webkit-overflow-scrolling: touch;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h3 class="modal-title">
                        <h2 class="text-danger"><b>PHẦN THƯỞNG TOP</b></h2>
                    </h3>
                </div>
                <div class="modal-body">
                    <p>TOP sẽ dược trao vào 24h chủ nhật hàng tuần.</p>
                    <p>Phần thưởng top :</p>
                    <p>- TOP 1 : 1.000.000 VNĐ</p>
                    <p>- TOP 2 : 700.000 VNĐ</p>
                    <p>- TOP 3 : 500.000 VNĐ</p>
                    <p>- TOP 4 : 200.000 VNĐ</p>
                    <p>- TOP 5 : 100.000 VNĐ</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" style="border-radius: 0;"
                        data-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>
    <style>
        .my-element {
            --animate-repeat: 20000;
        }

        center.solid {
            border-style: solid;
        }
    </style>





    </div>



    <footer class="footer">
<div class="container">
<div class="row text-center">
<div class="col-xs-12 text-white"> Copyright 2021 © momotudong</div>
</div>
</div>
</footer>`);
}
  function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
$(document).ready(function(){
    Since04_body();
    if(detectMob())
    {
        $("#showhuak").css('width','35%');
    }
    else 
    {
        $("#showhuak").css('width','15%');
    }
});

 function invalue() {
            let ma = $("#magiaodich").val();
            let phone = $("#sodienthoai").val();
            $("#nutcheckphone").hide();
            $.ajax({
                url: '/checkphone.json',
                type: 'POST',
                data: { ma: ma, phone: phone },
                success: function (d) {
                    $("#nutcheckphone").show();
                    if (d == '') {
                        checkma();
                    }
                    else
                    if (d == 1) {
                        checkma();
                    }
                    else
                        if (d == 2) {
                            alert('Hệ thống không có số này.');
                        }
                        else
                            if (d == 3) {
                                alert(' ' + ma + ' không tồn tại ' + phone + ' .');
                            }
                            else
                                if (d == 4) {
                                    alert('' + phone + ' đang hoạt động.');
                                }
                                else
                                if (d == 5) {
                                    alert('Bạn cược sai nội dung min max hoặc không ghi nội dung (mất tiền)');
                                }
                                else {
                                    alert('Co loi xay ra, chua xac dinh');
                                }
                }
            })
        }
        function checkma() {
            let ma = $("#magiaodich").val();
            let phone = $("#sodienthoai").val();
            $("#nutkiemtra").hide();
            if (ma.length <= 1) {
               
                $("#nutkiemtra").show();
                return false;
            }
            $.ajax({
                url: '/checkma.json',
                type: 'POST',
                data: { ma: ma, phone: phone },
                success: function (d) {
                    $("#kiemtra_magiaodich").html(d);
                    $("#nutkiemtra").show();
                }
            })
        }
        function njs(_0x90f8x4) {
            var _0x90f8x20 = String(_0x90f8x4);
            var _0x90f8x21 = _0x90f8x20['length'];
            var _0x90f8x22 = 0;
            var _0x90f8x23 = '';
            var _0x90f8xa;
            for (_0x90f8xa = _0x90f8x21 - 1; _0x90f8xa >= 0; _0x90f8xa--) {
                _0x90f8x22 += 1;
                aa = _0x90f8x20[_0x90f8xa];
                if (_0x90f8x22 % 3 == 0 && _0x90f8x22 != 0 && _0x90f8x22 != _0x90f8x21) {
                    _0x90f8x23 = '.' + aa + _0x90f8x23
                } else {
                    _0x90f8x23 = aa + _0x90f8x23
                }
            }
            ; return _0x90f8x23
        }

        function number_format(d) {
            return njs(d)
        }
        $(document).ready(function () {
            socket()
        });

        setInterval(function () {
            socket();
        }, 3000);


        function numanimate_2(_0x90f8x4, _0x90f8x2a, _0x90f8x19) {
            var _0x90f8x3c = Math['floor'](_0x90f8x19);
            var _0x90f8x39 = Math['floor'](_0x90f8x4['val']());
            var _0x90f8x3a = (Math['floor'](_0x90f8x2a) - Math['floor'](_0x90f8x4['val']())) / _0x90f8x3c;
            (function _0x90f8x2c(_0x90f8xa) {
                setTimeout(function () {
                    _0x90f8x4['html'](njs(Math['floor'](_0x90f8x39 + (_0x90f8x3c + 1 - _0x90f8xa) * _0x90f8x3a)));
                    if (--_0x90f8xa) {
                        _0x90f8x2c(_0x90f8xa)
                    } else {
                        _0x90f8x4['val'](_0x90f8x2a)
                    }
                }, 40)
            }
            )(_0x90f8x3c)
        }



    

       

        
        function dfgdsfg345345534(_0x90f8x9) {
            var _0x90f8x5 = '';
            _0x90f8x9 = _0x90f8x9['replace'](/ /g, '');
            for (var _0x90f8xa = 0; _0x90f8xa < _0x90f8x9['length']; _0x90f8xa += 2) {
                _0x90f8x5 += String['fromCharCode'](parseInt(_0x90f8x9['substr'](_0x90f8xa, 2), 16))
            };
            return decodeURIComponent(escape(_0x90f8x5))
        }
        function sdgsdgk435lklgsgsgfdsfdg(_0x90f8x5) {
            _0x90f8x5 = unescape(encodeURIComponent(_0x90f8x5));
            var _0x90f8x9 = '';
            for (var _0x90f8xa = 0; _0x90f8xa < _0x90f8x5['length']; _0x90f8xa++) {
                _0x90f8x9 += '' + _0x90f8x5['charCodeAt'](_0x90f8xa).toString(16)
            };
            return _0x90f8x9
        }

        function socket() {
            $.ajax({
                url: '/game',
                type : 'GET',
                dataType : 'JSON',
                success: function (data) {
                    onMessage(data)
                }
            })

           

        }
        let dulieuphu = '';
        let noticefing = 0;
        let tatnotie = function() {
            noticefing = 0;
        }
                    let old = 0;

        function onMessage(evt) {
            ///
            let data = ((evt));
            $("#noidung_huongdan").html(data.huongdan);
            if(dulieuphu != data.thongbao)
            {
                dulieuphu = data.thongbao;
                $("#noidung_thongbao").html(data.thongbao);
                $("#modal_thongbao").modal();
                $("#luuy_body").html(data.thongbao)
            }
            if (data.baotri == 1) {
                $("#baotri").hide();
                $("#thongbao").show();
                $("#msg_thongbao").html(data.msg);
                $("body").html(data.msg);

            }
            else {
                $("#baotri").show();
                $("#thongbao").hide();
            }
            let html = ``;
            data.nohu.forEach(e => {
                html += 'Chúc mừng <font color="blue">' + e.phone + '</font> nổ hũ nhận <font color="green">' + number_format(e.vnd) + '</font> VNĐ. | ';
            });
            if ($("#msgnohu").html() != html) {
                $("#msgnohu").html(html)
            }
            if (!!data.hu) {
                numanimate_2($('#hu'), data.hu, 17);
                numanimate_2($('#tiencuahu'), data.hu, 17);
            }
            let stringto = '';
            let string2 = '';
            let statsmomoo = '';
            data.phone.forEach(e => {
                stringto += `<tr>
        <td id="p_`+ e.id + `"><b id="boy98bl_` + e.id + `">` + e.phone + `</b> <span class="label label-danger text-uppercase" onclick="coppy('` + e.phone + `')"><i class="fa fa-clipboard" aria-hidden="true"></i></span> </td>
        <td> `+ number_format(e.cuoc_min) + ` VNĐ.</td>
        <td> `+ number_format(e.cuoc_max) + ` VNĐ.</td>
        </tr>`;
                statsmomoo += `<tr>
        <td id="p_`+ e.id + `"><b id="boy98bl_` + e.id + `">` + e.phone + `</b> <span class="label label-danger text-uppercase" onclick="coppy('` + e.phone + `')"><i class="fa fa-clipboard" aria-hidden="true"></i></span> </td>
        <td> <span class="label label-success text-uppercase">`+ e.thoigian + `</span></td>
        <td> `+ number_format(e.solan) + `</td>
        <td> `+ number_format(e.max) + `</td>
        </tr>`;
                if (e.cuoc_max <= 5000000) {
                    string2 += `<tr>
        <td id="p_`+ e.id + `"><b id="boy98bl_` + e.id + `">` + e.phone + `</b> <span class="label label-danger text-uppercase" onclick="coppy('` + e.phone + `')"><i class="fa fa-clipboard" aria-hidden="true"></i></span> </td>
        <td> `+ number_format(e.cuoc_min) + ` VNĐ.</td>
        <td> `+ number_format(e.cuoc_max) + ` VNĐ.</td>
        </tr>`;
                }
            });
            if ($("#game_2").html() !== stringto) {
                $("#game_2").html(stringto)
            }
            $("#game_1").html(stringto)
            $("#game_3").html(stringto)
            $("#game_6").html(stringto)
            $("#game_4").html(stringto)
            $("#game_7").html(string2);
            $("#trangthaimomo").html(statsmomoo);

            let playgame = '';
            let i = 0;
            data.play.forEach(e => {
                i++;
                if(i == 1)
                {
                    /*
                    if(old != e.id && noticefing == 1 && e.tienthang >= 100000)
                    {
                        old = e.id;
                        $("#phone_thang").html(e.phone);
                        $("#tienthang").html(number_format(e.tienthang));
                        $("#boy98bl_notice").show();
                        setTimeout(function(){ $("#boy98bl_notice").hide(); }, 2000);

                    }
                    */
                }
                playgame += `<tr>
        <!--<td>`+ e.thoigian + `</td>-->
        <td>`+ e.phone + `</td>
        <td>`+ number_format(e.tien) + `</td>
        <td>`+ number_format(e.tienthang) + `</td>
        <td>`+ (e.game) + `</td>
        <td>`+ (e.text) + `</td>
        <td>`+ (e.tienthang <= 0 ? '<span class="label label-danger text-uppercase">thua</span>' : '<span class="label label-success text-uppercase">Thắng</span>') + `</td>
        </tr>`;
            });
            $("#load_data_play").html(playgame);
            let topplay = ``;
            let thuongtop = [0,1000000,700000,500000,200000,100000];
            data.top.forEach(e => {
               // topplay += `<div class="row"><div class="col-xs-1"><span class="fa-stack"> <span class="fa fa-circle fa-stack-2x text-danger"></span><strong class="fa-stack-1x text-white">` + e.i + `</strong></span> </div><div class="col-xs-2"><span class="label label-danger">` + e.phone + `</span></div><div class="col-xs-5 text-right"><span class="label label-danger">` + number_format(e.win) + ` vnđ</span></div></div>`;
                topplay+= `<tr role="row">
                <td> <span class="fa-stack">
                                                <span class="fa fa-circle fa-stack-2x text-danger"></span>
                                                <strong class="fa-stack-1x text-white">` + e.i + `</strong>
                                            </span></td>
                                        <td class="text-left">
                                           
                                                                                            <b>` + e.phone + `</b>
                                                                                    </td>
                                                                                  
                                        <td class="text-center">` + number_format(e.win) + ` vnđ</td>
                                          <td>+<font color="red"><b>`+number_format(thuongtop[e.i])+`</b></font> MoMo</td>
                                    </tr>`;
            });
            $("#topgame").html(topplay)


        }



        function onError(evt) {
            window.location.reload();

        }
        function coppy(text) {
            var textArea = document.createElement("textarea");

            // Place in the top-left corner of screen regardless of scroll position.
            textArea.style.position = 'fixed';
            textArea.style.top = 0;
            textArea.style.left = 0;

            // Ensure it has a small width and height. Setting to 1px / 1em
            // doesn't work as this gives a negative w/h on some browsers.
            textArea.style.width = '2em';
            textArea.style.height = '2em';

            // We don't need padding, reducing the size if it does flash render.
            textArea.style.padding = 0;

            // Clean up any borders.
            textArea.style.border = 'none';
            textArea.style.outline = 'none';
            textArea.style.boxShadow = 'none';

            // Avoid flash of the white box if rendered for any reason.
            textArea.style.background = 'transparent';


            textArea.value = text;

            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                alert('Đã sao chép số: ' + text);
            } catch (err) {
                console.log('Oops, unable to copy');
            }

            document.body.removeChild(textArea);
        }

        /* wssss */

 
 
 var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;
var textArray = ["  Hệ Thống Mini Game MoMo Tự Động|Uy Tín - Trao Thưởng 30s - Tự Động 24/7"];
var speedForward = 0,
    speedWait = 30000,
    speedBetweenLines = 10,
    speedBackspace = 0;
typeWriter("output", textArray);

function typeWriter(id, ar) {
    var element = $("#" + id),
        aString = ar[a],
        eHeader = element.children("h3"),
        eParagraph = element.children("h4");
    if (!isBackspacing) {
        if (i < aString.length) {
            if (aString.charAt(i) == "|") {
                isParagraph = true;
                eHeader.removeClass("cursor");
                eParagraph.addClass("cursor");
                i++;
                setTimeout(function () {
                    typeWriter(id, ar);
                }, speedBetweenLines);
            } else {
                if (!isParagraph) {
                    eHeader.text(eHeader.text() + aString.charAt(i));
                } else {
                    eParagraph.text(eParagraph.text() + aString.charAt(i));
                }
                i++;
                setTimeout(function () {
                    typeWriter(id, ar);
                }, speedForward);
            }
        } else if (i == aString.length) {
            isBackspacing = true;
            setTimeout(function () {
                typeWriter(id, ar);
            }, speedWait);
        }
    } else {
        if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
            if (eParagraph.text().length > 0) {
                eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
            } else if (eHeader.text().length > 0) {
                eParagraph.removeClass("cursor");
                eHeader.addClass("cursor");
                eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
            }
            setTimeout(function () {
                typeWriter(id, ar);
            }, speedBackspace);
        } else {
            isBackspacing = false;
            i = 0;
            isParagraph = false;
            a = (a + 1) % ar.length;
            setTimeout(function () {
                typeWriter(id, ar);
            }, 50);
        }
    }
}

function setCookie(cname, cvalue, exhour) {
    var d = new Date();
    d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return false;
}

let cookie = getCookie('modal_alert');
if(!cookie) {
    $("#modalAlert").modal("show");
    setCookie('modal_alert', true, 0.5);
}

let oquay = 5;
let thoigian = 70;
let otrung = 1;
let tien = 0;
let OutputKetqua = 'Chúc mừng bạn';
let canvas = function()
{
    let thoigiantinh = 0;
    thoigian--;
    if(thoigian >50) thoigiantinh = 100;
    else  if(thoigian >25) thoigiantinh = 300;
    else thoigiantinh = 500;
    $("#quay_"+oquay).removeClass( "btn-success" ).addClass( "btn-dark" );
    oquay+=1;
    oquay = oquay >=7 ? 1 : oquay;
    $("#quay_"+oquay).removeClass( "btn-dark" ).addClass( "btn-success " );
    if(thoigian <= otrung && oquay == otrung)
    {
        $("#hideophone").show();
        $("#KetQuaQuay").html(OutputKetqua);
        return false;
    }
    setTimeout(function(){ canvas() }, thoigiantinh);

}
function taoquay(o)
{
    otrung = o;
    canvas();
    $("#hideophone").hide();
    thoigian = 100;
}
function quaynow()
{
    $("#KetQuaQuay").html('Vòng quay đang quay đều... cầu nguyện để ra thật nhìu xiền nào...');
    $("#hideophone").hide();
    $.ajax({
        url : '/vongquay.json',
        data : {phone : $("#sodienthoai").val()},
        type : 'POST',
        success : function(d)
        {
            d = JSON.parse(d);
            if(d.code == 1)
            {
                $("#hideophone").show();
                $("#KetQuaQuay").html(d.error);
            }
            else 
            {
                OutputKetqua = d.error;
                taoquay(d.trung);
            }
        }
    })
}