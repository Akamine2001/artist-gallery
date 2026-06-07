import type { Locale } from "../i18n/config";

export type StoryChapter = {
  age: string;
  ageLabel: string;
  title: string;
  lines: string[];
};

export type StoryContent = {
  pageTitle: string;
  meta: { label: string; number: string; year: string };
  title: { line1: string; line2: string; line3: string };
  subtitle: string;
  chapters?: StoryChapter[];
  comingSoon?: { message: string };
  colophon: {
    credits: Array<{ label: string; value: string }>;
    back: string;
  };
};

const COMMON_TITLE = {
  line1: "A Life",
  line2: "Told In",
  line3: "Flowers",
};

const COMMON_META = { label: "STORY", number: "No.01", year: "2026" };

export const storyContent: Record<Locale, StoryContent> = {
  ja: {
    pageTitle: "花 — AGITO Studio",
    meta: COMMON_META,
    title: COMMON_TITLE,
    subtitle: "花",
    chapters: [
      {
        age: "25",
        ageLabel: "歳",
        title: "桜の木の下",
        lines: [
          "春の空気はまだ少し冷たかった。",
          "花々は空を埋め尽くし、まるで私を飲み込んでしまいそうなほど鮮やかに咲いている。",
          "不安と期待は渦のように絡み合い、「私」は少しずつ曖昧になっていく。",
        ],
      },
      {
        age: "22",
        ageLabel: "歳",
        title: "花束",
        lines: [
          "露をまとった白い花びらは、美しいまま、私のなかの何かを静かに壊していった。",
          "腕の中の花は生きている。",
          "ふと風が吹くたびに、消えてしまったものの名残だけがかすかに揺れた。",
        ],
      },
      {
        age: "18",
        ageLabel: "歳",
        title: "枯れた花",
        lines: [
          "花瓶の中の薔薇は、もう色を失い始めていた。",
          "終わることを知りながら、終わらせたくなかった。",
          "少女は信じている。愛があれば大丈夫だと。",
        ],
      },
      {
        age: "15",
        ageLabel: "歳",
        title: "フローラルノート",
        lines: [
          "誰とも違う人間になりたかった。世界の中心に立ちたかった。",
          "けれど少女に許されるのは、せいぜい「花」でいること。",
          "なぜなのか、15歳の私には分からなかった。",
        ],
      },
      {
        age: "10",
        ageLabel: "歳",
        title: "汚れた花柄のワンピース",
        lines: [
          "走って、転んで、また笑って。",
          "舞い上がる土埃が、花の模様を隠していく。額に張りついた前髪も気にならなかった。",
          "鳥が空を渡っていく。",
          "あの鳥も私も、自由という言葉をまだ知らなかった。",
        ],
      },
      {
        age: "6",
        ageLabel: "歳",
        title: "誕生日の花畑",
        lines: [
          "ぼやけた光の中にある記憶だった。",
          "思い出せるのは、いくつかの断片だけ。",
          "それでも、あの日のぬくもりは今も肌に残っている。",
        ],
      },
      {
        age: "0",
        ageLabel: "歳",
        title: "名前の中の「花」",
        lines: [
          "自分の名前を知らないまま生まれた。",
          "花という文字があることも知らなかった。",
          "初めて空気を吸い込んだその瞬間から、私はひとつのうつわになった。",
          "感情も、期待も、名前に込められた願いも、少しずつその中へ染み込んでいく。",
          "私はただ、それらとともに生きている。",
        ],
      },
      {
        age: "26",
        ageLabel: "歳",
        title: "クリームフラワー",
        lines: [
          "ろうそくの火を吹き消し、目を閉じる。",
          "口に広がる甘さのあとに、ほんの少しだけ苦みが残る。",
          "大人になることは、思っていたような幸せの行き着く先ではなかった。",
          "でも、少しだけ楽しさも味わえるようになってきた。",
          "私は今も変わらず、ひとつのうつわだ。",
          "花は今も花のまま。",
          "ただそこに咲きながら、私とともにこの世界にいる。",
        ],
      },
    ],
    colophon: {
      credits: [
        { label: "Words", value: "Cayla" },
        { label: "Issue", value: "No.01 / 2026" },
      ],
      back: "← AGITO に戻る",
    },
  },

  zh: {
    pageTitle: "花 — AGITO Studio",
    meta: COMMON_META,
    title: COMMON_TITLE,
    subtitle: "花",
    chapters: [
      {
        age: "25",
        ageLabel: "岁",
        title: "樱花树下",
        lines: [
          "空气微凉，樱花却热烈的仿佛将我吞噬。",
          "不安与期待如同漩涡交缠，“我”变得一点点地模糊起来。",
        ],
      },
      {
        age: "22",
        ageLabel: "岁",
        title: "花束",
        lines: [
          "带着露珠的白色花瓣，静静地将我的一部分摧毁。",
          "手中的花束依然鲜活。",
          "那一部分的我，却只在偶尔吹过的微风里，残留着些许痕迹。",
        ],
      },
      {
        age: "18",
        ageLabel: "岁",
        title: "枯萎的花",
        lines: [
          "望着花瓶里枯萎的玫瑰，带着满心的爱意试图留住那必然流逝的自然。",
          "少女的天真总是认为真爱可以抵挡一切。",
        ],
      },
      {
        age: "15",
        ageLabel: "岁",
        title: "花香味的香水",
        lines: [
          "真正的少女心事是自命不凡的野心与被迫接受社会规训之间的矛盾。",
          "15岁的自己不明白为什么好像只有成为“花”才能找到自己的位置。",
        ],
      },
      {
        age: "10",
        ageLabel: "岁",
        title: "弄脏的花裙子",
        lines: [
          "奔跑嬉戏时卷起的尘土模糊了花的模样，汗水弄湿了额前的头发。",
          "即便满身泥土，却也乐在其中。",
          "天空中的鸟儿也和我一般自由地不知自由究竟是什么。",
        ],
      },
      {
        age: "6",
        ageLabel: "岁",
        title: "生日的花田",
        lines: [
          "模糊却又带着闪光的美好。",
          "能回忆起的只是几帧画面的留存，唯独那日的温暖清晰的留在皮肤上。",
        ],
      },
      {
        age: "0",
        ageLabel: "岁",
        title: "名字里的「花」",
        lines: [
          "来到这世上时，不知自己的名字。也不知那一个「花」字。",
          "从第一次呼吸到空气的那一刻起，我就成为了一个载体。",
          "感情、期待、还有寄托在名字里的心愿——一点一点地渗入其中。",
          "而我，只是静静地承载着这个世界的一切。",
        ],
      },
      {
        age: "26",
        ageLabel: "岁",
        title: "奶油花",
        lines: [
          "吹灭蜡烛，闭上双眼。",
          "入嘴的甜蜜在最后却尝到一丝苦味。",
          "成为大人好像并不像想象中那样成为了幸福的终点，",
          "却也能尝出一些乐趣。",
          "我依然是一个载体，承载着这个世界的一切。",
          "而花依然是花，也只是花。",
        ],
      },
    ],
    colophon: {
      credits: [
        { label: "Words", value: "Cayla" },
        { label: "Issue", value: "No.01 / 2026" },
      ],
      back: "← 返回 AGITO",
    },
  },

  en: {
    pageTitle: "Flowers — AGITO Studio",
    meta: COMMON_META,
    title: COMMON_TITLE,
    subtitle: "Flowers",
    comingSoon: {
      message: "Coming soon.",
    },
    colophon: {
      credits: [
        { label: "Words", value: "Cayla" },
        { label: "Issue", value: "No.01 / 2026" },
      ],
      back: "← Return to AGITO",
    },
  },
};
