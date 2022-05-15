const getId = () => Math.random().toString(16).slice(2);

const mainProductions = [
  {
    title: 'Cavaleiro da Lua',
    background:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/325DEDB55967F9E5E61CFA57F123DF630D6708D8E960BC5DDA2597C18F064D44/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim',
    overlay:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A57035FF4420AC16C9EF6CEAACC98AE7F59E9C2EC0C9177C988967FEB9A563FB/scale?width=800&aspectRatio=1.78&format=png',
    message: 'Episódio final já disponível',
    _id: getId(),
  },
  {
    title: 'Doutor Estranho da Marvel Studios',
    background:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FF1D5A9FCE9C276C8DBEB7608DB62F92E60C5CBB4875354CB02BCFB4BD68E9A4/scale?width=1440&aspectRatio=3.91&format=jpeg',
    overlay:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E633EC5885896E13E7ADFF059DFB739B4823BEFB1359F112B3A84C5EC2DFF540/scale?width=1440&aspectRatio=3.91&format=png',
    _id: getId(),
  },
  {
    title: 'Avatar',
    background:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/05AFFAD3B500C2F53CD56A3BEB0B2A3B3702591B68DBC67087CACAAC4D235E08/scale?width=1440&aspectRatio=3.91&format=jpeg',
    overlay:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/39826FB657B5A53D37BC2CA31938E6CEFA15D6F25DCF95E82CA0E295AD55EFA8/scale?width=1440&aspectRatio=3.91&format=png',
    _id: getId(),
  },
  {
    title: 'Monstros no Trabalho',
    background:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DA6BA4CACAB7A03B3122F317C9E2B009728B6442F0B61BAF65F7C5FE1F1EC1DE/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391',
    overlay:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B2ED6BEB0DD6E2EF8E663F59F4865E27B7DECF80FCC0F558094A71939B701C97/scale?width=1440&aspectRatio=3.91&format=png',
    _id: getId(),
  },
  {
    title: 'A Família Radical: Maior e Melhor',
    background:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AE4C45BF23C675E219920FB00718E8D4D47D1A97D6E81800026899205E979FD9/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim',
    overlay:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B065AC50A0288F67374176670544168AEE09BE1B42417355F6992C3B0CE41A03/scale?width=800&aspectRatio=1.78&format=png',
    message: 'Todos os episódios já disponíveis',
    _id: getId(),
  },
  {
    title: 'WandaVision',
    background:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B346B383A7F5970A88DCB0A4FD5EAEAC7C107B6340814808DD3FC9D9524A8AAD/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391',
    overlay:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A10B77075018834B3BC93B8FDD1DB06DEC996CFA02696AF1F4196FFA08E2A575/scale?width=1440&aspectRatio=3.91&format=png',
    _id: getId(),
  },
  {
    title: 'Segredos em Sulphur Springs',
    background:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/58D5E66E9DDCB067E37EAE9EBBFFE90F81767C7C0A8AEA4A3CA3BD1E44107679/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim',
    overlay:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E3DB3B210C647DB5A560815AB17320832429E8CC2A2CD62B7A70B9DD55753618/scale?width=800&aspectRatio=1.78&format=png',
    message: 'Temporada 2 já disponível',
    _id: getId(),
  },
  {
    title: 'Opa Popa Dupa',
    background:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A47C2DE4BE17A45F642A8DD92A0AA351B7172C363BA90DF3A205CBDCACE861BE/compose?width=1440&aspectRatio=3.91&format=jpeg&label=391_scrim',
    overlay:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E35CB7F22A848693923DB5D91D92D96E0DDE96EF197C9D734A2669D83B0CC1E8/scale?width=800&aspectRatio=1.78&format=png',
    message: 'Temporada 3 já disponível',
    _id: getId(),
  },
  {
    title: 'Do Esboço à Realidade',
    background:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/32B41D9213B19F6D7FD657A264EF1AAECA6AA4E25A5D789DA1AAD2C6B0FE80AB/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391',
    overlay:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7258708B11604B7320998941F8FEB230F6043E19E68CFAC82123DA716640BD0A/scale?width=1440&aspectRatio=3.91&format=png',
    _id: getId(),
  },
  {
    title: 'LENDAS da Marvel',
    background:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5649455C901BAF2E57BB3453A8FA55EFB27EFD4267558F24A0785532116FEFD4/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim',
    overlay:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7D9B8341CB66299E5D5583E99E071EAF9BE14DB6A1246B31DFF4288EFFC29B2E/scale?width=800&aspectRatio=1.78&format=png',
    message: 'Novos episódios já disponíveis',
    _id: getId(),
  },
  {
    title: 'Anos Incríveis',
    background:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/271776D078A31DDC12B69AB4B96D3A4B42D71681F8FC0885AE069776439592A0/scale?width=1440&aspectRatio=3.91&format=jpeg',
    overlay:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8B9EC0223F621A61A8C0D87625D0C2613FE6A96BC74B136F062A1D2DE098FDF3/scale?width=1440&aspectRatio=3.91&format=png',
    _id: getId(),
  },
  {
    title: 'A Ursa Polar',
    background:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EF4714AC6124DF3EA5019CECD46297248CE5DA91CE816E18FD6B84FB1D27A539/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391',
    overlay:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D2DE279E65560B42397775C1A8329E5A20E3DB92217D8E3516CE4C778CFB4F55/scale?width=1440&aspectRatio=3.91&format=png',
    _id: getId(),
  },
  {
    title: 'A Era do Gelo: Histórias do Scrat',
    background:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1FFE9FE73EC4B8F8A3FB8C2B4A7DE2E14A257FD354A95C91CD641B0F5C0FE46F/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim',
    overlay:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/41E73EEE06A34D50CF49A42FE42EDB6CBB48EF788F66D5ABAD16296B4F12D889/scale?width=800&aspectRatio=1.78&format=png',
    message: 'Todos os episódios já disponíveis',
    _id: getId(),
  },
  {
    title: 'Explorer The Last Tepui',
    background:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/128BBA8402C7DE68F38E3EBBCBFA5D3AF34EA8CE8263D27AE34736A9939963FB/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391',
    overlay:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/67514805A1EAC21FED3D7F11C10E18E3BF43B7288107CC3241CBE1C99F35A7B3/scale?width=1440&aspectRatio=3.91&format=png',
    _id: getId(),
  },
  {
    title: 'Red - Crescer é uma Fera',
    background:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8CB8167FF9FF8FBC663692415B53BD7FA4CC3A6C07668AD7C5A6B8E4472EE340/compose?width=1440&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391',
    overlay:
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/61129CEF5D182EB0A3EC9AB004904DB9F7DA3B68145EB71A12637C0BA16D0BB4/scale?width=1440&aspectRatio=3.91&format=png',
    _id: getId(),
  },
];

export default mainProductions;
