const PetType = {
    AbyssalOrphan: 'AbyssalOrphan',
    BabyMole: 'BabyMole',
    CallistoCub: 'CallistoCub',
    Hellpuppy: 'Hellpuppy',
    IkkleHydra: 'IkkleHydra',
    JalNibRek: 'JalNibRek',
    KalphitePrincess: 'KalphitePrincess',
    LilZik: 'LilZik',
    LittleNightmare: 'LittleNightmare',
    Noon: 'Noon',
    Olmlet: 'Olmlet',
    PetChaosElemental: 'PetChaosElemental',
    PetDagannothPrime: 'PetDagannothPrime',
    PetDagannothRex: 'PetDagannothRex',
    PetDagannothSupreme: 'PetDagannothSupreme',
    PetDarkCore: 'PetDarkCore',
    PetGeneralGraardor: 'PetGeneralGraardor',
    PetKrilTsutsaroth:'PetKrilTsutsaroth',
    PetKraken: 'PetKraken',
    PetKreeArra: 'PetKreeArra',
    PetSmokeDevil: 'PetSmokeDevil',
    PetSnakeling: 'PetSnakeling',
    PetZilyana: 'PetZilyana',
    PrinceBlackDragon: 'PrinceBlackDragon',
    ScorpiasOffspring: 'ScorpiasOffspring',
    Skotos: 'Skotos',
    Sraracha: 'Sraracha',
    TzrekJad: 'TzrekJad',
    VenenatisSpiderling: 'VenenatisSpiderling',
    VetionJr: 'VetionJr',
    Vorki: 'Vorki',

    BabyChinchompa: 'BabyChinchompa',
    Beaver: 'Beaver',
    GiantSquirrel: 'GiantSquirrel',
    Heron: 'Heron',
    RiftGuardian: 'RiftGuardian',
    RockGolem: 'RockGolem',
    Rocky: 'Rocky',
    Tangleroot: 'Tangleroot',

    Bloodhound: 'Bloodhound',
    ChompyChick: 'ChompyChick',
    Herbi: 'Herbi',
    LilCreator: 'LilCreator',
    PetPenanceQueen: 'PetPenanceQueen',
    Phoenix: 'Phoenix',
    TinyTempor: 'TinyTempor',
    Youngllef: 'Youngllef',
    Smolcano: 'Smolcano'
}

export const getPetDisplayText = (pet) => {
    switch(pet) {
    case PetType.AbyssalOrphan:
        return 'Abyssal Orphan'
    case PetType.BabyMole:
        return 'Baby Mole'
    case PetType.CallistoCub:
        return 'Callisto Cub'
    case PetType.Hellpuppy:
        return 'Hellpuppy'
    case PetType.IkkleHydra:
        return 'Ikkle Hydra'
    case PetType.JalNibRek:
        return 'Jal Nib Rek'
    case PetType.KalphitePrincess:
        return 'Kalphite Princess'
    case PetType.LilZik:
        return 'Lil Zik'
    case PetType.LittleNightmare:
        return 'Little Nightmare'
    case PetType.Noon:
        return 'Noon'
    case PetType.Olmlet:
        return 'Olmlet'
    case PetType.PetChaosElemental:
        return 'Pet Chaos Elemental'
    case PetType.PetDagannothPrime:
        return 'Pet Dagannoth Prime'
    case PetType.PetDagannothRex:
        return 'Pet Dagannoth Rex'
    case PetType.PetDagannothSupreme:
        return 'Pet Dagannoth Supreme'
    case PetType.PetDarkCore:
        return 'Pet Dark Core'
    case PetType.PetGeneralGraardor:
        return 'Pet General Graardor'
    case PetType.PetKrilTsutsaroth:
        return 'Pet K\'ril Tsutsaroth'
    case PetType.PetKraken:
        return 'Pet Kraken'
    case PetType.PetKreeArra:
        return 'Pet Kree\'Arra'
    case PetType.PetSmokeDevil:
        return 'Pet Smoke Devil'
    case PetType.PetSnakeling:
        return 'Pet Snakeling'
    case PetType.PetZilyana:
        return 'Pet Zilyana'
    case PetType.PrinceBlackDragon:
        return 'Prince Black Dragon'
    case PetType.ScorpiasOffspring:
        return 'Scorpias Offspring'
    case PetType.Skotos:
        return 'Skotos'
    case PetType.Sraracha:
        return 'Sraracha'
    case PetType.TzrekJad:
        return 'Tzrek Jad'
    case PetType.VenenatisSpiderling:
        return 'Venenatis Spiderling'
    case PetType.VetionJr:
        return 'Vetion Jr.'
    case PetType.Vorki:
        return 'Vorki'

    case PetType.BabyChinchompa:
        return 'Baby Chinchompa'
    case PetType.Beaver:
        return 'Beaver'
    case PetType.GiantSquirrel:
        return 'Giant Squirrel'
    case PetType.Heron:
        return 'Heron'
    case PetType.RiftGuardian:
        return 'Rift Guardian'
    case PetType.RockGolem:
        return 'Rock Golem'
    case PetType.Rocky:
        return 'Rocky'
    case PetType.Tangleroot:
        return 'Tangleroot'

    case PetType.Bloodhound:
        return 'Bloodhound'
    case PetType.ChompyChick:
        return 'Chompy Chick'
    case PetType.Herbi:
        return 'Herbi'
    case PetType.LilCreator:
        return 'Lil Creator'
    case PetType.PetPenanceQueen:
        return 'Pet Penance Queen'
    case PetType.Phoenix:
        return 'Phoenix'
    case PetType.TinyTempor:
        return 'Tiny Tempor'
    case PetType.Youngllef:
        return 'Youngllef'
    case PetType.Smolcano:
        return 'Smolcano'
    default:
        return 'Unknown Pet'
    }
}

export default PetType
