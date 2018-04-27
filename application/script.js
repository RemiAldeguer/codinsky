$(document).ready(function() {

    var myCodeMirror;
    var Level;
    var objet = [];
    var instance = 0;
    var counterLoop = false;
    // Stores all the shapes, can be dynamically modified
    var shapes = {};

    /* --------------------------------------------------- */
    /*                  Pour Code Mirro                    */
    /* --------------------------------------------------- */

	// Create a unique ID for the new circle e.g. rond_[NUMBER/HASH]
	function getUniqueID(shape) {
		return shape + "_" + parseInt(Math.random() * Date.now());
	}
	/**
	* Creates and adds the shape in shapes object
	*
	* @param {"rond" | "rect" | "trait" | "triangle"} shapeType 
	* @param {{ [key: string]: string | number }} properties 
	*/

	function addShape(shapeId, properties) {
		shapes[shapeId] = properties;
	}

    var textArea = $('textarea#script')[0], // facile
        cmConfig = {
            mode: "text/javascript",
            theme: "icecoder",
            lineWrapping: false,
            lineNumbers: true,
            autofocus: false,
            matchBrackets: true,
            readOnly : false,
            //readOnly : 'nocursor',
        }

    myCodeMirror = CodeMirror.fromTextArea(textArea, cmConfig);

    // Permet de passer de la page d'acceuil au menu d'acceuil

    $("#page_acceuil button").click(function() {
        $("#page_acceuil").css("filter", "blur(5px)")
            .fadeOut(1000);

        $("#acceuil_global").css("filter", "blur(0px)")
            .fadeIn(1000);
    });

    $("#fra").click(function() {

        $("#page_acceuil p").text("Apprends le code informatique avec les oeuvres de Kandinsky !");

        $("#page_acceuil button").text("JOUER");

        $("#acceuil span").text("Avant de commencer...");

        $("#ages0").text("Votre âge...");

        $("#ages1").text("2 - 10 ans");

        $("#ages2").text("11 - 17 ans");

        $("#ages3").text("18  - 35 ans");

        $("#ages4").text("36 - 65 ans");

        $("#ages5").text("65 ou plus...");

        $("#categ0").text("Votre situation...");

        $("#categ1").text("Ecolier");

        $("#categ2").text("Collégien - Lycéen");

        $("#categ3").text("Etudiant");

        $("#categ4").text("Travailleur");

        $("#categ5").text("Retraité");

        $("#categ6").text("Autres...");

        $("#cpts0").text("Votre niveau en code...");

        $("#cpts1").text("Aucunes notions");

        $("#cpts2").text("Amateur");

        $("#cpts3").text("Intermédiaire");

        $("#cpts4").text("Confirmé");

        $("#acceuil2 p").text("Nous vous conseillons le niveau :");

        $("#apropos_descr").text("L'agence LAMA vous présente son application Codinsky. Un jeu éducatif pour les petits et les grands. L'application a pour but d'apprendre le code informatique par le biais des oeuvres de Kandinsky tout en s'amusant. Cette application a été créée à l'occasion de la \"Fête du code\" qui a eu lieu au Centre Pompidou. La création de cette application a été réalisé par 4 étudiants de Licence Professionnelle Conception Rédaction et Réalisation Web à l'UPEM (voir ci-dessus).");

        $(".niv_1").text("Amateur");

        $(".niv_2").text("Difficile");

        $("#imgF1").attr("src","../img/Slider/facile1.png");

        $("#imgF2").attr("src","../img/Slider/facile2.png");

        $("#imgF3").attr("src","../img/Slider/facile3.png");

        $("#imgF4").attr("src","../img/Slider/facile4.png");

        $("#imgF5").attr("src","../img/Slider/facile5.png");

        $("#imgD1").attr("src","../img/Slider/difficile1.png");

        $("#imgD2").attr("src","../img/Slider/difficile2.png");

        $("#imgD3").attr("src","../img/Slider/difficile3.png");

        $("#imgD4").attr("src","../img/Slider/di4ficile4.png");

        $("#imgD5").attr("src","../img/Slider/difficile5.png");

        $("#imgD6").attr("src","../img/Slider/difficile6.png");

        $("#carre").attr("title","Carré");

        $("#rond").attr("title","Rond");

        $("#triangle").attr("title","Triangle");

        $("#trait").attr("title","Trait");

        $("#tableaux").attr("title","Tableaux de Kandinsky");

        $("#anecdote").attr("title","Anecdotes de Kandinsky");

        $("#retour").attr("title","Supprimer dernière forme");

        $("#rafraichir").attr("title","Supprimer toutes les formes");

        $("#save").attr("title","Enregistrer");

        $("#close").attr("title","Quitter l'application");

        $("#label_1").text("Hauteur");

        $("#label_2").text("Largeur");

        $("#label_3").text("Position X");

        $("#label_4").text("Position Y");

        $("#label_5").text("Rotation");

        $("#label_6").text("Bordure");

        $("#label_7").text("Couleur");

        $("#index1").text("Creer un carré :");

        $("#index2").text("Creer un rond :");

        $("#index3").text("Creer un triangle :");

        $("#index4").text("Creer un trait :");

        $("#index5").text("Couleur :");

        $("#index6").text("Exemples :");

        $("#index7").text("Blanc :");

        $("#index8").text("Noir :");

        $("#index9").text("Rouge :");

        $("#index10").text("Vert :");

        $("#index11").text("Bleu :");

        $("#index12").text("entre 0 et 255 / Transparence entre 0 et 1");

        $("#index13").text("rgba(rouge,vert,bleu,transparence)");

        $("#popUp_reload p").text("VOULEZ-VOUS QUITTER L'APPLICATION ?");

        $("#quitter").text("Quitter");

        $("#annuler").text("Annuler");

    });

    $("#eng").click(function() {

        $("#page_acceuil p").text("Learn the computeur code with the works of Kandinsky!");

        $("#page_acceuil button").text("PLAY");

        $("#acceuil span").text("Before starting...");

        $("#ages0").text("Your age...");

        $("#ages1").text("2 - 10 years old");

        $("#ages2").text("11 - 17 years old");

        $("#ages3").text("18  - 35 years old");

        $("#ages4").text("36 - 65 years old");

        $("#ages5").text("65 or more...");

        $("#categ0").text("Your situation...");

        $("#categ1").text("Primary");

        $("#categ2").text("Secondary school - High school");

        $("#categ3").text("Studient");

        $("#categ4").text("Worker");

        $("#categ5").text("Retirement ");

        $("#categ6").text("Others...");

        $("#cpts0").text("Your skill level in computer code...");

        $("#cpts1").text("Nothing");

        $("#cpts2").text("Beginner");

        $("#cpts3").text("Intermediary");

        $("#cpts4").text("Confirmed");

        $("#acceuil2 p").text("We advise you the level :");

        $("#apropos_descr").text("The agency LAMA presents its application Codinsky. An educational game for young and old too. The purpose of the application is to learn the computer code by the works of Kandinsky while having fun. This application was created on the occasion of the \"Fête du code\" which took place at the Centre Pompidou. The creation of this application was carried out by 4 students of Professional Degree in Design, Writing and Web Design at the UPEM (see above)");

        $(".niv_1").text("Beginner");

        $(".niv_2").text("Difficult");

        $("#imgF1").attr("src","../img/Slider/EN_facile1.png");

        $("#imgF2").attr("src","../img/Slider/EN_facile2.png");

        $("#imgF3").attr("src","../img/Slider/EN_facile3.png");

        $("#imgF4").attr("src","../img/Slider/EN_facile4.png");

        $("#imgF5").attr("src","../img/Slider/EN_facile5.png");

        $("#imgD1").attr("src","../img/Slider/EN_difficile1.png");

        $("#imgD2").attr("src","../img/Slider/EN_difficile2.png");

        $("#imgD3").attr("src","../img/Slider/EN_difficile3.png");

        $("#imgD4").attr("src","../img/Slider/EN_difficile4.png");

        $("#imgD5").attr("src","../img/Slider/EN_difficile5.png");

        $("#imgD6").attr("src","../img/Slider/EN_difficile6.png");

        $("#carre").attr("title","Square");

        $("#rond").attr("title","Circle");

        $("#triangle").attr("title","Triangle");

        $("#trait").attr("title","Line");

        $("#tableaux").attr("title","Paintings of Kandinsky");

        $("#anecdote").attr("title","Sentences of Kandinsky");

        $("#retour").attr("title","Delete last form");

        $("#rafraichir").attr("title","Delete all forms");

        $("#save").attr("title","Save");

        $("#close").attr("title","Quit the application");

        $("#label_1").text("Height");

        $("#label_2").text("Width");

        $("#label_3").text("Position X");

        $("#label_4").text("Position Y");

        $("#label_5").text("Rotation");

        $("#label_6").text("Border");

        $("#label_7").text("Color");

        $("#index1").text("Create a square :");

        $("#index2").text("Create a circle :");

        $("#index3").text("Create a triangle :");

        $("#index4").text("Create a line :");

        $("#index5").text("Color :");

        $("#index6").text("Examples :");

        $("#index7").text("White :");

        $("#index8").text("Black :");

        $("#index9").text("Red :");

        $("#index10").text("Green :");

        $("#index11").text("Blue :");

        $("#index12").text("between 0 and 255 / Transparency between 0 and 1");

        $("#index13").text("rgba(red,green,blue,transparency)");

        $("#popUp_reload p").text("WOULD YOU LIKE TO QUIT THE APP ?");

        $("#quitter").text("Leave");

        $("#annuler").text("Cancel");
    });

    // Permet de faire apparaitre la fleche pour passer au menu suivant
    $("select").mouseleave(function() {

        var ages = $("#ages").val();

        var categ = $("#categ").val();

        var cpts = $("#cpts").val();

        if (ages != "" && categ != "" && cpts != "") {

            $("#boutonSuivant").fadeIn(500);

            $("#boutonSuivant").click(function() {

                $("section span").animate({

                    marginLeft: "-1500px"
                });

                $("select").animate({

                    marginLeft: "-1500px"
                });

                var valAges = parseInt(ages);
                var valCateg = parseInt(categ);
                var valCpts = parseInt(cpts);

                var resultNiveau = valAges + valCateg + valCpts;

                if (resultNiveau <= 7) {

                    $("#acceuil2 .niv_2").css("opacity", "0.5");
                } else if (resultNiveau >= 8) {

                    $("#acceuil2 .niv_1").css("opacity", "0.5");
                }

                $("#acceuil2").fadeIn(500);

                $("#boutonSuivant").fadeOut(250);

            });
        } else {

            $("#boutonSuivant").fadeOut(250);
        }
    });

    // Permet d'afficher l'appli en fonction du niveau
    $("#acceuil2 button").click(function() {

        $("#acceuil_global").fadeOut(1000);

    });

    //Affiche la popup a propos
    $("#apropos").click(function() {
        $(".popup_apropos").fadeIn(250);
    });

    //Permet d'afficher la popUp après avoir séléctionner le niveau
    $(".popUp_niveau .close_popUp").click(function() {

        $(".popUp_niveau").fadeOut(1000);

        $("#conteneur").fadeIn(1000);

    });

    // Pour le niveau Facile
    $(".niv_1").click(function() {

        facile();


    });

    // Pour le niveau Difficile
    $(".niv_2").click(function() {

        difficile();

    });

    // Affiche la popup "Tableaux"
    $("#tableaux").click(function() {

        $("#conteneur").css("filter", "blur(5px)");

        $(".popUp").fadeOut(250);

        $("#popUp_tableaux").fadeIn(250);

    });

    // Affiche la popup "Anecdote"
    $("#anecdote").click(function() {

        $("#conteneur").css("filter", "blur(5px)");

        $(".popUp").fadeOut(250);

        $("#popUp_anecdote").fadeIn(250);

        var tabAncdote = [
            // 1
            '"Je peint des oeuvres abstrait cela veut dire que je ne peint pas des choses qui existent. "',
            // 2
            '"C’est en entrant dans son atelier qu’il eu une révélation en voyant un de ses tableaux posé à l’envers et qu’il ne reconnu pas le sujet qu’il avait peint. Cette sensation lui plut beaucoup et il décida de ne peindre alors que des sujets non-figuratifs, pour ne s’attarder que sur les formes et couleurs."',
            // 3
            '"Le point est, intérieurement la forme la plus concise."',
            // 4
            '"L\'artiste est la main qui par l\'usage convenable de telle ou telle touche met l\'âme humaine en vibration."',
            // 5
            '"En règle générale, la couleur est donc un moyen d\'exercer une influence directe sur l\'âme."',
            // 6
            '"Toute œuvre d\'art est l\'enfant de son temps et, bien souvent, la mère de nos sentiments."',
            // 7
            '"Créer une œuvre, c\'est créer un monde."',
            // 8
            '"Le rouge, couleur essentiellement chaude, agit intérieurement comme une couleur débordante d\'une vie ardente et agitée."',
            // 9
            '"Le noir est comme le silence dans lequel entre le corps après la mort quand la vie s\'est usée jusqu\'au bout."',
            // 10
            '"Les couleurs sont les touches d’un clavier, les yeux sont les marteaux , et l’âme est le piano lui-même, aux cordes nombreuses, qui entrent en vibration."',
            // 11
            '"Le blanc sonne comme un silence, un rien avant tout commencement."'
        ]

        var randomNum = Math.floor((Math.random() * 10) + 2);

        randomNum = randomNum - 1;

        $("#popUp_anecdote p").html(tabAncdote[randomNum]);

    });

    // Donne un style lorsque l'on ferme les popUps
    $(".close_popUp").click(function() {

        $("#conteneur").css("filter", "blur(0px)");

        $(".popUp_niveau").fadeOut(250);

        $(".popUp").fadeOut(250);

        $(".popup_apropos").fadeOut(250);

    });

    var textureOpen = false;

    $("#conteneur_table table button").click(function() {

        if(textureOpen == false) {

            $("#popUp_texture").fadeIn(250);

            textureOpen = true;

        } else {

            $("#popUp_texture").fadeOut(250);

            textureOpen = false;
        }

    });

    $(document).click(ClickCheckTexture);

    // Permet d'enregistrer l'oeuvre
    $("#save").click(function() {

        var url = "";

        var svg = document.querySelector("svg");

        var svgData = new XMLSerializer().serializeToString(svg);

        var svgH = $("svg").height();

        var svgW = $("svg").width();

        var canvas = document.createElement("canvas");

        var ctx = canvas.getContext("2d");

        canvas.height = svgH;

        canvas.width = svgW;

        var img = document.createElement("img");

        img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));

        img.onload = function() {

            ctx.drawImage(img, 0, 0);

            url = canvas.toDataURL("image/png");

            enregistrer(url);
        };

    });

    // Relance l'appli depuis le début
    $("#close").click(function() {

        $(".popUp").fadeOut(250);

        $("#popUp_reload").fadeIn(250);

        $("#conteneur").css("filter", "blur(5px)");

        $("#quitter").click(function() {

            $(".popUp").fadeOut(250);

            $("#conteneur").fadeOut(1500, function() {

                $("#conteneur").css("filter", "blur(0px)");

                window.location.reload();
            });
        });

        $("#annuler").click(function() {

            $(".popUp").fadeOut(250);

            $("#conteneur").css("filter", "blur(0px)");
        });

    });

    // Affiche l'index pour le niveau difficile
    var indexOpen = false;

    $("#index").click(function() {

        if (indexOpen == false) {

            $("#index").animate({height: "65%"}, 250);

            indexOpen = true;

            $("#index figure img").attr("src", "../img/arrow_down.png");

            $("#index ul").css("display", "inline-block").show();

        } else {

            $("#index").animate({height: "16px"}, 250);

            indexOpen = false;

            $("#index figure img").attr("src", "../img/arrow_up.png");

            $("#index ul").hide();

        }
    });

    /* --------------------------------------------------- */
    /* Initialisation des fontions pour modifier l'appli   */
    /* --------------------------------------------------- */

    function facile() {
        //toutSupprimer();
        var code = myCodeMirror.getValue();
        myCodeMirror.setValue('');
        myCodeMirror.getValue(code);
        Level = 0;

        $("#popUp_niveau_facile").fadeIn(1000);

        $("#conteneur_table input[type='text']").attr("type", "range");

        $(".CodeMirror").animate({height: "59%"}, 250);

        $("#conteneur_bouton_G").fadeIn(250);

        $("#conteneur_table").fadeIn(250);

        $("#index").slideUp();

        $("#conteneur_bouton_niveaux .niv_1").css("opacity", "1");

        $("#conteneur_bouton_niveaux .niv_2").css("opacity", "0.5");

    }

    function difficile() {
        //toutSupprimer();
        var code = myCodeMirror.getValue();
        myCodeMirror.setValue('');
        myCodeMirror.getValue(code);
        Level = 1;

        $("#popUp_niveau_difficile").fadeIn(1000);

        $("#conteneur_table").fadeOut(250);

        $("#conteneur_bouton_G").fadeOut(250);

        $(".CodeMirror").animate({height: "84.5%"}, 250);

        $("#index").slideDown();

        $("#conteneur_bouton_niveaux .niv_1").css("opacity", "0.5");

        $("#conteneur_bouton_niveaux .niv_2").css("opacity", "1");

    }

    /* -------------------------------------------------------- */
    /* Initialisation de le fontion pour enregistrer l'oeuvre   */
    /* -------------------------------------------------------- */

    function enregistrer(url) {

        var lienDL = $("<a>").attr("href", url).attr("download", "file.png").appendTo("body");

        lienDL[0].click();

        lienDL.remove();

    }

    /* --------------------------------------------------------- */
    /* Initialisation de le fontion pour fermer la popUp texture */
    /* --------------------------------------------------------- */

    function ClickCheckTexture(event) {

        var el = $(event.target);

        if(el[0].id != "textureBouton") {

            $("#popUp_texture").fadeOut(250);

        }

    }
    /* -------------------------------------------------------- */
	/* Evènements sur les boutons permettants d'ajouter des formes  */
	/* -------------------------------------------------------- */



	const $svg      = $('svg#drawzone');

	const $carre    = $('#carre');
	const $rond     = $('#rond');
	const $triangle = $('#triangle');
	const $trait    = $('#trait');
	const $supprimer   = $('#retour');
	const $toutSupprimer   = $('#rafraichir');

	$carre.on('click', carre);
	$rond.on('click', rond);
	$triangle.on('click', triangle);
	$trait.on('click', trait);
	$supprimer.on('click', supprimer);
	$toutSupprimer.on('click', toutSupprimer);

    /* ------------------------------------------------------------ */
	/*                               TEXTURES                       */
	/* ------------------------------------------------------------ */

    $("img#texture1").on('click', function() { // ../img/Textures/1.jpg fill="url(#img1)"
		/*$svg
			.find('.selected')
			.attr({
			'fill' : "../img/Textures/1.jpg", // sera pris en compte si l'élément sélectionné est un carré <rect>
		});*/

        $svg.find(".selected")[0].style.backgroundImage = url("../img/Textures/1.jpg");
	});

//    $("img#texture1").on('click', function() { // ../img/Textures/1.jpg fill="url(#img1)"
//		$svg
//			.find('.selected')
//			.css({
//			'background-image' : fill="url(#texture1)", // sera pris en compte si l'élément sélectionné est un carré <rect>
//		});
//	});




	function supprimer() {
		var forme_selectionnee = d3.selectAll(".selected");// on selectionne la forme sélectionnée
		forme_selectionnee.remove();
		var code = myCodeMirror.getValue();
		myCodeMirror.setValue('');
		myCodeMirror.getValue(code);
	}

	function toutSupprimer() {
		$svg.children().remove();
		var code = myCodeMirror.getValue();
		myCodeMirror.setValue('');
		myCodeMirror.getValue(code);
	}


	function rond() {
		ID_forme = 0;

		$svg.children().removeClass('selected');

		var tbColor = $('#tbColor').val();

		d3.select('svg#drawzone')
			.append('circle')
			.attr('cx', $posX.val())
			.attr('cy', $posY.val())
			.attr('r', 75)
			.attr('fill', tbColor)
			.attr('stroke', "black")
			.attr('stroke-width',1)
			.classed('selected', true);

		afficher_cc();
	}

	function carre() {
		ID_forme = 1;

		$svg.children().removeClass('selected');

		var tbColor = $('#tbColor').val();

		d3.select('svg#drawzone')
			.append('rect')
			.attr('x', $posX.val())
			.attr('y', $posY.val())
			.attr('width', 150)
			.attr('height', 150)
			.attr('angle', 0)
			.attr('fill', tbColor)
			.attr('stroke', "black")
			.attr('stroke-width',1)
			.attr('id', getUniqueID())
			.classed('selected', true);

		afficher_cc();

	}

	function triangle(){
		ID_forme = 2;
		$svg.children().removeClass('selected');
		var tbColor = $('#tbColor').val();
		var triangleSize = 2500;
		var verticalTransform = 50 + Math.sqrt(triangleSize);  //$epaisseur.val()

		var triangle = d3.symbol()
		.type(d3.symbolTriangle)
		.size(triangleSize)
		;

		d3.select('svg#drawzone')
			.append("path")
			.attr('tx', $posX.val())
			.attr('ty', $posY.val())
      .attr('width', 150)
			.attr("d", triangle)
      .attr('angle', 0)
			.attr('stroke', "black")
			.attr('stroke-width',1)
			.attr("fill", tbColor)
			.classed('selected', true);

		afficher_cc();
	}


	function trait(){
		ID_forme = 3;

		$svg.children().removeClass('selected');

		var tbColor = $('#tbColor').val();

		d3.select('svg#drawzone')
			.append('rect')
			.attr('x', $posX.val())
			.attr('y', $posY.val())
			.attr('width', 1)
			.attr('height', 150)
            .attr('angle', 0)
			.attr('fill', tbColor)
			.attr('stroke', "black")
			.attr('stroke-width',1)
			.classed('selected', true);

		afficher_cc();
	}


	function afficher_cc(){

		switch(ID_forme) {
			case 0:
				afficher_cc_cercle()
				break;
			case 1:
				afficher_cc_rect()
				break;
			case 2:
				afficher_cc_triangle()
				break;
			case 3:
				afficher_cc_trait()
				break;
		}

	}

	function afficher_cc_cercle() {
		var selectedElement = $svg.find('.selected');

		var cm_cx = selectedElement.attr('cx');
		var cm_cy = selectedElement.attr('cy');
		var cm_r = selectedElement.attr('r');
		var cm_s = selectedElement.attr('stroke-width');
		var cm_color = selectedElement.attr('fill');

		// append it to the shapes object
		var shapeId = getUniqueID("rond");
		addShape(shapeId, {
			position_x: cm_cx,
			position_y: cm_cy,
			rayon: cm_r,
			bordure: cm_s,
			couleur: cm_color,
		});

		var newCode = shapeId + '(){\n'+
			'\t Position x:' + cm_cx + ';\n'+
			'\t Position y:' + cm_cy + ';\n'+
			'\t Rayon:' + cm_r + ';\n' +
			'\t Bordure:' + cm_s + ';\n' +
			'\t Couleur:' +cm_color+ ';\n}';

		myCodeMirror.setValue(myCodeMirror.getValue() + "\n" + newCode);
	}

	function afficher_cc_rect() {
		var selectedElement = $svg.find('.selected');

		var cm_x = selectedElement.attr('x');
		var cm_y = selectedElement.attr('y');
		var cm_h = selectedElement.attr('height');
		var cm_l = selectedElement.attr('width');
		var cm_a = selectedElement.attr('angle');
		var cm_s = selectedElement.attr('stroke-width');
		var cm_color = selectedElement.attr('fill');

		// append it to the shapes object
		var shapeId = getUniqueID("rect");
		addShape(shapeId, {
			position_x: cm_x,
			position_y: cm_y,
			height: cm_h,
			width: cm_l,
			angle: cm_a,
			stroke_width: cm_s,
			couleur: cm_color,
		});

		var newCode = shapeId + '(){\n'+
			'\t Position x :' + cm_x + ';\n'+
			'\t Position y :' + cm_y + ';\n'+
			'\t Hauteur :' + cm_h + ';\n'+
			'\t Largeur :' + cm_l + ';\n'+
			'\t Bordure :' + cm_s + ';\n'+
			'\t Angle :'+ cm_a +'; \n'+
			'\t Couleur :' +cm_color+ ';\n}';

		myCodeMirror.setValue(myCodeMirror.getValue() + "\n" + newCode);
	}



	function afficher_cc_triangle() {
		var selectedElement = $svg.find('.selected');

		var cm_color = selectedElement.attr('fill');
		var cm_s = selectedElement.attr('stroke-width');
        var cm_tx = selectedElement.attr('tx');
        var cm_ty = selectedElement.attr('ty');
        var cm_l = selectedElement.attr('width');
		var cm_a = selectedElement.attr('angle');
		
		// append it to the shapes object
		var shapeId = getUniqueID("triangle");
		addShape(shapeId, {
			position_x: cm_tx,
			position_y: cm_ty,
			width: cm_l,
			angle: cm_a,
			stroke_width: cm_s,
			couleur: cm_color,
		});

		var newCode = shapeId + '(){\n'+
			'\t Position x :' + cm_tx +';\n'+
			'\t Position y :' + cm_ty +';\n'+
			'\t Largeur :' + cm_l + ';\n'+
			'\t Angle :' + cm_a + ';\n'+
			'\t Bordure :' + cm_s + ';\n'+
			'\t Couleur :' +cm_color+ ';\n}';

		myCodeMirror.setValue(myCodeMirror.getValue() + "\n" + newCode);
	}

	function afficher_cc_trait() {
		var selectedElement = $svg.find('.selected')

		var cm_x = selectedElement.attr('x');
		var cm_y = selectedElement.attr('y');
		var cm_h = selectedElement.attr('height');
		var cm_l = selectedElement.attr('width');
        var cm_a = selectedElement.attr('angle');
		var cm_s = selectedElement.attr('stroke-width');
		var cm_color = selectedElement.attr('fill');
		

		// append it to the shapes object
		var shapeId = getUniqueID("trait");
		addShape(shapeId, {
			position_x: cm_x,
			position_y: cm_y,
			height: cm_h,
			width: cm_l,
			angle: cm_a,
			stroke_width: cm_s,
			couleur: cm_color,
		});

		var newCode =  shapeId + '(){\n'+
				'\t Position x :' + cm_x + ';\n'+
				'\t Position y :' + cm_y + ';\n'+
				'\t Longueur :' + cm_h + ';\n'+
				'\t Bordure :' + cm_s + ';\n'+
				'\t Angle :'+ cm_a +'; \n'+
				'\t Couleur :' +cm_color+';\n}'
			;
			myCodeMirror.setValue(myCodeMirror.getValue() + "\n" + newCode);
		}

	/* -------------------------------------------------------- */
	/*     Evènements permettant de gérer les input range       */
	/* -------------------------------------------------------- */

	const $table     = $('#conteneur_table > table');

	const $couleur	 = $table.find('#tbColor');
	const $taille    = $table.find('#rangeTaille');
	const $epaisseur = $table.find('#rangeEpaisseur');
	var $posX        = $table.find('#rangePosX');
	var $posY        = $table.find('#rangePosY');
	const $bordure   = $table.find('#rangeBordure');
	const $rotation  = $table.find('#rangeRotation');

	var ID_forme;

	myCodeMirror.on("change",function(a, changeObj){
		console.log("CHANGE MOFO", changeObj)
		if(Level == 1){
			var code = myCodeMirror.getValue();
			cm_regex_check_function(code); // va vérifier si la fonction est correcte puis va l'executer
			if(instance == 1){
				if(counterLoop == false){ // pour éviter que afficher_cc ne fasse une boucle infinie
					afficher_cc();
					counterLoop = true;
				}
				cm_regex(code);
                cm_regex_clear(code);
			}

			if(code == ""){ // Grace a la magie, si on supprime le contenu de l'éditeur, on va pouvoir appeler une nouvelle fonction
				counterLoop = false;
				instance = 0;
			};
		}
	});

	// Gestion du clic sur une forme présente dans la zone de dessin <svg>
	$svg.on('click', 'circle', function() {
		ID_forme = 0;
		var $clickedElement = $(this);
		$svg.children().removeClass('selected');
		$clickedElement.addClass('selected');
		// afficher_cc();
	});

	$svg.on('click', 'rect', function() {

		var width = $svg.find('.selected').attr('width');
		if(width == 1){ID_forme = 3}
		else ID_forme = 1;
		var $clickedElement = $(this);
		$svg.children().removeClass('selected');
		$clickedElement.addClass('selected');
		// afficher_cc();
	});
 
	$svg.on('click', 'path', function() {
		ID_forme = 2;
		var $clickedElement = $(this);
		$svg.children().removeClass('selected');
		$clickedElement.addClass('selected');
		// afficher_cc();
	});

	$svg.on('click', function(e) {
		if (e.target.id === "drawzone") {
			$svg.children().removeClass('selected');
		}
	});

  var tampon_d;


	//==============================================================================

	function cm_regex(code){

		switch(ID_forme) {
			case 0:
				cm_regex_rond(code)
				break;
			case 1:
				cm_regex_rect(code)
				break;
			case 2:
				cm_regex_triangle(code)
				break;
            case 3:
				cm_regex_trait(code)
				break;
		}
	}


    function cm_regex_clear(code){
        var s = code;
		var result = [], m, rx = /(clear\(\))/i;

		while(((m = rx.exec(s)))!==null){
			result.push(m[1]);
		}
//
//        if(result[0] == "clear()"){console.log("ok")}
//        console.log(result[0]);
    }

	function cm_regex_check_function(code){

		switch(code) {
			case "rond()":
				eval(code);
				instance = 1;
				break;
			case "carre()":
				eval(code);
				instance = 1;
				break;
			case "triangle()":
				eval(code);
				instance = 1;
				break;
			case "trait()":
				eval(code);
				instance = 1;
				break;
		}

	}

	function cm_regex_rond(code) { //on recupere la ce qu'il y a entre les : et les ; puis on les stocks dans un tableau

		var s = code;
		var result = [], m, rx = /:(.*?);/g;

		while(((m = rx.exec(s)))!==null){
			result.push(m[1]);
		}
		set_cercle_PosX(result[0]);
		set_cercle_PosY(result[1]);
		set_cercle_Epaisseur(result[2]);
		set_Bordure(result[3]);
		set_Couleur(result[4]);
	}

	function cm_regex_rect(code) {

		var s = code;
		var result = [], m, rx = /:(.*?);/g;

		while(((m = rx.exec(s)))!==null){
			result.push(m[1]);
		}
		set_rect_PosX(result[0]);
		set_rect_PosY(result[1]);
		set_rect_Taille(result[2]);
		set_rect_Epaisseur(result[3]);
		set_Bordure(result[4]);
		set_angle(result[5]);
		set_Couleur(result[6]);

	}

	function cm_regex_triangle(code) {

		var s = code;
		var result = [], m, rx = /:(.*?);/g;

		while(((m = rx.exec(s)))!==null){
			result.push(m[1]);
		}
		set_triangle_parameters(result[0],result[1],result[3],result[2]);
		set_Bordure(result[4]);
		set_Couleur(result[5]);
	}

	function cm_regex_trait(code) {

		var s = code;
		var result = [], m, rx = /:(.*?);/g;

		while(((m = rx.exec(s)))!==null){
			result.push(m[1]);
		}
		set_rect_PosX(result[0]);
		set_rect_PosY(result[1]);
		set_rect_Taille(result[2]);
		set_Bordure(result[3]);
		set_angle(result[4]);
		set_Couleur(result[5]);
	}

	//================================CERCLE===============================

	function set_cercle_PosX(x) {
		$svg
			.find('circle.selected')
			.attr({
			'cx' : x, // sera pris en compte si l'élément sélectionné est un cercle <circle>
			//            'transform' : "translate(" + rangeValue + "," + $posY.val() + ")"
		});

	}

	function set_cercle_PosY(x) {
		$svg
			.find('circle.selected')
			.attr({
			'cy' : x, // sera pris en compte si l'élément sélectionné est un cercle <circle>
			//            'transform' : "translate(" + rangeValue + "," + $posY.val() + ")"
		});

	}

	function set_cercle_Epaisseur(x) {
		$svg
			.find('circle.selected')
			.attr({
			'r' : x, // sera pris en compte si l'élément sélectionné est un carré <rect>
		});

	}

	//================================RECT===============================

	function set_rect_PosX(x) {
		$svg
			.find('rect.selected')
			.attr({
			'x' : x, // sera pris en compte si l'élément sélectionné est un cercle <circle>
			//            'transform' : "translate(" + rangeValue + "," + $posY.val() + ")"
		});

	}

	function set_rect_PosY(x) {
		$svg
			.find('rect.selected')
			.attr({
			'y' : x, // sera pris en compte si l'élément sélectionné est un cercle <circle>
			//            'transform' : "translate(" + rangeValue + "," + $posY.val() + ")"
		});

	}

	function set_rect_Epaisseur(x) {
		$svg
			.find('rect.selected')
			.attr({
			'width' : x, // sera pris en compte si l'élément sélectionné est un carré <rect>
		});

	}

	function set_rect_Taille(x) {
		$svg
			.find('rect.selected')
			.attr({
			'height' : x, // sera pris en compte si l'élément sélectionné est un carré <rect>
		});

	}

	function set_angle(x) {

        var temp_x = $svg.find('rect.selected').attr('x');
        var epaisseur = $svg.find('rect.selected').attr('width');
        var temp_y = $svg.find('rect.selected').attr('y');
        var taille = $svg.find('rect.selected').attr('height');

        if(x == undefined){x = 0}
        else {$svg.find('rect.selected').attr({'angle': x});} //on met la valeur récupérée dans l'attribut angle du triangle
        var temp_a = $svg.find('rect.selected').attr('angle');

        temp_x = parseInt(temp_x);
        epaisseur = parseInt(epaisseur);
        temp_y = parseInt(temp_y);
        taille = parseInt(taille);

        epaisseur = epaisseur/2;
        taille = taille/2;

        if(temp_a == undefined){x = 0}

        $svg
            .find('rect.selected')
            .attr({
            'transform' : "translate("+temp_x+" "+temp_y+") rotate(" + temp_a + ")" //pour le rectangle
        });
    }


	//================================TRIANGLE===============================

    var tampon_epaisseur

	function set_triangle_parameters(x,y,a,e) {

  /*      tampon_epaisseur = e;
        var temp_d = $svg.find('path.selected').attr('d');
        if(temp_d="M0,0L0,0L0,0Z"){$svg
			.find('path.selected')
			.attr({
            'd'     : d3.symbol().type(d3.symbolTriangle).size(tampon_epaisseur)
		});}

  */

    tampon_epaisseur = e;
    var temp_d = $svg.find('path.selected').attr('d');
    if($svg.find('path.selected').attr('d')="M0,0L0,0L0,0Z"){$svg
  .find('path.selected')
  .attr({
        'd'     : d3.symbol().type(d3.symbolTriangle).size(temp_d)
});}


        if(x == undefined){x = 0}
        else {$svg.find('path.selected').attr({'tx': x});}
        if(y == undefined){y = 0}
        else {$svg.find('path.selected').attr({'ty': y});}
        if(a == undefined){a = 0}
        else {$svg.find('path.selected').attr({'angle': a});}
        if(e == undefined){e = 0}
        else {$svg.find('path.selected').attr({'width': e});}

        var temp_tx = $svg.find('path.selected').attr('tx');
        var temp_ty = $svg.find('path.selected').attr('ty');
        var temp_a = $svg.find('path.selected').attr('angle');
        var temp_e = $svg.find('path.selected').attr('width');

		$svg
			.find('path.selected')
			.attr({
			'transform' : "translate("+ temp_tx + "," + temp_ty + ") rotate("+ temp_a +")",
            'd'     : d3.symbol().type(d3.symbolTriangle).size(e*200)
		});

	}

	function set_triangle_PosY(x) {
//
//        var temp_tx = $svg.find('path.selected').attr('tx');
//        var temp_a = $svg.find('path.selected').attr('angle');
//
//        if(x == undefined){x = 0}
//        else {$svg.find('path.selected').attr({'ty': x,});} //on met la valeur récupérée dans l'attribut angle du triangle
//
//        var temp_ty = $svg.find('path.selected').attr('ty');
//
//
//		if(x == undefined){x = 0}
////		if(x == ""){x = 0}
//
//		$svg
//			.find('path.selected')
//			.attr({
//			'transform' : "translate("+ temp_tx + "," + temp_ty + ") rotate("+ temp_a+")",
//		});
	}
//
	function set_triangle_epaisseur(x) {

//		if(x == undefined){x = 0}
//		if(x == ""){x = 0}
//
//		$svg
//			.find('path.selected')
//			.attr({
//			'd'     : d3.symbol().type(d3.symbolTriangle).size(x*200)
//		});
	}


//     var supertampon = 0;

    function set_angle_triangle(x) {
//
//        var temp_tx = $svg.find('path.selected').attr('tx');
//        var temp_ty = $svg.find('path.selected').attr('ty');
//
////        if(x != 0){supertampon = x}
////        else {x = supertampon}
//
//
//		if(x == undefined){x = 0}
//
//		if(x == 0){x = 0}
//        else {$svg.find('path.selected').attr({'angle': x,});} //on met la valeur récupérée dans l'attribut angle du triangle
//
//        var temp_a = $svg.find('path.selected').attr('angle');//puis, on on la met dans un tampon pour translater le triangle
//
//	$svg
//			.find('path.selected')
//			.attr({
//			'transform' : "translate("+ temp_tx + "," + temp_ty + ") rotate("+ temp_a +")",
//		});
	}


	//================================COMMUN===============================

	function set_Bordure(x) {
		$svg
			.find('.selected')
			.attr({
			'stroke-width' : x,
		});
	}

	function set_Couleur(x) {
		$svg
			.find('.selected')
			.attr({
			'fill' : x, // sera pris en compte si l'élément sélectionné est un carré <rect>
		});
	}


	//==============================================================================

	$couleur.on('click', function () {
		var rangeValue = $(this).val();
		$svg
			.find('.selected')
			.attr({
			'fill' : rangeValue, // sera pris en compte si l'élément sélectionné est un carré <rect>
		});
	});

	//=======================================================Rectangle========================================//

	$posX.on('input change', function () {
		var rangeValue = $(this).val();
		$svg
			.find('rect.selected')
			.attr({
			'x'  : rangeValue, // sera pris en compte si l'élément sélectionné est un carré <rect>
		});
	});

	$posY.on('input change', function () {
		var rangeValue = $(this).val();
		$svg
			.find('rect.selected')
			.attr({
			'y'  : rangeValue, // sera pris en compte si l'élément sélectionné est un carré <rect>
		});
	});

	$taille.on('input change', function () {
		var rangeValue = $(this).val();
		$svg
			.find('rect.selected')
			.attr({
			'height' : rangeValue, // sera pris en compte si l'élément sélectionné est un carré <rect>
		});
	});

	$epaisseur.on('input change', function () {
		var rangeValue = $(this).val();
		$svg
			.find('rect.selected')
			.attr({
			'width' : rangeValue, // sera pris en compte si l'élément sélectionné est un carré <rect>
		});
	});

	$bordure.on('input change', function () {
		var rangeValue = $(this).val();
		$svg
			.find('rect.selected')
			.attr({
			'stroke-width' : rangeValue,
		});
	});

	$rotation.on('input change', function () {
        var rangeValue = $(this).val();

        var temp_x = $svg.find('rect.selected').attr('x');//on recupere la valeur de x pour la translation du rect
        var epaisseur = $svg.find('rect.selected').attr('width');
        var temp_y = $svg.find('rect.selected').attr('y');//on recupere la valeur de y pour la translation du rect
        var taille = $svg.find('rect.selected').attr('height');

        //temp_x = 0;
        //temp_y = 0;

        temp_x = parseInt(temp_x);
        epaisseur = parseInt(epaisseur);
        temp_y = parseInt(temp_y);
        taille = parseInt(taille);

        epaisseur = epaisseur/2;
        taille = taille/2;

        $svg
            .find('rect.selected')
            .attr({
            'angle' : rangeValue,
            'transform' : "translate("+temp_x+" "+temp_y+") rotate("+rangeValue+")" //pour le rectangle
        });
    });

	//========================================================================================================//


	//=======================================================Cercle===========================================//
	$posX.on('input change', function () {
		var rangeValue = $(this).val();
		$svg
			.find('circle.selected')
			.attr({
			'cx' : rangeValue, // sera pris en compte si l'élément sélectionné est un cercle <circle>
			//            'transform' : "translate(" + rangeValue + "," + $posY.val() + ")"
		});
	});

	$posY.on('input change', function () {
		var rangeValue = $(this).val();
		$svg
			.find('circle.selected')
			.attr({
			'cy' : rangeValue, // sera pris en compte si l'élément sélectionné est un cercle <circle>
			//           'transform' : "translate(" + $posX.val() + "," + rangeValue + ")"

		});
	});

	$epaisseur.on('input change', function () {
		var rangeValue = $(this).val();
		$svg
			.find('circle.selected')
			.attr({
			'r'     : rangeValue, // sera pris en compte si l'élément sélectionné est un cercle <circle>
		});
	});

	$bordure.on('input change', function () {
		var rangeValue = $(this).val();
		$svg
			.find('circle.selected')
			.attr({
			'stroke-width' : rangeValue,
		});
	});

	//========================================================================================================//


	//=======================================================TRIANGLE========================================//

	$posX.on('input change', function () {
		var rangeValue = $(this).val();
		$svg
			.find('path.selected')
			.attr({
			'transform' : "translate(" + rangeValue + "," + $posY.val() + ") rotate(" +$rotation.val()+ ")",
            'tx' : rangeValue,
		});
	});


	$posY.on('input change', function () {
		var rangeValue = $(this).val();
		$svg
			.find('path.selected')
			.attr({
			'transform' : "translate(" + $posX.val() + "," + rangeValue + ") rotate(" +$rotation.val()+ ")",
            'ty' : rangeValue,
		});
	});

	$epaisseur.on('input change', function () {
		var rangeValue = $(this).val();
		$svg
			.find('path.selected')
			.attr({
			'd'     : d3.symbol().type(d3.symbolTriangle).size($epaisseur.val()*200),
            'width' : rangeValue,
		});
	});

	$bordure.on('input change', function () {
		var rangeValue = $(this).val();
		$svg
			.find('path.selected')
			.attr({
			'stroke-width' : rangeValue,
		});
	});

	$rotation.on('input change', function () {
		var rangeValue = $(this).val();
		$svg
			.find('path.selected')
			.attr({
			'transform' : "translate("+ $posX.val() + "," + $posY.val() + ") rotate("+rangeValue+")",
		});
	});

	//========================================================================================================//
	$posX.on('input change', function () {
		var rangeValue = $(this).val();
		rangeValue = parseInt(rangeValue);
		$svg
			.find('line.selected')
			.attr({
			'x1' : rangeValue, // sera pris en compte si l'élément sélectionné est un cercle <circle>
			'x2' : rangeValue + 45, // sera pris en compte si l'élément sélectionné est un cercle <circle>
		});
	});


	$posY.on('input change', function () {
		var rangeValue = $(this).val();
		rangeValue = parseInt(rangeValue);
		$svg
			.find('line.selected')
			.attr({
			'y1' : rangeValue, // sera pris en compte si l'élément sélectionné est un cercle <circle>
			'y2' : rangeValue + 45, // sera pris en compte si l'élément sélectionné est un cercle <circle>
		});
	});
});
