module quiz3();

	reg [11:0] a, b, c, d, e, f, g, h;
	reg [7:0] a3, b3, c3, d3, e3, f3, g3, h3;

initial
begin

	// question 2
	a = 8'b001; 
	$displayb ("a=", a);

	b = 12'hA1; 
	$displayb ("b=", b);

	c = 8'hFF; 
	$displayb ("c=", c);

	d = 8'shA6; 
	$displayb ("d=", d);

	e = 8'sh6A; 
	$displayb ("e=", e);

	f = 'shA6; 
	$displayb ("f=", f);

	g = -8'shA6; 
	$displayb ("g=", g);

	h = 4'h6A; 
	$displayb ("h=", h);

	// question 3
	a3 = 8'b0110_1110 | 3'b111; 
	$displayb ("a3=", a3);

	b3 = 4'b0101 || 3'b111; 
	$displayb ("b3=", b3);

	c3 = 8'hFF &~ 8'hF0; 
	$displayb ("c3=", c3);

	d3 = 8'hFF && 8'hF0; 
	$displayb ("d3=", d3);

	e3 = 8'hFF ^ 8'hF0; 
	$displayb ("e3=", e3);

	f3 = ~8'hF0; 
	$displayb ("f3=", f3);

	g3 = { 3{2'b10} }; 
	$displayb ("g3=", g3);

	h3 = &8'hF0; 
	$displayb ("h3=", h3);
end
endmodule
