<html>
<head>
    <meta charset="utf-8">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="main.css">

    <script src="choices.js"></script>

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body onload="dofilter();">
<div id="container" class="container">
    <h1>Comparing teleconference tools</h1>
    <div class="panel panel-info">
        <div class="panel-heading">Date of publication period.</div>
        <div class="panel-body">2017 Q1</div>
    </div>
    <div>
        <div class="panel panel-info">
            <div class="panel-heading">Installation</div>
            <div class="panel-body" id="Installation">
                <script>
                    selectDefault("Dial ins must install client software(not a plugin).", "install_client_software", "Installation");//skype, no for gotomeeting, google hangouts: no
                    selectDefault("Dial ins must install a plugin software.", "install_client_software", "Installation");//skype: no, no for gotomeeting, google hangouts: yes
                    selectDefault("Host must install client software.", "install_host_software", "Installation");//skype, yes, gotomeeting: yes, google hangouts: no
                    selectDefault("Dial ins must have account.", "dialin_account", "Installation");//skype, yes, gotomeeting: no. google hangouts: yes
                </script>
                <hr>
                <script>
                    selectDefault("Dial ins support Internet Explorer.", "Dial-in_IE", "Installation");//skype:no, gotomeeting, google hangouts: yes
                    selectDefault("Dial ins support Chrome.", "Dial-in_chrome", "Installation");//skype:no, gotomeeting, google hangouts: yes
                    selectDefault("Dial ins support Firefox.", "Dial-in_firefox", "Installation");//skype:no, gotomeeting, google hangouts: no
                    selectDefault("Dial ins support Safari.", "Dial-in_safari", "Installation");//skype:no, gotomeeting, google hangouts: yes
                    selectDefault("Dial ins support Opera.", "Dial-in_opera", "Installation"); //skype:no,not gotomeeting, google hangouts: no
                    selectDefault("Dial ins support Edge.", "Dial-in_edge", "Installation"); //skype:no, gotomeeting, google hangouts: yes
                </script>
                <hr>
                <script>
                    selectDefault("Iphone App availability.", "iphone_app", "Installation"); //skype:yes gotomeeting:yes, google hangouts: yes
                    selectDefault("Android App availability.", "android_app", "Installation");//skype:yes gotomeeting:yes, google hangouts: yes
                </script>
                <hr>
                <script>
                    selectDefault("Integrated hardware: Hardware helps you call in with this tool.", "integrated_hardware", "Installation"); //skype:no, gotomeeting yes, google hangouts: yes

                </script>
            </div><!--end body-->
        </div><!--end panel-->

        <div>
            <div class="panel panel-info">
                <div class="panel-heading">Meeting room</div>
                <div class="panel-body" id="meeting">
                    <script>
                        selectDefault("Voice Meeting room can hold up to 25 ppl", "meetingroom_small", "meeting"); //Skype: yes, gotomeeting: yes, google hangouts: yes
                        selectDefault("Group Video calling can hold up to 5 ppl", "meetingroom_small", "meeting"); //Skype: yes, gotomeeting: yes, google hangouts: yes
                        selectDefault("Group Video calling can hold up to 10 ppl", "meetingroom_small", "meeting"); //Skype: yes, gotomeeting: no, google hangouts: yes
                        selectDefault("Group Video calling can hold up to 15 ppl", "meetingroom_small", "meeting"); //Skype: no, gotomeeting: no, google hangouts: no
                        selectDefault("Meeting scheduling", "meetingroom_schedule", "meeting"); //skype:no, gotomeeting: yes, hangout: yes via google+
                        selectDefault("Meeting recording", "meeting_record", "meeting"); //skype: no, gotomeeting: yes, hangout: no
                        selectDefault("Call me, no pincodes, call the number", "meeting_call_me", "meeting");// skype: no, gotomeeting: yes, hangout: no
                    </script>
                </div><!--end body-->
            </div><!--end panel-->


            <div>
                <div class="panel panel-info">
                    <div class="panel-heading">Functionality during the meeting</div>
                    <div class="panel-body" id="extrafunc">
                        <script>
                            selectDefault("Telephone dial-in.", "telephonedialin", "extrafunc"); //skype: yes, gotomeeting: yes, hangouts: yes.
                            selectDefault("Telephone dial-in is free for dial-in.", "telephonedialin_free_dialin", "extrafunc"); // skype: no, gotomeeting: yes, hangouts: no
                            selectDefault("Chat function.", "chatfunction", "extrafunc");  //skype: yes, gotomeeting:yes, hangouts:yes //Always yes => remove?
                            selectDefault("Screensharing.", "screen", "extrafunc"); //skype: yes, gotomeeting:yes,  hangouts:yes
                            selectDefault("Share files.", "share", "extrafunc"); //skype: yes, gotomeeting: no, hangouts: no(only images)
                            selectDefault("Drawing tools.", "drawing", "extrafunc"); //skype: no, gotomeeting: yes, hangouts:no
                            selectDefault("Hand over control.", "hand_over_control", "extrafunc"); // skype: no, gotomeeting: yes, hangout: no
                        </script>
                    </div><!--end body-->
                </div><!--end panel-->
            </div>

            <div>
                <div class="panel panel-success">
                    <div class="panel-heading">Potential solutions</div>
                    <div id="solutions" class="panel-body">
                        <div id="skype" class="solution">Skype basic (free)</div>
                        <div id="gotomeeting" class="solution">Goto meeting regular</div>
                        <div id="googlehangouts"  class="solution"> Google hangouts.</div>
                        <div id="googlehangoutsbusiness"  class="solution"> Google hangouts through google hangouts for business.</div>
                        <div id="talky"  class="solution">Talky.</div>
                    </div>
                </div>
            </div>

</body>
</html>
