const dialogue = [
    { speaker: "上", text: "予有宿疾，往往而劇，元孫如彼其微弱。予觀今日之形勢，不可以待小兒之成長。未知卿等之意以爲何如？", mood: 20, stance: 0 },
    { speaker: "瑬", text: "朝野方頌岡陵之祝，而殿下遽出此言，臣等罔知所達。", mood: 25, stance: -5 },
    { speaker: "上", text: "非徒疾病如此，國事日阽於艱危，脱有不諱，幼沖之主恐不能擔當大器。予欲於大君中擇立爾。", mood: 40, stance: 10 },
    { speaker: "瑬", text: "今此下教，雖出於爲宗社之大計，而臣等惶惑不知所言，宜博詢諸臣。", mood: 45, stance: 0 },
    { speaker: "瑞鳳", text: "考諸往牒，太子不在，繼以太孫，此乃不易之常經。反常行權，恐非國家之福。", mood: 50, stance: -15 },
    { speaker: "上", text: "雖在治平之世，必以國有長君爲福，况今日乎？", mood: 60, stance: 5 },
    { speaker: "悦", text: "瑞鳳之言，正合臣意。殿下雖有微恙，春秋鼎盛，元孫雖曰微弱，已至十歲。宗統甚重，恐不可輕議也。", mood: 60, stance: -10 },
    { speaker: "自點", text: "殿下以疾病之未平、時事之艱虞，爲宗社、生民之大計，而發此言，宜更詢于諸臣而決之。", mood: 65, stance: 0 },
    { speaker: "敬輿", text: "臣之愚見，與瑞鳳無異。世嫡承統，今古之常經，常經之外更無所陳。今者擧國之係望於元孫已久，若聞此言，則中外人心，必皆波蕩，甚可懼也。", mood: 75, stance: -20 },
    { speaker: "上", text: "我世祖不傳於元孫，傳於睿宗，當時朝臣無異議，果皆不忠者耶？大臣當國家之大事，宜任其責，而徒以循常之談，爲塞責之地，此豈大臣之道耶？", mood: 85, stance: 15 },
    { speaker: "上", text: "所谓人心波蕩者，亦不然。行權而得中，乃是鎮定之道，有何波蕩之憂乎？", mood: 90, stance: 10 },
    { speaker: "上", text: "（謂瑬曰）此事專在於領相，卿其決之。", mood: 100, stance: 5 },
    { speaker: "瑬", text: "臣雖忝首相，顧安敢獨斷乎？今日之擧，未見其必係於存亡，而欲行非常之道，此臣等之所以不敢輕議也。", mood: 95, stance: -10 },
    { speaker: "上", text: "古之大臣擔當國事，不知有其身。今卿等知其可，而不肯言，何也？", mood: 100, stance: 15 },
    { speaker: "瑬", text: "德宗在東宮，昇遐於天順丁丑，而睿宗繼統於戊子... 光廟之建儲如此，未知何故也。", mood: 85, stance: -5 },
    { speaker: "上", text: "月山大君則性質不慧云，而當時成宗之年，亦已過十歲耶？", mood: 80, stance: 5 },
    { speaker: "瑬", text: "成宗生於丁丑德宗升遐之歲，故逮戊子世祖升遐之日，年十二矣。", mood: 80, stance: -5 },
    { speaker: "上", text: "以序言之，則當立者月山，而事有隨時變通者，故不得不如此爾。", mood: 90, stance: 15 },
    { speaker: "瑬", text: "當世祖之世，國家無事，而有此反常之擧，大聖人處事，誠未可量，此蓋出於擇賢耶？", mood: 90, stance: -5 },
    { speaker: "上", text: "世祖朝事，多危疑，故必欲立長君。予亦豈不知循序之爲至順也？第惟今日之勢，必須國有長君，然後可以保宗社之重也。", mood: 100, stance: 20 },
    { speaker: "德泂", text: "臣之意，亦以瑞鳳之言爲然也。", mood: 100, stance: -5 },
    { speaker: "仁垕", text: "殿下之意，爲宗社之大計，惟在聖斷耳。", mood: 95, stance: 15 },
    { speaker: "時白", text: "洪、李二大臣之言，俱是經常之道，臣則以兩臣之意爲然也。", mood: 95, stance: -10 },
    { speaker: "景奭", text: "若一行處變之擧，而反致四方之疑惑，則雖以利害言之，亦不知其可也。", mood: 100, stance: -10 },
    { speaker: "植", text: "書生之見，只守常道，寧知權變？", mood: 100, stance: -10 },
    { speaker: "上", text: "所謂書生，平日讀書，而不知用權之道，則雖腹有詩書，亦安用哉？", mood: 100, stance: 20 },
    { speaker: "植", text: "臣恐不守經，則反不得安也。", mood: 100, stance: -5 },
    { speaker: "壽賢", text: "國家重事，不可以一二人之見決之，須熟講於大臣而爲之。", mood: 100, stance: 0 },
    { speaker: "堉", text: "世祖朝國家寧謐，故能行反常之擧，今日形勢異於當時，恐不可輕易行之也。", mood: 100, stance: -10 },
    { speaker: "太和", text: "臣之意與堉同矣。", mood: 100, stance: -5 },
    { speaker: "上", text: "兩司長官，亦各言其意。", mood: 100, stance: 0 },
    { speaker: "楘", text: "三代以後，承統有序，若遽行權道，則必有大患矣。", mood: 100, stance: -20 },
    { speaker: "爾徵", text: "宗社之計，須與大臣議定，必欲問臣，但有守經而已。", mood: 100, stance: -15 },
    { speaker: "上", text: "此事務須大臣決之。卿等但為此常談，一朝予若不諱，卿等何以為計耶？", mood: 100, stance: 5 },
    { speaker: "自點", text: "此舉出於聖上之深思慮，宜速斷定，何必持難耶？", mood: 90, stance: 20 },
    { speaker: "上", text: "此言是也。", mood: 80, stance: 10 },
    { speaker: "瑬", text: "群臣之言，似與臣意相反矣。", mood: 95, stance: -10 },
    { speaker: "上", text: "然則卿之見，果以為何如耶？", mood: 95, stance: 5 },
    { speaker: "瑬", text: "癸亥反正之舉、南漢出城之事，豈非非常舉措？今也臣民之望，非不已屬於元孫。若上意已定，則臣何敢可否於其間哉？", mood: 90, stance: -5 },
    { speaker: "上", text: "卿之意，與予合矣。大君雖有二人，皆無可取，故以此計也。", mood: 85, stance: 15 },
    { speaker: "瑬", text: "讓寧大君多失德、敗度之事，故朝臣有廢立之請。今則元孫幼沖，失德未彰，所以人心之驚惑也。", mood: 95, stance: -10 },
    { speaker: "上", text: "元孫之師傅，皆在坐中，豈不明知其賢不肖耶？", mood: 100, stance: 5 },
    { speaker: "堉", text: "元孫幼沖，別無失德矣。", mood: 100, stance: -10 },
    { speaker: "上", text: "元孫雖在沖年，若觀其氣質，則豈不知將來之所成就耶？", mood: 100, stance: 10 },
    { speaker: "瑬", text: "自上若下明教，則可以立決。", mood: 90, stance: -5 },
    { speaker: "上", text: "元孫性質不明，決非負荷之才也。", mood: 100, stance: 20 },
    { speaker: "植", text: "進講之時，可見其英發矣。", mood: 100, stance: -10 },
    { speaker: "景奭", text: "臣亦進參講書之列，而幼少之年，豈可預卜將來之成就耶？", mood: 100, stance: -5 },
    { speaker: "上", text: "（調自點）洛興未畢前說，盍終言之？", mood: 95, stance: 5 },
    { speaker: "自點", text: "聖上之為宗社深謀遠慮，豈無所見哉？", mood: 90, stance: 15 },
    { speaker: "上", text: "然則卿之意，不以為不可也。", mood: 85, stance: 10 },
    { speaker: "瑬", text: "聖上之為此舉者，公天下之心也。寧有私意於其間哉？", mood: 90, stance: -5 },
    { speaker: "瑞鳳", text: "臣之所達，經常之道也。若夫處權，在聖上。", mood: 95, stance: -10 },
    { speaker: "上", text: "大臣之議，每以經常二字為執言之地，含糊傳會。棄職而去宜矣！", mood: 100, stance: 20 },
    { speaker: "上", text: "士君子行己處心，豈可如是黠鼠耶？", mood: 100, stance: 10 },
    { speaker: "史官", text: "時上怒甚，左右皆不敢言。", mood: 100, stance: 0 }
];

// 根据派系进行分配
const traditionalists = ["瑬", "瑞鳳", "悦", "敬輿", "景奭", "植", "堉", "太和", "楘", "爾徵", "德泂", "時白"];
const reformists = ["自點", "仁垕", "壽賢"]; // 權變或傾向王意者

const ministersData = {
    "瑬": { px: '12.5%', py: '0%', faction: 'trad' },
    "瑞鳳": { px: '25%', py: '0%', faction: 'trad' },
    "悦": { px: '37.5%', py: '0%', faction: 'trad' },
    "自點": { px: '50%', py: '0%', faction: 'reform' },
    "敬輿": { px: '62.5%', py: '0%', faction: 'trad' },
    "德泂": { px: '37.5%', py: '100%', faction: 'trad' },
    "仁垕": { px: '50%', py: '100%', faction: 'reform' },
    "時白": { px: '62.5%', py: '100%', faction: 'trad' },
    "景奭": { px: '75%', py: '100%', faction: 'trad' },
    "植": { px: '75%', py: '0%', faction: 'trad' },
    "壽賢": { px: '87.5%', py: '0%', faction: 'reform' },
    "堉": { px: '100%', py: '0%', faction: 'trad' },
    "太和": { px: '0%', py: '100%', faction: 'trad' },
    "楘": { px: '100%', py: '100%', faction: 'trad' },
    "爾徵": { px: '25%', py: '100%', faction: 'trad' }
};

function init() {
    const leftWing = document.getElementById('min-left');
    const rightWing = document.getElementById('min-right');
    leftWing.innerHTML = '<div class="wing-label">守經派</div>';
    rightWing.innerHTML = '<div class="wing-label">權變派</div>';

    Object.keys(ministersData).forEach(name => {
        const data = ministersData[name];
        const div = document.createElement('div');
        div.className = 'character minister';
        div.id = `char-${name}`;
        div.style.setProperty('--pos-x', data.px);
        div.style.setProperty('--pos-y', data.py);
        div.innerHTML = `<div class="silhouette min-sil"></div><div class="name-tag">${name}</div>`;
        
        if (data.faction === 'trad') leftWing.appendChild(div);
        else rightWing.appendChild(div);
    });

    document.getElementById('dialogue-box').addEventListener('click', nextDialogue);
}

function nextDialogue() {
    currentIndex++;
    if (currentIndex >= dialogue.length) return;
    const entry = dialogue[currentIndex];
    document.getElementById('speaker').innerText = entry.speaker;
    document.getElementById('speech').innerText = entry.text;
    document.querySelectorAll('.character').forEach(c => c.classList.remove('active'));
    if (entry.speaker === "上") document.getElementById('char-king').classList.add('active');
    else if (ministersData[entry.speaker]) document.getElementById(`char-${entry.speaker}`).classList.add('active');

    const moodFill = document.getElementById('mood-fill');
    moodFill.style.width = entry.mood + '%';
    document.getElementById('king-mood-label').innerText = entry.mood >= 95 ? "王之意：震怒" : "王之意：尋思";

    currentStanceBalance += entry.stance;
    currentStanceBalance = Math.max(10, Math.min(90, currentStanceBalance));
    document.getElementById('bar-traditional').style.width = (100 - currentStanceBalance) + '%';
    document.getElementById('bar-reform').style.width = currentStanceBalance + '%';

    if (entry.mood >= 95) {
        document.getElementById('app').classList.add('shake');
        setTimeout(() => document.getElementById('app').classList.remove('shake'), 400);
    }
}
window.onload = init;
