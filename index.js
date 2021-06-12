// Bài 1
var getEle = function (id) {
    return document.getElementById(id);
}

var rdKhuVucA = getEle('rdKhuVucA');
var rdKhuVucB = getEle('rdKhuVucB');
var rdKhuVucC = getEle('rdKhuVucC');
var rdKhuVucX = getEle('rdKhuVucX');

var rdDoiTuong1 = getEle('rdDoiTuong1');
var rdDoiTuong2 = getEle('rdDoiTuong2');
var rdDoiTuong3 = getEle('rdDoiTuong3');
var rdDoiTuong0 = getEle('rdDoiTuong0');

var tinhDiemThiSinh = function (nhapDiemToan, nhapDiemLy, nhapDiemHoa) {
    var tongDiem = 0;
    return tongDiem = nhapDiemToan + nhapDiemLy + nhapDiemHoa;
}

var tinhDiemKhuVuc = function () {
    var diemKhuVuc;
    if (rdKhuVucA.checked) {
        diemKhuVuc = 2;
    }
    else if (rdKhuVucB.checked) {
        diemKhuVuc = 1;
    }
    else if (rdKhuVucC.checked) {
        diemKhuVuc = 0.5;
    }
    else if (rdKhuVucX.checked) {
        diemKhuVuc = 0;
    }
    return diemKhuVuc;
}

var tinhDiemDoiTuong = function () {
    var diemDoiTuong;
    if (rdDoiTuong1.checked) {
        diemDoiTuong = 2.5;
    }
    else if (rdDoiTuong2.checked) {
        diemDoiTuong = 1.5;
    }
    else if (rdDoiTuong3.checked) {
        diemDoiTuong = 1;
    }
    else if (rdDoiTuong0.checked) {
        diemDoiTuong = 0;
    }
    return diemDoiTuong;
}

var tinhTongDiem = function (tongDiem, diemKhuVuc, diemDoiTuong) {
    var tatCaDiem = tongDiem + diemKhuVuc + diemDoiTuong;
    return tatCaDiem;
}

var tinhKetQua = function (nhapDiemChuan, tatCaDiem) {
    var ketQuaDauRot = ' ';
    if (tatCaDiem >= nhapDiemChuan) {
        ketQuaDauRot = 'Đậu';
    }
    else {
        ketQuaDauRot = 'Rớt';
    }
    return ketQuaDauRot;
}
var xuatKetQua = function () {
    var nhapDiemChuan = getEle('nhapDiemChuan').valueAsNumber;
    var nhapDiemToan = getEle('nhapDiemToan').valueAsNumber;
    var nhapDiemLy = getEle('nhapDiemLy').valueAsNumber;
    var nhapDiemHoa = getEle('nhapDiemHoa').valueAsNumber;
    var ketQuaDiemThiSinh = getEle('ketQuaDiemThiSinh');
    var ketQuaDauRotThiSinh = getEle('ketQuaDauRotThiSinh');
    if (isNaN(nhapDiemChuan) || isNaN(nhapDiemToan) || isNaN(nhapDiemLy) || isNaN(nhapDiemHoa)) {
        alert('Bạn phải nhập đủ điểm của 3 môn và điểm hội đồng');
    }
    else if (nhapDiemChuan < 0 || nhapDiemToan < 0 || nhapDiemLy < 0 || nhapDiemHoa < 0) {
        alert('Bạn không được nhập số âm');
    }
    else {
        debugger
        var diemKhuVuc = tinhDiemKhuVuc();
        var diemDoiTuong = tinhDiemDoiTuong();
        if (isNaN(diemKhuVuc) || isNaN(diemDoiTuong)) {
            alert('Bạn phải tích vào cả 2 ô điểm khu vực và điểm đối tượng');
        }
        else {
            var tongDiem = tinhDiemThiSinh(nhapDiemToan, nhapDiemLy, nhapDiemHoa);
            var tatCaDiem = tinhTongDiem(tongDiem, diemKhuVuc, diemDoiTuong);
            var ketQuaDauRot = tinhKetQua(nhapDiemChuan, tatCaDiem);
            ketQuaDauRotThiSinh.innerHTML = 'Thí sinh đã: ' + ketQuaDauRot;
            ketQuaDiemThiSinh.innerHTML = 'Tổng điểm của thí sinh là: ' + tatCaDiem;
        }
        console.log(diemKhuVuc);
        console.log(diemDoiTuong);
    }
}
document.getElementById('btnBai1').addEventListener('click', xuatKetQua);

// BÀI 2

var tinhTienDien = function (nhapKw) {
    var tongTien = 0;
    if (nhapKw > 0 && nhapKw <= 50) {
        tongTien = nhapKw * 500;
    }
    else if (nhapKw > 50 && nhapKw <= 100) {
        tongTien = 25000 + (nhapKw - 50) * 650;
    }
    else if (nhapKw > 100 && nhapKw <= 200) {
        tongTien = 25000 + 32500 + (nhapKw - 100) * 850;
    }
    else if (nhapKw > 200 && nhapKw <= 350) {
        tongTien = 25000 + 32500 + 85000 + (nhapKw - 200) * 1100;
    }
    else {
        tongTien = 25000 + 32500 + 85000 + 165000 + (nhapKw - 350) * 1300;
    }
    return tongTien;
}

var hoaDon = function () {
    debugger
    var nhapHoTen = getEle('nhapHoTen').value;
    var nhapKw = getEle('nhapKw').valueAsNumber;
    ketQuaBai2 = getEle('ketQuaBai2');
    if (nhapHoTen == '' || typeof nhapHoTen === 'number' || isNaN(nhapKw) || parseFloat(nhapKw)) {
        alert('Bạn phải đúng tên và số kW tiêu thụ');
    }
    else if (nhapKw < 0) {
        alert('Bạn phải nhập số kW > 0');
    }
    else {
        var tienDien = tinhTienDien(nhapKw);
        ketQuaBai2.innerHTML = 'Tổng tiền điện của ' + nhapHoTen + ' là: ' + tienDien.toLocaleString() + ' VNĐ';
    }
}
document.getElementById('btnBai2').addEventListener('click', hoaDon);
