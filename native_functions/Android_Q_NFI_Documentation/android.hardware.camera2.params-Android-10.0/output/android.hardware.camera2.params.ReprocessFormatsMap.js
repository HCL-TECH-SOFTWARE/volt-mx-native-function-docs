Ext.data.JsonP.android_hardware_camera2_params_ReprocessFormatsMap({"tagname":"class","name":"android.hardware.camera2.params.ReprocessFormatsMap","autodetected":{},"files":[{"filename":"ReprocessFormatsMap.js","href":"ReprocessFormatsMap.html#android-hardware-camera2-params-ReprocessFormatsMap"}],"extends":"java.lang.Object","hide":true,"members":[{"name":"equals","tagname":"method","owner":"android.hardware.camera2.params.ReprocessFormatsMap","id":"method-equals","meta":{}},{"name":"getInputs","tagname":"method","owner":"android.hardware.camera2.params.ReprocessFormatsMap","id":"method-getInputs","meta":{}},{"name":"getOutputs","tagname":"method","owner":"android.hardware.camera2.params.ReprocessFormatsMap","id":"method-getOutputs","meta":{}},{"name":"hashCode","tagname":"method","owner":"android.hardware.camera2.params.ReprocessFormatsMap","id":"method-hashCode","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.hardware.camera2.params.ReprocessFormatsMap","short_doc":"Immutable class to store the input to output formats\n map to be used for with\n camera image reprocessing. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.hardware.camera2.params.ReprocessFormatsMap</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ReprocessFormatsMap.html#android-hardware-camera2-params-ReprocessFormatsMap' target='_blank'>ReprocessFormatsMap.js</a></div></pre><div class='doc-contents'><p>Immutable class to store the input to output formats\n map to be used for with\n camera image reprocessing.</p>\n\n<p> <p>\n The mapping of image formats that are supported by this camera device for input streams,\n to their corresponding output formats.</p></p>\n\n<p> <p>\n Attempting to configure an input stream with output streams not listed as available in this map\n is not valid.\n </p></p>\n\n<p> @see CameraCharacteristics#SCALER_AVAILABLE_INPUT_OUTPUT_FORMATS_MAP\n @see CameraCharacteristics#SCALER_AVAILABLE_STREAM_CONFIGURATIONS</p>\n\n<p> <!-- hide this until we expose input streams through public API --></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-equals' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.camera2.params.ReprocessFormatsMap'>android.hardware.camera2.params.ReprocessFormatsMap</span><br/><a href='source/ReprocessFormatsMap.html#android-hardware-camera2-params-ReprocessFormatsMap-method-equals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.camera2.params.ReprocessFormatsMap-method-equals' class='name expandable'>equals</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check if this android.hardware.camera2.params.ReprocessFormatsMap is equal to another\n android.hardware.camera2.param...</div><div class='long'><p>Check if this <a href=\"#!/api/android.hardware.camera2.params.ReprocessFormatsMap\" rel=\"android.hardware.camera2.params.ReprocessFormatsMap\" class=\"docClass\">android.hardware.camera2.params.ReprocessFormatsMap</a> is equal to another\n <a href=\"#!/api/android.hardware.camera2.params.ReprocessFormatsMap\" rel=\"android.hardware.camera2.params.ReprocessFormatsMap\" class=\"docClass\">android.hardware.camera2.params.ReprocessFormatsMap</a>.</p>\n\n<p> <p>These two objects are only equal if and only if each of the respective elements is equal.\n </p></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>{@code true} if the objects were equal, {@code false} otherwise</p>\n</div></li></ul></div></div></div><div id='method-getInputs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.camera2.params.ReprocessFormatsMap'>android.hardware.camera2.params.ReprocessFormatsMap</span><br/><a href='source/ReprocessFormatsMap.html#android-hardware-camera2-params-ReprocessFormatsMap-method-getInputs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.camera2.params.ReprocessFormatsMap-method-getInputs' class='name expandable'>getInputs</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Get a list of all input image formats that can be used to reprocess an input\n stream into an output stream. ...</div><div class='long'><p>Get a list of all input image formats that can be used to reprocess an input\n stream into an output stream.</p>\n\n<p> <p>Use this input format to look up the available output formats with <a href=\"#!/api/android.hardware.camera2.params.ReprocessFormatsMap-method-getOutputs\" rel=\"android.hardware.camera2.params.ReprocessFormatsMap-method-getOutputs\" class=\"docClass\">getOutputs</a>.\n </p></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>an array of inputs (possibly empty, but never {@code null})\n@see ImageFormat\n@see <a href=\"#!/api/android.hardware.camera2.params.ReprocessFormatsMap-method-getOutputs\" rel=\"android.hardware.camera2.params.ReprocessFormatsMap-method-getOutputs\" class=\"docClass\">getOutputs</a></p>\n</div></li></ul></div></div></div><div id='method-getOutputs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.camera2.params.ReprocessFormatsMap'>android.hardware.camera2.params.ReprocessFormatsMap</span><br/><a href='source/ReprocessFormatsMap.html#android-hardware-camera2-params-ReprocessFormatsMap-method-getOutputs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.camera2.params.ReprocessFormatsMap-method-getOutputs' class='name expandable'>getOutputs</a>( <span class='pre'>format</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the list of output formats that can be reprocessed into from the input {@code format}. ...</div><div class='long'><p>Get the list of output formats that can be reprocessed into from the input {@code format}.</p>\n\n<p> <p>The input {@code format} must be one of the formats returned by <a href=\"#!/api/android.hardware.camera2.params.ReprocessFormatsMap-method-getInputs\" rel=\"android.hardware.camera2.params.ReprocessFormatsMap-method-getInputs\" class=\"docClass\">getInputs</a>.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>format</span> : Number<div class='sub-desc'><p>an input format</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>list of output image formats\n@see ImageFormat\n@see <a href=\"#!/api/android.hardware.camera2.params.ReprocessFormatsMap-method-getInputs\" rel=\"android.hardware.camera2.params.ReprocessFormatsMap-method-getInputs\" class=\"docClass\">getInputs</a></p>\n</div></li></ul></div></div></div><div id='method-hashCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.hardware.camera2.params.ReprocessFormatsMap'>android.hardware.camera2.params.ReprocessFormatsMap</span><br/><a href='source/ReprocessFormatsMap.html#android-hardware-camera2-params-ReprocessFormatsMap-method-hashCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.hardware.camera2.params.ReprocessFormatsMap-method-hashCode' class='name expandable'>hashCode</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>{@inheritDoc} ...</div><div class='long'><p>{@inheritDoc}</p>\n</div></div></div></div></div></div></div>","meta":{}});