import { useState } from "react";
import "./App.css";

type Questions = {
  question: string;
  option: string[];
  correct: string;
};

type Answers = {
  question: string;
  answer: string;
  correct: boolean;
};

function App() {
  const [currentNo, setCurrentNo] = useState(0);
  const [next, setNext] = useState(false);
  const [answers, setAnswers] = useState<Answers[]>([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showScore, setShowScore] = useState(false);

  const questions: Questions[] = [
    {
      question: "エルディア復権派のスパイ通称フクロウの名前は？",
      option: [
        "ジーク・クルーガー",
        "エレン・クルーガー",
        "グリシャ・イエーガー",
        "グリシャ・クルーガー",
      ],
      correct: "エレン・クルーガー",
    },
    {
      question: "漫画進撃の巨人１巻で唯一印字されたページ数は？",
      option: ["13", "17", "18", "22"],
      correct: "13",
    },
    {
      question: "エルディア帝国が全世界を制圧した結果何が起きた？",
      option: [
        "全世界で戦争が活発化した",
        "巨人の力を持つ者が増えた",
        "内乱状態",
        "平和になった",
      ],
      correct: "内乱状態",
    },
    {
      question: "145代フリッツ王がパラディ島に逃げ込んだ理由は？",
      option: [
        "戦争を起こす為",
        "不戦が平和になると考えた為",
        "殺されそうになった為",
        "パラディ島には資源が豊富だった為",
      ],
      correct: "不戦が平和になると考えた為",
    },
    {
      question:
        "第104期訓練兵団におけるエレンの同期ユミルと始祖ユミル・フリッツの関係は？",
      option: ["同名", "無関係", "親戚", "同門"],
      correct: "同名",
    },
    {
      question: "エレンの死後、ミカサが結婚したとされている人物は？",
      option: [
        "コニー・スプリンガー",
        "マルコ・ボット",
        "トーマス・ワグナー",
        "ジャン・キルシュタイン",
      ],
      correct: "ジャン・キルシュタイン",
    },
    {
      question:
        "カルラ・イーターとも呼ばれるエレンの母親を捕食した王家の人間は？",
      option: [
        "サシャ・フリッツ",
        "ダイナ・フリッツ",
        "フリーダ・レイス",
        "ロッド・レイス",
      ],
      correct: "ダイナ・フリッツ",
    },
    {
      question: "ジークが着けている眼鏡は誰から受け継いだ物？",
      option: [
        "トム・クサヴァー",
        "マルセル・ガリアード",
        "ダリス・ザックレー",
        "キース・シャーディス",
      ],
      correct: "トム・クサヴァー",
    },
    {
      question:
        "「お前が始めた物語だろ」クルーガーがグリシャに厳しい言葉を放った理由は？",
      option: [
        "妹の死を無駄にしない様、生きさせる為",
        "グリシャに過去受けた仕打ちを憎んていた為",
        "マーレの追手が迫っていた為",
        "妹の死を悔やんでいた為",
      ],
      correct: "妹の死を無駄にしない様、生きさせる為",
    },
    {
      question: "アニメ進撃の巨人で一番いい曲は？",
      option: ["僕の戦争", "紅蓮の弓矢", "悪魔の子", "憧憬と屍の道"],
      correct: "憧憬と屍の道",
    },
  ];

  const handleQuestion = (answer: string) => {
    const newAnswer = {
      question: questions[currentNo].question,
      answer: answer,
      correct: answer === questions[currentNo].correct,
    };
    if (newAnswer.correct) {
      setScore((prev) => prev + 1);
      setFeedback("正解!!");
    } else {
      setFeedback("不正解...");
    }
    setAnswers([...answers, newAnswer]);
    setNext(true);
  };

  const goToNextQuestion = () => {
    const nextQuestion = currentNo + 1;
    if (nextQuestion < questions.length) {
      setCurrentNo(nextQuestion);
    } else {
      setShowScore(true);
    }
    setNext(false);
  };

  return (
    <div className="bg-[url(./img/bg3.jpg)] bg-cover">
      <div className="container mx-auto text-center h-screen flex items-center justify-center">
        {showScore ? (
          <div className="bg-[#ffda7b] w-[90%] h-[95%] md:h-[90%] text-[white] font-semibold shadow-2xl rounded-2xl">
            <h1 className="text-4xl py-7">スコア</h1>
            <h2 className="pb-3 text-6xl">
              {score}/{questions.length}
            </h2>
            <table className="mx-auto w-[90%] bg-[#fda246] border-[#ececec] mt-5 table-auto border-separate border-spacing-1">
              <thead>
                <tr className="">
                  <td className="w-[]">問題</td>
                  <td className="w-[]">解答</td>
                  <td className="w-[]">結果</td>
                </tr>
              </thead>
              <tbody className="text-sm">
                {answers.map((item) => (
                  <tr className={item.correct ? "correct" : "wrong"}>
                    <td>{item.question}</td>
                    <td>{item.answer}</td>
                    <td>{item.correct ? "○" : "×"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={() => window.location.reload()}
              className="py-4 px-9 mt-3 sm:mt-8 lg:mt-10 xl:mt-20 bg-[#fda246] rounded-2xl shadow-3xl"
            >
              再挑戦
            </button>
          </div>
        ) : (
          <div className="bg-[#ffda7b] h-[85%] w-[90%] shadow-xl max-w-3xl flex flex-col rounded-4xl">
            <div className="flex-1">
              <h1 className="text-5xl mt-10 text-[#ffffff] font-semibold">
                Attack on Titan Quiz
              </h1>
              <div className="mt-5 py-5 px-10 text-[#ffa600] bg-white inline-block drop-shadow-5xl rounded-2xl text-2xl font-semibold border border-[#d2d2d2]">
                {currentNo + 1} / {questions.length}
              </div>
              <div className="mt-10 text-2xl text-[#ffffff] font-semibold">
                {questions[currentNo].question}
              </div>
            </div>

            {next ? (
              <div className="feedback-sec flex-2 my-5 text-3xl font-semibold">
                <h2
                  className={`text-3xl py-5 ${
                    feedback == "正解!!" ? "text-[#ff5432]" : "text-[#5888ff]"
                  }`}
                >
                  {feedback}
                </h2>
                <p className="py-5 text-[white]">解答</p>
                <p className="text-[white]">{questions[currentNo].correct}</p>

                {currentNo === 9 ? (
                  <button
                    onClick={goToNextQuestion}
                    className="py-4 px-6 bg-[#ffa70e] text-xl mt-15 rounded-2xl text-[#f6f6f6] hover:bg-[#ffe5b7] hover:text-[#828282]"
                  >
                    結果
                  </button>
                ) : (
                  <button
                    onClick={goToNextQuestion}
                    className="py-4 px-6 bg-[#ffa70e] text-xl mt-15 rounded-2xl text-[#f6f6f6] hover:bg-[#ffe5b7] hover:text-[#828282]"
                  >
                    次の問題
                  </button>
                )}
              </div>
            ) : (
              <div
                className="flex flex-col justify-evenly flex-2 mx-auto w-[80%]"
                id="choice"
              >
                {questions[currentNo].option.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuestion(item)}
                    className="bg-[#ffbb34] text-[#ffffff] py-5 text-lg  rounded-2xl font-semibold hover:bg-[#fcf9d4] hover:cursor-pointer hover:text-[#7d7d7d] border border-[#ffebc8]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
