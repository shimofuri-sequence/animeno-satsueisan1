(function (){
    
function add_cyousei(comp){
    var white = [1, 1, 1];
    var cyousei = comp.layers.addSolid(white,
                                       '調整レイヤー',
                                       comp.width,
                                       comp.height,
                                       comp.pixelAspect,
                                       comp.duration);
    cyousei.adjustmentLayer = true;
    return cyousei;
    };

function applyPreset(target, ffx){
    var ffxFile = new File(ffx);
    target.selected = true;
    target.applyPreset(ffxFile);
    target.selected = false;
    }

var ffxRoot = 'C:/Users/emi/charaFx/ffx';

var colorfx = 'color_1.ffx';
var fxList = [{name: '目グラデ', ffx:'me_grad.ffx',
               blendingMode: BlendingMode.MULTIPLY, trackMatteType: TrackMatteType.NO_TRACK_MATTE},
               {name: '髪パラ', ffx:'kami_para.ffx',
               blendingMode: BlendingMode.SOFT_LIGHT, trackMatteType: TrackMatteType.NO_TRACK_MATTE},
               {name: '髪ブラーマスク', ffx:'kami_blur_mask.ffx',
               blendingMode: BlendingMode.NORMAL, trackMatteType: TrackMatteType.NO_TRACK_MATTE},
               {name: '髪ブラー', ffx:'kami_blur.ffx',
               blendingMode: BlendingMode.NORMAL, trackMatteType: TrackMatteType.ALPHA},
               {name: '頬ブラーマスク', ffx:'hoho_blur_mask.ffx',
               blendingMode: BlendingMode.NORMAL, trackMatteType: TrackMatteType.NO_TRACK_MATTE,},
               {name: '頬ブラー', ffx:'hoho_blur.ffx',
               blendingMode: BlendingMode.NORMAL, trackMatteType: TrackMatteType.ALPHA},
               {name: '頬消し', ffx:'remove_hoho.ffx',
               blendingMode: BlendingMode.NORMAL, trackMatteType: TrackMatteType.NO_TRACK_MATTE}];

var target = app.project.activeItem;
var targetLayer = target.selectedLayers[0];

app.beginUndoGroup('キャラ処理');

targetLayer.selected = false;

var smooth = add_cyousei(target);
smooth.effect.addProperty('OLM Smoother');

var colorPickLayer = target.layers.addNull(target.duration);
colorPickLayer.name = '色コントロール';
colorPickLayer.enabled = false;
applyPreset(colorPickLayer, ffxRoot + '/' + colorfx);

for(var i=0;i<fxList.length;i++){
    var fxData = fxList[i];
    var fxLayer = targetLayer.duplicate();
    fxLayer.name = fxData.name;
    fxLayer.blendingMode = fxData.blendingMode;
    fxLayer.trackMatteType = fxData.trackMatteType;
    var ffx = ffxRoot + '/' + fxData.ffx;
    applyPreset (fxLayer, ffx);
    }

targetLayer.guideLayer = true;

var precom = target.layers.precompose([1,2,3,4,5,6,7,8,9,10],
                                        'charaFX',
                                        true);
var precomLayer = target.layer(1);
precomLayer.label = 8;

app.endUndoGroup();

}());

