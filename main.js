function changeText(){
		document.getElementById('boldStuff').innerHTML = " ";
		var r_text = new Array ();r_text[0] = "is coaching at some high school somewhere";
		r_text[1] = "is playing in the CFL, probably";
		r_text[2] = "is trying to get all his stats to 99 on Madden";
		r_text[3] = "is coaching at Air Force or Navy or some school that runs the option all the time";
		r_text[4] = "is playing Tecmo Bowl in his mom's basement";
		r_text[5] = "is drunk (on life)";
		r_text[6] = "is high (on life)";
		r_text[7] = "will return when we are ready for him, like Quetzalcoatl";
		r_text[8] = "is in Smashing Pumpkins now (yeah, Billy Corgan got rid of all the original people)";
		r_text[9] = "is doing yoga on his Wii Fit";
		r_text[10] = "is trying to find Carmen Sandiego";
		r_text[11] = "is caulking his wagon to ford the river";
		r_text[12] = "died of gangrene";
		r_text[13] = "is in the Arena League. Is that where Shreveport plays?";
		r_text[14] = "is giving motivational speeches, probably";
		r_text[15] = "is trying to launch his own athletic apparel brand, Under Tebow";
		r_text[16] = "is trying to convince people that Jars of Clay really is a good band";
		r_text[17] = "is photoshopping every NFL jersey onto himself";
		r_text[18] = "is Googling \"does NFL Europe still exist\"";
		r_text[19] = "is Googling \"list of Arena League teams\"";
		r_text[20] = "is Googling \"what other countries play football not soccer\"";
		r_text[21] = "is Googling \"do any former NFL players play professional soccer\"";
		r_text[22] = "is Googling \"sports similar to football\"";
		r_text[23] = "is Googling \"rules to Australian football\"";
		r_text[24] = "is Googling \"is Gaelic football like regular football\"";
		r_text[25] = "is Googling \"do they run the Wildcat in rugby\"";
		r_text[26] = "is Googling \"Timmy Football\"";
		r_text[27] = "is trying out potential ESPN catchphrases. \"Pow!\" \"Zap!\"";
		r_text[28] = "is writing his autobiography with Mitch Albom. it is heartwarming or treacly depending on how discerning/jaded you are";
		r_text[29] = "is trying to pitch a football version of Mighty Ducks";
		r_text[30] = "is hanging out with Vertical Horizon";
		r_text[31] = "is watching Kirk Cameron movies";
		r_text[32] = "is hanging out with Kirk Cameron";
		r_text[33] = "is Kirk Cameron. Have you seen then in the same place at the same time?";
		r_text[34] = "is opening Tim Tebow's Steakhouse";
		r_text[35] = "is opening a Mexican restaurant in Gainesville: Timmy T's Taco Town";
		r_text[36] = "is trying to buy a Planet Hollywood franchise";
		r_text[37] = "is. He just is.";
		r_text[38] = "is reading all the Tom Clancy books";
		r_text[39] = "is trying to get through all the Twilight books";
		r_text[40] = "is a nice young man";
		r_text[41] = "is a real high motor guy";
		r_text[42] = "is a real character guy";
		r_text[43] = "is asleep on Johnny Manziel's couch";
		r_text[44] = "is doing open mics at coffee shops in Florida";
		r_text[45] = "is focusing on his music";
		r_text[46] = "is the Lieutenant Governor of Florida";
		r_text[47] = "is running for deputy mayor of Gainesville";
		r_text[48] = "is putting together a PAC to run for Florida state senate";
		r_text[49] = "is a Florida state senator";
		r_text[50] = "is finishing his PhD in geology";
		r_text[51] = "is finishing his PhD in theater";
		r_text[52] = "is finishing his PhD in art history";
		r_text[53] = "is finishing his PhD in Tagalog";
		r_text[54] = "is finishing his PhD in leisure studies";
		r_text[55] = "is still hiding from John Elway";
		r_text[56] = "is an ESPN college football commentator";
		r_text[57] = "is updating his Geocities page";
		r_text[58] = "is updating his LinkedIn";
		r_text[59] = "died of dysentery";
		r_text[60] = "is Tebowing, obviously";
		r_text[61] = "is a real gym rat";
		r_text[62] = "joined the circus";
		r_text[63] = "drives an Uber in Jersey";
		r_text[64]= "is working out for the Eagles";
		r_text[65]= "got signed by the Eagles, for some reason";
		r_text[66]= "is still sad about getting dumped by Miss Universe";
		r_text[67]= "is trying to reinvent himself as a knuckleball pitcher";
		r_text[68]= "thinks he could play tight end somewhere";
		r_text[69]="has returned to the land of his birth, the Philippines"
		r_text[70]="is a baseball player now"
		r_text[71]="hosts some kind of construction reality show on Fox"
		r_text[72]="is in the Mets' farm system"
		r_text[73]="is having long phone conversations with Skip Bayless"
		r_text[74]="posts on Twitter A LOT"
		r_text[75]="made a movie called Run the Race. No, seriously"
		r_text[76]="has weird shoulders"
		r_text[77]="is speaking at giant Christian gatherings"		
		r_text[78]="has the Tim Tebow Foundation, of course"
		r_text[79]="posts religious stuff on Twitter all the time"
		r_text[81]="is poopin'"
		var i = Math.floor(82*Math.random())
		document.getElementById('boldStuff').innerHTML = r_text[i];
	}