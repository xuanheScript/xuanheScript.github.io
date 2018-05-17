webpackJsonp([72],{451:function(e,t){e.exports={content:["article",["p","A Slider component for selecting particular value in range, eg: controls the display brightness of the screen."],["h3","Rule"],["ul",["li",["p","By default, the minimum value in the left and maximum value in the right of ",["code","Silder"]," ."]],["li",["p","Generally ",["code","Slider"]," is positioned horizontally."]]],["h2","Common API"],["p","Support Web, React-Native."],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","min"],["td","Number"],["td","0"],["td","The minimum value the slider can slide to."]],["tr",["td","max"],["td","Number"],["td","100"],["td","The maximum value the slider can slide to."]],["tr",["td","step"],["td","Number or null"],["td","1"],["td","The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When ",["code","marks"]," no null, ",["code","step"]," can be ",["code","null"],"."]],["tr",["td","value"],["td","Number"],["td"],["td","The value of slider."]],["tr",["td","defaultValue"],["td","Number"],["td","0"],["td","The default value of slider."]],["tr",["td","disabled"],["td","Boolean"],["td","false"],["td","If true, the slider will not be interactable."]],["tr",["td","onChange"],["td","Function"],["td","Noop"],["td","Callback function that is called when the user changes the slider's value."]],["tr",["td","onAfterChange"],["td","Function"],["td","Noop"],["td","Fired when ",["code","ontouchend"]," is fired."]],["tr",["td","maximumTrackTintColor (",["code","iOS"],")"],["td","String"],["td",["code","#108ee9"]],["td","The color used for the track to the right of the button. Overrides the default blue gradient image on iOS. ( Also can custom theme to define color in web)"]],["tr",["td","minimumTrackTintColor (iOS)"],["td","String"],["td",["code","#ddd"]],["td","The color used for the track to the left of the button. Overrides the default blue gradient image on iOS. ( Also can custom theme to define color in web)"]],["tr",["td","marks (",["code","web only"],")"],["td","Object{Number:String}"],["td","{ }"],["td","Tick mark of Slider, type of key must be number, and must in closed interval min, max."]],["tr",["td","dots (",["code","web only"],")"],["td","Boolean"],["td","false"],["td","Whether the thumb can be dragged over tick only."]],["tr",["td","included (",["code","web only"],")"],["td","Boolean"],["td","true"],["td","Make effect when ",["code","marks"]," not null\uff0c",["code","true"]," means containment and ",["code","false"]," means coordinative"]],["tr",["td","minimumTrackStyle(",["code","web"],")"],["td","Object"],["td"],["td","The style used for the track to the left of the button.(",["code","will be deprecate, please use trackStyle instead"],")"]],["tr",["td","maximumTrackStyle(",["code","web"],")"],["td","Object"],["td"],["td","The style used for the track to the right of the button.\uff08",["code","will be deprecate, please use railStyle instead"],"\uff09"]],["tr",["td","handleStyle(",["code","web"],")"],["td","Object"],["td"],["td","The style used for handle."]],["tr",["td","trackStyle(",["code","web"],")"],["td","Object"],["td"],["td","The style used for the track to the left of the button."]],["tr",["td","railStyle(",["code","web"],")"],["td","Object"],["td"],["td","The style used for the track to the right of the button."]]]]],meta:{category:"Components",type:"Data Entry",title:"Slider",filename:"components/slider/index.en-US.md"}}}});