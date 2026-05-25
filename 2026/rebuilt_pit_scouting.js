var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "checkboxAs": "10",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team #",
      "code": "t",
      "type": "number",
      "required": "true"
    },
    { "name": "Hopper Fuel Capacity",
      "code": "cap",
      "type": "number",
      "min": 0,
      "required": "true"
    },
    { "name": "Fuel Per Second",
      "code": "bps",
      "type": "number",
      "min": 0,
      "required": "true"
    },
    { "name": "Pass?",
      "code": "p",
      "type": "radio",
      "choices": {
        "nz": "Neutral Zone<br>",
        "oz": "Opp Alliance zone<br>",
        "both": "Both<br>",
        "x": "Doesn't pass"
      },
      "defaultValue": "x"
    },
    { "name": "Bump?",
      "code": "b",
      "type": "bool"
    },
    { "name": "Trench?",
      "code": "tr",
      "type": "bool"
    },
    { "name": "Floor pickup Fuel",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Depot pickup Fuel",
      "code": "dpu",
      "type": "bool"
    },
    { "name": "Outpost pickup Fuel",
      "code": "opu",
      "type": "bool"
    },
    { "name": "Driver Skill (1-10)",
      "code": "ds",
      "type": "radio",
      "choices": {
        "1": "1<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5<br>",
        "6": "6<br>",
        "7": "7<br>",
        "8": "8<br>",
        "9": "9<br>",
        "10": "10<br>"
      },
      "required": "true"
    },
    { "name": "Pit Neatness before match",
      "code": "pb",
      "type": "radio",
      "choices": {
        "1": "1<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5<br>"
      },
      "required": "true"
    },
    { "name": "Pit Neatness after match",
      "code": "pa",
      "type": "radio",
      "choices": {
        "1": "1<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5<br>"
      },
      "required": "true"
    },
    { "name": "Auto Start Locations",
      "code": "as",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "dimensions": "7 10",
      "allowableResponses": "4 11 18 25 32 39 46 53 60 67",
      "shape": "circle 5 black red true"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
