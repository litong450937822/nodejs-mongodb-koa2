'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entBaseInfoSchema = new Schema({
    userId: {
        type: Object,
        unique: true
    },
    companyName: String,
    creditCode: String,
    creditDate: Date,
    setupDate: Date,
    registeredCapital: String,
    legalRepresentative: String,
    businessScope: String,
    creditRating: String,
    ratingUpdateTime: Date,
    ratingPeriodValidity: Date,
    platformCredit: Number,
    creditUpdateTime: Date,
    creditPeriodValidity: Date,
    companyLabel: Object,
    operatingStatus: String,
    taxpayerNum: String,
    registrationNum: String,
    organizationCode: String,
    companyType: String,
    industryInvolved: String,
    approvalDate: Date,
    registrationAuthority: String,
    area: String,
    englishName: String,
    formerName: String,
    insurancePerson: String,
    staffSize: String,
    businessTerm: String,
    address: String,
    logo: String,
    completed: String,
    companyScale: String,
    companyBackground: String,
    financialStatus: String,
    IndustryOutlook: String,
    creditLevel: String,
    creditReport: String,
    meta: {
        createTime: Date,
        updateTime: Date
    }
});

entBaseInfoSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createTime = this.meta.updateTime = Date.now()
    } else {
        this.meta.updateTime = Date.now()
    }
    next()
});

var EntBaseInfo = mongoose.model('EntBaseInfo', entBaseInfoSchema);

module.exports = EntBaseInfo;
