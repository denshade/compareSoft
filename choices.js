
function dofilter()
{
  var options = [
    {"name":"skype_basic_free","Dial_ins_must_install_client_software(not_a_plugin).":true,"Dial_ins_must_install_plugin_software.":false,"Host_must_install_client_software.":true,"Dial_ins_must_have_account.":true,"Dial_ins_support_Internet_Explorer.":false,"Dial_ins_support_Chrome.":false,"Dial_ins_support_Firefox.":false,"Dial_ins_support_Opera.":false,"Dial_ins_support_Edge.":false,"Iphone_App_availability.":true,"Android_App_availability.":true,"Hardware_helps_you_call_in_with_this_tool.":false,"Voice_Meeting_room_can_hold_up_to_25_ppl":true,"Group_Video_calling_can_hold_up_to_5_ppl":true,"Group_Video_calling_can_hold_up_to_10_ppl":true,"Group_Video_calling_can_hold_up_to_15_ppl":false,"Meeting_scheduling":false,"Meeting_recording":false,"Call_me,_no_pincodes,_call_the_number":false,"Telephone_dial-in.":true,"Telephone_dial-in_is_free_for_dial-in.":false,"Chat_function.":true,"Screensharing":true,"Share_files":true,"Drawing_tools.":false,"Hand_over_control.":false,"Works_without_a_camera":true},
    {"name":"gotomeeting_regular","Dial_ins_must_install_client_software(not_a_plugin).":false,"Dial_ins_must_install_plugin_software.":false,"Host_must_install_client_software.":false,"Dial_ins_must_have_account.":false,"Dial_ins_support_Internet_Explorer.":true,"Dial_ins_support_Chrome.":true,"Dial_ins_support_Firefox.":true,"Dial_ins_support_Opera.":false,"Dial_ins_support_Edge.":true,"Iphone_App_availability.":true,"Android_App_availability.":true,"Hardware_helps_you_call_in_with_this_tool.":true,"Voice_Meeting_room_can_hold_up_to_25_ppl":true,"Group_Video_calling_can_hold_up_to_5_ppl":true,"Group_Video_calling_can_hold_up_to_10_ppl":false,"Group_Video_calling_can_hold_up_to_15_ppl":false,"Meeting_scheduling":true,"Meeting_recording":true,"Call_me,_no_pincodes,_call_the_number":true,"Telephone_dial-in.":true,"Telephone_dial-in_is_free_for_dial-in.":true,"Chat_function.":true,"Screensharing":true,"Share_files":false,"Drawing_tools.":true,"Hand_over_control.":true,"Works_without_a_camera":true},
    {"name":"google_hangouts","Dial_ins_must_install_client_software(not_a_plugin).":false,"Dial_ins_must_install_plugin_software.":true,"Host_must_install_client_software.":true,"Dial_ins_must_have_account.":true,"Dial_ins_support_Internet_Explorer.":true,"Dial_ins_support_Chrome.":true,"Dial_ins_support_Firefox.":false,"Dial_ins_support_Opera.":false,"Dial_ins_support_Edge.":true,"Iphone_App_availability.":true,"Android_App_availability.":true,"Hardware_helps_you_call_in_with_this_tool.":true,"Voice_Meeting_room_can_hold_up_to_25_ppl":true,"Group_Video_calling_can_hold_up_to_5_ppl":true,"Group_Video_calling_can_hold_up_to_10_ppl":true,"Group_Video_calling_can_hold_up_to_15_ppl":false,"Meeting_scheduling":true,"Meeting_recording":false,"Call_me,_no_pincodes,_call_the_number":false,"Telephone_dial-in.":true,"Telephone_dial-in_is_free_for_dial-in.":false,"Chat_function.":true,"Screensharing":true,"Share_files":false,"Drawing_tools.":false,"Hand_over_control.":false,"Works_without_a_camera":true},
    {"name":"google_hangouts_for_business","Dial_ins_must_install_client_software(not_a_plugin).":false,"Dial_ins_must_install_plugin_software.":true,"Host_must_install_client_software.":true,"Dial_ins_must_have_account.":true,"Dial_ins_support_Internet_Explorer.":true,"Dial_ins_support_Chrome.":true,"Dial_ins_support_Firefox.":false,"Dial_ins_support_Opera.":false,"Dial_ins_support_Edge.":true,"Iphone_App_availability.":true,"Android_App_availability.":true,"Hardware_helps_you_call_in_with_this_tool.":true,"Voice_Meeting_room_can_hold_up_to_25_ppl":true,"Group_Video_calling_can_hold_up_to_5_ppl":true,"Group_Video_calling_can_hold_up_to_10_ppl":true,"Group_Video_calling_can_hold_up_to_15_ppl":false,"Meeting_scheduling":true,"Meeting_recording":false,"Call_me,_no_pincodes,_call_the_number":false,"Telephone_dial-in.":true,"Telephone_dial-in_is_free_for_dial-in.":false,"Chat_function.":true,"Screensharing":true,"Share_files":false,"Drawing_tools.":false,"Hand_over_control.":false,"Works_without_a_camera":true},
    {"name":"talky","Dial_ins_must_install_client_software(not_a_plugin).":false,"Dial_ins_must_install_plugin_software.":false,"Host_must_install_client_software.":false,"Dial_ins_must_have_account.":false,"Dial_ins_support_Internet_Explorer.":false,"Dial_ins_support_Chrome.":true,"Dial_ins_support_Firefox.":true,"Dial_ins_support_Opera.":true,"Dial_ins_support_Edge.":true,"Iphone_App_availability.":false,"Android_App_availability.":false,"Hardware_helps_you_call_in_with_this_tool.":false,"Voice_Meeting_room_can_hold_up_to_25_ppl":false,"Group_Video_calling_can_hold_up_to_5_ppl":true,"Group_Video_calling_can_hold_up_to_10_ppl":true,"Group_Video_calling_can_hold_up_to_15_ppl":true,"Meeting_scheduling":false,"Meeting_recording":false,"Call_me,_no_pincodes,_call_the_number":false,"Telephone_dial-in.":false,"Telephone_dial-in_is_free_for_dial-in.":false,"Chat_function.":false,"Screensharing":true,"Share_files":false,"Drawing_tools.":false,"Hand_over_control.":false,"Works_without_a_camera":false}];


  for (var i = 0; i < options.length; i++)
  {
    var option = options[i];
    var optionEl = $("#" + option["name"]);
    optionEl.removeClass("disabledProduct");

    for (var key in option) {
      if (option.hasOwnProperty(key) && key != "name") {
        if (!checkIfItemOK(key, option[key]))
        {
            optionEl.addClass("disabledProduct");
            console.log(option["name"] + " " + key);
            break;
        }
      }
    }

  }

}

function doFilterGeneric(options, checkFunction)
{
    for (var i = 0; i < options.length; i++)
    {
        var option = options[i];
        var optionEl = $("#" + option["name"]);
        optionEl.removeClass("disabledProduct");

        for (var key in option) {
            if (option.hasOwnProperty(key) && key != "name") {
                if (!checkFunction(key, option[key]))
                {
                    optionEl.addClass("disabledProduct");
                    console.log(option["name"] + " " + key);
                    break;
                }
            }
        }

    }
}

function dofilterRange()
{
  var options = [
      {"name":"skype_basic_free","Group_Video_nr_of_participants":"15"},
      {"name":"gotomeeting_regular","Group_Video_nr_of_participants":"10"},
      {"name":"google_hangouts","Group_Video_nr_of_participants":"10"},
      {"name":"google_hangouts_for_business","Group_Video_nr_of_participants":"10"},
      {"name":"talky","Group_Video_nr_of_participants":"15"}];

    doFilterGeneric(options, checkIfItemRangeOK);
}

function selectDefault(title, id)
{
str = '<select id="'+id + '" onChange="dofilter();">';
str += '<option value="1">must</option><option value="0">must not</option><option value="-1" selected="selected">dont care</option></select> ' + title + '<br/>';
  document.write(str);
}


function selectChoice(title, id, min, max, current)
{
  str = '<div data-role="main" class="ui-content">'+
      '<label for="points">'+title+':</label>'+
      '<input type="range" name="points" id="'+ id +'" value="' + current + '" min="' + min + '" max="' + max + '" onChange="dofilterRange();">'
  '</div>';
  document.write(str);
}

function checkIfItemRangeOK(DOMidOfSelect, optionAvailableInProduct)
{
    var e =  document.getElementById(DOMidOfSelect);
    if (e == null) throw "element with id " + DOMidOfSelect + " not found.";
    var userValue = parseInt(e.value);
    var optionAvailableInProduct = parseInt(optionAvailableInProduct);
    return (userValue < optionAvailableInProduct);
}

function checkIfItemOK(DOMidOfSelect, optionAvailableInProduct)
{
  var e = document.getElementById(DOMidOfSelect);
  var strUser = e.options[e.selectedIndex].value;
  if (strUser == -1) return true;
  if (strUser == 0 && optionAvailableInProduct) return false;
  if (strUser == 1 && !optionAvailableInProduct) return false;
  return true;
}
/*

Customer

MUST/MUST NOT/DON'T CARE
  1         0    -1
PRODUCT: YES/NO
           1 0
User must install client software.
C  P
-1 0: Product OK.
-1 1: Product OK.
0  0: Product OK.
0  1: Product NOK.
1  0: Product NOK.
1  1: Product OK.
*/
