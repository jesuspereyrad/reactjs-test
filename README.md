# Test project with React JS

## Description 

We should be creating a new component called DeviceIcon
This icon will take in 3 functional arguments (at this point) in addition to any required styling arguments:

* type - see below for the current list
  * accesscontrol
  * audio
  * audiosource
  * camera
  * climatecontrol
  * controlsystem
  * gaming
  * healthwellness
  * lighting
  * mediaswitching
  * mobiledevice
  * monitoring
  * networkdevice
  * other
  * personalcomputer
  * pool
  * powerdevice
  * printer
  * security
  * server
  * shades
  * telephone
  * videoconference
  * videodisplay
  * videosource
  
* power - default = false
* service - default = false

The combination of those 3 props will determine which SVG icon to display. The icon names are formulaic.
types-DEVICETYPE-UPPERLEFT-UPPERRIGHT-LOWERRIGHT-LOWERLEFT.svg

At this time, if power === true the LOWERRIGHT value is power, else none and if service === truethe UPPERRIGHT value is service, else none. Both power and service can be true at the same time.
none is the value for all other positional arguments.

After this is created, please make a simple React application that displays a n-number of these icons (they can all look the same).  They should go as wide as the screen will allow (spaced evenly) and then wrap if more than will fit.
 
This app should have 3 additional buttons - "Reset", "Increase", "Decrease" and a text field that takes a number.  The app will display a current value that starts at 0 as well as that many of the Device Icon components.
 
Clicking reset sets the current value to 0 (and cause all displayed components to disappear
Clicking increase will increment the counter (and the number of displayed components) by the value in the text field (default 1)
Clicking decrease will decrement the counter (and the number of displayed components) by the value in the text field (default 1).


### Setup to run the project.
  * Download the project
  * In the console run "yarn install" to install all dependencies
  * In the console run "yarn start" to start the server
  
### Test 
  * In the console run "yarn test" to execute the index.test.js in src/component/device-icon
  
### Add Images
* To add images, go to src/resources/assets/images and paste the svg image there.
* If this image is a new type doesn't describe on the task, add the type name in src/component/device-icon/constant.js
* image name formule example
  * types-audio-none-none-none-none.svg
  * types-audio-none-service-none-none.svg
  * types-audio-none-none-power-none.svg
  * types-audio-none-service-power-none.svg
 
