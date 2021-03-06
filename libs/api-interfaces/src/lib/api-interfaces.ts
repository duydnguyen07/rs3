export interface Message {
  message: string;
}

export interface ItemDetail {
  "item": {
    "icon": string,
    "icon_large": string,
    "id": string,
    "type": string,
    "typeIcon": string,
    "name": string,
    "description": string,
    "current": {
      "trend": "positive"|"negative"|"neutral",
      "price": string
    },
    "today": {
      "trend": "positive"|"negative"|"neutral",
      "price": string
    },
    "members": boolean,
    "day30": {
      "trend": "positive"|"negative"|"neutral",
      "change": string
    },
    "day90": {
      "trend": "positive"|"negative"|"neutral",
      "change": string
    },
    "day180": {
      "trend": "positive"|"negative"|"neutral",
      "change": string
    }
  }
}

export const CATEGORIES = {
  0: "Miscellaneous",
  1: "Ammo",
  2: "Arrows",
  3: "Bolts",
  4: "Construction materials",
  5: "Construction projects",
  6: "Cooking ingredients",
  7: "Costumes",
  8: "Crafting materials",
  9: "Familiars",
  10: "Farming produce",
  11: "Fletching materials",
  12: "Food and drink",
  13: "Herblore materials",
  14: "Hunting equipment",
  15: "Hunting produce",
  16: "Jewellery",
  17: "Mage armour",
  18: "Mage weapons",
  19: "Melee armour - low level",
  20: "Melee armour - mid level",
  21: "Melee armour - high level",
  22: "Melee weapons - low level",
  23: "Melee weapons - mid level",
  24: "Melee weapons - high level",
  25: "Mining and smithing",
  26: "Potions",
  27: "Prayer armour",
  28: "Prayer materials",
  29: "Range armour",
  30: "Range weapons",
  31: "Runecrafting",
  32: "Runes, Spells and Teleports",
  33: "Seeds",
  34: "Summoning scrolls",
  35: "Tools and containers",
  36: "Woodcutting product",
  37: "Pocket items"
}