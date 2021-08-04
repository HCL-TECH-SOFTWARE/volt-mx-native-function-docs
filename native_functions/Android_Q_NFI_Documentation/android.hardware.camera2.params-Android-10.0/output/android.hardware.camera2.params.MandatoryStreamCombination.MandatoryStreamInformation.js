Ext.data.JsonP.android_hardware_camera2_params_MandatoryStreamCombination_MandatoryStreamInformation({"tagname":"class","name":"android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation","autodetected":{},"files":[{"filename":"MandatoryStreamInformation.js","href":"MandatoryStreamInformation.html#android-hardware-camera2-params-MandatoryStreamCombination-MandatoryStreamInformation"}],"extends":"java.lang.Object","members":[{"name":"equals","tagname":"method","owner":"android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation","id":"method-equals","meta":{}},{"name":"getAvailableSizes","tagname":"method","owner":"android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation","id":"method-getAvailableSizes","meta":{}},{"name":"getFormat","tagname":"method","owner":"android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation","id":"method-getFormat","meta":{}},{"name":"hashCode","tagname":"method","owner":"android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation","id":"method-hashCode","meta":{}},{"name":"isInput","tagname":"method","owner":"android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation","id":"method-isInput","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/MandatoryStreamInformation.html#android-hardware-camera2-params-MandatoryStreamCombination-MandatoryStreamInformation' target='_blank'>MandatoryStreamInformation.js</a></div></pre><div class='doc-contents'><p>Immutable class to store available mandatory stream information.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-equals' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation'>android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation</span><br/><a href='source/MandatoryStreamInformation.html#android-hardware-camera2-params-MandatoryStreamCombination-MandatoryStreamInformation-method-equals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation-method-equals' class='name expandable'>equals</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check if this android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation is equal to anoth...</div><div class='long'><p>Check if this <a href=\"#!/api/android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation\" rel=\"android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation\" class=\"docClass\">android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation</a> is equal to another\n <a href=\"#!/api/android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation\" rel=\"android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation\" class=\"docClass\">android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation</a>.</p>\n\n<p> <p>Two vectors are only equal if and only if each of the respective elements is\n equal.</p></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>{@code true} if the objects were equal, {@code false} otherwise</p>\n</div></li></ul></div></div></div><div id='method-getAvailableSizes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation'>android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation</span><br/><a href='source/MandatoryStreamInformation.html#android-hardware-camera2-params-MandatoryStreamCombination-MandatoryStreamInformation-method-getAvailableSizes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation-method-getAvailableSizes' class='name expandable'>getAvailableSizes</a>( <span class='pre'></span> ) : Object {java.util.List}<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the list of available sizes for this mandatory stream. ...</div><div class='long'><p>Return the list of available sizes for this mandatory stream.</p>\n\n<p> <p>Per documented guideline the largest\n resolution in the result will be tested and guaranteed to work. If clients want to use\n smaller sizes, then the resulting\n <a href=\"#!/api/android.hardware.camera2.params.SessionConfiguration\" rel=\"android.hardware.camera2.params.SessionConfiguration\" class=\"docClass\">session configuration</a> can\n be tested either by calling CameraDevice.createCaptureSession or\n CameraDevice.isSessionConfigurationSupported.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {java.util.List}</span><div class='sub-desc'><p>non-modifiable ascending list of available sizes.</p>\n</div></li></ul></div></div></div><div id='method-getFormat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation'>android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation</span><br/><a href='source/MandatoryStreamInformation.html#android-hardware-camera2-params-MandatoryStreamCombination-MandatoryStreamInformation-method-getFormat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation-method-getFormat' class='name expandable'>getFormat</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieve the mandatory stream {@code format}. ...</div><div class='long'><p>Retrieve the mandatory stream {@code format}.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>integer format.</p>\n</div></li></ul></div></div></div><div id='method-hashCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation'>android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation</span><br/><a href='source/MandatoryStreamInformation.html#android-hardware-camera2-params-MandatoryStreamCombination-MandatoryStreamInformation-method-hashCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation-method-hashCode' class='name expandable'>hashCode</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>{@inheritDoc} ...</div><div class='long'><p>{@inheritDoc}</p>\n</div></div></div><div id='method-isInput' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation'>android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation</span><br/><a href='source/MandatoryStreamInformation.html#android-hardware-camera2-params-MandatoryStreamCombination-MandatoryStreamInformation-method-isInput' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.camera2.params.MandatoryStreamCombination.MandatoryStreamInformation-method-isInput' class='name expandable'>isInput</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Confirms whether or not this is an input stream. ...</div><div class='long'><p>Confirms whether or not this is an input stream.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true in case the stream is input, false otherwise.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});