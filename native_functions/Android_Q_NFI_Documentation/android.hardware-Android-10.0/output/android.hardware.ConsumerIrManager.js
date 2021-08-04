Ext.data.JsonP.android_hardware_ConsumerIrManager({"tagname":"class","name":"android.hardware.ConsumerIrManager","autodetected":{},"files":[{"filename":"ConsumerIrManager.js","href":"ConsumerIrManager.html#android-hardware-ConsumerIrManager"}],"extends":"java.lang.Object","members":[{"name":"getCarrierFrequencies","tagname":"method","owner":"android.hardware.ConsumerIrManager","id":"method-getCarrierFrequencies","meta":{}},{"name":"hasIrEmitter","tagname":"method","owner":"android.hardware.ConsumerIrManager","id":"method-hasIrEmitter","meta":{}},{"name":"transmit","tagname":"method","owner":"android.hardware.ConsumerIrManager","id":"method-transmit","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.hardware.ConsumerIrManager","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.hardware.ConsumerIrManager</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ConsumerIrManager.html#android-hardware-ConsumerIrManager' target='_blank'>ConsumerIrManager.js</a></div></pre><div class='doc-contents'><p>Class that operates consumer infrared on the device.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getCarrierFrequencies' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.ConsumerIrManager'>android.hardware.ConsumerIrManager</span><br/><a href='source/ConsumerIrManager.html#android-hardware-ConsumerIrManager-method-getCarrierFrequencies' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.ConsumerIrManager-method-getCarrierFrequencies' class='name expandable'>getCarrierFrequencies</a>( <span class='pre'></span> ) : Object {android.hardware.ConsumerIrManager.CarrierFrequencyRange}<span class=\"signature\"></span></div><div class='description'><div class='short'>Query the infrared transmitter's supported carrier frequencies ...</div><div class='long'><p>Query the infrared transmitter's supported carrier frequencies</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.hardware.ConsumerIrManager.CarrierFrequencyRange}</span><div class='sub-desc'><p>an array of\n <a href=\"#!/api/android.hardware.ConsumerIrManager.CarrierFrequencyRange\" rel=\"android.hardware.ConsumerIrManager.CarrierFrequencyRange\" class=\"docClass\">android.hardware.ConsumerIrManager.CarrierFrequencyRange</a>\n objects representing the ranges that the transmitter can support, or\n null if there was an error communicating with the Consumer IR Service.</p>\n</div></li></ul></div></div></div><div id='method-hasIrEmitter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.ConsumerIrManager'>android.hardware.ConsumerIrManager</span><br/><a href='source/ConsumerIrManager.html#android-hardware-ConsumerIrManager-method-hasIrEmitter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.ConsumerIrManager-method-hasIrEmitter' class='name expandable'>hasIrEmitter</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check whether the device has an infrared emitter. ...</div><div class='long'><p>Check whether the device has an infrared emitter.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the device has an infrared emitter, else false.</p>\n</div></li></ul></div></div></div><div id='method-transmit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.ConsumerIrManager'>android.hardware.ConsumerIrManager</span><br/><a href='source/ConsumerIrManager.html#android-hardware-ConsumerIrManager-method-transmit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.ConsumerIrManager-method-transmit' class='name expandable'>transmit</a>( <span class='pre'>carrierFrequency, pattern</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Transmit an infrared pattern\n \n This method is synchronous; when it returns the pattern has\n been transmitted. ...</div><div class='long'><p>Transmit an infrared pattern\n <p>\n This method is synchronous; when it returns the pattern has\n been transmitted. Only patterns shorter than 2 seconds will\n be transmitted.\n </p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>carrierFrequency</span> : Number<div class='sub-desc'><p>The IR carrier frequency in Hertz.</p>\n</div></li><li><span class='pre'>pattern</span> : Object {int[]}<div class='sub-desc'><p>The alternating on/off pattern in microseconds to transmit.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});