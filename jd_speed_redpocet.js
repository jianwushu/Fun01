/*
京东极速版领红包
自动提现微信现金

活动地址：京东极速版-首页-领红包
活动入口：京东极速版-领红包
已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京东极速版红包
20 0,22 * * * jd_speed_redpocke.js, tag=京东极速版红包, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

================Loon==============
[Script]
cron "20 0,22 * * *" script-path=jd_speed_redpocke.js,tag=京东极速版红包

===============Surge=================
京东极速版红包 = type=cron,cronexp="20 0,22 * * *",wake-system=1,timeout=3600,script-path=jd_speed_redpocke.js

============小火箭=========
京东极速版红包 = type=cron,script-path=jd_speed_redpocke.js, cronexpr="20 0,22 * * *", timeout=3600, enable=true
*/
const $ = new Env('京东极速版领红包-加密');

var _0xodw = "jsjiami.com.v6",
  _0xodw_ = ["_0xodw"],
  _0xe7a4 = [
    _0xodw,
    "\x69\x73\x4e\x6f\x64\x65",
    "\x2e\x2f\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79",
    "\x2e\x2f\x6a\x64\x43\x6f\x6f\x6b\x69\x65\x2e\x6a\x73",
    "\x45\x75\x37\x2d\x45\x30\x43\x55\x7a\x71\x59\x79\x68\x5a\x4a\x6f\x39\x64\x33\x59\x6b\x51",
    "\x39\x57\x41\x31\x32\x6a\x59\x47\x75\x6c\x41\x72\x7a\x57\x53\x37\x76\x63\x72\x77\x68\x77",
    "\x6b\x65\x79\x73",
    "\x66\x6f\x72\x45\x61\x63\x68",
    "\x70\x75\x73\x68",
    "\x65\x6e\x76",
    "\x4a\x44\x5f\x44\x45\x42\x55\x47",
    "\x66\x61\x6c\x73\x65",
    "\x6c\x6f\x67",
    "\x73\x74\x72\x69\x6e\x67\x69\x66\x79",
    "\x69\x6e\x64\x65\x78\x4f\x66",
    "\x47\x49\x54\x48\x55\x42",
    "\x65\x78\x69\x74",
    "\x67\x65\x74\x64\x61\x74\x61",
    "\x43\x6f\x6f\x6b\x69\x65\x4a\x44",
    "\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32",
    "\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44",
    "\x6d\x61\x70",
    "\x63\x6f\x6f\x6b\x69\x65",
    "\x66\x69\x6c\x74\x65\x72",
    "\x0a\u3010\u5982\u663e\u793a\x20\u8d26\u53f7\u9886\u7ea2\u5305\u8c8c\u4f3c\u9ed1\u4e86\uff0c\u8bf7\u624b\u52a8\u8fdb\u5165\u6d3b\u52a8\u67e5\u770b\u3011\x0a\u3010\u5982\u624b\u52a8\u4e5f\u63d0\u793a\u706b\u7206\x2c\u5219\u6b64\u6d3b\u52a8\u5df2\u7ecf\u9ed1\u4e86\u3011",
    "\x6d\x73\x67",
    "\x6e\x61\x6d\x65",
    "\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\u4eac\u4e1c\u8d26\u53f7\u4e00\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e",
    "\x6c\x65\x6e\x67\x74\x68",
    "\x55\x73\x65\x72\x4e\x61\x6d\x65",
    "\x6d\x61\x74\x63\x68",
    "\x69\x6e\x64\x65\x78",
    "\x69\x73\x4c\x6f\x67\x69\x6e",
    "\x6e\x69\x63\x6b\x4e\x61\x6d\x65",
    "\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7",
    "\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a",
    "\u3010\u63d0\u793a\u3011\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548",
    "\u4eac\u4e1c\u8d26\u53f7",
    "\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e",
    "\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79",
    "\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548\x20\x2d\x20",
    "\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65",
    "\x63\x61\x74\x63\x68",
    "\x2c\x20\u5931\u8d25\x21\x20\u539f\u56e0\x3a\x20",
    "\x66\x69\x6e\x61\x6c\x6c\x79",
    "\x64\x6f\x6e\x65",
    "\x77\x61\x69\x74",
    "\x6c\x6f\x67\x45\x72\x72",
    "\x67\x65\x74",
    "\x73\x70\x72\x69\x6e\x67\x5f\x72\x65\x77\x61\x72\x64\x5f\x71\x75\x65\x72\x79",
    "\x61\x4e\x38\x6d\x46\x58\x76\x33\x63\x74\x34\x44\x73\x44\x57\x6b\x36\x75\x4b\x5a\x65\x77",
    "\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5",
    "\x70\x61\x72\x73\x65",
    "\x63\x6f\x64\x65",
    "\u8d26\u53f7\u9886\u7ea2\u5305\u8c8c\u4f3c\u9ed1\u4e86\uff0c\u8bf7\u624b\u52a8\u8fdb\u5165\u6d3b\u52a8\u67e5\u770b",
    "\u9886\u7ea2\u5305\u6b21\u6570\u5269\u4f59\uff1a",
    "\x64\x61\x74\x61",
    "\x72\x65\x6d\x61\x69\x6e\x43\x68\x61\x6e\x63\x65",
    "\x67\x65\x74\x53\x74\x61\x74\x69\x63\x52\x65\x73\x6f\x75\x72\x63\x65",
    "\x4f\x45\x52\x35\x61\x35\x79\x62\x41\x51\x59\x44\x72\x43\x55\x4b\x72\x4e\x32\x57\x68\x51",
    "\x73\x75\x70\x65\x72\x52\x65\x64\x42\x61\x67\x48\x6f\x6d\x65",
    "\x48\x58\x5a\x36\x30\x68\x65\x35\x58\x78\x47\x38\x58\x4e\x55\x46\x32\x4c\x53\x72\x5a\x67",
    "\x66\x6c\x6f\x6f\x72",
    "\x72\x61\x6e\x64\x6f\x6d",
    "\x32\x30\x32\x32\x30\x34\x31\x32\x31\x36\x34\x36\x34\x31\x31\x35\x37\x25\x33\x42\x31\x39\x37\x65\x65\x36\x39\x37\x64\x35\x30\x63\x61\x33\x31\x36\x66\x33\x35\x38\x32\x34\x38\x38\x63\x37\x66\x61\x39\x64\x33\x34\x25\x33\x42\x31\x36\x39\x66\x31\x25\x33\x42\x74\x6b\x30\x32\x77\x64\x39\x34\x35\x31\x64\x65\x62\x31\x38\x6e\x31\x50\x33\x31\x4a\x75\x6e\x53\x47\x54\x66\x5a\x68\x6d\x65\x62\x75\x69\x76\x77\x73\x45\x77\x59\x57\x55\x51\x46\x31\x5a\x6b\x70\x64\x74\x75\x53\x6d\x4b\x4f\x45\x53\x35\x44\x6e\x49\x4d\x46\x64\x79\x4f\x76\x4b\x69\x6b\x64\x67\x75\x65\x6c\x49\x69\x42\x55\x6e\x4a\x62\x65\x43\x67\x6f\x4e\x6c\x63\x45\x76\x76\x25\x33\x42\x36\x65\x30\x39\x30\x63\x62\x64\x65\x33\x33\x37\x35\x39\x30\x62\x35\x31\x61\x35\x31\x34\x37\x31\x38\x66\x65\x65\x33\x39\x31\x64\x34\x36\x66\x65\x63\x65\x36\x62\x39\x35\x33\x65\x64\x31\x30\x38\x34\x61\x30\x35\x32\x66\x36\x64\x37\x36\x66\x66\x62\x64\x39\x32\x25\x33\x42\x33\x2e\x30\x25\x33\x42\x31\x36\x34\x39\x37\x35\x33\x32\x30\x31\x31\x35\x37",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x73\x70\x72\x69\x6e\x67\x5f\x72\x65\x77\x61\x72\x64\x5f\x72\x65\x63\x65\x69\x76\x65\x26\x62\x6f\x64\x79\x3d\x7b\x25\x32\x32\x69\x6e\x76\x69\x74\x65\x72\x25\x32\x32\x25\x33\x41\x25\x32\x32\x48\x58\x5a\x36\x30\x68\x65\x35\x58\x78\x47\x38\x58\x4e\x55\x46\x32\x4c\x53\x72\x5a\x67\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6c\x69\x6e\x6b\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x45\x75\x37\x2d\x45\x30\x43\x55\x7a\x71\x59\x79\x68\x5a\x4a\x6f\x39\x64\x33\x59\x6b\x51\x25\x32\x32\x7d\x26\x74\x3d\x31\x36\x35\x31\x32\x39\x33\x31\x34\x33\x31\x31\x37\x26\x61\x70\x70\x69\x64\x3d\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x26\x68\x35\x73\x74\x3d\x32\x30\x32\x32\x30\x34\x31\x32\x31\x36\x34\x36\x34\x31\x31\x35\x37\x25\x33\x42\x31\x39\x37\x65\x65\x36\x39\x37\x64\x35\x30\x63\x61\x33\x31\x36\x66\x33\x35\x38\x32\x34\x38\x38\x63\x37\x66\x61\x39\x64\x33\x34\x25\x33\x42\x31\x36\x39\x66\x31\x25\x33\x42\x74\x6b\x30\x32\x77\x64\x39\x34\x35\x31\x64\x65\x62\x31\x38\x6e\x31\x50\x33\x31\x4a\x75\x6e\x53\x47\x54\x66\x5a\x68\x6d\x65\x62\x75\x69\x76\x77\x73\x45\x77\x59\x57\x55\x51\x46\x31\x5a\x6b\x70\x64\x74\x75\x53\x6d\x4b\x4f\x45\x53\x35\x44\x6e\x49\x4d\x46\x64\x79\x4f\x76\x4b\x69\x6b\x64\x67\x75\x65\x6c\x49\x69\x42\x55\x6e\x4a\x62\x65\x43\x67\x6f\x4e\x6c\x63\x45\x76\x76\x25\x33\x42\x36\x65\x30\x39\x30\x63\x62\x64\x65\x33\x33\x37\x35\x39\x30\x62\x35\x31\x61\x35\x31\x34\x37\x31\x38\x66\x65\x65\x33\x39\x31\x64\x34\x36\x66\x65\x63\x65\x36\x62\x39\x35\x33\x65\x64\x31\x30\x38\x34\x61\x30\x35\x32\x66\x36\x64\x37\x36\x66\x66\x62\x64\x39\x32\x25\x33\x42\x33\x2e\x30\x25\x33\x42\x31\x36\x34\x39\x37\x35\x33\x32\x30\x31\x31\x35\x37",
    "\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d",
    "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x2c\x20\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x2c\x20\x2a\x2f\x2a",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x72\x6f\x64\x65\x76\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d",
    "\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72",
    "\x4a\x53\x5f\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54",
    "\x2e\x2f\x4a\x53\x5f\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54\x53",
    "\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54",
    "\x4a\x53\x55\x41",
    "\x27\x6a\x64\x6c\x74\x61\x70\x70\x3b\x69\x50\x61\x64\x3b\x33\x2e\x31\x2e\x30\x3b\x31\x34\x2e\x34\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x77\x69\x66\x69\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x61\x64\x3b\x20\x43\x50\x55\x20\x4f\x53\x20\x31\x34\x5f\x34\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31",
    "\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x2d\x48\x61\x6e\x73\x3b\x71\x3d\x30\x2e\x39",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x72\x6f\x64\x65\x76\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f",
    "\x72\x65\x63\x65\x69\x76\x65\x64",
    "\x70\x72\x69\x7a\x65\x54\x79\x70\x65",
    "\x70\x72\x69\x7a\x65\x44\x65\x73\x63",
    "\u83b7\u5f97\u4f18\u60e0\u5238",
    "\x65\x72\x72\x4d\x73\x67",
    "\x73\x70\x72\x69\x6e\x67\x5f\x72\x65\x77\x61\x72\x64\x5f\x6c\x69\x73\x74",
    "\x69\x74\x65\x6d\x73",
    "\x73\x74\x61\x74\x65",
    "\u53bb\u63d0\u73b0",
    "\x61\x6d\x6f\x75\x6e\x74",
    "\u5fae\u4fe1\u73b0\u91d1",
    "\u5fae\u4fe1\u73b0\u91d1\uff0c",
    "\x70\x6f\x6f\x6c\x42\x61\x73\x65\x49\x64",
    "\x70\x72\x69\x7a\x65\x47\x72\x6f\x75\x70\x49\x64",
    "\x70\x72\x69\x7a\x65\x42\x61\x73\x65\x49\x64",
    "\x64\x61\x79\x44\x61\x79\x53\x69\x67\x6e\x47\x65\x74\x52\x65\x64\x45\x6e\x76\x65\x6c\x6f\x70\x65\x53\x69\x67\x6e\x53\x65\x72\x76\x69\x63\x65",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d",
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x73\x69\x67\x6e\x50\x72\x69\x7a\x65\x44\x65\x74\x61\x69\x6c\x4c\x69\x73\x74\x26\x62\x6f\x64\x79\x3d",
    "\x26\x5f\x74\x3d",
    "\x26\x61\x70\x70\x69\x64\x3d\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x61\x69\x6c\x79\x2d\x72\x65\x64\x70\x61\x63\x6b\x65\x74\x2e\x6a\x64\x2e\x63\x6f\x6d",
    "\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64",
    "\x2a\x2f\x2a",
    "\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65",
    "\x6a\x64\x6c\x74\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x33\x2e\x33\x2e\x32\x3b\x31\x34\x2e\x35\x2e\x31\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x77\x69\x66\x69\x3b\x68\x61\x73\x55\x50\x50\x61\x79\x2f\x30\x3b\x70\x75\x73\x68\x4e\x6f\x74\x69\x63\x65\x49\x73\x4f\x70\x65\x6e\x2f\x31\x3b\x6c\x61\x6e\x67\x2f\x7a\x68\x5f\x43\x4e\x3b\x6d\x6f\x64\x65\x6c\x2f\x69\x50\x68\x6f\x6e\x65\x31\x33\x2c\x32\x3b\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2f\x31\x33\x37\x39\x32\x33\x39\x37\x33\x3b\x68\x61\x73\x4f\x43\x50\x61\x79\x2f\x30\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x31\x30\x34\x37\x3b\x73\x75\x70\x70\x6f\x72\x74\x42\x65\x73\x74\x50\x61\x79\x2f\x30\x3b\x70\x76\x2f\x34\x36\x37\x2e\x31\x31\x3b\x61\x70\x70\x72\x70\x64\x2f\x4d\x79\x4a\x44\x5f\x4d\x61\x69\x6e\x3b",
    "\x7a\x68\x2d\x48\x61\x6e\x73\x2d\x43\x4e\x3b\x71\x3d\x31\x2c\x20\x65\x6e\x2d\x43\x4e\x3b\x71\x3d\x30\x2e\x39\x2c\x20\x7a\x68\x2d\x48\x61\x6e\x74\x2d\x43\x4e\x3b\x71\x3d\x30\x2e\x38",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x61\x69\x6c\x79\x2d\x72\x65\x64\x70\x61\x63\x6b\x65\x74\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d",
    "\x70\x6f\x73\x74",
    "\x74\x6f\x4f\x62\x6a",
    "\x70\x72\x69\x7a\x65\x44\x72\x61\x77\x42\x61\x73\x65\x56\x6f\x50\x61\x67\x65\x42\x65\x61\x6e",
    "\x70\x72\x69\x7a\x65\x53\x74\x61\x74\x75\x73",
    "\u6781\u901f\u7248\u7b7e\u5230\u63d0\u73b0\uff0c\u53bb\u63d0\u73b0",
    "\x70\x72\x69\x7a\x65\x56\x61\x6c\x75\x65",
    "\u73b0\u91d1\x0a",
    "\u6781\u901f\u7248\u7b7e\u5230\u67e5\u8be2\u5956\u54c1\uff1a\u5931\u8d25\x3a",
    "\u6781\u901f\u7248\u7b7e\u5230\u67e5\u8be2\u5956\u54c1\uff1a\u5f02\u5e38\x3a",
    "\x44\x41\x59\x5f\x44\x41\x59\x5f\x52\x45\x44\x5f\x50\x41\x43\x4b\x45\x54\x5f\x53\x49\x47\x4e",
    "\x64\x61\x79\x44\x61\x79\x52\x65\x64\x50\x61\x63\x6b\x65\x74",
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x61\x70\x43\x61\x73\x68\x57\x69\x74\x68\x44\x72\x61\x77\x26\x62\x6f\x64\x79\x3d",
    "\x73\x74\x61\x74\x75\x73",
    "\x33\x31\x30",
    "\u6781\u901f\u7248\u7b7e\u5230\u63d0\u73b0\u73b0\u91d1\u6210\u529f\uff01",
    "\u6781\u901f\u7248\u7b7e\u5230\u63d0\u73b0\u73b0\u91d1\uff1a\u5931\u8d25\x3a",
    "\u6781\u901f\u7248\u7b7e\u5230\u63d0\u73b0\u73b0\u91d1\uff1a\u5f02\u5e38\x3a",
    "\x53\x50\x52\x49\x4e\x47\x5f\x46\x45\x53\x54\x49\x56\x41\x4c\x5f\x52\x45\x44\x5f\x45\x4e\x56\x45\x4c\x4f\x50\x45",
    "\x61\x70\x43\x61\x73\x68\x57\x69\x74\x68\x44\x72\x61\x77",
    "\u63d0\u73b0\u96f6\u94b1\u7ed3\u679c\uff1a",
    "\u63d0\u73b0\u6210\u529f\uff01",
    "\u63d0\u73b0\u6210\u529f\uff01\x0a",
    "\u63d0\u73b0\u5931\u8d25\uff1a",
    "\x6d\x65\x73\x73\x61\x67\x65",
    "\u63d0\u73b0\u5f02\u5e38\uff1a",
    "\x39\x76\x4f\x73\x6b\x41\x61\x67\x63\x4d\x4a\x34\x45\x4f\x57\x58\x50\x51\x53\x53\x39\x41\x3d\x3d",
    "\x39\x69\x72\x69\x6c\x76\x65\x6e\x45\x75\x70\x59\x46\x34\x38\x38\x54\x55\x72\x6c\x31\x39\x44\x4c\x75\x4b\x51\x39\x7a\x57\x6e\x58\x59\x48\x66\x39\x61\x6e\x43\x30\x75\x6a\x77\x3d",
    "\x30\x49\x75\x74\x2f\x58\x36\x46\x78\x38\x33\x33\x73\x47\x50\x41\x52\x6e\x78\x4b\x30\x54\x45\x4a\x41\x48\x68\x47\x6c\x2b\x59\x68\x61\x49\x51\x4d\x49\x31\x37\x33\x35\x6d\x45\x3d",
    "\x45\x58\x35\x65\x64\x47\x4a\x31\x34\x62\x37\x30\x5a\x55\x67\x6c\x52\x71\x37\x49\x4d\x6d\x54\x33\x47\x65\x77\x4f\x50\x39\x49\x4c\x2f\x42\x4e\x33\x6b\x32\x64\x66\x72\x6a\x77\x3d",
    "\x74\x79\x36\x69\x46\x53\x4e\x4d\x65\x4c\x5a\x66\x75\x2f\x46\x31\x51\x76\x77\x7a\x41\x6e\x69\x66\x70\x4b\x49\x75\x6e\x71\x73\x47\x37\x61\x6d\x33\x76\x41\x70\x39\x72\x6b\x63\x3d",
    "\x69\x63\x55\x4f\x67\x6f\x72\x30\x73\x32\x58\x43\x67\x77\x69\x53\x6c\x51\x31\x58\x62\x77\x3d\x3d",
    "\x47\x51\x37\x38\x57\x6d\x47\x4c\x2b\x51\x76\x32\x6d\x71\x76\x67\x76\x54\x63\x73\x78\x67\x3d\x3d",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f",
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x54\x61\x73\x6b\x49\x6e\x76\x69\x74\x65\x53\x65\x72\x76\x69\x63\x65\x26\x62\x6f\x64\x79\x3d",
    "\x70\x61\x72\x74\x69\x63\x69\x70\x61\x74\x65\x49\x6e\x76\x69\x74\x65\x54\x61\x73\x6b",
    "\x26\x61\x70\x70\x69\x64\x3d\x6d\x61\x72\x6b\x65\x74\x2d\x74\x61\x73\x6b\x2d\x68\x35\x26\x75\x75\x69\x64\x3d\x26\x5f\x74\x3d",
    "\x6e\x6f\x77",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x73\x73\x69\x67\x6e\x6d\x65\x6e\x74\x2e\x6a\x64\x2e\x63\x6f\x6d",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x73\x73\x69\x67\x6e\x6d\x65\x6e\x74\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x3f\x74\x3d",
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x49\x6e\x76\x69\x74\x65\x46\x72\x69\x65\x6e\x64\x43\x68\x61\x6e\x67\x65\x41\x73\x73\x65\x72\x74\x73\x53\x65\x72\x76\x69\x63\x65\x26\x62\x6f\x64\x79\x3d",
    "\x61\x74\x74\x65\x6e\x64\x49\x6e\x76\x69\x74\x65\x41\x63\x74\x69\x76\x69\x74\x79",
    "\x26\x72\x65\x66\x65\x72\x65\x72\x3d\x2d\x31\x26\x65\x69\x64\x3d\x65\x69\x64\x49\x39\x62\x32\x39\x38\x31\x32\x30\x32\x66\x73\x65\x63\x38\x33\x69\x52\x57\x31\x6e\x54\x73\x4f\x56\x7a\x43\x6f\x63\x57\x64\x61\x33\x59\x48\x50\x4e\x34\x37\x31\x41\x59\x37\x38\x25\x32\x46\x51\x42\x68\x59\x62\x58\x65\x57\x74\x64\x67\x25\x32\x46\x33\x54\x43\x74\x56\x54\x4d\x72\x45\x31\x4a\x6a\x4d\x38\x53\x71\x74\x38\x66\x32\x54\x71\x46\x31\x5a\x35\x50\x25\x32\x46\x52\x50\x47\x6c\x7a\x41\x31\x64\x45\x52\x50\x30\x5a\x35\x62\x4c\x57\x64\x71\x35\x4e\x35\x42\x32\x56\x62\x42\x4f\x26\x61\x69\x64\x3d\x26\x63\x6c\x69\x65\x6e\x74\x3d\x69\x6f\x73\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x31\x34\x2e\x34\x2e\x32\x26\x6e\x65\x74\x77\x6f\x72\x6b\x54\x79\x70\x65\x3d\x77\x69\x66\x69\x26\x66\x70\x3d\x2d\x31\x26\x75\x75\x69\x64\x3d\x61\x62\x30\x34\x38\x30\x38\x34\x62\x34\x37\x64\x66\x32\x34\x38\x38\x30\x36\x31\x33\x33\x32\x36\x66\x65\x66\x66\x64\x66\x37\x65\x65\x65\x34\x37\x31\x34\x38\x38\x26\x6f\x73\x56\x65\x72\x73\x69\x6f\x6e\x3d\x31\x34\x2e\x34\x2e\x32\x26\x64\x5f\x62\x72\x61\x6e\x64\x3d\x69\x50\x68\x6f\x6e\x65\x26\x64\x5f\x6d\x6f\x64\x65\x6c\x3d\x69\x50\x68\x6f\x6e\x65\x31\x30\x2c\x32\x26\x61\x67\x65\x6e\x74\x3d\x2d\x31\x26\x70\x61\x67\x65\x43\x6c\x69\x63\x6b\x4b\x65\x79\x3d\x2d\x31\x26\x70\x6c\x61\x74\x66\x6f\x72\x6d\x3d\x33\x26\x6c\x61\x6e\x67\x3d\x7a\x68\x5f\x43\x4e\x26\x61\x70\x70\x69\x64\x3d\x6d\x61\x72\x6b\x65\x74\x2d\x74\x61\x73\x6b\x2d\x68\x35\x26\x5f\x74\x3d",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x69\x6e\x76\x69\x74\x65\x2d\x72\x65\x77\x61\x72\x64\x2e\x6a\x64\x2e\x63\x6f\x6d",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x69\x6e\x76\x69\x74\x65\x2d\x72\x65\x77\x61\x72\x64\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f",
    "\x61\x70\x70\x69\x64\x3d\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x26\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d",
    "\x26\x62\x6f\x64\x79\x3d",
    "\x26\x74\x3d",
    "\x6a\x64\x6c\x74\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x33\x2e\x33\x2e\x32\x3b\x31\x34\x2e\x33\x3b\x62\x34\x38\x38\x30\x31\x30\x61\x64\x32\x34\x63\x34\x30\x38\x38\x35\x64\x38\x34\x36\x65\x36\x36\x39\x33\x31\x61\x62\x61\x66\x35\x33\x32\x65\x64\x32\x36\x61\x35\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x34\x67\x3b\x68\x61\x73\x55\x50\x50\x61\x79\x2f\x30\x3b\x70\x75\x73\x68\x4e\x6f\x74\x69\x63\x65\x49\x73\x4f\x70\x65\x6e\x2f\x30\x3b\x6c\x61\x6e\x67\x2f\x7a\x68\x5f\x43\x4e\x3b\x6d\x6f\x64\x65\x6c\x2f\x69\x50\x68\x6f\x6e\x65\x31\x31\x2c\x38\x3b\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2f\x32\x30\x30\x35\x31\x38\x33\x33\x37\x33\x3b\x68\x61\x73\x4f\x43\x50\x61\x79\x2f\x30\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x31\x30\x34\x39\x3b\x73\x75\x70\x70\x6f\x72\x74\x42\x65\x73\x74\x50\x61\x79\x2f\x30\x3b\x70\x76\x2f\x32\x32\x30\x2e\x34\x36\x3b\x61\x70\x70\x72\x70\x64\x2f\x3b\x72\x65\x66\x2f\x4a\x44\x4c\x54\x53\x75\x62\x4d\x61\x69\x6e\x50\x61\x67\x65\x56\x69\x65\x77\x43\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x3b\x70\x73\x71\x2f\x30\x3b\x61\x64\x73\x2f\x3b\x70\x73\x6e\x2f\x62\x34\x38\x38\x30\x31\x30\x61\x64\x32\x34\x63\x34\x30\x38\x38\x35\x64\x38\x34\x36\x65\x36\x36\x39\x33\x31\x61\x62\x61\x66\x35\x33\x32\x65\x64\x32\x36\x61\x35\x7c\x35\x32\x30\x3b\x6a\x64\x76\x2f\x30\x7c\x69\x6f\x73\x61\x70\x70\x7c\x74\x5f\x33\x33\x35\x31\x33\x39\x37\x37\x34\x7c\x6c\x69\x74\x65\x73\x68\x61\x72\x65\x7c\x43\x6f\x70\x79\x55\x52\x4c\x7c\x31\x36\x31\x38\x36\x37\x33\x32\x32\x32\x30\x30\x32\x7c\x31\x36\x31\x38\x36\x37\x33\x32\x32\x37\x3b\x61\x64\x6b\x2f\x3b\x61\x70\x70\x5f\x64\x65\x76\x69\x63\x65\x2f\x49\x4f\x53\x3b\x70\x61\x70\x2f\x4a\x41\x32\x30\x32\x30\x5f\x33\x31\x31\x32\x35\x33\x31\x7c\x33\x2e\x33\x2e\x32\x7c\x49\x4f\x53\x20\x31\x34\x2e\x33\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x34\x5f\x33\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31\x20",
    "\x7a\x68\x2d\x48\x61\x6e\x73\x2d\x43\x4e\x3b\x71\x3d\x31\x2c\x65\x6e\x2d\x43\x4e\x3b\x71\x3d\x30\x2e\x39",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x6e\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x61\x62\x65\x6c\x44\x69\x79\x2f\x5a\x65\x75\x73\x2f\x71\x31\x65\x42\x36\x57\x55\x42\x38\x6f\x43\x34\x65\x48\x31\x42\x73\x43\x4c\x57\x76\x51\x61\x6b\x56\x73\x58\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x3f\x61\x70\x70\x69\x64\x3d\x61\x63\x74\x69\x76\x69\x74\x69\x65\x73\x5f\x70\x6c\x61\x74\x66\x6f\x72\x6d\x26\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6d\x65\x2d\x61\x70\x69\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x5f\x6e\x65\x77\x2f\x69\x6e\x66\x6f\x2f\x47\x65\x74\x4a\x44\x55\x73\x65\x72\x49\x6e\x66\x6f\x55\x6e\x69\x6f\x6e",
    "\x6d\x65\x2d\x61\x70\x69\x2e\x6a\x64\x2e\x63\x6f\x6d",
    "\x4a\x44\x5f\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54",
    "\x2e\x2f\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54\x53",
    "\x4a\x44\x55\x41",
    "\x6a\x64\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x39\x2e\x34\x2e\x34\x3b\x31\x34\x2e\x33\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x34\x67\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x34\x5f\x33\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31",
    "\x7a\x68\x2d\x63\x6e",
    "\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x6f\x6d\x65\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x6d\x79\x4a\x64\x2f\x6e\x65\x77\x68\x6f\x6d\x65\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x73\x63\x65\x6e\x65\x76\x61\x6c\x3d\x32\x26\x75\x66\x63\x3d\x26",
    "\x72\x65\x74\x63\x6f\x64\x65",
    "\x31\x30\x30\x31",
    "\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70\x65\x72\x74\x79",
    "\x75\x73\x65\x72\x49\x6e\x66\x6f",
    "\x62\x61\x73\x65\x49\x6e\x66\x6f",
    "\x6e\x69\x63\x6b\x6e\x61\x6d\x65",
    "\u4eac\u4e1c\u670d\u52a1\u5668\u8fd4\u56de\u7a7a\u6570\u636e",
    "\x6f\x62\x6a\x65\x63\x74",
    "\u4eac\u4e1c\u670d\u52a1\u5668\u8bbf\u95ee\u6570\u636e\u4e3a\u7a7a\uff0c\u8bf7\u68c0\u67e5\u81ea\u8eab\u8bbe\u5907\u7f51\u7edc\u60c5\u51b5",
    "\x6a\x73\x6c\x6b\x6a\x69\x65\x61\x72\x6b\x6c\x7a\x79\x7a\x6d\x44\x4d\x69\x4c\x2e\x63\x68\x6f\x6d\x2e\x76\x36\x67\x52\x3d\x3d",
  ];
function _0x1b03(_0x111b36, _0x32a034) {
  _0x111b36 = ~~"0x"["concat"](_0x111b36["slice"](0x0));
  var _0x465455 = _0xe7a4[_0x111b36];
  return _0x465455;
}
(function (_0x3a9b4b, _0x5b1bf8) {
  var _0x52eebc = 0x0;
  for (
    _0x5b1bf8 = _0x3a9b4b["shift"](_0x52eebc >> 0x2);
    _0x5b1bf8 &&
    _0x5b1bf8 !==
      (_0x3a9b4b["pop"](_0x52eebc >> 0x3) + "")["replace"](
        /[lkerklzyzDMLhgR=]/g,
        ""
      );
    _0x52eebc++
  ) {
    _0x52eebc = _0x52eebc ^ 0xe30c5;
  }
})(_0xe7a4, _0x1b03);
const notify = $[_0x1b03("0")]() ? require(_0x1b03("1")) : "";
const jdCookieNode = $[_0x1b03("0")]() ? require(_0x1b03("2")) : "";
let cookiesArr = [],
  cookie = "",
  message;
const linkIdArr = [_0x1b03("3")];
const signLinkId = _0x1b03("4");
let linkId;
let blackfail;
if ($[_0x1b03("0")]()) {
  Object[_0x1b03("5")](jdCookieNode)[_0x1b03("6")]((_0x51eaa0) => {
    cookiesArr[_0x1b03("7")](jdCookieNode[_0x51eaa0]);
  });
  if (
    process[_0x1b03("8")][_0x1b03("9")] &&
    process[_0x1b03("8")][_0x1b03("9")] === _0x1b03("a")
  )
    console[_0x1b03("b")] = () => {};
  if (
    JSON[_0x1b03("c")](process[_0x1b03("8")])[_0x1b03("d")](_0x1b03("e")) > -0x1
  )
    process[_0x1b03("f")](0x0);
} else {
  cookiesArr = [
    $[_0x1b03("10")](_0x1b03("11")),
    $[_0x1b03("10")](_0x1b03("12")),
    ...jsonParse($[_0x1b03("10")](_0x1b03("13")) || "\x5b\x5d")[_0x1b03("14")](
      (_0x175b42) => _0x175b42[_0x1b03("15")]
    ),
  ][_0x1b03("16")]((_0x43d946) => !!_0x43d946);
}
!(async () => {
  console[_0x1b03("b")](_0x1b03("17"));
  if (!cookiesArr[0x0]) {
    $[_0x1b03("18")]($[_0x1b03("19")], _0x1b03("1a"), _0x1b03("1b"), {
      "open-url": _0x1b03("1b"),
    });
    return;
  }
  for (
    let _0x3cad35 = 0x0;
    _0x3cad35 < cookiesArr[_0x1b03("1c")];
    _0x3cad35++
  ) {
    if (cookiesArr[_0x3cad35]) {
      cookie = cookiesArr[_0x3cad35];
      $[_0x1b03("1d")] = decodeURIComponent(
        cookie[_0x1b03("1e")](/pt_pin=([^; ]+)(?=;?)/) &&
          cookie[_0x1b03("1e")](/pt_pin=([^; ]+)(?=;?)/)[0x1]
      );
      $[_0x1b03("1f")] = _0x3cad35 + 0x1;
      $[_0x1b03("20")] = !![];
      $[_0x1b03("21")] = "";
      message = "";
      await TotalBean();
      console[_0x1b03("b")](
        _0x1b03("22") +
          $[_0x1b03("1f")] +
          "\u3011" +
          ($[_0x1b03("21")] || $[_0x1b03("1d")]) +
          _0x1b03("23")
      );
      if (!$[_0x1b03("20")]) {
        $[_0x1b03("18")](
          $[_0x1b03("19")],
          _0x1b03("24"),
          _0x1b03("25") +
            $[_0x1b03("1f")] +
            "\x20" +
            ($[_0x1b03("21")] || $[_0x1b03("1d")]) +
            _0x1b03("26"),
          { "open-url": _0x1b03("1b") }
        );
        if ($[_0x1b03("0")]()) {
          await notify[_0x1b03("27")](
            $[_0x1b03("19")] + _0x1b03("28") + $[_0x1b03("1d")],
            _0x1b03("25") +
              $[_0x1b03("1f")] +
              "\x20" +
              $[_0x1b03("1d")] +
              _0x1b03("29")
          );
        }
        continue;
      }
      for (
        let _0x4ddddf = 0x0;
        _0x4ddddf < linkIdArr[_0x1b03("1c")];
        _0x4ddddf++
      ) {
        linkId = linkIdArr[_0x4ddddf];
        await jsRedPacket();
      }
    }
  }
})()
  [_0x1b03("2a")]((_0x3db287) => {
    $[_0x1b03("b")](
      "",
      "\u274c\x20" + $[_0x1b03("19")] + _0x1b03("2b") + _0x3db287 + "\x21",
      ""
    );
  })
  [_0x1b03("2c")](() => {
    $[_0x1b03("2d")]();
  });
async function jsRedPacket() {
  try {
    await invite2();
    await $[_0x1b03("2e")](0x3e8);
    await invite();
    await $[_0x1b03("2e")](0x3e8);
    await reward_query();
    await signPrizeDetailList();
    await showMsg();
  } catch (_0x596039) {
    $[_0x1b03("2f")](_0x596039);
  }
}
function showMsg() {
  return new Promise((_0xe3ad9c) => {
    if (message)
      $[_0x1b03("18")](
        $[_0x1b03("19")],
        "",
        _0x1b03("25") + $[_0x1b03("1f")] + $[_0x1b03("21")] + "\x0a" + message
      );
    _0xe3ad9c();
  });
}
function reward_query() {
  return new Promise((_0x1ea50b) => {
    $[_0x1b03("30")](
      taskGetUrl(_0x1b03("31"), {
        inviter: _0x1b03("32"),
        "\x6c\x69\x6e\x6b\x49\x64": linkId,
      }),
      async (_0x2e71cb, _0x57178a, _0x2b9e93) => {
        try {
          if (_0x2e71cb) {
            console[_0x1b03("b")]("" + JSON[_0x1b03("c")](_0x2e71cb));
            console[_0x1b03("b")]($[_0x1b03("19")] + _0x1b03("33"));
          } else {
            if (safeGet(_0x2b9e93)) {
              _0x2b9e93 = JSON[_0x1b03("34")](_0x2b9e93);
              if (_0x2b9e93[_0x1b03("35")] != 0x0) {
                console[_0x1b03("b")](_0x1b03("36"));
                blackfail = !![];
              } else {
                console[_0x1b03("b")](
                  _0x1b03("37") + _0x2b9e93[_0x1b03("38")][_0x1b03("39")]
                );
                for (
                  let _0x543a94 = 0x0;
                  _0x543a94 < _0x2b9e93[_0x1b03("38")][_0x1b03("39")];
                  ++_0x543a94
                ) {
                  await redPacket();
                  await $[_0x1b03("2e")](0x1388);
                }
                await getPacketList();
              }
            }
          }
        } catch (_0xa7d015) {
          $[_0x1b03("2f")](_0xa7d015, _0x57178a);
        } finally {
          _0x1ea50b(_0x2b9e93);
        }
      }
    );
  });
}
function getStaticResource() {
  return new Promise((_0xf307be) => {
    $[_0x1b03("30")](
      taskGetUrl(_0x1b03("3a"), {
        inviter: _0x1b03("32"),
        "\x6c\x69\x6e\x6b\x49\x64": linkId,
      }),
      async (_0x5efd77, _0x1626b0, _0x45857d) => {
        try {
          if (_0x5efd77) {
            console[_0x1b03("b")]("" + JSON[_0x1b03("c")](_0x5efd77));
            console[_0x1b03("b")]($[_0x1b03("19")] + _0x1b03("33"));
          } else {
            if (safeGet(_0x45857d)) {
              _0x45857d = JSON[_0x1b03("34")](_0x45857d);
              if (_0x45857d[_0x1b03("35")] === 0x0) {
              } else {
              }
            }
          }
        } catch (_0x2ba22d) {
          $[_0x1b03("2f")](_0x2ba22d, _0x1626b0);
        } finally {
          _0xf307be(_0x45857d);
        }
      }
    );
  });
}
function getStaticResources() {
  return new Promise((_0x3143db) => {
    $[_0x1b03("30")](
      taskGetUrl(_0x1b03("3a"), { linkId: _0x1b03("3b") }),
      async (_0x4b7ebe, _0x42c442, _0x5a8fbf) => {
        try {
          if (_0x4b7ebe) {
            console[_0x1b03("b")]("" + JSON[_0x1b03("c")](_0x4b7ebe));
            console[_0x1b03("b")]($[_0x1b03("19")] + _0x1b03("33"));
          } else {
            if (safeGet(_0x5a8fbf)) {
              _0x5a8fbf = JSON[_0x1b03("34")](_0x5a8fbf);
              if (_0x5a8fbf[_0x1b03("35")] === 0x0) {
              } else {
              }
            }
          }
        } catch (_0x1bc1f9) {
          $[_0x1b03("2f")](_0x1bc1f9, _0x42c442);
        } finally {
          _0x3143db(_0x5a8fbf);
        }
      }
    );
  });
}
function superRedBagHome() {
  return new Promise((_0x5bd1af) => {
    $[_0x1b03("30")](
      taskGetUrl(_0x1b03("3c"), { linkId: _0x1b03("3b") }),
      async (_0x58d7f9, _0x467864, _0x181396) => {
        try {
          if (_0x58d7f9) {
            console[_0x1b03("b")]("" + JSON[_0x1b03("c")](_0x58d7f9));
            console[_0x1b03("b")]($[_0x1b03("19")] + _0x1b03("33"));
          } else {
            if (safeGet(_0x181396)) {
              _0x181396 = JSON[_0x1b03("34")](_0x181396);
              if (_0x181396[_0x1b03("35")] === 0x0) {
              } else {
              }
            }
          }
        } catch (_0xde65df) {
          $[_0x1b03("2f")](_0xde65df, _0x467864);
        } finally {
          _0x5bd1af(_0x181396);
        }
      }
    );
  });
}
async function redPacket() {
  return new Promise(async (_0x3232b5) => {
    let _0x30aaa1 = {
      "\x6c\x69\x6e\x6b\x49\x64": linkId,
      inviter: [_0x1b03("3d")][
        Math[_0x1b03("3e")](Math[_0x1b03("3f")]() * 0x1)
      ],
    };
    let _0x198bb4 = _0x1b03("40");
    const _0x9b8d37 = {
      "\x75\x72\x6c": _0x1b03("41"),
      "\x68\x65\x61\x64\x65\x72\x73": {
        Host: _0x1b03("42"),
        Accept: _0x1b03("43"),
        Origin: _0x1b03("44"),
        "Accept-Encoding": _0x1b03("45"),
        "User-Agent": $.isNode() ? (process.env.JS_USER_AGENT ? process.env.JS_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JSUA') ? $.getdata('JSUA') : "'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
        "Accept-Language": _0x1b03("4b"),
        Referer: _0x1b03("4c"),
        Cookie: cookie,
      },
    };
    $[_0x1b03("30")](_0x9b8d37, async (_0x4a343a, _0x26b1d8, _0x1ef4f5) => {
      try {
        if (_0x4a343a) {
          console[_0x1b03("b")]("" + JSON[_0x1b03("c")](_0x4a343a));
          console[_0x1b03("b")]($[_0x1b03("19")] + _0x1b03("33"));
        } else {
          if (safeGet(_0x1ef4f5)) {
            _0x1ef4f5 = JSON[_0x1b03("34")](_0x1ef4f5);
            if (_0x1ef4f5[_0x1b03("35")] === 0x0) {
              if (
                _0x1ef4f5[_0x1b03("38")][_0x1b03("4d")][_0x1b03("4e")] !== 0x1
              ) {
                message +=
                  "\u83b7\u5f97" +
                  _0x1ef4f5[_0x1b03("38")][_0x1b03("4d")][_0x1b03("4f")] +
                  "\x0a";
                console[_0x1b03("b")](
                  "\u83b7\u5f97" +
                    _0x1ef4f5[_0x1b03("38")][_0x1b03("4d")][_0x1b03("4f")]
                );
              } else {
                console[_0x1b03("b")](_0x1b03("50"));
              }
            } else {
              console[_0x1b03("b")](_0x1ef4f5[_0x1b03("51")]);
            }
          }
        }
      } catch (_0x38e6e1) {
        $[_0x1b03("2f")](_0x38e6e1, _0x26b1d8);
      } finally {
        _0x3232b5(_0x1ef4f5);
      }
    });
  });
}
function getPacketList() {
  return new Promise((_0x3b1cc8) => {
    $[_0x1b03("30")](
      taskGetUrl(_0x1b03("52"), {
        pageNum: 0x1,
        pageSize: 0x64,
        "\x6c\x69\x6e\x6b\x49\x64": linkId,
        inviter: "",
      }),
      async (_0x274f20, _0x57fe25, _0x28a2f8) => {
        try {
          if (_0x274f20) {
            console[_0x1b03("b")]("" + JSON[_0x1b03("c")](_0x274f20));
            console[_0x1b03("b")]($[_0x1b03("19")] + _0x1b03("33"));
          } else {
            if (safeGet(_0x28a2f8)) {
              _0x28a2f8 = JSON[_0x1b03("34")](_0x28a2f8);
              if (_0x28a2f8[_0x1b03("35")] === 0x0) {
                for (let _0x1e9a22 of _0x28a2f8[_0x1b03("38")][_0x1b03("53")][
                  _0x1b03("16")
                ]((_0xb955f7) => _0xb955f7[_0x1b03("4e")] === 0x4)) {
                  if (_0x1e9a22[_0x1b03("54")] === 0x0) {
                    console[_0x1b03("b")](
                      _0x1b03("55") + _0x1e9a22[_0x1b03("56")] + _0x1b03("57")
                    );
                    message +=
                      "\u63d0\u73b0" + _0x1e9a22[_0x1b03("56")] + _0x1b03("58");
                    await cashOut(
                      _0x1e9a22["\x69\x64"],
                      _0x1e9a22[_0x1b03("59")],
                      _0x1e9a22[_0x1b03("5a")],
                      _0x1e9a22[_0x1b03("5b")]
                    );
                  }
                }
              } else {
                console[_0x1b03("b")](_0x28a2f8[_0x1b03("51")]);
              }
            }
          }
        } catch (_0x506023) {
          $[_0x1b03("2f")](_0x506023, _0x57fe25);
        } finally {
          _0x3b1cc8(_0x28a2f8);
        }
      }
    );
  });
}
function signPrizeDetailList() {
  return new Promise((_0x2856df) => {
    const _0x358c4d = {
      linkId: signLinkId,
      serviceName: _0x1b03("5c"),
      business: 0x1,
      pageSize: 0x14,
      page: 0x1,
    };
    const _0x1f7a1d = {
      "\x75\x72\x6c": _0x1b03("5d"),
      "\x62\x6f\x64\x79":
        _0x1b03("5e") +
        escape(JSON[_0x1b03("c")](_0x358c4d)) +
        _0x1b03("5f") +
        +new Date() +
        _0x1b03("60"),
      "\x68\x65\x61\x64\x65\x72\x73": {
        Cookie: cookie,
        Host: _0x1b03("42"),
        Origin: _0x1b03("61"),
        "Content-Type": _0x1b03("62"),
        Accept: _0x1b03("63"),
        Connection: _0x1b03("64"),
        "User-Agent": _0x1b03("65"),
        "Accept-Language": _0x1b03("66"),
        Referer: _0x1b03("67") + signLinkId,
        "Accept-Encoding": _0x1b03("45"),
      },
    };
    $[_0x1b03("68")](_0x1f7a1d, async (_0x3fac5f, _0x4be045, _0x109db7) => {
      try {
        if (_0x3fac5f) {
          console[_0x1b03("b")]("" + JSON[_0x1b03("c")](_0x3fac5f));
          console[_0x1b03("b")]($[_0x1b03("19")] + _0x1b03("33"));
        } else {
          if (safeGet(_0x109db7)) {
            _0x109db7 = $[_0x1b03("69")](_0x109db7);
            if (_0x109db7[_0x1b03("35")] === 0x0) {
              if (_0x109db7[_0x1b03("38")][_0x1b03("35")] === 0x0) {
                const _0x384717 = (_0x109db7[_0x1b03("38")][_0x1b03("6a")][
                  _0x1b03("53")
                ] || [])[_0x1b03("16")](
                  (_0x489ea7) =>
                    _0x489ea7[_0x1b03("4e")] === 0x4 &&
                    _0x489ea7[_0x1b03("6b")] === 0x0
                );
                for (let _0x3d037d of _0x384717) {
                  console[_0x1b03("b")](
                    _0x1b03("6c") + _0x3d037d[_0x1b03("6d")] + _0x1b03("6e")
                  );
                  message +=
                    _0x1b03("6c") + _0x3d037d[_0x1b03("6d")] + _0x1b03("58");
                  await apCashWithDraw(
                    _0x3d037d["\x69\x64"],
                    _0x3d037d[_0x1b03("59")],
                    _0x3d037d[_0x1b03("5a")],
                    _0x3d037d[_0x1b03("5b")]
                  );
                }
              } else {
                console[_0x1b03("b")](
                  _0x1b03("6f") + JSON[_0x1b03("c")](_0x109db7) + "\x0a"
                );
              }
            } else {
              console[_0x1b03("b")](
                _0x1b03("70") + JSON[_0x1b03("c")](_0x109db7) + "\x0a"
              );
            }
          }
        }
      } catch (_0x3e82ff) {
        $[_0x1b03("2f")](_0x3e82ff, _0x4be045);
      } finally {
        _0x2856df(_0x109db7);
      }
    });
  });
}
function apCashWithDraw(_0x1b70c9, _0x3962ea, _0x27a419, _0x5de7bb) {
  return new Promise((_0x3ec019) => {
    const _0x166a9c = {
      linkId: signLinkId,
      businessSource: _0x1b03("71"),
      base: {
        prizeType: 0x4,
        business: _0x1b03("72"),
        id: _0x1b70c9,
        poolBaseId: _0x3962ea,
        prizeGroupId: _0x27a419,
        prizeBaseId: _0x5de7bb,
      },
    };
    const _0x37efd8 = {
      "\x75\x72\x6c": _0x1b03("5d"),
      "\x62\x6f\x64\x79":
        _0x1b03("73") +
        escape(JSON[_0x1b03("c")](_0x166a9c)) +
        _0x1b03("5f") +
        +new Date() +
        _0x1b03("60"),
      "\x68\x65\x61\x64\x65\x72\x73": {
        Cookie: cookie,
        Host: _0x1b03("42"),
        Origin: _0x1b03("61"),
        "Content-Type": _0x1b03("62"),
        Accept: _0x1b03("63"),
        Connection: _0x1b03("64"),
        "User-Agent": _0x1b03("65"),
        "Accept-Language": _0x1b03("66"),
        Referer: _0x1b03("67") + signLinkId,
        "Accept-Encoding": _0x1b03("45"),
      },
    };
    $[_0x1b03("68")](_0x37efd8, async (_0x22a40b, _0x54c77d, _0xdda95) => {
      try {
        if (_0x22a40b) {
          console[_0x1b03("b")]("" + JSON[_0x1b03("c")](_0x22a40b));
          console[_0x1b03("b")]($[_0x1b03("19")] + _0x1b03("33"));
        } else {
          if (safeGet(_0xdda95)) {
            _0xdda95 = $[_0x1b03("69")](_0xdda95);
            if (_0xdda95[_0x1b03("35")] === 0x0) {
              if (_0xdda95[_0x1b03("38")][_0x1b03("74")] === _0x1b03("75")) {
                console[_0x1b03("b")](_0x1b03("76"));
                message += _0x1b03("76");
              } else {
                console[_0x1b03("b")](
                  _0x1b03("77") + JSON[_0x1b03("c")](_0xdda95) + "\x0a"
                );
              }
            } else {
              console[_0x1b03("b")](
                _0x1b03("78") + JSON[_0x1b03("c")](_0xdda95) + "\x0a"
              );
            }
          }
        }
      } catch (_0x27d113) {
        $[_0x1b03("2f")](_0x27d113, _0x54c77d);
      } finally {
        _0x3ec019(_0xdda95);
      }
    });
  });
}
function cashOut(_0x520f1a, _0x4fc9c8, _0x3afc46, _0x1cca85) {
  let _0x12947f = {
    businessSource: _0x1b03("79"),
    base: {
      id: _0x520f1a,
      business: null,
      poolBaseId: _0x4fc9c8,
      prizeGroupId: _0x3afc46,
      prizeBaseId: _0x1cca85,
      prizeType: 0x4,
    },
    "\x6c\x69\x6e\x6b\x49\x64": linkId,
    inviter: "",
  };
  return new Promise((_0x5084bf) => {
    $[_0x1b03("68")](
      taskPostUrl(_0x1b03("7a"), _0x12947f),
      async (_0xc0bb08, _0x7f02ef, _0x300b75) => {
        try {
          if (_0xc0bb08) {
            console[_0x1b03("b")]("" + JSON[_0x1b03("c")](_0xc0bb08));
            console[_0x1b03("b")]($[_0x1b03("19")] + _0x1b03("33"));
          } else {
            if (safeGet(_0x300b75)) {
              console[_0x1b03("b")](_0x1b03("7b") + _0x300b75);
              _0x300b75 = JSON[_0x1b03("34")](_0x300b75);
              if (_0x300b75[_0x1b03("35")] === 0x0) {
                if (_0x300b75[_0x1b03("38")][_0x1b03("74")] === _0x1b03("75")) {
                  console[_0x1b03("b")](_0x1b03("7c"));
                  message += _0x1b03("7d");
                } else {
                  console[_0x1b03("b")](
                    _0x1b03("7e") + _0x300b75[_0x1b03("38")][_0x1b03("7f")]
                  );
                  message +=
                    _0x1b03("7e") + _0x300b75[_0x1b03("38")][_0x1b03("7f")];
                }
              } else {
                console[_0x1b03("b")](_0x1b03("80") + _0x300b75[_0x1b03("51")]);
              }
            }
          }
        } catch (_0x3a3a7c) {
          $[_0x1b03("2f")](_0x3a3a7c, _0x7f02ef);
        } finally {
          _0x5084bf(_0x300b75);
        }
      }
    );
  });
}
function invite2() {
  let _0x53d6ba = [
    "EiTTmXEZGqbkcDMdW2DC6w%3D%3D"
  ];
  let _0x4665e1 =
    _0x53d6ba[
      Math[_0x1b03("3e")](Math[_0x1b03("3f")]() * _0x53d6ba[_0x1b03("1c")])
    ];
  let _0x2b8abf = {
    "\x75\x72\x6c": _0x1b03("88"),
    "\x62\x6f\x64\x79":
      _0x1b03("89") +
      JSON[_0x1b03("c")]({
        method: _0x1b03("8a"),
        data: {
          channel: "\x31",
          encryptionInviterPin: encodeURIComponent(_0x4665e1),
          type: 0x1,
        },
      }) +
      _0x1b03("8b") +
      Date[_0x1b03("8c")](),
    "\x68\x65\x61\x64\x65\x72\x73": {
      Host: _0x1b03("42"),
      Accept: _0x1b03("43"),
      "Content-Type": _0x1b03("62"),
      Origin: _0x1b03("8d"),
      "Accept-Language": _0x1b03("4b"),
      "User-Agent": $.isNode() ? (process.env.JS_USER_AGENT ? process.env.JS_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JSUA') ? $.getdata('JSUA') : "'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
      Referer: _0x1b03("8e"),
      "Accept-Encoding": _0x1b03("45"),
      Cookie: cookie,
    },
  };
  $[_0x1b03("68")](_0x2b8abf, (_0x154d24, _0x13decc, _0x17e553) => {});
}
function invite() {
  let _0x27bdf3 = +new Date();
  let _0x2aeab3 = [
    "EiTTmXEZGqbkcDMdW2DC6w%3D%3D"
  ];
  let _0x249a2c =
    _0x2aeab3[
      Math[_0x1b03("3e")](Math[_0x1b03("3f")]() * _0x2aeab3[_0x1b03("1c")])
    ];
  let _0x329aaa = {
    "\x75\x72\x6c": _0x1b03("8f") + _0x27bdf3,
    "\x62\x6f\x64\x79":
      _0x1b03("90") +
      JSON[_0x1b03("c")]({
        method: _0x1b03("91"),
        data: {
          inviterPin: encodeURIComponent(_0x249a2c),
          channel: 0x1,
          token: "",
          frontendInitStatus: "",
        },
      }) +
      _0x1b03("92") +
      _0x27bdf3,
    "\x68\x65\x61\x64\x65\x72\x73": {
      Host: _0x1b03("42"),
      Accept: _0x1b03("43"),
      "Content-type": _0x1b03("62"),
      Origin: _0x1b03("93"),
      "Accept-Language": _0x1b03("4b"),
      "User-Agent": $.isNode() ? (process.env.JS_USER_AGENT ? process.env.JS_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JSUA') ? $.getdata('JSUA') : "'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
      Referer: _0x1b03("94"),
      "Accept-Encoding": _0x1b03("45"),
      Cookie: cookie,
    },
  };
  $[_0x1b03("68")](_0x329aaa, (_0x4b00ba, _0x4e36b2, _0x3e7411) => {});
}
function taskPostUrl(_0x20db28, _0x55264f) {
  return {
    "\x75\x72\x6c": _0x1b03("88"),
    "\x62\x6f\x64\x79":
      _0x1b03("95") +
      _0x20db28 +
      _0x1b03("96") +
      escape(JSON[_0x1b03("c")](_0x55264f)) +
      _0x1b03("97") +
      +new Date(),
    "\x68\x65\x61\x64\x65\x72\x73": {
      Cookie: cookie,
      Host: _0x1b03("42"),
      Accept: _0x1b03("63"),
      Connection: _0x1b03("64"),
      "user-agent": _0x1b03("98"),
      "Accept-Language": _0x1b03("99"),
      "Accept-Encoding": _0x1b03("45"),
      "Content-Type": _0x1b03("62"),
      referer: _0x1b03("9a"),
    },
  };
}
function taskGetUrl(_0x348a80, _0x5ed8e2) {
  return {
    "\x75\x72\x6c":
      _0x1b03("9b") +
      _0x348a80 +
      _0x1b03("96") +
      escape(JSON[_0x1b03("c")](_0x5ed8e2)) +
      _0x1b03("97") +
      +new Date(),
    "\x68\x65\x61\x64\x65\x72\x73": {
      Cookie: cookie,
      Host: _0x1b03("42"),
      Accept: _0x1b03("63"),
      Connection: _0x1b03("64"),
      "user-agent": $.isNode() ? (process.env.JS_USER_AGENT ? process.env.JS_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JSUA') ? $.getdata('JSUA') : "'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
      "Accept-Language": _0x1b03("99"),
      "Accept-Encoding": _0x1b03("45"),
      "Content-Type": _0x1b03("62"),
      referer: _0x1b03("9a"),
    },
  };
}
function TotalBean() {
  return new Promise(async (_0x1c60aa) => {
    const _0x122577 = {
      "\x75\x72\x6c": _0x1b03("9c"),
      "\x68\x65\x61\x64\x65\x72\x73": {
        "\x48\x6f\x73\x74": _0x1b03("9d"),
        "\x41\x63\x63\x65\x70\x74": _0x1b03("63"),
        "\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e": _0x1b03("64"),
        "\x43\x6f\x6f\x6b\x69\x65": cookie,
        "User-Agent": $.isNode() ? (process.env.JS_USER_AGENT ? process.env.JS_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JSUA') ? $.getdata('JSUA') : "'jdltapp;iPad;3.1.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"),
        "Accept-Language": _0x1b03("a2"),
        Referer: _0x1b03("a3"),
        "Accept-Encoding": _0x1b03("45"),
      },
    };
    $[_0x1b03("30")](_0x122577, (_0x3eb035, _0x1bf9cb, _0x2b3f79) => {
      try {
        if (_0x3eb035) {
          $[_0x1b03("2f")](_0x3eb035);
        } else {
          if (_0x2b3f79) {
            _0x2b3f79 = JSON[_0x1b03("34")](_0x2b3f79);
            if (_0x2b3f79[_0x1b03("a4")] === _0x1b03("a5")) {
              $[_0x1b03("20")] = ![];
              return;
            }
            if (
              _0x2b3f79[_0x1b03("a4")] === "\x30" &&
              _0x2b3f79[_0x1b03("38")] &&
              _0x2b3f79[_0x1b03("38")][_0x1b03("a6")](_0x1b03("a7"))
            ) {
              $[_0x1b03("21")] =
                _0x2b3f79[_0x1b03("38")][_0x1b03("a7")][_0x1b03("a8")][
                  _0x1b03("a9")
                ];
            }
          } else {
            console[_0x1b03("b")](_0x1b03("aa"));
          }
        }
      } catch (_0x30255e) {
        $[_0x1b03("2f")](_0x30255e);
      } finally {
        _0x1c60aa();
      }
    });
  });
}
function safeGet(_0x2ebc1e) {
  try {
    if (typeof JSON[_0x1b03("34")](_0x2ebc1e) == _0x1b03("ab")) {
      return !![];
    }
  } catch (_0x228bd3) {
    console[_0x1b03("b")](_0x228bd3);
    console[_0x1b03("b")](_0x1b03("ac"));
    return ![];
  }
}
_0xodw = "jsjiami.com.v6";

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}