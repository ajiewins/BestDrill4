//JavaScript Document
var v_ans_nst           = "";
var v_ans_gc            = "";
var v_ans_depth         = ""; 
var v_ans_perm          = "";  
var v_ans_nocoal        = "";
var v_ans_vert          = "";                 
var myTemp              = "";
var res_nst             = "";
var res_gc              = "";
var res_depth           = "";
var res_rank            = "";
var res_cs              = "";
var res_perm            = "";
var res_aec             = "";
var res_well            = ""; 
        


   JotForm.init();
                      /*
    function toggle() {
      	var ele = document.getElementById("id_14");
          	if(ele.style.display == "none") {
                ele.style.display = "block";
                alert("display = block");
            }
          	else {
          	    ele.style.display = "none";
                alert("display = none");
          	}
    }    */
    
   function hideAll() {
        document.getElementById("id_4").style.display = "none";
      	document.getElementById("id_5").style.display = "none";
        document.getElementById("id_6").style.display = "none";
        document.getElementById("id_7").style.display = "none";
        document.getElementById("id_8").style.display = "none";
        document.getElementById("id_9").style.display = "none";
        document.getElementById("id_10").style.display = "none";
        document.getElementById("id_11").style.display = "none";
        document.getElementById("id_12").style.display = "none";
        document.getElementById("id_13").style.display = "none";
        document.getElementById("id_14").style.display = "none";
        document.getElementById("id_15").style.display = "none";
        document.getElementById("id_16").style.display = "none";
        document.getElementById("id_18").style.display = "none";
        document.getElementById("id_33").style.display = "none";
        document.getElementById("id_66").style.display = "none";
        document.getElementById("id_100").style.display = "none";
        
    } 
  
function ele_aliases(){
      el_in_nst = document.getElementById("input_3");
      el_in_gc = document.getElementById("input_4");
      el_in_depth = document.getElementById("input_7");
      el_in_perm = document.getElementById("input_8");
      el_in_nocoal = document.getElementById("input_11");
      el_in_vert = document.getElementById("input_13");
      el_in_rank = document.getElementsByName("q5_coalRank5");
      el_in_cs = document.getElementById("input_6");
      el_in_aec = document.getElementById("input_9");
      el_in_dip = document.getElementById("input_10");
      el_in_well = document.getElementsByName("q18_Well18");
      el_in_fws = document.getElementById("input_14");
      el_in_rpg = document.getElementById("input_33");
      el_in_dsb = document.getElementById("input_66");
      el_in_dta = document.getElementById("input_100");
      
      el_gc = document.getElementById("id_4");     
      el_depth = document.getElementById("id_7");
      el_rank = document.getElementById("id_5");
      el_well = document.getElementById("id_18");
      el_perm = document.getElementById("id_8");
      el_nocoal = document.getElementById("id_11"); 
      el_vert = document.getElementById("id_13"); 
      el_cs = document.getElementById("id_6");
      el_aec = document.getElementById("id_9");
      el_dip = document.getElementById("id_10");
      el_fws = document.getElementById("id_14");
      el_rpg = document.getElementById("id_33");
      el_dsb = document.getElementById("id_66"); 
      el_dta = document.getElementById("id_100");      
      
      el_in_textarea = document.getElementById("input_17");
      //-----------------------------------------------------
      elc_nst_vl_from = document.getElementById("c_nst_vl_from").value;
      elc_nst_vl_to = document.getElementById("c_nst_vl_to").value;
      elc_nst_l_from = document.getElementById("c_nst_l_from").value;
      elc_nst_l_to = document.getElementById("c_nst_l_to").value;
      elc_nst_m_from = document.getElementById("c_nst_m_from").value;
      elc_nst_m_to = document.getElementById("c_nst_m_to").value;
      elc_nst_h_from = document.getElementById("c_nst_h_from").value;
      elc_nst_h_to = document.getElementById("c_nst_h_to").value;
      elc_nst_vh_morethan = document.getElementById("c_nst_vh_morethan").value;
      
      elc_gc_l_from = document.getElementById("c_gc_l_from").value;
      elc_gc_l_to = document.getElementById("c_gc_l_to").value; 
      elc_gc_h_morethan = document.getElementById("c_gc_h_morethan").value;
      
      elc_depth_sh_from = document.getElementById("c_depth_sh_from").value;
      elc_depth_sh_to = document.getElementById("c_depth_sh_to").value;
      elc_depth_l_from = document.getElementById("c_depth_l_from").value;
      elc_depth_l_to = document.getElementById("c_depth_l_to").value;
      elc_depth_m_from = document.getElementById("c_depth_m_from").value;
      elc_depth_m_to = document.getElementById("c_depth_m_to").value;
      elc_depth_d_from = document.getElementById("c_depth_d_from").value;
      elc_depth_d_to = document.getElementById("c_depth_d_to").value;
      elc_depth_vd_morethan = document.getElementById("c_depth_vd_morethan").value;
      
      elc_perm_l_from = document.getElementById("c_perm_l_from").value;
      elc_perm_l_to = document.getElementById("c_perm_l_to").value; 
      elc_perm_m_from = document.getElementById("c_perm_m_from").value; 
      elc_perm_m_to = document.getElementById("c_perm_m_to").value; 
      elc_perm_h_from = document.getElementById("c_perm_h_from").value; 
      elc_perm_h_to = document.getElementById("c_perm_h_to").value; 
      elc_perm_vh_morethan = document.getElementById("c_perm_vh_morethan").value;
      
      elc_nocoal_l = document.getElementById("c_nocoal_l").value;
      elc_nocoal_h = document.getElementById("c_nocoal_h").value;   
      
      elc_vert_l = document.getElementById("c_vert_l").value;
      elc_vert_h = document.getElementById("c_vert_h").value;    
      
      elc_rank_l_from = document.getElementById("c_rank_l_from").value;
      elc_rank_l_to = document.getElementById("c_rank_l_to").value;  
      elc_rank_m_from = document.getElementById("c_rank_m_from").value;  
      elc_rank_m_to = document.getElementById("c_rank_m_to").value;  
      elc_rank_h_from = document.getElementById("c_rank_h_from").value;  
      elc_rank_h_to = document.getElementById("c_rank_h_to").value; 
      
      elc_cs_l_from = document.getElementById("c_cs_l_from").value;
      elc_cs_l_to = document.getElementById("c_cs_l_to").value;
      elc_cs_h_morethan = document.getElementById("c_cs_h_morethan").value;
      
      elc_aec_l_from = document.getElementById("c_aec_l_from").value;
      elc_aec_l_to = document.getElementById("c_aec_l_to").value;
      elc_aec_h_morethan = document.getElementById("c_aec_h_morethan").value;   
      
      elc_dip_l = document.getElementById("c_dip_l").value;
      elc_dip_h = document.getElementById("c_dip_h").value; 
      
      elc_fws_vl_from = document.getElementById("c_fws_vl_from").value;
      elc_fws_vl_to = document.getElementById("c_fws_vl_to").value;  
      elc_fws_l_from = document.getElementById("c_fws_l_from").value;  
      elc_fws_l_to = document.getElementById("c_fws_l_to").value;  
      elc_fws_h_from = document.getElementById("c_fws_h_from").value;  
      elc_fws_h_to = document.getElementById("c_fws_h_to").value; 
      
      elc_rpg_l = document.getElementById("c_rpg_l").value;
      elc_rpg_h = document.getElementById("c_rpg_h").value;
      
      elc_dsb_l = document.getElementById("c_dsb_l").value;
      elc_dsb_h = document.getElementById("c_dsb_h").value;
      
      elc_dta_l = document.getElementById("c_dta_l").value;
      elc_dta_h = document.getElementById("c_dta_h").value;  
  }
  
function loaddefaultconstanta(){
  document.getElementById("c_nocoal_l").value=2;
  document.getElementById("c_nocoal_h").value=2;
  document.getElementById("c_vert_l").value=40;
  document.getElementById("c_vert_h").value=40;
  document.getElementById("c_dip_l").value=15;
  document.getElementById("c_dip_h").value=15;
  document.getElementById("c_aec_l_from").value=0;
  document.getElementById("c_aec_l_to").value=1500;
  document.getElementById("c_aec_h_morethan").value=1500;
  document.getElementById("c_cs_l_from").value=0;
  document.getElementById("c_cs_l_to").value=1000;
  document.getElementById("c_cs_h_morethan").value=1000;
  document.getElementById("c_gc_l_from").value=0;
  document.getElementById("c_gc_l_to").value=140;
  document.getElementById("c_gc_h_morethan").value=140;
  document.getElementById("c_rank_l_from").value=0;
  document.getElementById("c_rank_l_to").value=0.63;
  document.getElementById("c_rank_m_from").value=0.63;
  document.getElementById("c_rank_m_to").value=1.97;
  document.getElementById("c_rank_h_from").value=1.97;
  document.getElementById("c_rank_h_to").value=7;
  document.getElementById("c_nst_vl_from").value=0;
  document.getElementById("c_nst_vl_to").value=3;
  document.getElementById("c_nst_l_from").value=3;
  document.getElementById("c_nst_l_to").value=10;
  document.getElementById("c_nst_m_from").value=10;
  document.getElementById("c_nst_m_to").value=20;
  document.getElementById("c_nst_h_from").value=20;
  document.getElementById("c_nst_h_to").value=30;
  document.getElementById("c_nst_vh_morethan").value=30;
  document.getElementById("c_perm_l_from").value=0;
  document.getElementById("c_perm_l_to").value=1;
  document.getElementById("c_perm_m_from").value=1;
  document.getElementById("c_perm_m_to").value=10;
  document.getElementById("c_perm_h_from").value=10;
  document.getElementById("c_perm_h_to").value=100;
  document.getElementById("c_perm_vh_morethan").value=100;
  document.getElementById("c_depth_sh_from").value=0;
  document.getElementById("c_depth_sh_to").value=500;
  document.getElementById("c_depth_l_from").value=500;
  document.getElementById("c_depth_l_to").value=1800;
  document.getElementById("c_depth_m_from").value=1800;
  document.getElementById("c_depth_m_to").value=4000;
  document.getElementById("c_depth_d_from").value=4000;
  document.getElementById("c_depth_d_to").value=6000;
  document.getElementById("c_depth_vd_morethan").value=6000;
  document.getElementById("c_fws_vl_from").value=0;
  document.getElementById("c_fws_vl_to").value=5;
  document.getElementById("c_fws_l_from").value=5;
  document.getElementById("c_fws_l_to").value=50;
  document.getElementById("c_fws_h_from").value=50;
  document.getElementById("c_fws_h_to").value=100;
  document.getElementById("c_rpg_l").value=0.2;
  document.getElementById("c_rpg_h").value=0.2;
  document.getElementById("c_dsb_l").value=20;
  document.getElementById("c_dsb_h").value=20;
  document.getElementById("c_dta_l").value=30;
  document.getElementById("c_dta_h").value=30;
}
  
  function msgbox(myVal){
      if (myVal=="fb"){
          alert("Fill in the blanks!");
      }
  }
   
  function msg(myVal){
  if (myTemp != myVal){
      myTemp=myVal;
      if (myVal=="ne"){
          mmsg="<font size='4' color='red'>[!!Not economical under current technology!!.]</font>\n";
      }
      else if (myVal=="nop"){
          mmsg="<font size='4' color='red'>[No option for this case, modification of this app is needed. Write to:imam@sosrowidjojo.com]</font>\n";
      }
      else if (myVal=="gcl"){
          mmsg="<font size='3'>.Gas Content is low.</font>\n";
      }
      else if (myVal=="gch"){
          mmsg="<font size='3'>.Gas Content is high.</font>\n";
      }
      else if (myVal=="vwch"){
          mmsg="<font size='2' color='green'><br>.Drilling & Completion method:<br> </font><font size='4' color='blue'>(VERTICAL WELL CASED HOLE COMPLETION WITH<br>HYDRAULIC FRACTURE STIMULATION.)</font><br>\n";
      }
      else if (myVal=="vwwt"){
          mmsg="<font size='2' color='green'><br>.Drilling & Completion method:<br> </font><font size='4' color='blue'>(VERTICAL WELL WITH TOPSET UNDER REAM COMPLETION.)</font><br>\n";
      }
      else if (myVal=="vwwo"){
          mmsg="<font size='2' color='green'><br>.Drilling & Completion method:<br> </font><font size='4' color='blue'>(VERTICAL WELL WITH OPEN HOLE CAVITY COMPLETION or )</font><br>\n";
      }
      else if (myVal=="nstvl"){
          mmsg="<font size='3'>.Net Seam Thickness is very low.</font>\n";
      }
      else if (myVal=="nstl"){
          mmsg="<font size='3'>.Net Seam Thickness is low.</font>\n";
      }
      else if (myVal=="nstm"){
          mmsg="<font size='3'>.Net Seam Thickness is medium.</font>\n";
      }
      else if (myVal=="nsth"){
          mmsg="<font size='3'>.Net Seam Thickness is high.</font>\n";
      }
      else if (myVal=="nstvh"){
          mmsg="<font size='3'>.Net Seam Thickness is very high.</font>\n";
      }
      else if (myVal=="rankl"){
          mmsg="<font size='3'>.Rank is low.</font>\n";
      }
      else if (myVal=="rankm"){
          mmsg="<font size='3'>.Rank is medium.</font>\n";
      }
      else if (myVal=="rankh"){
          mmsg="<font size='3'>.Rank is high.</font>\n";
      }
      else if (myVal=="depthsh"){
          mmsg="<font size='3'>.Depth is shallow.</font>\n";
      }
      else if (myVal=="depthl"){
          mmsg="<font size='3'>.Depth is low.</font>\n";
      }
      else if (myVal=="depthm"){
          mmsg="<font size='3'>.Depth is medium.</font>\n";
      }
      else if (myVal=="depthd"){
          mmsg="<font size='3'>.Depth is deep.</font>\n";
      }
      else if (myVal=="depthvd"){
          mmsg="<font size='3'>.Depth is very deep.</font>\n";
      }
      else if (myVal=="csl"){
          mmsg="<font size='3'>.Compressive Strength is low.</font>\n";
      }
      else if (myVal=="csh"){
          mmsg="<font size='3'>.Compressive Strength is high.</font>\n";
      }
      else if (myVal=="perml"){
          mmsg="<font size='3'>.Permeability is low.</font>\n";
      }
      else if (myVal=="permm"){
          mmsg="<font size='3'>.Permeability is medium.</font>\n";
      }
      else if (myVal=="permh"){
          mmsg="<font size='3'>.Permeability is high.</font>\n";
      }
      else if (myVal=="permvh"){
          mmsg="<font size='3'>.Permeability is very high.</font>\n";
      }
      else if (myVal=="pinn"){
          mmsg="<font size='2' color='green'><br>.Drilling & Completion method:<br> </font><font size='4' color='blue'>(PINNATE OR QUAD LATERAL.)</font><br>\n";
      }
      else if (myVal=="sing"){
          mmsg="<font size='2' color='green'><br>.Drilling & Completion method:<br> </font><font size='4' color='blue'>(SINGLE LATERAL.)</font><br>\n";
      }
      else if (myVal=="nocoall"){
          mmsg="<font size='3'>.Number of Coal Seams is low.</font>\n";
      }
      else if (myVal=="nocoalh"){
          mmsg="<font size='3'>.Number of Coal Seams is high.</font>\n";
      }
      else if (myVal=="vertl"){
          mmsg="<font size='3'>.Vertical Separation is low.</font>\n";
      }
      else if (myVal=="verth"){
          mmsg="<font size='3'>.Vertical Separation is high.</font>\n";
      }
      else if (myVal=="ssc"){
          mmsg="<font size='2' color='green'><br>.Drilling & Completion method:<br> </font><font size='4' color='blue'>(SINGLE STAGE COMPLETION.)</font><br>\n";
      }
      else if (myVal=="msc"){
          mmsg="<font size='2' color='green'><br>.Drilling & Completion method:<br> </font><font size='4' color='blue'>(MULTIPLE STAGE COMPLETION.)</font><br>\n";
      }
      else if (myVal=="aecl"){
          mmsg="<font size='3'>.Areal Extent of Coal is low.</font>\n";
      }
      else if (myVal=="aech"){
          mmsg="<font size='3'>.Areal Extent of Coal is high.</font>\n";
      }
      else if (myVal=="dipl"){
          mmsg="<font size='3'>.DIP of coal seams is low.</font>\n";
      }
      else if (myVal=="diph"){
          mmsg="<font size='3'>.DIP of coal seams is high.</font>\n";
      }
      else if (myVal=="hwwl"){
          mmsg="<font size='2' color='green'><br>.Drilling & Completion method:<br> </font><font size='4' color='blue'>(HORIZONTAL WELL WITH LINER.)</font><br>\n";
      }
      else if (myVal=="wellv"){
          mmsg="<font size='3'>.Well is vertical.</font>\n";
      }
      else if (myVal=="wellh"){
          mmsg="<font size='3'>.Well is horizontal.</font>\n";
      }
      else if (myVal=="wwp"){
          mmsg="<font size='2' color='green'><br>.Stimulation method:<br> </font><font size='4' color='blue'>(WATER WITHOUT PROPPANT.)</font><br>\n";
      }
      else if (myVal=="wfwp"){
          mmsg="<font size='2' color='green'><br>.Stimulation method:<br> </font><font size='4' color='blue'>(WATER FRACTURING WITH PROPANT.)</font><br>\n";
      }
      else if (myVal=="clgf"){
          mmsg="<font size='2' color='green'><br>.Stimulation method:<br> </font><font size='4' color='blue'>(CROSS LINKED GEL FRACTURING WITH PROPANT.)</font><br>\n";
      }
      else if (myVal=="clg"){
          mmsg="<font size='2' color='green'><br>.Stimulation method:<br> </font><font size='4' color='blue'>(CROSS LINKED GEL OR WATER FRACTURING WITH PROPPANT.)</font><br>\n";
      }  
      else if (myVal=="fwsvl"){
          mmsg="<font size='3'>.Formation Water Saturation is very low.</font>\n";
      }
      else if (myVal=="fwsl"){
          mmsg="<font size='3'>.Formation Water Saturation low.</font>\n";
      }
      else if (myVal=="fwsh"){
          mmsg="<font size='3'>.Formation Water Saturation is high.</font>\n";
      }
      else if (myVal=="gwp"){
          mmsg="<font size='2' color='green'><br>.Stimulation method:<br> </font><font size='4' color='blue'>(CO2 or N2 GAS WITHOUT PROPANT.)</font><br>\n";
      }
      else if (myVal=="fwp"){
          mmsg="<font size='2' color='green'><br>.Stimulation method:<br> </font><font size='4' color='blue'>(CO2 or N2 FOAM WITH PROPANT.)</font><br>\n";
      }
      else if (myVal=="rpgl"){
          mmsg="<font size='3'>.Reservoir Pressure Gradient is low.</font>\n";
      }
      else if (myVal=="rpgh"){
          mmsg="<font size='3'>.Reservoir Pressure Gradient is high.</font>\n";
      }
      else if (myVal=="dsbl"){
          mmsg="<font size='3'>.Distance to strong barrier is low.</font>\n";
      }
      else if (myVal=="dsbh"){
          mmsg="<font size='3'>.Distance to strong barrier is high.</font>\n";
      }
      else if (myVal=="dtal"){
          mmsg="<font size='3'>.Distance to Aquifer is low.</font>\n";
      }
      else if (myVal=="dtah"){
          mmsg="<font size='3'>.Distance to Aquifer is high.</font>\n";
      }
      else {
          mmsg="<font size='3'>.No option message.</font>\n";
      }
      el_in_textarea.value = el_in_textarea.value + mmsg;
    }
  }
  
  function rs_rpg(valu){
      if (valu >= elc_rpg_h){
          res_rpg="h";msg("rpgh");
      }
      else if (valu < elc_rpg_l){
          res_rpg="l";msg("rpgl");
      }
      return res_rpg;
  }  
  
  function rpg(myVal){
     if (el_in_rpg.value.match(/\S/)){
          if (rs_rpg(myVal)=="l"){
              msg("fwp");
          }
          else if (rs_rpg(myVal)=="h"){
              if (res_perm=="l") {
                  msg("wfwp");
              } 
              else if (res_perm=="h"){
                  msg("clgf");
              }
              else if (res_perm=="m"){
                  el_dsb.style.display="block";
              }
          }
          el_in_rpg.disabled=true;
      }
      else {
          msgbox("fb");
      }
  }
  
  function rs_dsb(valu){
      if  (valu < elc_dsb_l) {
          res_dsb="l";msg("dsbl");
      }
      else if (valu >= elc_dsb_h){
          res_dsb="h";msg("dsbh");
      }
      return res_dsb;
  }
  
  function dsb(myVal){
  if (el_in_dsb.value.match(/\S/)){
      if (rs_dsb(myVal)=="l"){
          msg("wfwp");
      }
      else if (rs_dsb(myVal)=="h"){
          el_dta.style.display="block";
      }
      el_in_dsb.disabled=true;
  }
  else {
      msgbox("fb");
      }
  }
  
  function rs_dta(valu){
      if (valu < elc_dta_l) {
          res_dta="l";msg("dtal");
      }
      else if ((valu >= elc_dta_h)) {
          res_dta="h";msg("dtah");      
      }    
      return res_dta;
  }
  
  function dta(myVal){
  if (el_in_dta.value.match(/\S/)){
      if (rs_dta(myVal)=="l"){
          msg("wfwp");
      }
      else if (rs_dta(myVal)=="h"){
          msg("clg"); 
      }
      el_in_dta.disabled=true;
  }
  else {
      msgbox("fb");
  }
  } 
  
  function rs_nst(valu){    
          if (valu >= elc_nst_vl_from && valu < elc_nst_vl_to) {   
              res_nst = "vl";msg("nstvl");
          }
          else if ((valu >= elc_nst_l_from) && (valu < elc_nst_l_to)){
              res_nst = "l";msg("nstl");
          }
          else if ((valu >= elc_nst_m_from) && (valu < elc_nst_m_to)){
              res_nst = "m";msg("nstm");
          }
          else if ((valu >= elc_nst_h_from) && (valu < elc_nst_h_to)){
              res_nst = "h";msg("nsth");
          }
          else if (valu >= elc_nst_vh_morethan){
              res_nst = "vh";msg("nstvh");
          }      
  return res_nst;   
  }  
  
  function nst(myVal){ 
      if (el_in_nst.value.match(/\S/)){
          if (rs_nst(myVal)=="vl"){ 
              msg("ne"); 
          }    
          else if ((rs_nst(myVal)=="l") || (rs_nst(myVal)=="m") || (rs_nst(myVal)=="h") || (rs_nst(myVal)=="vh")) {
              el_gc.style.display = "block";
          } 
          el_in_nst.disabled = true;
      }
      else {msgbox("fb");}
  }
  
  function rs_gc(valu){   
      if (valu >= elc_gc_l_from && valu < elc_gc_l_to) {
          res_gc="l";msg("gcl");    
      }
      else if (valu >= elc_gc_h_morethan){
          res_gc="h";msg("gch");  
      }   
      return res_gc;   
  }  
  
  function gc(myVal){
      if (el_in_gc.value.match(/\S/)){
              if (rs_gc(myVal)=="l"){
                  if (res_nst=="l" || res_nst=="m" || res_nst=="h"){
                      msg("ne"); 
                  }  
                  else if (res_nst=="vh"){
                      el_depth.style.display = "block";
                  }
              }
              else if (rs_gc(myVal)=="h"){
                  if (res_nst=="l" || res_nst=="m" || res_nst=="h" || res_nst=="vh"){
                      el_rank.style.display = "block";  
                  }        
              }
          el_in_gc.disabled = true;
      }
      else {msgbox("fb");}
  }
  
  function rs_rank(valu){
    ele_aliases();
      if ((el_in_rank[0].checked==true) || (el_in_rank[1].checked==true)){
          res_rank="l";msg("rankl");
      }
      else if ((el_in_rank[2].checked==true ) || (el_in_rank[3].checked==true) || (el_in_rank[4].checked==true)) {
          res_rank="m";msg("rankm");
      }
      else {
          res_rank="h";msg("rankh");
      }
      return res_rank;
  }
  
  function rank(myVal){
          if (rs_rank(myVal)=="l"){
              if ((res_nst=="l") || (res_nst=="m") || (res_nst=="h")){
                  msg("ne");        
              }
              else if (res_nst=="vh"){
                  el_depth.style.display = "block";
              }  
          }
          else if (rs_rank(myVal)=="m"){
              el_cs.style.display = "block";
          }
          else if (rs_rank(myVal)=="h"){
              msg("ne");
          }
      rankdisabled(true);
  }
  
  function rankdisabled(flag){
      el_in_rank[0].disabled=flag;
      el_in_rank[1].disabled=flag;
      el_in_rank[2].disabled=flag;
      el_in_rank[3].disabled=flag;
      el_in_rank[4].disabled=flag;
      el_in_rank[5].disabled=flag;
      el_in_rank[6].disabled=flag;
  }
  
  function welldisabled(flag){
      el_in_well[0].disabled=flag;
      el_in_well[1].disabled=flag;
  }
  
  function rs_depth(valu){
      if (valu >= elc_depth_sh_from && valu < elc_depth_sh_to){
          res_depth="sh";msg("depthsh");    
      }    
      else if ((valu >= elc_depth_l_from) && (valu < elc_depth_l_to)){
          res_depth="l";msg("depthl");
      }
      else if (valu >= elc_depth_m_from && valu < elc_depth_m_to){
          res_depth="m";msg("depthm");
      } 
      else if (valu >= elc_depth_d_from && valu < elc_depth_d_to){
          res_depth="d";msg("depthd");
      }
      else if (valu >= elc_depth_vd_morethan) {
          res_depth="vd";msg("depthvd");
      }
      return res_depth;
  }

  function depth(myVal){                                                                                                            
  if (el_in_depth.value.match(/\S/)){
        if ((res_cs=="h") || (res_cs=="l") || (res_perm=="m")){            
                    if (res_nst=="l" || res_nst=="m"){
                        if (rs_depth(myVal)=="l" || rs_depth(myVal)=="m" ){
                            el_aec.style.display="block";
                        }
                        else if (rs_depth(myVal)=="sh" || rs_depth(myVal)=="d"){
                            msg("vwch");el_nocoal.style.display = "block";
                        } 
                        else if (rs_depth(myVal)=="vd"){
                            msg("ne");
                        }
                    }
                    else if (res_nst=="h"){
                        if (rs_depth(myVal)=="sh" || rs_depth(myVal)=="m" || rs_depth(myVal)=="d"){
                            msg("vwch");el_nocoal.style.display = "block";
                        }
                        else if (rs_depth(myVal)=="vd"){
                            msg("ne");
                        } 
                        else {
                            alert("No option for this case. Depth may be low.");msg("nop");
                        }
                    }
                    else {
                        alert("No option for this case. Other option: Net seam thickness's low, medium or high.");msg("nop");
                    }           
        }
        else if ((res_gc=="l") || (res_rank=="l")){ 
            if (res_nst=="vh"){
                if (rs_depth(myVal)=="m" || rs_depth(myVal)=="d"){
                    msg("ne");
                }   
                else if (rs_depth(myVal)=="sh" || rs_depth(myVal)=="l"){
                    el_perm.style.display="block";
                } 
                else {
                   msg("nop");
                } 
            }
            else {
                msg("nop");
            }     
        }
        else {
            alert("No option for this case. Other option: compressive strenght's high or low, permeability's medium, gas content's low and rank's low");msg("nop");
        }
        el_in_depth.disabled = true; 
    }
    else {
      msgbox("fb");
    }
  }
  
  function rs_cs(valu){
      if  (valu >= elc_cs_l_from && valu < elc_cs_l_to) {
          res_cs="l";msg("csl");
      }
      else if (valu >= elc_cs_h_morethan){
          res_cs="h";msg("csh");
      }
      return res_cs;
  }
  
  function cs(myVal){
  if (el_in_cs.value.match(/\S/)){
      if (rs_cs(myVal)=="l"){
          el_perm.style.display="block";
      }
      else if (rs_cs(myVal)=="l" || rs_cs(myVal)=="m" || rs_cs(myVal)=="h"){
          el_depth.style.display="block";
      }
  el_in_cs.disabled=true;
  }
  else {msgbox("fb");}
  }
  
  function rs_perm(valu){  
      if (valu >= elc_perm_l_from && valu < elc_perm_l_to){
          res_perm="l";msg("perml");
      }
      else if (valu >= elc_perm_m_from && valu < elc_perm_m_to){
          res_perm="m";msg("permm");
      } 
      else if (valu >= elc_perm_h_from && valu < elc_perm_h_to){
          res_perm="h";msg("permh");
      }
      else if (valu >= elc_perm_vh_morethan){
          res_perm="vh";msg("permvh");
      }
      return res_perm;   
  }
  
  function perm(myVal){  
      if (el_in_perm.value.match(/\S/)){   
           if (res_well=="h"){
                if (rs_perm(myVal)=="l"){
                    msg("pinn");
                    //el_fws.style.display="block";   //edited 28 jan 14
                }
                else if (rs_perm(myVal)=="m" || rs_perm(myVal)=="h"){
                    msg("sing");
                    //el_fws.style.display="block";    //edited 28 jan 14
                }
                else {
                    msg("nop");
                }   
            }
     
            else if (res_depth=="sh" || res_depth=="l"){   
                if (rs_perm(myVal)=="l"){
                    msg("ne");
                } 
                else if (rs_perm(myVal)=="m" || rs_perm(myVal)=="h"){
                    msg("vwch");el_nocoal.style.display="block";
                }
                else if (rs_perm(myVal)=="vh"){
                    msg("vwwt");
                    msg("wwp");  //edited 28 jan 14
                }
                else {
                    msg("nop");
                }    
            }            
            else if (res_cs=="l"){
                if (rs_perm(myVal)=="h"){       //edited 23 jan 2014 - ori if (rs_perm(myVal)=="h")
                    msg("vwwo");msg("vwch");el_nocoal.style.display="block"; 
                       
                }
                else if (rs_perm(myVal)=="m" || rs_perm(myVal)=="l"){
                    if (res_nst=="l" || res_nst=="m" || res_nst=="h"){
                        el_depth.style.display = "block";
                    }
                    else {
                        msg("nop");
                    }
                }      
                else {
                   msg("nop");
                }
            }
            else if (res_nocoal=="l" || res_vert=="l" || res_vert=="h"){
                el_fws.style.display="block";
            }
            el_in_perm.disabled=true;
      }
      else {
          msgbox("fb");
      }

  }
  
  function rs_fws(valu){
          if (valu >= elc_fws_vl_from && valu < elc_fws_vl_to) {   
              res_fws = "vl";msg("fwsvl");
          }
          else if ((valu >= elc_fws_l_from) && (valu < elc_fws_l_to)){
              res_fws = "l";msg("fwsl");
          }
          else if ((valu >= elc_fws_h_from) && (valu < elc_fws_h_to)){
              res_fws = "h";msg("fwsh");
          }
          return res_fws;
  }    
  
  function fws(myVal){
      if (el_in_fws.value.match(/\S/)){  
          if (rs_fws(myVal)=="vl"){
              msg("gwp");
          }
          else if (rs_fws(myVal)=="l"){
              msg("fwp");
          }
          else if (rs_fws(myVal)=="h"){
              el_rpg.style.display="block";
          }      
          el_in_fws.disabled=true; 
      }
      else {
          msgbox("fb");
      }
  }
  
  function rs_nocoal(valu){
      if (valu >= elc_nocoal_h){
          res_nocoal="h";msg("nocoalh");
      }
      else if (valu < elc_nocoal_l){
          res_nocoal="l";msg("nocoall");
      }
      return res_nocoal;
  }  
  
  function nocoal(myVal){     
     if (el_in_nocoal.value.match(/\S/)){
          if (rs_nocoal(myVal)=="l"){
              msg("ssc"); 
              if (res_perm==""){
                  el_perm.style.display="block";
              }
              else if (res_perm=="l" || res_perm=="m" || res_perm=="h") {
                  el_fws.style.display="block";
              }
              else {
                  msg("wwp");
              }
                           
          }
          else if (rs_nocoal(myVal)=="h"){
              el_vert.style.display="block";
          }
          el_in_nocoal.disabled=true;
      }
      else {
          msgbox("fb");
      }   
  }
  
  function rs_vert(valu){
       if (valu >= elc_vert_h){
          res_vert="h";msg("vertl");
       }
       else if (valu < elc_vert_l){
          res_vert="l";msg("verth");
       }
       return res_vert;
  }
  
  function vert(myVal){
      if (el_in_vert.value.match(/\S/)){
          if (rs_vert(myVal)=="l"){
              msg("ssc");     
              //el_perm.style.display="block"; 
              if (res_perm==""){
                  el_perm.style.display="block";
              }
              else if (res_perm=="l" || res_perm=="m" || res_perm=="h") {
                  el_fws.style.display="block";
              }
              else {
                  msg("wwp");
              }
          }
          else if (rs_vert(myVal)=="h"){
              msg("msc"); 
              //el_perm.style.display="block";
              if (res_perm==""){
                  el_perm.style.display="block";
              }
              else if (res_perm=="l" || res_perm=="m" || res_perm=="h") {
                  el_fws.style.display="block";
              }
              else {
                  msg("wwp");
              }
          }
          el_in_vert.disabled=true;
      }
      else {
          msgbox("fb");
      } 
  }
  
  
  function rs_aec(valu){
      if ((valu >= elc_aec_l_from) && (valu < elc_aec_l_to)) {
          res_aec="l";msg("aecl");
      }
      else if (valu >= elc_aec_h_morethan){
          res_aec="h";msg("aech");
      }    
      return res_aec;
  }
  
  function aec(myVal){
  if (el_in_aec.value.match(/\S/)){
      if (rs_aec(myVal)=="l"){
          if (res_depth=="l" || res_depth=="m"){
                msg("vwch");el_nocoal.style.display = "block";   
          }
          else if (res_depth=="vd"){
                msg("ne");
          }
          else {
              msg("nop");
          }
      }
      else if (rs_aec(myVal)=="h"){
          el_dip.style.display="block";
      }
      el_in_aec.disabled=true;
  }
  else {
      msgbox("fb");
  }    
  }
  
  function rs_dip(valu){
      if ((valu < elc_dip_l)) {
          res_dip="l";msg("dipl");
      }
      else if ((valu >= elc_dip_h)) {
          res_dip="h";msg("diph");      
      }    
      return res_dip;
  }
  
  function dip(myVal){
  if (el_in_dip.value.match(/\S/)){
      if (rs_dip(myVal)=="l"){
          el_well.style.display="block";
      }
      else if (rs_dip(myVal)=="h"){
          if (res_depth=="l" || res_depth=="m"){
              msg("vwch");el_nocoal.style.display = "block";
          }
          else if (res_depth=="l"){
              msg("ne");
          }
          else {
              msg("nop");
          }
      }
      el_in_dip.disabled=true;
  }
  else {
      msgbox("fb");
  }
  }    
  
  function rs_well(valu){
      if (el_in_well[0].checked == true){
          res_well="v";msg("wellv");
      }
      else if (el_in_well[1].checked == true) {
          res_well="h";msg("wellh");
      }
      return res_well;
  }  
  
  function well(myVal){ 
      if (rs_well(myVal)=="v"){
          msg("vwch");el_nocoal.style.display = "block";
      }
      else if (rs_well(myVal)=="h"){
          msg("hwwl");el_perm.style.display="block"; 
          /*
          if (res_perm=="l"){
               msg("pinn");  
          }
          else if (res_perm=="m" || res_perm=="h"){
               msg("sing");
          }
          */         
      } 
      welldisabled(true);          
  }
  




  

