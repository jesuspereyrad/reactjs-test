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

### Setup to run the project.
  * Download the project
  * In the console run "yarn install" to install all dependencies
  * In the console run "yarn start" to start the server
  
### Test 
  * In the console run "yarn test" to execute the index.test.js in src/component/device-icon
  
### Add Images
  * To add images, go to src/resources/assets/images and paste the svg image there.
  * If this image is a new type doesn't describe on the task, add the type name in src/component/device-icon/constant,js
