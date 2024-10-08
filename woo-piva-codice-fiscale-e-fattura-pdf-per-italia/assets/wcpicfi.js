

jQuery(document).ready(function($) {
	//wc3.4.0 fix
	jQuery('.woocommerce #billing_invoice_type_field label span.optional').remove();
	jQuery('.woocommerce #billing_piva_field label span.optional').remove();
	jQuery('.woocommerce #billing_cf_field label span.optional').remove();
    
    // check IT country remove field from checkout
    jQuery('#billing_country').on('change',function(){
	    if(jQuery(this).val() != 'IT'){
		    jQuery("#billing_invoice_type_field").show();
		    jQuery(".woocommerce-checkout .woocommerce #billing_piva_field").show();
			jQuery(".woocommerce-checkout .woocommerce #billing_cf_field").show();
			jQuery('#billing_company_field').show();
            jQuery(".woocommerce #billing_pec_field").hide();
            jQuery(".woocommerce #billing_pa_code_field").hide();
            if(jQuery('.woocommerce #billing_company_field label abbr.required').length){
                jQuery(".woocommerce #billing_company_field label abbr.required").remove();
            }
	    }else {
		    jQuery("#billing_invoice_type_field").show();
		    jQuery(".woocommerce-checkout .woocommerce #billing_piva_field").show();
			jQuery(".woocommerce-checkout .woocommerce #billing_cf_field").show();
			jQuery(".woocommerce-checkout .woocommerce #billing_pec_field").hide();
			jQuery(".woocommerce-checkout .woocommerce #billing_pa_code_field").hide();
            jQuery("#billing_invoice_type").change();//Trigger Change to show correct fields
	    }
    })//.change();//trigger change

	jQuery("#billing_invoice_type").select2({minimumResultsForSearch: Infinity});
	jQuery(".force_required label").append("<abbr class=\"required\" title=\"obbligatorio\">*</abbr>");

	jQuery("#billing_invoice_type").change(function(){
	    if(jQuery('#billing_country').val() != 'IT') return;
		switch(jQuery("#billing_invoice_type").val()){
			case 'invoice':

                $('#billing_company_field').show();
                $('#billing_piva_field').show();
                jQuery(".woocommerce #billing_pec_field").show();
                jQuery(".woocommerce #billing_pa_code_field").show();

                
                jQuery(".woocommerce #billing_cf_field").hide();

                if(!jQuery('.woocommerce #billing_piva_field label abbr.required').length){
                    jQuery(".woocommerce #billing_piva_field label").append("<abbr class=\"required\" title=\"obbligatorio\">*</abbr>");
                }
                if(!jQuery('.woocommerce #billing_company_field label abbr.required').length){
                    jQuery(".woocommerce #billing_company_field label").append("<abbr class=\"required\" title=\"obbligatorio\">*</abbr>");
                }
                if(!jQuery('.woocommerce #billing_pec_field label abbr.required').length){
                    jQuery(".woocommerce #billing_pec_field label").append("<abbr class=\"required\" title=\"obbligatorio\">*</abbr>");
                }
                break;

			case 'professionist_invoice':

                $('#billing_company_field').show();
                $('#billing_piva_field').show();
                $('#billing_cf_field').show();
				jQuery(".woocommerce #billing_pec_field").show();
                jQuery(".woocommerce #billing_pa_code_field").show();


                if(!jQuery('.woocommerce #billing_piva_field label abbr.required').length){
                    jQuery(".woocommerce #billing_piva_field label").append("<abbr class=\"required\" title=\"obbligatorio\">*</abbr>");
                }
                if(!jQuery('.woocommerce #billing_cf_field label abbr.required').length){
                    jQuery(".woocommerce #billing_cf_field label").append("<abbr class=\"required\" title=\"obbligatorio\">*</abbr>");
                }
                if(jQuery('.woocommerce #billing_company_field label abbr.required').length){
                    jQuery(".woocommerce #billing_company_field abbr.required").remove();
                }
                if(!jQuery('.woocommerce #billing_pec_field label abbr.required').length){
                    jQuery(".woocommerce #billing_pec_field label").append("<abbr class=\"required\" title=\"obbligatorio\">*</abbr>");
                }

                
                break;
            case 'receipt':
                jQuery('#billing_company_field').hide();
                jQuery(".woocommerce #billing_piva_field").hide();
				jQuery(".woocommerce #billing_pec_field").hide();
                jQuery(".woocommerce #billing_pa_code_field").hide();
                jQuery(".woocommerce #billing_cf_field").show();
                if(jQuery('.woocommerce #billing_cf_field label abbr.required').length){
                    jQuery(".woocommerce #billing_cf_field abbr.required").remove();
                }	
                break;
            			
			case 'private_invoice':
            default:

                $('#billing_company_field').hide();
                jQuery(".woocommerce #billing_piva_field").hide();
                jQuery(".woocommerce #billing_pec_field").show();
                jQuery(".woocommerce #billing_pa_code_field").hide();
                jQuery(".woocommerce #billing_cf_field").show();

                if(!jQuery('.woocommerce #billing_cf_field label abbr.required').length){
                    jQuery(".woocommerce #billing_cf_field label").append("<abbr class=\"required\" title=\"obbligatorio\">*</abbr>");
                }
                if(jQuery('.woocommerce #billing_pec_field label abbr.required').length){
                    jQuery(".woocommerce #billing_pec_field abbr.required").remove();
                }
                break;
		}
        //$('#billing_cf').rules("remove", "required");
    });
    jQuery(window).on("load", function (){
		jQuery("#billing_invoice_type").change();
	});
});