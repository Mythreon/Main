const absurdEvents = [
    "Saat ilmaisen jäätelön, mutta se sulaa heti.",
    "Maailman viimeinen dodo haistaa sun perään.",
    "Kaikki peilit näyttää sut 30 vuotta nuorempana.",
    "Omat varjot alkaa kuiskutella salaisuuksia.",
    "We buy skin -tarra ilmestyy koko kroppaan.",
    "477 754 984 873 892 ruokapöytää ilmestyy sekatavarakauppaan!",
    "Muumipeikko tulee perimään velkoja.",
    "Ukkonen sanoo nimesi joka kerta kun jyrähtää.",
    "Saat jättipotin – mutta se on täynnä puhallinsoittimia.",
    "Silmälasit alkaa näyttää pelkkiä memejä.",
    "Voitat kultaisen hampurilaisen – mutta et saa syödä sitä.",
    "Kieli muuttuu hetkittäin pikselimössöksi.",
    "Joudut keskustelemaan takin kanssa ennen kuin voit pukea sen.",
    "Aina kun sanot 'mutta', joku lähettää laskun.",
    "Kyyneleet muuttuu konfettisateeksi.",
    "Joudut asumaan kahvikupissa.",
    "Kyyhkyt alkaa lähetellä sulle uhkausviestejä.",
    "Voitat lotossa, mutta kukaan ei usko sitä.",
    "Saat ilmaisen tuolin, mutta se on tehty pilvestä.",
    "Talo alkaa sihistä aina kun avaat ikkunan.",
    "Saat hyvän työn, mutta et muista, mitä työ on.",
    "Saat ilmaisen talon, mutta se on täynnä pelkkiä koiranleluja.",
    "836 816 142 816 tomaattia ilmestyy eteiseesi.",
    "Vessapaperi katoaa aina kun yrität käyttää sitä.",
    "Voitat arpajaisissa kilon painoista rairuohoa.",
    "Kaikki ruoka on tästä lähtien pelkkiä suolakurkkuja.",
    "Kaikki ovet avautuu ennen kuin ehdit koskea niihin.",
    "Oikea käsi muuttuu vohveliksi.",
    "Sade on tästä lähtien pelkkää maitoa.",
    "Kaikki sun paidat alkaa laulaa lastenlauluja.",
    "Pääset tv-haastatteluun, mutta unohdat kaikki sanat.",
    "Saat uuden passin, mutta siinä lukee 'Keisari Pottu'.",
    "Kauppakassi räjähtää silmille ilosta.",
    "Postilaatikko antaa sulle elämänneuvontaa.",
    "Kaikki ihmiset, joihin kosket, saavat hetkeksi supervoimat.",
    "Joudut ikuiseen kättelykierteeseen.",
    "Saat 1€ joka päivä, mutta se aina tuplaantuu.",
    "Puhelin lataa vain, jos pidät sitä jääkaapissa.",
    "Lasi päähän.",
    "Avaat sijoitusfirman.",
    "Jalkaasi ei enää koskaan väsy – voit juosta loputtomasti.",
    "McDonald’sin lahjakortti lentää taivaalta suoraan syliisi.",
    "Saat elinikäisen jäsenyyden maailman ainoassa pehmolelujen klubissa.",
    "Tuli alkaa tanssia sun ympärillä joka kerta, kun tanssit.",
    "Kaikki kyltit kadulla alkavat kertoa elämäsi tarinaa.",
    "Sateenkaari tulee kotiisi ja pyytää sinua valitsemaan värin, jonka se unohtaa.",
    "Saat lahjaksi postilaatikon, mutta se ei koskaan ota postia vastaan.",
    "Yksisarvinen kysyy sinulta neuvoa elämänvalinnoissa.",
    "Jatkuvasti sataa pilkkuja ja tähtiä, mutta ei lainkaan vettä.",
    "Aloitat uusimman hittibiisin kirjoittamisen, mutta sanasi vaihtuvat automaattisesti rapiksi.",
    "Koko maailmankaikkeus on pelissä, mutta saat aina vain hävittävän kortin.",
    "Joku salaperäinen henkilö alkaa lähettää sinulle lounasta joka päivä, mutta se on aina avokadoa.",
    "Sinut valitaan elämänneuvonantajaksi, mutta kukaan ei kuuntele.",
    "Saat salaa supervoimat, mutta ne toimivat vain silloin, kun ei ole ketään katsomassa.",
    "Puut alkavat pyytää sinulta neuvoja niiden juurien kasvattamisessa.",
    "Kaikki matkasi vievät aina yhteen samaan jäätelökioskille.",
    "Saat kiinteistön, mutta se on pelkkä pieni huoneen kokoinen peili.",
    "Kaikki kengät alkaa tanssia omia tanssejaan ilman, että niitä tarvitsee käyttää.",
    "Läheiset aloittavat salaisen kissojen kasvatuskilpailun sinulle ja sinun täytyy voittaa.",
    "Saat kuulla universumin suurimman salaisuuden, mutta et voi kertoa sitä kenellekään.",
    "Aina kun avaat oven, löydät itsesi toisesta aikakaudesta.",
    "Koko elämäsi muuttuu elokuvaksi, mutta kaikki näyttelijät ovat elohiiriä.",
    "Saat puhelun, mutta kukaan ei puhu, vain hiljaisuus kuuluu.",
    "Löydät kadulta rahapussin, mutta se on täynnä pelkkiä laskuja.",
    "Puut alkavat puhua kanssasi, mutta ne vain valittavat sateesta.",
    "Matka bussilla kestää ikuisuuden, mutta et koskaan saavuta määränpäätä.",
    "Saat lentolipun, mutta se vie sinut vain naapurin pihaan.",
    "Kaikki vaatteesi alkavat olla liian isoja tai pieniä – et löydä sopivaa.",
    "Vaihdat vaatteet, mutta huomaamatta päädyt pukeutumaan kylpytakkiin koko päiväksi.",
    "Joudut kantamaan sateenvarjoa koko päivän, mutta aurinko paistaa kirkkaasti.",
    "Saat postikortin, jossa on vain tyhjä tila eikä viestiä.",
    "Muutat kotiin, mutta huomaat, että kaikki huonekalut ovat kadonneet.",
    "Puutarhasi täyttyy ilmapalloista, mutta ne eivät koskaan nouse ilmaan.",
    "Näet kirjeen, joka on kirjoitettu käsin, mutta se on täysin tyhjä.",
    "Löydät kadulta avaimen, mutta et koskaan muista, mihin se kuuluu.",
    "Koko kaupunki päättää järjestää juhlia, mutta kukaan ei kutsu sinua.",
    "Saat lahjaksi käsityöpuukon, mutta se on niin terävä, että se ei voi leikata mitään.",
    "Kävelyretkelläsi kohtaat eläimen, joka osaa puhua, mutta ei sano sanaakaan.",
    "Avaat jääkaapin ja löydät sieltä vain jääpaloja ja ruokailuvälineitä.",
    "Ostat auton, mutta sen käyttöohjeet ovat pelkästään piirustuksia.",
    "Löydät lompakon, mutta sen ainoa sisältö on vanha kuitin pätkä.",
    "Koko päivä menee ohi, mutta et muista mitä teit.",
    "Saat koko ajan viestejä, mutta ne kaikki ovat kirjoitettu sumerian kielellä.",
    "Heräät keskellä yötä, mutta et voi palata takaisin nukkumaan.",
    "Koko talo täyttyy rakkauskirjeistä, mutta kukaan ei ole lähettänyt niitä.",
    "Avaat oven ja huomaat, että kaikki kadun autot ovat pysähtyneet juuri eteesi.",
    "Koko maailmankaikkeus menee hiljaiseksi, mutta kukaan ei huomaa.",
    "Kaikki kadut vievät aina samaan suuntaan, mutta et tiedä mihin.",
    "Ostat vaatteet, mutta ne ovat kaikki vain kokoa lastenvaatteet.",
    "Saat lahjaksi kynän, mutta se ei koskaan kirjoita.",
    "Olet kadulla, mutta et osaa suunnistaa mihinkään.",
    "Sateen jälkeen huomaat, että koko kaupunki on muuttunut sateenkaarenväriseksi.",
    "Saat lahjaksi kiinteistön, mutta se on vain tyhjä rakennus ilman ikkunoita.",
    "Olet ostamassa kahvia, mutta kaikki kupit ovat kiellettyjä.",
    "Aina kun puhut, se kuulostaa kuin joku olisi nauhoittanut sinun äänen ja toistaa sen takaisin.",
    "Saat lahjaksi silmälasit, mutta ne eivät koskaan näytä oikein.",
    "Kaikki viestit, joita saat, tulevat aina väärältä henkilöltä.",
    "Löydät vanhan kirjan, mutta se on täynnä tyhjiä sivuja.",
    "Muutat kaupunkiin, mutta huomaat, että se on tyhjä ja ilman muita asukkaita.",
    "Saat aina väärän aikavyöhykkeen kellon.",
    "Muutat kotoa, mutta huomaat, että unohdit pakata tärkeimmät tavarasi.",
    "Sateenkaari ilmestyy ja vie sinut suoraan työpaikkaasi.",
    "Päivän aikana puhut koko ajan, mutta kukaan ei kuule sinua.",
    "Löydät koiran, joka haluaa sinulle opettaa tanssia.",
    "Saat auton, mutta se on aina väärässä paikassa, kun sitä tarvitset.",
    "Joka kerta kun katsot kelloa, aika on pysähtynyt juuri sillä hetkellä.",
    "Aina kun yrität syödä, ruokasi katoaa jonnekin.",
    "Saat puhelun, mutta sen sisältö on vain tuulessa kuiskattuja sanoja.",
    "Koko maailmankaikkeus jää seisomaan, mutta kukaan ei muista miksi.",
    "Sateen jälkeen huomaat, että kadun reunalla kasvaa valtavia mansikoita.",
    "Saat ilmaisen matkan, mutta se on pelkkä polkupyörä.",
    "Löydät lompakon, mutta se on täynnä postimerkkejä.",
    "Olet ostamassa ruokaa, mutta jokainen kaupan hylly on tyhjä.",
    "Löydät kadulta tikkaat, mutta et pääse kiipeämään niiden päälle.",
    "Saat lahjaksi avaimen, mutta et tiedä mihin se menee.",
    "Päivän aikana kukaan ei vastaa, vaikka kysyt mitä tahansa.",
    "Koko kylä päättää pukeutua samaksi hahmoksi, mutta et tiedä, miksi.",
    "Saat puhelun, mutta puhelimessa on vain häiriöääniä.",
    "Löydät kadulta kitaran, mutta se ei soi lainkaan.",
    "Kaikki ruokasi muuttuvat jollain tavalla lentäviksi.",
    "Saat lahjaksi kitaran, mutta et koskaan opi soittamaan sitä.",
    "Tänään kaikki ihmiset tuntuvat olevan vain peilikuvia.",
    "Näet kaupassa hyllyjä täynnä kitaran kieliä, mutta et löydä kitaroita.",
    "Löydät yllättäen kitaran keskeltä metsää, mutta et tiedä, miten sinne päädyit.",
    "Kaikki kadun puut alkavat heittää lehtiä sinun päälle.",
    "Joka kerran kun soitat puhelimella, se onkin oikeastaan soittokello.",
    "Ostat uuden tietokoneen, mutta se toimii vain yksi sekunti kerrallaan.",
    "Jatkuvasti kuljet ympäriinsä, mutta et löydä kotiin.",
    "Löydät kadulta salaperäisen kartan, mutta se johtaa vain kylpyhuoneeseen.",
    "Saat tekstiviestin, mutta se on pelkkää satunnaista numeroa.",
    "Vaatteet muuttuvat automaattisesti mustavalkoisiksi, mutta et tiedä miksi.",
    "Kaikki ruokasi maistuvat yllättäen tomaattisoseelta.",
    "Joka kerta kun avaat jääkaapin, se huutaa 'Ei nyt!'",
    "Koko kaupunki päättää pukeutua pelkkiin haarniskoihin ja ratsastaa hevosilla.",
    "Tavarat katoavat käsistäsi aina, kun yrität käyttää niitä.",
    "Löydät lentolipun, mutta se vie sinut vain toiseen huoneeseen.",
    "Muutat meren rannalle, mutta aallot tulevat sisään taloon.",
    "Kaikki puhelut menevät suoraan vastaajaan, vaikka et ole koskaan saanut puhelua.",
    "Sateen jälkeen kaikki kadut täyttyvät ilmapalloista.",
    "Jatkuvasti astut kenkien sisään, mutta et koskaan löydä toista kenkää.",
    "Päivän päätteeksi huomaat, että laukusi on täynnä kukkia.",
    "Heräät keskellä yötä ja huomaat, että koko huoneesi on muuttunut pehmytkeleiksi.",
    "Koko kaupunki päättää alkaa puhua vain yhdellä ja samalla sanalla.",
    "Kengät alkavat tanssia yksin, mutta eivät osaa rytmiä.",
    "Saavutat unelmiesi matkan, mutta et löydä enää takaisin.",
    "Päivän aikana joku pukee sinut pukeutumaan pelleksi, mutta kukaan ei selitä miksi.",
    "Koko kaupungin katukivetykset muuttuvat suklaaksi.",
    "Avaat oven ja huomaat, että se vie suoraan ulos avaruuteen.",
  "Saat yllättävän lahjan, mutta se on vain lippu johonkin kadonneeseen paikkaan.",
  "Päivän aikana kaikki sähköiset laitteet lakkaavat toimimasta, mutta ne puhuvat keskenään.",
  "Koira, jonka näet, alkaa kertoa sinulle koko tarinansa, mutta se on täysin hämmentävää.",
  "Jatkuvasti pelkäät että joku seuraa sinua, mutta ei ole ketään.",
  "Koko naapurusto päättää tanssia koko päivän ajan ilman musiikkia.",
  "Löydät kadulta vanhan matkapuhelimen, mutta sen viesti on kirjoitettu keskiaikaisella kielellä.",
  "Postilaatikko päättää olla auttamatta ja antaa aina väärän kirjeen.",
  "Kaikki maailman puut päättävät vaihtaa paikkoja keskenään.",
  "Löydät auton, mutta sen avaimet eivät koskaan toimi.",
  "Sateenkaari ilmestyy, mutta vain pelkästään kolmella värillä.",
  "Joka kerta kun soitat puhelimella, kuulet vain radio-ohjelman mainokset.",
  "Saat puhelun, mutta se on pelkkää mykkää elokuvahassuttelua.",
  "Muutat pois kaupungista, mutta huomaat, että kaikki muutkin tekevät saman.",
  "Löydät vanhan valokuvan itsestäsi, mutta et tunnista itseäsi.",
  "Aina kun kävelet ulkona, tuuli muuttaa suunnan ja vie sinut suoraan kotiin.",
  "Koko kadun valaistus alkaa vilkkua kuin juhlavalaistus.",
  "Löydät itsesi keskeltä ei mitään, mutta kaikki näyttävät olevan jollain tavalla kotona.",
  "Joku antaa sinulle koiran, mutta se on todella yksinäinen täytetty eläin.",
  "Ostat matkalipun, mutta se vie sinut vain lähimpään ruokakauppaan.",
  "Kun katsot kelloa, se näyttää väärän ajan, mutta kaikki muut kellot ovat täydellisiä.",
  "Joku lähettää sinulle salaperäisen lahjan, mutta se on vain tyhjä laatikko.",
  "Koira päättää lähteä matkalle kanssasi, mutta ei ikinä suostu palaamaan.",
  "Koko päivääsi varjostaa suuri, outo ja hiljainen tiikeri.",
  "Ostat jääkaapin, mutta se ei ikinä jäädy mitään.",
  "Päätät juosta maratonin, mutta se on vain yksi metri pitkä.",
  "Sinulla on loma, mutta se kestää vain muutaman sekunnin.",
  "Ostat uuden tietokoneen, mutta se osaa vain soittaa musiikkia.",
  "Heräät kesken unesi, mutta huomaat olevasi täysin väärässä unessa.",
  "Ostat uuden puhelimen, mutta sen ainoa toiminto on valokuvien ottaminen.",
  "Löydät vanhan postilaatikon, mutta kaikki kirjeet tulevat vain aikakapselista.",
  "Joku antaa sinulle lahjaksi kameran, mutta se kuvaa vain varjoja.",
  "Näet kadulla vanhan ystäväsi, mutta hän ei muista sinua.",
  "Kaikki varjosi alkavat pukeutua eri vaatteisiin.",
  "Koko kylä päättää pukeutua pelleiksi, mutta kukaan ei halua olla pääpelle.",
  "Päätät osallistua peliin, mutta huomaat, että se on loppunut jo aikoja sitten.",
  "Joku soittaa sinulle, mutta et koskaan kuule mitään muuta kuin kaukana soivan musiikin.",
  "Kuolet. (rip)",
  "Syöt 38473 kiloa omenariisipuuroa elämäsi aikana.",
  "Kuolet kahdesti. (miksi?)",
  "Saat 10 000 banaania, mutta ei yhtäkään hedelmäveistä.",
  "Löydät taskustasi 1 000 avainta, mutta et tiedä mihin ne kuuluvat.",
  "Saat 1 000 000 paperilennokkia, mutta ei yhtäkään lentäjää.",
  "Koko asunto täyttyy 1000 lelusta, mutta ei yhtään lastenleikkiä.",
  "Saavut kotiin ja huomaat, että kaikki huoneet ovat täynnä palloja, 10 000:ta tarkalleen.",
  "Postilaatikostasi tulee 500 kirjeen pino, mutta ne kaikki ovat täynnä vain yhtä sanaa: 'hei'.",
  "Saat 10 000 karkkia, mutta kaikki ovat juuri sellaisia, joita et voi syödä.",
  "Löydät 1000 avaimenperää, mutta ei yhtäkään avainta.",
  "Jokainen matkasi kuljettaa sinut 1 000 kilometrin päähän, mutta et ikinä saavuta määränpäätä.",
  "Saavat 1000 puhelinta, mutta ne kaikki on jollain oudolla kielellä, jota et osaa.",
  "Saat 1000 kissojen ruokaa, mutta et omista yhtään kissaa.",
  "Löydät 1 000 jättikokoista jääpalaa, mutta ei yhtäkään jäätelöä.",
  "Saat 50 000 pehmolelua, mutta et koskaan löydä niille paikkaa.",
  "Sateenkaari ilmestyy ja tuo sinulle 1 000 värikästä sukkaa.",
  "Puutarhasi täyttyy 1 000 kukalla, mutta kukaan ei tiedä, kuinka ne kasvavat.",
  "Saat 1000 kiloa suklaata, mutta kaikki on sulanut jo.",
  "Löydät 1 000 hernepussia, mutta et voi syödä niitä, koska ne ovat tyhjiä.",
  "Saat 1 000 nallekarhua, mutta et voi koskaan halata niitä.",
  "Kaikki kitarat, joita omistat, saavat sinut soittamaan 1000 kertaa väärän nuotin.",
  "Saat 1 000 kesäasukasta, mutta he kaikki valitsevat talvikuukaudet vieraillakseen.",
  "Olet saanut 1 000 hattua, mutta et ole koskaan pystynyt valitsemaan yhtä ainoaa.",
  "Löydät 1 000 laukkua, mutta kaikki ovat väärän kokoisia.",
  "Saat 10 000 valokuvakehystä, mutta ne kaikki ovat tyhjiä.",
  "Olet saanut 1 000 000 leluleipää, mutta et tiedä, mitä niillä tehdä.",
  "Saat 1 000 pölynimuria, mutta kukaan ei tiedä, mihin ne laitetaan.",
  "Saat 1 000 astiaa, mutta et voi käyttää niitä, koska kaikki ovat rikkinäisiä.",
  "Löydät 1 000 paria kenkiä, mutta kaikki ovat liian pieniä.",
  "Koko huone täyttyy 1 000 ilmalaivalla, mutta ne kaikki pysyvät maassa.",
  "Saat 1000 paperipussia, mutta kaikki ovat reikäisiä.",
  "Saat 1 000 lämpöpulloa, mutta se ei lämmitä sinua ollenkaan.",
  "Saat 1000 kiloa sokeria, mutta ei yhtäkään herkkuohjetta.",
  "Olet saanut 1 000 puhelinluetteloa, mutta et löydä nimeäsi mistään.",
  "Saat 1000 lempivaatteesi, mutta kaikki ovat väärän värisiä.",
  "Saat 10 000 pehmonallen, mutta et voi päättää, minkä haluaisit pitää.",
  "Sateenkaari tuo sinulle 1000 sukanparia, mutta ei yhtäkään oikeaa väriä.",
  "Saat 1 000 kappaletta samasta kirjasta, mutta et ole koskaan lukenut sitä.",
  "Koko talosi täyttyy 1 000 pehmoleluilla, mutta kaikki on väärän kokoisia.",
  "Saat 1 000 tiskirättiä, mutta et tiedä, mihin ne laitetaan.",
  "Saat 1000 kuuloketta, mutta ei yhtään johdinta.",
  "Löydät 1 000 kaulakoruja, mutta et osaa valita, mitä niistä käyttää.",
  "Saat 1000 tähtisadetta, mutta ei yhtäkään juhlaa.",
  "Olet saanut 1 000 lippua elokuvateatteriin, mutta ne kaikki ovat väärille elokuville.",
  "Saat 1000 hengityssuojainta, mutta et voi käyttää niitä.",
  "Saat 1 000 nallekarhua, mutta ne kaikki päättävät olla asettamatta itseään oikein.",
  "Löydät 1 000 lastenlelua, mutta et voi leikkiä niillä, koska ne eivät toimi.",
  "Saat 1000 tuolia, mutta kaikki ovat liian pieniä istua.",
  "Saat 1 000 piirustusvihkoa, mutta kaikki ovat tyhjiä.",
  "Olet saanut 1 000 muovikassia, mutta ne kaikki on täynnä ilmaa.",
  "Saat 1000 kukkakimppua, mutta kaikki ne kuihtuvat ennen kuin ehdit nähdä ne.",
  "Löydät 1 000 säilytyslaatikoita, mutta niissä ei ole mitään säilytettävää.",
  "Saat 1000 postikorttia, mutta ei yhtäkään oikeaa tervehdyksiä.",
  "Saat 1000 eri väristä kynää, mutta kaikki ovat loppuneet.",
  "Saat 1 000 kiloa hiekkaa, mutta et tiedä mihin laittaa sen.",
  "Olet saanut 1000 vessapaperirullaa, mutta ne ovat kaikki väärän kokoisia.",
  "Saat 1000 ilmapalloa, mutta ne eivät koskaan nouse ilmaan.",
  "Sateenkaari tuo sinulle 1 000 lahjakorttia, mutta ne eivät ole mihinkään käyttökelpoisia.",
  "Saat 1 000 maalaustelinettä, mutta et osaa maalata.",
  "Löydät 1 000 valokuvaa, mutta et tiedä ketkä ovat kuvissa.",
  "Saat 1 000 pikaruokaa, mutta et löydä yhtäkään ateriaa, jota oikeasti haluaisit.",
  "Saat 1 000 pesukonetta, mutta et pysty pestä mitään niillä.",
  "Saat 1000 kitaran kieliä, mutta ei yhtään kitaraa. (EI PÄDE MUHUN KIRJOTTAJAAN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)",
  "Olet saanut 1 000 paita, mutta kaikki ovat liian isoja.",
  "Saat lentolipun Marsiin.",
  "Kaikki juomat muuttuvat limonadiksi.",
  "Löydät kultaa puutarhastasi.",
  "Ostat auton, mutta se on banaani.",
  "Olet yhtäkkiä miljardööri.",
  "Koko maailmankaikkeus muuttuu sateenkaaren väreiksi.",
  "Talo muuttuu lentokonesi.",
  "Saavut unelmatyöhösi, mutta et muista miksi.",
  "Voitat maailmanmestaruuden koripallon pelaamisessa.",
  "Postilaatikkosi täyttyy kultaharkkojen kanssa.",
  "Saat maailman ensimmäisenä elokuvateatterin koiralle.",
  "Kaikki puut alkavat puhua.",
  "Sateenkaaret alkavat tanssia.",
  "Saat salaisen agentin roolin.",
  "Ostat saaren, mutta se on vain hiekkaranta.",
  "Jatkuvasti löydät kolikoita taskuistasi.",
  "Olet ykköspelaaja videopelissä, mutta et ole koskaan pelannut.",
  "Voitat maailman suurimman jäätelöannoksen.",
  "Saat kutsun presidentin juhliin.",
  "Löydät taikavoimia, mutta unohdat, miten niitä käytetään.",
  "Olet yllättäen astronautti.",
  "Löydät kadulta unelmiesi kirjan.",
  "Saat rahaa ilmasta.",
  "Matkustat ajassa taaksepäin.",
  "Saat lintuja puhumaan kanssasi.",
  "Koko naapurustosi alkaa tanssia yhdessä.",
  "Järvi muuttuu suklaaksi.",
  "Koko maailma pyörii ympäri sinua.",
  "Saat maailman ensimmäisenä robottikoiran.",
  "Olet voittanut ääniäänestyksessä.",
  "Eläimet alkavat puhua ihmisille.",
  "Sateenkaari ilmestyy yllättäen olohuoneeseen.",
  "Saat huikean lahjan ilman, että kukaan tietää miksi.",
  "Joudut tapaamaan tunnetun supertähden.",
  "Talo täyttyy yllättäen lumesta kesällä.",
  "Ystäväsi vie sinut avaruusmatkalle.",
  "Muutat kaupunkiin, jossa kaikki käyvät pyörällä.",
  "Löydät taikapallon, joka tekee kaikkea mahdollista.",
  "Koko perheesi on muuttanut kilpikonniksi.",
  "Saat suuren valinnan, mutta et tiedä mitä valita.",
  "Olet voittanut pääpalkinnon kilpaohjelmassa.",
  "Saat kutsun salaisuuden säilyttämiseen.",
  "Kaikki tietokoneet alkavat toimia täydellisesti.",
  "Koko maailmankaikkeus alkaa soittaa sinulle.",
  "Ystäväsi ovat pelissä, mutta he eivät tiedä sitä.",
  "Sateen jälkeen on pelkkiä jäätelökioskeja.",
  "Kaikki huonekalut muuttuvat eläväksi.",
  "Saat 1000 piirrustusta ilman, että teit niitä.",
  "Olet saanut uuden kyvyn lentää.",
  "Löydät valtavan aarteiden aarrekartasta.",
  "Koko kaupunki herättää sinut aamulla laulamalla.",
  "Saat elinikäisen elokuvan pääroolin.",
  "Hiekka muuttuu kultaiseksi rannalla.",
  "Saat mahdollisuuden keskustella kaiken kanssa.",
  "Koko talosi muuttuu sateenkaarenväriseksi.",
  "Saat taikavarjon, joka suojaa kaikilta huonoilta säiltä.",
  "Matka vie sinut muinaiseen Egyptiin.",
  "Puut alkavat antaa sinulle lahjoja.",
  "Saat oikeuden kokeilla kaikkia mahdollisia voimia.",
  "Kaikki ovet avaavat itsensä juuri sinulle.",
  "Päiväsi on täynnä yllätyksiä.",
  "Saat auton, joka kuljettaa vain ympäri maailmaa.",
  "Voitat.",
  "The game.",
  "Absurd.",
  "Tiiliseinä ilmestyy sun eteen. NYT!",
  "Voitat lotossa.",
  "Löydät kultaa.",
  "Olet astronautti.",
  "Talo lentää.",
  "Koko maailma tanssii.",
  "Saat supervoimat.",
  "Tulee sateenkaarivettä.",
  "Olet valtias.",
  "Olet koira.",
  "Löydät taikapallon.",
  "Matkaat ajassa.",
  "Sateenkaari puhuu.",
  "Saat taikasauvan.",
  "Koko kaupunki muuttuu.",
  "Puut laulavat.",
  "Linnut antavat ohjeet.",
  "Vettä tulee suklaana.",
  "Kaikki puhuu.",
  "Matkaat Marsiin.",
  "Olet prinsessa.",
  "Saat 1000 lahjaa.",
  "Olet voittaja.",
  "Löydät taikapeilin.",
  "Olet supertähti.",
  "Saat lentää.",
  "Posti tuo taikuutta.",
  "Olet voittanut elokuvan roolin.",
  "Päiväsi on täydellinen.",
  "Saat ilmapallon.",
  "Koko maailma pyörii.",
  "Olet elokuvassa.",
  "Vihreä maa ilmestyy.",
  "Sateet muuttuvat musiikiksi.",
  "Taivas on ruusuinen.",
  "Olet villi lännen sankari.",
  "Saat taikajousen.",
  "Koko talo tanssii.",
  "Talo nousee ilmaan.",
  "Saat kultapallon.",
  "Järvi muuttuu siideriksi.",
  "Löydät vanhan aarteen.",
  "Olet nukkumaan mennyt astronautti.",
  "Kaikki nauravat.",
  "Koko maailma jäätyy.",
  "Löydät kitaran taikavoimilla.",
  "Taivas täyttyy tähtisateista.",
  "Puut antavat lahjoja.",
  "Saat pomon paikan.",
  "Saat uuden kyvyn.",
  "Kaikki pyörivät ympäri.",
  "Olet saanut valtavan onnentoivotuksen.",
  "Olet saanut uuden perheen.",
  "Voitat kitarassa. (Älä kysy mitä!)",
  "Löydät taikasanan johonkin, et vain koskaan tiedä mihin.",
  "Koko kaupunki on tanssissa.",
  "Postilaatikko tuo onnen.",
  "Kaikki on lumimyrskyn peitossa.",
  "Ikkuna sun takanas muuttuu kullaksi ja kalifornian kultaryntäys tapahtuu uudestaan.",
  "Saat 348 534 345 972 jäätelöpalloa.",
  "Löydät 9 876 543 210 kultakolikkoa.",
  "Saat 12 345 678 999 kukkakimppua.",
  "Olet saanut 102 929 839 283 kengänpohjaa.",
  "Saat 987 654 321 appelsiinia.",
  "Löydät 1 234 567 890 paperilautasta.",
  "Saat 3 598 274 910 puukkoa.",
  "Saat 1 500 100 000 sushia.",
  "Löydät 8 765 432 suklaapatukkaa.",
  "Saat 34 567 890 piparkakkua.",
  "Saat 999 999 999 tanssipallon.",
  "Löydät 256 372 483 jääpalaa.",
  "Saat 734 829 593 vesimelonia.",
  "Löydät 573 821 200 viinirypälettä.",
  "Saat 4 583 092 sääskenpuremaa.",
  "Olet saanut 6 543 210 pikaruoanpakettia.",
  "Saat 1 789 543 nallekarhua.",
  "Saat 876 431 294 kitaran kieliä.",
  "Löydät 1 000 000 000 lentopallon.",
  "Saat 2 467 890 jääkaappia.",
  "Löydät 1 234 567 890 auringonkukkaa.",
  "Saat 3 210 987 jääpalamuottia.",
  "Saat 8 990 234 muovikassia.",
  "Löydät 478 539 237 kirjapinoa.",
  "Saat 1 234 568 jalkapalloa.",
  "Löydät 888 777 laukkua.",
  "Saat 11 222 333 säilytyspurkkia.",
  "Saat 77 88 99 00 11 22 sormusta.",
  "Löydät 234 567 890 kitaran.",
  "Saat 345 987 567 appelsiinimehua.",
  "Saat 987 654 321 juoksukenkää.",
  "Löydät 234 345 456 viiniä.",
  "Saat 12 344 567 sukkaparia.",
  "Saat 100 200 300 pizzapalasta.",
  "Löydät 987 654 vaatekappaletta.",
  "Saat 567 432 vesimelonia.",
  "Löydät 876 345 grilliä.",
  "Saat 1 234 000 uistinta.",
  "Saat 100 200 300 maalia.",
  "Löydät 2 468 598 pyyhettä.",
  "Saat 1 500 200 jäätelötötteröä.",
  "Saat 9 876 543 aavikkokivikkoa.",
  "Saat 345 234 567 kitaran kieliä.",
  "Löydät 876 543 lamppua.",
  "Saat 567 432 jäätelöpalloa.",
  "Saat 10 987 654 vaatteiden muotia.",
  "Löydät 1 000 234 vaatekaappia.",
  "Saat 9 876 543 puukkoa.",
  "Saat 987 654 tennispallon.",
  "Saat 1 234 567 kynää.",
  "Saat 2 467 890 käsipyyhettä.",
  "Löydät 1 000 000 hattua.",
  "Saat 1 234 567 muovikupin.",
  "Saat 9 876 543 kitaran.",
  "Löydät 10 234 567 kumpparia.",
  "Saat 567 432 lautasta.",
  "Saat 1 000 000 lamppua.",
  "Jostakin kumman syystä saat tietoosi, että tätä kirjoittaessa listassa on 429 erilaista asiaa.",
  "Saat sähköiskun.",
  "Löydät myrkkysienen.",
  "Syöt hirvittävän mausteisen ruoan.",
  "Astut lasinsiruilla.",
  "Kaadut jyrkältä kalliolta.",
  "Joudut pyörremyrskyyn.",
  "Löydät räjähteen.",
  "Eksyt autiomaahan.",
  "Jatkat juoksua kuumassa hiekassa.",
  "Sateenkaarivettä tulee silmiisi.",
  "Joudut hukkumaan meressä.",
  "Kävelet polttavan hiilen päällä.",
  "Kaadut portaissa.",
  "Joudut sähkökatkokseen pimeässä huoneessa.",
  "Astut nukkuneen käärmeen päälle.",
  "Olet jäätymässä lumimyrskyyn.",
  "Löydät myrkyllisen käärmeen.",
  "Joudut tielle auton alle.",
  "Jatkat juoksua kiihdyttävässä junassa.",
  "Käytät rikkinäistä sähkölaiteita.",
  "Joudut tulivuoren purkaukseen.",
  "Jatkat uintia haita täynnä olevassa meressä.",
  "Syöt pilaantunutta ruokaa.",
  "Astut vahingossa terävälle esineelle.",
  "Joudut jalkapallon alle.",
  "Olet eksynyt metsässä ilman karttaa.",
  "Olet hyppäämässä korkealta kalliolta.",
  "Syöksyt alas liukumäessä.",
  "Löydät mätänevän kalakeiton.",
  "Eksyt vaaralliseen kaupunginosaan.",
  "Löydät tulenliekkejä huoneessa.",
  "Sateenkaari muuttuu myrskyksi.",
  "Olet jäänyt junan alle.",
  "Astut liukkaalle jäälautaselle.",
  "Käytät rikkoutunutta polkupyörää.",
  "Löydät myrkyllisen kasvin.",
  "Jatkat kävelyä meren yli.",
  "Joudut hurjalle vuoristoradalle.",
  "Astut kiivaasti pyörivään tuulettimeen.",
  "Joudut aavikon keskelle ilman vettä.",
  "Kävelet kaasuvuotopaikkaan.",
  "Eksyt ilotulituspaikkaan.",
  "Jatkat matkustamista villiin ajoneuvoon.",
  "Löydät tärkeitä asiakirjoja palaneesta talosta.",
  "Joudut liian läheiselle lentokonesuihkulähteelle.",
  "Saat käsivarsille myrkkyä.",
  "Joudut ampuma-alueelle.",
  "Astut muovikäärmeelle.",
  "Olet myrkyllisten nuuskaeläinten keskellä.",
  "Löydät metsässä pahasti haavoittuneen eläimen.",
  "Eksyt pyörremyrskyyn.",
  "Joudut liian läheiselle jääkarhulle.",
  "Olet jäätikön reunalla ilman varusteita.",
  "Astut helposti rikkoutuvan jään päälle.",
  "Joudut liukkaalle lentokonesateelle.",
  "Jatkat käsittelyä vaarallisilla kemikaaleilla.",
  "Kaadut ylhäältä alas seinältä.",
  "Joudut ilmaliikenteen hallintaan.",
  "Eksyt sumuun vaarallisella moottoritiellä.",
  "Jatkat suoraan kohti tulipaloa.",
  "Teittinen on sinun opettajasi tulevaisuudessakin.",
  "Teittinen on sinun opettajasi tulevaisuudessakin.",
  "Teittinen on sinun opettajasi tulevaisuudessakin.",
  "Napoleon yrittää ratsastaa valtavalla kanaalla.",
  "Keskiaikainen ritari jää kiinni pyhän graalin etsimisestä... meren pohjasta.",
  "Rooman keisari Claudius syö liian monta viinirypälettä ja menee koomaan.",
  "Vikingit yrittävät vallata Englannin, mutta eksyvät Irlantiin.",
  "Cleopatra kokeilee ensimmäistä kertaa purjehdusta ja jää karille.",
  "Alfred Suuri yrittää polttaa kakkua, mutta koko valtakunta syttyy tuleen.",
  "Tsaari Nikolaus II. vaihtaa venäläisen armeijan uniformeja huppareiksi.",
  "Metsästäjä-kokoaja eksyy kivi-aikaan ja yrittää kouluttaa mammutin lemmikiksi. Älä kysy.",
  "Einstein kirjoittaa väärän kaavan ja saa koko fysiikan hajoamaan. Kiitos vaan palajon.",
  "Rooman valtakunnan viimeinen keisari yrittää käynnistää WiFi:n, mutta epäonnistuu, ja kuolet..",
  "Leonardo da Vinci ei pysty maalaamaan Mona Lisaa, koska kitaran kieli menee poikki, miksi? Sinun takiasi!",
  "Tämä on viimeinen!",
  "50 radiota ilmestyy etuovellesi.",
  "Opit täydellisen javascriptin.",
  "Todistuksesi tulee olemaan 10 täynnä, mutta käyttäytyminen tippuu kolmoiseksi.",
  "Saat miljoona euroa, mutta pystyt ostamaan niillä vain paperiliittimiä.",
  "Saat ilmaisen leivinuunin, mutta se on miniatuuri.",
  "Ovi.",
  "Saat sanakirjan! Onnittelut, mitä ajattelit tehdä sillä?",
  "Riippumatta sukupuolestasi, uusi nimesi on 'Kuningatar kebab' ",
  "Kaikki, jotka istuvat pöydässä kanssasi, joutuvat antamaan sinulle 5 senttiä.",
  "Muumipeikko haluaa sinulta nimikirjoituksen.",
  "Saat laaman.",
  "CV:si tuhoutuu mysteerisesti",
  "FREAKBAiT lähettää sinulle viestin",
  "Tietokoneesi vaihtaa os:sää joka aamu.",
  "2 425 503 539 648 tiiltä ilmestyy 100km eteesi",
  "Saat 53 paitaa.",
  "Unohdat salasanan johonkin palveluun",
  "Nurmikkomies69@gmail.com tulee olemaan uusi gmail-osoitteesi.",
  "Erittäin pitkä lista asioista tulee juoksemaan perääsi.",
  "SINÄ! Kirjoita tarina käyttäen pelkästään kirjainta K alkukirjaimena.",
  "37",
  "Tiiliseinä.",
  "Yhtäkkisesti kaikki alkaa laulaa sinulle syntymäpäivälaulua.",
  "Saat kakun, vai saatko? Se on vain viallinen valhe.",
  "Koodaat, mutta unohdat pilkun linjalta 530",
  "Siwa syntyy uudestaan, ja olet firman toimitusjohtaja.",
  "Yhtäkkisesti osaat kaikkia maailman kieliä täydellisesti, mutta et osaa puhua.",
  "Saat ilmaisen repun, jonka sisällä on mysteeri",
  "Leivinuuni hyökkää kimppuusi.",
  "Voit skipata yhden vuoron!",
  "Saat kultaisen kellon",
  "Saat seuraavasta kokeesta numeron 4-10 välillä!",
  "Portfoliosi saa uuden asun yön yli",
  "543234543876537890476894326752389652368923652365236582365896239685856236898932686538965238959852358932689689233568969839835589538935689368936566389689398632566935368936893598623968326986389268956836895896238",
  "testi, jota en koskaan poistanutkaan.",
  "Huomaat, etä tässä on kirjoitusvirhe.",
  "Saat saippuakuplia",
  "Vasen kätesi muuttuu vohveliksi aina, kun haluat syödä raakaa suklaata",
  "Sateenkaari muuttaa väriä aina, kun katsot sitä ja kukaan muu ei.",
  "Katso taaksesi.",
  "Agressiivinen lattiamoppi haluaa sinulta 4 euroa.",
  "Perunamuusi muuttuu lankkuperunaksi",
  "Saat yksittäisiä sohvia, jotka putoavat päällesi.",
  "Olohuoneessasi alkoi juuri tulipalo. Se sammuu, kun olet lukenut tämän loppuun.",
  "Miksi olet lukemassa tätä? Koska lamppu.",
  "Roskakasa tulee talosi sisälle",
  "Unohdat jotakin tärkeää.",
  "Kuolet.",
  "Kuolet kahdesti",
  "Kuolet kolmesti",
  "Veitsi pyörii sinulle.",
  "Olet ainoa meistä normaali.",
  "Putin tulee kylään.",
  "Saat ilmaista juustoa.",
  "Huoneesta löytyy appelsiini, joka näyttää rumpilta.",
  "Saat 726 816 147 716 appelsiinia",
  "Olet tulessa.",
  "Löydät salaisen siskosi",
  "Vesikannusta tippuu päähäsi vettä aina, kun et katso",
  "Salaliittoteoriasi innoittavat Riku Rantalan kirjoittamaan kirjan.",
  "Hitler herää kuolleesta keksintösi avulla.",
  "Saat 53 aapista",
  "Heittopilkkusi vahingossa muuttuu `:ksi",
  "Tiskaat veitseä, ja se viiltää sinua.",
  "Saat 5 283 257 999 kelloa, joista 0.00154% on kultaa sisältä.",
  "Sinulla on tylsää.",
  "Herätät roomalaisen henkiin",
  "Käyttiköhän väärää sijamuotoa.",
  "Saat uuden nimen: Koko maailma kutsuu sinua Auringonpyöräksi.",
  "Mikroaaltosi alkaa lähettää salaisia viestejä.",
  "Saat 1000 kukkaroa, mutta et voi avata yhtäkään.",
  "Yhtäkkiä osaat pyöräillä ilman pyörää.",
  "Joulu saapuu heinäkuussa, mutta kukaan ei muista, mitä silloin tapahtuu.",
  "Pesukoneesi alkaa keskustella kanssasi ja tarjoaa elämänneuvon.",
  "Kävelet peilin ohi, mutta peili kävelee sinua vastaan.",
  "Pystyt lentämään, mutta vain alas.",
  "Käytät sormustasi väärin ja se muuttaa sinut kitaraksi.",
  "Matematiikka päättää lakata olemasta, mutta vain teoreettisesti.",
  "Olet saanut uuden työkaverin, mutta hän on itse asiassa yksinäinen pöllö.",
  "Kello näyttää aina kolmea yötä, mutta se on vain elokuvan alkutekstit.",
  "Kaikki keitot muuttuvat smoothieiksi, mutta vain hetkeksi.",
  "Saat viestin menneisyydestä, jossa sinua kutsutaan 'vuosisadan kitaristiksi'.",
  "Tanssit ilman musiikkia, ja ympärilläsi on kuoro, joka laulaa koko ajan väärin.",
  "Saat hupparin, mutta huomaat, että se on piilotettu kirja.",
  "Kenkäsi alkavat tanssia itsekseen ja päätyvät improvisoidulle lavalle.",
  "Metsässä näkyy vaaleanpunainen susi, joka kertoo unia sinulle.",
  "Sinun täytyy pelata jalkapalloa hiekalla, mutta kenttä on täynnä kitaroita.",
  "Saat kahvikupin, joka on täynnä aikaa.",
  "Yhtäkkiä kaikki kattilat alkavat tanssia keittiössä.",
  "Saat lahjaksi ikuisesti jäähtyvän kahvikupin.",
  "Auringonpaiste alkaa sataa sinulle suoraan käsiin.",
  "Jokaisella askeleella syntyy uusi värikäs sateenkaari.",
  "Koko kaupunki päättää, että tänään on virallisesti ympyräpäivä.",
  "Sateenkaari ilmestyy aina, kun sanot sanan 'avaruus'.",
  "Saat huoneen täyteen lentäviä hedelmiä, mutta ne eivät osu mihinkään.",
  "Metsässä kasvaa puita, jotka laulaa jazzia.",
  "Olet saanut uuden taidon: pystyt kitaran soittamiseen pelkästään ajatuksilla.",
  "Kitarasi alkaa soittaa itseään, mutta se on todella huono.",
  "Vene alkaa puhua sinulle ja kertoo, että se on itse asiassa meren kuningas.",
  "Jokainen aamukahvisi muuttuukin pölyksi, mutta pöly tanssii.",
  "Kaikki vaatteesi alkavat itsenäisesti valita asusi, mutta vain raitoja ja pilkkuja.",
  "Saat piirtää pilveä, mutta pilvi ei tykkää siitä.",
  "Lepakot alkavat kertoa sinulle salaisuuksia, mutta ne eivät ole järkeviä.",
  "Sateen jälkeen maahan ilmestyy riisikakkuja, mutta niitä ei voi syödä.",
  "Kirjoitat koodia, mutta rivit alkavat tanssia ja muuttaa muotoaan.",
  "Koko maailma alkaa pyöriä ympyrää, mutta vain yksi suunta on oikea.",
  "Jokaisessa huoneessa alkaa kuulua syvällisiä keskusteluja, mutta kaikki puhuvat yhtä aikaa.",
  "Saat uuden koiran, mutta se on itse asiassa lammas, joka pukeutuu koiraksi.",
  "Auringonlasku tapahtuu vain silloin, kun suljet silmäsi.",
  "Saat kitaran, joka soittaa vain taustamelodiaa elämäsi elokuvassa.",

  ];
    
  function generateRandomEvent() {
    const randomIndex = Math.floor(Math.random() * absurdEvents.length);
    const randomEvent = absurdEvents[randomIndex];
    document.getElementById("eventDisplay").textContent = randomEvent;
  }
  
  document.getElementById("generateEventBtn").addEventListener("click", generateRandomEvent);
  
