from os import name
from re import A
from select import select

name=input("あなたのお名前は？")
while(True):
    print("あなたは横浜の大学に通う1年生。3007でデザイン演習を受けていた。"
            "授業中に眠ってしまい起きたら夜の10時。"
            "学校は既に閉まっており扉は開かない。"
            "幸いにも閉じ込められていたのはもう一人いた。一緒に協力して脱出しよう！！")

    select=int(input("脱出する為に選択肢1~3を選んでね!"
                        "1.教室を見渡す"
                        "2.電気を付ける"
                        "3.ドアを無理矢理開ける"))

    if select==1:
        print("正解　次の選択肢に進んでね")
        break
    elif select==2:
        print("意味ないよ　はじめからやり直し")
        continue

    elif select==3:
        print("警報が作動したよ　はじめからやり直し")
        continue
while(True):
    select=int(input("道用先生のパソコンがあったよ。"
                    "「ミッション！ パソコンのパスワードを解除し出口の扉を解除せよ！」"
                    "パスワードの選択肢1~3を選んでね!"
                    "1.1129（誕生日）"
                    "2.3062（昨日の食材費）"
                    "3.1949（神奈川大学の創立年）"))

    if select==2:
        print("正解　次の選択肢に進んでね")
        break
    elif select==1:
        print("入力制限がかかったよ　はじめからやり直し")
        continue
    elif select==3:
        print("入力制限がかかったよ　はじめからやり直し")
        continue
while(True):
    select=int(input("扉が開いたよ。"
                "さぁどこへ行く？"
                "行くところの選択肢1~3を選んでね!"
                "1.1階へ降りる"
                "2.7階へ昇る"
                "3.21階へ昇る"))

    if select==2:
        print("正解　次の選択肢に進んでね")
        break
    elif select==1:
         print("どの扉も開かない　はじめからやり直し")
         continue
    elif select==3:
         print("外への出口がない　はじめからやり直し")
         continue
while(True):
    select=int(input("7階のテラスへ出ることができた。"
                "最後の問題だよ。"
                "一緒に脱出している子からヘリを呼ぼうと言われた。"
                "ただし、電話をかけるのはあなた。"
                "さぁ、どこへかける？"
                "1.消防署にかける"
                "2.大富豪にかける"
                "3.警察署にかける"))

    if select==2:
        print("正解")
        break
    elif select==1:
        print("不正解　ゲームオーバー")
        continue
    elif select==3:
        print("不正解　ゲームオーバー")
        continue
while(True):
    select=int(input("ヘリで脱出成功。"
                "ゲームクリア。お疲れ様"))
        