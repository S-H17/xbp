name=input("名前を教えて下さい")
waist=input("腹囲は？")
age=input("年齢は？")

print(name, "さんは腹囲", waist, "cmで年齢は",age, "才ですね。")


if waist>=85 and age>=40:#この部分が変更  #論理記号を用いて条件付けしていく
    print(name,"さん、内臓脂肪蓄積注意です")
else:
    print(name,"さん、腹囲は問題ありません")
#ここに直接入力しないでキーボード入力するとエラーが起こる