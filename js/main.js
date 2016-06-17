$(document).ready(function(){
$('#sub_menu').hide();

$("#main_menu").hover(function(){
$("#main_menu").children().slideDown("slow");
},
function(){
$("#main_menu").children().slideUp("slow");
});
$("main_menu").children().hide();
});