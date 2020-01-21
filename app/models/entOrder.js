'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entOrderSchema = new Schema({
    entId: Object,
    bankId: Object,
    lineOfCredit: Number,
    warrantRate: Number,
    warrentRangeDate: String,
    backMoneyType: String,
    financeId: Object,
    creditValidity: String,
    state: {
        type: Number,
        default: 0
    },
    meta: {
        createTime: Date,
        updateTime: Date
    }
});

entOrderSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createTime = this.meta.updateTime = Date.now()
    } else {
        this.meta.updateTime = Date.now()
    }
    next()
});

var EntOrder = mongoose.model('EntOrder', entOrderSchema);

module.exports = EntOrder;
