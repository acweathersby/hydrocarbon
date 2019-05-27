let fn = {}; const 
/************** Maps **************/

    /* Symbols To Inject into the Lexer */
    symbols = ["((","))","<>","@PREC","@SYMBOL","@IGNORE","@IMPORT","@NAME","@EXT","=>","(*","(+","::"],

    /* Goto lookup maps */
    gt0 = [0,-1,1,2,3,4,6,7,5,8,9,-5,10,-26,11],
gt1 = [0,-16,19,20,-28,21],
gt2 = [0,-4,24,6,7,5,8,9,-5,10,-26,11],
gt3 = [0,-25,25,-3,26,-5,27,28,29],
gt4 = [0,-24,34,-1,35,-1,39,-6,36,37,38],
gt5 = [0,-30,41,-4,42,43,44],
gt6 = [0,-44,46,47],
gt7 = [0,-41,52],
gt8 = [0,-10,54,57,55],
gt9 = [0,-44,60,47],
gt10 = [0,-17,61,-24,62,-3,63],
gt11 = [0,-40,64,65],
gt12 = [0,-41,66],
gt13 = [0,-29,68,-5,27,28,29],
gt14 = [0,-41,69],
gt15 = [0,-41,70],
gt16 = [0,-26,73,-1,39,-6,36,37,38],
gt17 = [0,-27,74],
gt18 = [0,-45,80],
gt19 = [0,-11,57,82],
gt20 = [0,-11,86,-1,84,85],
gt21 = [0,-43,90,-1,80],
gt22 = [0,-11,86,-1,98,99],
gt23 = [0,-14,100],
gt24 = [0,-18,103,104,105,106,110,-9,109,108,107,112,115,116,113,114,-1,119,-9,111],
gt25 = [0,-41,124],
gt26 = [0,-44,126,47,-6,125,127],
gt27 = [0,-14,129],
gt28 = [0,-42,134],
gt29 = [0,-22,137,-9,138,-2,112,115,116,113,114,-1,119,-8,135,136],
gt30 = [0,-31,142],
gt31 = [0,-18,145,104,105,106,110,-9,109,108,107,112,115,116,113,114,-1,119,-9,111],
gt32 = [0,-44,126,47,-6,153,127],
gt33 = [0,-44,126,47,-6,154,127],
gt34 = [0,-19,158,105,106,110,-9,109,108,107,112,115,116,113,114,-1,119,-9,111],
gt35 = [0,-47,159,160,161],
gt36 = [0,-30,166,-4,42,43,44],
gt37 = [0,-23,169,-6,170,-4,42,43,44],
gt38 = [0,-23,171,-6,170,-4,42,43,44],
gt39 = [0,-23,172,-6,170,-4,42,43,44],
gt40 = [0,-44,126,47,-6,174,127],
gt41 = [0,-41,175],
gt42 = [0,-30,183,-4,42,43,44],
gt43 = [0,-44,126,47,-6,187,127],
gt44 = [0,-41,188],
gt45 = [0,-41,189],

    // State action lookup maps
    sm0=[0,1,-3,0,-4,0,-4,2,-1,3,-1,4,5,6,-5,7,1,-18,8,-2,1],
sm1=[0,9,-3,0,-4,0],
sm2=[0,10,-3,0,-4,0,-17,11,-18,10,-2,12],
sm3=[0,13,-3,0,-4,0,-4,2,-1,3,-1,4,5,6,-5,7,13,-18,8,-2,13],
sm4=[0,14,-3,0,-4,0,-4,14,-1,14,-1,14,14,14,-5,14,14,-18,14,-2,14],
sm5=[0,15,-3,0,-4,0,-4,15,-1,15,-1,15,15,15,-5,15,15,-18,15,-2,15],
sm6=[0,-4,0,-4,0,-3,16,-28,17,18,19],
sm7=[0,-4,0,-4,0,-3,20,-28,17,18,19],
sm8=[0,-4,0,-4,0,-3,21,-28,17,18,19],
sm9=[0,-1,22,23,-1,24,-4,0,-3,25],
sm10=[0,-2,26,-1,0,-4,0],
sm11=[0,-2,27,-1,28,-4,0,-3,29],
sm12=[0,30,-3,0,-4,0,-17,11,-18,8,-2,12],
sm13=[0,31,-3,0,-4,0,-17,31,-18,31,-2,31],
sm14=[0,32,-3,0,-4,0,-17,32,-18,32,-2,32],
sm15=[0,33,-3,0,-4,0,-4,33,-1,33,-1,33,33,33,-5,33,33,-18,33,-2,33],
sm16=[0,-4,0,-4,34,-3,16,-28,17,18,19],
sm17=[0,-4,0,-4,35,-3,35,-28,35,35,35],
sm18=[0,-4,0,-4,36,-3,36,-28,36,36,36],
sm19=[0,-2,26,-1,-1,-4,-1],
sm20=[0,-4,-1,-4,-1,-3,37],
sm21=[0,-4,0,-4,38,-3,20,-28,17,18,19],
sm22=[0,-4,0,-4,39,-3,39,-28,39,39,39],
sm23=[0,-4,0,-4,40,-3,40,-28,40,40,40],
sm24=[0,-4,41,-4,42,-3,43],
sm25=[0,-4,44,-4,44,-3,44],
sm26=[0,-1,45,-2,0,-4,0],
sm27=[0,-1,46,-2,0,-4,0,-3,46,-19,46,-5,46,-2,46,46,46],
sm28=[0,-1,47,-2,0,-4,0,-3,47,-19,47,-5,47,-2,47,47,47],
sm29=[0,-1,22,23,-1,24,-4,48,-3,25],
sm30=[0,49,49,49,-1,49,-4,49,-3,49,-34,49,-2,49,49],
sm31=[0,50,50,50,-1,50,-4,50,-3,50,-34,50,-2,50,50],
sm32=[0,-4,0,-4,51],
sm33=[0,52,52,52,-1,0,-4,52,-3,52,-13,52,52,52,52,52,-1,52,-2,52,52,52,52,-2,52,52,52,-1,52,-2,52,52,52],
sm34=[0,-2,27,-1,53,-4,0,-3,29],
sm35=[0,-2,27,-1,54,-4,0,-3,29,-10,55,56],
sm36=[0,-2,57,-1,57,-4,0,-3,57],
sm37=[0,-2,58,-1,58,-4,0,-3,58,-10,58,58],
sm38=[0,-2,59,-1,59,-4,0,-3,59,-10,59,59],
sm39=[0,60,22,23,-1,24,-4,61,-3,25,-34,62],
sm40=[0,63,-3,0,-4,0,-17,63,-18,63,-2,63],
sm41=[0,64,-3,0,-4,0,-17,64,-18,64,-2,64],
sm42=[0,65,-3,0,-4,0,-17,65,-18,65,-2,65],
sm43=[0,-4,0,-4,0,-18,66],
sm44=[0,-4,0,-4,0,-18,67],
sm45=[0,-4,0,-4,0,-40,68,69],
sm46=[0,70,-3,0,-4,0,-4,70,-1,70,-1,70,70,70,-5,70,70,-18,70,-2,70],
sm47=[0,-4,0,-4,71,-3,71,-28,71,71,71],
sm48=[0,72,72,72,-1,0,-4,72,-3,72,-13,72,-1,72,72,72,-1,72,-2,72,72,72,72,-2,72,72,72,-1,72,-2,72],
sm49=[0,73,73,73,-1,0,-4,73,-3,73,-13,73,-1,73,73,73,-1,73,-2,73,73,73,73,-2,73,73,73,-1,73,-2,73],
sm50=[0,74,74,74,-1,0,-4,74,-3,74,-13,74,-1,74,74,74,-1,74,-2,74,74,74,74,-2,74,74,74,-1,74,-2,74],
sm51=[0,75,-3,0,-4,0,-4,75,-1,75,-1,75,75,75,-5,75,75,-18,75,-2,75],
sm52=[0,-4,0,-4,76,-3,76,-28,76,76,76],
sm53=[0,-4,0,-4,77,-3,77,-28,77,77,77],
sm54=[0,-4,78,-4,78,-3,78],
sm55=[0,-4,0,-4,79,-3,79,-28,79,79,79],
sm56=[0,-4,0,-4,80],
sm57=[0,81,-3,0,-4,0,-4,81,-1,81,-1,81,81,81,-5,81,81,-18,81,-2,81],
sm58=[0,82,82,82,-1,82,-4,82,-3,82,-34,82,-2,82,82],
sm59=[0,83,-3,0,-4,0,-4,83,-1,83,-1,83,83,83,-5,83,83,-18,83,-2,83],
sm60=[0,-2,84,-1,84,-4,0,-3,84],
sm61=[0,-4,85,-4,0,-14,55,56],
sm62=[0,-2,86,-1,0,-4,0],
sm63=[0,-2,87,-1,87,-4,0,-3,87,-10,87,87],
sm64=[0,-4,88,-4,0,-14,88,88],
sm65=[0,-2,89,-1,0,-4,0],
sm66=[0,90,-3,0,-4,0,-4,90,-1,90,-1,90,90,90,-5,90,90,-1,90,-3,90,-12,90,-2,90],
sm67=[0,91,-3,0,-4,0,-4,91,-1,91,-1,91,91,91,-5,91,91,-1,91,-3,91,-12,91,-2,91],
sm68=[0,92,-1,93,-1,0,-4,0,-3,94,-17,95,-9,96,17,18,19,-4,97],
sm69=[0,-2,26,-1,-1,-4,0],
sm70=[0,-1,22,23,-1,24,-4,0,-3,25,-37,98,99],
sm71=[0,100,-3,0,-4,0,-4,100,-1,100,-1,100,100,100,-5,100,100,-18,100,-2,100],
sm72=[0,-2,101,-1,0,-4,0],
sm73=[0,-2,102,-1,0,-4,0],
sm74=[0,-4,103,-4,0,-14,103,103],
sm75=[0,-4,0,-4,104],
sm76=[0,105,-3,0,-4,0,-17,105,-1,106,-16,8,-2,105],
sm77=[0,107,-3,0,-4,0,-17,107,-1,107,-3,107,-12,107,-2,107],
sm78=[0,108,-3,0,-4,0,-17,108,-1,108,-3,108,-12,108,-2,108],
sm79=[0,109,-1,93,-1,0,-4,0,-3,94,-13,109,-1,109,110,95,-1,109,-8,17,18,19,-1,109,-2,111],
sm80=[0,112,-3,0,-4,0,-17,112,-1,112,-3,112,-12,112,-2,112],
sm81=[0,113,-3,0,-4,0,-17,113,-1,113,-3,113,-12,113,-2,113],
sm82=[0,114,-1,114,-1,0,-4,0,-3,114,-13,114,-1,114,114,114,-1,114,-2,115,116,117,-3,114,114,114,-1,114,-2,114],
sm83=[0,114,-1,114,-1,0,-4,0,-3,114,-13,114,-1,114,114,114,-1,114,-8,114,114,114,-1,114,-2,114],
sm84=[0,118,-1,118,-1,0,-4,0,-3,118,-13,118,-1,118,118,118,-1,118,-2,118,118,118,-3,118,118,118,-1,118,-2,118],
sm85=[0,119,-1,119,-1,0,-4,0,-3,119,-13,119,-1,119,119,119,-1,119,-2,119,119,119,-3,119,119,119,-1,119,-2,119],
sm86=[0,92,-1,93,-1,0,-4,0,-3,94,-17,95,120,-1,121,122,-5,96,17,18,19,-4,97],
sm87=[0,123,-1,123,-1,0,-4,0,-3,123,-13,123,-1,123,123,123,-1,123,-2,123,123,123,-3,123,123,123,-1,123,-2,123],
sm88=[0,52,-1,52,-1,0,-4,0,-3,52,-13,52,-1,52,52,52,-1,52,-2,52,52,52,-3,52,52,52,124,52,-2,52],
sm89=[0,-4,0,-4,0,-40,125,126],
sm90=[0,127,-3,0,-4,0,-17,127,-1,127,-3,127,-12,127,-2,127],
sm91=[0,128,-3,0,-4,0,-17,128,-1,128,-3,128,-12,128,-2,128],
sm92=[0,129,-3,0,-4,0,-17,129,-18,129,-2,129],
sm93=[0,-1,22,23,-1,24,-4,0,-3,25,-37,98,130],
sm94=[0,-1,22,23,-1,24,-4,0,-3,25,-37,131,131],
sm95=[0,-1,131,131,-1,131,-4,0,-3,131,-37,131,131],
sm96=[0,-2,132,-1,0,-4,0],
sm97=[0,-4,0,-4,133],
sm98=[0,-4,0,-4,134],
sm99=[0,135,-3,0,-4,0,-4,135,-1,135,-1,135,135,135,-5,135,135,-18,135,-2,135],
sm100=[0,136,-3,0,-4,0,-17,136,-1,136,-3,136,-12,136,-2,136],
sm101=[0,137,-3,0,-4,0,-17,137,-1,137,-3,137,-12,137,-2,137],
sm102=[0,138,-1,138,-1,0,-4,0,-3,138,-13,138,-1,138,138,138,-1,138,-8,138,138,138,-1,138,-2,138],
sm103=[0,139,-1,139,-1,0,-4,0,-3,139,-13,139,-1,139,139,139,-1,139,-2,115,116,117,-3,139,139,139,-1,139,-2,139],
sm104=[0,140,-1,140,-1,0,-4,0,-3,140,-13,140,-1,140,140,140,-1,140,-8,140,140,140,-1,140,-2,140],
sm105=[0,-4,0,-4,0,-40,125,126,-1,141,142,143,144],
sm106=[0,145,-1,145,-1,0,-4,0,-3,145,-13,145,-1,145,145,145,-1,145,-2,145,145,145,-3,145,145,145,-1,145,-2,145],
sm107=[0,-4,0,-4,0,-3,21,-25,146,-2,17,18,19],
sm108=[0,-4,0,-4,0,-3,147,-25,147,-2,147,147,147],
sm109=[0,-4,0,-4,0,-19,106,-3,148,-12,8],
sm110=[0,-2,149,-1,0,-4,0],
sm111=[0,150,-3,0,-4,0,-17,150,-18,150,-2,150],
sm112=[0,-1,22,23,-1,24,-4,0,-3,25,-37,98,151],
sm113=[0,-1,22,23,-1,24,-4,0,-3,25,-37,98,152],
sm114=[0,-4,0,-4,153],
sm115=[0,154,-3,0,-4,0,-4,154,-1,154,-1,154,154,154,-5,154,154,-18,154,-2,154],
sm116=[0,155,-3,0,-4,0,-17,155,-1,155,-3,155,-12,155,-2,155],
sm117=[0,-4,0,-4,0,-41,156],
sm118=[0,-4,0,-4,0,-40,157],
sm119=[0,-4,0,-4,0,-47,158],
sm120=[0,-4,0,-4,0,-40,159,160,-5,161],
sm121=[0,-4,0,-4,0,-29,162],
sm122=[0,163,-1,163,-1,0,-4,0,-3,163,-13,163,-1,163,163,163,-1,163,-2,163,163,163,-3,163,163,163,-1,163,-2,163],
sm123=[0,164,-1,164,-1,0,-4,0,-3,164,-13,164,-1,164,164,164,-1,164,-2,164,164,164,-3,164,164,164,-1,164,-2,164],
sm124=[0,-4,0,-4,0,-3,21,-19,165,-8,17,18,19],
sm125=[0,-4,0,-4,0,-3,166,-19,166,-8,166,166,166],
sm126=[0,-4,0,-4,0,-3,21,-19,167,-8,17,18,19],
sm127=[0,-4,0,-4,0,-3,21,-19,168,-8,17,18,19],
sm128=[0,169,-1,169,-1,0,-4,0,-3,169,-13,169,-1,169,169,169,-1,169,-2,169,169,169,-3,169,169,169,-1,169,-2,169],
sm129=[0,-1,22,23,-1,24,-4,0,-3,25,-37,98,170],
sm130=[0,171,-1,171,-1,0,-4,0,-3,171,-13,171,-1,171,171,171,-1,171,-8,171,171,171,-1,171,-2,171],
sm131=[0,-1,172,172,-1,172,-4,0,-3,172,-37,172,172],
sm132=[0,173,-3,0,-4,0,-4,173,-1,173,-1,173,173,173,-5,173,173,-18,173,-2,173],
sm133=[0,174,-1,174,-1,0,-4,0,-3,174,-13,174,-1,174,174,174,-1,174,-2,174,174,174,-3,174,174,174,-1,174,-2,174],
sm134=[0,175,-1,175,-1,0,-4,0,-3,175,-13,175,-1,175,175,175,-1,175,-8,175,175,175,-1,175,-2,175],
sm135=[0,-4,0,-4,0,-3,176,-19,176,-8,176,176,176],
sm136=[0,177,-1,177,-1,0,-4,0,-3,177,-13,177,-1,177,177,177,-1,177,-8,177,177,177,-1,177,-2,177],
sm137=[0,178,-1,178,-1,0,-4,0,-3,178,-13,178,-1,178,178,178,-1,178,-8,178,178,178,-1,178,-2,178],
sm138=[0,179,-1,179,-1,0,-4,0,-3,179,-13,179,-1,179,179,179,-1,179,-8,179,179,179,-1,179,-2,179],
sm139=[0,-1,22,23,-1,24,-4,0,-3,25,-37,98,180],
sm140=[0,181,-3,0,-4,0,-17,181,-1,181,-3,181,-12,181,-2,181],
sm141=[0,182,-3,0,-4,0,-17,182,-1,182,-3,182,-12,182,-2,182],
sm142=[0,183,-3,0,-4,0,-17,183,-1,183,-3,183,-12,183,-2,183],

    // Symbol Lookup map
    lu = new Map([[1,1],[2,2],[4,3],[8,4],[16,5],[32,6],[64,7],[128,8],[256,9],[512,10],[3,11],[264,11],["any",13],["@SYMBOL",14],[null,13],["@PREC",16],["@IGNORE",18],["@NAME",19],["@EXT",20],["AS",24],["as",25],["@IMPORT",26],["<>",27],["→",28],["│",29],["!",30],["((",31],["EXC",32],["))",33],["ERR",34],["IGN",35],["(+",36],["(*",37],["?",38],[")",39],["$",47],["ɛ",41],["θ",42],["τ",43],["\\",44],["::",45],["#",46],[";",48],["↦",49],["^",50],["{",51],["}",52],["cstr",53],["c",54],["return",55],["r",56],["=>",57]]),

    //Reverse Symbol Lookup map
    rlu = new Map([[1,1],[2,2],[3,4],[4,8],[5,16],[6,32],[7,64],[8,128],[9,256],[10,512],[11,3],[11,264],[13,"any"],[14,"@SYMBOL"],[13,null],[16,"@PREC"],[18,"@IGNORE"],[19,"@NAME"],[20,"@EXT"],[24,"AS"],[25,"as"],[26,"@IMPORT"],[27,"<>"],[28,"→"],[29,"│"],[30,"!"],[31,"(("],[32,"EXC"],[33,"))"],[34,"ERR"],[35,"IGN"],[36,"(+"],[37,"(*"],[38,"?"],[39,")"],[47,"$"],[41,"ɛ"],[42,"θ"],[43,"τ"],[44,"\\"],[45,"::"],[46,"#"],[48,";"],[49,"↦"],[50,"^"],[51,"{"],[52,"}"],[53,"cstr"],[54,"c"],[55,"return"],[56,"r"],[57,"=>"]]),

    // States 
    state = [sm0,
sm1,
sm2,
sm3,
sm4,
sm5,
sm5,
sm5,
sm5,
sm5,
sm5,
sm5,
sm6,
sm7,
sm8,
sm9,
sm10,
sm11,
sm9,
sm12,
sm13,
sm14,
sm10,
sm10,
sm15,
sm16,
sm17,
sm18,
sm18,
sm18,
sm18,
sm19,
sm19,
sm20,
sm21,
sm22,
sm23,
sm23,
sm23,
sm24,
sm25,
sm26,
sm27,
sm27,
sm27,
sm28,
sm29,
sm30,
sm31,
sm31,
sm31,
sm31,
sm32,
sm33,
sm34,
sm35,
sm36,
sm37,
sm38,
sm38,
sm39,
sm40,
sm41,
sm42,
sm43,
sm44,
sm45,
sm46,
sm47,
sm48,
sm49,
sm50,
sm51,
sm52,
sm53,
sm54,
sm55,
sm55,
sm56,
sm57,
sm58,
sm59,
sm35,
sm60,
sm61,
sm62,
sm63,
sm64,
sm65,
sm65,
sm66,
sm67,
sm67,
sm67,
sm68,
sm69,
sm70,
sm71,
sm61,
sm72,
sm73,
sm74,
sm75,
sm76,
sm77,
sm78,
sm79,
sm80,
sm81,
sm82,
sm83,
sm83,
sm84,
sm84,
sm84,
sm84,
sm84,
sm85,
sm86,
sm87,
sm88,
sm89,
sm90,
sm91,
sm92,
sm93,
sm94,
sm95,
sm70,
sm96,
sm97,
sm98,
sm99,
sm68,
sm100,
sm101,
sm102,
sm102,
sm103,
sm104,
sm105,
sm106,
sm107,
sm108,
sm108,
sm109,
sm8,
sm8,
sm8,
sm110,
sm70,
sm19,
sm111,
sm112,
sm113,
sm114,
sm115,
sm115,
sm116,
sm117,
sm118,
sm119,
sm120,
sm120,
sm120,
sm120,
sm121,
sm122,
sm123,
sm124,
sm125,
sm126,
sm127,
sm128,
sm129,
sm130,
sm131,
sm132,
sm70,
sm19,
sm10,
sm133,
sm134,
sm135,
sm136,
sm137,
sm138,
sm139,
sm140,
sm141,
sm142],

/************ Functions *************/

    max = Math.max,

    //Error Functions
    e = (tk,r,o,l,p)=>{if(l.END)l.throw("Unexpected end of input");else if(l.ty & (264)) l.throw(`Unexpected space character within input "${1}" `) ; else l.throw(`Unexpected token ${l.tx} within input "${111}" `)}, 
    eh = [e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e,
e],

    //Empty Function
    nf = ()=>-1, 

    //Environment Functions
    
redv = (ret, fn, plen, ln, t, e, o, l, s) => {        ln = max(o.length - plen, 0);        o[ln] = fn(o.slice(-plen), e, l, s, o, plen);        o.length = ln + 1;        return ret;    },
rednv = (ret, Fn, plen, ln, t, e, o, l, s) => {        ln = max(o.length - plen, 0);        o[ln] = new Fn(o.slice(-plen), e, l, s, o, plen);        o.length = ln + 1;        return ret;    },
redn = (ret, plen, t, e, o, l, s) => {        let ln = max(o.length - plen, 0);        o[ln] = o[o.length -1];        o.length = ln + 1;        return ret;    },
shftf = (ret, fn, t, e, o, l, s) => (fn(o, e, l, s), ret),
R0_S=function (sym,env,lex,state,output,len) {return env.productions},
R0_head=function (sym,env,lex,state,output,len) {return env.productions.meta = sym[0]},
R0_preamble_clauses=function (sym,env,lex,state,output,len) {return [sym[0]]},
R1_preamble_clauses=function (sym,env,lex,state,output,len) {return sym[0].push(sym[1]), sym[0]},
C0_symbols_preamble=function (sym,env,lex,state,output,len) {this.type='symbols'; this.symbols = sym[1];this.symbols.forEach(lex.addSymbol.bind(lex));},
C0_precedence_preamble=function (sym,env,lex,state,output,len) {this.grammar_stamp = env.stamp; this.type='precedence';    this.terminal = sym[1];    this.val = parseInt(sym[2])},
C0_ignore_preamble=function (sym,env,lex,state,output,len) {this.grammar_stamp = env.stamp; this.type='ignore'; this.symbols = sym[1]},
C0_name_preamble=function (sym,env,lex,state,output,len) {this.type='name'; this.id = sym[1]},
C0_ext_preamble=function (sym,env,lex,state,output,len) {this.type='ext'; this.id = sym[1]},
R0_import_preamble0_list=function (sym,env,lex,state,output,len) {return sym[0].push(sym[1]),sym[0]},
R0_import_preamble2002_group_list=function (sym,env,lex,state,output,len) {return sym[0] + sym[1]},
R1_import_preamble2002_group_list=function (sym,env,lex,state,output,len) {return sym[0] + ""},
R0_productions=function (sym,env,lex,state,output,len) {return env.productions.push(sym[0])},
R1_productions=function (sym,env,lex,state,output,len) {return env.refs.set(sym[0].id, sym[0]), null},
R2_productions=function (sym,env,lex,state,output,len) {return sym[1].id = env.productions.length, env.productions.push(sym[1]), env.productions},
R3_productions=function (sym,env,lex,state,output,len) {return env.refs.set(sym[1].id, sym[1]), sym[0]},
C0_production=function (sym,env,lex,state,output,len) {this.name = sym[1]; this.bodies = sym[3]; this.id = -1; env.functions.compileProduction(this);},
I1_production=function (sym,env,lex,state,output,len) {env.host_lex = lex.copy(); env.prod_name = sym[sym.length - 1];},
R0_production_bodies=function (sym,env,lex,state,output,len) {return env.body_count++, [sym[0]]},
R1_production_bodies=function (sym,env,lex,state,output,len) {return env.body_count++, sym[0].push(sym[2]), sym[0]},
I2_production_bodies=function (sym,env,lex,state,output,len) {env.host_lex = lex.copy()},
R3_production_bodies=function (sym,env,lex,state,output,len) {return sym[0]},
C0_entries=function (sym,env,lex,state,output,len) {this.body = sym[0]; this.reduce = null},
C1_entries=function (sym,env,lex,state,output,len) {this.body = sym[0]; this.reduce = sym[1]},
C2_entries=function (sym,env,lex,state,output,len) {this.body = [];    this.reduce = null;},
C3_entries=function (sym,env,lex,state,output,len) {this.reduce = null;     this.body = [sym[0]];},
R0_body_entries=function (sym,env,lex,state,output,len) {return env.body_offset = 0, [sym[0]]},
R1_body_entries=function (sym,env,lex,state,output,len) {return env.body_offset = sym[0].length, sym[0].push(sym[1]), sym[0]},
R2_body_entries=function (sym,env,lex,state,output,len) {return env.body_offset = sym[0].length,  sym[0].push(sym[1]), sym[0]},
R3_body_entries=function (sym,env,lex,state,output,len) {return sym[0].map(e => (e.NO_BLANK = true, e))},
R0_condition_clause=function (sym,env,lex,state,output,len) {return this.type = "exc"; this.sym = sym[2]; this.offset = -1;},
C1_condition_clause=function (sym,env,lex,state,output,len) {this.type = "err"; this.sym = sym[2]; this.offset = -1;},
C2_condition_clause=function (sym,env,lex,state,output,len) {this.type = "ign"; this.sym = sym[2]; this.offset = -1;},
R0_lexer_symbols=function (sym,env,lex,state,output,len) {return [ sym[0] ]},
C0_terminal_symbol=function (sym,env,lex,state,output,len) {this.type = "symbol"; this.val = sym[0]},
R0_symbol=function (sym,env,lex,state,output,len) {return sym[0].IS_OPTIONAL = true, sym[0]},
C0_EOF_symbol=function (sym,env,lex,state,output,len) {this.type = "eof"; this.val = "$"},
C0_empty_symbol=function (sym,env,lex,state,output,len) {this.type = "empty";},
C0_generated_symbol=function (sym,env,lex,state,output,len) {this.type = "generated"; this.val = sym[1]},
C0_literal_symbol=function (sym,env,lex,state,output,len) {this.type = "literal"; this.val = sym[1]},
C0_escaped_symbol=function (sym,env,lex,state,output,len) {this.type = "escaped"; this.val = sym[1]},
C0_production_symbol=function (sym,env,lex,state,output,len) {this.type = "production"; this.name = sym[0]; this.val = -1},
C0_comment=function (sym,env,lex,state,output,len) {this.val = sym[1]},
C0_referenced_function=function (sym,env,lex,state,output,len) {this.txt = ""; this.env = true;this.name = sym[3];this.id = sym[1];},
C1_referenced_function=function (sym,env,lex,state,output,len) {this.txt = sym[3]; this.env = false;this.name = "";this.id = sym[1];},
C0_reduce_function=function (sym,env,lex,state,output,len) {this.type = (sym[1][0] == "c" ) ?"CLASS" :"RETURNED"; this.txt = sym[3]; this.name = ""; this.env = false;this.ref = "";},
C1_reduce_function=function (sym,env,lex,state,output,len) {this.type = (sym[1][0] == "c" ) ?"CLASS" :"RETURNED"; this.txt = ""; this.name = sym[3]; this.env = true;this.ref = "";},
C2_reduce_function=function (sym,env,lex,state,output,len) {this.ref = sym[3];this.type = (sym[1][0] == "c" ) ?"CLASS" :"RETURNED"; this.txt = "";    this.name = ""; this.env = true;const ref = env.refs.get(this.ref);if(ref){if(Array.isArray(ref)){ref.push(this);}else{let ref = env.refs.get(this.ref);this.env = ref.env;this.name = ref.name;this.txt = ref.txt;}}else{env.refs.set(this.ref, [this]);}},
C0_function_clause=function (sym,env,lex,state,output,len) {this.type = "INLINE"; this.txt = sym[2]; this.name = ""; this.env = false;},
C1_function_clause=function (sym,env,lex,state,output,len) {this.type = "INLINE"; this.txt = ""; this.name = sym[2]; this.env = true;},
R0_js_data_block=function (sym,env,lex,state,output,len) {return sym[0] + sym[1] + sym[2]},

    //Sparse Map Lookup
    lsm = (index, map) => {    if (map[0] == 0xFFFFFFFF) return map[index+1];    for (let i = 1, ind = 0, l = map.length, n = 0; i < l && ind <= index; i++) {        if (ind !== index) {            if ((n = map[i]) > -1) ind++;            else ind += -n;        } else return map[i];    }    return -1;},

    //State Action Functions
    state_funct = [(...v)=>((redn(2051,0,...v))),
()=>(54),
()=>(58),
()=>(50),
()=>(62),
()=>(66),
()=>(70),
()=>(74),
(...v)=>(redv(5,R0_S,1,0,...v)),
(...v)=>((redn(16387,0,...v))),
()=>(90),
()=>(94),
(...v)=>(redn(2055,1,...v)),
(...v)=>(redv(3079,R0_preamble_clauses,1,0,...v)),
(...v)=>(redn(4103,1,...v)),
()=>(122),
()=>(126),
()=>(130),
()=>(134),
()=>(162),
()=>(182),
()=>(198),
()=>(194),
()=>(202),
()=>(206),
()=>(214),
()=>(234),
()=>(226),
()=>(238),
(...v)=>(redv(1035,R0_head,2,0,...v)),
(...v)=>(redv(16391,R0_productions,1,0,...v)),
(...v)=>(redv(16391,R1_productions,1,0,...v)),
(...v)=>(redv(3083,R1_preamble_clauses,2,0,...v)),
()=>(270),
(...v)=>(redv(25607,R0_preamble_clauses,1,0,...v)),
(...v)=>(redn(29703,1,...v)),
()=>(286),
()=>(290),
(...v)=>(redv(24583,R0_lexer_symbols,1,0,...v)),
(...v)=>(redn(26631,1,...v)),
()=>(310),
()=>(306),
()=>(302),
(...v)=>(redn(28679,1,...v)),
()=>(314),
(...v)=>(redn(30727,1,...v)),
(...v)=>(rednv(30727,C0_terminal_symbol,1,0,...v)),
()=>(318),
(...v)=>(redv(45063,R3_production_bodies,1,0,...v)),
(...v)=>(redn(46087,1,...v)),
()=>(326),
(...v)=>(redn(41991,1,...v)),
()=>(334),
()=>(350),
()=>(354),
()=>(358),
(...v)=>(redv(10247,R0_preamble_clauses,1,0,...v)),
(...v)=>(redv(12295,R1_import_preamble2002_group_list,1,0,...v)),
(...v)=>(redn(11271,1,...v)),
()=>(370),
()=>(366),
()=>(374),
(...v)=>(redv(16395,R2_productions,2,0,...v)),
(...v)=>(redv(16395,R0_S,2,0,...v)),
(...v)=>(redv(16395,R3_productions,2,0,...v)),
(...v)=>(shftf(378,I1_production,...v)),
(...v)=>(redn(40967,1,...v)),
()=>(382),
()=>(386),
(...v)=>(rednv(7183,C0_ignore_preamble,3,0,...v)),
(...v)=>(redv(25611,R1_preamble_clauses,2,0,...v)),
(...v)=>(rednv(35851,C0_generated_symbol,2,0,...v)),
(...v)=>(rednv(36875,C0_literal_symbol,2,0,...v)),
(...v)=>(rednv(37899,C0_escaped_symbol,2,0,...v)),
(...v)=>(rednv(5135,C0_symbols_preamble,3,0,...v)),
(...v)=>(redv(24587,R1_preamble_clauses,2,0,...v)),
(...v)=>(redv(26635,R3_production_bodies,2,0,...v)),
(...v)=>(redv(28683,R0_import_preamble2002_group_list,2,0,...v)),
(...v)=>(redn(27655,1,...v)),
()=>(390),
(...v)=>(rednv(8207,C0_name_preamble,3,0,...v)),
(...v)=>(redv(45067,R0_import_preamble2002_group_list,2,0,...v)),
(...v)=>(rednv(9231,C0_ext_preamble,3,0,...v)),
(...v)=>(redv(10251,R0_import_preamble0_list,2,0,...v)),
()=>(406),
()=>(410),
(...v)=>(redv(12299,R0_import_preamble2002_group_list,2,0,...v)),
(...v)=>(redv(13319,R0_preamble_clauses,1,0,...v)),
(...v)=>(redn(14343,1,...v)),
(...v)=>(rednv(43023,C0_comment,3,0,...v)),
(...v)=>(redn(44039,1,...v)),
()=>(494),
()=>(482),
()=>(470),
()=>(474),
()=>(490),
()=>(486),
()=>(514),
(...v)=>((redn(53251,0,...v))),
(...v)=>(rednv(6163,C0_precedence_preamble,4,0,...v)),
()=>(522),
()=>(526),
(...v)=>(redv(13323,R0_import_preamble0_list,2,0,...v)),
()=>(530),
(...v)=>(rednv(17427,C0_production,4,0,...v)),
(...v)=>(shftf(534,I2_production_bodies,...v)),
(...v)=>(redv(18439,R0_production_bodies,1,0,...v)),
(...v)=>(rednv(19463,fn.body,1,0,...v)),
(...v)=>(rednv(20487,C0_entries,1,0,...v)),
()=>(558),
()=>(562),
(...v)=>(rednv(20487,C2_entries,1,0,...v)),
(...v)=>(rednv(20487,C3_entries,1,0,...v)),
(...v)=>(redv(21511,R0_body_entries,1,0,...v)),
()=>(574),
()=>(578),
()=>(566),
(...v)=>(redn(32775,1,...v)),
(...v)=>(rednv(32775,C0_terminal_symbol,1,0,...v)),
()=>(586),
()=>(590),
()=>(594),
(...v)=>(rednv(38919,C0_production_symbol,1,0,...v)),
()=>(598),
()=>(606),
()=>(602),
(...v)=>(rednv(34823,C0_empty_symbol,1,0,...v)),
(...v)=>(rednv(33799,C0_EOF_symbol,1,0,...v)),
(...v)=>(rednv(47123,C0_referenced_function,4,0,...v)),
()=>(610),
(...v)=>(redn(53255,1,...v)),
()=>(622),
()=>(626),
()=>(630),
(...v)=>(redv(15383,fn.importData,5,0,...v)),
(...v)=>(redv(18443,R3_production_bodies,2,0,...v)),
(...v)=>(rednv(20491,C1_entries,2,0,...v)),
(...v)=>(redv(21515,R1_body_entries,2,0,...v)),
(...v)=>(redv(21515,R2_body_entries,2,0,...v)),
(...v)=>(redv(21515,R3_body_entries,2,0,...v)),
()=>(650),
()=>(654),
()=>(658),
()=>(662),
(...v)=>(redv(32779,R0_symbol,2,0,...v)),
()=>(670),
(...v)=>(redn(31751,1,...v)),
()=>(674),
()=>(694),
(...v)=>(rednv(47127,C1_referenced_function,5,0,...v)),
(...v)=>(redv(53259,R0_import_preamble2002_group_list,2,0,...v)),
()=>(706),
()=>(710),
(...v)=>(redv(15387,fn.importData,6,0,...v)),
(...v)=>(redv(18447,R1_production_bodies,3,0,...v)),
()=>(714),
()=>(718),
()=>(722),
(...v)=>(redn(49159,1,...v)),
(...v)=>(redn(48135,1,...v)),
(...v)=>(redn(50183,1,...v)),
()=>(726),
(...v)=>(rednv(32783,fn.listProduction,3,0,...v)),
(...v)=>(rednv(32783,fn.groupProduction,3,0,...v)),
()=>(730),
(...v)=>(redv(23559,R0_preamble_clauses,1,0,...v)),
()=>(738),
()=>(742),
(...v)=>(rednv(39951,fn.importProduction,3,0,...v)),
()=>(746),
(...v)=>(rednv(52239,C1_function_clause,3,0,...v)),
(...v)=>(redv(54287,R0_js_data_block,3,0,...v)),
(...v)=>(redv(15391,fn.importData,7,0,...v)),
(...v)=>(rednv(32787,fn.listProduction,4,0,...v)),
(...v)=>(redv(22547,R0_condition_clause,4,0,...v)),
(...v)=>(redv(23563,R1_preamble_clauses,2,0,...v)),
(...v)=>(rednv(22547,C1_condition_clause,4,0,...v)),
(...v)=>(rednv(22547,C2_condition_clause,4,0,...v)),
(...v)=>(rednv(52243,C0_function_clause,4,0,...v)),
()=>(762),
(...v)=>(rednv(51219,C1_reduce_function,4,0,...v)),
(...v)=>(rednv(51219,C2_reduce_function,4,0,...v)),
(...v)=>(rednv(51223,C0_reduce_function,5,0,...v))],

    //Goto Lookup Functions
    goto = [v=>lsm(v,gt0),
nf,
v=>lsm(v,gt1),
v=>lsm(v,gt2),
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt3),
v=>lsm(v,gt4),
v=>lsm(v,gt5),
v=>lsm(v,gt6),
v=>lsm(v,gt7),
v=>lsm(v,gt8),
v=>lsm(v,gt9),
v=>lsm(v,gt10),
nf,
nf,
v=>lsm(v,gt11),
v=>lsm(v,gt12),
nf,
v=>lsm(v,gt13),
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt14),
v=>lsm(v,gt15),
nf,
v=>lsm(v,gt16),
nf,
nf,
nf,
nf,
v=>lsm(v,gt17),
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt18),
nf,
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt19),
v=>lsm(v,gt20),
nf,
nf,
nf,
nf,
v=>lsm(v,gt21),
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt22),
nf,
v=>lsm(v,gt23),
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt24),
v=>lsm(v,gt25),
v=>lsm(v,gt26),
nf,
v=>lsm(v,gt27),
nf,
nf,
nf,
nf,
v=>lsm(v,gt28),
nf,
nf,
v=>lsm(v,gt29),
nf,
nf,
v=>lsm(v,gt30),
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt31),
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt32),
v=>lsm(v,gt18),
nf,
v=>lsm(v,gt33),
nf,
nf,
nf,
nf,
v=>lsm(v,gt34),
nf,
nf,
nf,
nf,
v=>lsm(v,gt30),
nf,
v=>lsm(v,gt35),
nf,
v=>lsm(v,gt36),
nf,
nf,
v=>lsm(v,gt28),
v=>lsm(v,gt37),
v=>lsm(v,gt38),
v=>lsm(v,gt39),
nf,
v=>lsm(v,gt40),
v=>lsm(v,gt41),
nf,
v=>lsm(v,gt32),
v=>lsm(v,gt32),
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt42),
nf,
v=>lsm(v,gt42),
v=>lsm(v,gt42),
nf,
v=>lsm(v,gt32),
nf,
nf,
nf,
v=>lsm(v,gt43),
v=>lsm(v,gt44),
v=>lsm(v,gt45),
nf,
nf,
nf,
nf,
nf,
nf,
v=>lsm(v,gt32),
nf,
nf,
nf];

function getToken(l, SYM_LU) {
    if (l.END) return 0; /*13*/

    switch (l.ty) {
        case 2:
            if (SYM_LU.has(l.tx)) return SYM_LU.get(l.tx);
            return 2;
        case 1:
            return 1;
        case 4:
            return 3;
        case 256:
            return 9;
        case 8:
            return 4;
        case 512:
            return 10;
        default:
            return SYM_LU.get(l.tx) || SYM_LU.get(l.ty);
    }
}

/************ Parser *************/

function parser(l, e = {}) {
    
    fn = e.functions;

    l.IWS = false;
    l.PARSE_STRING = true;

    if (symbols.length > 0) {
        symbols.forEach(s => { l.addSymbol(s) });
        l.tl = 0;
        l.next();
    }

    const o = [],
        ss = [0, 0];

    let time = 1000000,
        RECOVERING = 100,
        tk = getToken(l, lu),
        p = l.copy(),
        sp = 1,
        len = 0,
        off = 0;

    outer:

        while (time-- > 0) {

            const fn = lsm(tk, state[ss[sp]]) || 0;

            /*@*/// console.log({end:l.END, state:ss[sp], tx:l.tx, ty:l.ty, tk:tk, rev:rlu.get(tk), s_map:state[ss[sp]], res:lsm(tk, state[ss[sp]])});

            let r,
                gt = -1;

            if (fn == 0) {
                /*Ignore the token*/
                l.next();
                tk = getToken(l, lu);
                continue;
            }

            if (fn > 0) {
                r = state_funct[fn - 1](tk, e, o, l, ss[sp - 1]);
            } else {

                if (RECOVERING > 1 && !l.END) {
                    if (tk !== lu.get(l.ty)) {
                        //console.log("ABLE", rlu.get(tk), l.tx, tk )
                        tk = lu.get(l.ty);
                        continue;
                    }

                    if (tk !== 13) {
                        //console.log("MABLE")
                        tk = 13;
                        RECOVERING = 1;
                        continue;
                    }
                }

                tk = getToken(l, lu);

                const recovery_token = eh[ss[sp]](tk, e, o, l, p, ss[sp], lu);

                if (RECOVERING > 0 && recovery_token) {
                    RECOVERING = -1; /* To prevent infinite recursion */
                    tk = recovery_token;
                    l.tl = 0; /*reset current token */
                    continue;
                }
            }

            switch (r & 3) {
                case 0:
                    /* ERROR */

                    if (tk == "$")
                        l.throw("Unexpected end of input");
                    l.throw(`Unexpected token [${RECOVERING ? l.next().tx : l.tx}]`);
                    return [null];

                case 1:
                    /* ACCEPT */
                    break outer;

                case 2:
                    /*SHIFT */
                    o.push(l.tx);
                    ss.push(off, r >> 2);
                    sp += 2;
                    p.sync(l);
                    l.next();
                    off = l.off;
                    tk = getToken(l, lu);
                    RECOVERING++;
                    break;

                case 3:
                    /* REDUCE */

                    len = (r & 0x3FC) >> 1;

                    ss.length -= len;
                    sp -= len;
                    gt = goto[ss[sp]](r >> 10);

                    if (gt < 0)
                        l.throw("Invalid state reached!");

                    ss.push(off, gt);
                    sp += 2;
                    break;
            }
        }
    console.log(time);
    return o[0];
}; export default parser;