function start(){
    var newdate = $('#newdate').html();
    var coordinate = $('#coordinate').html();
    let render2=Mustache.render(coordinate, {latitude:"28.459",longitude:"77.026"});
    let render3=Mustache.render(newdate, {date:"2022-07-18"});
    $('.latitude').html(render2);
    $('.framedate').html(render3);
}

function sendData(){
    $('.fields').css("visibility","hidden")
    $('.result').css("visibility","visible")
    var date=$('#data1').val();
    var latitude=$('#data2').val();
    var longitude=$('#data3').val();
    var title=$('#data4').val();
    var description=$('#data5').val();

    var template = $('#template').html();
    var coordinate = $('#coordinate').html();
    var newdate = $('#newdate').html();
    let render1=Mustache.render(template, {date:date,latitude:latitude,longitude:longitude,title:title,description:description});
    let render2=Mustache.render(coordinate, {latitude:latitude,longitude:longitude});
    let render3=Mustache.render(newdate, {date:date});
    $(".result").html(render1);
    $('.latitude').html(render2);
    $('.framedate').html(render3);
}

function resetData(){
    $('.fields').css("visibility","visible")
    $('.result').css("visibility","hidden")
}