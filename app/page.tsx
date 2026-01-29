import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe, TrendingUp, Shield, Users, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <img
              src="/logo.jpg"
              alt="Kenzoku System Development"
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              会社概要
            </a>
            <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              事業内容
            </a>
            <a href="#expertise" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              強み
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              お問い合わせ
            </a>
          </nav>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            お問い合わせ
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <Shield className="mr-2 h-4 w-4 text-primary" />
              信頼と革新のシステム開発
            </div>
            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-balance text-foreground leading-tight">
                グローバルな視点で
                <br />
                <span className="text-primary">未来を創造する</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
                堅続システム開発は、最先端のITソリューションと国際的なビジネス展開で、
                お客様の成長を支援します。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                サービス詳細を見る
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
                会社資料ダウンロード
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-sm font-semibold text-accent uppercase tracking-wider">About Us</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-balance text-foreground">
                  会社概要
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  堅続システム開発は、革新的なITソリューションとグローバルなビジネス展開を通じて、
                  企業の成長と発展を支援する総合ITサービス企業です。
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-base text-foreground/90 leading-relaxed">
                  {'私たちは、「堅実」と「継続」を企業理念に掲げ、お客様との長期的なパートナーシップを大切にしています。最先端の技術と豊富な経験を活かし、ソフトウェア開発からマーケティング支援、国際取引まで、幅広いサービスを提供しています。'}
                </p>
                <p className="text-base text-foreground/90 leading-relaxed">
                  グローバルな視点とローカルな実行力を兼ね備え、お客様のビジネスを次のステージへと導きます。
                </p>
              </div>
            </div>
            <Card className="border border-border">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-foreground bg-muted/30 w-1/3">
                          会社名
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground/90">
                          堅続システム開発株式会社
                          <br />
                          <span className="text-xs text-muted-foreground">Kenzoku System Development Co., Ltd.</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-foreground bg-muted/30">
                          設立
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground/90">
                          2008年4月1日
                        </td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-foreground bg-muted/30">
                          代表取締役
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground/90">
                          山田 太郎
                        </td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-foreground bg-muted/30">
                          資本金
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground/90">
                          5,000万円
                        </td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-foreground bg-muted/30">
                          本社所在地
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground/90">
                          〒100-0001
                          <br />
                          東京都千代田区千代田1-1-1 千代田ビル10階
                        </td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-foreground bg-muted/30">
                          従業員数
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground/90">
                          120名（2024年4月現在）
                        </td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-foreground bg-muted/30">
                          事業内容
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground/90">
                          <ul className="space-y-1">
                            <li>• 受託ITソフトウェア開発</li>
                            <li>• 受託ITソフトウェア販売・マーケティング</li>
                            <li>• 貿易・海外投資</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-foreground bg-muted/30">
                          企業理念
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground/90">
                          {'「堅実」と「継続」を基盤に、革新的なITソリューションとグローバルなビジネス展開を通じて、社会の発展に貢献する'}
                        </td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-foreground bg-muted/30">
                          主要取引先
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground/90">
                          大手製造業、金融機関、通信事業者、官公庁など
                        </td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-foreground bg-muted/30">
                          電話
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground/90">
                          03-1234-5678
                        </td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-foreground bg-muted/30">
                          メールアドレス
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground/90">
                          info@kenzoku-system.co.jp
                        </td>
                      </tr>
                      <tr className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-foreground bg-muted/30">
                          取得認証
                        </td>
                        <td className="px-6 py-4 text-sm text-foreground/90">
                          ISO 9001（品質マネジメントシステム）
                          <br />
                          ISO 27001（情報セキュリティマネジメントシステム）
                          <br />
                          プライバシーマーク
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <div className="inline-block">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-balance text-foreground">
              事業内容
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              お客様のビジネス課題を解決する、包括的なITサービスを提供しています。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: IT Software Development */}
            <Card className="group hover:shadow-xl transition-shadow border-2 hover:border-primary/50">
              <CardHeader className="space-y-4">
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">
                  受託ITソフトウェア開発
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  お客様のニーズに合わせた、カスタムソフトウェア開発サービスを提供します。
                </CardDescription>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Webアプリケーション開発</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>モバイルアプリケーション開発</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>エンタープライズシステム構築</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>クラウドソリューション</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>AI・機械学習システム開発</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary/10 bg-transparent">
                  詳しく見る
                </Button>
              </CardContent>
            </Card>

            {/* Service 2: IT Sales & Marketing */}
            <Card className="group hover:shadow-xl transition-shadow border-2 hover:border-accent/50">
              <CardHeader className="space-y-4">
                <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <TrendingUp className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-2xl">
                  受託ITソフトウェア販売・マーケティング
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  製品の市場投入から販売促進まで、包括的なマーケティング支援を行います。
                </CardDescription>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>ソフトウェアライセンス販売</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>デジタルマーケティング戦略</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>販売代理店ネットワーク構築</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>市場調査・分析</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>ブランディング支援</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 border-accent text-accent hover:bg-accent/10 bg-transparent">
                  詳しく見る
                </Button>
              </CardContent>
            </Card>

            {/* Service 3: Trade & Investment */}
            <Card className="group hover:shadow-xl transition-shadow border-2 hover:border-primary/50">
              <CardHeader className="space-y-4">
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Globe className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">
                  貿易・海外投資
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  グローバルネットワークを活用した、国際ビジネス展開をサポートします。
                </CardDescription>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>国際貿易仲介サービス</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>海外市場参入支援</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>海外投資コンサルティング</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>クロスボーダーM&A支援</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>国際パートナーシップ構築</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary/10 bg-transparent">
                  詳しく見る
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <div className="inline-block">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-balance text-foreground">
              {'私たちの強み'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              長年の経験と実績に基づく、信頼できるサービスを提供します。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 rounded-lg border border-border hover:border-primary/50 bg-card transition-colors">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">高品質な開発</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {'最新の開発手法と厳格な品質管理により、信頼性の高いシステムを提供します。'}
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border hover:border-accent/50 bg-card transition-colors">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">経験豊富なチーム</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {'多様な業界での豊富な経験を持つエキスパートが、プロジェクトを成功に導きます。'}
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border hover:border-primary/50 bg-card transition-colors">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">グローバル対応</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {'世界各国のパートナーネットワークを活用し、国際的なビジネス展開をサポートします。'}
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border hover:border-accent/50 bg-card transition-colors">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">継続的なサポート</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {'プロジェクト完了後も、運用保守からシステム拡張まで、長期的にサポートします。'}
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border hover:border-primary/50 bg-card transition-colors">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">最新技術の活用</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {'AI、クラウド、IoTなど、最新技術を積極的に取り入れ、競争力のあるソリューションを提供します。'}
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-lg border border-border hover:border-accent/50 bg-card transition-colors">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">柔軟な対応力</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {'お客様のニーズや予算に合わせて、最適なソリューションを柔軟にカスタマイズします。'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              お気軽にお問い合わせください
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty leading-relaxed">
              {'プロジェクトのご相談、お見積もり、その他ご質問など、どんなことでもお気軽にお問い合わせください。経験豊富なスタッフが丁寧に対応いたします。'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                お問い合わせフォーム
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                資料請求
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <img
                src="/logo.jpg"
                alt="Kenzoku System Development"
                className="h-10 w-auto"
              />
              <p className="text-sm text-muted-foreground leading-relaxed">
                信頼と革新で、
                <br />
                {'お客様の未来を創造します。'}
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground">サービス</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">ソフトウェア開発</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">販売・マーケティング</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">貿易・海外投資</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground">企業情報</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">会社概要</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">採用情報</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">ニュース</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground">お問い合わせ</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#contact" className="hover:text-foreground transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">利用規約</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              © 2025 堅続システム開発 / Kenzoku System Development. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
