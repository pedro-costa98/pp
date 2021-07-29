var $select2 =$('#trf');
var $trfid =$('#trfid');
var $trfref =$('#trfref');
var $trfname =$('#trfname');
var $trfimg =$('#trfimg');
var $trfprice =$('#trfprice');


$.getJSON('../js/trf.js', function(data2) {
	
	

	for (var j = 0; j < data2['trf'].length; j++) {
		$select2.append('<option value="' + data2['trf'][j]['id'] + '">' + data2['trf'][j]['name'] + '</option>');

	}


	$select2.change(function() {
		var id2;

		$("#trf > option:selected").each(function() {
			id2 = $(this).attr('value') - 1;		

		});

		$trfid.html("" + data2['trf'][id2]['id']);
		$trfref.html("" + data2['trf'][id2]['ref']);
		$trfname.html("" + data2['trf'][id2]['name']);
		$trfimg.html( '<img class="item-img" src="../img/items/trf/'+  data2['trf'][id2]['img'] +'"/>' );	
		$trfprice.html("" + data2['trf'][id2]['price']);
 
	});

});


//---------------------------------------------------------












