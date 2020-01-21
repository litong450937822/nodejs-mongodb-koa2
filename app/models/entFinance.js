'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entFinanceSchema = new Schema({
    userId: Object,
    projectName: String,
    financeMoney: Number,
    warrantType: String,
    warrantRate: Number,
    warrantRateMax: Number,
    remark: String,
    state: {
        type: Number,
        default: 0
    },
    meta: {
        createTime: Date,
        updateTime: Date
    }
});

entFinanceSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createTime = this.meta.updateTime = Date.now()
    } else {
        this.meta.updateTime = Date.now()
    }
    next()
});

var EntFinance = mongoose.model('EntFinance', entFinanceSchema);

module.exports = EntFinance;
