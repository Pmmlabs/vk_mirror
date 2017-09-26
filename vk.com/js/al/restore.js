var Restore={maxPhotosWithType:1,maxPhotos:2,requestTypeFull:0,requestTypeSimple:4,onlineNoOwner:1,onlineOwner:2,showMsgBox:function(e,o,t){setTimeout(showFastBox({title:o,width:440,onHide:function(){t&&ge(t).focus()}},e).hide,8e3)},closeRequest:function(e){lockButton(e);var o={act:"a_cancel_request_by_author",hash:cur.options.cancel_hash,rhash:cur.options.hash,rid:cur.options.request_id};ajax.post("al_restore.php",o,{onDone:function(o){unlockButton(e),curBox().hide()}})},closeRequestBox:function(){showFastBox(getLang("global_box_confirm_title"),getLang("restore_you_sure_want_cancel_request"),getLang("box_no"),!1,getLang("box_yes"),Restore.closeRequest)},showResult:function(e,o,t,r){cur.wasShown&&cur.wasShown!=e&&hide(cur.wasShown),ajax.post("al_index.php",{act:"restore_log",id:e,text:o,value:t?t.value:"none"}),cur.wasShown=e;var s=ge(e);return val(s,o),isVisible(s)||show(s),setTimeout(function(){r?scrollToY(getXY(t)[1]-100,200):scrollToY(getXY(s)[1]-20,200),setTimeout(elfocus.pbind(t),201)},1),!1},checkPhoneOnBlur:function(e){var o=e;if(phone=ge(o).value.replace(/[^0-9]/g,""),!isVisible(o)||/^[1-9][0-9]{6,14}$/.test(phone)){var t=function(e,o){var t="request_phone_check_res";return 2===e?(cur.wasShown&&cur.wasShown!=t&&hide(cur.wasShown),cur.wasShown=t,val(t,o),isVisible(t)||setTimeout(function(){slideDown(t,150)},50),cur.checkedPhones[phone]=[e,o]):isVisible(t)&&slideUp(t,200),3!=e||cur.restoreNoEmailAccess?void Restore.checkedPasswordStatus():(hide("submit_wrapper"),Restore.changeFormStep("phones","back_link"))};cur.checkedPhones=cur.checkedPhones||{},phone in cur.checkedPhones?t(cur.checkedPhones[phone][0],cur.checkedPhones[phone][1]):ajax.post("al_restore.php",{act:"a_check_phone",hash:cur.options.fhash,phone:phone},{onDone:t})}},checkEmailOnBlur:function(){var e=val("login");e&&/^\s*[a-zA-Z0-9_\.]+@[a-zA-Z0-9_\.]+\s*$/.test(e)&&(cur.restoreNoEmailAccess||ajax.post("/restore",{act:"a_check_email",hash:cur.options.fhash,email:e},{onDone:function(e){return e?(hide("submit_wrapper"),Restore.changeFormStep("phones","back_link")):void 0}}))},getUploadedPhotosIds:function(e){var o=[];return each(cur.images,function(t,r){(e||!r.deleted)&&o.push(r.id)}),o},submitDocPhoto:function(){return Restore.screenshootCheck(0)},submitPersonalPhoto:function(){return Restore.screenshootCheck(1)},screenshootCheck:function(e,o){if(!o){if(1==e)var t=val("photo_input");else var t=val("doc_input");try{var r=new RegExp(cur.screenshot_regex,"gi");if(r.test(t)){var s=new MessageBox({title:getLang("global_action_confirmation")}).addButton(getLang("restore_no_other_photo"));return void s.addButton(getLang("box_yes"),function(){Restore.screenshootCheck(e,!0),s.hide()},"gray").content(getLang("restore_screenshoot_confirm_box_text")).show()}}catch(n){}}if(1==e)var a=ge("photo_file_button");else var a=ge("doc_file_button");lockButton(a),setTimeout(function(){a.innerHTML=a.innerHTML},0);var i=1==e?"photo_upload_ids":"doc_upload_ids";val(i,Restore.getUploadedPhotosIds(!0).join(",")),1==e?document.photo_upload.submit():document.doc_upload.submit()},uploadError:function(e,o){var t="",r=4e3;e?1==e||4==e?t=getLang("restore_not_uploaded"):2==e?t=getLang("restore_bad_format"):5==e?t=getLang("restore_bad_size"):7==e?(t=getLang("restore_too_small_image"),r=8e3):8==e?(t=getLang("restore_photo_already_attached"),r=8e3):9==e&&(t=getLang("restore_photo_incorrect"),r=8e3):t=getLang("global_unknown_error"),setTimeout(showFastBox({title:getLang("global_error"),width:470},t).hide,r);var s=o?"photo_":"doc_",n=ge(s+"file_button");unlockButton(n)},uploadComplete:function(e,o,t,r,s,n){var a=r?"photo":"doc",i=a+"_",u=ge(i+"file_button");unlockButton(u);var c=cur.images.length,l=!0;each(cur.images,function(e,o){return o.type==r&&o.deleted?(c=e,l=!1,!1):void 0}),cur.images[c]={id:o,hash:t,type:r},++cur.images_count[r];var _=2==n?Restore.maxPhotosWithType:Restore.maxPhotos;ge(i+"input").disabled=cur.images_count[r]>=_,ge(i+"input").disabled&&hide(i+"upload"),show(i+"photos"),s=s.split("%index%").join(c).split("%type%").join(r);var h=se(s);return l?ge(i+"photos").appendChild(h):domReplaceEl(ge("photo"+c),h),hide("simple_request_incorrect"),Restore.changeFullRequestButton(!0)},deleteImage:function(e,o,t){var r=e?"photo":"doc",s=r+"_";if(cur.images[o].deleted){if(cur.images_count[e]>=2)return;cur.images[o].deleted=!1,removeClass("photo_img"+o,"restore_uploaded_image__img_removed");var n=2==t?Restore.maxPhotosWithType:Restore.maxPhotos;++cur.images_count[e]>=n&&(ge(s+"input").disabled=!0,hide(s+"upload")),ge("del_link"+o).innerHTML=getLang("global_delete"),show("restore_roll_button_"+r)}else cur.images[o].deleted=!0,addClass("photo_img"+o,"restore_uploaded_image__img_removed"),--cur.images_count[e],ge(s+"input").disabled=!1,show(s+"upload"),ge("del_link"+o).innerHTML=getLang("global_dont_delete"),cur.images_count[e]||hide("restore_roll_button_"+r)},checkedPasswordStatus:function(){if(cur.restorePasswordChecked){var e=val("old_password");cur.restorePasswordChecked[e]&&1!==cur.restorePasswordChecked[e]&&Restore.toFullRequest(!1,1)}},checkPassword:function(e){e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout(function(){var e=val("old_password");cur.restorePasswordChecked||(cur.restorePasswordChecked={});var o=isVisible("new_phone_wrap")?"new_phone":"phone",t=val(o).replace(/[^0-9]/g,"");e.length>0&&!cur.restorePasswordChecked[e]&&ajax.post("/restore",{act:"a_check_password",hash:cur.options.fhash,password:e},{onDone:function(o){cur.restorePasswordChecked[e]=o,1!==o&&t&&Restore.toFullRequest(!1,1)}})},400)},submitPageLink:function(){var e=ge("submitBtn"),o=val("link");return o?(hide("error"),void ajax.post("al_restore.php",{act:"a_profile_link",link:o},{onDone:function(e){val("error",e),show("error")},showProgress:lockButton.pbind(e),hideProgress:unlockButton.pbind(e)})):void elfocus("link")},usePhoneAsLogin:function(){var e=ge("usePhoneBtn");lockButton(e);var o={act:"a_new_email",rid:cur.options.request_id,hash:cur.options.lhash,login:-1};ajax.post("al_restore.php",o,{onDone:function(o){o?(unlockButton(e),Restore.showMsgBox(o,getLang("global_error"))):nav.reload()},onFail:function(){unlockButton(e)}})},useAnotherEmail:function(){var e=ge("anotherEmailBtn"),o=ge("login").value;if(!/^\s*[a-zA-Z0-9_\.]+@[a-zA-Z0-9_\.]+\s*$/.test(o))return void Restore.showMsgBox(getLang("restore_error_email"),getLang("global_error"),"login");lockButton(e);var t={act:"a_new_email",rid:cur.options.request_id,hash:cur.options.lhash,login:o};ajax.post("al_restore.php",t,{onDone:function(o){unlockButton(e),Restore.showMsgBox(o,getLang("global_error"))},onFail:function(){unlockButton(e)}})},extendRequest:function(e,o){var t={act:"a_extend",rid:cur.options.request_id,hash:cur.options.phash,comment:val("comment"),images:[]};o===!0&&(t.force=1);for(var r=0;r<cur.images.length;++r)cur.images[r].deleted||t.images.push(cur.images[r].hash);if(!trim(t.comment).length&&!t.images.length)return void elfocus("comment");if(!t.images.length&&cur.restorePhotosRequested&&!o){var s={title:getLang("global_warning"),width:620};return void(cur.restoreConfirmNoPhotos=showFastBox(s,getLang("restore_extend_no_photos_are_you_sure"),getLang("restore_extend"),null,getLang("restore_dont_extend_with_photos"),function(){cur.restoreConfirmNoPhotos.hide(),Restore.extendRequest(e,!0)}))}ajax.post("al_restore.php",t,{showProgress:lockButton.pbind(e),hideProgress:unlockButton.pbind(e),onDone:function(e,o){0==e?Restore.showMsgBox(o,getLang("global_error")):1==e?(val("request_result_msg",o),hide("request_result_wrap"),show("request_result_msg")):2==e&&notaBene("comment")}})},noEmailAccessSimpleRequest:function(){hide("restore_roll_back_link"),show("submit_wrapper"),cur.restoreNoEmailAccess=1},submitSimpleRequest:function(){var e,o,t,r,s,n=ge("submitBtn");e=val("login");var a=isVisible("new_phone_wrap")?"new_phone":"phone";if(r=val(a).replace(/[^0-9]/g,""),r&&Restore.checkedPasswordStatus(),isVisible("email_wrap")&&!/^\s*$/.test(e)&&!/^\s*[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9_\.\-]+\s*$/.test(e)&&!/^\s*[a-zA-Z0-9_]{6,32}\s*$/.test(e))return Restore.showResult("request_email_res",getLang("restore_login_error"),"login");if(o=val("email"),t=val("old_phone").replace(/[^0-9]/g,""),!/^\s*$/.test(t)&&!/^[1-9][0-9]{6,14}$/.test(t))return Restore.showResult("request_phone_res",getLang("restore_old_phone_error"),"old_phone");if(isVisible(a)&&!/^[1-9][0-9]{6,14}$/.test(r))return Restore.showResult("request_phone_res",getLang("restore_phone_error"),a);if(cur.checkedPhones&&cur.checkedPhones[r]&&2==cur.checkedPhones[r][0])return Restore.showResult("request_email_res",cur.checkedPhones[r][1],a,!0);if(!isVisible("new_phone_wrap")&&!e&&!t){var i=getLang("restore_need_email_or_phone");return i+="<br>"+getLang("restore_need_email_or_phone_desc"),Restore.showResult("request_phone_res",i,"old_phone")}return(s=val("old_password"))?(cur.validationLastCallback=function(e){hide("request_phone_res"),e?Restore.submitSimpleRequest():elfocus("phone")},void ajax.post("/al_restore.php",{act:"a_request",hash:cur.options.fhash,login:e,email:o,phone:r,old_phone:t,password:s,no_email_access:cur.restoreNoEmailAccess||0},{onDone:function(e,o,t,r,s,n){var a=intval(e);return 0==a&&(n=t),-4==a?Restore.toFullRequest(!1,1):"back_link"==n?(hide("submit_wrapper"),Restore.changeFormStep("phones","back_link")):void Restore.processSubmitResult(e,o,t,r,s)},showProgress:lockButton.pbind(n),hideProgress:unlockButton.pbind(n)})):Restore.showResult("request_old_password_res",getLang("restore_need_old_password")+"<br>"+getLang("restore_need_old_password_desc"),"old_password")},processSubmitResult:function(e,o,t,r,s,n){var a=intval(e);if(-2==a){var i,u;return n?(i=ge("restore_submit_full_request"),u=Restore.submitFullRequest):(i=ge("submitBtn"),u=Restore.submitSimpleRequest),lockButton(i),setTimeout(u,1e3)}-3==a?("login"==s&&(o+="<br>"+getLang("restore_need_email_or_phone_desc")),Restore.showResult(t,o,r)):Restore.showResult("request_phone_res",o,r)},toFullRequest:function(e,o){if(isVisible("new_phone_wrap"))var t=val("new_phone").replace(/[^0-9]/g,"");else var t=val("phone").replace(/[^0-9]/g,"");var r={act:"return_page",full:1};e&&(r.mid=e),t&&(r.phone=t),o&&(r.m=o),nav.change(r)},infoCheckSubmit:function(e){var o=trim(val("page_link")),t=val("phone").replace(/[^0-9]/g,""),r=ge("restore_info_error");return o.length?t.length?(hide(r),removeClass(r,"restore_info_error_big_text"),void ajax.post("/restore",{act:"a_check_info",link:o,phone:t},{showProgress:lockButton.pbind(e),hideProgress:unlockButton.pbind(e),onDone:function(e,o,t){1!=e&&(val(r,o),-1==e&&addClass(r,"restore_info_error_big_text"),show(r),t&&notaBene(t))}})):notaBene("phone"):notaBene("page_link")},initCheckInfo:function(){Restore.initFormTT(ge("page_link"),"restore_info_page_link_tooltip")},initResendCounter:function(e){var o=ge("resend_sms_button");if(e>0){addClass(o,"button_disabled"),o.time=e;var t=function(){if(o.time<=1)return removeClass(o,"button_disabled"),val(o,getLang("restore_resend_sms_data")),void clearInterval(o.timeInterval);o.time-=1;var e=formatTime(o.time);val(o,getLang("restore_can_resend_sms_after").replace("{time}",e))};t(),o.timeInterval=setInterval(t,1e3)}},resendSMS:function(e){hasClass(e,"button_disabled")||(lockButton(e),ajax.post("al_restore.php",{act:"a_resend_sms",hash:cur.resend_hash,id:cur.rid},{onDone:function(o,t,r,s){unlockButton(e),1==o?(r&&Restore.initResendCounter(r),0==t&&hide(e),s&&(addClass("resend_success","active"),setTimeout(removeClass.pbind("resend_success","active"),1e4))):hide(e)}}))},initTimeButton:function(){cur.resend_counter>0&&Restore.initResendCounter(cur.resend_counter)},initRequest:function(){extend(cur,{images:[],images_count:[0,0],request_id:!1,request_hash:!1});var e=cur.options.request_type,o=e==Restore.requestTypeFull?"new_phone":"phone",t=ge("comment"),r=ge(o),s=ge("old_phone"),n=ge("login"),a=ge("old_password"),i=ge("new_phone");placeholderSetup(t,{back:!0}),Restore.initFormTT(t,"restore_lost_phone_your_comment_short"),isVisible(r)&&Restore.initFormTT(r,"restore_form_available_phone_tooltip"),e==Restore.requestTypeSimple&&isVisible(i)&&Restore.initFormTT(i,"restore_form_available_phone_tooltip"),isVisible(s)&&Restore.initFormTT(s,"restore_form_old_phone_tooltip"),isVisible(n)&&Restore.initFormTT(n,"restore_form_old_email_tooltip"),isVisible(a)&&Restore.initFormTT(a,"restore_about_old_password"),cur.destroy.push(function(){delete cur.requestStep,delete cur.requestParams,delete cur.restoreNoEmailAccess})},initFormTT:function(e,o){addEvent(e,"focus",showTooltip.pbind(e,{dir:"right",text:getLang(o),shift:function(){var o=Math.round((getSize(e.tt.container)[1]+getSize(e)[1])/2);return[225,-o,0]},width:215,slideX:-15,hasover:1,forcetoup:!0,nohide:!0})),addEvent(e,"blur",function(){e.tthide&&e.tthide()})},changeFormStep:function(e,o){var t="restore_roll_";removeClass(t+e,"_restore_roll_active"),cur.requestStep=o,"back_link"==e&&hide(t+e);var r=ge(t+o);if(show(r),removeClass(r,"restore_roll_colored"),scrollToY(getXY(r)[1],400),removeClass("restore_roll_"+o,"restore_roll_hidden"),addClass(r,"_restore_roll_active"),"comment"==o){var s=ge("comment");autosizeSetup(s,{minHeight:55,maxHeight:300}),addEvent(s,"focus keyup",function(e){s.timeout&&clearTimeout(s.timeout),s.timeout=setTimeout(function(){try{var e=val(s),o=new RegExp(cur.delete_regex,"gi");if(o.test(e))var t=cur.goto_support;else var t=getLang("restore_lost_phone_your_comment_short");val(s.tt.container,'<div class="wrapped"><div class="tt_text">'+t+"</div></div>")}catch(r){}},300)})}},checkSimpleRequestFields:function(){var e=val("old_phone").replace(/[^0-9]/g,"");if(!/^\s*$/.test(e)&&!/^[1-9][0-9]{6,14}$/.test(e))return Restore.showResult("request_phone_res",getLang("restore_old_phone_error"),"old_phone");var o=isVisible("new_phone_wrap")?"new_phone":"phone",t=val(o).replace(/[^0-9]/g,"");return isVisible(o)&&!t?(notaBene(o),!1):isVisible(o)&&!/^[1-9][0-9]{6,14}$/.test(t)?Restore.showResult("request_phone_res",getLang("restore_phone_error"),o):(Restore.checkedPasswordStatus(),cur.checkedPhones&&cur.checkedPhones[t]&&2==cur.checkedPhones[t][0]?Restore.showResult("request_email_res",cur.checkedPhones[t][1],o,!0):!0)},checkSimpleRequestPhone:function(e){e&&!cur.restoreNoEmailAccess&&(clearTimeout(e.timeout),e.timeout=setTimeout(function(){Restore.checkSimpleRequestFields(e)&&Restore.checkPhoneOnBlur(e)},1e3))},submitFullRequest:function(e){var o="new_phone",t=ge("restore_submit_full_request");if(cur.requestParams||(cur.requestParams={},cur.requestStep="phones"),"phones"==cur.requestStep){var r=val(o).replace(/[^0-9]/g,"");if(!r)return notaBene(o);if(!/^[1-9][0-9]{6,14}$/.test(r))return Restore.showResult("request_phone_res",getLang("restore_phone_error"),o);cur.requestParams.phone=r}if("back_link"==cur.requestStep&&e)return Restore.changeFormStep("back_link","photo");if("photo"==cur.requestStep&&cur.images_count[1]<1)return Restore.showResult("request_photo_res",getLang("restore_photo_error")+"<br>"+getLang("restore_attention"));if("doc"==cur.requestStep&&cur.images_count[0]<1)return Restore.showResult("request_doc_res",getLang("restore_doc_error")+"<br>"+getLang("restore_attention"));if("doc"==cur.requestStep||"photo"==cur.requestStep){var s=[];each(cur.images,function(e,o){o.deleted||s.push(o.hash)}),cur.requestParams.images=s}if("doc"==cur.requestStep)return Restore.changeFullRequestButton(!0,getLang("restore_submit")),Restore.changeFormStep("doc","comment");"comment"==cur.requestStep&&(cur.requestParams.comment=val("comment"));var n=extend({act:"a_request",hash:cur.options.fhash},cur.requestParams);ajax.post("restore",n,{onDone:function(e,o,t,r,s,n,a,i){var u=intval(e);if(0==u&&(n=t,a=r,i=s),1==u)return val("request_result",o),show("request_result"),hide("request_form"),void scrollToTop();if(-5==u){var c=new MessageBox({title:getLang("global_action_confirmation")});return c.addButton(getLang("restore_last_online_yes"),function(){cur.requestParams.no_online=Restore.onlineOwner,c.hide(),Restore.submitFullRequest()}),c.addButton(getLang("restore_last_online_no"),function(){cur.requestParams.no_online=Restore.onlineNoOwner,c.hide(),Restore.submitFullRequest()},"gray"),void c.content(getLang("restore_last_online_modal")).show()}return"back_link"==n?(Restore.changeFullRequestButton(!1),cur.resetPasswordHash=a,cur.resetPasswordTHash=i,Restore.changeFormStep("phones","back_link")):"photo"==n?(Restore.changeFullRequestButton(!1),Restore.changeFormStep("phones","photo")):"doc"==n?(Restore.changeFullRequestButton(!1),Restore.changeFormStep("photo","doc")):void Restore.processSubmitResult(e,o,t,r,s,!0)},showProgress:lockButton.pbind(t),hideProgress:unlockButton.pbind(t)})},resetPasswordByEmail:function(e){var o=val("new_phone").replace(/[^0-9]/g,"");ajax.post("/login",{act:"a_forgot",user_id:cur.user_id,sure:cur.resetPasswordHash,hash:cur.resetPasswordTHash,login:o,from_request:1},{showProgress:lockButton.pbind(e),hideProgress:unlockButton.pbind(e),onDone:function(o,t){1==o?(hide(e),val("reset_password_button",t)):Restore.showResult("restore_back_link_error",t)}})},changeFullRequestButton:function(e,o){toggle("restore_roll_button",e),o&&val("restore_submit_full_request",o)},activate:function(e,o,t){isButtonLocked(e)||ajax.post("restore",{act:"a_activate",id:o,hash:t},{showProgress:lockButton.pbind(e),hideProgress:unlockButton.pbind(e)})}};try{stManager.done("restore.js")}catch(e){}