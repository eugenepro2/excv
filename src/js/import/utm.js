import sbjs from 'sourcebuster';

sbjs.init();
$('.utm_source').val(sbjs.get.current.src);
$('.utm_medium').val(sbjs.get.current.mdm);
$('.utm_campaign').val(sbjs.get.current.cmp);
$('.utm_term').val(sbjs.get.current.cnt);
$('.utm_content').val(sbjs.get.current.trm);
