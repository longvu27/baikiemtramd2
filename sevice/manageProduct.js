"use strict";
exports.__esModule = true;
exports.ManageProduct = void 0;
var ManageProduct = /** @class */ (function () {
    function ManageProduct() {
        this.listProduct = [];
    }
    ManageProduct.prototype.add = function (t) {
        this.listProduct.push(t);
    };
    ManageProduct.prototype["delete"] = function (id) {
        var index = this.findById(id);
        if (this.findById(id) == -1) {
            return ('<<<<<Không tồn tại mã hàng>>>>>');
        }
        else {
            this.listProduct.splice(index, 1);
        }
    };
    ManageProduct.prototype.edit = function (id, t) {
        var index = this.findById(id);
        this.listProduct[index] = t;
    };
    ManageProduct.prototype.findById = function (id) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (id == this.listProduct[i].id) {
                return i;
            }
        }
        return -1;
    };
    ManageProduct.prototype.showAll = function () {
        if (this.listProduct.length == 0) {
            return ('<<<<<không có hàng>>>>>');
        }
        else {
            return this.listProduct;
        }
    };
    ManageProduct.prototype.showProductFind = function (id) {
        var index = this.findById(id);
        return this.listProduct[index];
    };
    return ManageProduct;
}());
exports.ManageProduct = ManageProduct;
