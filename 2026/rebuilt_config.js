var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "tooltip": "Your initials. For example, if your name was Joe Schmoe, your initials would be JS.",
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
      "tooltip": "Your place in the scouting schedule determines which robot you scout. For example, if your group is scouting the Red Alliance, and you're the 3rd person in the group, you will scout Red-3.",
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
      "tooltip": "If not autofilled: Teams are introduced on-screen in a certain order from top to bottom on each alliance. The first (top) team introduced on the Red Alliance is Red-1, the second (middle) team is Red-2, and so on. The same is true for the Blue Alliance.",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Location",
      "tooltip": "Starting position at the beginning of the match. Robots must start with their bumpers overlapping the starting line in front of the bump/trench. The image is set for the left side alliance, flip it if you are scouting a team on the right side alliance.",
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
      "tooltip": "Enter the TIME LEFT in auto when the robot enters the Neutral Zone (in seconds e.x. 17).",
      "code": "tnz",
      "type": "number",
      "min": 0,
      "max": 20
    },

    { "name": "Crossed via Trench?",
      "tooltip": "Did the robot cross under the trench into another zone at any point during auto?",
      "code": "tr",
      "type": "bool"
    },

    { "name": "Crossed via Bump?",
      "tooltip": "Did the robot cross over the bump into another zone at any point during auto?",
      "code": "b",
      "type": "bool"
    },

    { "name": "Crossed Midline of Neutral Zone?",
      "tooltip": "Did the entirety of the robot LEGALLY cross the white line in the middle of the neutral zone? If the robot contacted an opposing robot while crossing the midline, it is considered illegal.",
      "code": "mid",
      "type": "bool"
    },

    { "name": "Pickup from Depot?",
      "tooltip": "The DEPOT is the little box of 24 fuel on the Driverstation wall of each alliance zone. There is a red/blue border around it.",
      "code": "d",
      "type": "bool"
    },

    { "name": "Pickup from Outpost?",
      "tooltip": "There are 2 OUTPOSTS, 1 on either end of the FIELD, in the corner of both Alliance Zones connecting the guardrail to the ALLIANCE WALL. There are AprilTags on both OUTPOSTS.",
      "code": "o",
      "type": "bool"
    },

    { "name": "Pickup from Neutral Zone?",
      "tooltip": "Did the robot intake FUEL from the Neutral Zone?",
      "code": "nz",
      "type": "bool"
    },
    { "name": "Scored in Hub?",
      "code": "ash",
      "type": "bool"
    },

    { "name": "Climbed?",
      "tooltip": "Did the robot climb L1 on the TOWER to earn points during auto?",
      "code": "ac",
      "type": "bool"
    },

    { "name": "Auto WON?",
      "tooltip": "Did the alliance win auto? The winning alliance's hub will flash candy-cane-style.",
      "code": "awn",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Pickup from Depot?",
      "tooltip": "The DEPOT is the little box of 24 fuel on the Driverstation wall of each alliance zone. There is a red/blue border around it.",
      "code": "td",
      "type": "bool"
    },
    { "name": "Pickup from Outpost?",
      "tooltip": "There are 2 OUTPOSTS, 1 on either end of the FIELD, in the corner of both Alliance Zones connecting the guardrail to the ALLIANCE WALL. There are AprilTags on both OUTPOSTS.",
      "code": "to",
      "type": "bool"
    },
    { "name": "Pickup from Floor?",
      "tooltip": "The Floor refers to not just the Neutral Zone, but also the floor of both Alliance Zones.",
      "code": "tf",
      "type": "bool"
    },

    { "name": "Active Period 1 Fuel per Cycle",
      "tooltip": "About how much fuel did this robot score during its Alliance's first active shift?",
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
      "tooltip": "About how much fuel did this robot score during its Alliance's second active shift?",
      "code": "ap2",
      "type": "radio",
      "choices": {
        "0": "0<br>",
        "5": "1-10<br>",
        "30": "10-30<br>",
        "40": "30-50<br>",
        "60": "50+"
      }
    },

    { "name": "Pass from Neutral Zone?",
      "tooltip": "Did the robot launch fuel from the Neutral Zone into its Alliance Zone?",
      "code": "pnz",
      "type": "bool"
    },
    { "name": "Pass from Opp Alliance Zone?",
      "tooltip": "Did the robot launch fuel all the way from the Opponent Alliance Zone into its own Alliance Zone?",
      "code": "poa",
      "type": "bool"
    },

    { "name": "Crossed via Trench?",
      "tooltip": "Did the robot cross under the trench into another zone at any point during teleop?",
      "code": "tt",
      "type": "bool"
    },
    { "name": "Crossed via Bump?",
      "tooltip": "Did the robot cross over the bump into another zone at any point during teleop?",
      "code": "tb",
      "type": "bool"
    }
  ], 
  "endgame": [
    { "name": "Climb",
      "tooltip": "The robot climbs L1 if it is any height above the ground. It climbs L2 if its bumpers are above the 1st rung. It climbs L3 if its bumpers are above the 2nd rung.",
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
      "tooltip": "Was the robot able to maneuver well? Did it move around the field without crashing due to driver error?",
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
      "tooltip": "Did the robot effectively block opposing robots from advancing? Did the robot block them from launching?",
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
      "tooltip": "How fast was the robot on average? Select \\"Did Not Move\\" if the robot didn't move at all during the match, or if it didn't play.",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3 (fast)<br>",
        "x": "Did Not Move"
      },
      "defaultValue":"3"
    },
    { "name": "Died",
      "tooltip": "Did the robot's battery die / Did it get disabled?",
      "code": "die",
      "type": "bool"
    },
    { "name": "Beached<br>(couldn't get off on their own)",
      "tooltip": "Did the robot get stuck on the bump?",
      "code": "bea",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Was Defended",
      "tooltip": "Was the robot unable to advance due to an opposing robot blocking its way for a substantial amount of time?",
      "code": "def",
      "type": "bool"
    },
    { "name": "Excessive Penalties (>25)",
      "tooltip": "Did the robot incur more than 25 penalty points? A minor foul is worth 5 points, and a major foul is worth 15 points.",
      "code": "pen",
      "type": "bool"
    },
    { "name": "Total Fuel of Alliance",
      "tooltip": "How much fuel did the Alliance score overall? (In both auto and teleop)",
      "code": "pct",
      "type": "number",
      "min": 0,
      "max": 1000
    },
    { "name": "Comments",
      "tooltip": "Anything else you'd like to add about this team or their robot",
      "code": "co",
      "type": "text",
      "size": 40,
      "maxSize": 500
    }
  ]
}`;
