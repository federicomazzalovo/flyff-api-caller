const { Console } = require('console');
const express=require('express');
const app=express();
const PORT=6000;
const https = require('https');

app.get('/',(req,res)=>{
res.send("Flyff Icons Downloader")
})

var fs = require('fs'),
    request = require('request');

downloadIcons();

function download(uri, filename, callback){ 

  request.head(uri, function(err, res, body){
    // console.log('content-type:', res.headers['content-type']);
    // console.log('content-length:', res.headers['content-length']);

    if(!err) {
      request(uri).pipe(fs.createWriteStream('img/' + filename)).on('close', callback);
    }
    else {
      console.log("Error: " + err);
    }
    
  });
};

function printTime(){
  console.log(new Date());
}

function downloadIcons(){
   

  getMonsterIconsList().forEach(element => {    
    download('https://flyff-api.sniegu.fr/image/monster/' + element, element, function(){
        console.log(element + ' downloaded');
      });
  });
    
}

app.listen(PORT,()=>console.log(`server running on port ${PORT}`))

function getMonsterIconsList()
{
  return [
'jackthehammer.png',
'prankster1.png',
'pukepuke1.png',
'longwang.png',
'rockmuscle.png',
'kraseccatcher.png',
'carrierbomb.png',
'shuhamma.png',
'risem3.png',
'pukepuke1.png',
'risem.png',
'neparuba3.png',
'cranemachinery.png',
'pukepuke2.png',
'mushpoie1.png',
'mushpang.png',
'stealknight1.png',
'wheelem2.png',
'demian1.png',
'trangforma.png',
'zenma1.png',
'lawolf.png',
'wormveduque1.png',
'bang.png',
'nuctuvehicle1.png',
'boo.png',
'nyangnyang4.png',
'trangforma2.png',
'volt.png',
'jackthehammer2.png',
'roachfl.png',
'hobo.png',
'garbagepider1.png',
'gurucatcher.png',
'nuctuvehicle.png',
'pumkin.png',
'nyangnyang.png',
'kimeradon.png',
'zombiger1.png',
'zenma1.png',
'volt2.png',
'pumkin2.png',
'basque.png',
'luia3.png',
'bearnucky2.png',
'mushpang1.png',
'totemia3.png',
'pumkin1.png',
'zenma2.png',
'wagsaac1.png',
'rockmuscle.png',
'roachfl1.png',
'wagsaac1.png',
'trilipy.png',
'dumbull1.png',
'nautrepy.png',
'roachfl.png',
'wagsaac.png',
'prankster1.png',
'pumkin1.png',
'syliaca.png',
'watangka.png',
'prankster1.png',
'iren.png',
'popcrank.png',
'peakyturtle1.png',
'longwang2.png',
'pumkin.png',
'steamwalker.png',
'glaphan.png',
'hoppre2.png',
'demian1.png',
'trilipy1.png',
'rockmuscle1.png',
'shuhamma1.png',
'bearnucky.png',
'bang1.png',
'burudeng.png',
'redmantis3.png',
'totemia.png',
'hoppre.png',
'zenma3.png',
'zombiger1.png',
'glaphan.png',
'glaphan.png',
'stealknight2.png',
'aibatt.png',
'grrr.png',
'bang.png',
'doridoma1.png',
'mushpang.png',
'mushpang.png',
'totemia.png',
'bucrow1.png',
'luia.png',
'lawolf2.png',
'glaphan2.png',
'nautrepy.png',
'rockpeller.png',
'cranemachinery1.png',
'shuhamma2.png',
'bang3.png',
'bang.png',
'trilipy2.png',
'antiquery.png',
'kimeradon.png',
'bang5.png',
'scopicon1.png',
'antiquery.png',
'nautrepy1.png',
'grrr.png',
'kern.png',
'flybrigen1.png',
'wheelem1.png',
'kern2.png',
'grrr1.png',
'muffrin.png',
'scopicon.png',
'bang1.png',
'garbagepider.png',
'gorruda2.png',
'scopicon.png',
'totemia.png',
'motbee1.png',
'dump1.png',
'hobo1.png',
'bucrow.png',
'rockmuscle.png',
'syliaca.png',
'rockmuscle3.png',
'iren.png',
'bang2.png',
'rockmuscle2.png',
'cardpuppet1.png',
'popcrank.png',
'axkeakoon.png',
'fefern4.png',
'flybat.png',
'zendros1.png',
'scopicon1.png',
'trilipy2.png',
'tombstone.png',
'grayearl1.png',
'dumbull1.png',
'antiquery2.png',
'steamwalker2.png',
'mia.png',
'mushpoie1.png',
'luia.png',
'pukepuke1.png',
'jackthehammer.png',
'gigglebox2.png',
'steamwalker1.png',
'redmantis1.png',
'aibatt1.png',
'popcrank.png',
'fefern2.png',
'carrierbomb2.png',
'dumbull.png',
'kimeradon2.png',
'mia1.png',
'volt1.png',
'boo1.png',
'bucrow.png',
'greemong.png',
'luia2.png',
'mocomochi.png',
'rockpeller2.png',
'risem2.png',
'carrierbomb.png',
'gigglebox.png',
'prankster3.png',
'grrr.png',
'fefern2.png',
'scopicon.png',
'volt.png',
'iren.png',
'swkeakoon1.png',
'gongury1.png',
'neparuba1.png',
'wormveduque.png',
'nuctuvehicle3.png',
'kimeradon.png',
'prankster4.png',
'saphyryan.png',
'rockmuscle1.png',
'aibatt.png',
'hoppre1.png',
'bucrow2.png',
'burudeng1.png',
'fefern2.png',
'gigglebox.png',
'totemia4.png',
'roachfl1.png',
'demian1.png',
'jackthehammer1.png',
'flybrigen2.png',
'kern1.png',
'bucrow.png',
'tombstone.png',
'nyangnyang2.png',
'kimeradon1.png',
'longwang1.png',
'fafnir2.png',
'greemong3.png',
'gigglebox.png',
'kern3.png',
'zendros.png',
'peakyturtle.png',
'hoppre.png',
'flybrigen3.png',
'zombiger2.png',
'nuctuvehicle2.png',
'fafnir1.png',
'driller.png',
'bearnucky1.png',
'luia.png',
'shuhamma.png',
'trilipy.png',
'totemia2.png',
'rockpeller.png',
'redmantis1.png',
'clockwork.png',
'wheelem.png',
'muffrin.png',
'risem.png',
'driller1.png',
'greemong2.png',
'syliaca1.png',
'trangforma.png',
'flybrigen.png',
'minecatcher.png',
'grrr2.png',
'prankster.png',
'shuhamma1.png',
'muffrin1.png',
'fafnir.png',
'nuttywheel1.png',
'trangforma1.png',
'flybrigen.png',
'antiquery.png',
'dumbull2.png',
'driller.png',
'longwang1.png',
'bang1.png',
'swkeakoon.png',
'watangka.png',
'axkeakoon1.png',
'hoppre.png',
'motbee.png',
'zenma1.png',
'steamwalker1.png',
'basque.png',
'peakyturtle2.png',
'pumkin.png',
'stealknight.png',
'syliaca.png',
'demian2.png',
'redmantis.png',
'jackthehammer.png',
'scopicon.png',
'popcrank1.png',
'leyena1.png',
'wormveduque.png',
'gongury2.png',
'tombstone1.png',
'bang2.png',
'lawolf.png',
'roachfl1.png',
'glaphan1.png',
'trilipy1.png',
'aibatt.png',
'neparuba2.png',
'swkeakoon1.png',
'zenma2.png',
'neparuba2.png',
'zombiger.png',
'peakyturtle.png',
'swkeakoon2.png',
'dump.png',
'boo2.png',
'pukepuke.png',
'nyangnyang1.png',
'zendros2.png',
'flybat.png',
'mushpang2.png',
'leyena.png',
'basque1.png',
'totemia1.png',
'redmantis.png',
'cardpuppet.png',
'pukepuke.png',
'basque.png',
'kimeradon.png',
'pukepuke.png',
'fefern.png',
'tombstone2.png',
'demian1.png',
'hobo.png',
'doridoma2.png',
'luia1.png',
'bang.png',
'boo.png',
'greemong.png',
'garbagepider1.png',
'zombiem.png',
'volt1.png',
'nyangnyang3.png',
'doridoma.png',
'dump.png',
'elderguard2.png',
'nyangnyang1.png',
'fafnir1.png',
'nuttywheel.png',
'boo.png',
'gongury.png',
'bucrow.png',
'rockmuscle.png',
'basque2.png',
'bang1.png',
'redmantis.png',
'gongury.png',
'burudeng.png',
'cranemachinery.png',
'zendros.png',
'glaphan.png',
'nuttywheel.png',
'leyena2.png',
'doridoma1.png',
'hobo2.png',
'driller2.png',
'watangka2.png',
'neparuba1.png',
'gigglebox1.png',
'garbagepider.png',
'cranemachinery2.png',
'carrierbomb.png',
'bearnucky.png',
'fefern1.png',
'kimeradon.png',
'risem1.png',
'scopicon.png',
'jackthehammer1.png',
'nuttywheel2.png',
'nyangnyang.png',
'leyena.png',
'kimeradon1.png',
'antiquery1.png',
'fefern.png',
'carrierbomb1.png',
'basque1.png',
'bearnucky.png',
'nuttywheel1.png',
'zenma1.png',
'watangka.png',
'stealknight.png',
'prankster2.png',
'watangka.png',
'muffrin.png',
'nyangnyang2.png',
'wheelem.png',
'burudeng.png',
'shuhamma.png',
'dumbull.png',
'gorruda1.png',
'watangka1.png',
'glaphan.png',
'gorruda.png',
'popcrank2.png',
'longwang.png',
'mia1.png',
'lawolf1.png',
'gigglebox.png',
'kern.png',
'axkeakoon2.png',
'burudeng2.png',
'mushpoie.png',
'buur.png',
'motbee.png',
'hobo.png',
'clockworksbutler.png',
'swkeakoon.png',
'volt.png',
'nautrepy2.png',
'mia2.png',
'greemong1.png',
'prankster1.png',
'gorruda1.png',
'cardpuppet.png',
'bang1.png',
'cardpuppet.png',
'peakyturtle1.png',
'gongury.png',
'doridoma.png',
'aibatt2.png',
'trangforma.png',
'risem.png',
'shuhamma.png',
'syliaca2.png',
'wagsaac.png',
'flybrigen.png',
'muffrin1.png',
'zenma3.png',
'mushpoie.png',
'trangforma.png',
'grayearl.png',
'bucrow1.png',
'leyena.png',
'zendros1.png',
'swkeakoon.png',
'elderguard1.png',
'zombiger.png',
'demian.png',
'grrr1.png',
'bang1.png',
'prankster.png',
'cardpuppet2.png',
'motbee2.png',
'elderguard.png',
'rockpeller.png',
'nautrepy.png',
'prankster.png',
'scopicon2.png',
'hoppre.png',
'meteonyker.png',
'nautrepy.png',
'wheelem.png',
'peakyturtle1.png',
'steamwalker.png',
'mushpoie.png',
'scopicon3.png',
'neparuba3.png',
'bearnucky.png',
'hobo1.png',
'gorruda.png',
'hoppre.png',
'axkeakoon2.png',
'greemong1.png',
'clockwork1.png',
'eronscatcher.png',
'axkeakoon1.png',
'kern.png',
'stealknight1.png',
'cardpuppet3.png',
'motbee.png',
'wagsaac2.png',
'fefern3.png',
'wagsaac1.png',
'mushpoie.png',
'cardpuppet1.png',
'neparuba1.png',
'stealknight.png',
'zombief.png',
'mia.png',
'elderguard.png',
'tombstone.png',
'kimeradon.png',
'rockpeller1.png',
'driller1.png',
'swkeakoon2.png',
'iren.png',
'pumkin.png',
'flybat.png',
'garbagepider2.png',
'luia.png',
'leyena.png',
'elderguard1.png',
'mushpoie2.png',
'nuctuvehicle.png',
'demian.png',
'garbagepider.png',
'fefern1.png',
'roachfl.png',
'mia1.png',
'muffrin2.png',
'cranemachinery1.png',
'bang4.png',
'flybat.png',
'boo.png',
'zombiger.png',
'wagsaac.png',
'muffrin.png',
'axkeakoon.png',
'tombstone3.png',
'nuctuvehicle.png',
'redmantis2.png',
'gigglebox3.png',
'dump2.png',
'dump.png',
'popcrank.png',
'fafnir.png',
'greemong.png',
'lawolf1.png '
];
}
