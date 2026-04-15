const specs = {
  furyWarrior: {
    name: '狂暴战士',
    subtitle: '双持大风车，怒气就是你的 Wi-Fi',
    desc: '你情绪到位就输出拉满。遇事先冲锋，解释留给战复之后。队友觉得你很吵，但没有你团本气氛就不够燃。',
  },
  frostMage: {
    name: '冰霜法师',
    subtitle: '控场艺术家，主打“你别动”',
    desc: '你脑子很快，手也很稳。喜欢让世界慢下来，再优雅地打出连锁反应。你的核心理念是：能风筝就不近战。',
  },
  restoDruid: {
    name: '恢复德鲁伊',
    subtitle: '团队保姆，树皮覆盖全场',
    desc: '你看似佛系，实际掌控全局。别人血线坐过山车时，你已经提前铺好了 HOT。你不说话，但大家都离不开你。',
  },
  retPaladin: {
    name: '惩戒骑士',
    subtitle: '圣光审判，顺便兼职气氛组',
    desc: '你是又能打又能救的全能选手。平时乐呵呵，关键时刻一锤定音。你相信正义，也相信暴击数字。',
  },
  shadowPriest: {
    name: '暗影牧师',
    subtitle: '理智条越低，输出越高',
    desc: '你喜欢复杂机制和延迟爆发，越打越上头。别人看到负面效果会慌，你会说：这才刚进入状态。',
  },
  demonWarlock: {
    name: '恶魔术士',
    subtitle: '召唤大军，主打一个“人多”',
    desc: '你热爱“准备充分”这个词。战斗前铺垫很多，但开打后像开了工厂流水线。宠物越多，你越有安全感。',
  },
  outlawRogue: {
    name: '狂徒潜行者',
    subtitle: '骰子一摇，命运开飙',
    desc: '你喜欢即兴发挥，热衷冒险和高节奏。无论地图还是副本，你总能找到奇怪但有效的走位路线。',
  },
  bmHunter: {
    name: '兽王猎人',
    subtitle: '你在指挥宠物，宠物在带飞你',
    desc: '你对距离感和节奏感天赋异禀。边跑边打是你的舒适区，任何场地都能打成移动射击课堂。',
  },
};

const questions = [
  {
    title: '1. 你在半夜饿醒，冰箱里只有一根黄瓜和一瓶可乐，你会？',
    options: [
      { text: 'A. 抄起黄瓜双持乱舞，先打空气热身', spec: 'furyWarrior' },
      { text: 'B. 把可乐冷冻成冰沙，精准控温后再喝', spec: 'frostMage' },
      { text: 'C. 给黄瓜浇水并观察它是否还能活', spec: 'restoDruid' },
      { text: 'D. 呼叫宠物先闻闻有没有陷阱', spec: 'bmHunter' },
    ],
  },
  {
    title: '2. 电梯里有人突然唱歌跑调了，你第一反应是？',
    options: [
      { text: 'A. 当场开嗓和声，强行带回调', spec: 'retPaladin' },
      { text: 'B. 默默给自己上个痛，等待爆发窗口', spec: 'shadowPriest' },
      { text: 'C. 召个小鬼陪唱，人数优势压制尴尬', spec: 'demonWarlock' },
      { text: 'D. 退到角落观察出口，准备潜行离场', spec: 'outlawRogue' },
    ],
  },
  {
    title: '3. 如果让你当小区广播员，你会播什么？',
    options: [
      { text: 'A. “全体集合，马上冲锋晨跑！”', spec: 'furyWarrior' },
      { text: 'B. “请大家有序移动，慢一点更安全”', spec: 'frostMage' },
      { text: 'C. “注意补水和作息，我会持续关注你们”', spec: 'restoDruid' },
      { text: 'D. “听我倒数三秒，圣光即将照耀菜市场”', spec: 'retPaladin' },
    ],
  },
  {
    title: '4. 你组队打本，队友突然全员掉线，你会？',
    options: [
      { text: 'A. 一边输出一边祈祷他们回来', spec: 'retPaladin' },
      { text: 'B. 利用宠物拖时间，自己疯狂走位', spec: 'bmHunter' },
      { text: 'C. 先控住怪，然后优雅地单刷几秒', spec: 'frostMage' },
      { text: 'D. 开始和虚空生物开会讨论后续方案', spec: 'shadowPriest' },
    ],
  },
  {
    title: '5. 你在路上捡到一个会说话的石头，它说想当你队友。你？',
    options: [
      { text: 'A. “欢迎加入，先签灵魂契约”', spec: 'demonWarlock' },
      { text: 'B. “来，先练习翻滚躲技能”', spec: 'outlawRogue' },
      { text: 'C. “你站我后面，我在前面转风车”', spec: 'furyWarrior' },
      { text: 'D. “我先给你喂点零食，别害怕”', spec: 'restoDruid' },
    ],
  },
  {
    title: '6. 你最喜欢哪种“胜利姿势”？',
    options: [
      { text: 'A. 展开披风，原地发光 3 秒', spec: 'retPaladin' },
      { text: 'B. 把地面冻出花纹，站中间拍照', spec: 'frostMage' },
      { text: 'C. 从背后突然出现然后说“结束了”', spec: 'outlawRogue' },
      { text: 'D. 让两只宠物帮你摆造型', spec: 'bmHunter' },
    ],
  },
  {
    title: '7. 如果周一能删除一件事，你会删掉？',
    options: [
      { text: 'A. “等待时间”这个概念', spec: 'furyWarrior' },
      { text: 'B. 人类的体温，让世界冷静下来', spec: 'frostMage' },
      { text: 'C. 低血线焦虑，让大家都稳稳活着', spec: 'restoDruid' },
      { text: 'D. 正常沟通方式，改成心灵低语', spec: 'shadowPriest' },
    ],
  },
  {
    title: '8. 打开你的背包，最可能塞满的是？',
    options: [
      { text: 'A. 宏命令草稿和奇怪的召唤材料', spec: 'demonWarlock' },
      { text: 'B. 绷带、药水和“以防万一”道具', spec: 'restoDruid' },
      { text: 'C. 骰子、硬币和来路不明的钥匙', spec: 'outlawRogue' },
      { text: 'D. 圣印贴纸和闪亮武器保养油', spec: 'retPaladin' },
    ],
  },
  {
    title: '9. 团队里有人说“这波肯定过不了”，你会怎么回？',
    options: [
      { text: 'A. “别怕，我宠物已经就位”', spec: 'bmHunter' },
      { text: 'B. “给我 5 秒准备，恶魔工业启动”', spec: 'demonWarlock' },
      { text: 'C. “你们稳住，我的理智先下去一点”', spec: 'shadowPriest' },
      { text: 'D. “冲就完了，失败也要帅”', spec: 'furyWarrior' },
    ],
  },
  {
    title: '10. 旅行时你最在意哪件事？',
    options: [
      { text: 'A. 线路是否适合边跑边打卡', spec: 'bmHunter' },
      { text: 'B. 酒馆里有没有能掷骰子的桌子', spec: 'outlawRogue' },
      { text: 'C. 城市夜色是否适合神神叨叨', spec: 'shadowPriest' },
      { text: 'D. 终点是否能来一段圣光谢幕', spec: 'retPaladin' },
    ],
  },
];

const state = {
  current: 0,
  scores: Object.keys(specs).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {}),
};

const introEl = document.getElementById('intro');
const quizEl = document.getElementById('quiz');
const resultEl = document.getElementById('result');

const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const questionTitle = document.getElementById('questionTitle');
const optionsEl = document.getElementById('options');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');

const resultTitle = document.getElementById('resultTitle');
const resultSubtitle = document.getElementById('resultSubtitle');
const resultDesc = document.getElementById('resultDesc');

function show(section) {
  [introEl, quizEl, resultEl].forEach((el) => el.classList.remove('active'));
  section.classList.add('active');
}

function renderQuestion() {
  const q = questions[state.current];
  questionTitle.textContent = q.title;
  progressText.textContent = `第 ${state.current + 1} / ${questions.length} 题`;

  const percent = ((state.current + 1) / questions.length) * 100;
  progressFill.style.width = `${percent}%`;

  optionsEl.innerHTML = '';
  q.options.forEach((opt) => {
    const button = document.createElement('button');
    button.className = 'option';
    button.type = 'button';
    button.textContent = opt.text;
    button.addEventListener('click', () => chooseOption(opt.spec));
    optionsEl.appendChild(button);
  });
}

function chooseOption(spec) {
  state.scores[spec] += 1;
  state.current += 1;

  if (state.current < questions.length) {
    renderQuestion();
    return;
  }

  showResult();
}

function showResult() {
  const winner = Object.entries(state.scores).sort((a, b) => b[1] - a[1])[0][0];
  const data = specs[winner];

  resultTitle.textContent = `你的 WOWTI 是：${data.name}`;
  resultSubtitle.textContent = data.subtitle;
  resultDesc.textContent = data.desc;
  show(resultEl);
}

function reset() {
  state.current = 0;
  Object.keys(state.scores).forEach((k) => {
    state.scores[k] = 0;
  });
}

startBtn.addEventListener('click', () => {
  reset();
  show(quizEl);
  renderQuestion();
});

restartBtn.addEventListener('click', () => {
  reset();
  show(introEl);
});

show(introEl);
