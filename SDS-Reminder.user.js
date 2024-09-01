// ==UserScript==
// @name         SDS Reminder
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://de152.grepolis.com/game/index*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
function parseInbox1() {

             var reportElement = document.getElementById("report_report");
                if (reportElement == null) {
                    return;
                }
                    if(reportElement.outerHTML.indexOf('town_protection')<0)
                    {
                       return;
                }
    var button=document.getElementById('remind_sds')
    if(button!=null)
    {
        return;
    }
    var footerElement = reportElement.getElementsByClassName("game_list_footer")[0];
var cityName=reportElement.getElementsByClassName("gp_town_link")[0].innerText;
     var time=document.getElementById("report_date").innerText;
     var sendText="<@1150871536513851492> !SDS_"+cityName+"_"+time+"_"+window.Game.player_name;

    var addBtn = document.createElement('a');
                        var txtSpan = document.createElement('span');
                        var rightSpan = document.createElement('span');
                        var leftSpan = document.createElement('span');
                        txtSpan.innerText = 'Erinnern';

                        addBtn.setAttribute('href', '#');
                        addBtn.setAttribute('id', 'remind_sds');
                        addBtn.setAttribute('class', 'button gd_btn_remind');
                        addBtn.setAttribute('style', 'float: right;');
                        txtSpan.setAttribute('id', 'remind_sds_txt');
                        txtSpan.setAttribute('style', 'min-width: 50px; margin: 0 3px;');
                        txtSpan.setAttribute('class', 'middle');
                        rightSpan.setAttribute('class', 'right');
                        leftSpan.setAttribute('class', 'left');

                        rightSpan.appendChild(txtSpan);
                        leftSpan.appendChild(rightSpan);
                        addBtn.appendChild(leftSpan);
addBtn.addEventListener('click', function () {
                               fetch("https://discord.com/api/webhooks/1279901801449259049/mE6PvwUIsYJiavohZ8bMR_AA82m8KorONEuLQnG5MXWi2Y3i2wkZZHbiD0gtnyzLOzhF", {
                method: 'POST',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"content":sendText})});
                            }, false);
    footerElement.appendChild(addBtn);
        };

     setInterval(parseInbox1, 500);

    // Your code here...
})();
