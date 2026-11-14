// 显示微信二维码弹窗
const showWechatQRCode = () => {
const modal = document.getElementById('wechatQrcodeModal');
modal.classList.add('show');
document.addEventListener('click', closeWechatQRCodeOnClickOutside);
};

// 点击弹窗外部关闭微信二维码弹窗
const closeWechatQRCodeOnClickOutside = (e) => {
const modal = document.getElementById('wechatQrcodeModal');
if (e.target === modal) {
modal.classList.remove('show');
document.removeEventListener('click', closeWechatQRCodeOnClickOutside);
}
};

// 显示QQ二维码弹窗
const showQqQRCode = () => {
const modal = document.getElementById('QqQrcodeModal');
modal.classList.add('show');
document.addEventListener('click', closeQqQRCodeOnClickOutside);
};

// 点击弹窗外部关闭QQ二维码弹窗
const closeQqQRCodeOnClickOutside = (e) => {
const modal = document.getElementById('QqQrcodeModal');
if (e.target === modal) {
modal.classList.remove('show');
document.removeEventListener('click', closeQqQRCodeOnClickOutside);
}
};













// 显示弹窗示例 用于修改时参考 实际使用时去掉【】符号与注释符
// const 【JS代码调用名】 = () => {
// const modal = document.getElementById('【CSS在html中的id】');
// modal.classList.add('show');
// document.addEventListener('click', 【在下面代码中取的关闭弹窗的指令名】);
// };

// 关闭弹窗示例 用于修改时参考 实际使用时去掉【】符号与注释符
// const 【给关闭弹窗的指令取一个名字】 = (e) => {
// const modal = document.getElementById('【CSS在html中的id】');
// if (e.target === modal) {
// modal.classList.remove('show');
// document.removeEventListener('click', 【关闭弹窗的指令名】);
// }
// };










// 显示会员业务弹窗
const Hyyw = () => {
const modal = document.getElementById('HyywTc');
modal.classList.add('show');
document.addEventListener('click', closeHyyw);
};

// 关闭会员业务弹窗
const closeHyyw = (e) => {
const modal = document.getElementById('HyywTc');
if (e.target === modal) {
modal.classList.remove('show');
document.removeEventListener('click', closeHyyw);
}
};

// 显示抖音业务弹窗
const Dyyw = () => {
const modal = document.getElementById('DyywTc');
modal.classList.add('show');
document.addEventListener('click', closeDyyw);
};

// 关闭抖音业务弹窗
const closeDyyw = (e) => {
const modal = document.getElementById('DyywTc');
if (e.target === modal) {
modal.classList.remove('show');
document.removeEventListener('click', closeDyyw);
}
};

// 显示软件开发弹窗
const Rjkf = () => {
const modal = document.getElementById('RjkfTc');
modal.classList.add('show');
document.addEventListener('click', closeRjkf);
};

// 关闭软件开发弹窗
const closeRjkf = (e) => {
const modal = document.getElementById('RjkfTc');
if (e.target === modal) {
modal.classList.remove('show');
document.removeEventListener('click', closeRjkf);
}
};

// 显示脚本定制弹窗
const Jbdz = () => {
const modal = document.getElementById('JbdzTc');
modal.classList.add('show');
document.addEventListener('click', closeJbdz);
};

// 关闭脚本定制弹窗
const closeJbdz = (e) => {
const modal = document.getElementById('JbdzTc');
if (e.target === modal) {
modal.classList.remove('show');
document.removeEventListener('click', closeJbdz);
}
};

// 显示网站搭建弹窗
const Wzdj = () => {
const modal = document.getElementById('WzdjTc');
modal.classList.add('show');
document.addEventListener('click', closeWzdj);
};

// 关闭网站搭建弹窗
const closeWzdj = (e) => {
const modal = document.getElementById('WzdjTc');
if (e.target === modal) {
modal.classList.remove('show');
document.removeEventListener('click', closeWzdj);
}
};

// 显示平面设计弹窗
const Txsj = () => {
const modal = document.getElementById('TxsjTc');
modal.classList.add('show');
document.addEventListener('click', closeTxsj);
};

// 关闭平面设计弹窗
const closeTxsj = (e) => {
const modal = document.getElementById('TxsjTc');
if (e.target === modal) {
modal.classList.remove('show');
document.removeEventListener('click', closeTxsj);
}
};