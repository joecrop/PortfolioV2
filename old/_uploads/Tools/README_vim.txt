This is a vim setup for improving the efficiency of editing SystemVerilog/UVM
files (as well as many other file types). This setup was designed to
work with version 8.0 of gvim/vim or higher.




To install my custom set of scripts just copy the zip file to your home
directory and unzip it. It will create a file called .vimrc and a folder
called .vim/ . If these files already exist you may want to rename them first,
just in case you want to revert to your old setup later.

	cp vim80.zip ~/
	mv .vimrc ,vimrc_old
	mv .vim .vim_old
	unzip vim80p.zip

One modification needs to be made to the installed .vimrc file.
Open the file and change the fist line to be YOUR Perforce username:

	let p4_user = 'user'

Along with some custom written vim scripts, the following plugins/features are
installed into the .vim directory. You can google them to get more information.

	Neocomplete: looks at both file and programming language and proposes autocomplete options
	Neosnippit: allows for code snippets to easily be reused to save time
	Perforce: allows for checking in/out files from p4 or ic manage
	Matchit: allows the use of % to find which begin/end are tied together (sometimes works)
	Lightline: better status bar info
	Syntastic: lint checking by compiling a file with irun (is slow for complex UVM files)
	ALE Linter: Auto-lints code as you type to help find errors eariler in the design flow.
	Persistent undo: After you close a file you can re-open it and still undo/redo.
	Folding: push the space bad to open and close a fold.
	Mark: Multiple search highlights at the same time.
	Cursor Restore: Custom script to restore cursor to previous location when opening a file.
	Code Templates: Automatically generates starting templates for verilog/UVM files.
	Color Schemes: See https://vimcolors.com/
	Custom Macros: That amke verilog editing a bit easier (.vim/scripts/verilog_helpers.vim)

If you want to use my setup, you will need to change the sso_name variable at
the top of the .vimrc file to match your pesonal SSO username.

Things to try:

Folding:
	- Open .vimrc
	- Click on one of the folded sections
	- Hit the space bar to open and close the fold
	- Vim is set up to read folds with sets of 3 curley braces {{{ and }}}

Code Templates:
	- Create a new SV file:
		gvim my_module.sv
	- You will be prompted to choose a starting template.
	- Choose the default template by just hitting the Enter key
	- Note that the module name that is created matches the file name you created

ALE Auto Linting:
	- You will see a red arrow on the left indicating a lint error
	- Click your mouse on the line with the error
	- Hit ESC to make sure you are not in insert mode
	- You will see an explanation of the lint error at the bottom of the window
	- Remove the comma at the end of the line to fix the error
	- Try typing in more system Verilog code to see how the linter performs
	- You may see a brief error message flash at the bottom of the screen, this
	  is a minor bug in vim-8.0 due to killing asynchronous lint threads.
	  If you find this to bee too annoying, the ALE linter can be disabled in
	  the ALE section of the .vimrc file.

Autocomplete:
	- Try out autocomplete, for example type:
		uvm_
	- The autocompleter will show a list of all the possible UVM
	  macros/class names that are available. Use the down/up arrow to select
	  one and hit enter to fill it in.
	- The autocompleter can also autocomplete paths. For example type:
		/design/
	- You can then use autocomplete to walk through the design folder and
	  so on.

Verilog Macros:
	- Try out one of my cool macros. Copy the module definition below into
	  your my_module.sv file just before the "endmodule" line:

module pll_digital (

   // SFR INTERFACE
   input  WR_STROBE_N,                 // SFC write enable strobe              
   input  ADDR_STROBE_N,               // SFC read enable strobe               
   input  [7:0] WR_DATA,               // SFC data input                       
   output reg [7:0] RD_DATA,           // SFC data output                      
   input  REQ,                         // SFC data request
   output REQ_RECEIVED,                // SFC request acknowledge
   input ACK_IN,                       // SFC data acknowledge from previous module
   output ACK_OUT,                     // SFC data acknowledge
   input reg [7:0] BASE_ADDR,          // SFC address offset to be subtracted from registered address
   input    SCAN_MODE,                 // SFC scan mode

);

	- put your cursor on the line above the "module pll_digital" line
	- type: @m
	- Vim will transform the module definition to an instantiation. TaDa!
	- Macros can be found here: ~/.vim/scripts/verilog_helpers.vim

Please don't hesitate to reach out to me if you have any questions.

Happy Viming,

Joe Crop


