
$(()=>{
	Musicology.getNotes().forEach((note=>note.split("/").forEach(n=>$("#key").append(`<option value='${n}'>${n}</option>`))));
	$("#key").change(drawSCales);
	Musicology.getModesNames().forEach((mode=>$("#mode").append(`<option value='${mode}'>${mode}</option>`)));
	$("#mode").change(drawSCales)
	drawSCales();
	function drawSCales(){
		var key = $("#key").val();
		$(".keylabel").html(key);
		var mode = $("#mode").val();
		$(".modename").html(mode.toUpperCase());
		var scale = Musicology.getScale(key, mode);
		var chordTypes = Musicology.getChordTypes();
		for(var i=0; i<scale.length; i++){
			$("#degree"+(i+1)).html(scale[i]);
		}
		$(".chordrow").remove();
		for(var i=0; i<chordTypes.length; i++){
			$row = $('<tr class="chordrow">');
			$row.append("<td><b>"+chordTypes[i]+"</b></td>");
			for(var n=0; n<scale.length; n++){ 
				$row.append("<td>"+Musicology.getChord(scale[n], chordTypes[i]).join(",")+"</td>"); 
			}
			$("#scalestable").append($row);
		}
	}
});
