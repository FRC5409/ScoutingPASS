var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2026onwat",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required": "true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Location",
      "code": "as",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "clickRestriction": "one",
      "dimensions": "7 10",
      "allowableResponses": "4 11 18 25 32 39 46 53 60 67",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Time Entered Neutral Zone (sec)",
      "code": "tnz",
      "type": "number",
      "min": 0,
      "max": 15
    },

    { "name": "Crossed via Trench?",
      "code": "tr",
      "type": "bool"
    },

    { "name": "Crossed via Bump?",
      "code": "b",
      "type": "bool"
    },

    { "name": "Crossed Midline of Neutral Zone?",
      "code": "mid",
      "type": "bool"
    },

    { "name": "Pickup from Depot?",
      "code": "d",
      "type": "bool"
    },

    { "name": "Pickup from Outpost?",
      "code": "o",
      "type": "bool"
    },

    { "name": "Pickup from Neutral Zone?",
      "code": "nz",
      "type": "bool"
    },
    { "name": "Scored in Hub?",
      "code": "ash",
      "type": "bool"
    },

    { "name": "Climbed?",
      "code": "ac",
      "type": "bool"
    },

    { "name": "Auto WON?",
      "code": "awn",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Pickup from Depot?",
      "code": "td",
      "type": "bool"
    },
    { "name": "Pickup from Outpost?",
      "code": "to",
      "type": "bool"
    },
    { "name": "Pickup from Floor?",
      "code": "tf",
      "type": "bool"
    },

    { "name": "Active Period 1 Fuel per Cycle",
      "code": "ap1",
      "type": "radio",
      "choices": {
        "0": "0<br>",
        "5": "1-10<br>",
        "30": "10-30<br>",
        "40": "30-50<br>",
        "60": "50+"
      }
    },
    { "name": "Active Period 2 Fuel per Cycle",
      "code": "ap2",
      "type": "radio",
      "choices": {
        "0": "0<br>",
        "5": "0-10<br>",
        "30": "10-30<br>",
        "40": "30-50<br>",
        "60": "50+"
      }
    },

    { "name": "Pass from Neutral Zone?",
      "code": "pnz",
      "type": "bool"
    },
    { "name": "Pass from Opp Alliance Zone?",
      "code": "poa",
      "type": "bool"
    },

    { "name": "Crossed via Trench?",
      "code": "tt",
      "type": "bool"
    },
    { "name": "Crossed via Bump?",
      "code": "tb",
      "type": "bool"
    }
  ], 
  "endgame": [
    { "name": "Climb",
      "code": "tc",
      "type": "radio",
      "choices": {
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "a": "Attempted<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died",
      "code": "die",
      "type": "bool"
    },
    { "name": "Beached<br>(couldn't get off on their own)",
      "code": "bea",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Was Defended",
      "code": "def",
      "type": "bool"
    },
    { "name": "Excessive Penalties (>25)",
      "code": "pen",
      "type": "bool"
    },
    { "name": "Total Fuel of Alliance",
      "tooltip": "What percentage of the total fuel for this alliance did this robot score?",
      "code": "pct",
      "type": "number",
      "min": 0,
      "max": 1000
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 40,
      "maxSize": 500
    }
  ]
}`;
