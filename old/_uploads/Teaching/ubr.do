add list -nodelta

configure list -strobestart {4 ns}  -strobeperiod {5 ns}
configure list -usestrobe 1

add list -notrigger -hex -width 4  -label LED          LED

#add wave *
#add wave /sensor_0/*

force -freeze sim:/top/sensor 0 0
force -freeze sim:/top/clk 1 0, 0 {5 ns} -r 10
force -freeze sim:/top/clk_mem 1 0, 0 {20 ns} -r 40

force -freeze sim:/top/reset_n 0 0
run 500
force -freeze sim:/top/reset_n St1 0
run 2000

force -freeze sim:/top/sensor St1 0
run 1000
force -freeze sim:/top/sensor St0 0
run 200000

force -freeze sim:/top/sensor St1 0
run 1000
force -freeze sim:/top/sensor St0 0
run 200000

force -freeze sim:/top/sensor St1 0
run 1000
force -freeze sim:/top/sensor St0 0
run 200000
run 100000

write list sensor.list
