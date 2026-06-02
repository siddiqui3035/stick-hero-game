const _0x56fb3e=_0x4de2;(function(_0x383fde,_0x1cef91){const _0x37a881=_0x4de2,_0xf59cc8=_0x383fde();while(!![]){try{const _0x4f5ee5=-parseInt(_0x37a881(0x178))/0x1+parseInt(_0x37a881(0x187))/0x2*(parseInt(_0x37a881(0x13f))/0x3)+parseInt(_0x37a881(0x14d))/0x4+parseInt(_0x37a881(0x142))/0x5*(parseInt(_0x37a881(0x181))/0x6)+-parseInt(_0x37a881(0x157))/0x7+parseInt(_0x37a881(0x165))/0x8*(parseInt(_0x37a881(0x164))/0x9)+-parseInt(_0x37a881(0x148))/0xa;if(_0x4f5ee5===_0x1cef91)break;else _0xf59cc8['push'](_0xf59cc8['shift']());}catch(_0x4465b7){_0xf59cc8['push'](_0xf59cc8['shift']());}}}(_0x4f26,0xb7446),Array[_0x56fb3e(0x18b)][_0x56fb3e(0x16c)]=function(){const _0x299e5e=_0x56fb3e;return this[this[_0x299e5e(0x185)]-0x1];},Math[_0x56fb3e(0x163)]=function(_0x48175c){return Math['sin'](_0x48175c/0xb4*Math['PI']);});let phase=_0x56fb3e(0x162),lastTimestamp,heroX,heroY,sceneOffset,platforms=[],sticks=[],trees=[],score=0x0;

// === LEVEL SYSTEM ===
let currentLevel = 1;
let targetScore = 8;

function _0x4de2(_0x4a4adc,_0x72efe0){const _0x4f26d5=_0x4f26();return _0x4de2=function(_0x4de255,_0x19ce2e){_0x4de255=_0x4de255-0x13e;let _0x3af12e=_0x4f26d5[_0x4de255];return _0x3af12e;},_0x4de2(_0x4a4adc,_0x72efe0);}const canvasWidth=0x177,canvasHeight=0x177,platformHeight=0x64,heroDistanceFromEdge=0xa,paddingX=0x64,perfectAreaSize=0xa,backgroundSpeedMultiplier=0.2,hill1BaseHeight=0x64,hill1Amplitude=0xa,hill1Stretch=0x1,hill2BaseHeight=0x46,hill2Amplitude=0x14,hill2Stretch=0.5,stretchingSpeed=0x4,turningSpeed=0x4,walkingSpeed=0x4,transitioningSpeed=0x2,fallingSpeed=0x2,heroWidth=0x11,heroHeight=0x1e,canvas=document[_0x56fb3e(0x17a)](_0x56fb3e(0x16f));canvas[_0x56fb3e(0x154)]=window['innerWidth'],canvas[_0x56fb3e(0x182)]=window[_0x56fb3e(0x14c)];const ctx=canvas[_0x56fb3e(0x14b)]('2d'),introductionElement=document['getElementById'](_0x56fb3e(0x16e)),perfectElement=document[_0x56fb3e(0x17a)](_0x56fb3e(0x15c)),restartButton=document[_0x56fb3e(0x17a)](_0x56fb3e(0x140)),scoreElement=document[_0x56fb3e(0x17a)](_0x56fb3e(0x17c)),levelElement=document.getElementById('levelNum'),targetElement=document.getElementById('targetNum'),levelCompleteElement=document.getElementById('levelComplete');resetGame();function resetGame(){const _0x47a42d=_0x56fb3e;phase=_0x47a42d(0x162),lastTimestamp=undefined,sceneOffset=0x0,score=0x0,introductionElement[_0x47a42d(0x17d)][_0x47a42d(0x183)]=0x1,perfectElement[_0x47a42d(0x17d)][_0x47a42d(0x183)]=0x0,restartButton[_0x47a42d(0x17d)][_0x47a42d(0x179)]=_0x47a42d(0x16d),scoreElement[_0x47a42d(0x174)]=score,levelElement.textContent=currentLevel,targetElement.textContent=targetScore,levelCompleteElement.style.display='none',platforms=[{'x':0x32,'w':0x32}],generatePlatform(),generatePlatform(),generatePlatform(),generatePlatform(),sticks=[{'x':platforms[0x0]['x']+platforms[0x0]['w'],'length':0x0,'rotation':0x0}],trees=[],generateTree(),generateTree(),generateTree(),generateTree(),generateTree(),generateTree(),generateTree(),generateTree(),generateTree(),generateTree(),heroX=platforms[0x0]['x']+platforms[0x0]['w']-heroDistanceFromEdge,heroY=0x0,draw();}function generateTree(){const _0x27665d=_0x56fb3e,_0x41c3f7=0x1e,_0x7ad10f=0x96,_0x544455=trees[trees[_0x27665d(0x185)]-0x1];let _0x275f02=_0x544455?_0x544455['x']:0x0;const _0xb01f17=_0x275f02+_0x41c3f7+Math['floor'](Math[_0x27665d(0x144)]()*(_0x7ad10f-_0x41c3f7)),_0x42661e=[_0x27665d(0x176),_0x27665d(0x156),'#98B333'],_0x35609b=_0x42661e[Math[_0x27665d(0x15e)](Math[_0x27665d(0x144)]()*0x3)];trees['push']({'x':_0xb01f17,'color':_0x35609b});}function generatePlatform(){const _0x459dee=_0x56fb3e,_0xa26588=0x28,_0x1ab903=0xc8,_0x221203=0x14,_0x1e6349=0x64,_0x124a25=platforms[platforms['length']-0x1];let _0x534704=_0x124a25['x']+_0x124a25['w'];const _0x21b1ab=_0x534704+_0xa26588+Math[_0x459dee(0x15e)](Math[_0x459dee(0x144)]()*(_0x1ab903-_0xa26588)),_0x313cfa=_0x221203+Math[_0x459dee(0x15e)](Math['random']()*(_0x1e6349-_0x221203));platforms['push']({'x':_0x21b1ab,'w':_0x313cfa});}function checkLevelComplete(){if(score>=targetScore){phase='waiting';levelCompleteElement.style.display='block';setTimeout(()=>{currentLevel++;targetScore+=6;resetGame();},1800);}}resetGame(),window[_0x56fb3e(0x180)](_0x56fb3e(0x170),function(_0x418aa4){const _0x46a6a7=_0x56fb3e;if(_0x418aa4[_0x46a6a7(0x172)]=='\x20'){_0x418aa4['preventDefault'](),resetGame();return;}}),window[_0x56fb3e(0x180)]('mousedown',function(_0x3efcfa){const _0x3721ae=_0x56fb3e;phase=='waiting'&&(lastTimestamp=undefined,introductionElement['style'][_0x3721ae(0x183)]=0x0,phase='stretching',window[_0x3721ae(0x17e)](animate));}),window[_0x56fb3e(0x180)](_0x56fb3e(0x169),function(_0x21c600){const _0x6f251d=_0x56fb3e;phase=='stretching'&&(phase=_0x6f251d(0x151));}),window['addEventListener'](_0x56fb3e(0x167),function(_0x4a339f){const _0x10bdc0=_0x56fb3e;canvas['width']=window[_0x10bdc0(0x166)],canvas['height']=window[_0x10bdc0(0x14c)],draw();}),window[_0x56fb3e(0x17e)](animate);function animate(_0xdebca9){const _0x9025e2=_0x56fb3e;if(!lastTimestamp){lastTimestamp=_0xdebca9,window['requestAnimationFrame'](animate);return;}switch(phase){case'waiting':return;case _0x9025e2(0x147):{sticks[_0x9025e2(0x16c)]()[_0x9025e2(0x185)]+=(_0xdebca9-lastTimestamp)/stretchingSpeed;break;}case'turning':{sticks[_0x9025e2(0x16c)]()[_0x9025e2(0x160)]+=(_0xdebca9-lastTimestamp)/turningSpeed;if(sticks['last']()[_0x9025e2(0x160)]>0x5a){sticks[_0x9025e2(0x16c)]()['rotation']=0x5a;const [_0x467970,_0x1b013d]=thePlatformTheStickHits();if(_0x467970){score+=_0x1b013d?0x2:0x1;scoreElement[_0x9025e2(0x174)]=score;_0x1b013d&&(perfectElement[_0x9025e2(0x17d)][_0x9025e2(0x183)]=0x1,setTimeout(()=>perfectElement['style']['opacity']=0x0,0x3e8));generatePlatform();generateTree();generateTree();checkLevelComplete();}phase=_0x9025e2(0x145);}break;}case'walking':{heroX+=(_0xdebca9-lastTimestamp)/walkingSpeed;const [_0x388943]=thePlatformTheStickHits();if(_0x388943){const _0x2e34a3=_0x388943['x']+_0x388943['w']-heroDistanceFromEdge;heroX>_0x2e34a3&&(heroX=_0x2e34a3,phase=_0x9025e2(0x17f));}else{const _0xb7241b=sticks[_0x9025e2(0x16c)]()['x']+sticks[_0x9025e2(0x16c)]()[_0x9025e2(0x185)]+heroWidth;heroX>_0xb7241b&&(heroX=_0xb7241b,phase='falling');}break;}case _0x9025e2(0x17f):{sceneOffset+=(_0xdebca9-lastTimestamp)/transitioningSpeed;const [_0x413ee2]=thePlatformTheStickHits();sceneOffset>_0x413ee2['x']+_0x413ee2['w']-paddingX&&(sticks[_0x9025e2(0x161)]({'x':_0x413ee2['x']+_0x413ee2['w'],'length':0x0,'rotation':0x0}),phase=_0x9025e2(0x162));break;}case _0x9025e2(0x15b):{if(sticks[_0x9025e2(0x16c)]()[_0x9025e2(0x160)]<0xb4)sticks[_0x9025e2(0x16c)]()[_0x9025e2(0x160)]+=(_0xdebca9-lastTimestamp)/turningSpeed;heroY+=(_0xdebca9-lastTimestamp)/fallingSpeed;const _0xcf1b41=platformHeight+0x64+(window[_0x9025e2(0x14c)]-canvasHeight)/0x2;if(heroY>_0xcf1b41){restartButton[_0x9025e2(0x17d)][_0x9025e2(0x179)]=_0x9025e2(0x171);return;}break;}default:throw Error(_0x9025e2(0x18a));}draw(),window[_0x9025e2(0x17e)](animate),lastTimestamp=_0xdebca9;}function thePlatformTheStickHits(){const _0x4c9cb0=_0x56fb3e;if(sticks[_0x4c9cb0(0x16c)]()[_0x4c9cb0(0x160)]!=0x5a)throw Error(_0x4c9cb0(0x17b)+sticks[_0x4c9cb0(0x16c)]()[_0x4c9cb0(0x160)]+'°');const _0x270af9=sticks['last']()['x']+sticks[_0x4c9cb0(0x16c)]()[_0x4c9cb0(0x185)],_0x5a6cfe=platforms[_0x4c9cb0(0x16b)](_0x3282fe=>_0x3282fe['x']<_0x270af9&&_0x270af9<_0x3282fe['x']+_0x3282fe['w']);if(_0x5a6cfe&&_0x5a6cfe['x']+_0x5a6cfe['w']/0x2-perfectAreaSize/0x2<_0x270af9&&_0x270af9<_0x5a6cfe['x']+_0x5a6cfe['w']/0x2+perfectAreaSize/0x2)return[_0x5a6cfe,!![]];return[_0x5a6cfe,![]];}function draw(){const _0x5528f7=_0x56fb3e;ctx[_0x5528f7(0x155)](),ctx[_0x5528f7(0x141)](0x0,0x0,window[_0x5528f7(0x166)],window['innerHeight']),drawBackground(),ctx[_0x5528f7(0x15f)]((window[_0x5528f7(0x166)]-canvasWidth)/0x2-sceneOffset,(window[_0x5528f7(0x14c)]-canvasHeight)/0x2),drawPlatforms(),drawHero(),drawSticks(),ctx[_0x5528f7(0x15d)]();}restartButton[_0x56fb3e(0x180)](_0x56fb3e(0x184),function(_0x6b5de8){const _0x12c066=_0x56fb3e;_0x6b5de8[_0x12c066(0x146)](),resetGame(),restartButton['style'][_0x12c066(0x179)]='none';});

// ==================== ULTRA THIN STICK - MATCHING YOUR IMAGE ====================
function drawSticks(){
    sticks.forEach(stick => {
        ctx.save();
        ctx.translate(stick.x, canvasHeight - platformHeight);
        ctx.rotate(stick.rotation * Math.PI / 180);
        
        if(currentLevel === 1) ctx.strokeStyle = '#1f1f1f';
        else if(currentLevel === 2) ctx.strokeStyle = '#ffeb3b';
        else if(currentLevel === 3) ctx.strokeStyle = '#00f0ff';
        else ctx.strokeStyle = '#e0e0e0';
        
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        
        ctx.shadowBlur = (currentLevel >= 4) ? 10 : 2;
        ctx.shadowColor = (currentLevel >= 4) ? '#a5d6ff' : 'rgba(0,0,0,0.5)';
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -stick.length);
        ctx.stroke();
        
        ctx.restore();
    });
}

// ==================== FIXED BACKGROUND WITH WORKING HILLS ====================
function drawBackground(){
    const grad = ctx.createLinearGradient(0, 0, 0, window.innerHeight);
    
    if(currentLevel === 1){
        grad.addColorStop(0, '#a8e6a1');
        grad.addColorStop(1, '#4a7043');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        drawHill(hill1BaseHeight, hill1Amplitude, hill1Stretch, '#4a7043');
        drawHill(hill2BaseHeight, hill2Amplitude, hill2Stretch, '#3d5c38');
    } 
    else if(currentLevel === 2){
        grad.addColorStop(0, '#ff8c00');
        grad.addColorStop(0.5, '#ff4500');
        grad.addColorStop(1, '#8b0000');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        drawHill(hill1BaseHeight, hill1Amplitude+5, hill1Stretch, '#c0392b');
        drawHill(hill2BaseHeight, hill2Amplitude+8, hill2Stretch, '#e67e22');
        drawFireEffect();
    } 
    else if(currentLevel === 3){
        grad.addColorStop(0, '#87ceeb');
        grad.addColorStop(1, '#1e3a8a');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        drawHill(hill1BaseHeight, hill1Amplitude, hill1Stretch, '#2a8a9e');
        drawHill(hill2BaseHeight, hill2Amplitude, hill2Stretch, '#1e6b7a');
        drawWaterWaves();
    } 
    else {
        grad.addColorStop(0, '#0a0a2e');
        grad.addColorStop(1, '#1a0033');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        drawStarsAndGalaxy();
        drawHill(hill1BaseHeight, hill1Amplitude, hill1Stretch, '#2c1a4d');
        drawHill(hill2BaseHeight, hill2Amplitude, hill2Stretch, '#1f1438');
    }
    trees.forEach(tree => drawTree(tree.x, tree.color));
}

function drawHill(baseH, amp, stretch, color){
    ctx.beginPath();
    ctx.moveTo(0, window.innerHeight);
    for(let x = 0; x <= window.innerWidth; x += 5){
        const y = window.innerHeight - baseH + Math.sin((sceneOffset * 0.15 + x) * stretch * 0.02) * amp;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(window.innerWidth, window.innerHeight);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawFireEffect(){
    ctx.fillStyle = 'rgba(255,100,0,0.75)';
    for(let i=0; i<10; i++){
        const x = 40 + i*65 + Math.sin(Date.now()/180 + i)*22;
        ctx.fillRect(x, window.innerHeight-130, 26, 110);
    }
}

function drawWaterWaves(){
    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.lineWidth = 6;
    for(let i=0; i<7; i++){
        ctx.beginPath();
        ctx.moveTo(0, window.innerHeight - 85 - i*17);
        for(let x=0; x<window.innerWidth; x+=28){
            ctx.lineTo(x, window.innerHeight - 85 - i*17 + Math.sin(x/40 + Date.now()/280)*13);
        }
        ctx.stroke();
    }
}

function drawStarsAndGalaxy(){
    ctx.fillStyle = '#ffffff';
    for(let i=0; i<130; i++){
        const x = (i*31 + Date.now()/45) % window.innerWidth;
        const y = 35 + (i%48)*15;
        ctx.globalAlpha = 0.6 + Math.random()*0.4;
        ctx.fillRect(x, y, 1.8, 1.8);
    }
    ctx.globalAlpha = 1;
}

function drawPlatforms(){platforms['forEach'](({x:_0x2470c3,w:_0x77636})=>{const _0x1d6050=_0x4de2;ctx[_0x1d6050(0x14a)]=_0x1d6050(0x168),ctx[_0x1d6050(0x153)](_0x2470c3,canvasHeight-platformHeight,_0x77636,platformHeight+(window['innerHeight']-canvasHeight)/0x2),sticks['last']()['x']<_0x2470c3&&(ctx[_0x1d6050(0x14a)]=_0x1d6050(0x149),ctx[_0x1d6050(0x153)](_0x2470c3+_0x77636/0x2-perfectAreaSize/0x2,canvasHeight-platformHeight,perfectAreaSize,perfectAreaSize));});}function drawHero(){const _0x460d53=_0x56fb3e;ctx[_0x460d53(0x155)](),ctx['fillStyle']=_0x460d53(0x168),ctx['translate'](heroX-heroWidth/0x2,heroY+canvasHeight-platformHeight-heroHeight/0x2),drawRoundedRect(-heroWidth/0x2,-heroHeight/0x2,heroWidth,heroHeight-0x4,0x5);const _0x31d02b=0x5;ctx[_0x460d53(0x158)](),ctx[_0x460d53(0x152)](_0x31d02b,11.5,0x3,0x0,Math['PI']*0x2,![]),ctx['fill'](),ctx[_0x460d53(0x158)](),ctx[_0x460d53(0x152)](-_0x31d02b,11.5,0x3,0x0,Math['PI']*0x2,![]),ctx[_0x460d53(0x150)](),ctx[_0x460d53(0x158)](),ctx['fillStyle']=_0x460d53(0x189),ctx[_0x460d53(0x152)](0x5,-0x7,0x3,0x0,Math['PI']*0x2,![]),ctx[_0x460d53(0x150)](),ctx[_0x460d53(0x14a)]=_0x460d53(0x149),ctx['fillRect'](-heroWidth/0x2-0x1,-0xc,heroWidth+0x2,4.5),ctx[_0x460d53(0x158)](),ctx[_0x460d53(0x173)](-0x9,-14.5),ctx[_0x460d53(0x159)](-0x11,-18.5),ctx['lineTo'](-0xe,-8.5),ctx[_0x460d53(0x150)](),ctx[_0x460d53(0x158)](),ctx[_0x460d53(0x173)](-0xa,-10.5),ctx[_0x460d53(0x159)](-0xf,-3.5),ctx[_0x460d53(0x159)](-0x5,-0x7),ctx['fill'](),ctx[_0x460d53(0x15d)]();}function drawRoundedRect(_0x5d515c,_0x3da134,_0x59f095,_0x3a3d16,_0x1520c2){const _0x229657=_0x56fb3e;ctx[_0x229657(0x158)](),ctx['moveTo'](_0x5d515c,_0x3da134+_0x1520c2),ctx['lineTo'](_0x5d515c,_0x3da134+_0x3a3d16-_0x1520c2),ctx[_0x229657(0x16a)](_0x5d515c,_0x3da134+_0x3a3d16,_0x5d515c+_0x1520c2,_0x3da134+_0x3a3d16,_0x1520c2),ctx['lineTo'](_0x5d515c+_0x59f095-_0x1520c2,_0x3da134+_0x3a3d16),ctx[_0x229657(0x16a)](_0x5d515c+_0x59f095,_0x3da134+_0x3a3d16,_0x5d515c+_0x59f095,_0x3da134+_0x3a3d16-_0x1520c2,_0x1520c2),ctx[_0x229657(0x159)](_0x5d515c+_0x59f095,_0x3da134+_0x1520c2),ctx['arcTo'](_0x5d515c+_0x59f095,_0x3da134,_0x5d515c+_0x59f095-_0x1520c2,_0x3da134,_0x1520c2),ctx[_0x229657(0x159)](_0x5d515c+_0x1520c2,_0x3da134),ctx[_0x229657(0x16a)](_0x5d515c,_0x3da134,_0x5d515c,_0x3da134+_0x1520c2,_0x1520c2),ctx[_0x229657(0x150)]();}function drawTree(_0x5c7de1,_0x5a4d6c){const _0x20a719=_0x56fb3e;ctx[_0x20a719(0x155)](),ctx[_0x20a719(0x15f)]((-sceneOffset*backgroundSpeedMultiplier+_0x5c7de1)*hill1Stretch,getTreeY(_0x5c7de1,hill1BaseHeight,hill1Amplitude));const _0x12b52b=0x5,_0x12ab39=0x2,_0x128c74=0x19,_0x27dcda=0xa;ctx[_0x20a719(0x14a)]=_0x20a719(0x13e),ctx['fillRect'](-_0x12ab39/0x2,-_0x12b52b,_0x12ab39,_0x12b52b),ctx[_0x20a719(0x158)](),ctx['moveTo'](-_0x27dcda/0x2,-_0x12b52b),ctx[_0x20a719(0x159)](0x0,-(_0x12b52b+_0x128c74)),ctx[_0x20a719(0x159)](_0x27dcda/0x2,-_0x12b52b),ctx['fillStyle']=_0x5a4d6c,ctx[_0x20a719(0x150)](),ctx[_0x20a719(0x15d)]();}function getHillY(_0x4d2875,_0x1edd2d,_0x323dbe,_0x1c441d){const _0x380089=_0x56fb3e,_0x3b71da=window['innerHeight']-_0x1edd2d;return Math[_0x380089(0x163)]((sceneOffset*backgroundSpeedMultiplier+_0x4d2875)*_0x1c441d)*_0x323dbe+_0x3b71da;}function getTreeY(_0x5d8a8b,_0x2bf55f,_0x588583){const _0x2cb960=_0x56fb3e,_0x1893c0=window['innerHeight']-_0x2bf55f;return Math[_0x2cb960(0x163)](_0x5d8a8b)*_0x588583+_0x1893c0;}function _0x4f26(){const _0x566214=['sinus','26901LCxxwL','128jFjSMH','innerWidth','resize','black','mouseup','arcTo','find','last','none','introduction','game','keydown','block','key','moveTo','innerText','stroke','#6D8821','addColorStop','707165xpVrYR','display','getElementById','Stick\x20is\x20','score','style','requestAnimationFrame','transitioning','addEventListener','534qJXmHp','height','opacity','click','length','lineWidth','875670lKIimM','#659F1C','white','Wrong\x20phase','prototype','#FEF1E1','#7D833C','3IXhWZV','restart','clearRect','52335eOPdgk','#BBD691','random','walking','preventDefault','stretching','8550470yRoFxW','red','fillStyle','getContext','innerHeight','3888740PEupvE','#95C629','createLinearGradient','fill','turning','arc','fillRect','width','save','#8FAC34','535731aUmFKq','beginPath','lineTo','rotate','falling','perfect','restore','floor','translate','rotation','push','waiting'];_0x4f26=function(){return _0x566214;};return _0x4f26();}

// === IMPROVED BACKGROUND MUSIC SYSTEM ===
const bgMusic = document.getElementById('bgMusic');

const surahList = {
    1: "https://server8.mp3quran.net/afs/001.mp3",   // ফাতিহা
    2: "https://ayatulkursi.org/wp-content/uploads/2026/04/Ayatul-Kursi-Full-Beautiful-Recitation.mp3",   // আয়াতুল কুরসী
    3: "https://server8.mp3quran.net/afs/113.mp3",   // ফালাক
    4: "https://server8.mp3quran.net/afs/114.mp3",   // নাস
    5: "https://server8.mp3quran.net/afs/112.mp3",   // ইখলাস
    6: "https://server8.mp3quran.net/afs/108.mp3",   // কাওসার
    7: "https://server8.mp3quran.net/afs/107.mp3",   // মাউন
    8: "https://server8.mp3quran.net/afs/103.mp3",   // আসর
    9: "https://server8.mp3quran.net/afs/110.mp3",   // নাসর
    10:"https://server8.mp3quran.net/afs/109.mp3"    // কাফিরুন
};

function playLevelMusic(level) {
    if (!bgMusic) return;
    
    const url = surahList[level] || surahList[1];
    
    if (bgMusic.src !== url) {
        bgMusic.src = url;
        bgMusic.volume = 0.6;
        
        bgMusic.play().catch(err => {
            console.log("Music play prevented by browser:", err);
        });
    }
}

// Reset Game এ মিউজিক চালু
const originalReset = resetGame;
resetGame = function() {
    originalReset();
    setTimeout(() => playLevelMusic(currentLevel), 100);
};

// Level Complete এ মিউজিক চেঞ্জ
const originalCheck = checkLevelComplete;
checkLevelComplete = function() {
    if (score >= targetScore) {
        phase = 'waiting';
        levelCompleteElement.style.display = 'block';
        setTimeout(() => {
            currentLevel++;
            targetScore += 6;
            resetGame();
            playLevelMusic(currentLevel);
        }, 1800);
    }
};

// ==================== MOBILE TOUCH SUPPORT ====================
const canvasElement = document.getElementById('game');

function handleTouchStart(e) {
    e.preventDefault();
    if (phase === 'waiting') {
        lastTimestamp = undefined;
        introductionElement.style.opacity = 0;
        phase = 'stretching';
        window.requestAnimationFrame(animate);
    }
}

function handleTouchEnd(e) {
    e.preventDefault();
    if (phase === 'stretching') {
        phase = 'turning';
    }
}

// Add Touch Events
canvasElement.addEventListener('touchstart', handleTouchStart, { passive: false });
canvasElement.addEventListener('touchend', handleTouchEnd, { passive: false });
canvasElement.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });