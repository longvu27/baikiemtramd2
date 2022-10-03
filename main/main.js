"use strict";
exports.__esModule = true;
var product_1 = require("../model/product");
var manageProduct_1 = require("../sevice/manageProduct");
var input = require('readline-sync');
var listProduct = new manageProduct_1.ManageProduct();
function mainMenu() {
    var menu = "-----Menu Chinh-----\n1.Hien thi danh sach hang hoa\n2.Tim kiem mat hang\n3.Them moi mat hang\n4.Chinh sua thong tin hang hoa\n5.Xoa hang";
    var choice;
    do {
        console.log(menu);
        choice = +input.question('Nhap lua chon cua ban: ');
        switch (choice) {
            case 1:
                showListProduct();
                break;
            case 2:
                showProductFind();
                break;
            case 3:
                addProduct();
                break;
            case 4:
                editProduct();
                break;
            case 5:
                deleteProduct();
                break;
        }
    } while (choice);
}
function addProduct() {
    console.log('Ban da chon vao muc them moi, xin moi ban nhap');
    var id = +input.question('Nhap id san pham: ');
    var name = input.question('Nhap ten san pham: ');
    var type = input.question('Nhap loai hang: ');
    var price = +input.question('Nhap gia: ');
    var quantity = +input.question('Nhap so luong: ');
    var time = new Date();
    var today = "".concat(time.getDate(), "/").concat(time.getMonth() + 1);
    var product = new product_1.Product(id, name, type, price, quantity, today);
    listProduct.add(product);
}
function showProductFind() {
    var name = input.question('Nhap ten san pham ban can tim: ');
    // this.listProduct.filter(item => item.name.includes(name));
    // let id = +input.question('Nhap id san pham ban muon tim: ');
    //
    // if (listProduct.findById(id) == -1) {
    //     console.log('<<<<<Không hàng nào có id này>>>>>')
    // }
    // else {
    //     console.log(listProduct.showProductFind(id));
    // }
    var stringName = new RegExp(name);
    var sum = 0;
    for (var i = 0; i < listProduct.listProduct.length; i++) {
        var testName = stringName.test(listProduct.listProduct[i].name);
        if (testName) {
            console.log("id: ".concat(listProduct.listProduct[i].id, " - ten: ").concat(listProduct.listProduct[i].name, " - loai hang: ").concat(listProduct.listProduct[i].type, " - gia: ").concat(listProduct.listProduct[i].price, " - so luong: ").concat(listProduct.listProduct[i].quantity, " - ngay: ").concat(listProduct.listProduct[i].dateCreated));
            sum++;
        }
    }
    if (sum == 0) {
        console.log('<<<Khong co hang>>>');
    }
}
function showListProduct() {
    // console.log(listProduct.showAll());
    if (listProduct.listProduct.length == 0) {
        console.log('<<< khong co cai hang nao >>>');
    }
    else {
        console.log('<<< Danh sach san pham bao gom >>>');
        for (var i = 0; i < listProduct.listProduct.length; i++) {
            console.log("id: ".concat(listProduct.listProduct[i].id, " - ten: ").concat(listProduct.listProduct[i].name, " - loai hang: ").concat(listProduct.listProduct[i].type, " - gia: ").concat(listProduct.listProduct[i].price, " - so luong: ").concat(listProduct.listProduct[i].quantity, " - ngay: ").concat(listProduct.listProduct[i].dateCreated));
        }
    }
}
function deleteProduct() {
    var id = +input.question('Nhap id san pham ban muon xoa: ');
    if (listProduct.findById(id) == -1) {
        console.log('<<<<<không có sản phẩm này để mà xóa>>>>>');
    }
    else {
        listProduct["delete"](id);
        console.log("- ban vua xoa san pham co id: ".concat(id, " -"));
    }
}
function editProduct() {
    var id = +input.question('Nhap id san pham ban muon sua: ');
    if (listProduct.findById(id) == -1) {
        console.log('<<<<<không tồn tại cái hàng>>>>>');
    }
    else {
        console.log('Ban can nhap nhung thong tin sau de sua san pham');
        var name_1 = input.question('Nhap ten san pham: ');
        var type = input.question('Nhap loai san pham: ');
        var price = +input.question('Nhap gia san pham: ');
        var quantity = +input.question('Nhap gia san pham: ');
        var time = new Date();
        var today = "".concat(time.getDate(), "/").concat(time.getMonth() + 1);
        var newProduct = new product_1.Product(id, name_1, type, price, quantity, today);
        listProduct.edit(id, newProduct);
    }
}
mainMenu();
// this.listProduct.filter(item => item.name.includes(name))
