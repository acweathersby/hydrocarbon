export default ((s,u,g)=>({fn:{},st:s,ty:{number:0,num:0,identifier:1,string:2,white_space:3,open_bracket:4,close_bracket:5,operator:6,symbol:7,new_line:8,tab:9,number_bin:10,number_oct:11,number_hex:12,number_int:13,number_sci:14,number_flt:15,alpha_numeric:16,white_space_new_line:20,id:1,str:2,ws:3,ob:4,cb:5,op:6,sym:7,nl:8,tb:9,int:13,integer:13,bin:10,binary:10,oct:11,octal:11,hex:12,hexadecimal:12,flt:15,float:15,sci:14,scientific:14,any:21,keyword:22},sym:[],
    lu:new Map([[1,0],[2,1],[4,2],[8,3],[16,4],[32,5],[64,6],[128,7],[256,8],[512,9],[1025,10],[2049,11],[4097,12],[8193,13],[16385,14],[32769,15],[3,16],[776,20],[200,21],[201,22],["(",24],[")",25],["{",26],["}",27],["[",28],[",",29],["]",30],["total",31],["recall",32],[null,0],["mission",34],["impossible",35]]),sts:[0,1,2,3,4,5,6,7,8,0,9,10,11,12,0,4,13,14,15,16].map(i=>s[i]),fm:[],
    gt:g[0].map(i=>i>=0?u[i]:[]),fns:[],sa:[e=>82,e=>18,e=>74,e=>42,(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),9),e=>34,(a,b,c,e,f,g,p)=>(p.rn(3,a,b,c,e,f),2075),e=>50,e=>58,(a,b,c,e,f,g,p)=>(p.rn(3,a,b,c,e,f),8219),(a,b,c,e,f,g,p)=>(p.rn(1,a,b,c,e,f),2059),e=>106,e=>114,e=>122,e=>130,e=>154,e=>146,(a,b,c,e,f,g,p)=>(p.rn(5,a,b,c,e,f),2091),(a,b,c,e,f,g,p)=>(p.rn(3,a,b,c,e,f),4123)],
    gtk:function getToken(l, SYM_LU, IGNORE_GRAMMAR_SYMBOLS = false) {    if (l.END)        return 0;    if (!IGNORE_GRAMMAR_SYMBOLS)        if (SYM_LU.has(l.tx) || SYM_LU.has(l.ty))            return SYM_LU.get(l.tx) || SYM_LU.get(l.ty);    if ((l.ty & 1)) {        switch (l.ty) {            case 16385:                return 14;            case 4097:                return 12;            case 2049:                return 11;            case 1025:                return 10;            case 32769:                return 15;            case 8193:                return 13;            default:            case 1:                return $eof;        }    }    switch (l.ty) {        case 2:            return 1;        case 4:            return 2;        case 256:            return 8;        case 8:            return 3;        case 512:            return 9;    }    return 21;},}))(...("-4;0;-5;0;-g;2;-2;4;-2;6;-6;8&a;-3;0;-5;0&-4;0;-5;0;-q;8&-4;0;-5;0;-j;c&e;-3;0;-5;0;-l;pan&-4;0;-5;0;-r;g&i;-3;0;-5;0&k;-3;0;-5;0;-j;k;-2;pat&m;-3;0;-5;0;-l;pav&-4;0;-5;0;-n;o&-4;0;-5;0;-l;q&-4;0;-5;0;-h;s&-4;0;-5;0;-o;u&w;-3;0;-5;0&-4;0;-5;0;-m;y&10;-3;0;-5;0;-l;pb9&-4;0;-5;0;-h;12|-2;2;-3;g&-5;6&-2;m;-3;g&-3;o&-2;y;-3;g|0;-2;2;-7;4;6;-4;8;-6").split("|").map(e=>e.split("&")).map(a => a.map(s => s.split(";").map(s=>parseInt(s,36))).map(s=>s.flatMap(d=>d<0?(new Array(-d-1)).fill(-1):(new Array(((d >>> 15) & 0x3FF) + 1)).fill((d >>> 1) & 0x3FFF)))));