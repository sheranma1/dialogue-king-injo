const dialogue = [
    { speaker: "上", text: "予有宿疾，往往而劇，元孫如彼其微弱。予觀今日之形勢，不可以待小兒之成長。未知卿等之意以爲何如？", mood: 20, stance: 0 },
    { speaker: "瑬", text: "朝野方頌岡陵之祝，而殿下遽出此言，臣等罔知所達。", mood: 25, stance: -5 },
    { speaker: "上", text: "非徒疾病如此，國事日阽於艱危，脱有不諱，幼沖之主恐不能擔當大器。予欲於大君中擇立爾。", mood: 40, stance: 10 },
    { speaker: "瑬", text: "今此下教，雖出於爲宗社之大計，而臣等惶惑不知所言，宜博詢諸臣。", mood: 45, stance: 0 },
    { speaker: "瑞鳳", text: "考諸往牒，太子不在，繼以太孫，此乃不易之常經。反常行權，恐非國家之福。", mood: 50, stance: -15 },
    { speaker: "上", text: "雖在治平之世，必以國有長君爲福，况今日乎？", mood: 60, stance: 5 },
    { speaker: "悦", text: "瑞鳳之言，正合臣意。殿下雖有微恙，春秋鼎盛，元孫雖曰微弱，已至十歲。自古幼主之繼緒者何限？宗統甚重，恐不可輕議也。", mood: 60, stance: -10 },
    { speaker: "自點", text: "殿下以疾病之未平、時事之艱虞，爲宗社、生民之大計，而發此言，宜更詢于諸臣而決之。", mood: 65, stance: 0 },
    { speaker: "敬輿", text: "臣之愚見，與瑞鳳無異。世嫡承統，今古之常經，常經之外更無所陳。大抵能守常經，則雖屬艱虞，而猶可以保國。若遽用權道，則群情不服而多致患難。", mood: 75, stance: -20 },
    { speaker: "敬輿", text: "今者擧國之係望於元孫已久，若聞此言，則中外人心，必皆波蕩，甚可懼也。", mood: 80, stance: -5 },
    { speaker: "上", text: "我世祖不傳於元孫，傳於睿宗，當時朝臣無異議，果皆不忠者耶？大臣當國家之大事，宜任其責，而徒以循常之談，爲塞責之地，此豈大臣之道耶？", mood: 90, stance: 15 },
    { speaker: "上", text: "所謂人心波蕩者，亦不然。行權而得中，乃是鎮定之道，有何波蕩之憂乎？", mood: 95, stance: 10 },
    { speaker: "上", text: "（謂瑬曰）此事專在於領相，卿其決之。", mood: 100, stance: 5 },
    { speaker: "瑬", text: "臣雖忝首相，顧安敢獨斷乎？若明知宗社存亡決於此擧，則群臣固無敢異議者。", mood: 95, stance: -10 },
    { speaker: "瑬", text: "而今日之擧，未見其必係於存亡，而欲行非常之道，此臣等之所以不敢輕議也。", mood: 95, stance: -5 },
    { speaker: "上", text: "古之大臣擔當國事，不知有其身。我太宗朝讓寧大君之在東宮也，百官請廢之，至於庭請，是皆以國爲重，而不顧後患者也。", mood: 100, stance: 10 },
    { speaker: "上", text: "若使太宗不之許，則後日之禍有不可測，而猶且爲之。今卿等知其可，而不肯言，何也？", mood: 100, stance: 10 },
    { speaker: "瑬", text: "德宗在東宮，昇遐於天順丁丑，而睿宗繼統於戊子，則當時成廟年十二歲矣，月山大君又加長矣，而光廟之建儲如此，未知何故也。", mood: 85, stance: -5 },
    { speaker: "上", text: "月山大君則性質不慧云，而當時成宗之年，亦已過十歲耶？", mood: 80, stance: 5 },
    { speaker: "瑬", text: "成宗生於丁丑德宗升遐之歲，故逮戊子世祖升遐之日，年十二矣。", mood: 80, stance: -5 },
    { speaker: "上", text: "以序言之，則當立者月山，而事有隨時變通者，故不得不如此爾。若以長幼言之，則睿宗何以舍月山，而立成廟耶？", mood: 90, stance: 10 },
    { speaker: "瑬", text: "當世祖之世，國家無事，而有此反常之擧，大聖人處事，誠未可量，此蓋出於擇賢耶？", mood: 85, stance: -5 },
    { speaker: "上", text: "世祖朝事，多危疑，故必欲立長君。若出於擇賢，則成廟之聖，豈必不及於睿宗耶？予亦豈不知循序之爲至順也？第惟今日之勢，必須國有長君，然後可以保宗社之重也。", mood: 100, stance: 20 },
    { speaker: "德泂", text: "臣之意，亦以瑞鳳之言爲然也。", mood: 100, stance: -5 },
    { speaker: "仁垕", text: "殿下之意，爲宗社之大計，惟在聖斷耳。", mood: 95, stance: 15 },
    { speaker: "時白", text: "洪、李二大臣之言，俱是經常之道，臣則以兩臣之意爲然也。", mood: 95, stance: -10 },
    { speaker: "景奭", text: "國有長君，雖曰社稷之福，無易樹子，乃是先王之典。且國家安危之機，若一行處變之擧，而反致四方之疑惑，則雖以利害言之，亦不知其可也。", mood: 100, stance: -15 },
    { speaker: "植", text: "書生之見，只守常道，寧知權變？", mood: 100, stance: -10 },
    { speaker: "上", text: "所謂書生，平日讀書，而不知用權之道，則雖腹有詩書，亦安用哉？且今日定策，豈如權謀術數之難知者耶？", mood: 100, stance: 20 },
    { speaker: "植", text: "守經而宗社必危，行權而國家可安，則此擧未爲不可，而臣恐不守經，則反不得安也。", mood: 100, stance: -5 },
    { speaker: "壽賢", text: "國家重事，不可以一二人之見決之，須熟講於大臣而爲之。", mood: 100, stance: 0 },
    { speaker: "堉", text: "世祖朝國家寧謐，故能行反常之擧，今日形勢異於當時，恐不可輕易行之也。", mood: 100, stance: -10 },
    { speaker: "太和", text: "臣之意與堉同矣。", mood: 100, stance: -5 },
    { speaker: "上", text: "兩司長官，亦各言其意。", mood: 100, stance: 0 },
    { speaker: "楘", text: "三代以後，承統有序，若遽行權道，則必有大患矣。", mood: 100, stance: -20 }
];

const ministersData = {
    "瑬": { img: 'pixel_minister_old.png', filter: 'hue-rotate(0deg)' },
    "瑞鳳": { img: 'pixel_minister.png', filter: 'hue-rotate(90deg)' }, // Greenish
    "悦": { img: 'pixel_minister.png', filter: 'hue-rotate(0deg)' }, // Standard Blue
    "自點": { img: 'pixel_minister.png', filter: 'hue-rotate(180deg) saturate(1.5)' }, // Reddish
    "敬輿": { img: 'pixel_minister_old.png', filter: 'hue-rotate(45deg) brightness(0.8)' }, // Darker
    "德泂": { img: 'pixel_minister.png', filter: 'hue-rotate(240deg)' }, // Purple
    "仁垕": { img: 'pixel_minister.png', filter: 'contrast(1.5) brightness(1.2)' }, // Vibrant
    "時白": { img: 'pixel_minister_old.png', filter: 'sepia(0.5) hue-rotate(-30deg)' }, // Brownish
    "景奭": { img: 'pixel_minister.png', filter: 'grayscale(0.5) brightness(0.7)' }, // Faded
    "植": { img: 'pixel_minister_old.png', filter: 'hue-rotate(300deg)' }, // Magenta-ish
    "壽賢": { img: 'pixel_minister.png', filter: 'invert(0.1) hue-rotate(120deg)' }, // Teal
    "堉": { img: 'pixel_minister_old.png', filter: 'brightness(1.3) contrast(1.2)' }, // High-key
    "太和": { img: 'pixel_minister.png', filter: 'hue-rotate(60deg) saturate(0.5)' }, // Olive
    "楘": { img: 'pixel_minister_old.png', filter: 'hue-rotate(200deg) brightness(0.6)' } // Deep Blue
};

const ministersList = Object.keys(ministersData);
let currentIndex = -1;
let currentStanceBalance = 50; 

function init() {
    const container = document.getElementById('ministers-container');
    ministersList.forEach((name, index) => {
        const data = ministersData[name];
        const div = document.createElement('div');
        div.className = 'character minister';
        div.id = `char-${name}`;
        div.style.setProperty('--bg-img', `url('${data.img}')`);
        div.style.setProperty('--char-filter', data.filter);
        div.style.animationDelay = (0.05 * index) + 's';
        div.innerHTML = `
            <div class="silhouette min-sil"></div>
            <div class="name-tag">${name}</div>
        `;
        container.appendChild(div);
        setTimeout(() => div.classList.add('loaded'), 50);
    });

    setTimeout(() => document.getElementById('char-king').classList.add('loaded'), 100);

    document.getElementById('dialogue-box').addEventListener('click', nextDialogue);
}

function nextDialogue() {
    currentIndex++;
    if (currentIndex >= dialogue.length) {
        document.getElementById('speaker').innerText = "歷史結局";
        document.getElementById('speech').innerText = "【 廷議終局：群臣固守常經，王意終被擱置。元孫繼位，即後之昭顯世子子孫之哀史。 】";
        return;
    }

    const entry = dialogue[currentIndex];
    const speaker = entry.speaker;
    const text = entry.text;

    // 更新文本
    document.getElementById('speaker').innerText = speaker;
    document.getElementById('speech').innerText = text;

    // 立繪活躍狀態
    document.querySelectorAll('.character').forEach(c => c.classList.remove('active'));
    if (speaker === "上") {
        document.getElementById('char-king').classList.add('active');
    } else {
        const target = document.getElementById(`char-${speaker}`);
        if (target) target.classList.add('active');
    }

    // 更新心情條
    const moodFill = document.getElementById('mood-fill');
    moodFill.style.width = entry.mood + '%';
    const moodLabel = document.getElementById('king-mood-label');
    if (entry.mood < 40) moodLabel.innerText = "王之意：試探";
    else if (entry.mood < 70) moodLabel.innerText = "王之意：堅決";
    else if (entry.mood < 90) moodLabel.innerText = "王之意：慍怒";
    else {
        moodLabel.innerText = "王之意：震怒";
        moodFill.style.background = "#ff0000";
    }

    // 更新陣營平衡
    currentStanceBalance += entry.stance;
    currentStanceBalance = Math.max(10, Math.min(90, currentStanceBalance));
    
    document.getElementById('bar-traditional').style.width = (100 - currentStanceBalance) + '%';
    document.getElementById('bar-reform').style.width = currentStanceBalance + '%';

    // 震動特效
    if (entry.mood >= 90) {
        const app = document.getElementById('app');
        app.classList.remove('shake');
        void app.offsetWidth; // trigger reflow
        app.classList.add('shake');
    }
}

window.onload = init;
