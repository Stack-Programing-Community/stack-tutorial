export const articles = [
    {
        slug: 'welcome',
        title: 'Stackプログラミング言語のチュートリアルへようこそ',
        content: `
Stackプログラミング言語は、スタック指向型の強力なプログラミング言語です。  
以下の特徴があります。  

1. スタック指向型の効率的な実行モデル
2. 明瞭で分かりやすいエレガントな構文
3. 便利で拡張性の高い豊富なコマンド
4. 強力かつ柔軟なデータ型の仕組み

<p>Stackプログラミング言語では、オンライン実行環境が提供されています。  
Webブラウザが動くPCとネット環境があれば、今すぐStackプログラミングを始めることができます。  

右に表示されているのは、Stackプログラミング言語で「Hello, world!」を出力するサンプルコードです。  
「実行」ボタンを押して、プログラムを動かしてみましょう！
`,
        code: `( (name) var
    (Hello, name !) (name) name replace print 
) (hello) var

(world) hello eval
`,
        next: 'fizzbuzz'
    },
    {
        slug: 'fizzbuzz',
        title: 'FizzBuzz',
        content: `
Fizz Buzz（フィズ・バズ）とは、英語圏で行われる言葉遊びです。  
みんなで1から順に数を数えていきます。  
ただし、3の倍数の時は数字の代わりに"Fizz"、5の倍数の時は"Buzz"、そして15の倍数の時は"Fizz Buzz"と言わなければなりません。  
ルールは簡単なのに、実際にやってみると意外と難しい。  

そんなFizz Buzzは、プログラミングの初学者に条件分岐を教える題材としてよく登場します。  
右に表示されているのは、Stackプログラミング言語でFizz Buzzを行うサンプルコードです。
`,
        code: `(
    (i) var 
    (Fizz) () 
    i 3 mod 0 equal if
) (fizz) var

(
    (i) var 
    (Buzz) () 
    i 5 mod 0 equal if
) (buzz) var

1 101 1 range (i) (

    () (msg) var
    msg i fizz eval concat (msg) var
    msg i buzz eval concat (msg) var

    (
        i (msg) var
    ) ()
    msg () equal if
    msg print
) for
`,
        next: 'essence'
    },
    {
        slug: 'essence',
        title: 'Stackプログラミング言語の真髄',
        content: `
今回はStackプログラミング言語の根幹をなす真髄に踏み込んでいきたいと思います。
#### 1. 実行モデル
Stackプログラミング言語の実行モデルを学びましょう。プログラムは改行やスペースで区切られたトークンの配列で構成され、各トークンは「データ」か「コマンド」を表します。
- **データ**: プログラム内のデータは解析され、スタックに積まれます。データは数値・論理値・文字列・リストの4つの型がありますが、コマンド実行時に自動的に型変換されるのでプログラマは型に気を遣う必要はありません。
- **コマンド**: 今まで見てきた\`print\`や\`eval\`・\`if\`などは全てコマンドで、様々な処理を実行するための命令です。コマンドの引数はスタックから取りって処理をして、戻り値をスタックに積みます。
#### 2. メタプログラミング機能
Stack言語の特長の1つは、メタプログラミング機能です。先ほどFizzBuzzなどで見たLISPみたいな括弧はブロックでは無く、文字列を表しています。
プログラムは文字列データとして保持され、各種コマンドを使用して実行されます。これにより、実行時にプログラムを動的に生成することが可能です。

`,
        code: `
4 6 7 3 2 #←こいつらを一掃したい#
size-stack (pop ) swap repeat eval  
`,
        next: null
    }
];
