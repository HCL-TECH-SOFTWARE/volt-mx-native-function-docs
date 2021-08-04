Ext.data.JsonP.android_media_ImageWriter_OnImageReleasedListener({"tagname":"class","name":"android.media.ImageWriter.OnImageReleasedListener","autodetected":{},"files":[{"filename":"OnImageReleasedListener.js","href":"OnImageReleasedListener.html#android-media-ImageWriter-OnImageReleasedListener"}],"members":[{"name":"onImageReleased","tagname":"method","owner":"android.media.ImageWriter.OnImageReleasedListener","id":"method-onImageReleased","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.media.ImageWriter.OnImageReleasedListener","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/OnImageReleasedListener.html#android-media-ImageWriter-OnImageReleasedListener' target='_blank'>OnImageReleasedListener.js</a></div></pre><div class='doc-contents'><p>ImageWriter callback interface, used to to asynchronously notify the\n application of various ImageWriter events.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-onImageReleased' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.media.ImageWriter.OnImageReleasedListener'>android.media.ImageWriter.OnImageReleasedListener</span><br/><a href='source/OnImageReleasedListener.html#android-media-ImageWriter-OnImageReleasedListener-method-onImageReleased' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.media.ImageWriter.OnImageReleasedListener-method-onImageReleased' class='name expandable'>onImageReleased</a>( <span class='pre'>writer</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Callback that is called when an input Image is released back to\n ImageWriter after the data consumption. ...</div><div class='long'><p>\n Callback that is called when an input Image is released back to\n ImageWriter after the data consumption.\n </p>\n\n\n<p> <p>\n The client can use this callback to be notified that an input Image\n has been consumed and released by the downstream consumer. More\n specifically, this callback will be fired for below cases:\n <li>The application dequeues an input Image via the\n <a href=\"#!/api/android.media.ImageWriter-method-dequeueInputImage\" rel=\"android.media.ImageWriter-method-dequeueInputImage\" class=\"docClass\">dequeueInputImage()</a> method,\n uses it, and then queues it back to this ImageWriter via the\n <a href=\"#!/api/android.media.ImageWriter-method-queueInputImage\" rel=\"android.media.ImageWriter-method-queueInputImage\" class=\"docClass\">queueInputImage()</a> method. After\n the downstream consumer uses and releases this image to this\n ImageWriter, this callback will be fired. This image will be\n available to be dequeued after this callback.</li>\n <li>The application obtains an Image from some other component (e.g.\n an <a href=\"#!/api/android.media.ImageReader\" rel=\"android.media.ImageReader\" class=\"docClass\">android.media.ImageReader</a>), uses it, and then queues it to this\n ImageWriter via <a href=\"#!/api/android.media.ImageWriter-method-queueInputImage\" rel=\"android.media.ImageWriter-method-queueInputImage\" class=\"docClass\">queueInputImage()</a>.\n After the downstream consumer uses and releases this image to this\n ImageWriter, this callback will be fired.</li>\n </p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>writer</span> : Object {ImageWriter}<div class='sub-desc'><p>the ImageWriter the callback is associated with.\n@see ImageWriter\n@see Image</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});