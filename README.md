# unescape_json

unescape_json sorts the JSON file.

[日本語 README](./README-jp.md)


## Install

To use unescape_json, you must install Node.js.

For Windows:

    Download and expand unescape_json:
        - https://github.com/Takakiriy/unescape_json >> Code >> Download.ZIP

    Install Node.js:
        - https://nodejs.org/ja/download/ >> Windows Installer (.msi) >> 64-bit
        - Open the downloaded file (e.g. node-v14.16.0-x64.exe)
        - Installation options are defaults

    Install packages used by unescape_json:
        - Windows Start >> PowerShell
        - cd ___/unescape_json
        - npm install --only=production

    To start unescape_json, double click unescape_json.bat file:

For mac:

    Download and expand unescape_json:
        - https://github.com/Takakiriy/unescape_json >> Code >> Download.ZIP

    Install Node.js:
        - https://nodejs.org/ja/download/ >> macOS Installer (.pkg) >> 64-bit
        - Open the downloaded file (e.g. node-v14.16.0.pkg)
        - Installation options are defaults

    Install packages used by unescape_json:
        - Launchpad >> Terminal
        - cd ___/unescape_json
        - npm install --only=production

    copy node_modules_patch/indent-string to node_modules.

    Add execution attributes to "unescape_json.command" file:
        - chmod +x unescape_json.command

    To start unescape_json, double click unescape_json.command file:


## First example

For Windows, double click unescape_json.bat file and type:
For mac, double click unescape_json.command file and type:

    input .json file path> example.json.txt

You can drag and drop a file to enter the file without having to type it from the keyboard.

example.json.txt.updating file is created in the folder containing the input file.

If you input Enter only, unscape the text in the clipbard.
