
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam) => {
return`━━━❲ HALLO-SAYANG ❳━━━
┏━━━━━━━━━━━━━
┣━( 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢 )
┃▤ ID : @${sender.split('@')[0]}
┃▤ Nama : ${namenya}
┃▤ Premium : ${premnya}
┣━━━━━━━━━━━━━━
┣━( 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 )
┃▤ Library : Baileys-MD
┃▤ Time : ${jam} WIB
┃▤ Date : ${tanggal}
┃▤ Terdaftar : ${usernya}
┃▤ Room Chat : ${romnya}
┃▤ Total Fitur : 600+
┣━━━━━━━━━━━━━
┣━❲ 𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}menu
┃▢ ${prefix}iklan
┃▢ ${prefix}rules
┃▢ ${prefix}owner
┃▢ ${prefix}ownerinfo
┃▢ ${prefix}infoowner
┣━━━━━━━━━━━━━━
┣━❲ 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}error
┃▢ ${prefix}clearerr
┃▢ ${prefix}siaran
┃▢ ${prefix}session
┃▢ ${prefix}resetdb
┃▢ ${prefix}runtime
┃▢ ${prefix}setexif
┃▢ ${prefix}setwm
┃▢ ${prefix}setfooter
┃▢ ${prefix}setapikey
┃▢ ${prefix}setppbot
┃▢ ${prefix}addprem
┃▢ ${prefix}delprem
┃▢ ${prefix}bc
┃▢ ${prefix}bctext
┃▢ ${prefix}bcvideo
┃▢ ${prefix}bcaudio
┃▢ ${prefix}bcimage
┃▢ ${prefix}broadcast
┣━━━━━━━━━━━━━━
┣━❲ 𝙎𝙏𝙊𝙍𝙀 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}kali 1 2
┃▢ ${prefix}bagi 1 2
┃▢ ${prefix}kurang 1 2
┃▢ ${prefix}tambah 1 2
┃▢ ${prefix}dellist key
┃▢ ${prefix}addlist key@response
┃▢ ${prefix}update key@response
┃▢ ${prefix}done <reply orderan>
┃▢ ${prefix}proses <reply orderan>
┃▢ ${prefix}list <only group>
┃▢ ${prefix}shop <only group>
┣━━━━━━━━━━━━━━
┣━❲ 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}fitnah
┃▢ ${prefix}delete
┃▢ ${prefix}revoke
┃▢ ${prefix}tagall
┃▢ ${prefix}hidetag
┃▢ ${prefix}setdesc
┃▢ ${prefix}linkgrup
┃▢ ${prefix}infogroup
┃▢ ${prefix}setppgrup
┃▢ ${prefix}setnamegrup
┃▢ ${prefix}group open
┃▢ ${prefix}group close
┃▢ ${prefix}antilink on
┃▢ ${prefix}antilink off
┃▢ ${prefix}welcome on
┃▢ ${prefix}welcome off
┃▢ ${prefix}tiktokauto on
┃▢ ${prefix}tiktokauto off
┃▢ ${prefix}kick @tag
┃▢ ${prefix}demote @tag
┃▢ ${prefix}promote @tag
┣━━━━━━━━━━━━━━
┣━❲ 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}tiktok
┃▢ ${prefix}ytmp3
┃▢ ${prefix}ytmp4
┃▢ ${prefix}pinterest
┃▢ ${prefix}playmp3
┃▢ ${prefix}playmp4
┃▢ ${prefix}gitclone
┃▢ ${prefix}mediafire
┃▢ ${prefix}wikimedia
┃▢ ${prefix}soundcloud
┃▢ ${prefix}infogempa
┣━━━━━━━━━━━━━━
┣━❲ 𝙇𝙊𝙂𝙊 𝙈𝘼𝙆𝙀𝙍 ❳
┃▢ ${prefix}joker
┃▢ ${prefix}digital
┃▢ ${prefix}nulis
┃▢ ${prefix}nulis2
┃▢ ${prefix}quoteser
┃▢ ${prefix}quobucin
┃▢ ${prefix}rem
┃▢ ${prefix}girlneko
┃▢ ${prefix}sadboy
┃▢ ${prefix}kaneki
┃▢ ${prefix}lolimaker
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}buatroom 628xxx
┃▢ ${prefix}room <only owner>
┃▢ ${prefix}stopchat <only room>
┃▢ ${prefix}menfess 628xx|bot|hai
┣━━━━━━━━━━━━━━
┣━❲ 𝙋𝙍𝙄𝙈𝘽𝙊𝙉 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}ramaljodoh
┃▢ ${prefix}ramalanjodoh
┃▢ ${prefix}nomorhoki
┃▢ ${prefix}artimimpi
┃▢ ${prefix}artinama
┃▢ ${prefix}sifatusaha
┃▢ ${prefix}tafsirmimpi
┃▢ ${prefix}pasangan
┃▢ ${prefix}suamiistri
┃▢ ${prefix}ramalcinta
┃▢ ${prefix}ramalancinta
┃▢ ${prefix}ramaljodohbali
┃▢ ${prefix}ramalanjodohbali
┃▢ ${prefix}cocoknama
┃▢ ${prefix}kecocokannama
┃▢ ${prefix}cocokpasangan
┃▢ ${prefix}kecocokanpasangan
┣━━━━━━━━━━━━━━
┣━❲ 𝙍𝘼𝙉𝘿𝙊𝙈 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 ❳
┃▢ ${prefix}dadu
┃▢ ${prefix}anjing
┃▢ ${prefix}patrick
┃▢ ${prefix}bucinstick
┃▢ ${prefix}gawrgura
┃▢ ${prefix}amongus
┣━━━━━━━━━━━━━━
┣━❲ 𝙁𝙐𝙉 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}goblokcek 
┃▢ ${prefix}jelekcek 
┃▢ ${prefix}gaycek
┃▢ ${prefix}lesbicek
┃▢ ${prefix}gantengcek 
┃▢ ${prefix}cantikcek
┃▢ ${prefix}begocek 
┃▢ ${prefix}suhucek
┃▢ ${prefix}pintercek
┃▢ ${prefix}jagocek
┃▢ ${prefix}nolepcek
┃▢ ${prefix}babicek
┃▢ ${prefix}bebancek
┃▢ ${prefix}baikcek
┃▢ ${prefix}jahatcek
┃▢ ${prefix}anjingcek
┃▢ ${prefix}haramcek
┃▢ ${prefix}pakboycek
┃▢ ${prefix}pakgirlcek
┃▢ ${prefix}sangecek 
┃▢ ${prefix}bapercek
┃▢ ${prefix}fakboycek
┃▢ ${prefix}alimcek
┃▢ ${prefix}suhucek
┃▢ ${prefix}fakgirlcek
┃▢ ${prefix}kerencek
┃▢ ${prefix}wibucek
┣━━━━━━━━━━━━━━
┣━❲ 𝘼𝙉𝙄𝙈𝙀 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}cry
┃▢ ${prefix}hug
┃▢ ${prefix}pat
┃▢ ${prefix}bully
┃▢ ${prefix}lick
┃▢ ${prefix}kiss
┃▢ ${prefix}awoo
┃▢ ${prefix}waifu
┃▢ ${prefix}shinobu
┃▢ ${prefix}cuddle
┃▢ ${prefix}megumin
┃▢ ${prefix}slap
┃▢ ${prefix}neko
┃▢ ${prefix}wink
┃▢ ${prefix}dance
┃▢ ${prefix}poke
┃▢ ${prefix}glomp
┃▢ ${prefix}bite
┃▢ ${prefix}nom
┃▢ ${prefix}handhold
┃▢ ${prefix}highfive
┃▢ ${prefix}wave
┃▢ ${prefix}smug
┃▢ ${prefix}smile
┃▢ ${prefix}bonk
┣━━━━━━━━━━━━━━
┣━❲ 𝘾𝙀𝙍𝙋𝙀𝙉 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}cerpen-sejarah
┃▢ ${prefix}cerpen-sedih
┃▢ ${prefix}cerpen-sastra
┃▢ ${prefix}cerpen-romantis
┃▢ ${prefix}cerpen-rohani
┃▢ ${prefix}cerpen-rindu
┃▢ ${prefix}cerpen-remaja
┃▢ ${prefix}cerpen-ramadhan
┃▢ ${prefix}cerpen-petualangan
┃▢ ${prefix}cerpen-persahabatan
┃▢ ${prefix}cerpen-perpisahan
┃▢ ${prefix}cerpen-perjuangan
┃▢ ${prefix}cerpen-penyesalan
┃▢ ${prefix}cerpen-pengorbanan
┃▢ ${prefix}cerpen-pengalaman
┃▢ ${prefix}cerpen-pendidikan
┃▢ ${prefix}cerpen-penantian
┃▢ ${prefix}cerpen-patahhati
┃▢ ${prefix}cerpen-olahraga
┃▢ ${prefix}cerpen-nasionalisme
┃▢ ${prefix}cerpen-nasihat
┃▢ ${prefix}cerpen-motivasi
┃▢ ${prefix}cerpen-misteri
┃▢ ${prefix}cerpen-mengharukan
┃▢ ${prefix}cerpen-malaysia
┃▢ ${prefix}cerpen-liburan
┃▢ ${prefix}cerpen-kristen
┃▢ ${prefix}cerpen-korea
┃▢ ${prefix}cerpen-kisahnyata
┃▢ ${prefix}cerpen-keluarga
┃▢ ${prefix}cerpen-kehidupan
┃▢ ${prefix}cerpen-jepang
┃▢ ${prefix}cerpen-inspiratif
┃▢ ${prefix}cerpen-gokil
┃▢ ${prefix}cerpen-galau
┃▢ ${prefix}cerpen-cintasejati
┃▢ ${prefix}cerpen-cintasegitiga
┃▢ ${prefix}cerpen-cintasedih
┃▢ ${prefix}cerpen-cintaromantis
┃▢ ${prefix}cerpen-cintapertama
┃▢ ${prefix}cerpen-cintaislami
┃▢ ${prefix}cerpen-cinta
┃▢ ${prefix}cerpen-budaya
┃▢ ${prefix}cerpen-bahasasunda
┃▢ ${prefix}cerpen-bahasajawa
┃▢ ${prefix}cerpen-bahasainggris
┃▢ ${prefix}cerpen-bahasadaerah
┃▢ ${prefix}cerpen-anak
┣━━━━━━━━━━━━━━
┣━❲ 𝙏𝙀𝙓𝙏𝙋𝙍𝙊 𝙈𝙀𝙉𝙐 ❳
┃▢ ${prefix}metallic text
┃▢ ${prefix}naruto text
┃▢ ${prefix}butterfly text
┃▢ ${prefix}flaming text
┃▢ ${prefix}shadow text
┃▢ ${prefix}cup text
┃▢ ${prefix}cup1 text
┃▢ ${prefix}romance text
┃▢ ${prefix}smoke text
┃▢ ${prefix}burnpaper text
┃▢ ${prefix}lovemessage text
┃▢ ${prefix}undergrass text
┃▢ ${prefix}love text
┃▢ ${prefix}coffe text
┃▢ ${prefix}woodheart text
┃▢ ${prefix}woodenboard text
┃▢ ${prefix}summer3d text
┃▢ ${prefix}wolfmetal text
┃▢ ${prefix}nature3d text
┃▢ ${prefix}underwater text
┃▢ ${prefix}goldenrose text
┃▢ ${prefix}summernature text
┃▢ ${prefix}letterleaves text
┃▢ ${prefix}glowingneon text
┃▢ ${prefix}fallleaves text
┃▢ ${prefix}flamming text
┃▢ ${prefix}harrypotter text
┃▢ ${prefix}carvedwood text
┃▢ ${prefix}tiktok text1 text2
┃▢ ${prefix}arcade8bit text1 text2
┃▢ ${prefix}battlefield4 text1 text2
┃▢ ${prefix}pubg text1 text2
┣━━━━━━━━━━━━━━
`
}

exports.rulesBot = () =>{
return`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}