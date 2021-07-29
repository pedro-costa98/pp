var $select =$('#leds');
var $ledid =$('#ledid');
var $ledref =$('#ledref');
var $ledname =$('#ledname');
var $ledimg =$('#ledimg');
var $ledprice =$('#ledprice');


$.getJSON('../js/leds.js', function(data) {
	
	

	for (var i = 0; i < data['leds'].length; i++) {
		$select.append('<option value="' + data['leds'][i]['id'] + '">' + data['leds'][i]['name'] + '</option>');

	}


	$select.change(function() {
		var id;

		$("#leds > option:selected").each(function() {
			id = $(this).attr('value') - 1;		

		});

		$ledid.html("" + data['leds'][id]['id']);
		$ledref.html("" + data['leds'][id]['ref']);
		$ledname.html("" + data['leds'][id]['name']);
		$ledimg.html( '<img class="item-img" src="../img/items/leds/'+  data['leds'][id]['img'] +'"/>' );		
		$ledprice.html("" + data['leds'][id]['price']);
 
	});

});


//---------------------------------------------------------












