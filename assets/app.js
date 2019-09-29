"use strict";

$(document).ready(function(){
    $('.carousel').carousel();

    // function for auto-play carousel

    setInterval(function(){
        $('.carousel').carousel('next');
    },3000);

    });