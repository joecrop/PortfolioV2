`timescale 1ps/1ps

module tb ();
  parameter CYCLE = 10000;  //10ns period = 100Mhz
  integer out_file;

//define needed internal wires (type reg) to apply signals to 

//create the clock
  initial begin
    clk = 0;
    forever #(CYCLE/2) clk = ~clk;
  end
 
//create reset_n
  initial begin
    reset_n = 0;       //initalize reset aserted
    @(posedge clk);    //wait 2 clock cycles
    @(posedge clk);   
    #100 reset_n = 1;   //release reset_n after 100ps past rising edge
  end

//initalize other signals at reset time
  initial begin  
  ..........
  end 
  
  initial begin
    @(posedge reset_n);
    ena=1;
    ...
    ...apply stimulus to the counter
    ...
  end
 
  //open file for results 
  initial begin
    out_file = $fopen("divider.out"); 
    $fdisplay (out_file, "in    enable    N    out    time");
  end
  //write results to file
  always @ (negedge clk)  begin
    $fdisplay (out_file,"%1b    %1b    %8h    %1b   %5d", in, enable, N, out, $time);
  end 

//instantiate the divider here
  divider_even .......




endmodule //tb.sv
