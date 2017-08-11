jQuery(document).ready(function(){
	plugin_mute=localStorage.getItem("mute_plugin_update");
    if(plugin_mute=="true"){

    	jQuery('.update-plugins').hide();
		
		jQuery('.update').removeClass("update");

		jQuery('.plugin-update-tr').remove();
	}

	
});