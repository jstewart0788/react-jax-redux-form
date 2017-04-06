import FFXIV from '../assets/images/ffxiv.jpeg';
import DD from '../assets/images/d&d.png';
import DOTA from '../assets/images/dota.png';

export function imageMap(game){
  switch(game){
    case "ffxiv":
      return FFXIV
    case "d&d":
      return DD
    case "dota":
      return DOTA
    default:
      break;
  }
}

export function nameMap(game){
  switch(game){
    case "ffxiv":
      return "Final Fantasy XIV"
    case "d&d":
      return "Dungeons & Dragons"
    case "dota":
      return "DotA 2"
    default:
      break;
  }
}
