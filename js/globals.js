  var IS_PHONE = function(){
    return (d3.select("#isPhone").style("display") == "block")
  }
  var IS_MOBILE = function(){
    return (d3.select("#isMobile").style("display") == "block")
  }

  var PHONE_VIS_WIDTH = 330;
  var PHONE_VIS_HEIGHT = 260;
  var VIS_WIDTH = 600;
  var VIS_HEIGHT = 520;

  var margin = { top: 0, left: 20, bottom: 40, right: 10 };