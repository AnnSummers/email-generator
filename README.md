# email-generator
Build email templates using [Grunt](http://gruntjs.com/) to compile them into email-client ready HTML.

##How it works##

Template variables are used to push data into placeholder variables throughout the template. These are stored in a JSON file, for easy editing. You can quickly switch out things like links, subject lines, navigation button colours etc.

First it compiles the template, then it strip all indentation to save on file size.

## Installation ##

Install Node.js (and npm, which comes with it) [Node Install Guide](https://docs.npmjs.com/getting-started/installing-node).

## Usage ##

- Duplicate an existing email folder in `Current Work/Work/Giles/EMAIL/EMAIL TEMPLATES` and rename the new folder with the desired camapign ID e.g. `20150620ST-SALE-E7b`
- Open the 'Terminal' application (cmdline on Windows).
- Type `cd Volumes/Current\ Work/Work/Giles/EMAIL/EMAIL\ TEMPLATES` to navigate to the EMAIL TEMPLATES folder.
- Type `grunt --target="CAMPAIGN-ID-GOES-HERE"` e.g. `grunt --target="20150620ST-SALE-E7b"`

After the script processes you will find the resulting HTML in a folder named 'build' inside your campaign folder e.g. `/EMAIL TEMPLATES/20150620ST-SALE-E7b/build/20150620ST-SALE-E7b.html`

This can now be uploaded into the ESP. For any changes you need to make, do so in the original templates then recompile.