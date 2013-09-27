//This is the title for your window tab, and your Radar
document.title = "PDA Product Development Radar";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Doing'}
                  ,{'r':175,'name':'May do'}
                  ,{'r':250,'name':'Unfunded Interesting Ideas'}
                  ,{'r':325,'name':'Hold or Deprecate'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//   r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 685;
var w = 1100;


var radar_data = [
    { "quadrant": "Product Development",
        "left" : 45,
        "top" : 50,
        "color" : "#01a401",
        "items" : [ 
            {"name":"CG Maintenance & Security", "note":"This includes patches for <a href='http://cve.mitre.org/'>security holes</a>.",
                "pc":{"r":25,"t":110},"movement":"c"},
            {"name":"RL Maintenance & Security", "note":"",
                "pc":{"r":25,"t":160},"movement":"c"},     
            {"name":"CG 4.0 Wellness", "note":"",
                "pc":{"r":65,"t":125},"movement":"t", "blipSize":120},
            {"name":"CG Substance Abuse Treatment", "note":"",
                "pc":{"r":80,"t":150},"movement":"c"},
            {"name":"Content Queues", "note":"",
                "pc":{"r":70,"t":170},"movement":"c"},
            {"name":"CG -> RL integration", "note":"",
                "pc":{"r":100,"t":150},"movement":"c"},
            {"name":"CG -> EMR (HL7 / API)", "note":"This is likely to be complicated to get right and require a large time committment.",
                "pc":{"r":250,"t":165},"movement":"c"},    
            {"name":"Designated Observer App", "note":"",
                "pc":{"r":180,"t":170},"movement":"c"},    
            {"name":"CG Ping Me app", "note":"",
                "pc":{"r":180,"t":125},"movement":"c"},   
            {"name":"CG Disclosure Audit Trail", "note":"",
                "pc":{"r":220,"t":100},"movement":"c"}
        ]
    },
    { "quadrant": "Mission & Impact",
        "left": w-220,
        "top" : 50,
        "color" : "#3170ff",
        "items" : [ 
            {"name":"Open Source CG + RL", "pc":{"r":390,"t":20},"movement":"t"},   
            {"name":"VistA / OSEHRA integration", "pc":{"r":310,"t":10},"movement":"c"},   
            {"name":"Footholds integration", "pc":{"r":280,"t":85},"movement":"c"},   
            {"name":"Speaking at OSEHRA", "pc":{"r":280,"t":70},"movement":"c"},   
            {"name":"Speaking at StrataRx", "pc":{"r":280,"t":50},"movement":"c"},   
            {"name":"Speaking at Health2.0", "pc":{"r":280,"t":30},"movement":"c"},   
            {"name":"open mHealth", "pc":{"r":280,"t":30},"movement":"c"},   
            {"name":"Mitre", "pc":{"r":280,"t":30},"movement":"c"},   
            {"name":"Standards for Patient Centered apps", "pc":{"r":180,"t":85},"movement":"c"},   
            {"name":"healthcare startup KIT", "pc":{"r":180,"t":75},"movement":"c"},
            {"name":"Subculture specific content teams", "pc":{"r":180,"t":75},"movement":"c"},
            {"name":"CG in Europe", "pc":{"r":180,"t":75},"movement":"c"},
            {"name":"CG in BRIC", "pc":{"r":180,"t":75},"movement":"c"},
            {"name":"CG in TIMP", "pc":{"r":180,"t":75},"movement":"c"}     
        ]
    },
    { "quadrant": "Technologies",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#B70062",
        "items" : [
            {"name":"Responsive Mobile Web First", "pc":{"r":70,"t":225},"movement":"t", "blipSize":400, "url":"http://en.wikipedia.org/wiki/Responsive_web_design"},   
            {"name":"HTML5", "pc":{"r":390,"t":250},"movement":"c"},   
            {"name":"Ruby on Rails", "pc":{"r":390,"t":230},"movement":"c"},   
            {"name":"Chef", "pc":{"r":390,"t":190},"movement":"c"},   
            {"name":"Docker", "pc":{"r":290,"t":265},"movement":"c"},   
            {"name":"Ember.js", "pc":{"r":290,"t":255},"movement":"c"},
            {"name":"Backbone.js", "pc":{"r":290,"t":255},"movement":"c"}, 
            {"name":"Together.js", "pc":{"r":290,"t":255},"movement":"c", "url":"https://togetherjs.com/"}, 
            {"name":"Node.js", "pc":{"r":290,"t":255},"movement":"c"},
            {"name":"Cucumber + RSpec", "pc":{"r":290,"t":255},"movement":"c"},        
            {"name":"IE7/IE8 End of Life", "pc":{"r":380,"t":220},"movement":"t"},
            {"name":"MySQL->PostgreSQL", "pc":{"r":390,"t":225},"movement":"t"},
            {"name":"MongoDB->PostgreSQL", "pc":{"r":390,"t":225},"movement":"t"},
            {"name":"Solr->ElasticSearch", "pc":{"r":390,"t":225},"movement":"c"},
            {"name":"PhoneGap", "pc":{"r":290,"t":255},"movement":"c"},
            {"name":"iOS native", "pc":{"r":290,"t":255},"movement":"c"},
            {"name":"Android native", "pc":{"r":290,"t":255},"movement":"c"},


        ]
    },
    { "quadrant": "IT Infra & ops",
        "color" : "#fce506",
        "left"  : (w-220),
        "top" :   (h/2 + 18),
        "items" : [ 
            {"name":"Linode -> AWS", "pc":{"r":290,"t":355},"movement":"c", "color": "#646966"},   
            {"name":"iNetU -> AWS", "pc":{"r":270,"t":330},"movement":"c", "color": "#646966"},   
            {"name":"AWS Dedicated VPC", "pc":{"r":290,"t":320},"movement":"c", "color": "#646966"},   
            {"name":"Heroku -> AWS", "pc":{"r":260,"t":310},"movement":"c", "color": "#646966"},
            {"name":"Cloudability cost tracking", "note": "<a href='https://cloudability.com/'>Cloudability</a> reports on cloud spending costs.",
                "pc":{"r":150,"t":310},"movement":"c", "color": "#646966"},   
            {"name":"Tarsnap offsite backups", "pc":{"r":250,"t":275},"movement":"c", "color": "#646966"},   
            {"name":"Single Sign On", "pc":{"r":190,"t":340},"movement":"c", "color": "#646966"},   
            {"name":"LastPass", "pc":{"r":190,"t":280},"movement":"c", "color": "#646966"},
            {"name":"Box.com -> Dropbox", "pc":{"r":90,"t":355},"movement":"c", "color": "#646966"},
            {"name":"Remove JungleDisk", "pc":{"r":90,"t":355},"movement":"c", "color": "#646966"},   
            {"name":"Pipedrive", "pc":{"r":90,"t":330},"movement":"c", "color": "#646966"},   
            {"name":"Backupify, Tarsnap, CrashPlan", "pc":{"r":30,"t":282},"movement":"c", "color": "#646966"},
            {"name":"ClickTime -> Harvest", "pc":{"r":30,"t":282},"movement":"c", "color": "#646966"},
            {"name":"Authorize.net + Recur.ly", "pc":{"r":30,"t":282},"movement":"c", "color": "#646966"},
            {"name":"Sentry + Sensu + Graphite monitoring", "pc":{"r":30,"t":282},"movement":"c", "color": "#646966"},
            {"name":"Configuration Management", "pc":{"r":30,"t":282},"movement":"c", "color": "#646966"},
            {"name":"PagerDuty / OnCall", "pc":{"r":190,"t":280},"movement":"c", "color": "#646966"}

        ]
    }
];
