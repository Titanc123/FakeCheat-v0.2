

/*
__________________________________________________________________________________________
|                           This [JS] created By FakeHvH#0597                             |
|                                                                                         |
|                                Version: [v0.2 - Test]                                   |
|_________________________________________________________________________________________|
|                                                                                         |
|  My Discord Group: https://discord.gg/yUm7fwjQh5  |   Come and share your JS and Codes  |
|  My Discord Group: https://discord.gg/yUm7fwjQh5  |   Come and share your JS and Codes  |
|  My Discord Group: https://discord.gg/yUm7fwjQh5  |   Come and share your JS and Codes  |
|                                                                                         |
|_________________________________________________________________________________________|
|                                                                                         |
| [JS] List: senseui.js    | Created by Unknown  |                                        | 
| [JS] List: animation0.js | Created by gunship  | https://brokencore.club/gunship/       |
| [JS] List: animation1.js | Created by Magiter  | https://brokencore.club/threads/21715/ |
|                                                                                         |
|_________________________________________________________________________________________|

*/


for ( i = 0; i < 20; i++) {   
    /*
        i hate you <3  <3 <3  [ lekarstvo | https://brokencore.club/members/17273/  ]  <3 <3 <3 :]
    */
    Cheat.Print( "\n" );
    if( i == 10){
        Cheat.PrintColor( [ 167,16,77,255 ], "_____________________________________ \n" );
        Cheat.PrintColor( [ 167,16,77,255 ], "|                                   |\n" );
        Cheat.PrintColor( [ 167,16,77,255 ], "|");
        Cheat.PrintColor( [ 0,143,57, 25 ], "     Welcome");
        Cheat.PrintColor( [ 167,16,77,255 ], " to FakeCheat [JS]     |\n" );
        Cheat.PrintColor( [ 167,16,77,255 ], "|       [JS] By ");
        Cheat.PrintColor( [ 0,143,57, 25 ], "FakeHvH#0597        " );
        Cheat.PrintColor( [ 167,16,77,255 ], "|\n" );
        Cheat.PrintColor( [ 167,16,77,255 ], "|                                   |\n" );
        Cheat.PrintColor( [ 167,16,77,255 ], "|___________________________________|\n" );
        Cheat.PrintColor( [ 167,16,77,255 ], "|                                   |\n" );
        Cheat.PrintColor( [ 167,16,77,255 ], "| Version: " );
        Cheat.PrintColor( [ 0,143,57, 255 ], "v0.2" );
        Cheat.PrintColor( [ 167,16,77,255 ], "  | Cheats " );
        Cheat.PrintColor( [  0,143,57, 25 ], "[Test]" );
        Cheat.PrintColor( [ 167,16,77,255 ], "    |\n" );
        Cheat.PrintColor( [ 167,16,77,255 ], "|___________________________________|\n" );
        Cheat.PrintColor( [ 167,16,77,255 ], "|                                   |\n" );
        Cheat.PrintColor( [ 167,16,77,255 ], "|  Discord:                         |\n" );
        Cheat.PrintColor( [ 167,16,77,255 ], "|                                   |\n" );
        Cheat.PrintColor( [ 167,16,77,255 ], "|  " );
        Cheat.PrintColor( [ 0,143,57, 25 ], "https://discord.gg/yUm7fwjQh5" );
        Cheat.PrintColor( [ 167,16,77,255 ], "    |\n" );
        Cheat.PrintColor( [ 167,16,77,255 ], "|  " );
        Cheat.PrintColor( [ 0,143,57, 25 ], "https://discord.gg/yUm7fwjQh5" );
        Cheat.PrintColor( [ 167,16,77,255 ], "    |\n" );
        Cheat.PrintColor( [ 167,16,77,255 ], "|                                   |\n" );
        Cheat.PrintColor( [ 167,16,77,255 ], "|___________________________________|\n" );
    }
}

var scriptitems = ("Misc", "JAVASCRIPT", "Script items");
UI.AddCheckbox("try")

// Button Menu Settings
UI.AddCheckbox("DoubleTap")
UI.AddCheckbox("Custom AA")
UI.AddCheckbox("Legit AA")
UI.AddCheckbox("Trail Custom")
UI.AddCheckbox("Tracers")
UI.AddCheckbox("Granade")
UI.AddCheckbox("Keybind")
UI.AddCheckbox("KeyStroke")
UI.AddCheckbox("Log Events")
UI.AddCheckbox("Clantag")
UI.AddCheckbox("Watermark")


// Butons Doubletap Settings
UI.AddCheckbox("test Checkbox")
UI.AddCheckbox("Checkbox Hotkey")
UI.AddHotkey("Checkbox Key")
UI.AddSliderInt("Slider", 0, 135);
UI.AddSliderInt("Slider Hotkey", 0, 135);
UI.AddHotkey("Slider Key")
UI.AddDropdown("ComboSelect",["test0","test1","test2"])
UI.AddMultiDropdown("ComboMulti", ["test0","test1","test2"])




function quit() {
    if(!UI.GetValue(scriptitems,"try")){ // 1 Tick and later no work
        UI.SetValue(scriptitems, "try",true)
        UI.SetValue(scriptitems, "Clantag",true)
        UI.SetValue(scriptitems, "Watermark",true)
    }
    UI.SetEnabled(scriptitems, "try",false)
    UI.SetEnabled(scriptitems, "DoubleTap",false)
    UI.SetEnabled(scriptitems, "Custom AA",false)
    UI.SetEnabled(scriptitems, "Legit AA",false)
    UI.SetEnabled(scriptitems, "Trail Custom",false)
    UI.SetEnabled(scriptitems, "Tracers",false)
    UI.SetEnabled(scriptitems, "Granade",false)
    UI.SetEnabled(scriptitems, "Keybind",false)
    UI.SetEnabled(scriptitems, "KeyStroke",false)
    UI.SetEnabled(scriptitems, "Log Events",false)
    UI.SetEnabled(scriptitems, "Clantag",false)
    UI.SetEnabled(scriptitems, "Watermark",false)
}
quit();


// General Settings
var menu_x = 0, menu_y = 0; 
var Module = "";
var Nevbar = 1;
var menu = false;
var Anim_ = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// Checkbox Settings
var idCheckbox = 0
var hotkeyid = 0
var colorpickerid = 0
var wasDown = []
// ComboBox
var drawweird = []
var comboOverlapping = false
var comboVal = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
 [], [], [], [], [], [], [], [], [], [], [], [], [], []]
var backupcomboval =  [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
 [], [], [], [], [], [], [], [], [], [], [], [], [], []]
var comboval2 =[]
var backupcomboval2 = []
var waitUntilUnclick = []
var lastcombodata = [[],[],[]]
var lastvaliduival = []
var comboactive = -1
var font_1 = Render.AddFont("MuseoSansCyrl-700", 8, 800)

//slide 
var val = []
var backupval = []
var holding = []
var sliderdist = []



// Important
var Font = {
    Normal: function (size) {
        return Render.AddFont( "MuseoSansCyrl-700", size, 700);
    },
    Icon: function (size) {
        return Render.AddFont( "Font_Icon", size, 100);    
    }
}
// Area Detect Mouse
function cursorBetween(x, y, length, height) {
    var cursor = Input.GetCursorPosition()
    if (cursor[0] > x && cursor[0] < x + length && cursor[1] > y && cursor[1] < y + height)
        return true
    return false
}
// Animation stop in value
function Anim_Stop(taget,stop) {
    var stop_me = 0;
    if(taget >= stop){
        stop_me = stop;
    }else{
        stop_me = taget;
    }
    return stop_me;
}
// Fix All Error
function resetSpacing() {

    idCheckbox = 0
    hotkeyid = 0
    colorpickerid = 0
}
function clamp (v, f, c) {
    return Math.min(Math.max(v, f), c);
}
function background_fix() {
    if(!UI.IsMenuOpen())
    return;

    var screen = Global.GetScreenSize();
    Render.FilledRect(0,0,screen[0], screen[1], [16, 16, 16, 120]); // Background

}


// Imgui Buttons
function beginMultiComboBox(x, y, name, contents, uival,comboid) {
    lastcombodata[0] = x
    lastcombodata[1] = y
    lastcombodata[2] = name
    lastcombodata[3] = contents
    lastcombodata[4] = uival
    lastcombodata[5] = comboid
    lastcombodata[6] = 1
}
function beginComboBox(x, y, name, contents, uival,comboid){
    lastcombodata[0] = x
    lastcombodata[1] = y
    lastcombodata[2] = name
    lastcombodata[3] = contents
    lastcombodata[4] = uival
    lastcombodata[5] = comboid
    lastcombodata[6] = 0
}
function endComboBox(id) {
    if(lastcombodata[6] == 1){
        var x = lastcombodata[0]
        var y = lastcombodata[1]
        var name = lastcombodata[2]
        var contents = lastcombodata[3]
        var uival = lastcombodata[4]
        var comboid = lastcombodata[5]
        var xx = x + 20


        var helper = [1,2,4,8,16,32,64,128,256,512,1024,2048,4096]
        for(i = 0; i < contents.length;i++){
            if(uival & helper[i]){
                comboVal[comboid][i] = true
                backupcomboval[comboid][i] = true
            }
            else{
                comboVal[comboid][i] = false
                backupcomboval[comboid][i] = false
            }
        }

        if (cursorBetween(xx, y, 130, 20) && Input.IsKeyPressed(0x01) && !drawweird[comboid] && (comboactive == comboid || comboactive == -1)) {
            drawweird[comboid] = true
            waitUntilUnclick[comboid] = true
            comboactive = comboid
        }


        Render.FilledRect(xx, y-2, 117, 23, drawweird[comboid] | cursorBetween(xx - 10, y-2, 134, 23) ? [43,43,43,Anim_[52]] : [36,36,36,Anim_[52]])
        Render.FilledCircle(xx + 4, y + 9, 12, drawweird[comboid] | cursorBetween(xx - 10, y-2, 134, 23) ? [43,43,43,Anim_[52]] : [36,36,36,Anim_[52]])
        Render.FilledCircle(xx + 115, y + 9, 12, drawweird[comboid] | cursorBetween(xx - 10, y-2, 134, 23) ? [43,43,43,Anim_[52]] : [36,36,36,Anim_[52]])
        Render.StringCustom(xx + 4, y - 18, 0, name,drawweird[comboid] | cursorBetween(xx - 10, y-2, 134, 23) ? [255,255,255,Anim_[52]] : [255,255,255,Anim_Stop(Anim_[52],140)], Font.Normal(10));
        Render.FilledCircle(xx + 115, y + 9, 4, drawweird[comboid] | cursorBetween(xx - 10, y-2, 134, 23) ? [167,16,77,Anim_Stop(Anim_[52],200)] : [167,16,77,Anim_Stop(Anim_[52],100)])





        
        var text = []
        for(i = 0; i < contents.length;i++){
            if(comboVal[comboid][i] || backupcomboval[comboid][i]){
                text.push(contents[i])
            }
        }
        if(Render.TextSizeCustom(text.join(", "),Font.Normal(7))[0] > 95){
            text = []
            text[0] = "..."
        }

   
        Render.StringCustom(xx + 6, y+3, 0, text != "" ? text.join(", ") : "None", drawweird[comboid] | cursorBetween(xx - 10, y-2, 134, 23) ? [255,255,255,Anim_[52]] : [255,255,255,Anim_Stop(Anim_[52],140)], Font.Normal(9))
            
        if(drawweird[comboid]){
            
            if (!cursorBetween(xx, y, 130,( 22 * contents.length)+22) && Input.IsKeyPressed(0x01)) {
                drawweird[comboid] = false
                comboactive = -1
            }
            if (!Input.IsKeyPressed(0x01) && waitUntilUnclick[comboid]) {
                waitUntilUnclick[comboid] = false
            }
            
            Render.FilledRect(xx + 1, y + 20, 117, (23 * contents.length)+4, [43,43,43,Anim_[52]])



            for (i = 0; i < contents.length; i++) {
                comboVal[comboid][i] = backupcomboval[comboid][i]


 
                if(cursorBetween(xx, y+25+(i*22), 130, 23)){
                    Render.FilledRect(xx - 1,y+4+(i*22)+21,120,25,[48,48,48,Anim_[52]])
                }


                Render.StringCustom(xx + 12, y + 25 + (i * 22)+4, 0, contents[i], comboVal[comboid][i] ? [167,16,77,Anim_Stop(Anim_[52],200)] : [200, 200, 200, Anim_[52]], Font.Normal(10))
                
                if (cursorBetween(xx, y+25, 130, (i * 22)+22) && Input.IsKeyPressed(0x01) && !waitUntilUnclick[comboid]) {
                    
                    comboVal[comboid][i] = !comboVal[comboid][i]
                    waitUntilUnclick[comboid] = true
                    backupcomboval[comboid][i] = comboVal[comboid][i]
                }
                
            }
            
            var returnval = 0
            
            for(i = 0; i < contents.length; i++) {
                if(comboVal[comboid][i]){
                    returnval |= helper[i]
                }
            }
            return returnval
        }
    }
    else{
        var x = lastcombodata[0]
        var y = lastcombodata[1]
        var name = lastcombodata[2]
        var contents = lastcombodata[3]
        var uival = lastcombodata[4]
        if(uival != -2147483648)
        lastvaliduival[comboid] = uival

        uival = lastvaliduival[comboid]
        var comboid = lastcombodata[5]
        var xx = x + 20

        if(!comboval2[comboid])
        comboval2[comboid] = uival
    
        if (cursorBetween(xx, y, 130, 20) && Input.IsKeyPressed(0x01) && !drawweird[comboid] && (comboactive == comboid || comboactive == -1)) {
            drawweird[comboid] = true
            waitUntilUnclick[comboid] = true
            comboactive = comboid
        }


        Render.FilledRect(xx, y-2, 117, 23, drawweird[comboid] | cursorBetween(xx - 10, y-2, 134, 23) ? [43,43,43,Anim_[52]] : [36,36,36,Anim_[52]])
        Render.FilledCircle(xx + 4, y + 9, 12, drawweird[comboid] | cursorBetween(xx - 10, y-2, 134, 23) ? [43,43,43,Anim_[52]] : [36,36,36,Anim_[52]])
        Render.FilledCircle(xx + 115, y + 9, 12, drawweird[comboid] | cursorBetween(xx - 10, y-2, 134, 23) ? [43,43,43,Anim_[52]] : [36,36,36,Anim_[52]])
        Render.StringCustom(xx + 4, y - 18, 0, name,drawweird[comboid] | cursorBetween(xx - 10, y-2, 134, 23) ? [255,255,255,Anim_[52]] : [255,255,255,Anim_Stop(Anim_[52],140)], Font.Normal(10));
        Render.FilledCircle(xx + 115, y + 9, 4, drawweird[comboid] | cursorBetween(xx - 10, y-2, 134, 23) ? [167,16,77,Anim_Stop(Anim_[52],200)] : [167,16,77,Anim_Stop(Anim_[52],100)])







        
        var text = []
        for(i = 0; i < contents.length;i++){
            if(i == comboval2[comboid])
            text.push(contents[i])
        }
        comboval2[comboid] = backupcomboval2[comboid]



        Render.StringCustom(xx + 6, y+3, 0, contents[uival] + "", drawweird[comboid] | cursorBetween(xx - 10, y-2, 134, 23) ? [255,255,255,Anim_[52]] : [255,255,255,Anim_Stop(Anim_[52],140)], Font.Normal(10));


        if(drawweird[comboid]){
            
            if (!cursorBetween(xx, y, 130,( 22 * contents.length)+22) && Input.IsKeyPressed(0x01)) {
                drawweird[comboid] = false
                comboactive = -1
            }
            if (!Input.IsKeyPressed(0x01) && waitUntilUnclick[comboid]) {
                waitUntilUnclick[comboid] = false
            }
            

            Render.FilledRect(xx + 1, y + 20, 117, (23 * contents.length)+4, [43,43,43,Anim_[52]])





            for (i = 0; i < contents.length; i++) {
                if(cursorBetween(xx, y+25+(i*22), 130, 23)){
                    Render.FilledRect(xx - 1,y+4+(i*22)+21,120,25,[48,48,48,Anim_[52]])
                }

                Render.StringCustom(xx + 12, y + 25 + (i * 22)+4, 0, contents[i], i == comboval2[comboid] ? [167,16,77,Anim_Stop(Anim_[52],200)] : [200, 200, 200, Anim_[52]],Font.Normal(10))

                
                if (cursorBetween(xx, y+25, 130, (i * 22)+22) && Input.IsKeyPressed(0x01) && !waitUntilUnclick[comboid]) {
                    comboval2[comboid] = i
                    backupcomboval2[comboid] = i
                    waitUntilUnclick[comboid] = true
                }
                
            }
            return comboval2[comboid]
        }
        
    }
}
function checkbox(w_,h_,info,normal,x, y, name, enable) {

    if(normal){
        var w = Render.TextSizeCustom(name,  Font.Normal(10))[0] + 50;
        var h = 23;
        //Render.Rect(x - 1, y - 1, w + 2, h, [255,255,255,255]) // visible Margin

        Render.StringCustom(x + 45, y + 1, 0, name, cursorBetween(x, y, w, h) ? [255,255,255,Anim_[52]] : enable ? [255,255,255,Anim_[52]] : [255,255,255,Anim_Stop(Anim_[52],140)], Font.Normal(10))
        Render.FilledRect(x + 6, y + 1, 30, 17, cursorBetween(x, y, w, h) ? [43,43,43,Anim_[52]] : [36,36,36,Anim_[52]])
        Render.FilledCircle(x + 10, y + 9, 9,cursorBetween(x, y, w, h) ? [43,43,43,Anim_[52]] : [36,36,36,Anim_[52]])        
        Render.FilledCircle(x + 30, y + 9, 9,cursorBetween(x, y, w, h) ? [43,43,43,Anim_[52]] : [36,36,36,Anim_[52]]) 
        Render.FilledCircle( enable ? x + 30 :x + 10, y + 9, 6,cursorBetween(x, y, w, h) ?  [167,16,77,Anim_[52]] : enable ? [167,16,77,Anim_[52]] : [130,16,77,Anim_[52]]) 


        if(info){
            // indicator checkbox To AutoHotkey
            Render.StringCustom(x + w + 3 , y - 5, 0, "y", enable == true ? [255,255,255,Anim_[52]] : [255,255,255,Anim_Stop(Anim_[52],155)], Font.Icon(30))
            if(cursorBetween(x + w + 3 , y - 5, 23, 23))
            {
                Render.FilledRect(x+11 + w, y + 8 - 1, 97,35 , [38,38,38, Anim_Stop(Anim_[52],230)]);
                Render.FilledRect(x+11 + w - 1,y + 8, 97,35 -2, [38,38,38,  Anim_Stop(Anim_[52],230)]);
                Render.FilledRect(x+11 + w - 1, y + 8, 97,35 + 1, [38,38,38,  Anim_Stop(Anim_[52],230)]);

                Render.StringCustom(x+17 + w - 1, y + 13, 0, "Custom Keybind", [255,255,255, Anim_Stop(Anim_[52],200)], Font.Normal(8))
                Render.StringCustom(x+26+ w - 1, y + 26, 0, "in Otv3 Panel", [255,255,255, Anim_Stop(Anim_[52],200)], Font.Normal(8))
            }
        }

        if ((cursorBetween(x, y, w, h) )) {
            if (!wasDown[idCheckbox]) {
                if (Input.IsKeyPressed(0x01)) {
                    wasDown[idCheckbox] = true
                    return true
                }
            }
            else if (wasDown[idCheckbox]) {
                if (!Input.IsKeyPressed(0x01)) {
                    wasDown[idCheckbox] = false
                    return false
                }
            }
            return false
        }
        
    }else{

        if ((cursorBetween(x, y, w_,h_) )) {
            if (!wasDown[idCheckbox]) {
                if (Input.IsKeyPressed(0x01)) {
                    wasDown[idCheckbox] = true
                    return true
                }
            }
            else if (wasDown[idCheckbox]) {
                if (!Input.IsKeyPressed(0x01)) {
                    wasDown[idCheckbox] = false
                    return false
                }
            }
            return false
        }
        
    }


}
function sliderFloat(indicator_,x, y, name, min, max, negate, sliderid, uival,additive) {

    var xx = x + 20
    var cursor = Input.GetCursorPosition()
    var w = Render.TextSizeCustom(name, Font.Normal(8))[0] + 67;


    if (!sliderdist[sliderid])
        sliderdist[sliderid] = 0
    
    if(!backupval[sliderid])
        backupval[sliderid] = uival
    val[sliderid] = backupval[sliderid]
    
    if (true) {
        if (cursorBetween(xx, y + 11, 127, 10) && Input.IsKeyPressed(0x01) && !holding[sliderid] && comboactive == -1) {
            holding[sliderid] = true
        }
        if (!Input.IsKeyPressed(0x01)) {
            holding[sliderid] = false
        }
        if(!backupval[sliderid])
            backupval[sliderid] = 0

        if (holding[sliderid]) {
            sliderdist[sliderid] = cursor[0] - xx 
            sliderdist[sliderid] /= 127
            sliderdist[sliderid] *= max - min
            val[sliderid] = negate ? sliderdist[sliderid] + min : sliderdist[sliderid]
            val[sliderid] = clamp(val[sliderid], min, max)
            val[sliderid].toFixed(0)
            backupval[sliderid] = val[sliderid]
        }
        sliderdist[sliderid] = (uival + (-min)) / (max - min)
        sliderdist[sliderid] *= 127
        sliderdist[sliderid].toFixed(0)
        sliderdist[sliderid] = clamp(sliderdist[sliderid], 0, 127)


        
  

        Render.FilledRect(xx, y + 11, 127, 10, holding[sliderid] | cursorBetween(xx, y + 11, 127, 10) ? [70, 70, 70,Anim_[52]] : [55, 55, 55,Anim_[52]])
        Render.StringCustom(xx+5,y-6,0,name+":", holding[sliderid] | cursorBetween(xx - 10, y-2, 134, 23) ? [255,255,255,Anim_[52]] : [255,255,255,Anim_Stop(Anim_[52],140)],Font.Normal(10))   
        Render.StringCustom(xx + 118, y - 4, 1, val[sliderid].toFixed(0) + "", holding[sliderid] | cursorBetween(xx - 10, y-2, 134, 23) ? [255,255,255,Anim_[52]] : [255,255,255,Anim_Stop(Anim_[52],140)], Font.Normal(9))

        if (sliderdist[sliderid] >= 0 && sliderdist[sliderid] <= 137) {
            
            Render.FilledRect(xx, y + 11, sliderdist[sliderid], 10, [167,16,77,Anim_Stop(Anim_[52],150)])
            Render.FilledCircle(xx + sliderdist[sliderid], y + 16, 8, holding[sliderid] | cursorBetween(xx - 10, y-2, 134, 23) ? [77, 77, 77,Anim_[52]] : [70, 70, 70,Anim_[52]])

        }





        if(indicator_){

            Render.StringCustom(xx + 139 , y + 1, 0, "y", [255,255,255,Anim_Stop(Anim_[52],155)], Font.Icon(30))


            if(cursorBetween(xx + 139 , y + 1, 25, 25)){  
                Render.FilledRect(xx + 149, y + 13 - 1, 99,33 , [38,38,38, Anim_Stop(Anim_[52],230)]);
                Render.FilledRect(xx + 149,y + 13, 99,33 -2, [38,38,38,  Anim_Stop(Anim_[52],230)]);
                Render.FilledRect(xx + 149, y + 13, 99,33 + 1, [38,38,38,  Anim_Stop(Anim_[52],230)]);

                Render.StringCustom(xx + 153, y + 16, 0, "Custom Keybind", [255,255,255,Anim_Stop(Anim_[52],200)], Font.Normal(8))
                Render.StringCustom(xx + 161, y + 29, 0, "in Otv3 Panel", [255,255,255,Anim_Stop(Anim_[52],200)], Font.Normal(8))
            }

            
        }
 
    }return val[sliderid]

}
function btn_Nevbar(x,y,fixY,txt,tap,id) {

    Anim_[4] = Animation.Line(menu, Anim_[4], 53 , 0.5)
    Anim_[9] = Animation.Line(menu, Anim_[9], 255 , 0.2)
    if(Anim_[4] > 37){
        Anim_[5] = Animation.Line(menu, Anim_[5], 140 , 0.1)
    }


    Render.FilledRect(x, y, Anim_[4], 53, Nevbar == tap ? [167,16,77,100] :[28,28,28,Anim_[9]]);
    Render.StringCustom(x + 12, y + 8 - fixY, 0, txt, cursorBetween(x,y,53,53) ? [255,255,255,255] : Anim_[5] > 30  && Nevbar == tap ? [255,255,255,255] : [255,255,255,Anim_[5]], Nevbar == tap ? Font.Icon(43): Font.Icon(42))
    
    if(cursorBetween(x, y ,53,53) && Input.IsKeyPressed(0x01) && Nevbar != tap){
        Nevbar = tap;      
        Anim_[29] = 0;
    }     

    Anim_[id] = Animation.Line(cursorBetween(x, y,53,53) && Nevbar != tap, Anim_[id], 53 , 7)
    Render.FilledRect(x, y, Anim_[id], 53, [255, 255, 255, 10]);

}
function btn_Menu(x,y,txt,Icon_fix_x,Icon_fix_y,icon,tap,id) {
    
    Anim_[29] = Animation.Line(UI.IsMenuOpen(),Anim_[29],255,0.5)



    //Render.Rect(x - 2, y - 2,163, 194, [255,255,255,255]);

    Render.FilledRect(x, y - 1,160, 190 , [33,33,33,Anim_Stop(Anim_[29],255)]);
    Render.FilledRect(x - 1 ,y, 160, 190 -2, [33,33,33,Anim_Stop(Anim_[29],255)]);
    Render.FilledRect(x - 1 , y,160, 190 + 1, [33,33,33,Anim_Stop(Anim_[29],255)]);

    

    var getValue = UI.GetValue(scriptitems,txt);
    

    // Button Settings
    Render.FilledRect(x, y + 190 - 65, 160, 33, [255,255,255,Anim_Stop(Anim_[29],20)]);
    Render.FilledRect(x + 125, y + 190 - 66, 35, 33, [255,255,255,Anim_Stop(Anim_[29],20)]);
    Anim_[id] = Animation.Line(cursorBetween(x, y + 190 - 65, 160, 33), Anim_[id], 160 , 7)
    Render.FilledRect(x, y + 190 - 65, Anim_[id], 33, [255, 255, 255, Anim_Stop(Anim_[29],10)]);
    if(cursorBetween(x, y + 190 - 65, 160, 33) && Input.IsKeyPressed(0x01)){
        Nevbar =  tap;
        Anim_[52] = 0;
    }  

    Render.StringCustom(x + 34,  y + 190 - 58, 0, "Settings", getValue ? [220,220,220,Anim_Stop(Anim_[29],255) ] : [140,140,140,Anim_Stop(Anim_[29],255)], Font.Normal(11))
    Render.StringCustom(x + 134,  y + 180 - 54, 0, "t", getValue ? [230,230,230,Anim_Stop(Anim_[29],255)] : [140,140,140,Anim_Stop(Anim_[29],255)], Font.Icon(30))




    // Button Feature
    Render.FilledRect(x,y + 190 - 33 - 1,160, 33 ,getValue ? [0,143,57,Anim_Stop(Anim_[29],130)] : [167,16,77,Anim_Stop(Anim_[29],130)]);
    Render.FilledRect(x - 1 ,y + 190 - 33, 160, 33 -2, getValue ? [0,143,57,Anim_Stop(Anim_[29],130)] : [167,16,77,Anim_Stop(Anim_[29],130)]);
    Render.FilledRect(x - 1 , y + 190 - 33,160, 33 + 1, getValue ? [0,143,57,Anim_Stop(Anim_[29],130)] : [167,16,77,Anim_Stop(Anim_[29],130)]);
    var txt_size = Render.TextSizeCustom(getValue ? "Enable" : "Disable", Font.Normal(13));
    Render.StringCustom(x + 160 / 2 - txt_size[0] / 2,  y + 190 - 26, 0,getValue ? "Enable" : "Disable", getValue ? [255,255,255,Anim_Stop(Anim_[29],255)] : [255,255,255,Anim_Stop(Anim_[29],140)], Font.Normal(11))
    Render.FilledRect(x - 1, y + 190 - 34, 161, 34, [255,255,255,Anim_Stop(Anim_[29],20)]);
    Anim_[id+1] = Animation.Line(cursorBetween(x - 1, y + 190 - 34, 160, 36), Anim_[id+1], 36 , 7)
    Render.FilledRect(x - 1, y + 190 - 34, 160, Anim_[id+1], [255, 255, 255, Anim_Stop(Anim_[29],30)]);


    _Render.Button(x - 1, y + 190 - 34,txt,160,30);



    // Button_Main
    var txt_size = Render.TextSizeCustom(txt, Font.Normal(13));
    Render.StringCustom(x + 160 / 2 - txt_size[0] / 2, y + 93, 0, txt, UI.GetValue(scriptitems,txt) ? [255,255,255,Anim_Stop(Anim_[29],150)] : [255,255,255,Anim_Stop(Anim_[29],100)] , Font.Normal(13))
    var icon_size = Render.TextSizeCustom(icon, Font.Normal(110));
    Render.StringCustom(x + 180 / 2 - icon_size[0] / 2 - Icon_fix_x, y - Icon_fix_y, 0, icon, UI.GetValue(scriptitems,txt) ? [255,255,255,Anim_Stop(Anim_[29],230)] : [255,255,255,Anim_Stop(Anim_[29],100)], Font.Icon(110))
}
function btn_back(backup_nevbar) { 
    var x = menu_x + 90,y = menu_y + 50;

    Anim_[51] = Animation.Line(cursorBetween(x,y,40,40),Anim_[51],40,6)

    Render.FilledRect(x, y, 40, 40, [38,38,38,Anim_[52]])

    Render.StringCustom(x + 8, y + 5, 0, "z", cursorBetween(x,y,40,40) ? [255,255,255,Anim_Stop(Anim_[52],255)] : [255,255,255,Anim_Stop(Anim_[52],200)],cursorBetween(x,y,40,40) ? Font.Icon(36) : Font.Icon(35))

    Render.FilledRect(x, y, Anim_[51], 40, [255,255,255,10])



    if(cursorBetween(x,y,40,40) &&  Input.IsKeyPressed(0x01))
    {
        Nevbar = backup_nevbar;
        Anim_[29] = 0;
        Anim_[51] = 0;
    }
}

// reset DATA
function back() {
    menu = false;
    for (i = 0; i < Anim_.length; i++) {
        Anim_[i] = 0;      
    }
    Nevbar = 1;
}




// Render
var _Render = {
    Button: function (x,y,taget,w,h) {
        if (checkbox(w,h,false,false,x,y, taget, UI.GetValue(scriptitems, taget))) UI.SetValue(scriptitems, taget, !UI.GetValue(scriptitems, taget))
    },
    Checkbox_Normal: function (x,y,taget) {
        if (checkbox(0,0,false,true,x,y, taget, UI.GetValue(scriptitems, taget))) UI.SetValue(scriptitems, taget, !UI.GetValue(scriptitems, taget))
    },
    Checkbox_Hotkey: function (x,y,taget) {
        if (checkbox(0,0,true,true,x,y, taget, UI.GetValue(scriptitems, taget))) UI.SetValue(scriptitems, taget, !UI.GetValue(scriptitems, taget))
    },
    ComboSelect: function (x,y,taget,items,id) {
        beginComboBox(x,y,taget,items,UI.GetValue(scriptitems,taget),id)
        var returnval = endComboBox(id)
        if(returnval + "" != "undefined" )
        {
            UI.SetValue(scriptitems,taget,returnval)        
        }
    
    },
    ComboMulti: function(x,y,taget,items,id){
        beginMultiComboBox(x, y,taget,items,UI.GetValue(scriptitems,taget),id)
        var returnval = endComboBox(id)
        if( returnval + "" != "undefined")
        UI.SetValue(scriptitems,taget,returnval)
    },
    Slider_Normal: function (x,y,taget, min, max,id) {
        var returnval = sliderFloat(false,x,y, taget, min, max, false,id,UI.GetValue(scriptitems,taget))
        UI.SetValue(scriptitems, taget, clamp(returnval, min, max))
    },
    Slider_Hotkey: function (x,y,taget, min, max,id) {
        var returnval = sliderFloat(true,x,y, taget, min, max, false,id,UI.GetValue(scriptitems,taget))
        UI.SetValue(scriptitems, taget, clamp(returnval, min, max))
    }
}








// Menu 
function Menu_Button() {
    if(menu)
    return;
    if(!UI.IsMenuOpen())
    return;

    var screen = Global.GetScreenSize();


    var w = 200, h = 200;
    var x = screen[0] / 2 - (w / 2), y = screen[1] / 2 - (h / 2);


    Render.StringCustom(x + 20, y - 20, 0, "7", [167,16,77,Anim_[8]], Font.Icon(210));
    if(Anim_[8] >= 170){
        Render.StringCustom(x + 22, y - 18, 0, "7", [167,16,77,180], Font.Icon(215));
    }else{
        Render.StringCustom(x + 22, y - 18, 0, "7", [167,16,77,Anim_[8]], Font.Icon(215));
    }


    Anim_[7] = Animation.Line(!menu, Anim_[7],50,6);
    Render.FilledRect(x, y + h - 50 -1,w, Anim_[7] , [16, 16, 16, 186]);
    Render.FilledRect(x -1,y + h - 50, w, Anim_[7] -2, [16, 16, 16, 186]);
    Render.FilledRect(x -1, y + h - 50,w, Anim_[7] + 1, [16, 16, 16, 186]);


    Anim_[0] = Animation.Line(cursorBetween(x, y + h - 50 -1,w,50), Anim_[0],53,10);
    Render.FilledRect(x - 1, y + h - 50 -1,w + 1,  Anim_[0] , [255, 255, 255, 10]);


    if(Anim_[7] >= 40){
        Anim_[8] = Animation.Line(!menu, Anim_[8],255,3);
        var Text_button = Render.TextSizeCustom("Settings", Font.Normal(13));
        Render.StringCustom(x + w / 2 - Text_button[0] / 2,  y + h - 34, 0, "Settings", cursorBetween(x, y + h - 50 -1,w,50) ? [250,250,250,255] : [160,160,160,Anim_[8]], Font.Normal(13));
        if(cursorBetween(x, y + h - 50 -1,w,50) && Input.IsKeyPressed(0x01)){
            menu =  true;
        }       
    }

   
    //Render.Rect(x, y, w, h, [255,255,255,255]); // Margin

}
function Menu_Settings() {
    if(!menu)
    return;
    
    if(!UI.IsMenuOpen()){ // RESERT ALL
        back();
    }

    var screen = Global.GetScreenSize();
    var w = 700, h = 500;
    menu_x = screen[0] / 2 - (w / 2), menu_y = screen[1] / 2 - (h / 2);

    Anim_[1] = Animation.Line(menu, Anim_[1], w , 6)
    Anim_[2] = Animation.Line(menu, Anim_[2], 70 , 3)


    Render.FilledRect(menu_x, menu_y -1,Anim_[1], h , [26, 26, 26, 186]);
    Render.FilledRect(menu_x -1,menu_y, Anim_[1], h -2, [26, 26, 26, 186]);
    Render.FilledRect(menu_x -1,menu_y,Anim_[1], h + 1, [26, 26, 26, 186]);


    Render.FilledRect(menu_x - 1, menu_y - 1, Anim_[2], h + 2, [20, 20, 20, 250])


    if(Anim_[1] >= 80)
    {
        Anim_[17] = Animation.Line(menu, Anim_[17], 600 , 5)
        Render.FilledRect(menu_x + 85, menu_y + 34, Anim_[17], 1, [37, 37, 37, Anim_[9]])
    }

    Render.StringCustom(menu_x + 90, menu_y + 11, 0, "FakeCheat", [186,186,186, Anim_[5] >= 60 ? 240 : Anim_[5]], Font.Normal(11))
    Render.StringCustom(menu_x + 92, menu_y + 11, 0, "                   -", [167,16,77, Anim_[5] >= 70 ? 240 : Anim_[5]], Font.Normal(11))

    btn_Nevbar(menu_x + 8, menu_y + 10,1,"o",0,15)//Back

    btn_Nevbar(menu_x + 8, menu_y + 140,1,"8",1,10)//Aimbot
    btn_Nevbar(menu_x + 8, menu_y + 200,1,"9",2,11)//Anti-Aim
    btn_Nevbar(menu_x + 8, menu_y + 260,2,"6",3,12)//Visual       
    btn_Nevbar(menu_x + 8, menu_y + 320,2,"5",4,13)//Misc
    btn_Nevbar(menu_x + 8, menu_y + 440,1,"t",5,14)//Settings    

    Render.StringCustom(menu_x + 178, menu_y + 12, 0, Module, [186,186,186, Anim_[5] >= 80 ? 255 : Anim_[5]], Font.Normal(10))
    resetSpacing()
    switch (Nevbar) {

        // Resert ALL
        case 0:
            back()
        break;

        // Nevbar
        case 1:
            list_Aimbot()          
            Module = "Aimbot";  
        break;
        case 2:
            list_Anti_Aim()
            Module = "Anti-aim";  
        break;
        case 3:
            list_Visual()
            Module = "Visual";  
        break;
        case 4:
            list_Misc()    
            Module = "Misc";          
        break;
        case 5:
            list_Settings()
            Module = "Settings";  
        break;

        // Features Settings
        case 6:
            Doubletap();
            Module = "DoubleTap Settings";  
        break;
        case 8:

        break;
        case 9:

        break;
        case 10:

        break;
        case 11:

        break;
    }

}






/*
_________________________________________________________________________________________
|                   |                   Button Menu Location                             |
|                   |                    |               |                               |
|Up|       y: 60    |        |line 1|    |   |line 2|    |   |line 2|                    |
|Down|     y: 280   |        |x: 100|    |   |x: 300|    |   |x: 500|                    |
|___________________|____________________|_______________|_______________________________|

*/



function list_Aimbot() {
    if(Anim_[1] <= 698 )
    return;

    btn_Menu(menu_x + 100, menu_y + 60,"DoubleTap",0,5,"h",6,30,true)

}
function list_Anti_Aim() {
    if(Anim_[1] <= 698 )
    return;


    btn_Menu(menu_x + 100, menu_y + 60,"Custom AA",0,5,"g",0,32,true)
    btn_Menu(menu_x + 300, menu_y + 60,"Legit AA",20,5,"f",0,34,true)
    
}
function list_Visual() {
    if(Anim_[1] <= 698 )
    return;



    btn_Menu(menu_x + 100, menu_y + 60,"Trail Custom",0,5,"d",0,36)
    btn_Menu(menu_x + 300, menu_y + 60,"Tracers",10,10,"s",0,38)
    btn_Menu(menu_x + 500, menu_y + 60,"Granade",10,10,"a",0,40)


}
function list_Misc() {
    if(Anim_[1] <= 698 )
    return;
    
    btn_Menu(menu_x + 100, menu_y + 60,"Keybind",10,10,"3",0,42)
    btn_Menu(menu_x + 300, menu_y + 60,"KeyStroke",0,0,"p",0,44)
    btn_Menu(menu_x + 500, menu_y + 60,"Log Events",25,0,"j",0,46)

    btn_Menu(menu_x + 100, menu_y + 280,"Clantag",6,0,"k",0,48)

    btn_Menu(menu_x + 300, menu_y + 280,"Watermark",35,0,"l",0,50)
    Render.FilledRect(menu_x + 420, menu_y + 280, 30, 50, [33,33,33,255])

}
function list_Settings() {
    if(Anim_[1] <= 698 )
    return;


}



/*
_________________________________________________________________________________________
|                              Imgui Custom By Fake#0957                                 |
|                                                                                        |
|1| Button                     [       _Render.Button(x,y,taget,w,h)                  ]  |
|2| Checkbox                   [       _Render.Checkbox_normal(x,y,taget)             ]  |
|3| Checkbox_With_Hotkey       [       _Render.Checkbox_Hotkey(x,y,taget)             ]  |
|4| Combo_Select               [       _Render.ComboSelect(x,y,taget,[Items],id)      ]  |
|5| Combo_Multi_Select         [       _Render.ComboMulti(x,y,taget,[Items],id)       ]  |
|6| Slider                     [       _Render.Slider_Normal(x,y,taget, min, max,id)  ]  |
|7| Slider_With_Hotkey         [       _Render.Slider_Hotkey(x,y,taget, min, max,id)  ]  |
|________________________________________________________________________________________|

*/




// Feature Settings
function Doubletap() {
    Anim_[52] = Animation.Line(true,Anim_[52],255,0.9);
    btn_back(1);

    _Render.Checkbox_Normal(menu_x + 100, menu_y + 150,"test Checkbox");
    _Render.Checkbox_Hotkey(menu_x + 100, menu_y + 190,"Checkbox Hotkey");
    _Render.ComboMulti(menu_x + 94, menu_y + 400,"ComboMulti",["test0","test1","test2"],3);
    _Render.ComboSelect(menu_x + 94, menu_y + 270,"ComboSelect",["test0","test1","test2"],1);

    _Render.Slider_Normal(menu_x + 400, menu_y + 150,"Slider",0,135,1);
    _Render.Slider_Hotkey(menu_x + 400, menu_y + 250,"Slider Hotkey",0,135,2);

}














var Animation = {
    Line: function(check, name, value, speed) {
        if (check){
            return name + (value - name) * Globals.Frametime() * speed            
        }
        else 
        {
            return name - (value + name) * Globals.Frametime() * speed / 2
        }
      
    }
}
Cheat.RegisterCallback("Draw", "background_fix");
Cheat.RegisterCallback("Draw", "Menu_Button");
Cheat.RegisterCallback("Draw", "Menu_Settings");




