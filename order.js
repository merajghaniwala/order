/*jquery code to insert*/
	$(document).ready(function()
	{
		$("#loadToSuccess").click(function()
		{
			var cust_name = document.form.custname.value;
			var cust_addr = document.form.custaddr.value;
			var cust_pin = document.form.custpin.value;
			var cust_state = document.form.custstate.value;
			var cust_city = document.form.custcity.value;
			var cust_mob = document.form.custmob.value;
			var del_date = document.form.custdeldate.value;
			var pro_name = document.form.proname.value;
			var pro_price = document.form.proprice.value;
			var pro_qty = document.form.qty.value;
			var net_amt = document.form.netamt.value;
			$.get('http://chetsglass.com/android/neworder.php',{cust_name:cust_name,cust_addr:cust_addr,cust_pin:cust_pin,cust_state:cust_state,cust_city:cust_city,cust_mob:cust_mob,del_date:del_date,pro_name:pro_name,pro_price:pro_price,pro_qty:pro_qty,net_amt:net_amt}, function(data){ alert("done");});
		//alert("cust_name="+cust_name+"&cust_addr="+cust_addr+"&cust_pin="+cust_pin+"&cust_state="+cust_state+"&cust_city="+cust_city+"&cust_mob="+cust_mob+"&del_date="+del_date+"&pro_name="+pro_name+"&pro_price="+pro_price+"&pro_qty="+pro_qty+"&net_amt="+net_amt);
		});
		
	//	alert("f");
	});