module decoder (IN, OUT);
input [5:0] IN;
output [15:0] OUT;

assign OUT[0] = ((~(IN[5] || IN[4])) && IN[0]) || (IN[5] || IN[4]);
assign OUT[1] = ((~(IN[5] || IN[4])) && IN[1]) || (IN[5] || IN[4]);
assign OUT[2] = ((~(IN[5] || IN[4])) && IN[2]) || (IN[5] || IN[4]);
assign OUT[3] = ((~(IN[5] || IN[4])) && IN[3]) || (IN[5] || IN[4]);

assign OUT[4] = (((~(IN[5] || (~IN[4]))) && IN[0]) || IN[5]) && (IN[5] || IN[4]) ;
assign OUT[5] = (((~(IN[5] || (~IN[4]))) && IN[1]) || IN[5]) && (IN[5] || IN[4]) ;
assign OUT[6] = (((~(IN[5] || (~IN[4]))) && IN[2]) || IN[5]) && (IN[5] || IN[4]) ;
assign OUT[7] = (((~(IN[5] || (~IN[4]))) && IN[3]) || IN[5]) && (IN[5] || IN[4]) ;

assign OUT[8] = ((~((~IN[5]) || IN[4]) && IN[0]) || (IN[5] && IN[4])) && IN[5];
assign OUT[9] = ((~((~IN[5]) || IN[4]) && IN[1]) || (IN[5] && IN[4])) && IN[5];
assign OUT[10] = ((~((~IN[5]) || IN[4]) && IN[2]) || (IN[5] && IN[4])) && IN[5];
assign OUT[11] = ((~((~IN[5]) || IN[4]) && IN[3]) || (IN[5] && IN[4])) && IN[5];

assign OUT[12] = (IN[5] && IN[4] && IN[0]) && ((IN[5] && IN[4]));
assign OUT[13] = (IN[5] && IN[4] && IN[1]) && ((IN[5] && IN[4]));
assign OUT[14] = (IN[5] && IN[4] && IN[2]) && ((IN[5] && IN[4]));
assign OUT[15] = (IN[5] && IN[4] && IN[3]) && ((IN[5] && IN[4]));

endmodule
