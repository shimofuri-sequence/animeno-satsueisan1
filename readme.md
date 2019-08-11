# アニメの撮影さん1 サポートファイル #

## 作成環境 ##
Windows10  
Adobe AfterEffects CS6

## 内容物 ##
charaFX
│  Cell.png
│  charaFX.jsx
│  syoriComp.aep
│  はじめに.txt
│  
└─ffx
        colorKey_white.ffx
        color_1.ffx
        hoho_blur.ffx
        hoho_blur_mask.ffx
        kami_blur.ffx
        kami_blur_mask.ffx
        kami_para.ffx
        me_grad.ffx
        remove_hoho.ffx

劇中での完成形とは若干違う箇所がありますが、動作などには
問題ありません。

## 使い方 ##
1. AfterEffectsでsyoriComp.aepを開きます。
2. testコンポを開きます
3. testコンポのレイヤーを選択してcharaFX.jsxを実行します

## 注意 ##
ffxのあるファイルパスを読みに行くのですが、そのままでは
架空のパスが設定されているのでエラーになります。
charaFX.jsxをエディタで開き、ffxRoot変数をこの内容物にある
ffxフォルダまでのパスに書き換えてから実行してください。
