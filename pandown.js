document.getElementsByTagName('head')[0].innerHTML += '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"><style>.pandown{position:relative;margin-top:1em;margin-bottom:1em;padding:16px;padding-left:calc(16px + 16px);border-radius:4px;-webkit-border-radius:4px;font-size:0.9375rem;background:#f6f6f6;display:block;line-height:1.6;}.pandown[type=baidu]{border-left:4px solid #09aaff;}.pandown[type=baidu]::before{color:#09aaff;}.pandown[type=tx]{border-left:4px solid #2980ff;}.pandown[type=tx]::before{color:#2980ff;}.pandown[type=onedrive]{border-left:4px solid #0078d4;}.pandown[type=onedrive]::before{color:#0078d4;}.pandown[type=hc]{border-left:4px solid #e5dbfd;}.pandown[type=hc]::before{color:#e5dbfd;}.pandown[type=ty]{border-left:4px solid #fcb523;}.pandown[type=ty]::before{color:#fcb523;}.pandown[type=aliyun]{border-left:4px solid #637dff;}.pandown[type=aliyun]::before{color:#637dff;}.pandown[type=\'115\']{border-left:4px solid #2777F8;}.pandown[type=\'115\']::before{color:#2777F8;}.pandown[type=jg]{border-left:4px solid #c3773d;}.pandown[type=jg]::before{color:#c3773d;}.pandown[type=\'360\']{border-left:4px solid #2ac389;}.pandown[type=\'360\']::before{color:#2ac389;}.pandown[type=\'123\']{border-left:4px solid #597dfc;}.pandown[type=\'123\']::before{color:#597dfc;}.pandown[type=qn]{border-left:4px solid #00aae7;}.pandown[type=qn]::before{color:#00aae7;}.pandown[type=github]{border-left:4px solid black;}.pandown[type=github]::before{color:black;}.pandown[type=lz]{border-left:4px solid #f60;}.pandown[type=lz]::before{color:#f60;}.pandown::before{position:absolute;top:calc(50% - 24px * 0.5);left:4px;width:24px;height:24px;text-align:center;font-weight:600;line-height:24px;vertical-align:middle;font-family:\'Font Awesome 5 Free\';content:\'\\f019\';}p.pan-fname{margin-top:-0.5em;margin-bottom:-1.5em;font-size:20px;font-weight:bold;}button.pan-down{color:white;display:inline-block;vertical-align:middle;min-width:2.5em;margin-bottom:0;padding:.5em 1em;border:1px solid white;border-radius:.5em;font-weight:400;font-size:.75em;line-height:1.5;text-align:center;white-space:nowrap;cursor:pointer;-webkit-user-select:none;user-select:none;transition-duration:.4s;touch-action:manipulation;}</style>';

function pandown() {
    //遍历所有的pandown标签
    var pandowns = document.getElementsByTagName('pandown');
    //遍历所有的pandown标签
    for (var i = 0; i < pandowns.length; i++) {
        pandowns[i].className = 'pandown';
        var type = pandowns[i].getAttribute('type');
        var panJson = {
            baidu: {
                name: '百度网盘', pwd: true, color: '#09aaff'
            }, tx: {
                name: '腾讯微云', pwd: true, color: '#2980ff'
            }, onedrive: {
                name: 'OneDrive', pwd: true, color: '#0078d4'
            }, hc: {
                name: '和彩云', pwd: true, color: '#e5dbfd'
            }, ty: {
                name: '天翼云', pwd: true, color: '#ffa500'
            }, aliyun: {
                name: '阿里云', pwd: true, color: '#637dff'
            }, 115: {
                name: '115网盘', pwd: true, color: '#2777f8'
            }, jg: {
                name: '坚果云', pwd: true, color: '#c3773d'
            }, 360: {
                name: '360安全云盘', pwd: true, color: '#2ac389'
            }, 123: {
                name: '123云盘', pwd: true, color: '#597dfc'
            }, qn: {
                name: '七牛云盘', pwd: true, color: '#00aae7'

            }, github: {
                name: 'GitHub', pwd: false, color: '#000000'
            }, yun: {
                name: pandowns[i].getAttribute('name'), pwd: true, color: pandowns[i].getAttribute('color')
            }, lz: {
                name: '蓝奏云', pwd: true, color: '#f60'
            }
        }
        if (panJson[type].pwd) {
            pandowns[i].innerHTML = '<div><p class="pan-fname" style="color: ' + panJson[type].color + '">' + pandowns[i].getAttribute('fname') + '</p><br><stong class="pan-fintroduce">' + panJson[type].name + '链接：' + pandowns[i].getAttribute('url') + ' 提取码：' + pandowns[i].getAttribute('pwd') + '</stong><br></div><div><button class="pan-down" style="background-color: ' + panJson[type].color + '" title="复制提取码并下载" onclick="copyText(`' + pandowns[i].getAttribute('pwd') + '`,`' + pandowns[i].getAttribute('url') + '`);">复制提取码并下载</button></div>';
        } else {
            pandowns[i].innerHTML = '<div><p class="pan-fname" style="color: ' + panJson[type].color + '">' + pandowns[i].getAttribute('fname') + '</p><br><stong class="pan-fintroduce">' + panJson[type].name + '链接：' + pandowns[i].getAttribute('url') + '</stong><br></div><div><button class="pan-down" style="background-color: ' + panJson[type].color + '" title="下载" onclick="copyText(``,`' + pandowns[i].getAttribute('url') + '`);">下载</button></div>';
        }
    }
}


//页面加载后运行
if (window.onload) {
    window.onload += function () {
        pandown();
    }
} else {
    window.onload = function () {
        pandown();
    }
}

// 文本复制函数
function copyText(strtext, url) {
    var oInput = document.createElement('input');
    oInput.value = strtext;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand('Copy'); // 执行浏览器复制命令
    oInput.className = 'oInput';
    oInput.style.display = 'none';
    alert('已复制好!');
    window.open(url, '_blank');
}
