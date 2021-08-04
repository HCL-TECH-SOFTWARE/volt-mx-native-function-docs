Ext.data.JsonP.android_app_job_JobParameters({"tagname":"class","name":"android.app.job.JobParameters","autodetected":{},"files":[{"filename":"JobParameters.js","href":"JobParameters.html#android-app-job-JobParameters"}],"extends":"java.lang.Object","members":[{"name":"CREATOR","tagname":"property","owner":"android.app.job.JobParameters","id":"property-CREATOR","meta":{}},{"name":"completeWork","tagname":"method","owner":"android.app.job.JobParameters","id":"method-completeWork","meta":{}},{"name":"dequeueWork","tagname":"method","owner":"android.app.job.JobParameters","id":"method-dequeueWork","meta":{}},{"name":"describeContents","tagname":"method","owner":"android.app.job.JobParameters","id":"method-describeContents","meta":{}},{"name":"getClipData","tagname":"method","owner":"android.app.job.JobParameters","id":"method-getClipData","meta":{}},{"name":"getClipGrantFlags","tagname":"method","owner":"android.app.job.JobParameters","id":"method-getClipGrantFlags","meta":{}},{"name":"getExtras","tagname":"method","owner":"android.app.job.JobParameters","id":"method-getExtras","meta":{}},{"name":"getJobId","tagname":"method","owner":"android.app.job.JobParameters","id":"method-getJobId","meta":{}},{"name":"getNetwork","tagname":"method","owner":"android.app.job.JobParameters","id":"method-getNetwork","meta":{}},{"name":"getTransientExtras","tagname":"method","owner":"android.app.job.JobParameters","id":"method-getTransientExtras","meta":{}},{"name":"getTriggeredContentAuthorities","tagname":"method","owner":"android.app.job.JobParameters","id":"method-getTriggeredContentAuthorities","meta":{}},{"name":"getTriggeredContentUris","tagname":"method","owner":"android.app.job.JobParameters","id":"method-getTriggeredContentUris","meta":{}},{"name":"isOverrideDeadlineExpired","tagname":"method","owner":"android.app.job.JobParameters","id":"method-isOverrideDeadlineExpired","meta":{}},{"name":"writeToParcel","tagname":"method","owner":"android.app.job.JobParameters","id":"method-writeToParcel","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-android.app.job.JobParameters","short_doc":"implements android.os.Parcelable\n\nContains the parameters used to configure/identify your job. ...","classIcon":"icon-class","superclasses":["java.lang.Object"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>java.lang.Object<div class='subclass '><strong>android.app.job.JobParameters</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/JobParameters.html#android-app-job-JobParameters' target='_blank'>JobParameters.js</a></div></pre><div class='doc-contents'><p>implements android.os.Parcelable</p>\n\n<p>Contains the parameters used to configure/identify your job. You do not create this object\n yourself, instead it is handed in to your application by the System.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-CREATOR' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.job.JobParameters'>android.app.job.JobParameters</span><br/><a href='source/JobParameters.html#android-app-job-JobParameters-property-CREATOR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.job.JobParameters-property-CREATOR' class='name expandable'>CREATOR</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;null&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-completeWork' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.job.JobParameters'>android.app.job.JobParameters</span><br/><a href='source/JobParameters.html#android-app-job-JobParameters-method-completeWork' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.job.JobParameters-method-completeWork' class='name expandable'>completeWork</a>( <span class='pre'>work</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Report the completion of executing a android.app.job.JobWorkItem previously returned by\n dequeueWork(). ...</div><div class='long'><p>Report the completion of executing a <a href=\"#!/api/android.app.job.JobWorkItem\" rel=\"android.app.job.JobWorkItem\" class=\"docClass\">android.app.job.JobWorkItem</a> previously returned by\n <a href=\"#!/api/android.app.job.JobParameters-method-dequeueWork\" rel=\"android.app.job.JobParameters-method-dequeueWork\" class=\"docClass\">dequeueWork</a>().  This tells the system you are done with the\n work associated with that item, so it will not be returned again.  Note that if this\n is the last work in the queue, completing it here will <em>not</em> finish the overall\n job -- for that to happen, you still need to call <a href=\"#!/api/android.app.job.JobParameters-method-dequeueWork\" rel=\"android.app.job.JobParameters-method-dequeueWork\" class=\"docClass\">dequeueWork</a>()\n again.</p>\n\n<p> <p>If you are enqueueing work into a job, you must call this method for each piece\n of work you process.  Do <em>not</em> call\n boolean)\n or else you can lose work in your queue.</p></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>work</span> : Object {JobWorkItem}<div class='sub-desc'><p>The work you have completed processing, as previously returned by\n dequeueWork()</p>\n</div></li></ul></div></div></div><div id='method-dequeueWork' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.job.JobParameters'>android.app.job.JobParameters</span><br/><a href='source/JobParameters.html#android-app-job-JobParameters-method-dequeueWork' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.job.JobParameters-method-dequeueWork' class='name expandable'>dequeueWork</a>( <span class='pre'></span> ) : Object {android.app.job.JobWorkItem}<span class=\"signature\"></span></div><div class='description'><div class='short'>Dequeue the next pending android.app.job.JobWorkItem from these JobParameters associated with their\n currently runnin...</div><div class='long'><p>Dequeue the next pending <a href=\"#!/api/android.app.job.JobWorkItem\" rel=\"android.app.job.JobWorkItem\" class=\"docClass\">android.app.job.JobWorkItem</a> from these JobParameters associated with their\n currently running job.  Calling this method when there is no more work available and all\n previously dequeued work has been completed will result in the system taking care of\n stopping the job for you --\n you should not call boolean) yourself\n (otherwise you risk losing an upcoming JobWorkItem that is being enqueued at the same time).</p>\n\n<p> <p>Once you are done with the <a href=\"#!/api/android.app.job.JobWorkItem\" rel=\"android.app.job.JobWorkItem\" class=\"docClass\">android.app.job.JobWorkItem</a> returned by this method, you must call\n <a href=\"#!/api/android.app.job.JobParameters-method-completeWork\" rel=\"android.app.job.JobParameters-method-completeWork\" class=\"docClass\">completeWork</a>(JobWorkItem) with it to inform the system that you are done\n executing the work.  The job will not be finished until all dequeued work has been\n completed.  You do not, however, have to complete each returned work item before deqeueing\n the next one -- you can use <a href=\"#!/api/android.app.job.JobParameters-method-dequeueWork\" rel=\"android.app.job.JobParameters-method-dequeueWork\" class=\"docClass\">dequeueWork</a>() multiple times before completing\n previous work if you want to process work in parallel, and you can complete the work\n in whatever order you want.</p></p>\n\n<p> <p>If the job runs to the end of its available time period before all work has been\n completed, it will stop as normal.  You should return true from\n android.app.job.JobService.onStopJob(JobParameters) in order to have the job rescheduled, and by\n doing so any pending as well as remaining uncompleted work will be re-queued\n for the next time the job runs.</p></p>\n\n<p> <p>This example shows how to construct a JobService that will serially dequeue and\n process work that is available for it:</p></p>\n\n<p> {@sample development/samples/ApiDemos/src/com/example/android/apis/app/JobWorkService.java\n      service}</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.app.job.JobWorkItem}</span><div class='sub-desc'><p>Returns a new JobWorkItem if there is one pending, otherwise null.\n If null is returned, the system will also stop the job if all work has also been completed.\n (This means that for correct operation, you must always call dequeueWork() after you have\n completed other work, to check either for more work or allow the system to stop the job.)</p>\n</div></li></ul></div></div></div><div id='method-describeContents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.job.JobParameters'>android.app.job.JobParameters</span><br/><a href='source/JobParameters.html#android-app-job-JobParameters-method-describeContents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.job.JobParameters-method-describeContents' class='name expandable'>describeContents</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getClipData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.job.JobParameters'>android.app.job.JobParameters</span><br/><a href='source/JobParameters.html#android-app-job-JobParameters-method-getClipData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.job.JobParameters-method-getClipData' class='name expandable'>getClipData</a>( <span class='pre'></span> ) : Object {android.content.ClipData}<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.content.ClipData}</span><div class='sub-desc'><p>The clip you passed in when constructing this job with\n int). Will be null\n if it was not set.</p>\n</div></li></ul></div></div></div><div id='method-getClipGrantFlags' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.job.JobParameters'>android.app.job.JobParameters</span><br/><a href='source/JobParameters.html#android-app-job-JobParameters-method-getClipGrantFlags' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.job.JobParameters-method-getClipGrantFlags' class='name expandable'>getClipGrantFlags</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The clip grant flags you passed in when constructing this job with\n int). Will be 0\n if it was not set.</p>\n</div></li></ul></div></div></div><div id='method-getExtras' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.job.JobParameters'>android.app.job.JobParameters</span><br/><a href='source/JobParameters.html#android-app-job-JobParameters-method-getExtras' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.job.JobParameters-method-getExtras' class='name expandable'>getExtras</a>( <span class='pre'></span> ) : Object {android.os.PersistableBundle}<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.os.PersistableBundle}</span><div class='sub-desc'><p>The extras you passed in when constructing this job with\n android.app.job.JobInfo.Builder.setExtras(android.os.PersistableBundle). This will\n never be null. If you did not set any extras this will be an empty bundle.</p>\n</div></li></ul></div></div></div><div id='method-getJobId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.job.JobParameters'>android.app.job.JobParameters</span><br/><a href='source/JobParameters.html#android-app-job-JobParameters-method-getJobId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.job.JobParameters-method-getJobId' class='name expandable'>getJobId</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The unique id of this job, specified at creation time.</p>\n</div></li></ul></div></div></div><div id='method-getNetwork' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.job.JobParameters'>android.app.job.JobParameters</span><br/><a href='source/JobParameters.html#android-app-job-JobParameters-method-getNetwork' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.job.JobParameters-method-getNetwork' class='name expandable'>getNetwork</a>( <span class='pre'></span> ) : Object {android.net.Network}<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the network that should be used to perform any network requests\n for this job. ...</div><div class='long'><p>Return the network that should be used to perform any network requests\n for this job.\n <p>\n Devices may have multiple active network connections simultaneously, or\n they may not have a default network route at all. To correctly handle all\n situations like this, your job should always use the network returned by\n this method instead of implicitly using the default network route.\n <p>\n Note that the system may relax the constraints you originally requested,\n such as allowing a <a href=\"#!/api/android.app.job.JobInfo-property-NETWORK_TYPE_UNMETERED\" rel=\"android.app.job.JobInfo-property-NETWORK_TYPE_UNMETERED\" class=\"docClass\">android.app.job.JobInfo.NETWORK_TYPE_UNMETERED</a> job to run over\n a metered network when there is a surplus of metered data available.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.net.Network}</span><div class='sub-desc'><p>the network that should be used to perform any network requests\n         for this job, or {@code null} if this job didn't set any required\n         network type.\n@see JobInfo.Builder#setRequiredNetworkType(int)</p>\n</div></li></ul></div></div></div><div id='method-getTransientExtras' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.job.JobParameters'>android.app.job.JobParameters</span><br/><a href='source/JobParameters.html#android-app-job-JobParameters-method-getTransientExtras' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.job.JobParameters-method-getTransientExtras' class='name expandable'>getTransientExtras</a>( <span class='pre'></span> ) : Object {android.os.Bundle}<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object {android.os.Bundle}</span><div class='sub-desc'><p>The transient extras you passed in when constructing this job with\n android.app.job.JobInfo.Builder.setTransientExtras(android.os.Bundle). This will\n never be null. If you did not set any extras this will be an empty bundle.</p>\n</div></li></ul></div></div></div><div id='method-getTriggeredContentAuthorities' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.job.JobParameters'>android.app.job.JobParameters</span><br/><a href='source/JobParameters.html#android-app-job-JobParameters-method-getTriggeredContentAuthorities' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.job.JobParameters-method-getTriggeredContentAuthorities' class='name expandable'>getTriggeredContentAuthorities</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>For jobs with android.app.job.JobInfo.Builder.addTriggerContentUri set, this\n reports which content authorities have ...</div><div class='long'><p>For jobs with <a href=\"#!/api/android.app.job.JobInfo.Builder-method-addTriggerContentUri\" rel=\"android.app.job.JobInfo.Builder-method-addTriggerContentUri\" class=\"docClass\">android.app.job.JobInfo.Builder.addTriggerContentUri</a> set, this\n reports which content authorities have triggered the job.  It will only be null if no\n authorities have triggered it -- that is, the job executed for some other reason, such\n as a deadline expiring.  If this is non-null, you can use <a href=\"#!/api/android.app.job.JobParameters-method-getTriggeredContentUris\" rel=\"android.app.job.JobParameters-method-getTriggeredContentUris\" class=\"docClass\">getTriggeredContentUris</a>()\n to retrieve the details of which URIs changed (as long as that has not exceeded the maximum\n number it can reported).</p>\n</div></div></div><div id='method-getTriggeredContentUris' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.job.JobParameters'>android.app.job.JobParameters</span><br/><a href='source/JobParameters.html#android-app-job-JobParameters-method-getTriggeredContentUris' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.job.JobParameters-method-getTriggeredContentUris' class='name expandable'>getTriggeredContentUris</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>For jobs with android.app.job.JobInfo.Builder.addTriggerContentUri set, this\n reports which URIs have triggered the job. ...</div><div class='long'><p>For jobs with <a href=\"#!/api/android.app.job.JobInfo.Builder-method-addTriggerContentUri\" rel=\"android.app.job.JobInfo.Builder-method-addTriggerContentUri\" class=\"docClass\">android.app.job.JobInfo.Builder.addTriggerContentUri</a> set, this\n reports which URIs have triggered the job.  This will be null if either no URIs have\n triggered it (it went off due to a deadline or other reason), or the number of changed\n URIs is too large to report.  Whether or not the number of URIs is too large, you can\n always use <a href=\"#!/api/android.app.job.JobParameters-method-getTriggeredContentAuthorities\" rel=\"android.app.job.JobParameters-method-getTriggeredContentAuthorities\" class=\"docClass\">getTriggeredContentAuthorities</a>() to determine whether the job was\n triggered due to any content changes and the authorities they are associated with.</p>\n</div></div></div><div id='method-isOverrideDeadlineExpired' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.job.JobParameters'>android.app.job.JobParameters</span><br/><a href='source/JobParameters.html#android-app-job-JobParameters-method-isOverrideDeadlineExpired' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.job.JobParameters-method-isOverrideDeadlineExpired' class='name expandable'>isOverrideDeadlineExpired</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>For jobs with android.app.job.JobInfo.Builder.setOverrideDeadline(long) set, this\n provides an easy way to tell wheth...</div><div class='long'><p>For jobs with android.app.job.JobInfo.Builder.setOverrideDeadline(long) set, this\n provides an easy way to tell whether the job is being executed due to the deadline\n expiring. Note: If the job is running because its deadline expired, it implies that its\n constraints will not be met.</p>\n</div></div></div><div id='method-writeToParcel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='android.app.job.JobParameters'>android.app.job.JobParameters</span><br/><a href='source/JobParameters.html#android-app-job-JobParameters-method-writeToParcel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/android.app.job.JobParameters-method-writeToParcel' class='name expandable'>writeToParcel</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});