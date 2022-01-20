import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from "./Navbar.js";
import Elements from "./Elements.js";
import Pdf from "../CV_Nolwenn_SIBIRIL.pdf";
 
function About(props) {
  return (
    <>
    <div className="page">
    <Navbar></Navbar>
      <Elements.TitreBalise titre="Nolwenn Sibiril " age="29" />
      <div className="div-wrap">
        <div className="profil">
          <div className="topPres">
            <div className="topPres">
              <img src="assets/photoProfilRWBG.png" alt="Profil" className="profilPic" id="photo"/>
              <div className="reseaux">
                <a href="https://github.com/Nolwenn14"><img src="assets/github-logo.png" alt="logo github" className="icone"/></a>
                <a href="https://www.linkedin.com/in/nolwenn-sibiril-408773226/"><img src="assets/linkedin-logo.png" alt="logo linkedin" className="icone"/></a>
                <Button href={Pdf} className="button" id="CV">CV PDF</Button>
              </div>
            </div>
            <img src="assets/qr-code.png" alt="QR Code" className="profilPic"/>
          </div>
          <div className="presentation">

            <p>« Tu me dis, j’oublie. Tu m’enseignes, je me souviens. Tu m’impliques, j’apprends. »</p><br/>
            <em>- Benjamin Franklin</em>

            <Elements.WhiteSpace px="50"/>

            <Elements.Balise nom="Coordonnées" />
              <Elements.Balise addClass="noBottom" nom="Mail" content="nolwenn.sibiril@gmail.com"/>
              <Elements.Balise addClass="noBottom" nom="téléphone" content="06 30 38 05 50"/>
            <Elements.Balise nom="Coordonnées" close="true"/>


            <Elements.WhiteSpace px="50"/>

            <Elements.Balise nom="Recherche" />
              <div className="content">
                <div className="tab">
                  Contrat d'apprentissage - Alternance<br/>
                  3 semaine entreprise<br/>
                  1 semaine Formation<br/>
                  (Web@cademie by epitech)
                </div>
                <Elements.Balise addClass="noBottom" nom="Dates" content="Mars 2022 - Mai 2023"/>
              </div>
            <Elements.Balise nom="Recherche" close="true"/>

            <Elements.WhiteSpace px="50"/>

            <Elements.Balise nom="Compétences" />
            <Elements.Balise addClass="noBottom" nom="Langues" content="Français, Anglais"/>
            <Elements.Balise addClass="noBottom" nom="Languages" content="HTML/CSS/JS, SASS, PHP, SQL"/>
            <Elements.Balise addClass="noBottom" nom="Frameworks" content="jQuery, React, Laravel, Symfony"/>
            <Elements.Balise addClass="noBottom" nom="Base de donnée" content="mySQL, MongoDB"/>
            <Elements.Balise addClass="noBottom" nom="Graphisme" content="Photoshop/Gimp, Illustrator/Inkscape"/>
            <Elements.Balise addClass="noBottom" nom="Autres" content="Permis B, dessin"/>
            <Elements.Balise nom="Compétences" close="true"/>

            <Elements.WhiteSpace px="50"/>

            <Elements.Balise nom="Formation" />
              <div className="content">
                <div className="tab">
                • Web@cademie by Epitech<br/>Developpeur web full-stack
                </div>
                <Elements.Balise addClass="noBottom" nom="Lieux" content="[94276] Le Kremlin-Bicêtre"/>
                <Elements.Balise nom="Dates" content="Mai 2021 - Mai 2023"/>
              </div>

              <div className="content">
                <div className="tab">
                • Digital Art by Isart Digital<br/>
                </div>
                <Elements.Balise addClass="noBottom" nom="Lieux" content="[75011] Paris"/>
                <Elements.Balise nom="Dates" content="Septembre 2012 - Juin 2013"/>
              </div>

              <div className="content">
                <div className="tab">
                • Niveau BAC STI Arts Appliqués<br/>
                </div>
                <Elements.Balise addClass="noBottom" nom="Lieux" content="[75018] Paris"/>
                <Elements.Balise addClass="noBottom" nom="Dates" content="Juin 2011"/>
              </div>
            <Elements.Balise nom="Formation" close="true"/>

            <Elements.WhiteSpace px="50"/>

            <Elements.Balise nom="Experiences"/>
              <div className="content">
                <div className="tab">
                • Assistant pédagogique<br/>
                  Accompagnement d'élèves d'école de commerce à l'initiation au code
                </div>
                <Elements.Balise addClass="noBottom" nom="Lieux" content="[94276] Le Kremlin-Bicêtre"/>
                <Elements.Balise nom="Dates" content="Octobre 2021 (1 semaine)"/>
              </div>

              <div className="content">
                <div className="tab">
                • Cheffe de rang/Barmaid/Runner<br/>
                  [Extras] Café-Restaurant, bar à cocktail, semi-gastro...
                </div>
                <Elements.Balise addClass="noBottom" nom="Lieux" content="[75-93-94] Ile-de-France"/>
                <Elements.Balise nom="Dates" content="Octobre 2019 - Décembre 2021"/>
              </div>

              <div className="content">
                <div className="tab">
                • Cheffe de rang<br/>
                  Café-Restaurant italien - <em>Il Cappuccino</em>
                </div>
                <Elements.Balise addClass="noBottom" nom="Lieux" content="[93460] Gournay-sur-Marne"/>
                <Elements.Balise nom="Dates" content="Juin 2020 - Septembre 2020"/>
              </div>

              <div className="content">
                <div className="tab">
                • Agent Hôtelier<br/>
                  EHPAD - <em>Le Parc</em>
                </div>
                <Elements.Balise addClass="noBottom" nom="Lieux" content="[77373] Pontault-Combault"/>
                <Elements.Balise nom="Dates" content="Mars 2020 - Avril 2020"/>
              </div>

              <div className="content">
                <div className="tab">
                • Barmaid/Cheffe de rang<br/>
                  Café-Restaurant - <em>Les Mondes Bohèmes</em>
                </div>
                <Elements.Balise addClass="noBottom" nom="Lieux" content="[75020] Paris"/>
                <Elements.Balise nom="Dates" content="Mai 2014 - février 2020"/>
              </div>

              <div className="content">
                <div className="tab">
                • Barmaid/Cheffe de rang<br/>
                  Café-Restaurant - <em>Le Décalé</em>
                </div>
                <Elements.Balise addClass="noBottom" nom="Lieux" content="[75011] Paris"/>
                <Elements.Balise addClass="noBottom" nom="Dates" content="septembre 2013 - Mai 2014"/>
              </div>
            <Elements.Balise nom="Experiences" close="true"/>
          </div>
        </div>
      </div>
      <img src="./assets/drawing.svg" alt="background" className="div-wrap-img" />
    </div>
    </>
  )
}
 
export default About;

// ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet arcu congue turpis eleifend laoreet. Sed vitae hendrerit tellus, vitae eleifend risus. Curabitur vel nunc eu felis accumsan convallis. Aliquam pulvinar semper lacus id porta. Integer convallis sapien convallis est laoreet, a mattis dolor pellentesque. Nunc ac mauris lorem. Curabitur sapien neque, tincidunt in elementum nec, suscipit eget elit. Proin elementum odio et porta gravida. Curabitur consectetur, nulla a posuere lobortis, lectus magna ullamcorper nibh, a pharetra justo turpis in augue.