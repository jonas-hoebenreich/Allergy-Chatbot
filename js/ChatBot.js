var pp = 1000;
var flowCallback = function (dto, success, error) {
 
  name = dto ? (dto.tag ? (dto.tag.domElement ? dto.tag.domElement.name : null) : null) : null;
 
  if (!jQuery('[name=' + name + ']').attr("priority")) {
    jQuery('[name=' + name + ']').attr("priority", pp--);
  }
 
  console.log(name);
  switch (name) {
    case "alter":
      alterFunktion(dto, success, error);
      break;
    case "stichhaeufigkeit":
      anzahlEreignisseFunktion(dto, success, error);
      break;
    case "heuschnupfenhistaminikumanzahl":
      heuschnupfenhistaminikumanzahlFunktion(dto, success, error);
      break;
    case "heuschnupfennasensprayanzahl":
      heuschnupfennasensprayanzahlFunktion(dto, success, error);
      break;
    case "heuschnupfenaugentropfenanzahl":
      heuschnupfenaugentropfenanzahlFunktion(dto, success, error);
      break;
    case "medikamentenreaktionen":
      medikamentenreaktionenFunktion(dto, success, error);
      break;
    case "hausstaubtablettenanzahl":
      hausstaubtablettenanzahlFunktion(dto, success, error);
      break;
    case "hausstaubnasensprayanzahl":
      hausstaubnasensprayanzahlFunktion(dto, success, error);
      break;
    case "hausstaubaugentropfenanzahl":
      hausstaubaugentropfenanzahlFunktion(dto, success, error);
      break;
    case "hausstaubasthmasprayanzahl":
      hausstaubasthmasprayanzahlFunktion(dto, success, error);
      break;
    case "eingabensubmit":
      console.log("Eingaben Abspeichern");
      break;
    default:
      break;
  }
 
  success();
};

var alterFunktion = function (dto, success, error) {
  console.log("alterCallback");
  alter = parseInt(dto.text);
  if (alter < 18){
    window.ConversationalForm.addTags([
      {
        tag: "select",
        name: "Testungen",
        "cf-questions": "Testungen können nur mit Begleitung eines Erziehungsberechtigten durchgeführt werden.",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Ok", value: "Ok" },
        ]
      }
    ])
  } 
}
 
var hausstaubasthmasprayanzahlFunktion = function (dto, success, error) {
  console.log("hausstaubasthmasprayanzahlFunktionCallback");
  anzahlnasthmaspray = parseInt(dto.text);
  for (i = anzahlnasthmaspray; i >= 1; i--) {
    console.log("Asthmaspray: " + i);
    window.ConversationalForm.addTags([
      {
        tag: "textarea",
        name: "hausstaubmilbenasthmasprayname_" + i,
        "cf-questions": "Bitte geben Sie den Namen des " + i + ". Asthmasprays an.",
        "cf-input-placeholder": ""
      },
      {
        tag: "select",
        name: "hausstaubmilbenasthmaspraywirkung_" + i,
        "cf-questions": "Wie gut hat die Therapie mit {hausstaubmilbenasthmasprayname_" + i + "} die Hausstaubmilbenallergie gelindert?",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "0 = keine Verbesserung", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = Beschwerden sind komplett weg", value: "10" }
        ]
      }
    ])
  }
}
 
var hausstaubaugentropfenanzahlFunktion = function (dto, success, error) {
  console.log("hausstaubaugentropfenanzahlFunktionCallback");
  anzahlnaugentropfen = parseInt(dto.text);
  for (i = anzahlnaugentropfen; i >= 1; i--) {
    console.log("Augentropfen: " + i);
    window.ConversationalForm.addTags([
      {
        tag: "textarea",
        name: "hausstaubmilbenaugentropfenname_" + i,
        "cf-questions": "Bitte geben Sie den Namen der " + i + ". Augentropfen an.",
        "cf-input-placeholder": ""
      },
      {
        tag: "select",
        name: "hausstaubmilbenaugentropfenwirkung_" + i,
        "cf-questions": "Wie gut hat die Therapie mit {hausstaubmilbenaugentropfenname_" + i + "} die Hausstaubmilbenallergie gelindert?",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "0 = keine Verbesserung", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = Beschwerden sind komplett weg", value: "10" }
        ]
      }
    ])
  }
}
 
var hausstaubnasensprayanzahlFunktion = function (dto, success, error) {
  console.log("hausstaubnasensprayanzahlFunktionCallback");
  anzahlnasenspray = parseInt(dto.text);
  for (i = anzahlnasenspray; i >= 1; i--) {
    console.log("Sprays: " + i);
    window.ConversationalForm.addTags([
      {
        tag: "textarea",
        name: "hausstaubmilbennasensprayname_" + i,
        "cf-questions": "Bitte geben Sie den Namen des " + i + ". Nasensprays an.",
        "cf-input-placeholder": ""
      },
      {
        tag: "select",
        name: "hausstaubmilbennasenspraywirkung_" + i,
        "cf-questions": "Wie gut hat die Therapie mit {hausstaubmilbennasensprayname_" + i + "} die Hausstaubmilbenallergie gelindert?",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "0 = keine Verbesserung", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = Beschwerden sind komplett weg", value: "10" }
        ]
      }
    ])
  }
}
 
var hausstaubtablettenanzahlFunktion = function (dto, success, error) {
  console.log("hausstaubtablettenanzahlFunktionCallback");
  anzahlTabletten = parseInt(dto.text);
  for (i = anzahlTabletten; i >= 1; i--) {
    console.log("Tabletten: " + i);
    window.ConversationalForm.addTags([
      {
        tag: "textarea",
        name: "hausstaubmilbentablettenname_" + i,
        "cf-questions": "Bitte geben Sie den Namen der " + i + ". Tabletten an.",
        "cf-input-placeholder": "z.B. Cetirizin"
      },
      {
        tag: "select",
        name: "hausstaubmilbentablettenwirkung_" + i,
        "cf-questions": "Wie gut hat die Therapie mit {hausstaubmilbentablettenname_" + i + "} die Hausstaubmilbenallergie gelindert?",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "0 = keine Verbesserung", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = Beschwerden sind komplett weg", value: "10" }
        ]
      }
    ])
  }
}
 
var heuschnupfenhistaminikumanzahlFunktion = function (dto, success, error) {
  console.log("heuschnupfenhistaminikumanzahlCallback");
  anzahlAntistaminikum = parseInt(dto.text);
  for (i = anzahlAntistaminikum; i >= 1; i--) {
    console.log("Antihistaminikum: " + i);
    window.ConversationalForm.addTags([
      {
        tag: "textarea",
        name: "heuschnupfenhistaminikumname_" + i,
        "cf-questions": "Bitte geben Sie den Namen des " + i + ". Antihistaminikums an.",
        "cf-input-placeholder": "z.B. Cetirizin"
      },
      {
        tag: "select",
        name: "heuschnupfehistaminikumeinnahme_" + i,
        "cf-questions": "Wie wurden {heuschnupfenhistaminikumname_" + i + "} eingenommen?",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Phasenweise (mehrere Tage oder Wochen jeden Tag)", value: "Phasenweise (mehrere Tage oder Wochen jeden Tag)" },
          { tag: "option", "cf-label": "Nur an einzelnen Tagen bei Bedarf", value: "Nur an einzelnen Tagen bei Bedarf" },
        ]
      },
      {
        tag: "select",
        name: "heuschnupfenhistaminikumwirkung_" + i,
        "cf-questions": "Wie gut hat die Therapie mit {heuschnupfenhistaminikumname_" + i + "} die Heuschnupfenbeschwerden gelindert?",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "0 = keine Verbesserung", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = Beschwerden sind komplett weg", value: "10" }
        ]
      }
    ])
  }
}
 
var heuschnupfennasensprayanzahlFunktion = function (dto, success, error) {
  console.log("heuschnupfennasensprayanzahlFunktionCallback");
  anzahlNasenspray = parseInt(dto.text);
  for (i = anzahlNasenspray; i >= 1; i--) {
    console.log("nasenspray: " + i);
    window.ConversationalForm.addTags([
      {
        tag: "textarea",
        name: "heuschnupfennasensprayname_" + i,
        "cf-questions": "Bitte geben Sie den Namen des " + i + ". Nasensprays an.",
        "cf-input-placeholder": ""
      },
      {
        tag: "select",
        name: "heuschnupfennasensprayeinnahme_" + i,
        "cf-questions": "Wie wurden {heuschnupfennasensprayname_" + i + "} eingenommen?",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Phasenweise (mehrere Tage oder Wochen jeden Tag)", value: "Phasenweise (mehrere Tage oder Wochen jeden Tag)" },
          { tag: "option", "cf-label": "Nur an einzelnen Tagen bei Bedarf", value: "Nur an einzelnen Tagen bei Bedarf" },
        ]
      },
      {
        tag: "select",
        name: "heuschnupfenasenspraywirkung_" + i,
        "cf-questions": "Wie gut hat die Therapie mit {heuschnupfennasensprayname_" + i + "} die Heuschnupfenbeschwerden gelindert?",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "0 = keine Verbesserung", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = Beschwerden sind komplett weg", value: "10" }
        ]
      }
    ])
  }
}
 
var heuschnupfenaugentropfenanzahlFunktion = function (dto, success, error) {
  console.log("heuschnupfenaugentropfenanzahlCallback");
  anzahlAugentropfen = parseInt(dto.text);
  for (i = anzahlAugentropfen; i >= 1; i--) {
    console.log("Augentropfen: " + i);
    window.ConversationalForm.addTags([
      {
        tag: "textarea",
        name: "heuschnupfenaugentropfenname_" + i,
        "cf-questions": "Bitte geben Sie den Namen der " + i + ". Augentropfen an.",
        "cf-input-placeholder": ""
      },
      {
        tag: "select",
        name: "heuschnupfeaugentropfeneinnahme_" + i,
        "cf-questions": "Wie wurden {heuschnupfenaugentropfenname_" + i + "} eingenommen?",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Phasenweise (mehrere Tage oder Wochen jeden Tag)", value: "Phasenweise (mehrere Tage oder Wochen jeden Tag)" },
          { tag: "option", "cf-label": "Nur an einzelnen Tagen bei Bedarf", value: "Nur an einzelnen Tagen bei Bedarf" },
        ]
      },
      {
        tag: "select",
        name: "heuschnupfenaugentropfenwirkung_" + i,
        "cf-questions": "Wie gut hat die Therapie mit {heuschnupfenaugentropfenname_" + i + "} die Heuschnupfenbeschwerden gelindert?",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "0 = keine Verbesserung", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = Beschwerden sind komplett weg", value: "10" }
        ]
      }
    ])
  }
}
 
//Anfang Block3 Medikamente
var medikamentenreaktionenFunktion = function (dto, success, error) {
  console.log("medikamentenreaktionenFunktionCallback");
  medikamentenreaktionen = parseInt(dto.text);
 
  for (i = medikamentenreaktionen; i >= 1; i--) {
    console.log("medikamentenreaktion: " + i);
    if(i==1){
      window.ConversationalForm.addTags([
          {
            tag: "textarea",
            name: "medikamentenname_1",
            "cf-questions": "Diese Frage bezieht sich auf die 1. Reaktion.&&Auf welches Medikament haben Sie reagiert? Bitte geben Sie den Namen und/oder Wirkstoff an.",
            "cf-input-placeholder": "z.B. Aspirin/Acetylsalizylsäure"
          },
          {
            tag: "select",
            name: "medikamentenop_1",
            "cf-questions": "Wurde {medikamentenname_1} im Rahmen einer Operation verabreicht?",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Ja", value: "Ja" },
              { tag: "option", "cf-label": "Nein", value: "Nein" },
            ]
          },
          {
            tag: "select",
            name: "medikamentenandere_1",
            "cf-questions": "Sie haben nach der Einnahme von {medikamentenname_1}  reagiert. Haben sie am selben Tag oder in den Tagen davor und danach noch andere Medikamente eingenommen, die nicht zu Ihrer Dauermedikation gehöhren?&&Pflanzliche Medikamente oder Homöopathika zählen auch.&&Z.B. Sie haben Aspirin-Complex bei einer Erkältung eingenommen, auf dieses haben sie reagiert.Am selben Tag haben sie aber auch noch Dolormin gegen die Halsschmerzen gelutscht. Dann müssten Sie hier „Ja“ auswählen.",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Ja", value: "Ja" },
              { tag: "option", "cf-label": "Nein", value: "Nein" },
              { tag: "option", "cf-label": "Weiß ich nicht", value: "Weiß ich nicht" },
            ]
          },
          {
            tag: "textarea",
            name: "medikamentenanderename_1",
            "cf-questions":  "Welche?&&Am besten Name und/oder Wirkstoff angegeben.",
            "cf-input-placeholder": "z.B. Aspirin/Acetylsalizylsäure",
            "cf-conditional-medikamentenandere_1" :"Ja"
          },
          {
            tag: "select",
            name: "medikamentengrund_1",
            "cf-questions": "Warum haben Sie {medikamentenname_1} eingenommen bzw. bekommen?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenop_1": "Nein",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Atemwegsinfekt/Erkältung", value: "Atemwegsinfekt/Erkaeltung" },
              { tag: "option", "cf-label": "Lungenentzündung", value: "Lungenentzuendung" },
              { tag: "option", "cf-label": "Blasenentzündung", value: "Blasenentzuendung" },
              { tag: "option", "cf-label": "Schmerzlinderung", value: "Schmerzlinderung" },
              { tag: "option", "cf-label": "Sonstiges", value: "Sonstiges" },
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr" }
            ]
          },
          {
            tag: "textarea",
            name: "medikamentengrundschmerz_1",
            "cf-questions":  "Was war der Grund für Ihre Schmerzen?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentengrund_1" :"Schmerzlinderung"
          },
          {
            tag: "textarea",
            name: "medikamentengrundsonstige_1",
            "cf-questions":  "Warum haben sie {medikamentenname_1} eingenommen bzw. bekommen?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentengrund_1" :"Sonstiges"
          },
          {
            tag: "textarea",
            name: "medikamentenwann_1",
            "cf-questions":  "Wann war die Reaktion mit {medikamentenname_1}?&&Geben sie bitte das Jahr und wenn noch bekannt den Monat an.",
            "cf-input-placeholder": "",
          },
          {
            tag: "select",
            name: "medikamentensymptome_1",
            "cf-questions": "Was ist als Reaktion auf {medikamentenname_1} passiert?&&Bitte zählen Sie möglichst alle Symptome auf, die nach der Einnahme auftraten.",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Hautausschlag", value: "Hautausschlag" },
              { tag: "option", "cf-label": "Hautrötung", value: "Hautroetung" },
              { tag: "option", "cf-label": "Gesichtsschwellung", value: "Gesichtsschwellung" },
              { tag: "option", "cf-label": "Juckreiz", value: "Juckreiz" },
              { tag: "option", "cf-label": "Kribbeln an Händen, Füßen oder Kopfhaut", value: "Kribbeln an Haenden, Fueßen oder Kopfhaut" },
              { tag: "option", "cf-label": "Erschwerte Atmung", value: "Erschwerte Atmung" },
              { tag: "option", "cf-label": "Atemnot", value: "Atemnot" },
              { tag: "option", "cf-label": "Kloßgefühl im Hals", value: "Kloßgefuehl im Hals" },
              { tag: "option", "cf-label": "Übelkeit", value: "Uebelkeit" },
              { tag: "option", "cf-label": "Durchfall", value: "Durchfall" },
              { tag: "option", "cf-label": "Erbrechen", value: "Erbrechen" },
              { tag: "option", "cf-label": "Schwindel", value: "Schwindel" },
              { tag: "option", "cf-label": "Kreislaufprobleme", value: "Kreislaufprobleme" },
              { tag: "option", "cf-label": "Bewusstlosigkeit", value: "Bewusstlosigkeit" },
              { tag: "option", "cf-label": "Fieber", value: "Fieber" },
              { tag: "option", "cf-label": "Reaktion an den Schleimhäuten (Lippe, Mund, Augen, genital)", value: "Reaktion an den Schleimhaeuten (Lippe, Mund, Augen, genital)" },
              { tag: "option", "cf-label": "Sonstige Symptome", value: "Sonstige Symptome" },
            ]
          },
          {
            tag: "textarea",
            name: "medikamentensymptomesonstige_1",
            "cf-questions":  "Unter welche sonstigen Symptome litten Sie nach der Einnahme von {medikamentenname_1}?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_1":"Sonstige Symptome"
          },
          {
            tag: "select",
            name: "medikamentenausschlag_1",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_1} unter Hautausschlag zu leiden.&&Wie sah der Hautausschlag am ehesten aus?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_1":"Hautausschlag",
            children: [
              { tag: "option", "cf-label": "Nesselsucht (Urtikaria)", value: "Nesselsucht (Urtikaria)" },
              { tag: "option", "cf-label": "Makulopapulöses Exanthem", value: "Makulopapuloeses Exanthem" },
              { tag: "option", "cf-label": "Anders", value: "Anders" },
            ]
          },
          {
            tag: "select",
            name: "medikamentennesselsuchtwo_1",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_1} unter Nesselsucht zu leiden.&&Wo hatten sie überall Nesseln nach der Medikamenteneinnahme?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenausschlag_1":"Nesselsucht (Urtikaria)",
            children: [
              { tag: "option", "cf-label": "Mundschleimhaut", value: "Mundschleimhaut" },
              { tag: "option", "cf-label": "Gesicht/Dekolletébereich", value: "Gesicht/Dekolletébereich" },
              { tag: "option", "cf-label": "Arme", value: "Arme" },
              { tag: "option", "cf-label": "Beine", value: "Beine" },
              { tag: "option", "cf-label": "Hände", value: "Hände" },
              { tag: "option", "cf-label": "Füße", value: "Füße" },
              { tag: "option", "cf-label": "Brust/Bauchbereich", value: "Brust/Bauchbereich" },
              { tag: "option", "cf-label": "Genitalregion", value: "Genitalregion" },
              { tag: "option", "cf-label": "Rücken", value: "Rücken" },
            ]
          },
          {
            tag: "select",
            name: "medikamentennesselsuchtohne_1",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_1} unter Nesselsucht zu leiden.&&Hatten sie schon ein- oder mehrmals Nesselsucht/Urtikaria OHNE dass vorher ein Medikament eingenommen wurde?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenausschlag_1":"Nesselsucht (Urtikaria)",
            children: [
              { tag: "option", "cf-label": "Ja", value: "Ja" },
              { tag: "option", "cf-label": "Nein", value: "Nein" },
            ]
          },
          {
            tag: "select",
            name: "medikamentennesselsuchtohnehaeufigkeit_1",
            "cf-questions": "Trat bei Ihnen Nesselsucht ohne Medikamenteneinnahme nur selten (1-2-mal pro Jahr) oder häufiger auf?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentennesselsuchtohne_1":"Ja",
            children: [
              { tag: "option", "cf-label": "Jeden Tag", value: "Jeden Tag" },
              { tag: "option", "cf-label": "1-2 mal pro Woche", value: "1-2 mal pro Woche" },
              { tag: "option", "cf-label": "1-2 mal pro Monat", value: "1-2 mal pro Monat" },
              { tag: "option", "cf-label": "Sonstiges", value: "Sonstiges" },
            ]
          },
          {
            tag: "textarea",
            name: "medikamentennesselsuchtohnehaeufigkeitsonstiges_1",
            "cf-questions": "Wie oft?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentennesselsuchtohnehaeufigkeit_1":"Sonstiges"
          },
          {
            tag: "textarea",
            name: "medikamentennesselsuchtquaddeln_1",
            "cf-questions": "Wie lange haben sie schon immer mal wieder Quaddeln?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentennesselsuchtohne_1":"Ja"
          },
          {
            tag: "select",
            name: "medikamentennesselsuchtquaddelnstaerke_1",
            "cf-questions": "Wie schlimm sind die Quaddeln auf einer Skala von 0 bis 10?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenausschlag_1":"Nesselsucht (Urtikaria)",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentennesselsuchtjuckreiz_1",
            "cf-questions": "Wie schlimm ist Juckreiz auf einer Skala von 0 bis 10?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenausschlag_1":"Nesselsucht (Urtikaria)",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenausschlagwo_1",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_1} unter Hautausschlag zu leiden.&&Wo war der Hautausschlag?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenausschlag_1":"Makulopapuloeses Exanthem|Anders",
            children: [
              { tag: "option", "cf-label": "Mundschleimhaut", value: "Mundschleimhaut" },
              { tag: "option", "cf-label": "Gesicht/Dekolletébereich", value: "Gesicht/Dekolletébereich" },
              { tag: "option", "cf-label": "Arme", value: "Arme" },
              { tag: "option", "cf-label": "Beine", value: "Beine" },
              { tag: "option", "cf-label": "Hände", value: "Hände" },
              { tag: "option", "cf-label": "Füße", value: "Füße" },
              { tag: "option", "cf-label": "Brust/Bauchbereich", value: "Brust/Bauchbereich" },
              { tag: "option", "cf-label": "Genitalregion", value: "Genitalregion" },
              { tag: "option", "cf-label": "Rücken", value: "Rücken" },
            ]
          },
          {
            tag: "select",
            name: "medikamentenausschlagfluechtig_1",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_1} unter Hautausschlag zu leiden.&&Waren die Hautveränderungen flüchtig (also wechselten sie die Stelle) oder über mehrere Tage an den gleichen Stellen?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_1":"Hautausschlag",
            children: [
              { tag: "option", "cf-label": "Flüchtig", value: "Fluechtig"},
              { tag: "option", "cf-label": "Die Hautveränderungen sind an den selben Stellen geblieben wo sie zuerst aufgetaucht sind", value: "Die Hautveraenderungen sind an den selben Stellen geblieben wo sie zuerst aufgetaucht sind" },
            ]
          },
          {
            tag: "select",
            name: "medikamentenhautausschlagdauer_1",
            "cf-questions": "Wie lange hat es gedauert bis der Hautausschlag wieder weg war?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_1":"Hautausschlag",
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreiz_1",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_1} unter Juckreiz zu leiden.&&Wie schlimm war der Juckreiz, der mit den Hautveränderungen einherging?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_1":"Juckreiz",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
          tag: "select",
            name: "medikamentenjuckreizwo_1",
            "cf-questions": "Wo war der Juckreiz?",
            "cf-input-placeholder": "",
            multiple: true,
            "cf-conditional-medikamentensymptome_1":"Juckreiz",
            children: [
              { tag: "option", "cf-label": "Mundschleimhaut", value: "Mundschleimhaut" },
              { tag: "option", "cf-label": "Gesicht/Dekolletébereich", value: "Gesicht/Dekolletébereich" },
              { tag: "option", "cf-label": "Arme", value: "Arme" },
              { tag: "option", "cf-label": "Beine", value: "Beine" },
              { tag: "option", "cf-label": "Hände", value: "Hände" },
              { tag: "option", "cf-label": "Füße", value: "Füße" },
              { tag: "option", "cf-label": "Brust/Bauchbereich", value: "Brust/Bauchbereich" },
              { tag: "option", "cf-label": "Genitalregion", value: "Genitalregion" },
              { tag: "option", "cf-label": "Rücken", value: "Rücken" },
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizmund_1",
            "cf-questions": "Wie schlimm war der Juckreiz an den Mundschleimhäuten?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_1":"Mundschleimhaut",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizgesicht_1",
            "cf-questions": "Wie schlimm war der Juckreiz im Gesicht/Dekolletébereich?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_1":"Gesicht/Dekolletébereich",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizarme_1",
            "cf-questions": "Wie schlimm war der Juckreiz an den Armen?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_1":"Arme",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizbeine_1",
            "cf-questions": "Wie schlimm war der Juckreiz an den Beinen?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_1":"Beine",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizhaende_1",
            "cf-questions": "Wie schlimm war der Juckreiz an den Händen?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_1":"Haende",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizfuesse_1",
            "cf-questions": "Wie schlimm war der Juckreiz an den Füßen?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_1":"Fueße",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizbrust_1",
            "cf-questions": "Wie schlimm war der Juckreiz an der Brust bzw. im Bauchbereich?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_1":"Brust/Bauchbereich",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizgenitalregion_1",
            "cf-questions": "Wie schlimm war der Juckreiz in der Genitalregion?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_1":"Genitalregion",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenerbrechen_1",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_1} unter Erbrechen zu leiden.&&Wie oft mussten sie sich übergeben?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_1":"Erbrechen",
            children: [
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "mehr als 9 mal", value: "mehr als 9 mal" }
            ]
          },
          {
            tag: "select",
            name: "medikamentendurchfall_1",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_1} unter Durchfall zu leiden.&&Wie oft hatten Sie Durchfall?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_1":"Durchfall",
            children: [
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "mehr als 9 mal", value: "mehr als 9 mal" }
            ]
          },
          {
            tag: "select",
            name: "medikamentendauer_1",
            "cf-questions": " Bitte geben Sie an, wie lange Sie {medikamentenname_1} genommen bzw. gegeben bekommen haben.",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Einmalige", value: "Einmalige" },
              { tag: "option", "cf-label": "Einnahme über X Tage", value: "Einnahme ueber X Tage" },
              { tag: "option", "cf-label": "Einnahme über X Wochen", value: "Einnahme ueber X Wochen" }
            ]
          },
          {
            tag: "textarea",
            name: "medikamentendauertage_1",
            "cf-questions": "Über wie viele Tage haben Sie {medikamentenname_1} eingenommen?",
            "cf-conditional-medikamentendauer_1": "Einnahme ueber X Tage",
            "cf-input-placeholder": ""
          },
          {
            tag: "textarea",
            name: "medikamentendauerwochen_1",
            "cf-questions": "Über wie viele Wochen haben Sie {medikamentenname_1} eingenommen?",
            "cf-conditional-medikamentendauer_1": "Einnahme ueber X Wochen",
            "cf-input-placeholder": ""
          },
          {
            tag: "select",
            name: "medikamentenausloesedauer_1",
            "cf-questions": "Bitte geben Sie an, wie lange es nach der ersten Einnahme von {medikamentenname_1} gedauert hat, bis die ersten Symptome auftraten.",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1 Minute", value: "1 Minute" },
              { tag: "option", "cf-label": "5 Minuten", value: "5 Minuten" },
              { tag: "option", "cf-label": "15 Minuten", value: "15 Minuten" },
              { tag: "option", "cf-label": "30 Minuten", value: "30 Minuten" },
              { tag: "option", "cf-label": "1 Stunde", value: "1 Stunde" },
              { tag: "option", "cf-label": "6 Stunden", value: "6 Stunden" },
              { tag: "option", "cf-label": "24 Stunden", value: "24 Stunden" },
              { tag: "option", "cf-label": "2 Tage", value: "2 Tage" },
              { tag: "option", "cf-label": "3 Tage", value: "3 Tage" },
              { tag: "option", "cf-label": "4 Tage", value: "4 Tage" },
              { tag: "option", "cf-label": "5 Tage", value: "5 Tage" },
              { tag: "option", "cf-label": "6 Tage", value: "6 Tage" },
              { tag: "option", "cf-label": "7 Tage", value: "7 Tage" },
              { tag: "option", "cf-label": "8 Tage", value: "8 Tage" },
              { tag: "option", "cf-label": "9 Tage", value: "9 Tage" },
              { tag: "option", "cf-label": "10 Tage", value: "10 Tage" },
              { tag: "option", "cf-label": "2 Wochen", value: "2 Wochen" },
              { tag: "option", "cf-label": "4 Wochen", value: "4 Wochen" },
              { tag: "option", "cf-label": "Mehr als 4 Wochen", value: "Mehr als 4 Wochen" },
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"}
            ]
          },
          {
            tag: "select",
            name: "medikamentenbehandlungjanein_1",
            "cf-questions": "Wurde die Reaktion nach der Einnahme von {medikamentenname_1} behandelt?",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Ja", value: "Ja" },
              { tag: "option", "cf-label": "Nein", value: "Nein" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenbehandlungwer_1",
            "cf-questions": "Von wem wurde die Reaktion behandelt?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenbehandlungjanein_1": "Ja",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Arzt", value: "Arzt" },
              { tag: "option", "cf-label": "Notarzt", value: "Notarzt" },
              { tag: "option", "cf-label": "Krankenhaus", value: "Krankenhaus" },
              { tag: "option", "cf-label": "Selbst", value: "Selbst" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenbehandlungwie_1",
            "cf-questions": "Wie wurde behandelt?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenbehandlungjanein_1": "Ja",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Tabletten", value: "Tabletten" },
              { tag: "option", "cf-label": "Spritze", value: "Spritze" },
              { tag: "option", "cf-label": "Infusion", value: "Infusion" },
              { tag: "option", "cf-label": "Kortisoncreme", value: "Kortisoncreme" },
              { tag: "option", "cf-label": "Sonstiges", value: "Sonstiges" },
              { tag: "option", "cf-label": "Weiß ich nicht", value: "Weiß ich nicht" }
            ]
          },
          {
            tag: "textarea",
            name: "medikamentenbehandlungtabletten_1",
            "cf-questions": "Bitte geben sie den Namen der Tabletten an mit denen ihre Reaktion mit {medikamentenname_1} behandelt wurde.",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenbehandlungwie_1": "Tabletten"
          },
          {
            tag: "textarea",
            name: "medikamentenbehandlungspritze_1",
            "cf-questions": "Bitte geben sie den Namen der Spritzen an mit denen ihre Reaktion mit {medikamentenname_1} behandelt wurde.",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenbehandlungwie_1": "Spritze"
          },
          {
            tag: "textarea",
            name: "medikamentenbehandlunginfusion_1",
            "cf-questions": "Bitte geben sie den Namen der Infusion an mit denen ihre Reaktion mit {medikamentenname_1} behandelt wurde.",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenbehandlungwie_1": "Infusion"
          },
          {
            tag: "select",
            name: "medikamentenhautroetungdauer_1",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_1}&&Wie lange hat es gedauert bis die Hautrötung wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_1": "Hautroetung",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentegesichtsschwellungndauer_1",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_1}&&Wie lange hat es gedauert bis die Gesichtsschwellung wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_1": "Gesichtsschwellung",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenkribbelndauer_1",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_1}&&Wie lange hat es gedauert bis das Kribbeln an Händen, Füßen oder Kopfhaut wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_1": "Kribbeln an Haenden, Fueßen oder Kopfhaut",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenerschwerteatmungdauer_1",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_1}&&Wie lange hat es gedauert bis die erschwerte Atmung wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_1": "Erschwerte Atmung",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenatemnotdauer_1",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_1}&&Wie lange hat es gedauert bis die Atemnot wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_1": "Atemnot",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenklossgefuehldauer_1",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_1}&&Wie lange hat es gedauert bis das Kloßgefühl im Hals wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_1": "Kloßgefuehl im Hals",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenuebelkeitdauer_1",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_1}&&Wie lange hat es gedauert bis die Übelkeit wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_1": "Uebelkeit",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentendurchfalldauer_1",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_1}&&Wie lange hat es gedauert bis der Durchfall wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_1": "Durchfall",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenerbrechendauer_1",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_1}&&Wie lange hat es gedauert bis das Erbrechen wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_1": "Erbrechen",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenschwindeldauer_1",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_1}&&Wie lange hat es gedauert bis der Schwindel wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_1": "Schwindel",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenkreislaufproblemedauer_1",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_1}&&Wie lange hat es gedauert bis die Kreislaufprobleme wieder weg waren?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_1": "Kreislaufprobleme",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenbewusstlosigkeitdauer_1",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_1}&&Wie lange hat es gedauert bis die Bewusstlosigkeit wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_1": "Bewusstlosigkeit",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenfieberdauer_1",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_1}&&Wie lange hat es gedauert bis das Fieber wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_1": "Fieber",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenschleimhaeutedauer_1",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_1}&&Wie lange hat es gedauert bis die Reaktion an den Schleimhäuten (Lippe, Mund, Augen, genital) wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_1": "Reaktion an den Schleimhaeuten (Lippe, Mund, Augen, genital)",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentensonstigesymptomedauer_1",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_1}&&Wie lange hat es gedauert bis {medikamentensymptomesonstige_1} wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_1": "Sonstige Symptome",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenwiederjanein_1",
            "cf-questions": "Haben Sie {medikamentenname_1} seither wieder genommen?",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Ja", value: "Ja"},
              { tag: "option", "cf-label": "Nein", value: "Nein"},
              { tag: "option", "cf-label": "Ich bin mir nicht sicher", value: "Ich bin mir nicht sicher"}
            ]
          },
          {
            tag: "select",
            name: "medikamentenwieder_1",
            "cf-questions": "Wie gut haben Sie {medikamentenname_1} beim wiederholtem Einnehmen vertragen?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenwiederjanein_1": "Ja", 
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Nochmal die gleiche/eine ähnliche Reaktion bekommen", value: "Nochmal die gleiche/eine aehnliche Reaktion bekommen"},
              { tag: "option", "cf-label": "Gut vertragen", value: "Gut vertragen"},
              { tag: "option", "cf-label": "Sonstiges", value: "Sonstiges"}
            ]
          },
          {
            tag: "textarea",
            name: "medikamentensonstigewieder_1",
            "cf-questions": "Wie gut haben Sie {medikamentenname_1} beim wiederholtem Einnehmen vertragen?",
            "cf-conditional-medikamentenwieder_1": "Sonstiges",
            "cf-input-placeholder": "",
          },
          {
            tag: "textarea",
            name: "medikamentenopgrund_1",
            "cf-questions": "Die Frage bezieht sich auf die Reaktion mit {medikamentenname_1}&&Welche OP wurde durchgeführt/also warum wurden sie operiert?",
            "cf-conditional-medikamentenop_1": "Ja",
            "cf-input-placeholder": "",
          },
          {
            tag: "select",
            name: "medikamentenopnarkose_1",
            "cf-questions": "Welche Narkoseart wurde verwendet?",
            "cf-conditional-medikamentenop_1": "Ja",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Dämmerschlaf", value: "Daemmerschlaf" },
              { tag: "option", "cf-label": "Vollnarkose", value: "Vollnarkose" },
              { tag: "option", "cf-label": "Lokale Verfahren", value: "Lokale Verfahren" },
              { tag: "option", "cf-label": "Ich war waehrend der OP wach", value: "Ich war waehrend der OP wach" },
              { tag: "option", "cf-label": "Weiß ich nicht", value: "Weiß ich nicht" },
            ]
          },
          {
            tag: "textarea",
            name: "medikamentenopwann_1",
            "cf-questions": "Die Frage bezieht sich auf die Reaktion mit {medikamentenname_1}&&Wann wurde die OP durchgeführt?",
            "cf-conditional-medikamentenop_1": "Ja",
            "cf-input-placeholder": "",
          },
          {
            tag: "textarea",
            name: "medikamentenopwo_1",
            "cf-questions": "Wo wurde die OP durchgeführt?&&Bitte den Arztbrief der OP und das Narkoseprotokoll mitbringen.",
            "cf-conditional-medikamentenop_1": "Ja",
            "cf-input-placeholder": "",
          },
          {
            tag: "select",
            name: "medikamentenopzeitverhaeltniss_1",
            "cf-questions": "Sind die Symptome während oder nach der OP aufgetreten?",
            "cf-conditional-medikamentenop_1": "Ja",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Während der OP", value: "Waehrend der OP" },
              { tag: "option", "cf-label": "Nach der OP", value: "Nach der OP" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenopnach_1",
            "cf-questions": "Wie viele Stunden nach Beendigung der OP?",
            "cf-conditional-medikamentenopzeitverhaeltniss_1": "Nach der OP",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Gleich nach Aufwachen", value: "Gleich nach Aufwachen" },
              { tag: "option", "cf-label": "0 - 1 Stunden", value: "0 - 1 Stunden" },
              { tag: "option", "cf-label": "1 - 2 Stunden", value: "1 - 2 Stunden" },
              { tag: "option", "cf-label": "2 - 3 Stunden", value: "2 - 3 Stunden" },
              { tag: "option", "cf-label": "3 - 6 Stunden", value: "3 - 6 Stunden" },
              { tag: "option", "cf-label": "6 - 8 Stunden", value: "6 - 8 Stunden" },
              { tag: "option", "cf-label": "8 - 10 Stunden", value: "8 - 10 Stunden" },
              { tag: "option", "cf-label": "10 - 12 Stunden", value: "10 - 12 Stunden" },
              { tag: "option", "cf-label": "12 - 16 Stunden", value: "12 - 16 Stunden" },
              { tag: "option", "cf-label": "16 - 20 Stunden", value: "16 - 20 Stunden" },
              { tag: "option", "cf-label": "20 - 24 Stunden", value: "20 - 24 Stunden" },
              { tag: "option", "cf-label": "Mehr als 24 Stunden", value: "Mehr als 24 Stunden" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenbehandlung_1",
            "cf-questions": "Wer hat die Symptome behandelt?",
            "cf-conditional-medikamentenop_1": "Ja",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Anästhesist", value: "Anaesthesist" },
              { tag: "option", "cf-label": "Stationsarzt", value: "Stationsarzt" },
              { tag: "option", "cf-label": "Keine Behandlung erfolgt", value: "Keine Behandlung erfolgt" },
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr" }
            ]
          },
          {
            tag: "textarea",
            name: "medikamentenopnarkosemed_1",
            "cf-questions": "Die Frage bezieht sich auf die Reaktion mit {medikamentenname_1}&&Welche Medikamente wurden in und kurz vor der Narkose verwendet?&&Dies kann im Narkoseprotokoll nachgelesen werden. Das Narkoseprotokoll kann beim behandelnden Arzt oder Krankenhaus angefragt werden.",
            "cf-conditional-medikamentenop_1": "Ja",
            "cf-input-placeholder": "",
          }
        ])
  }
 
  if(i==2){
      window.ConversationalForm.addTags([
          {
            tag: "textarea",
            name: "medikamentenname_2",
            "cf-questions": "Diese Frage bezieht sich auf die 2. Reaktion.&&Auf welches Medikament haben Sie reagiert? Bitte geben Sie den Namen und/oder Wirkstoff an.",
            "cf-input-placeholder": "z.B. Aspirin/Acetylsalizylsäure"
          },
          {
            tag: "select",
            name: "medikamentenop_2",
            "cf-questions": "Wurde {medikamentenname_2} im Rahmen einer Operation verabreicht?",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Ja", value: "Ja" },
              { tag: "option", "cf-label": "Nein", value: "Nein" },
            ]
          },
          {
            tag: "select",
            name: "medikamentenandere_2",
            "cf-questions": "Sie haben nach der Einnahme von {medikamentenname_2}  reagiert. Haben sie am selben Tag oder in den Tagen davor und danach noch andere Medikamente eingenommen, die nicht zu Ihrer Dauermedikation gehöhren?&&Pflanzliche Medikamente oder Homöopathika zählen auch.&&Z.B. Sie haben Aspirin-Complex bei einer Erkältung eingenommen, auf dieses haben sie reagiert.Am selben Tag haben sie aber auch noch Dolormin gegen die Halsschmerzen gelutscht. Dann müssten Sie hier „Ja“ auswählen.",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Ja", value: "Ja" },
              { tag: "option", "cf-label": "Nein", value: "Nein" },
              { tag: "option", "cf-label": "Weiß ich nicht", value: "Weiß ich nicht" },
            ]
          },
          {
            tag: "textarea",
            name: "medikamentenanderename_2",
            "cf-questions":  "Welche?&&Am besten Name und/oder Wirkstoff angegeben.",
            "cf-input-placeholder": "z.B. Aspirin/Acetylsalizylsäure",
            "cf-conditional-medikamentenandere_2" :"Ja"
          },
          {
            tag: "select",
            name: "medikamentengrund_2",
            "cf-questions": "Warum haben Sie {medikamentenname_2} eingenommen bzw. bekommen?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenop_2": "Nein",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Atemwegsinfekt/Erkältung", value: "Atemwegsinfekt/Erkaeltung" },
              { tag: "option", "cf-label": "Lungenentzündung", value: "Lungenentzuendung" },
              { tag: "option", "cf-label": "Blasenentzündung", value: "Blasenentzuendung" },
              { tag: "option", "cf-label": "Schmerzlinderung", value: "Schmerzlinderung" },
              { tag: "option", "cf-label": "Sonstiges", value: "Sonstiges" },
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr" }
            ]
          },
          {
            tag: "textarea",
            name: "medikamentengrundschmerz_2",
            "cf-questions":  "Was war der Grund für Ihre Schmerzen?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentengrund_2" :"Schmerzlinderung"
          },
          {
            tag: "textarea",
            name: "medikamentengrundsonstige_2",
            "cf-questions":  "Warum haben sie {medikamentenname_2} eingenommen bzw. bekommen?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentengrund_2" :"Sonstiges"
          },
          {
            tag: "textarea",
            name: "medikamentenwann_2",
            "cf-questions":  "Wann war die Reaktion mit {medikamentenname_2}?&&Geben sie bitte das Jahr und wenn noch bekannt den Monat an.",
            "cf-input-placeholder": "",
          },
          {
            tag: "select",
            name: "medikamentensymptome_2",
            "cf-questions": "Was ist als Reaktion auf {medikamentenname_2} passiert?&&Bitte zählen Sie möglichst alle Symptome auf, die nach der Einnahme auftraten.",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Hautausschlag", value: "Hautausschlag" },
              { tag: "option", "cf-label": "Hautrötung", value: "Hautroetung" },
              { tag: "option", "cf-label": "Gesichtsschwellung", value: "Gesichtsschwellung" },
              { tag: "option", "cf-label": "Juckreiz", value: "Juckreiz" },
              { tag: "option", "cf-label": "Kribbeln an Händen, Füßen oder Kopfhaut", value: "Kribbeln an Haenden, Fueßen oder Kopfhaut" },
              { tag: "option", "cf-label": "Erschwerte Atmung", value: "Erschwerte Atmung" },
              { tag: "option", "cf-label": "Atemnot", value: "Atemnot" },
              { tag: "option", "cf-label": "Kloßgefühl im Hals", value: "Kloßgefuehl im Hals" },
              { tag: "option", "cf-label": "Übelkeit", value: "Uebelkeit" },
              { tag: "option", "cf-label": "Durchfall", value: "Durchfall" },
              { tag: "option", "cf-label": "Erbrechen", value: "Erbrechen" },
              { tag: "option", "cf-label": "Schwindel", value: "Schwindel" },
              { tag: "option", "cf-label": "Kreislaufprobleme", value: "Kreislaufprobleme" },
              { tag: "option", "cf-label": "Bewusstlosigkeit", value: "Bewusstlosigkeit" },
              { tag: "option", "cf-label": "Fieber", value: "Fieber" },
              { tag: "option", "cf-label": "Reaktion an den Schleimhäuten (Lippe, Mund, Augen, genital)", value: "Reaktion an den Schleimhaeuten (Lippe, Mund, Augen, genital)" },
              { tag: "option", "cf-label": "Sonstige Symptome", value: "Sonstige Symptome" },
            ]
          },
          {
            tag: "textarea",
            name: "medikamentensymptomesonstige_2",
            "cf-questions":  "Unter welche sonstigen Symptome litten Sie nach der Einnahme von {medikamentenname_2}?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_2":"Sonstige Symptome"
          },
          {
            tag: "select",
            name: "medikamentenausschlag_2",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_2} unter Hautausschlag zu leiden.&&Wie sah der Hautausschlag am ehesten aus?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_2":"Hautausschlag",
            children: [
              { tag: "option", "cf-label": "Nesselsucht (Urtikaria)", value: "Nesselsucht (Urtikaria)" },
              { tag: "option", "cf-label": "Makulopapulöses Exanthem", value: "Makulopapuloeses Exanthem" },
              { tag: "option", "cf-label": "Anders", value: "Anders" },
            ]
          },
          {
            tag: "select",
            name: "medikamentennesselsuchtwo_2",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_2} unter Nesselsucht zu leiden.&&Wo hatten sie überall Nesseln nach der Medikamenteneinnahme?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenausschlag_2":"Nesselsucht (Urtikaria)",
            children: [
              { tag: "option", "cf-label": "Mundschleimhaut", value: "Mundschleimhaut" },
              { tag: "option", "cf-label": "Gesicht/Dekolletébereich", value: "Gesicht/Dekolletébereich" },
              { tag: "option", "cf-label": "Arme", value: "Arme" },
              { tag: "option", "cf-label": "Beine", value: "Beine" },
              { tag: "option", "cf-label": "Hände", value: "Hände" },
              { tag: "option", "cf-label": "Füße", value: "Füße" },
              { tag: "option", "cf-label": "Brust/Bauchbereich", value: "Brust/Bauchbereich" },
              { tag: "option", "cf-label": "Genitalregion", value: "Genitalregion" },
              { tag: "option", "cf-label": "Rücken", value: "Rücken" },
            ]
          },
          {
            tag: "select",
            name: "medikamentennesselsuchtohne_2",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_2} unter Nesselsucht zu leiden.&&Hatten sie schon ein- oder mehrmals Nesselsucht/Urtikaria OHNE dass vorher ein Medikament eingenommen wurde?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenausschlag_2":"Nesselsucht (Urtikaria)",
            children: [
              { tag: "option", "cf-label": "Ja", value: "Ja" },
              { tag: "option", "cf-label": "Nein", value: "Nein" },
            ]
          },
          {
            tag: "select",
            name: "medikamentennesselsuchtohnehaeufigkeit_2",
            "cf-questions": "Trat bei Ihnen Nesselsucht ohne Medikamenteneinnahme nur selten (1-2-mal pro Jahr) oder häufiger auf?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentennesselsuchtohne_2":"Ja",
            children: [
              { tag: "option", "cf-label": "Jeden Tag", value: "Jeden Tag" },
              { tag: "option", "cf-label": "1-2 mal pro Woche", value: "1-2 mal pro Woche" },
              { tag: "option", "cf-label": "1-2 mal pro Monat", value: "1-2 mal pro Monat" },
              { tag: "option", "cf-label": "Sonstiges", value: "Sonstiges" },
            ]
          },
          {
            tag: "textarea",
            name: "medikamentennesselsuchtohnehaeufigkeitsonstiges_2",
            "cf-questions": "Wie oft?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentennesselsuchtohnehaeufigkeit_2":"Sonstiges"
          },
          {
            tag: "textarea",
            name: "medikamentennesselsuchtquaddeln_2",
            "cf-questions": "Wie lange haben sie schon immer mal wieder Quaddeln?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentennesselsuchtohne_2":"Ja"
          },
          {
            tag: "select",
            name: "medikamentennesselsuchtquaddelnstaerke_2",
            "cf-questions": "Wie schlimm sind die Quaddeln auf einer Skala von 0 bis 10?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenausschlag_2":"Nesselsucht (Urtikaria)",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentennesselsuchtjuckreiz_2",
            "cf-questions": "Wie schlimm ist Juckreiz auf einer Skala von 0 bis 10?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenausschlag_2":"Nesselsucht (Urtikaria)",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenausschlagwo_2",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_2} unter Hautausschlag zu leiden.&&Wo war der Hautausschlag?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenausschlag_2":"Makulopapuloeses Exanthem|Anders",
            children: [
              { tag: "option", "cf-label": "Mundschleimhaut", value: "Mundschleimhaut" },
              { tag: "option", "cf-label": "Gesicht/Dekolletébereich", value: "Gesicht/Dekolletébereich" },
              { tag: "option", "cf-label": "Arme", value: "Arme" },
              { tag: "option", "cf-label": "Beine", value: "Beine" },
              { tag: "option", "cf-label": "Hände", value: "Hände" },
              { tag: "option", "cf-label": "Füße", value: "Füße" },
              { tag: "option", "cf-label": "Brust/Bauchbereich", value: "Brust/Bauchbereich" },
              { tag: "option", "cf-label": "Genitalregion", value: "Genitalregion" },
              { tag: "option", "cf-label": "Rücken", value: "Rücken" },
            ]
          },
          {
            tag: "select",
            name: "medikamentenausschlagfluechtig_2",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_2} unter Hautausschlag zu leiden.&&Waren die Hautveränderungen flüchtig (also wechselten sie die Stelle) oder über mehrere Tage an den gleichen Stellen?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_2":"Hautausschlag",
            children: [
              { tag: "option", "cf-label": "Flüchtig", value: "Fluechtig"},
              { tag: "option", "cf-label": "Die Hautveränderungen sind an den selben Stellen geblieben wo sie zuerst aufgetaucht sind", value: "Die Hautveraenderungen sind an den selben Stellen geblieben wo sie zuerst aufgetaucht sind" },
            ]
          },
          {
            tag: "select",
            name: "medikamentenhautausschlagdauer_2",
            "cf-questions": "Wie lange hat es gedauert bis der Hautausschlag wieder weg war?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_2":"Hautausschlag",
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreiz_2",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_2} unter Juckreiz zu leiden.&&Wie schlimm war der Juckreiz, der mit den Hautveränderungen einherging?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_2":"Juckreiz",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
          tag: "select",
            name: "medikamentenjuckreizwo_2",
            "cf-questions": "Wo war der Juckreiz?",
            "cf-input-placeholder": "",
            multiple: true,
            "cf-conditional-medikamentensymptome_2":"Juckreiz",
            children: [
              { tag: "option", "cf-label": "Mundschleimhaut", value: "Mundschleimhaut" },
              { tag: "option", "cf-label": "Gesicht/Dekolletébereich", value: "Gesicht/Dekolletébereich" },
              { tag: "option", "cf-label": "Arme", value: "Arme" },
              { tag: "option", "cf-label": "Beine", value: "Beine" },
              { tag: "option", "cf-label": "Hände", value: "Hände" },
              { tag: "option", "cf-label": "Füße", value: "Füße" },
              { tag: "option", "cf-label": "Brust/Bauchbereich", value: "Brust/Bauchbereich" },
              { tag: "option", "cf-label": "Genitalregion", value: "Genitalregion" },
              { tag: "option", "cf-label": "Rücken", value: "Rücken" },
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizmund_2",
            "cf-questions": "Wie schlimm war der Juckreiz an den Mundschleimhäuten?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_2":"Mundschleimhaut",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizgesicht_2",
            "cf-questions": "Wie schlimm war der Juckreiz im Gesicht/Dekolletébereich?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_2":"Gesicht/Dekolletébereich",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizarme_2",
            "cf-questions": "Wie schlimm war der Juckreiz an den Armen?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_2":"Arme",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizbeine_2",
            "cf-questions": "Wie schlimm war der Juckreiz an den Beinen?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_2":"Beine",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizhaende_2",
            "cf-questions": "Wie schlimm war der Juckreiz an den Händen?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_2":"Haende",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizfuesse_2",
            "cf-questions": "Wie schlimm war der Juckreiz an den Füßen?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_2":"Fueße",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizbrust_2",
            "cf-questions": "Wie schlimm war der Juckreiz an der Brust bzw. im Bauchbereich?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_2":"Brust/Bauchbereich",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizgenitalregion_2",
            "cf-questions": "Wie schlimm war der Juckreiz in der Genitalregion?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_2":"Genitalregion",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenerbrechen_2",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_2} unter Erbrechen zu leiden.&&Wie oft mussten sie sich übergeben?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_2":"Erbrechen",
            children: [
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "mehr als 9 mal", value: "mehr als 9 mal" }
            ]
          },
          {
            tag: "select",
            name: "medikamentendurchfall_2",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_2} unter Durchfall zu leiden.&&Wie oft hatten Sie Durchfall?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_2":"Durchfall",
            children: [
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "mehr als 9 mal", value: "mehr als 9 mal" }
            ]
          },
          {
            tag: "select",
            name: "medikamentendauer_2",
            "cf-questions": " Bitte geben Sie an, wie lange Sie {medikamentenname_2} genommen bzw. gegeben bekommen haben.",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Einmalige", value: "Einmalige" },
              { tag: "option", "cf-label": "Einnahme über X Tage", value: "Einnahme ueber X Tage" },
              { tag: "option", "cf-label": "Einnahme über X Wochen", value: "Einnahme ueber X Wochen" }
            ]
          },
          {
            tag: "textarea",
            name: "medikamentendauertage_2",
            "cf-questions": "Über wie viele Tage haben Sie {medikamentenname_2} eingenommen?",
            "cf-conditional-medikamentendauer_2": "Einnahme ueber X Tage",
            "cf-input-placeholder": ""
          },
          {
            tag: "textarea",
            name: "medikamentendauerwochen_2",
            "cf-questions": "Über wie viele Wochen haben Sie {medikamentenname_2} eingenommen?",
            "cf-conditional-medikamentendauer_2": "Einnahme ueber X Wochen",
            "cf-input-placeholder": ""
          },
          {
            tag: "select",
            name: "medikamentenausloesedauer_2",
            "cf-questions": "Bitte geben Sie an, wie lange es nach der ersten Einnahme von {medikamentenname_2} gedauert hat, bis die ersten Symptome auftraten.",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1 Minute", value: "1 Minute" },
              { tag: "option", "cf-label": "5 Minuten", value: "5 Minuten" },
              { tag: "option", "cf-label": "15 Minuten", value: "15 Minuten" },
              { tag: "option", "cf-label": "30 Minuten", value: "30 Minuten" },
              { tag: "option", "cf-label": "1 Stunde", value: "1 Stunde" },
              { tag: "option", "cf-label": "6 Stunden", value: "6 Stunden" },
              { tag: "option", "cf-label": "24 Stunden", value: "24 Stunden" },
              { tag: "option", "cf-label": "2 Tage", value: "2 Tage" },
              { tag: "option", "cf-label": "3 Tage", value: "3 Tage" },
              { tag: "option", "cf-label": "4 Tage", value: "4 Tage" },
              { tag: "option", "cf-label": "5 Tage", value: "5 Tage" },
              { tag: "option", "cf-label": "6 Tage", value: "6 Tage" },
              { tag: "option", "cf-label": "7 Tage", value: "7 Tage" },
              { tag: "option", "cf-label": "8 Tage", value: "8 Tage" },
              { tag: "option", "cf-label": "9 Tage", value: "9 Tage" },
              { tag: "option", "cf-label": "10 Tage", value: "10 Tage" },
              { tag: "option", "cf-label": "2 Wochen", value: "2 Wochen" },
              { tag: "option", "cf-label": "4 Wochen", value: "4 Wochen" },
              { tag: "option", "cf-label": "Mehr als 4 Wochen", value: "Mehr als 4 Wochen" },
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"}
            ]
          },
          {
            tag: "select",
            name: "medikamentenbehandlungjanein_2",
            "cf-questions": "Wurde die Reaktion nach der Einnahme von {medikamentenname_2} behandelt?",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Ja", value: "Ja" },
              { tag: "option", "cf-label": "Nein", value: "Nein" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenbehandlungwer_2",
            "cf-questions": "Von wem wurde die Reaktion behandelt?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenbehandlungjanein_2": "Ja",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Arzt", value: "Arzt" },
              { tag: "option", "cf-label": "Notarzt", value: "Notarzt" },
              { tag: "option", "cf-label": "Krankenhaus", value: "Krankenhaus" },
              { tag: "option", "cf-label": "Selbst", value: "Selbst" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenbehandlungwie_2",
            "cf-questions": "Wie wurde behandelt?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenbehandlungjanein_2": "Ja",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Tabletten", value: "Tabletten" },
              { tag: "option", "cf-label": "Spritze", value: "Spritze" },
              { tag: "option", "cf-label": "Infusion", value: "Infusion" },
              { tag: "option", "cf-label": "Kortisoncreme", value: "Kortisoncreme" },
              { tag: "option", "cf-label": "Sonstiges", value: "Sonstiges" },
              { tag: "option", "cf-label": "Weiß ich nicht", value: "Weiß ich nicht" }
            ]
          },
          {
            tag: "textarea",
            name: "medikamentenbehandlungtabletten_2",
            "cf-questions": "Bitte geben sie den Namen der Tabletten an mit denen ihre Reaktion mit {medikamentenname_2} behandelt wurde.",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenbehandlungwie_2": "Tabletten"
          },
          {
            tag: "textarea",
            name: "medikamentenbehandlungspritze_2",
            "cf-questions": "Bitte geben sie den Namen der Spritzen an mit denen ihre Reaktion mit {medikamentenname_2} behandelt wurde.",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenbehandlungwie_2": "Spritze"
          },
          {
            tag: "textarea",
            name: "medikamentenbehandlunginfusion_2",
            "cf-questions": "Bitte geben sie den Namen der Infusion an mit denen ihre Reaktion mit {medikamentenname_2} behandelt wurde.",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenbehandlungwie_2": "Infusion"
          },
          {
            tag: "select",
            name: "medikamentenhautroetungdauer_2",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_2}&&Wie lange hat es gedauert bis die Hautrötung wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_2": "Hautroetung",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentegesichtsschwellungndauer_2",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_2}&&Wie lange hat es gedauert bis die Gesichtsschwellung wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_2": "Gesichtsschwellung",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenkribbelndauer_2",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_2}&&Wie lange hat es gedauert bis das Kribbeln an Händen, Füßen oder Kopfhaut wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_2": "Kribbeln an Haenden, Fueßen oder Kopfhaut",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenerschwerteatmungdauer_2",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_2}&&Wie lange hat es gedauert bis die erschwerte Atmung wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_2": "Erschwerte Atmung",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenatemnotdauer_2",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_2}&&Wie lange hat es gedauert bis die Atemnot wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_2": "Atemnot",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenklossgefuehldauer_2",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_2}&&Wie lange hat es gedauert bis das Kloßgefühl im Hals wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_2": "Kloßgefuehl im Hals",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenuebelkeitdauer_2",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_2}&&Wie lange hat es gedauert bis die Übelkeit wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_2": "Uebelkeit",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentendurchfalldauer_2",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_2}&&Wie lange hat es gedauert bis der Durchfall wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_2": "Durchfall",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenerbrechendauer_2",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_2}&&Wie lange hat es gedauert bis das Erbrechen wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_2": "Erbrechen",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenschwindeldauer_2",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_2}&&Wie lange hat es gedauert bis der Schwindel wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_2": "Schwindel",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenkreislaufproblemedauer_2",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_2}&&Wie lange hat es gedauert bis die Kreislaufprobleme wieder weg waren?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_2": "Kreislaufprobleme",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenbewusstlosigkeitdauer_2",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_2}&&Wie lange hat es gedauert bis die Bewusstlosigkeit wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_2": "Bewusstlosigkeit",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenfieberdauer_2",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_2}&&Wie lange hat es gedauert bis das Fieber wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_2": "Fieber",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenschleimhaeutedauer_2",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_2}&&Wie lange hat es gedauert bis die Reaktion an den Schleimhäuten (Lippe, Mund, Augen, genital) wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_2": "Reaktion an den Schleimhaeuten (Lippe, Mund, Augen, genital)",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentensonstigesymptomedauer_2",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_2}&&Wie lange hat es gedauert bis {medikamentensymptomesonstige_2} wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_2": "Sonstige Symptome",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenwiederjanein_2",
            "cf-questions": "Haben Sie {medikamentenname_2} seither wieder genommen?",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Ja", value: "Ja"},
              { tag: "option", "cf-label": "Nein", value: "Nein"},
              { tag: "option", "cf-label": "Ich bin mir nicht sicher", value: "Ich bin mir nicht sicher"}
            ]
          },
          {
            tag: "select",
            name: "medikamentenwieder_2",
            "cf-questions": "Wie gut haben Sie {medikamentenname_2} beim wiederholtem Einnehmen vertragen?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenwiederjanein_2": "Ja", 
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Nochmal die gleiche/eine ähnliche Reaktion bekommen", value: "Nochmal die gleiche/eine aehnliche Reaktion bekommen"},
              { tag: "option", "cf-label": "Gut vertragen", value: "Gut vertragen"},
              { tag: "option", "cf-label": "Sonstiges", value: "Sonstiges"}
            ]
          },
          {
            tag: "textarea",
            name: "medikamentensonstigewieder_2",
            "cf-questions": "Wie gut haben Sie {medikamentenname_2} beim wiederholtem Einnehmen vertragen?",
            "cf-conditional-medikamentenwieder_2": "Sonstiges",
            "cf-input-placeholder": "",
          },
          {
            tag: "textarea",
            name: "medikamentenopgrund_2",
            "cf-questions": "Die Frage bezieht sich auf die Reaktion mit {medikamentenname_2}&&Welche OP wurde durchgeführt/also warum wurden sie operiert?",
            "cf-conditional-medikamentenop_2": "Ja",
            "cf-input-placeholder": "",
          },
          {
            tag: "select",
            name: "medikamentenopnarkose_2",
            "cf-questions": "Welche Narkoseart wurde verwendet?",
            "cf-conditional-medikamentenop_2": "Ja",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Dämmerschlaf", value: "Daemmerschlaf" },
              { tag: "option", "cf-label": "Vollnarkose", value: "Vollnarkose" },
              { tag: "option", "cf-label": "Lokale Verfahren", value: "Lokale Verfahren" },
              { tag: "option", "cf-label": "Ich war waehrend der OP wach", value: "Ich war waehrend der OP wach" },
              { tag: "option", "cf-label": "Weiß ich nicht", value: "Weiß ich nicht" },
            ]
          },
          {
            tag: "textarea",
            name: "medikamentenopwann_2",
            "cf-questions": "Die Frage bezieht sich auf die Reaktion mit {medikamentenname_2}&&Wann wurde die OP durchgeführt?",
            "cf-conditional-medikamentenop_2": "Ja",
            "cf-input-placeholder": "",
          },
          {
            tag: "textarea",
            name: "medikamentenopwo_2",
            "cf-questions": "Wo wurde die OP durchgeführt?&&Bitte den Arztbrief der OP und das Narkoseprotokoll mitbringen.",
            "cf-conditional-medikamentenop_2": "Ja",
            "cf-input-placeholder": "",
          },
          {
            tag: "select",
            name: "medikamentenopzeitverhaeltniss_2",
            "cf-questions": "Sind die Symptome während oder nach der OP aufgetreten?",
            "cf-conditional-medikamentenop_2": "Ja",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Während der OP", value: "Waehrend der OP" },
              { tag: "option", "cf-label": "Nach der OP", value: "Nach der OP" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenopnach_2",
            "cf-questions": "Wie viele Stunden nach Beendigung der OP?",
            "cf-conditional-medikamentenopzeitverhaeltniss_2": "Nach der OP",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Gleich nach Aufwachen", value: "Gleich nach Aufwachen" },
              { tag: "option", "cf-label": "0 - 1 Stunden", value: "0 - 1 Stunden" },
              { tag: "option", "cf-label": "1 - 2 Stunden", value: "1 - 2 Stunden" },
              { tag: "option", "cf-label": "2 - 3 Stunden", value: "2 - 3 Stunden" },
              { tag: "option", "cf-label": "3 - 6 Stunden", value: "3 - 6 Stunden" },
              { tag: "option", "cf-label": "6 - 8 Stunden", value: "6 - 8 Stunden" },
              { tag: "option", "cf-label": "8 - 10 Stunden", value: "8 - 10 Stunden" },
              { tag: "option", "cf-label": "10 - 12 Stunden", value: "10 - 12 Stunden" },
              { tag: "option", "cf-label": "12 - 16 Stunden", value: "12 - 16 Stunden" },
              { tag: "option", "cf-label": "16 - 20 Stunden", value: "16 - 20 Stunden" },
              { tag: "option", "cf-label": "20 - 24 Stunden", value: "20 - 24 Stunden" },
              { tag: "option", "cf-label": "Mehr als 24 Stunden", value: "Mehr als 24 Stunden" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenbehandlung_2",
            "cf-questions": "Wer hat die Symptome behandelt?",
            "cf-conditional-medikamentenop_2": "Ja",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Anästhesist", value: "Anaesthesist" },
              { tag: "option", "cf-label": "Stationsarzt", value: "Stationsarzt" },
              { tag: "option", "cf-label": "Keine Behandlung erfolgt", value: "Keine Behandlung erfolgt" },
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr" }
            ]
          },
          {
            tag: "textarea",
            name: "medikamentenopnarkosemed_2",
            "cf-questions": "Die Frage bezieht sich auf die Reaktion mit {medikamentenname_2}&&Welche Medikamente wurden in und kurz vor der Narkose verwendet?&&Dies kann im Narkoseprotokoll nachgelesen werden. Das Narkoseprotokoll kann beim behandelnden Arzt oder Krankenhaus angefragt werden.",
            "cf-conditional-medikamentenop_2": "Ja",
            "cf-input-placeholder": "",
          }
        ])
  }
 
  if(i==3){
      window.ConversationalForm.addTags([
          {
            tag: "textarea",
            name: "medikamentenname_3",
            "cf-questions": "Diese Frage bezieht sich auf die 3. Reaktion.&&Auf welches Medikament haben Sie reagiert? Bitte geben Sie den Namen und/oder Wirkstoff an.",
            "cf-input-placeholder": "z.B. Aspirin/Acetylsalizylsäure"
          },
          {
            tag: "select",
            name: "medikamentenop_3",
            "cf-questions": "Wurde {medikamentenname_3} im Rahmen einer Operation verabreicht?",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Ja", value: "Ja" },
              { tag: "option", "cf-label": "Nein", value: "Nein" },
            ]
          },
          {
            tag: "select",
            name: "medikamentenandere_3",
            "cf-questions": "Sie haben nach der Einnahme von {medikamentenname_3}  reagiert. Haben sie am selben Tag oder in den Tagen davor und danach noch andere Medikamente eingenommen, die nicht zu Ihrer Dauermedikation gehöhren?&&Pflanzliche Medikamente oder Homöopathika zählen auch.&&Z.B. Sie haben Aspirin-Complex bei einer Erkältung eingenommen, auf dieses haben sie reagiert.Am selben Tag haben sie aber auch noch Dolormin gegen die Halsschmerzen gelutscht. Dann müssten Sie hier „Ja“ auswählen.",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Ja", value: "Ja" },
              { tag: "option", "cf-label": "Nein", value: "Nein" },
              { tag: "option", "cf-label": "Weiß ich nicht", value: "Weiß ich nicht" },
            ]
          },
          {
            tag: "textarea",
            name: "medikamentenanderename_3",
            "cf-questions":  "Welche?&&Am besten Name und/oder Wirkstoff angegeben.",
            "cf-input-placeholder": "z.B. Aspirin/Acetylsalizylsäure",
            "cf-conditional-medikamentenandere_3" :"Ja"
          },
          {
            tag: "select",
            name: "medikamentengrund_3",
            "cf-questions": "Warum haben Sie {medikamentenname_3} eingenommen bzw. bekommen?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenop_3": "Nein",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Atemwegsinfekt/Erkältung", value: "Atemwegsinfekt/Erkaeltung" },
              { tag: "option", "cf-label": "Lungenentzündung", value: "Lungenentzuendung" },
              { tag: "option", "cf-label": "Blasenentzündung", value: "Blasenentzuendung" },
              { tag: "option", "cf-label": "Schmerzlinderung", value: "Schmerzlinderung" },
              { tag: "option", "cf-label": "Sonstiges", value: "Sonstiges" },
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr" }
            ]
          },
          {
            tag: "textarea",
            name: "medikamentengrundschmerz_3",
            "cf-questions":  "Was war der Grund für Ihre Schmerzen?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentengrund_3" :"Schmerzlinderung"
          },
          {
            tag: "textarea",
            name: "medikamentengrundsonstige_3",
            "cf-questions":  "Warum haben sie {medikamentenname_3} eingenommen bzw. bekommen?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentengrund_3" :"Sonstiges"
          },
          {
            tag: "textarea",
            name: "medikamentenwann_3",
            "cf-questions":  "Wann war die Reaktion mit {medikamentenname_3}?&&Geben sie bitte das Jahr und wenn noch bekannt den Monat an.",
            "cf-input-placeholder": "",
          },
          {
            tag: "select",
            name: "medikamentensymptome_3",
            "cf-questions": "Was ist als Reaktion auf {medikamentenname_3} passiert?&&Bitte zählen Sie möglichst alle Symptome auf, die nach der Einnahme auftraten.",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Hautausschlag", value: "Hautausschlag" },
              { tag: "option", "cf-label": "Hautrötung", value: "Hautroetung" },
              { tag: "option", "cf-label": "Gesichtsschwellung", value: "Gesichtsschwellung" },
              { tag: "option", "cf-label": "Juckreiz", value: "Juckreiz" },
              { tag: "option", "cf-label": "Kribbeln an Händen, Füßen oder Kopfhaut", value: "Kribbeln an Haenden, Fueßen oder Kopfhaut" },
              { tag: "option", "cf-label": "Erschwerte Atmung", value: "Erschwerte Atmung" },
              { tag: "option", "cf-label": "Atemnot", value: "Atemnot" },
              { tag: "option", "cf-label": "Kloßgefühl im Hals", value: "Kloßgefuehl im Hals" },
              { tag: "option", "cf-label": "Übelkeit", value: "Uebelkeit" },
              { tag: "option", "cf-label": "Durchfall", value: "Durchfall" },
              { tag: "option", "cf-label": "Erbrechen", value: "Erbrechen" },
              { tag: "option", "cf-label": "Schwindel", value: "Schwindel" },
              { tag: "option", "cf-label": "Kreislaufprobleme", value: "Kreislaufprobleme" },
              { tag: "option", "cf-label": "Bewusstlosigkeit", value: "Bewusstlosigkeit" },
              { tag: "option", "cf-label": "Fieber", value: "Fieber" },
              { tag: "option", "cf-label": "Reaktion an den Schleimhäuten (Lippe, Mund, Augen, genital)", value: "Reaktion an den Schleimhaeuten (Lippe, Mund, Augen, genital)" },
              { tag: "option", "cf-label": "Sonstige Symptome", value: "Sonstige Symptome" },
            ]
          },
          {
            tag: "textarea",
            name: "medikamentensymptomesonstige_3",
            "cf-questions":  "Unter welche sonstigen Symptome litten Sie nach der Einnahme von {medikamentenname_3}?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_3":"Sonstige Symptome"
          },
          {
            tag: "select",
            name: "medikamentenausschlag_3",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_3} unter Hautausschlag zu leiden.&&Wie sah der Hautausschlag am ehesten aus?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_3":"Hautausschlag",
            children: [
              { tag: "option", "cf-label": "Nesselsucht (Urtikaria)", value: "Nesselsucht (Urtikaria)" },
              { tag: "option", "cf-label": "Makulopapulöses Exanthem", value: "Makulopapuloeses Exanthem" },
              { tag: "option", "cf-label": "Anders", value: "Anders" },
            ]
          },
          {
            tag: "select",
            name: "medikamentennesselsuchtwo_3",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_3} unter Nesselsucht zu leiden.&&Wo hatten sie überall Nesseln nach der Medikamenteneinnahme?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenausschlag_3":"Nesselsucht (Urtikaria)",
            children: [
              { tag: "option", "cf-label": "Mundschleimhaut", value: "Mundschleimhaut" },
              { tag: "option", "cf-label": "Gesicht/Dekolletébereich", value: "Gesicht/Dekolletébereich" },
              { tag: "option", "cf-label": "Arme", value: "Arme" },
              { tag: "option", "cf-label": "Beine", value: "Beine" },
              { tag: "option", "cf-label": "Hände", value: "Hände" },
              { tag: "option", "cf-label": "Füße", value: "Füße" },
              { tag: "option", "cf-label": "Brust/Bauchbereich", value: "Brust/Bauchbereich" },
              { tag: "option", "cf-label": "Genitalregion", value: "Genitalregion" },
              { tag: "option", "cf-label": "Rücken", value: "Rücken" },
            ]
          },
          {
            tag: "select",
            name: "medikamentennesselsuchtohne_3",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_3} unter Nesselsucht zu leiden.&&Hatten sie schon ein- oder mehrmals Nesselsucht/Urtikaria OHNE dass vorher ein Medikament eingenommen wurde?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenausschlag_3":"Nesselsucht (Urtikaria)",
            children: [
              { tag: "option", "cf-label": "Ja", value: "Ja" },
              { tag: "option", "cf-label": "Nein", value: "Nein" },
            ]
          },
          {
            tag: "select",
            name: "medikamentennesselsuchtohnehaeufigkeit_3",
            "cf-questions": "Trat bei Ihnen Nesselsucht ohne Medikamenteneinnahme nur selten (1-2-mal pro Jahr) oder häufiger auf?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentennesselsuchtohne_3":"Ja",
            children: [
              { tag: "option", "cf-label": "Jeden Tag", value: "Jeden Tag" },
              { tag: "option", "cf-label": "1-2 mal pro Woche", value: "1-2 mal pro Woche" },
              { tag: "option", "cf-label": "1-2 mal pro Monat", value: "1-2 mal pro Monat" },
              { tag: "option", "cf-label": "Sonstiges", value: "Sonstiges" },
            ]
          },
          {
            tag: "textarea",
            name: "medikamentennesselsuchtohnehaeufigkeitsonstiges_3",
            "cf-questions": "Wie oft?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentennesselsuchtohnehaeufigkeit_3":"Sonstiges"
          },
          {
            tag: "textarea",
            name: "medikamentennesselsuchtquaddeln_3",
            "cf-questions": "Wie lange haben sie schon immer mal wieder Quaddeln?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentennesselsuchtohne_3":"Ja"
          },
          {
            tag: "select",
            name: "medikamentennesselsuchtquaddelnstaerke_3",
            "cf-questions": "Wie schlimm sind die Quaddeln auf einer Skala von 0 bis 10?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenausschlag_3":"Nesselsucht (Urtikaria)",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentennesselsuchtjuckreiz_3",
            "cf-questions": "Wie schlimm ist Juckreiz auf einer Skala von 0 bis 10?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenausschlag_3":"Nesselsucht (Urtikaria)",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenausschlagwo_3",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_3} unter Hautausschlag zu leiden.&&Wo war der Hautausschlag?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenausschlag_3":"Makulopapuloeses Exanthem|Anders",
            children: [
              { tag: "option", "cf-label": "Mundschleimhaut", value: "Mundschleimhaut" },
              { tag: "option", "cf-label": "Gesicht/Dekolletébereich", value: "Gesicht/Dekolletébereich" },
              { tag: "option", "cf-label": "Arme", value: "Arme" },
              { tag: "option", "cf-label": "Beine", value: "Beine" },
              { tag: "option", "cf-label": "Hände", value: "Hände" },
              { tag: "option", "cf-label": "Füße", value: "Füße" },
              { tag: "option", "cf-label": "Brust/Bauchbereich", value: "Brust/Bauchbereich" },
              { tag: "option", "cf-label": "Genitalregion", value: "Genitalregion" },
              { tag: "option", "cf-label": "Rücken", value: "Rücken" },
            ]
          },
          {
            tag: "select",
            name: "medikamentenausschlagfluechtig_3",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_3} unter Hautausschlag zu leiden.&&Waren die Hautveränderungen flüchtig (also wechselten sie die Stelle) oder über mehrere Tage an den gleichen Stellen?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_3":"Hautausschlag",
            children: [
              { tag: "option", "cf-label": "Flüchtig", value: "Fluechtig"},
              { tag: "option", "cf-label": "Die Hautveränderungen sind an den selben Stellen geblieben wo sie zuerst aufgetaucht sind", value: "Die Hautveraenderungen sind an den selben Stellen geblieben wo sie zuerst aufgetaucht sind" },
            ]
          },
          {
            tag: "select",
            name: "medikamentenhautausschlagdauer_3",
            "cf-questions": "Wie lange hat es gedauert bis der Hautausschlag wieder weg war?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_3":"Hautausschlag",
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreiz_3",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_3} unter Juckreiz zu leiden.&&Wie schlimm war der Juckreiz, der mit den Hautveränderungen einherging?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_3":"Juckreiz",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
          tag: "select",
            name: "medikamentenjuckreizwo_3",
            "cf-questions": "Wo war der Juckreiz?",
            "cf-input-placeholder": "",
            multiple: true,
            "cf-conditional-medikamentensymptome_3":"Juckreiz",
            children: [
              { tag: "option", "cf-label": "Mundschleimhaut", value: "Mundschleimhaut" },
              { tag: "option", "cf-label": "Gesicht/Dekolletébereich", value: "Gesicht/Dekolletébereich" },
              { tag: "option", "cf-label": "Arme", value: "Arme" },
              { tag: "option", "cf-label": "Beine", value: "Beine" },
              { tag: "option", "cf-label": "Hände", value: "Hände" },
              { tag: "option", "cf-label": "Füße", value: "Füße" },
              { tag: "option", "cf-label": "Brust/Bauchbereich", value: "Brust/Bauchbereich" },
              { tag: "option", "cf-label": "Genitalregion", value: "Genitalregion" },
              { tag: "option", "cf-label": "Rücken", value: "Rücken" },
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizmund_3",
            "cf-questions": "Wie schlimm war der Juckreiz an den Mundschleimhäuten?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_3":"Mundschleimhaut",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizgesicht_3",
            "cf-questions": "Wie schlimm war der Juckreiz im Gesicht/Dekolletébereich?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_3":"Gesicht/Dekolletébereich",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizarme_3",
            "cf-questions": "Wie schlimm war der Juckreiz an den Armen?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_3":"Arme",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizbeine_3",
            "cf-questions": "Wie schlimm war der Juckreiz an den Beinen?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_3":"Beine",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizhaende_3",
            "cf-questions": "Wie schlimm war der Juckreiz an den Händen?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_3":"Haende",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizfuesse_3",
            "cf-questions": "Wie schlimm war der Juckreiz an den Füßen?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_3":"Fueße",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizbrust_3",
            "cf-questions": "Wie schlimm war der Juckreiz an der Brust bzw. im Bauchbereich?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_3":"Brust/Bauchbereich",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenjuckreizgenitalregion_3",
            "cf-questions": "Wie schlimm war der Juckreiz in der Genitalregion?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentenjuckreizwo_3":"Genitalregion",
            children: [
              { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenerbrechen_3",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_3} unter Erbrechen zu leiden.&&Wie oft mussten sie sich übergeben?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_3":"Erbrechen",
            children: [
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "mehr als 9 mal", value: "mehr als 9 mal" }
            ]
          },
          {
            tag: "select",
            name: "medikamentendurchfall_3",
            "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_3} unter Durchfall zu leiden.&&Wie oft hatten Sie Durchfall?",
            "cf-input-placeholder": "",
            multiple: false,
            "cf-conditional-medikamentensymptome_3":"Durchfall",
            children: [
              { tag: "option", "cf-label": "1", value: "1" },
              { tag: "option", "cf-label": "2", value: "2" },
              { tag: "option", "cf-label": "3", value: "3" },
              { tag: "option", "cf-label": "4", value: "4" },
              { tag: "option", "cf-label": "5", value: "5" },
              { tag: "option", "cf-label": "6", value: "6" },
              { tag: "option", "cf-label": "7", value: "7" },
              { tag: "option", "cf-label": "8", value: "8" },
              { tag: "option", "cf-label": "9", value: "9" },
              { tag: "option", "cf-label": "mehr als 9 mal", value: "mehr als 9 mal" }
            ]
          },
          {
            tag: "select",
            name: "medikamentendauer_3",
            "cf-questions": " Bitte geben Sie an, wie lange Sie {medikamentenname_3} genommen bzw. gegeben bekommen haben.",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Einmalige", value: "Einmalige" },
              { tag: "option", "cf-label": "Einnahme über X Tage", value: "Einnahme ueber X Tage" },
              { tag: "option", "cf-label": "Einnahme über X Wochen", value: "Einnahme ueber X Wochen" }
            ]
          },
          {
            tag: "textarea",
            name: "medikamentendauertage_3",
            "cf-questions": "Über wie viele Tage haben Sie {medikamentenname_3} eingenommen?",
            "cf-conditional-medikamentendauer_3": "Einnahme ueber X Tage",
            "cf-input-placeholder": ""
          },
          {
            tag: "textarea",
            name: "medikamentendauerwochen_3",
            "cf-questions": "Über wie viele Wochen haben Sie {medikamentenname_3} eingenommen?",
            "cf-conditional-medikamentendauer_3": "Einnahme ueber X Wochen",
            "cf-input-placeholder": ""
          },
          {
            tag: "select",
            name: "medikamentenausloesedauer_3",
            "cf-questions": "Bitte geben Sie an, wie lange es nach der ersten Einnahme von {medikamentenname_3} gedauert hat, bis die ersten Symptome auftraten.",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1 Minute", value: "1 Minute" },
              { tag: "option", "cf-label": "5 Minuten", value: "5 Minuten" },
              { tag: "option", "cf-label": "15 Minuten", value: "15 Minuten" },
              { tag: "option", "cf-label": "30 Minuten", value: "30 Minuten" },
              { tag: "option", "cf-label": "1 Stunde", value: "1 Stunde" },
              { tag: "option", "cf-label": "6 Stunden", value: "6 Stunden" },
              { tag: "option", "cf-label": "24 Stunden", value: "24 Stunden" },
              { tag: "option", "cf-label": "2 Tage", value: "2 Tage" },
              { tag: "option", "cf-label": "3 Tage", value: "3 Tage" },
              { tag: "option", "cf-label": "4 Tage", value: "4 Tage" },
              { tag: "option", "cf-label": "5 Tage", value: "5 Tage" },
              { tag: "option", "cf-label": "6 Tage", value: "6 Tage" },
              { tag: "option", "cf-label": "7 Tage", value: "7 Tage" },
              { tag: "option", "cf-label": "8 Tage", value: "8 Tage" },
              { tag: "option", "cf-label": "9 Tage", value: "9 Tage" },
              { tag: "option", "cf-label": "10 Tage", value: "10 Tage" },
              { tag: "option", "cf-label": "2 Wochen", value: "2 Wochen" },
              { tag: "option", "cf-label": "4 Wochen", value: "4 Wochen" },
              { tag: "option", "cf-label": "Mehr als 4 Wochen", value: "Mehr als 4 Wochen" },
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"}
            ]
          },
          {
            tag: "select",
            name: "medikamentenbehandlungjanein_3",
            "cf-questions": "Wurde die Reaktion nach der Einnahme von {medikamentenname_3} behandelt?",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Ja", value: "Ja" },
              { tag: "option", "cf-label": "Nein", value: "Nein" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenbehandlungwer_3",
            "cf-questions": "Von wem wurde die Reaktion behandelt?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenbehandlungjanein_3": "Ja",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Arzt", value: "Arzt" },
              { tag: "option", "cf-label": "Notarzt", value: "Notarzt" },
              { tag: "option", "cf-label": "Krankenhaus", value: "Krankenhaus" },
              { tag: "option", "cf-label": "Selbst", value: "Selbst" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenbehandlungwie_3",
            "cf-questions": "Wie wurde behandelt?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenbehandlungjanein_3": "Ja",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Tabletten", value: "Tabletten" },
              { tag: "option", "cf-label": "Spritze", value: "Spritze" },
              { tag: "option", "cf-label": "Infusion", value: "Infusion" },
              { tag: "option", "cf-label": "Kortisoncreme", value: "Kortisoncreme" },
              { tag: "option", "cf-label": "Sonstiges", value: "Sonstiges" },
              { tag: "option", "cf-label": "Weiß ich nicht", value: "Weiß ich nicht" }
            ]
          },
          {
            tag: "textarea",
            name: "medikamentenbehandlungtabletten_3",
            "cf-questions": "Bitte geben sie den Namen der Tabletten an mit denen ihre Reaktion mit {medikamentenname_3} behandelt wurde.",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenbehandlungwie_3": "Tabletten"
          },
          {
            tag: "textarea",
            name: "medikamentenbehandlungspritze_3",
            "cf-questions": "Bitte geben sie den Namen der Spritzen an mit denen ihre Reaktion mit {medikamentenname_3} behandelt wurde.",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenbehandlungwie_3": "Spritze"
          },
          {
            tag: "textarea",
            name: "medikamentenbehandlunginfusion_3",
            "cf-questions": "Bitte geben sie den Namen der Infusion an mit denen ihre Reaktion mit {medikamentenname_3} behandelt wurde.",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenbehandlungwie_3": "Infusion"
          },
          {
            tag: "select",
            name: "medikamentenhautroetungdauer_3",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_3}&&Wie lange hat es gedauert bis die Hautrötung wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_3": "Hautroetung",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentegesichtsschwellungndauer_3",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_3}&&Wie lange hat es gedauert bis die Gesichtsschwellung wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_3": "Gesichtsschwellung",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenkribbelndauer_3",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_3}&&Wie lange hat es gedauert bis das Kribbeln an Händen, Füßen oder Kopfhaut wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_3": "Kribbeln an Haenden, Fueßen oder Kopfhaut",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenerschwerteatmungdauer_3",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_3}&&Wie lange hat es gedauert bis die erschwerte Atmung wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_3": "Erschwerte Atmung",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenatemnotdauer_3",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_3}&&Wie lange hat es gedauert bis die Atemnot wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_3": "Atemnot",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenklossgefuehldauer_3",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_3}&&Wie lange hat es gedauert bis das Kloßgefühl im Hals wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_3": "Kloßgefuehl im Hals",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenuebelkeitdauer_3",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_3}&&Wie lange hat es gedauert bis die Übelkeit wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_3": "Uebelkeit",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentendurchfalldauer_3",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_3}&&Wie lange hat es gedauert bis der Durchfall wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_3": "Durchfall",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenerbrechendauer_3",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_3}&&Wie lange hat es gedauert bis das Erbrechen wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_3": "Erbrechen",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenschwindeldauer_3",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_3}&&Wie lange hat es gedauert bis der Schwindel wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_3": "Schwindel",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenkreislaufproblemedauer_3",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_3}&&Wie lange hat es gedauert bis die Kreislaufprobleme wieder weg waren?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_3": "Kreislaufprobleme",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenbewusstlosigkeitdauer_3",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_3}&&Wie lange hat es gedauert bis die Bewusstlosigkeit wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_3": "Bewusstlosigkeit",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenfieberdauer_3",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_3}&&Wie lange hat es gedauert bis das Fieber wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_3": "Fieber",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenschleimhaeutedauer_3",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_3}&&Wie lange hat es gedauert bis die Reaktion an den Schleimhäuten (Lippe, Mund, Augen, genital) wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_3": "Reaktion an den Schleimhaeuten (Lippe, Mund, Augen, genital)",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentensonstigesymptomedauer_3",
            "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_3}&&Wie lange hat es gedauert bis {medikamentensymptomesonstige_3} wieder weg war?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentensymptome_3": "Sonstige Symptome",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
              { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
              { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
              { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"},
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"},
            ]
          },
          {
            tag: "select",
            name: "medikamentenwiederjanein_3",
            "cf-questions": "Haben Sie {medikamentenname_3} seither wieder genommen?",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Ja", value: "Ja"},
              { tag: "option", "cf-label": "Nein", value: "Nein"},
              { tag: "option", "cf-label": "Ich bin mir nicht sicher", value: "Ich bin mir nicht sicher"}
            ]
          },
          {
            tag: "select",
            name: "medikamentenwieder_3",
            "cf-questions": "Wie gut haben Sie {medikamentenname_3} beim wiederholtem Einnehmen vertragen?",
            "cf-input-placeholder": "",
            "cf-conditional-medikamentenwiederjanein_3": "Ja", 
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Nochmal die gleiche/eine ähnliche Reaktion bekommen", value: "Nochmal die gleiche/eine aehnliche Reaktion bekommen"},
              { tag: "option", "cf-label": "Gut vertragen", value: "Gut vertragen"},
              { tag: "option", "cf-label": "Sonstiges", value: "Sonstiges"}
            ]
          },
          {
            tag: "textarea",
            name: "medikamentensonstigewieder_3",
            "cf-questions": "Wie gut haben Sie {medikamentenname_3} beim wiederholtem Einnehmen vertragen?",
            "cf-conditional-medikamentenwieder_3": "Sonstiges",
            "cf-input-placeholder": "",
          },
          {
            tag: "textarea",
            name: "medikamentenopgrund_3",
            "cf-questions": "Die Frage bezieht sich auf die Reaktion mit {medikamentenname_3}&&Welche OP wurde durchgeführt/also warum wurden sie operiert?",
            "cf-conditional-medikamentenop_3": "Ja",
            "cf-input-placeholder": "",
          },
          {
            tag: "select",
            name: "medikamentenopnarkose_3",
            "cf-questions": "Welche Narkoseart wurde verwendet?",
            "cf-conditional-medikamentenop_3": "Ja",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Dämmerschlaf", value: "Daemmerschlaf" },
              { tag: "option", "cf-label": "Vollnarkose", value: "Vollnarkose" },
              { tag: "option", "cf-label": "Lokale Verfahren", value: "Lokale Verfahren" },
              { tag: "option", "cf-label": "Ich war waehrend der OP wach", value: "Ich war waehrend der OP wach" },
              { tag: "option", "cf-label": "Weiß ich nicht", value: "Weiß ich nicht" },
            ]
          },
          {
            tag: "textarea",
            name: "medikamentenopwann_3",
            "cf-questions": "Die Frage bezieht sich auf die Reaktion mit {medikamentenname_3}&&Wann wurde die OP durchgeführt?",
            "cf-conditional-medikamentenop_3": "Ja",
            "cf-input-placeholder": "",
          },
          {
            tag: "textarea",
            name: "medikamentenopwo_3",
            "cf-questions": "Wo wurde die OP durchgeführt?&&Bitte den Arztbrief der OP und das Narkoseprotokoll mitbringen.",
            "cf-conditional-medikamentenop_3": "Ja",
            "cf-input-placeholder": "",
          },
          {
            tag: "select",
            name: "medikamentenopzeitverhaeltniss_3",
            "cf-questions": "Sind die Symptome während oder nach der OP aufgetreten?",
            "cf-conditional-medikamentenop_3": "Ja",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Während der OP", value: "Waehrend der OP" },
              { tag: "option", "cf-label": "Nach der OP", value: "Nach der OP" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenopnach_3",
            "cf-questions": "Wie viele Stunden nach Beendigung der OP?",
            "cf-conditional-medikamentenopzeitverhaeltniss_3": "Nach der OP",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Gleich nach Aufwachen", value: "Gleich nach Aufwachen" },
              { tag: "option", "cf-label": "0 - 1 Stunden", value: "0 - 1 Stunden" },
              { tag: "option", "cf-label": "1 - 2 Stunden", value: "1 - 2 Stunden" },
              { tag: "option", "cf-label": "2 - 3 Stunden", value: "2 - 3 Stunden" },
              { tag: "option", "cf-label": "3 - 6 Stunden", value: "3 - 6 Stunden" },
              { tag: "option", "cf-label": "6 - 8 Stunden", value: "6 - 8 Stunden" },
              { tag: "option", "cf-label": "8 - 10 Stunden", value: "8 - 10 Stunden" },
              { tag: "option", "cf-label": "10 - 12 Stunden", value: "10 - 12 Stunden" },
              { tag: "option", "cf-label": "12 - 16 Stunden", value: "12 - 16 Stunden" },
              { tag: "option", "cf-label": "16 - 20 Stunden", value: "16 - 20 Stunden" },
              { tag: "option", "cf-label": "20 - 24 Stunden", value: "20 - 24 Stunden" },
              { tag: "option", "cf-label": "Mehr als 24 Stunden", value: "Mehr als 24 Stunden" }
            ]
          },
          {
            tag: "select",
            name: "medikamentenbehandlung_3",
            "cf-questions": "Wer hat die Symptome behandelt?",
            "cf-conditional-medikamentenop_3": "Ja",
            "cf-input-placeholder": "",
            multiple: false,
            children: [
              { tag: "option", "cf-label": "Anästhesist", value: "Anaesthesist" },
              { tag: "option", "cf-label": "Stationsarzt", value: "Stationsarzt" },
              { tag: "option", "cf-label": "Keine Behandlung erfolgt", value: "Keine Behandlung erfolgt" },
              { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr" }
            ]
          },
          {
            tag: "textarea",
            name: "medikamentenopnarkosemed_3",
            "cf-questions": "Die Frage bezieht sich auf die Reaktion mit {medikamentenname_3}&&Welche Medikamente wurden in und kurz vor der Narkose verwendet?&&Dies kann im Narkoseprotokoll nachgelesen werden. Das Narkoseprotokoll kann beim behandelnden Arzt oder Krankenhaus angefragt werden.",
            "cf-conditional-medikamentenop_3": "Ja",
            "cf-input-placeholder": "",
          }
        ])
  }
 
  if(i==4){
    window.ConversationalForm.addTags([
      {
        tag: "textarea",
        name: "medikamentenname_4",
        "cf-questions": "Diese Frage bezieht sich auf die 4. Reaktion.&&Auf welches Medikament haben Sie reagiert? Bitte geben Sie den Namen und/oder Wirkstoff an.",
        "cf-input-placeholder": "z.B. Aspirin/Acetylsalizylsäure"
      },
      {
        tag: "select",
        name: "medikamentenop_4",
        "cf-questions": "Wurde {medikamentenname_4} im Rahmen einer Operation verabreicht?",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Ja", value: "Ja" },
          { tag: "option", "cf-label": "Nein", value: "Nein" },
        ]
      },
      {
        tag: "select",
        name: "medikamentenandere_4",
        "cf-questions": "Sie haben nach der Einnahme von {medikamentenname_4}  reagiert. Haben sie am selben Tag oder in den Tagen davor und danach noch andere Medikamente eingenommen, die nicht zu Ihrer Dauermedikation gehöhren?&&Pflanzliche Medikamente oder Homöopathika zählen auch.&&Z.B. Sie haben Aspirin-Complex bei einer Erkältung eingenommen, auf dieses haben sie reagiert.Am selben Tag haben sie aber auch noch Dolormin gegen die Halsschmerzen gelutscht. Dann müssten Sie hier „Ja“ auswählen.",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Ja", value: "Ja" },
          { tag: "option", "cf-label": "Nein", value: "Nein" },
          { tag: "option", "cf-label": "Weiß ich nicht", value: "Weiß ich nicht" },
        ]
      },
      {
        tag: "textarea",
        name: "medikamentenanderename_4",
        "cf-questions":  "Welche?&&Am besten Name und/oder Wirkstoff angegeben.",
        "cf-input-placeholder": "z.B. Aspirin/Acetylsalizylsäure",
        "cf-conditional-medikamentenandere_4" :"Ja"
      },
      {
        tag: "select",
        name: "medikamentengrund_4",
        "cf-questions": "Warum haben Sie {medikamentenname_4} eingenommen bzw. bekommen?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentenop_4": "Nein",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Atemwegsinfekt/Erkältung", value: "Atemwegsinfekt/Erkaeltung" },
          { tag: "option", "cf-label": "Lungenentzündung", value: "Lungenentzuendung" },
          { tag: "option", "cf-label": "Blasenentzündung", value: "Blasenentzuendung" },
          { tag: "option", "cf-label": "Schmerzlinderung", value: "Schmerzlinderung" },
          { tag: "option", "cf-label": "Sonstiges", value: "Sonstiges" },
          { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr" }
        ]
      },
      {
        tag: "textarea",
        name: "medikamentengrundschmerz_4",
        "cf-questions":  "Was war der Grund für Ihre Schmerzen?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentengrund_4" :"Schmerzlinderung"
      },
      {
        tag: "textarea",
        name: "medikamentengrundsonstige_4",
        "cf-questions":  "Warum haben sie {medikamentenname_4} eingenommen bzw. bekommen?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentengrund_4" :"Sonstiges"
      },
      {
        tag: "textarea",
        name: "medikamentenwann_4",
        "cf-questions":  "Wann war die Reaktion mit {medikamentenname_4}?&&Geben sie bitte das Jahr und wenn noch bekannt den Monat an.",
        "cf-input-placeholder": "",
      },
      {
        tag: "select",
        name: "medikamentensymptome_4",
        "cf-questions": "Was ist als Reaktion auf {medikamentenname_4} passiert?&&Bitte zählen Sie möglichst alle Symptome auf, die nach der Einnahme auftraten.",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Hautausschlag", value: "Hautausschlag" },
          { tag: "option", "cf-label": "Hautrötung", value: "Hautroetung" },
          { tag: "option", "cf-label": "Gesichtsschwellung", value: "Gesichtsschwellung" },
          { tag: "option", "cf-label": "Juckreiz", value: "Juckreiz" },
          { tag: "option", "cf-label": "Kribbeln an Händen, Füßen oder Kopfhaut", value: "Kribbeln an Haenden, Fueßen oder Kopfhaut" },
          { tag: "option", "cf-label": "Erschwerte Atmung", value: "Erschwerte Atmung" },
          { tag: "option", "cf-label": "Atemnot", value: "Atemnot" },
          { tag: "option", "cf-label": "Kloßgefühl im Hals", value: "Kloßgefuehl im Hals" },
          { tag: "option", "cf-label": "Übelkeit", value: "Uebelkeit" },
          { tag: "option", "cf-label": "Durchfall", value: "Durchfall" },
          { tag: "option", "cf-label": "Erbrechen", value: "Erbrechen" },
          { tag: "option", "cf-label": "Schwindel", value: "Schwindel" },
          { tag: "option", "cf-label": "Kreislaufprobleme", value: "Kreislaufprobleme" },
          { tag: "option", "cf-label": "Bewusstlosigkeit", value: "Bewusstlosigkeit" },
          { tag: "option", "cf-label": "Fieber", value: "Fieber" },
          { tag: "option", "cf-label": "Reaktion an den Schleimhäuten (Lippe, Mund, Augen, genital)", value: "Reaktion an den Schleimhaeuten (Lippe, Mund, Augen, genital)" },
          { tag: "option", "cf-label": "Sonstige Symptome", value: "Sonstige Symptome" },
        ]
      },
      {
        tag: "textarea",
        name: "medikamentensymptomesonstige_4",
        "cf-questions":  "Unter welche sonstigen Symptome litten Sie nach der Einnahme von {medikamentenname_4}?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentensymptome_4":"Sonstige Symptome"
      },
      {
        tag: "select",
        name: "medikamentenausschlag_4",
        "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_4} unter Hautausschlag zu leiden.&&Wie sah der Hautausschlag am ehesten aus?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentensymptome_4":"Hautausschlag",
        children: [
          { tag: "option", "cf-label": "Nesselsucht (Urtikaria)", value: "Nesselsucht (Urtikaria)" },
          { tag: "option", "cf-label": "Makulopapulöses Exanthem", value: "Makulopapuloeses Exanthem" },
          { tag: "option", "cf-label": "Anders", value: "Anders" },
        ]
      },
      {
        tag: "select",
        name: "medikamentennesselsuchtwo_4",
        "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_4} unter Nesselsucht zu leiden.&&Wo hatten sie überall Nesseln nach der Medikamenteneinnahme?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentenausschlag_4":"Nesselsucht (Urtikaria)",
        children: [
          { tag: "option", "cf-label": "Mundschleimhaut", value: "Mundschleimhaut" },
          { tag: "option", "cf-label": "Gesicht/Dekolletébereich", value: "Gesicht/Dekolletébereich" },
          { tag: "option", "cf-label": "Arme", value: "Arme" },
          { tag: "option", "cf-label": "Beine", value: "Beine" },
          { tag: "option", "cf-label": "Haende", value: "Hände" },
          { tag: "option", "cf-label": "Fueße", value: "Füße" },
          { tag: "option", "cf-label": "Brust/Bauchbereich", value: "Brust/Bauchbereich" },
          { tag: "option", "cf-label": "Genitalregion", value: "Genitalregion" },
        ]
      },
      {
        tag: "select",
        name: "medikamentennesselsuchtohne_4",
        "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_4} unter Nesselsucht zu leiden.&&Hatten sie schon ein- oder mehrmals Nesselsucht/Urtikaria OHNE dass vorher ein Medikament eingenommen wurde?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentenausschlag_4":"Nesselsucht (Urtikaria)",
        children: [
          { tag: "option", "cf-label": "Ja", value: "Ja" },
          { tag: "option", "cf-label": "Nein", value: "Nein" },
        ]
      },
      {
        tag: "select",
        name: "medikamentennesselsuchtohnehaeufigkeit_4",
        "cf-questions": "Trat bei Ihnen Nesselsucht ohne Medikamenteneinnahme nur selten (1-2-mal pro Jahr) oder häufiger auf?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentennesselsuchtohne_4":"Ja",
        children: [
          { tag: "option", "cf-label": "Jeden Tag", value: "Jeden Tag" },
          { tag: "option", "cf-label": "1-2 mal pro Woche", value: "1-2 mal pro Woche" },
          { tag: "option", "cf-label": "1-2 mal pro Monat", value: "1-2 mal pro Monat" },
          { tag: "option", "cf-label": "Sonstiges", value: "Sonstiges" },
        ]
      },
      {
        tag: "textarea",
        name: "medikamentennesselsuchtohnehaeufigkeitsonstiges_4",
        "cf-questions": "Wie oft?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentennesselsuchtohnehaeufigkeit_4":"Sonstiges"
      },
      {
        tag: "textarea",
        name: "medikamentennesselsuchtquaddeln_4",
        "cf-questions": "Wie lange haben sie schon immer mal wieder Quaddeln?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentennesselsuchtohne_4":"Ja"
      },
      {
        tag: "select",
        name: "medikamentennesselsuchtquaddelnstaerke_4",
        "cf-questions": "Wie schlimm sind die Quaddeln auf einer Skala von 0 bis 10?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentenausschlag_4":"Nesselsucht (Urtikaria)",
        children: [
          { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
        ]
      },
      {
        tag: "select",
        name: "medikamentennesselsuchtjuckreiz_4",
        "cf-questions": "Wie schlimm ist Juckreiz auf einer Skala von 0 bis 10?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentenausschlag_4":"Nesselsucht (Urtikaria)",
        children: [
          { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
        ]
      },
      {
        tag: "select",
        name: "medikamentenausschlagwo_4",
        "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_4} unter Hautausschlag zu leiden.&&Wo war der Hautausschlag?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentenausschlag_4":"Makulopapuloeses Exanthem|Anders",
        children: [
          { tag: "option", "cf-label": "Mundschleimhaut", value: "Mundschleimhaut" },
          { tag: "option", "cf-label": "Gesicht/Dekolletébereich", value: "Gesicht/Dekolletébereich" },
          { tag: "option", "cf-label": "Arme", value: "Arme" },
          { tag: "option", "cf-label": "Beine", value: "Beine" },
          { tag: "option", "cf-label": "Haende", value: "Hände" },
          { tag: "option", "cf-label": "Fueße", value: "Füße" },
          { tag: "option", "cf-label": "Brust/Bauchbereich", value: "Brust/Bauchbereich" },
          { tag: "option", "cf-label": "Genitalregion", value: "Genitalregion" },
        ]
      },
      {
        tag: "select",
        name: "medikamentenausschlagfluechtig_4",
        "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_4} unter Hautausschlag zu leiden.&&Waren die Hautveränderungen flüchtig (also wechselten sie die Stelle) oder über mehrere Tage an den gleichen Stellen?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentensymptome_4":"Hautausschlag",
        children: [
          { tag: "option", "cf-label": "Flüchtig", value: "Fluechtig"},
          { tag: "option", "cf-label": "Die Hautveränderungen sind an den selben Stellen geblieben wo sie zuerst aufgetaucht sind", value: "Die Hautveraenderungen sind an den selben Stellen geblieben wo sie zuerst aufgetaucht sind" },
        ]
      },
      {
        tag: "select",
        name: "medikamentenhautausschlagdauer_4",
        "cf-questions": "Wie lange hat es gedauert bis der Hautausschlag wieder weg war?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentensymptome_4":"Hautausschlag",
        children: [
          { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
          { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
          { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
          { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"}
        ]
      },
      {
        tag: "select",
        name: "medikamentenjuckreiz_4",
        "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_4} unter Juckreiz zu leiden.&&Wie schlimm war der Juckreiz, der mit den Hautveränderungen einherging?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentensymptome_4":"Juckreiz",
        children: [
          { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
        ]
      },
      {
      tag: "select",
        name: "medikamentenjuckreizwo_4",
        "cf-questions": "Wo war der Juckreiz?",
        "cf-input-placeholder": "",
        multiple: true,
        "cf-conditional-medikamentensymptome_4":"Juckreiz",
        children: [
          { tag: "option", "cf-label": "Mundschleimhaut", value: "Mundschleimhaut" },
          { tag: "option", "cf-label": "Gesicht/Dekolletébereich", value: "Gesicht/Dekolletébereich" },
          { tag: "option", "cf-label": "Arme", value: "Arme" },
          { tag: "option", "cf-label": "Beine", value: "Beine" },
          { tag: "option", "cf-label": "Haende", value: "Hände" },
          { tag: "option", "cf-label": "Fueße", value: "Füße" },
          { tag: "option", "cf-label": "Brust/Bauchbereich", value: "Brust/Bauchbereich" },
          { tag: "option", "cf-label": "Genitalregion", value: "Genitalregion" },
        ]
      },
      {
        tag: "select",
        name: "medikamentenjuckreizmund_4",
        "cf-questions": "Wie schlimm war der Juckreiz an den Mundschleimhäuten?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentenjuckreizwo_4":"Mundschleimhaut",
        children: [
          { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
        ]
      },
      {
        tag: "select",
        name: "medikamentenjuckreizgesicht_4",
        "cf-questions": "Wie schlimm war der Juckreiz im Gesicht/Dekolletébereich?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentenjuckreizwo_4":"Gesicht/Dekolletébereich",
        children: [
          { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
        ]
      },
      {
        tag: "select",
        name: "medikamentenjuckreizarme_4",
        "cf-questions": "Wie schlimm war der Juckreiz an den Armen?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentenjuckreizwo_4":"Arme",
        children: [
          { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
        ]
      },
      {
        tag: "select",
        name: "medikamentenjuckreizbeine_4",
        "cf-questions": "Wie schlimm war der Juckreiz an den Beinen?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentenjuckreizwo_4":"Beine",
        children: [
          { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
        ]
      },
      {
        tag: "select",
        name: "medikamentenjuckreizhaende_4",
        "cf-questions": "Wie schlimm war der Juckreiz an den Händen?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentenjuckreizwo_4":"Haende",
        children: [
          { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
        ]
      },
      {
        tag: "select",
        name: "medikamentenjuckreizfuesse_4",
        "cf-questions": "Wie schlimm war der Juckreiz an den Füßen?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentenjuckreizwo_4":"Fueße",
        children: [
          { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
        ]
      },
      {
        tag: "select",
        name: "medikamentenjuckreizbrust_4",
        "cf-questions": "Wie schlimm war der Juckreiz an der Brust bzw. im Bauchbereich?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentenjuckreizwo_4":"Brust/Bauchbereich",
        children: [
          { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
        ]
      },
      {
        tag: "select",
        name: "medikamentenjuckreizgenitalregion_4",
        "cf-questions": "Wie schlimm war der Juckreiz in der Genitalregion?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentenjuckreizwo_4":"Genitalregion",
        children: [
          { tag: "option", "cf-label": "0 = keine Beschwerden", value: "0" },
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "10 = extreme Beschwerden", value: "10" }
        ]
      },
      {
        tag: "select",
        name: "medikamentenerbrechen_4",
        "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_4} unter Erbrechen zu leiden.&&Wie oft mussten sie sich übergeben?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentensymptome_4":"Erbrechen",
        children: [
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "mehr als 9 mal", value: "mehr als 9 mal" }
        ]
      },
      {
        tag: "select",
        name: "medikamentendurchfall_4",
        "cf-questions": "Sie haben angegeben als Reaktion auf {medikamentenname_4} unter Durchfall zu leiden.&&Wie oft hatten Sie Durchfall?",
        "cf-input-placeholder": "",
        multiple: false,
        "cf-conditional-medikamentensymptome_4":"Durchfall",
        children: [
          { tag: "option", "cf-label": "1", value: "1" },
          { tag: "option", "cf-label": "2", value: "2" },
          { tag: "option", "cf-label": "3", value: "3" },
          { tag: "option", "cf-label": "4", value: "4" },
          { tag: "option", "cf-label": "5", value: "5" },
          { tag: "option", "cf-label": "6", value: "6" },
          { tag: "option", "cf-label": "7", value: "7" },
          { tag: "option", "cf-label": "8", value: "8" },
          { tag: "option", "cf-label": "9", value: "9" },
          { tag: "option", "cf-label": "mehr als 9 mal", value: "mehr als 9 mal" }
        ]
      },
      {
        tag: "select",
        name: "medikamentendauer_4",
        "cf-questions": " Bitte geben Sie an, wie lange Sie {medikamentenname_4} genommen bzw. gegeben bekommen haben.",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Einmalige", value: "Einmalige" },
          { tag: "option", "cf-label": "Einnahme über X Tage", value: "Einnahme ueber X Tage" },
          { tag: "option", "cf-label": "Einnahme über X Wochen", value: "Einnahme ueber X Wochen" }
        ]
      },
      {
        tag: "textarea",
        name: "medikamentendauertage_4",
        "cf-questions": "Über wie viele Tage haben Sie {medikamentenname_4} eingenommen?",
        "cf-conditional-medikamentendauer_4": "Einnahme ueber X Tage",
        "cf-input-placeholder": ""
      },
      {
        tag: "textarea",
        name: "medikamentendauerwochen_4",
        "cf-questions": "Über wie viele Wochen haben Sie {medikamentenname_4} eingenommen?",
        "cf-conditional-medikamentendauer_4": "Einnahme ueber X Wochen",
        "cf-input-placeholder": ""
      },
      {
        tag: "select",
        name: "medikamentenausloesedauer_4",
        "cf-questions": "Bitte geben Sie an, wie lange es nach der ersten Einnahme von {medikamentenname_4} gedauert hat, bis die ersten Symptome auftraten.",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "1 Minute", value: "1 Minute" },
          { tag: "option", "cf-label": "5 Minuten", value: "5 Minuten" },
          { tag: "option", "cf-label": "15 Minuten", value: "15 Minuten" },
          { tag: "option", "cf-label": "30 Minuten", value: "30 Minuten" },
          { tag: "option", "cf-label": "1 Stunde", value: "1 Stunde" },
          { tag: "option", "cf-label": "6 Stunden", value: "6 Stunden" },
          { tag: "option", "cf-label": "24 Stunden", value: "24 Stunden" },
          { tag: "option", "cf-label": "2 Tage", value: "2 Tage" },
          { tag: "option", "cf-label": "3 Tage", value: "3 Tage" },
          { tag: "option", "cf-label": "4 Tage", value: "4 Tage" },
          { tag: "option", "cf-label": "5 Tage", value: "5 Tage" },
          { tag: "option", "cf-label": "6 Tage", value: "6 Tage" },
          { tag: "option", "cf-label": "7 Tage", value: "7 Tage" },
          { tag: "option", "cf-label": "8 Tage", value: "8 Tage" },
          { tag: "option", "cf-label": "9 Tage", value: "9 Tage" },
          { tag: "option", "cf-label": "10 Tage", value: "10 Tage" },
          { tag: "option", "cf-label": "2 Wochen", value: "2 Wochen" },
          { tag: "option", "cf-label": "4 Wochen", value: "4 Wochen" },
          { tag: "option", "cf-label": "Mehr als 4 Wochen", value: "Mehr als 4 Wochen" },
          { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr"}
        ]
      },
      {
        tag: "select",
        name: "medikamentenbehandlungjanein_4",
        "cf-questions": "Wurde die Reaktion nach der Einnahme von {medikamentenname_4} behandelt?",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Ja", value: "Ja" },
          { tag: "option", "cf-label": "Nein", value: "Nein" }
        ]
      },
      {
        tag: "select",
        name: "medikamentenbehandlungwer_4",
        "cf-questions": "Von wem wurde die Reaktion behandelt?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentenbehandlungjanein_4": "Ja",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Arzt", value: "Arzt" },
          { tag: "option", "cf-label": "Notarzt", value: "Notarzt" },
          { tag: "option", "cf-label": "Krankenhaus", value: "Krankenhaus" },
          { tag: "option", "cf-label": "Selbst", value: "Selbst" }
        ]
      },
      {
        tag: "select",
        name: "medikamentenbehandlungwie_4",
        "cf-questions": "Wie wurde behandelt?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentenbehandlungjanein_4": "Ja",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Tabletten", value: "Tabletten" },
          { tag: "option", "cf-label": "Spritze", value: "Spritze" },
          { tag: "option", "cf-label": "Infusion", value: "Infusion" },
          { tag: "option", "cf-label": "Kortisoncreme", value: "Kortisoncreme" },
          { tag: "option", "cf-label": "Sonstiges", value: "Sonstiges" },
          { tag: "option", "cf-label": "Weiß ich nicht", value: "Weiß ich nicht" }
        ]
      },
      {
        tag: "textarea",
        name: "medikamentenbehandlungtabletten_4",
        "cf-questions": "Bitte geben sie den Namen der Tabletten an mit denen ihre Reaktion mit {medikamentenname_4} behandelt wurde.",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentenbehandlungwie_4": "Tabletten"
      },
      {
        tag: "textarea",
        name: "medikamentenbehandlungspritze_4",
        "cf-questions": "Bitte geben sie den Namen der Spritzen an mit denen ihre Reaktion mit {medikamentenname_4} behandelt wurde.",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentenbehandlungwie_4": "Spritze"
      },
      {
        tag: "textarea",
        name: "medikamentenbehandlunginfusion_4",
        "cf-questions": "Bitte geben sie den Namen der Infusion an mit denen ihre Reaktion mit {medikamentenname_4} behandelt wurde.",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentenbehandlungwie_4": "Infusion"
      },
      {
        tag: "select",
        name: "medikamentenhautroetungdauer_4",
        "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_4}&&Wie lange hat es gedauert bis die Hautrötung wieder weg war?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentensymptome_4": "Hautroetung",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
          { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
          { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
          { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"}
        ]
      },
      {
        tag: "select",
        name: "medikamentegesichtsschwellungndauer_4",
        "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_4}&&Wie lange hat es gedauert bis die Gesichtsschwellung wieder weg war?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentensymptome_4": "Gesichtsschwellung",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
          { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
          { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
          { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"}
        ]
      },
      {
        tag: "select",
        name: "medikamentenkribbelndauer_4",
        "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_4}&&Wie lange hat es gedauert bis das Kribbeln an Händen, Füßen oder Kopfhaut wieder weg war?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentensymptome_4": "Kribbeln an Haenden, Fueßen oder Kopfhaut",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
          { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
          { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
          { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"}
        ]
      },
      {
        tag: "select",
        name: "medikamentenerschwerteatmungdauer_4",
        "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_4}&&Wie lange hat es gedauert bis die erschwerte Atmung wieder weg war?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentensymptome_4": "Erschwerte Atmung",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
          { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
          { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
          { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"}
        ]
      },
      {
        tag: "select",
        name: "medikamentenatemnotdauer_4",
        "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_4}&&Wie lange hat es gedauert bis die Atemnot wieder weg war?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentensymptome_4": "Atemnot",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
          { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
          { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
          { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"}
        ]
      },
      {
        tag: "select",
        name: "medikamentenklossgefuehldauer_4",
        "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_4}&&Wie lange hat es gedauert bis das Kloßgefühl im Hals wieder weg war?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentensymptome_4": "Kloßgefuehl im Hals",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
          { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
          { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
          { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"}
        ]
      },
      {
        tag: "select",
        name: "medikamentenuebelkeitdauer_4",
        "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_4}&&Wie lange hat es gedauert bis die Übelkeit wieder weg war?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentensymptome_4": "Uebelkeit",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
          { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
          { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
          { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"}
        ]
      },
      {
        tag: "select",
        name: "medikamentendurchfalldauer_4",
        "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_4}&&Wie lange hat es gedauert bis der Durchfall wieder weg war?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentensymptome_4": "Durchfall",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
          { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
          { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
          { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"}
        ]
      },
      {
        tag: "select",
        name: "medikamentenerbrechendauer_4",
        "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_4}&&Wie lange hat es gedauert bis das Erbrechen wieder weg war?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentensymptome_4": "Erbrechen",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
          { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
          { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
          { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"}
        ]
      },
      {
        tag: "select",
        name: "medikamentenschwindeldauer_4",
        "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_4}&&Wie lange hat es gedauert bis der Schwindel wieder weg war?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentensymptome_4": "Schwindel",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
          { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
          { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
          { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"}
        ]
      },
      {
        tag: "select",
        name: "medikamentenkreislaufproblemedauer_4",
        "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_4}&&Wie lange hat es gedauert bis die Kreislaufprobleme wieder weg waren?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentensymptome_4": "Kreislaufprobleme",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
          { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
          { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
          { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"}
        ]
      },
      {
        tag: "select",
        name: "medikamentenbewusstlosigkeitdauer_4",
        "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_4}&&Wie lange hat es gedauert bis die Bewusstlosigkeit wieder weg war?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentensymptome_4": "Bewusstlosigkeit",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
          { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
          { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
          { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"}
        ]
      },
      {
        tag: "select",
        name: "medikamentenfieberdauer_4",
        "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_4}&&Wie lange hat es gedauert bis das Fieber wieder weg war?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentensymptome_4": "Fieber",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
          { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
          { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
          { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"}
        ]
      },
      {
        tag: "select",
        name: "medikamentenschleimhaeutedauer_4",
        "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_4}&&Wie lange hat es gedauert bis die Reaktion an den Schleimhäuten (Lippe, Mund, Augen, genital) wieder weg war?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentensymptome_4": "Reaktion an den Schleimhaeuten (Lippe, Mund, Augen, genital)",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
          { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
          { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
          { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"}
        ]
      },
      {
        tag: "select",
        name: "medikamentensonstigesymptomedauer_4",
        "cf-questions": "Die Frage bezieht sich auf die Symptome der Einnahme von {medikamentenname_4}&&Wie lange hat es gedauert bis {medikamentensymptomesonstige_4} wieder weg war?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentensymptome_4": "Sonstige Symptome",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "1-2 Stunden", value: "1-2 Stunden"},
          { tag: "option", "cf-label": "2-10 Stunden", value: "2-10 Stunden"},
          { tag: "option", "cf-label": "10-24 Stunden", value: "10-24 Stunden"},
          { tag: "option", "cf-label": "Mehr als einen Tag", value: "Mehr als einen Tag"}
        ]
      },
      {
        tag: "select",
        name: "medikamentenwiederjanein_4",
        "cf-questions": "Haben Sie {medikamentenname_4} seither wieder genommen?",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Ja", value: "Ja"},
          { tag: "option", "cf-label": "Nein", value: "Nein"},
          { tag: "option", "cf-label": "Ich bin mir nicht sicher", value: "Ich bin mir nicht sicher"}
        ]
      },
      {
        tag: "select",
        name: "medikamentenwieder_4",
        "cf-questions": "Wie gut haben Sie {medikamentenname_4} beim wiederholtem Einnehmen vertragen?",
        "cf-input-placeholder": "",
        "cf-conditional-medikamentenwiederjanein_4": "Ja", 
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Nochmal die gleiche/eine ähnliche Reaktion bekommen", value: "Nochmal die gleiche/eine aehnliche Reaktion bekommen"},
          { tag: "option", "cf-label": "Gut vertragen", value: "Gut vertragen"},
          { tag: "option", "cf-label": "Sonstiges", value: "Sonstiges"}
        ]
      },
      {
        tag: "textarea",
        name: "medikamentensonstigewieder_4",
        "cf-questions": "Wie gut haben Sie {medikamentenname_4} beim wiederholtem Einnehmen vertragen?",
        "cf-conditional-medikamentenwieder_4": "Sonstiges",
        "cf-input-placeholder": "",
      },
      {
        tag: "textarea",
        name: "medikamentenopgrund_4",
        "cf-questions": "Die Frage bezieht sich auf die Reaktion mit {medikamentenname_4}&&Welche OP wurde durchgeführt/also warum wurden sie operiert?",
        "cf-conditional-medikamentenop_4": "Ja",
        "cf-input-placeholder": "",
      },
      {
        tag: "select",
        name: "medikamentenopnarkose_4",
        "cf-questions": "Welche Narkoseart wurde verwendet?",
        "cf-conditional-medikamentenop_4": "Ja",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Dämmerschlaf", value: "Daemmerschlaf" },
          { tag: "option", "cf-label": "Vollnarkose", value: "Vollnarkose" },
          { tag: "option", "cf-label": "Lokale Verfahren", value: "Lokale Verfahren" },
          { tag: "option", "cf-label": "Ich war waehrend der OP wach", value: "Ich war waehrend der OP wach" },
          { tag: "option", "cf-label": "Weiß ich nicht", value: "Weiß ich nicht" },
        ]
      },
      {
        tag: "textarea",
        name: "medikamentenopwann_4",
        "cf-questions": "Die Frage bezieht sich auf die Reaktion mit {medikamentenname_4}&&Wann wurde die OP durchgeführt?",
        "cf-conditional-medikamentenop_4": "Ja",
        "cf-input-placeholder": "",
      },
      {
        tag: "textarea",
        name: "medikamentenopwo_4",
        "cf-questions": "Wo wurde die OP durchgeführt?&&Bitte den Arztbrief der OP und das Narkoseprotokoll mitbringen.",
        "cf-conditional-medikamentenop_4": "Ja",
        "cf-input-placeholder": "",
      },
      {
        tag: "select",
        name: "medikamentenopzeitverhaeltniss_4",
        "cf-questions": "Sind die Symptome während oder nach der OP aufgetreten?",
        "cf-conditional-medikamentenop_4": "Ja",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Während der OP", value: "Waehrend der OP" },
          { tag: "option", "cf-label": "Nach der OP", value: "Nach der OP" }
        ]
      },
      {
        tag: "select",
        name: "medikamentenopnach_4",
        "cf-questions": "Wie viele Stunden nach Beendigung der OP?",
        "cf-conditional-medikamentenopzeitverhaeltniss_4": "Nach der OP",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Gleich nach Aufwachen", value: "Gleich nach Aufwachen" },
          { tag: "option", "cf-label": "0 - 1 Stunden", value: "0 - 1 Stunden" },
          { tag: "option", "cf-label": "1 - 2 Stunden", value: "1 - 2 Stunden" },
          { tag: "option", "cf-label": "2 - 3 Stunden", value: "2 - 3 Stunden" },
          { tag: "option", "cf-label": "3 - 6 Stunden", value: "3 - 6 Stunden" },
          { tag: "option", "cf-label": "6 - 8 Stunden", value: "6 - 8 Stunden" },
          { tag: "option", "cf-label": "8 - 10 Stunden", value: "8 - 10 Stunden" },
          { tag: "option", "cf-label": "10 - 12 Stunden", value: "10 - 12 Stunden" },
          { tag: "option", "cf-label": "12 - 16 Stunden", value: "12 - 16 Stunden" },
          { tag: "option", "cf-label": "16 - 20 Stunden", value: "16 - 20 Stunden" },
          { tag: "option", "cf-label": "20 - 24 Stunden", value: "20 - 24 Stunden" },
          { tag: "option", "cf-label": "Mehr als 24 Stunden", value: "Mehr als 24 Stunden" }
        ]
      },
      {
        tag: "select",
        name: "medikamentenbehandlung_4",
        "cf-questions": "Wer hat die Symptome behandelt?",
        "cf-conditional-medikamentenop_4": "Ja",
        "cf-input-placeholder": "",
        multiple: false,
        children: [
          { tag: "option", "cf-label": "Anästhesist", value: "Anaesthesist" },
          { tag: "option", "cf-label": "Stationsarzt", value: "Stationsarzt" },
          { tag: "option", "cf-label": "Keine Behandlung erfolgt", value: "Keine Behandlung erfolgt" },
          { tag: "option", "cf-label": "Weiß ich nicht mehr", value: "Weiß ich nicht mehr" }
        ]
      },
      {
        tag: "textarea",
        name: "medikamentenopnarkosemed_4",
        "cf-questions": "Die Frage bezieht sich auf die Reaktion mit {medikamentenname_4}&&Welche Medikamente wurden in und kurz vor der Narkose verwendet?&&Dies kann im Narkoseprotokoll nachgelesen werden. Das Narkoseprotokoll kann beim behandelnden Arzt oder Krankenhaus angefragt werden.",
        "cf-conditional-medikamentenop_4": "Ja",
        "cf-input-placeholder": "",
      }
    ])
  }
  }
}
 
 
var anzahlEreignisseFunktion = function (dto, success, error) {
  console.log("anzahlEreignisseCallback");
  anzahlEreignisse = parseInt(dto.text);
  stichhaeufigkeit = anzahlEreignisse < 5 ? anzahlEreignisse : 4;
 
  window.ConversationalForm.addTags([
    {
      tag: "select",
      name: "stichereignis_notfallset",
      "cf-questions": "Haben sie ein Notfallset?",
      "cf-input-placeholder": "",
      multiple: false,
      children: [
        { tag: "option", "cf-label": "Ja", value: "stichereignis_notfallset_ja" },
        { tag: "option", "cf-label": "Nein", value: "stichereignis_notfallset_nein" },
      ]
    },
    {
      tag: "textarea",
      name: "stichereignis_notfallset_details",
      "cf-questions": "Aus was besteht ihr Notfallset?",
      "cf-input-placeholder": "",
    },
    {
      tag: "textarea",
      name: "stichereignis_berufliches_stichrisiko",
      "cf-questions": "Haben sie beruflich oder durch bestimmte Hobbies eine erhöhte Gefahr für Insektenstiche?",
      "cf-input-placeholder": "Falls Ja: Welcher Beruf (z.B. Imker, Förster)?",
    },
  ]);
 
  for (i = stichhaeufigkeit; i >= 1; i--) {
    console.log("ereignis: " + i);
    if (i == 1) {
      window.ConversationalForm.addTags([
        {
          tag: "select",
          name: "stichereignis_1",
          "cf-questions": "Die folgenden Fragen beziehen sich auf Ihr 1. Stichereignis:&&Welches Insekt hat gestochen?",
          "cf-input-placeholder": "Stichereignis 1",
          multiple: false,
          children: [
            { tag: "option", "cf-label": "Biene", value: "stichereignis_1_biene" },
            { tag: "option", "cf-label": "Wespe", value: "stichereignis_1_wespe" },
            { tag: "option", "cf-label": "Ich bin mir nicht sicher/Kann mich nicht erinnern", value: "stichereignis_1_unsicher" },
            { tag: "option", "cf-label": "Hornisse", value: "stichereignis_1_hornisse" },
            { tag: "option", "cf-label": "Hummel", value: "stichereignis_1_hummel" },
            { tag: "option", "cf-label": "Sonstiges", value: "stichereignis_1_Sonstiges" },
          ]
        },
        {
            tag: "textarea",
            name: "stichereignis_sonstiges_1",
            "cf-questions": "Welches sonstige Insekt hat gestochen?",
            "cf-input-placeholder": "Stichereignis 1",
            "cf-conditional-stichereignis_1": "Sonstiges"
          },
        {
          tag: "select",
          name: "stichereignis_stachel_1",
          "cf-questions": "Ist bei diesem Stichereignis ein Stachel stecken geblieben?",
          "cf-input-placeholder": "Stichereignis 1",
          multiple: false,
          children: [
            { tag: "option", "cf-label": "Ja", value: "stichereignis_stachel_1_ja" },
            { tag: "option", "cf-label": "Nein", value: "stichereignis_stachel_1_nein" },
            { tag: "option", "cf-label": "Kann mich nicht erinnern / weiß ich nicht", value: "stichereignis_stachel_1_unsicher" },
          ]
        },
        {
          tag: "textarea",
          name: "stichereignis_umgebung_1",
          "cf-questions": "Bitte beschreiben sie die Situation in der Sie gestochen wurden so genau wie möglich. In welcher Umgebung waren sie? Welche Tätigkeit haben Sie gerade ausgeübt und wohin am Körper wurden sie dann gestochen?",
          "cf-input-placeholder": "Stichereignis 1",
        },
        {
          tag: "select",
          name: "stichereignis_umstaende_1",
          "cf-questions": "Haben Sie am Tag der Stichreaktion...",
          "cf-input-placeholder": "Stichereignis 1",
          multiple: true,
          children: [
            { tag: "option", "cf-label": "… Sport getrieben", value: "stichereignis_umstaende_1_sport" },
            { tag: "option", "cf-label": "… besonders viel Stress gehabt", value: "stichereignis_umstaende_1_stress" },
            { tag: "option", "cf-label": "… Alkohol getrunken", value: "stichereignis_umstaende_1_alkohol" },
            { tag: "option", "cf-label": "… eine Infektion (z.B. eine Erkältung) gehabt", value: "stichereignis_umstaende_1_infektion" },
            { tag: "option", "cf-label": "kann mich nicht erinnern / weiß ich nicht", value: "stichereignis_umstaende_1_unsicher" },
            { tag: "option", "cf-label": "Keines", value: "stichereignis_umstaende_1_keines" },
            { tag: "option", "cf-label": "Sonstiges", value: "stichereignis_umstaende_1_Sonstiges" },
          ]
        },
        {
            tag: "textarea",
            name: "stichereignis_umstaende_sonstiges_1",
            "cf-questions": "Was haben sie am Tag der Stichreaktion gemacht?",
            "cf-input-placeholder": "Stichereignis 1",
            "cf-conditional-stichereignis_umstaende_1": "Sonstiges"
          },
        {
          tag: "textarea",
          name: "stichereignis_koerperstelle_1",
          "cf-questions": "An welcher Körperstelle wurden sie gestochen?",
          "cf-input-placeholder": "z.B. Zeh,  Zunge oder Hals etc.",
        },
        {
          tag: "textarea",
          name: "stichereignis_danach_1",
          "cf-questions": "Wie lange hat es nach dem Stichereignis gedauert, bis es zu einer Reaktion kam, die über den Schmerz an der Einstichstelle und die Schwellung der Einstichstelle hinausging?",
          "cf-input-placeholder": "z.B. 1min, 10min, 5h",
        },
        {
          tag: "select",
          name: "stichereignis_reaktion_1",
          "cf-questions": "Welche der folgenden Symptome sind aufgetreten?",
          "cf-input-placeholder": "Stichereignis 1",
          multiple: true,
          children: [
            { tag: "option", "cf-label": "Hautjucken", value: "stichereignis_reaktion_1_hautjucken" },
            { tag: "option", "cf-label": "Gesichtsschwellung", value: "stichereignis_reaktion_1_Gesichtsschwellung" },
            { tag: "option", "cf-label": "Quaddeln/Nesseln", value: "stichereignis_reaktion_1_QuaddelnNesseln" },
            { tag: "option", "cf-label": "Hautrötung", value: "stichereignis_reaktion_1_Hautroetung" },
            { tag: "option", "cf-label": "Kloß-oder Engegefühl Hals", value: "stichereignis_reaktion_1_engegefuehl" },
            { tag: "option", "cf-label": "Augenrötung", value: "stichereignis_reaktion_1_Augenroetung" },
            { tag: "option", "cf-label": "Allergischer Schnupfen", value: "stichereignis_reaktion_1_AllergischerSchnupfen" },
            { tag: "option", "cf-label": "Hustenreiz", value: "stichereignis_reaktion_1_Hustenreiz" },
            { tag: "option", "cf-label": "Atemnot", value: "stichereignis_reaktion_1_Atemnot" },
            { tag: "option", "cf-label": "Übelkeit", value: "stichereignis_reaktion_1_Uebelkeit" },
            { tag: "option", "cf-label": "Erbrechen", value: "stichereignis_reaktion_1_Erbrechen" },
            { tag: "option", "cf-label": "Durchfall", value: "stichereignis_reaktion_1_Durchfall" },
            { tag: "option", "cf-label": "Bauchschmerzen/Krämpfe", value: "stichereignis_reaktion_1_BauchschmerzenKraempfe" },
            { tag: "option", "cf-label": "Hitzegefühl", value: "stichereignis_reaktion_1_Hitzegefuehl" },
            { tag: "option", "cf-label": "Herzrasen", value: "stichereignis_reaktion_1_Herzrasen" },
            { tag: "option", "cf-label": "Blutdruckabfall", value: "stichereignis_reaktion_1_Bewusstlosigkeit" },
            { tag: "option", "cf-label": "Schwindel", value: "stichereignis_reaktion_1_Schwindel" },
            { tag: "option", "cf-label": "Starke Angst", value: "stichereignis_reaktion_1_StarkeAngst" },
            { tag: "option", "cf-label": "Sonstige", value: "stichereignis_reaktion_1_Sonstige" },
          ]
        },
        {
            tag: "textarea",
            name: "stichereignis_reaktion_sonstiges_1",
            "cf-questions": "Welche sonstigen Symptome sind aufgetreten?",
            "cf-input-placeholder": "Stichereignis 1",
            "cf-conditional-stichereignis_reaktion_1": "Sonstige"
          },
        {
          tag: "select",
          name: "stichereignis_behandelnd_1",
          "cf-questions": "Wurden Sie nach dem Stich von einem Arzt behandelt oder haben sie selbst Medikamente eingenommen?",
          "cf-input-placeholder": "Stichereignis 1",
          multiple: true,
          children: [
            { tag: "option", "cf-label": "Ich habe selbst Maßnahmen ergriffen", value: "stichereignis_behandelnd_1_eigeneMassnahmen" },
            { tag: "option", "cf-label": "Ich wurde von einem Arzt/Sanitäter behandelt", value: "stichereignis_behandelnd_1_ArztSanitäter" },
            { tag: "option", "cf-label": "Ich wurde während des anschließenden Klinikaufenthalts behandelt", value: "stichereignis_behandelnd_1_Klinikaufenthalt" },
            { tag: "option", "cf-label": "Ich wurde auf der Intensivstation behandelt", value: "stichereignis_behandelnd_1_Intensivstation" },
          ]
        },
        {
          tag: "textarea",
          name: "stichereignis_behandelt_selbst_1",
          "cf-questions": "Welche Maßnahmen haben sie slebst ergriffen?",
          "cf-input-placeholder": "Stichereignis 1",
          "cf-conditional-stichereignis_behandelnd_1": "Ich habe selbst Maßnahmen ergriffen"
        },
        {
          tag: "select",
          name: "stichereignis_bis_therapie_1",
          "cf-questions": "Wie viel Zeit verging nach erstem Auftreten von Symptomen und erster Therapie?",
          "cf-input-placeholder": "Stichereignis 1",
          children: [
            { tag: "option", "cf-label": "1 Minute", value: "1 Minute" },
              { tag: "option", "cf-label": "5 Minuten", value: "5 Minuten" },
              { tag: "option", "cf-label": "15 Minuten", value: "15 Minuten" },
              { tag: "option", "cf-label": "30 Minuten", value: "30 Minuten" },
              { tag: "option", "cf-label": "1 Stunde", value: "1 Stunde" },
              { tag: "option", "cf-label": "6 Stunden", value: "6 Stunden" },
              { tag: "option", "cf-label": "24 Stunden", value: "24 Stunden" },
              { tag: "option", "cf-label": "Mehr als 24 Stunden", value: "Mehr als 24 Stunden" },
          ]
        },
        {
          tag: "select",
          name: "stichereignis_hilfreich_1",
          "cf-questions": "War die Therapie hilfreich?",
          "cf-input-placeholder": "Stichereignis 1",
          multiple: true,
          children: [
            { tag: "option", "cf-label": "Ja, es ging mir schnell besser.", value: "stichereignis_hilfreich_1_schnellBesser" },
            { tag: "option", "cf-label": "Nein, die Symptome sind kaum/gar nicht zurückgegangen.", value: "stichereignis_hilfreich_1_keineBesserung" },
          ]
        },
        {
          tag: "textarea",
          name: "stichereignis_vorher_1",
          "cf-questions": "Wie haben sie Insektenstiche vor der eben beschriebenen allergischen Reaktion vertragen?",
          "cf-input-placeholder": "",
        },
      ]);
    }
    if (i == 2) {
      window.ConversationalForm.addTags([
        {
          tag: "select",
          name: "stichereignis_2",
          "cf-questions": "Die folgenden Fragen beziehen sich auf Ihr 2. Stichereignis:&&Welches Insekt hat gestochen?",
          "cf-input-placeholder": "Stichereignis 2",
          multiple: false,
          children: [
            { tag: "option", "cf-label": "Biene", value: "stichereignis_2_biene" },
            { tag: "option", "cf-label": "Wespe", value: "stichereignis_2_wespe" },
            { tag: "option", "cf-label": "Ich bin mir nicht sicher/Kann mich nicht erinnern", value: "stichereignis_2_unsicher" },
            { tag: "option", "cf-label": "Hornisse", value: "stichereignis_2_hornisse" },
            { tag: "option", "cf-label": "Hummel", value: "stichereignis_2_hummel" },
            { tag: "option", "cf-label": "Sonstiges", value: "stichereignis_2_Sonstiges" },
          ]
        },
        {
            tag: "textarea",
            name: "stichereignis_sonstiges_2",
            "cf-questions": "Welches sonstige Insekt hat gestochen?",
            "cf-input-placeholder": "Stichereignis 2",
            "cf-conditional-stichereignis_2": "Sonstiges"
          },
        {
          tag: "select",
          name: "stichereignis_stachel_2",
          "cf-questions": "Ist bei diesem Stichereignis ein Stachel stecken geblieben?",
          "cf-input-placeholder": "Stichereignis 2",
          multiple: false,
          children: [
            { tag: "option", "cf-label": "Ja", value: "stichereignis_stachel_2_ja" },
            { tag: "option", "cf-label": "Nein", value: "stichereignis_stachel_2_nein" },
            { tag: "option", "cf-label": "Kann mich nicht erinnern / weiß ich nicht", value: "stichereignis_stachel_2_unsicher" },
          ]
        },
        {
          tag: "textarea",
          name: "stichereignis_umgebung_2",
          "cf-questions": "Bitte beschreiben sie die Situation in der Sie gestochen wurden so genau wie möglich. In welcher Umgebung waren sie? Welche Tätigkeit haben Sie gerade ausgeübt und wohin am Körper wurden sie dann gestochen?",
          "cf-input-placeholder": "Stichereignis 2",
        },
        {
          tag: "select",
          name: "stichereignis_umstaende_2",
          "cf-questions": "Haben Sie am Tag der Stichreaktion...",
          "cf-input-placeholder": "Stichereignis 2",
          multiple: true,
          children: [
            { tag: "option", "cf-label": "… Sport getrieben", value: "stichereignis_umstaende_2_sport" },
            { tag: "option", "cf-label": "… besonders viel Stress gehabt", value: "stichereignis_umstaende_2_stress" },
            { tag: "option", "cf-label": "… Alkohol getrunken", value: "stichereignis_umstaende_2_alkohol" },
            { tag: "option", "cf-label": "… eine Infektion (z.B. eine Erkältung) gehabt", value: "stichereignis_umstaende_2_infektion" },
            { tag: "option", "cf-label": "kann mich nicht erinnern / weiß ich nicht", value: "stichereignis_umstaende_2_unsicher" },
            { tag: "option", "cf-label": "Keines", value: "stichereignis_umstaende_2_keines" },
            { tag: "option", "cf-label": "Sonstiges", value: "stichereignis_umstaende_2_Sonstiges" },
          ]
        },
        {
            tag: "textarea",
            name: "stichereignis_umstaende_sonstiges_2",
            "cf-questions": "Was haben sie am Tag der Stichreaktion gemacht?",
            "cf-input-placeholder": "Stichereignis 2",
            "cf-conditional-stichereignis_umstaende_2": "Sonstiges"
          },
        {
          tag: "textarea",
          name: "stichereignis_koerperstelle_2",
          "cf-questions": "An welcher Körperstelle wurden sie gestochen?",
          "cf-input-placeholder": "z.B. Zeh,  Zunge oder Hals etc.",
        },
        {
          tag: "textarea",
          name: "stichereignis_danach_2",
          "cf-questions": "Wie lange hat es nach dem Stichereignis gedauert, bis es zu einer Reaktion kam, die über den Schmerz an der Einstichstelle und die Schwellung der Einstichstelle hinausging?",
          "cf-input-placeholder": "z.B. 1min, 10min, 5h",
        },
        {
          tag: "select",
          name: "stichereignis_reaktion_2",
          "cf-questions": "Welche der folgenden Symptome sind aufgetreten?",
          "cf-input-placeholder": "Stichereignis 2",
          multiple: true,
          children: [
            { tag: "option", "cf-label": "Hautjucken", value: "stichereignis_reaktion_2_hautjucken" },
            { tag: "option", "cf-label": "Gesichtsschwellung", value: "stichereignis_reaktion_2_Gesichtsschwellung" },
            { tag: "option", "cf-label": "Quaddeln/Nesseln", value: "stichereignis_reaktion_2_QuaddelnNesseln" },
            { tag: "option", "cf-label": "Hautrötung", value: "stichereignis_reaktion_2_Hautroetung" },
            { tag: "option", "cf-label": "Kloß-oder Engegefühl Hals", value: "stichereignis_reaktion_2_engegefuehl" },
            { tag: "option", "cf-label": "Augenrötung", value: "stichereignis_reaktion_2_Augenroetung" },
            { tag: "option", "cf-label": "Allergischer Schnupfen", value: "stichereignis_reaktion_2_AllergischerSchnupfen" },
            { tag: "option", "cf-label": "Hustenreiz", value: "stichereignis_reaktion_2_Hustenreiz" },
            { tag: "option", "cf-label": "Atemnot", value: "stichereignis_reaktion_2_Atemnot" },
            { tag: "option", "cf-label": "Übelkeit", value: "stichereignis_reaktion_2_Uebelkeit" },
            { tag: "option", "cf-label": "Erbrechen", value: "stichereignis_reaktion_2_Erbrechen" },
            { tag: "option", "cf-label": "Durchfall", value: "stichereignis_reaktion_2_Durchfall" },
            { tag: "option", "cf-label": "Bauchschmerzen/Krämpfe", value: "stichereignis_reaktion_2_BauchschmerzenKraempfe" },
            { tag: "option", "cf-label": "Hitzegefühl", value: "stichereignis_reaktion_2_Hitzegefuehl" },
            { tag: "option", "cf-label": "Herzrasen", value: "stichereignis_reaktion_2_Herzrasen" },
            { tag: "option", "cf-label": "Blutdruckabfall", value: "stichereignis_reaktion_2_Bewusstlosigkeit" },
            { tag: "option", "cf-label": "Schwindel", value: "stichereignis_reaktion_2_Schwindel" },
            { tag: "option", "cf-label": "Starke Angst", value: "stichereignis_reaktion_2_StarkeAngst" },
            { tag: "option", "cf-label": "Sonstige", value: "stichereignis_reaktion_2_Sonstige" },
          ]
        },
        {
            tag: "textarea",
            name: "stichereignis_reaktion_sonstiges_2",
            "cf-questions": "Welche sonstigen Symptome sind aufgetreten?",
            "cf-input-placeholder": "Stichereignis 2",
            "cf-conditional-stichereignis_reaktion_2": "Sonstige"
          },
        {
          tag: "select",
          name: "stichereignis_behandelnd_2",
          "cf-questions": "Wurden Sie nach dem Stich von einem Arzt behandelt oder haben sie selbst Medikamente eingenommen?",
          "cf-input-placeholder": "Stichereignis 2",
          multiple: true,
          children: [
            { tag: "option", "cf-label": "Ich habe selbst Maßnahmen ergriffen", value: "stichereignis_behandelnd_2_eigeneMassnahmen" },
            { tag: "option", "cf-label": "Ich wurde von einem Arzt/Sanitäter behandelt", value: "stichereignis_behandelnd_2_ArztSanitäter" },
            { tag: "option", "cf-label": "Ich wurde während des anschließenden Klinikaufenthalts behandelt", value: "stichereignis_behandelnd_2_Klinikaufenthalt" },
            { tag: "option", "cf-label": "Ich wurde auf der Intensivstation behandelt", value: "stichereignis_behandelnd_2_Intensivstation" },
          ]
        },
        {
          tag: "textarea",
          name: "stichereignis_behandelt_selbst_2",
          "cf-questions": "Welche Maßnahmen haben sie slebst ergriffen?",
          "cf-input-placeholder": "Stichereignis 2",
          "cf-conditional-stichereignis_behandelnd_2": "Ich habe selbst Maßnahmen ergriffen"
        },
        {
          tag: "select",
          name: "stichereignis_bis_therapie_2",
          "cf-questions": "Wie viel Zeit verging nach erstem Auftreten von Symptomen und erster Therapie?",
          "cf-input-placeholder": "Stichereignis 2",
          children: [
            { tag: "option", "cf-label": "1 Minute", value: "1 Minute" },
              { tag: "option", "cf-label": "5 Minuten", value: "5 Minuten" },
              { tag: "option", "cf-label": "15 Minuten", value: "15 Minuten" },
              { tag: "option", "cf-label": "30 Minuten", value: "30 Minuten" },
              { tag: "option", "cf-label": "1 Stunde", value: "1 Stunde" },
              { tag: "option", "cf-label": "6 Stunden", value: "6 Stunden" },
              { tag: "option", "cf-label": "24 Stunden", value: "24 Stunden" },
              { tag: "option", "cf-label": "Mehr als 24 Stunden", value: "Mehr als 24 Stunden" },
          ]
        },
        {
          tag: "select",
          name: "stichereignis_hilfreich_2",
          "cf-questions": "War die Therapie hilfreich?",
          "cf-input-placeholder": "Stichereignis 2",
          multiple: true,
          children: [
            { tag: "option", "cf-label": "Ja, es ging mir schnell besser.", value: "stichereignis_hilfreich_2_schnellBesser" },
            { tag: "option", "cf-label": "Nein, die Symptome sind kaum/gar nicht zurückgegangen.", value: "stichereignis_hilfreich_2_keineBesserung" },
          ]
        },
        {
          tag: "textarea",
          name: "stichereignis_vorher_2",
          "cf-questions": "Wie haben sie Insektenstiche vor der eben beschriebenen allergischen Reaktion vertragen?",
          "cf-input-placeholder": "",
        },
      ]);
    }
    
    if (i == 3) {
      window.ConversationalForm.addTags([
        {
          tag: "select",
          name: "stichereignis_3",
          "cf-questions": "Die folgenden Fragen beziehen sich auf Ihr 3. Stichereignis:&&Welches Insekt hat gestochen?",
          "cf-input-placeholder": "Stichereignis 3",
          multiple: false,
          children: [
            { tag: "option", "cf-label": "Biene", value: "stichereignis_3_biene" },
            { tag: "option", "cf-label": "Wespe", value: "stichereignis_3_wespe" },
            { tag: "option", "cf-label": "Ich bin mir nicht sicher/Kann mich nicht erinnern", value: "stichereignis_3_unsicher" },
            { tag: "option", "cf-label": "Hornisse", value: "stichereignis_3_hornisse" },
            { tag: "option", "cf-label": "Hummel", value: "stichereignis_3_hummel" },
            { tag: "option", "cf-label": "Sonstiges", value: "stichereignis_3_Sonstiges" },
          ]
        },
        {
            tag: "textarea",
            name: "stichereignis_sonstiges_3",
            "cf-questions": "Welches sonstige Insekt hat gestochen?",
            "cf-input-placeholder": "Stichereignis 3",
            "cf-conditional-stichereignis_3": "Sonstiges"
          },
        {
          tag: "select",
          name: "stichereignis_stachel_3",
          "cf-questions": "Ist bei diesem Stichereignis ein Stachel stecken geblieben?",
          "cf-input-placeholder": "Stichereignis 3",
          multiple: false,
          children: [
            { tag: "option", "cf-label": "Ja", value: "stichereignis_stachel_3_ja" },
            { tag: "option", "cf-label": "Nein", value: "stichereignis_stachel_3_nein" },
            { tag: "option", "cf-label": "Kann mich nicht erinnern / weiß ich nicht", value: "stichereignis_stachel_3_unsicher" },
          ]
        },
        {
          tag: "textarea",
          name: "stichereignis_umgebung_3",
          "cf-questions": "Bitte beschreiben sie die Situation in der Sie gestochen wurden so genau wie möglich. In welcher Umgebung waren sie? Welche Tätigkeit haben Sie gerade ausgeübt und wohin am Körper wurden sie dann gestochen?",
          "cf-input-placeholder": "Stichereignis 3",
        },
        {
          tag: "select",
          name: "stichereignis_umstaende_3",
          "cf-questions": "Haben Sie am Tag der Stichreaktion...",
          "cf-input-placeholder": "Stichereignis 3",
          multiple: true,
          children: [
            { tag: "option", "cf-label": "… Sport getrieben", value: "stichereignis_umstaende_3_sport" },
            { tag: "option", "cf-label": "… besonders viel Stress gehabt", value: "stichereignis_umstaende_3_stress" },
            { tag: "option", "cf-label": "… Alkohol getrunken", value: "stichereignis_umstaende_3_alkohol" },
            { tag: "option", "cf-label": "… eine Infektion (z.B. eine Erkältung) gehabt", value: "stichereignis_umstaende_3_infektion" },
            { tag: "option", "cf-label": "kann mich nicht erinnern / weiß ich nicht", value: "stichereignis_umstaende_3_unsicher" },
            { tag: "option", "cf-label": "Keines", value: "stichereignis_umstaende_3_keines" },
            { tag: "option", "cf-label": "Sonstiges", value: "stichereignis_umstaende_3_Sonstiges" },
          ]
        },
        {
            tag: "textarea",
            name: "stichereignis_umstaende_sonstiges_3",
            "cf-questions": "Was haben sie am Tag der Stichreaktion gemacht?",
            "cf-input-placeholder": "Stichereignis 3",
            "cf-conditional-stichereignis_umstaende_3": "Sonstiges"
          },
        {
          tag: "textarea",
          name: "stichereignis_koerperstelle_3",
          "cf-questions": "An welcher Körperstelle wurden sie gestochen?",
          "cf-input-placeholder": "z.B. Zeh,  Zunge oder Hals etc.",
        },
        {
          tag: "textarea",
          name: "stichereignis_danach_3",
          "cf-questions": "Wie lange hat es nach dem Stichereignis gedauert, bis es zu einer Reaktion kam, die über den Schmerz an der Einstichstelle und die Schwellung der Einstichstelle hinausging?",
          "cf-input-placeholder": "z.B. 1min, 10min, 5h",
        },
        {
          tag: "select",
          name: "stichereignis_reaktion_3",
          "cf-questions": "Welche der folgenden Symptome sind aufgetreten?",
          "cf-input-placeholder": "Stichereignis 3",
          multiple: true,
          children: [
            { tag: "option", "cf-label": "Hautjucken", value: "stichereignis_reaktion_3_hautjucken" },
            { tag: "option", "cf-label": "Gesichtsschwellung", value: "stichereignis_reaktion_3_Gesichtsschwellung" },
            { tag: "option", "cf-label": "Quaddeln/Nesseln", value: "stichereignis_reaktion_3_QuaddelnNesseln" },
            { tag: "option", "cf-label": "Hautrötung", value: "stichereignis_reaktion_3_Hautroetung" },
            { tag: "option", "cf-label": "Kloß-oder Engegefühl Hals", value: "stichereignis_reaktion_3_engegefuehl" },
            { tag: "option", "cf-label": "Augenrötung", value: "stichereignis_reaktion_3_Augenroetung" },
            { tag: "option", "cf-label": "Allergischer Schnupfen", value: "stichereignis_reaktion_3_AllergischerSchnupfen" },
            { tag: "option", "cf-label": "Hustenreiz", value: "stichereignis_reaktion_3_Hustenreiz" },
            { tag: "option", "cf-label": "Atemnot", value: "stichereignis_reaktion_3_Atemnot" },
            { tag: "option", "cf-label": "Übelkeit", value: "stichereignis_reaktion_3_Uebelkeit" },
            { tag: "option", "cf-label": "Erbrechen", value: "stichereignis_reaktion_3_Erbrechen" },
            { tag: "option", "cf-label": "Durchfall", value: "stichereignis_reaktion_3_Durchfall" },
            { tag: "option", "cf-label": "Bauchschmerzen/Krämpfe", value: "stichereignis_reaktion_3_BauchschmerzenKraempfe" },
            { tag: "option", "cf-label": "Hitzegefühl", value: "stichereignis_reaktion_3_Hitzegefuehl" },
            { tag: "option", "cf-label": "Herzrasen", value: "stichereignis_reaktion_3_Herzrasen" },
            { tag: "option", "cf-label": "Blutdruckabfall", value: "stichereignis_reaktion_3_Bewusstlosigkeit" },
            { tag: "option", "cf-label": "Schwindel", value: "stichereignis_reaktion_3_Schwindel" },
            { tag: "option", "cf-label": "Starke Angst", value: "stichereignis_reaktion_3_StarkeAngst" },
            { tag: "option", "cf-label": "Sonstige", value: "stichereignis_reaktion_3_Sonstige" },
          ]
        },
        {
            tag: "textarea",
            name: "stichereignis_reaktion_sonstiges_3",
            "cf-questions": "Welche sonstigen Symptome sind aufgetreten?",
            "cf-input-placeholder": "Stichereignis 3",
            "cf-conditional-stichereignis_reaktion_3": "Sonstige"
          },
        {
          tag: "select",
          name: "stichereignis_behandelnd_3",
          "cf-questions": "Wurden Sie nach dem Stich von einem Arzt behandelt oder haben sie selbst Medikamente eingenommen?",
          "cf-input-placeholder": "Stichereignis 3",
          multiple: true,
          children: [
            { tag: "option", "cf-label": "Ich habe selbst Maßnahmen ergriffen", value: "stichereignis_behandelnd_3_eigeneMassnahmen" },
            { tag: "option", "cf-label": "Ich wurde von einem Arzt/Sanitäter behandelt", value: "stichereignis_behandelnd_3_ArztSanitäter" },
            { tag: "option", "cf-label": "Ich wurde während des anschließenden Klinikaufenthalts behandelt", value: "stichereignis_behandelnd_3_Klinikaufenthalt" },
            { tag: "option", "cf-label": "Ich wurde auf der Intensivstation behandelt", value: "stichereignis_behandelnd_3_Intensivstation" },
          ]
        },
        {
          tag: "textarea",
          name: "stichereignis_behandelt_selbst_3",
          "cf-questions": "Welche Maßnahmen haben sie slebst ergriffen?",
          "cf-input-placeholder": "Stichereignis 3",
          "cf-conditional-stichereignis_behandelnd_3": "Ich habe selbst Maßnahmen ergriffen"
        },
        {
          tag: "select",
          name: "stichereignis_bis_therapie_3",
          "cf-questions": "Wie viel Zeit verging nach erstem Auftreten von Symptomen und erster Therapie?",
          "cf-input-placeholder": "Stichereignis 3",
          children: [
            { tag: "option", "cf-label": "1 Minute", value: "1 Minute" },
              { tag: "option", "cf-label": "5 Minuten", value: "5 Minuten" },
              { tag: "option", "cf-label": "15 Minuten", value: "15 Minuten" },
              { tag: "option", "cf-label": "30 Minuten", value: "30 Minuten" },
              { tag: "option", "cf-label": "1 Stunde", value: "1 Stunde" },
              { tag: "option", "cf-label": "6 Stunden", value: "6 Stunden" },
              { tag: "option", "cf-label": "24 Stunden", value: "24 Stunden" },
              { tag: "option", "cf-label": "Mehr als 24 Stunden", value: "Mehr als 24 Stunden" },
          ]
        },
        {
          tag: "select",
          name: "stichereignis_hilfreich_3",
          "cf-questions": "War die Therapie hilfreich?",
          "cf-input-placeholder": "Stichereignis 3",
          multiple: true,
          children: [
            { tag: "option", "cf-label": "Ja, es ging mir schnell besser.", value: "stichereignis_hilfreich_3_schnellBesser" },
            { tag: "option", "cf-label": "Nein, die Symptome sind kaum/gar nicht zurückgegangen.", value: "stichereignis_hilfreich_3_keineBesserung" },
          ]
        },
        {
          tag: "textarea",
          name: "stichereignis_vorher_3",
          "cf-questions": "Wie haben sie Insektenstiche vor der eben beschriebenen allergischen Reaktion vertragen?",
          "cf-input-placeholder": "",
        },
      ]);
    }
    
    if (i == 4) {
      window.ConversationalForm.addTags([
        {
          tag: "select",
          name: "stichereignis_4",
          "cf-questions": "Die folgenden Fragen beziehen sich auf Ihr 4. Stichereignis:&&Welches Insekt hat gestochen?",
          "cf-input-placeholder": "Stichereignis 4",
          multiple: false,
          children: [
            { tag: "option", "cf-label": "Biene", value: "stichereignis_4_biene" },
            { tag: "option", "cf-label": "Wespe", value: "stichereignis_4_wespe" },
            { tag: "option", "cf-label": "Ich bin mir nicht sicher/Kann mich nicht erinnern", value: "stichereignis_4_unsicher" },
            { tag: "option", "cf-label": "Hornisse", value: "stichereignis_4_hornisse" },
            { tag: "option", "cf-label": "Hummel", value: "stichereignis_4_hummel" },
            { tag: "option", "cf-label": "Sonstiges", value: "stichereignis_4_Sonstiges" },
          ]
        },
        {
            tag: "textarea",
            name: "stichereignis_sonstiges_4",
            "cf-questions": "Welches sonstige Insekt hat gestochen?",
            "cf-input-placeholder": "Stichereignis 4",
            "cf-conditional-stichereignis_4": "Sonstiges"
          },
        {
          tag: "select",
          name: "stichereignis_stachel_4",
          "cf-questions": "Ist bei diesem Stichereignis ein Stachel stecken geblieben?",
          "cf-input-placeholder": "Stichereignis 4",
          multiple: false,
          children: [
            { tag: "option", "cf-label": "Ja", value: "stichereignis_stachel_4_ja" },
            { tag: "option", "cf-label": "Nein", value: "stichereignis_stachel_4_nein" },
            { tag: "option", "cf-label": "Kann mich nicht erinnern / weiß ich nicht", value: "stichereignis_stachel_4_unsicher" },
          ]
        },
        {
          tag: "textarea",
          name: "stichereignis_umgebung_4",
          "cf-questions": "Bitte beschreiben sie die Situation in der Sie gestochen wurden so genau wie möglich. In welcher Umgebung waren sie? Welche Tätigkeit haben Sie gerade ausgeübt und wohin am Körper wurden sie dann gestochen?",
          "cf-input-placeholder": "Stichereignis 4",
        },
        {
          tag: "select",
          name: "stichereignis_umstaende_4",
          "cf-questions": "Haben Sie am Tag der Stichreaktion...",
          "cf-input-placeholder": "Stichereignis 4",
          multiple: true,
          children: [
            { tag: "option", "cf-label": "… Sport getrieben", value: "stichereignis_umstaende_4_sport" },
            { tag: "option", "cf-label": "… besonders viel Stress gehabt", value: "stichereignis_umstaende_4_stress" },
            { tag: "option", "cf-label": "… Alkohol getrunken", value: "stichereignis_umstaende_4_alkohol" },
            { tag: "option", "cf-label": "… eine Infektion (z.B. eine Erkältung) gehabt", value: "stichereignis_umstaende_4_infektion" },
            { tag: "option", "cf-label": "kann mich nicht erinnern / weiß ich nicht", value: "stichereignis_umstaende_4_unsicher" },
            { tag: "option", "cf-label": "Keines", value: "stichereignis_umstaende_4_keines" },
            { tag: "option", "cf-label": "Sonstiges", value: "stichereignis_umstaende_4_Sonstiges" },
          ]
        },
        {
            tag: "textarea",
            name: "stichereignis_umstaende_sonstiges_4",
            "cf-questions": "Was haben sie am Tag der Stichreaktion gemacht?",
            "cf-input-placeholder": "Stichereignis 4",
            "cf-conditional-stichereignis_umstaende_4": "Sonstiges"
          },
        {
          tag: "textarea",
          name: "stichereignis_koerperstelle_4",
          "cf-questions": "An welcher Körperstelle wurden sie gestochen?",
          "cf-input-placeholder": "z.B. Zeh,  Zunge oder Hals etc.",
        },
        {
          tag: "textarea",
          name: "stichereignis_danach_4",
          "cf-questions": "Wie lange hat es nach dem Stichereignis gedauert, bis es zu einer Reaktion kam, die über den Schmerz an der Einstichstelle und die Schwellung der Einstichstelle hinausging?",
          "cf-input-placeholder": "z.B. 1min, 10min, 5h",
        },
        {
          tag: "select",
          name: "stichereignis_reaktion_4",
          "cf-questions": "Welche der folgenden Symptome sind aufgetreten?",
          "cf-input-placeholder": "Stichereignis 4",
          multiple: true,
          children: [
            { tag: "option", "cf-label": "Hautjucken", value: "stichereignis_reaktion_4_hautjucken" },
            { tag: "option", "cf-label": "Gesichtsschwellung", value: "stichereignis_reaktion_4_Gesichtsschwellung" },
            { tag: "option", "cf-label": "Quaddeln/Nesseln", value: "stichereignis_reaktion_4_QuaddelnNesseln" },
            { tag: "option", "cf-label": "Hautrötung", value: "stichereignis_reaktion_4_Hautroetung" },
            { tag: "option", "cf-label": "Kloß-oder Engegefühl Hals", value: "stichereignis_reaktion_4_engegefuehl" },
            { tag: "option", "cf-label": "Augenrötung", value: "stichereignis_reaktion_4_Augenroetung" },
            { tag: "option", "cf-label": "Allergischer Schnupfen", value: "stichereignis_reaktion_4_AllergischerSchnupfen" },
            { tag: "option", "cf-label": "Hustenreiz", value: "stichereignis_reaktion_4_Hustenreiz" },
            { tag: "option", "cf-label": "Atemnot", value: "stichereignis_reaktion_4_Atemnot" },
            { tag: "option", "cf-label": "Übelkeit", value: "stichereignis_reaktion_4_Uebelkeit" },
            { tag: "option", "cf-label": "Erbrechen", value: "stichereignis_reaktion_4_Erbrechen" },
            { tag: "option", "cf-label": "Durchfall", value: "stichereignis_reaktion_4_Durchfall" },
            { tag: "option", "cf-label": "Bauchschmerzen/Krämpfe", value: "stichereignis_reaktion_4_BauchschmerzenKraempfe" },
            { tag: "option", "cf-label": "Hitzegefühl", value: "stichereignis_reaktion_4_Hitzegefuehl" },
            { tag: "option", "cf-label": "Herzrasen", value: "stichereignis_reaktion_4_Herzrasen" },
            { tag: "option", "cf-label": "Blutdruckabfall", value: "stichereignis_reaktion_4_Bewusstlosigkeit" },
            { tag: "option", "cf-label": "Schwindel", value: "stichereignis_reaktion_4_Schwindel" },
            { tag: "option", "cf-label": "Starke Angst", value: "stichereignis_reaktion_4_StarkeAngst" },
            { tag: "option", "cf-label": "Sonstige", value: "stichereignis_reaktion_4_Sonstige" },
          ]
        },
        {
            tag: "textarea",
            name: "stichereignis_reaktion_sonstiges_4",
            "cf-questions": "Welche sonstigen Symptome sind aufgetreten?",
            "cf-input-placeholder": "Stichereignis 4",
            "cf-conditional-stichereignis_reaktion_4": "Sonstige"
          },
        {
          tag: "select",
          name: "stichereignis_behandelnd_4",
          "cf-questions": "Wurden Sie nach dem Stich von einem Arzt behandelt oder haben sie selbst Medikamente eingenommen?",
          "cf-input-placeholder": "Stichereignis 4",
          multiple: true,
          children: [
            { tag: "option", "cf-label": "Ich habe selbst Maßnahmen ergriffen", value: "Ich habe selbst Maßnahmen ergriffen"},
            { tag: "option", "cf-label": "Ich wurde von einem Arzt/Sanitäter behandelt", value: "stichereignis_behandelnd_4_ArztSanitäter" },
            { tag: "option", "cf-label": "Ich wurde während des anschließenden Klinikaufenthalts behandelt", value: "stichereignis_behandelnd_4_Klinikaufenthalt" },
            { tag: "option", "cf-label": "Ich wurde auf der Intensivstation behandelt", value: "stichereignis_behandelnd_4_Intensivstation" },
          ]
        },
        {
          tag: "textarea",
          name: "stichereignis_behandelt_selbst_4",
          "cf-questions": "Welche Maßnahmen haben sie slebst ergriffen?",
          "cf-input-placeholder": "Stichereignis 4",
          "cf-conditional-stichereignis_behandelnd_4": "Ich habe selbst Maßnahmen ergriffen"
        },
        {
          tag: "select",
          name: "stichereignis_bis_therapie_4",
          "cf-questions": "Wie viel Zeit verging nach erstem Auftreten von Symptomen und erster Therapie?",
          "cf-input-placeholder": "Stichereignis 4",
          children: [
            { tag: "option", "cf-label": "1 Minute", value: "1 Minute" },
              { tag: "option", "cf-label": "5 Minuten", value: "5 Minuten" },
              { tag: "option", "cf-label": "15 Minuten", value: "15 Minuten" },
              { tag: "option", "cf-label": "30 Minuten", value: "30 Minuten" },
              { tag: "option", "cf-label": "1 Stunde", value: "1 Stunde" },
              { tag: "option", "cf-label": "6 Stunden", value: "6 Stunden" },
              { tag: "option", "cf-label": "24 Stunden", value: "24 Stunden" },
              { tag: "option", "cf-label": "Mehr als 24 Stunden", value: "Mehr als 24 Stunden" },
          ]
        },
        {
          tag: "select",
          name: "stichereignis_hilfreich_4",
          "cf-questions": "War die Therapie hilfreich?",
          "cf-input-placeholder": "Stichereignis 4",
          multiple: true,
          children: [
            { tag: "option", "cf-label": "Ja, es ging mir schnell besser.", value: "stichereignis_hilfreich_4_schnellBesser" },
            { tag: "option", "cf-label": "Nein, die Symptome sind kaum/gar nicht zurückgegangen.", value: "stichereignis_hilfreich_4_keineBesserung" },
          ]
        },
        {
          tag: "textarea",
          name: "stichereignis_vorher_4",
          "cf-questions": "Wie haben sie Insektenstiche vor der eben beschriebenen allergischen Reaktion vertragen?",
          "cf-input-placeholder": "",
        },
      ]);
    }
  if (anzahlEreignisse > 4) {
    window.ConversationalForm.addTags([
      {
        tag: "select",
        name: "anzahlereignisse",
        "cf-questions": "Sie haben angegeben, " + anzahlEreignisse + " Stichereignisse erlebt zu haben. Da es sich dabei um sehr viele Ereignisse handelt, werden wir im Folgenden nur für vier dieser Stichereignisse weitere Einzelheiten abfragen. Wählen Sie hierfür vier Stichereignisse aus, an die Sie sich möglichst gut erinnern oder die Sie für besonders relevant erachten.",
        children: [
          { tag: "option", "cf-label": "OK", value: "anzahlEreignisse_" + anzahlEreignisse + "_ok" },
        ]
      },
    ]);
  }
}
}

var conversationalForm;
window.incrementedValue = 0;
window.onload = function () {
  conversationalForm = window.cf.ConversationalForm.startTheConversation({
    formEl: document.getElementById("form"),
    context: document.getElementById("cf-context"),
    flowStepCallback: flowCallback,
    robotImage: "https://kap.jonh.eu/favicon.ico",
    submitCallback: function() {
      conversationalForm.addRobotChatResponse("Sie sind fertig. Vielen Dank.");
      eingabenAbspeichern();
      dialog();
    },
    showProgressBar: true,
    dictionaryData: {
      "entry-not-found": "Wörterbuchschlüssel wird nicht gefunden.",
      "input-placeholder": "Geben Sie hier Ihre Antwort ein ...",
      "input-placeholder-required": "Eingabe ungültig ...",
      "input-placeholder-error": "Ihre Eingabe ist nicht korrekt ...",
      "input-placeholder-file-error": "Datei-Upload fehlgeschlagen ...",
      "input-placeholder-file-size-error": "Dateigröße zu groß ...",
      "input-no-filter": "Keine Ergebnisse für {input-value}",
      "user-reponse-and": " und ",
      "user-reponse-missing": "Fehlende Eingabe ...",
      "general": "Allgemeiner Typ1|Allgemeiner Typ2"
    },// empty will throw error
    dictionaryRobot: {
      "text": "Bitte schreiben Sie etwas Text.",
      "input": "Bitte schreiben Sie etwas Text.",
      "name": "Wie heißen Sie?",
      "email": "Brauchen Sie Ihre E-Mail.",
      "password": "Bitte geben Sie das Passwort ein",
      "tel": "Wie ist deine Telefonnummer?",
      "radio": "Wählen Sie bitte eine der folgenden Möglichkeiten.",
      "checkbox": "Wählen Sie bitte eine oder mehrere der folgenden Möglichkeiten.&&Bestätigen Sie Ihre Eingabe durch die Enter-Taste.",
      "select": "Wählen Sie eine dieser Optionen.",
      "general": "Allgemeines1|Allgemeines2|Allgemeines3.."
    }
  });
};

function dialog() {
  Swal.fire({
    title: 'Vielen Dank',
    html: '<p>Sie haben den Fragebogen erfolgreich ausgefüllt.' +
        '<br>Laden Sie nun bitte die Datei in den Dataroom hoch. Anschließend können Sie dieses Fenster schließen.<br><br>' +
        '<strong>Bringen Sie bitte zu Ihrem Termin alle relevanten Dokumente mit, dazu gehören unter Anderem Arztbriefe und Ergebnisse von vorherigen Epikutantests. Bei Lebensmittelallergie bitte auch eine Probe der entsprechenden Lebensmittel mitbringen.</strong></p>',
    footer: '<p></p><a href="https://dataroom.mri.tum.de/#/public/shares-uploads/mcSHRgY3PEIwbkx8N92ytMrP3oNP1hzi" target="_blank">Dataroom Link</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
        '<a href="pdf/infodokument1.pdf" target="_blank">Infodokument 1</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
        '<a href="pdf/infodokument2.pdf" target="_blank">Infodokument 2</a></p>',
    icon: 'success',
    showConfirmButton: true,
    confirmButtonText: 'Daten erneut abspeichern',
  }).then(result => {
    safeFile();
    dialog();
  })
}
function eingabenAbspeichern() {
  form2JSON();
  safeFile();
}

function safeFile() {
  var fileString = new Blob([antwortenString],
      { type: "text/plain;charset=utf-8" });
  saveAs(fileString, "antworten.txt");
}

var formDataObject;
var antwortenString = "XXX";

function form2JSON() {

  antwortenString = "{";
  var prio = 1000;
  conversationalForm.tags.forEach( data => {
    if (!data.disabled && data.name != null) {
      var name, frage;
      if (data.questions !== null) {
        frage = data.questions.toString();
      } else {
        frage = null;
      }
      
      var p = prio--;
      if (data.name == "krankheitsbilder" || data.name == "stichhaefigkeit" || data.name == "heuschnupfensymptome" || data.name == "nahrungsmittelsymptome" ) {
        p = 1001;
      }

      var e = new Frage(frage, data.value.toString(), prio--);
      antwortenString += '"' + data.name + '":';
      antwortenString += JSON.stringify(e);
      antwortenString += ",";
    }

  });
  antwortenString = antwortenString.replace(/.$/, "}");
  console.log(antwortenString);
}

class Frage {
  constructor(frage, antwort, priority) {
    this.frage = frage;
    this.antwort = antwort;
    this.priority = priority;
  }
}
