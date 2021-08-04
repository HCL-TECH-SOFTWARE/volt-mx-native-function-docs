Ext.data.JsonP.android_annotation_BinderThread({"tagname":"class","name":"android.annotation.BinderThread","autodetected":{},"files":[{"filename":"BinderThread.js","href":"BinderThread.html#android-annotation-BinderThread"}],"members":[],"alternateClassNames":[],"aliases":{},"id":"class-android.annotation.BinderThread","short_doc":"implements java.lang.annotation.Annotation\n\n Denotes that the annotated method should only be called on the binder th...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/BinderThread.html#android-annotation-BinderThread' target='_blank'>BinderThread.js</a></div></pre><div class='doc-contents'><p>implements java.lang.annotation.Annotation</p>\n\n<p> Denotes that the annotated method should only be called on the binder thread.\n If the annotated element is a class, then all methods in the class should be called\n on the binder thread.\n <p>\n Example:</p>\n\n<pre><code>  &#64;BinderThread\n  public BeamShareData createBeamShareData() { ... }\n </code></pre>\n\n\n<p> {@hide}</p>\n</div><div class='members'></div></div>","meta":{}});