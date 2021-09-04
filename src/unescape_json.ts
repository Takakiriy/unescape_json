import * as fs from "fs";
import * as lib from "./lib";
import * as clipboardy from 'clipboardy';

async function  main() {
	console.log("");
	console.log("Enter only: unescape the text in the clipboard");
	const  input_file_path = await lib.input( "Input escaped JSON UTF-8 file path>" );
	if (input_file_path) {
		const  output_file_path = input_file_path +".updating";
		const  escaped_JSON = fs.readFileSync( input_file_path,  "utf-8" );

		const  a_JSON_string = JSON.parse( escaped_JSON );  // Unescape
		const  a_JSON = JSON.parse( a_JSON_string );
		const  formatted_JSON = JSON.stringify( a_JSON, null, "\t" );

		fs.writeFileSync( output_file_path,  formatted_JSON );
	} else {
		const  escaped_JSON = clipboardy.readSync();

		const  a_JSON_string = JSON.parse( escaped_JSON );  // Unescape
		const  a_JSON = JSON.parse( a_JSON_string );
		const  formatted_JSON = JSON.stringify( a_JSON, null, "\t" );

		clipboardy.writeSync(formatted_JSON);
	}
}

async function  callMain() {

    await  main()
        .catch( (e: any)=>{
			console.log( `ERROR: ${e.message}` );
			const  timeOver = new Date();
			timeOver.setSeconds( timeOver.getSeconds() + 1 );

			while ((new Date()).getTime() < timeOver.getTime()) {
			}
        })
        .finally(()=>{
            lib.getInputObject().close();
        });
}
callMain();
