
LT_USERNAME = process.env.LT_USERNAME || "micael.franco";
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "aDzp8kA9p8xkyx7MfhvtIf4dma6ZdeVk5Sf5Cucm4xl6NrszPs"

exports.capabilities = {
    'build': 'Mocha-Selenium-Sample', //Build name
    'name': 'Your Test Name', // Test name
    'platform':'Windows 10', // OS name
    'browserName': 'Chrome', // Browser name
    'version': '92.0', // Browser version
    'resolution': '1024x768',
    'visual': false,  // To take step by step screenshot
    'network':false,  // To capture network Logs
    'console':false, // To capture console logs.
    'tunnel': false // If you want to run the localhost than change it to true
  };