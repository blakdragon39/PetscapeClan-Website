const AchievementType = {
    Total1500: 'Total1500',
    Total2000: 'Total2000',
    MaxCape: 'MaxCape',
    Base70Stats: 'Base70Stats',
    Base80Stats: 'Base80Stats',
    Base90Stats: 'Base90Stats',
    Combat126: 'Combat126',

    TransmogDarkAcorn: 'TransmogDarkAcorn',
    TransmogMetamorphicDust: 'TransmogMetamorphicDust',
    TransmogSanguineDust: 'TransmogSanguineDust',
    Transmog6Jads: 'Transmog6Jads',
    TransmogBlueHeron: 'TransmogBlueHeron',
    TransmogSraracha: 'TransmogSraracha',
    TransmogParasiticEgg: 'TransmogParasiticEgg',

    Clues600Beginner: 'Clues600Beginner',
    Clues500Easy: 'Clues500Easy',
    Clues400Medium: 'Clues400Medium',
    Clues300Hard: 'Clues300Hard',
    Clues200Elite: 'Clues200Elite',
    Clues100Master: 'Clues100Master',

    Skill50mExp: 'Skill50mExp',
    Skill100mExp: 'Skill100mExp',
    Skill200mExp: 'Skill200mExp',

    CollectionLog250: 'CollectionLog250',
    CollectionLog500: 'CollectionLog500',
    CollectionLog1000: 'CollectionLog1000',

    SlayerHelmSet: 'SlayerHelmSet',
    QuestCape: 'QuestCape',
    AchievementCape: 'AchievementCape',
    MusicCape: 'MusicCape',
    ChampionCape: 'ChampionCape',
    InfernalCape: 'InfernalCape',
    XericsCape: 'XericsCape',
    SinhazaShroud: 'SinhazaShroud'
}

export const getAchievementDisplayText = (achievement) => {
    switch (achievement) {
    case AchievementType.Total1500:
        return '1500 Total Level'
    case AchievementType.Total2000:
        return '2000 Total Level'
    case AchievementType.MaxCape:
        return 'Max Cape'
    case AchievementType.Base70Stats:
        return 'Base 70 Stats'
    case AchievementType.Base80Stats:
        return 'Base 80 Stats'
    case AchievementType.Base90Stats:
        return 'Base 90 Stats'
    case AchievementType.Combat126:
        return '126 Combat'

    case AchievementType.TransmogDarkAcorn:
        return 'Dark Acorn Squirrel Transmog'
    case AchievementType.TransmogMetamorphicDust:
        return 'Metamorphic Dust Olmlet Transmog'
    case AchievementType.TransmogSanguineDust:
        return 'Sanguine Dust Verzik Trasmog'
    case AchievementType.Transmog6Jads:
        return 'TzHaar-Ket-Rak\'s Challenges Jad Transmog'
    case AchievementType.TransmogBlueHeron:
        return 'Blue Heron Transmog'
    case AchievementType.TransmogSraracha:
        return 'Sraracha Transmogs'
    case AchievementType.TransmogParasiticEgg:
        return 'Phosani\'s Nightmare Transmog'

    case AchievementType.Clues600Beginner:
        return '600 Beginner Clues'
    case AchievementType.Clues500Easy:
        return '500 Easy Clues'
    case AchievementType.Clues400Medium:
        return '400 Medium Clues'
    case AchievementType.Clues300Hard:
        return '300 Hard Clues'
    case AchievementType.Clues200Elite:
        return '200 Elite Clues'
    case AchievementType.Clues100Master:
        return '100 Master Clues'

    case AchievementType.Skill50mExp:
        return '50m Exp in a Skill'
    case AchievementType.Skill100mExp:
        return '100m Exp in a Skill'
    case AchievementType.Skill200mExp:
        return '200m Exp in a Skill'

    case AchievementType.CollectionLog250:
        return '250 Collection Log Slots'
    case AchievementType.CollectionLog500:
        return '500 Collection Log Slots'
    case AchievementType.CollectionLog1000:
        return '1000 Collection Log Slots'

    case AchievementType.SlayerHelmSet:
        return 'Slayer Helmet Set'
    case AchievementType.QuestCape:
        return 'Quest Cape'
    case AchievementType.AchievementCape:
        return 'Achievement Cape'
    case AchievementType.MusicCape:
        return 'Music Cape'
    case AchievementType.ChampionCape:
        return 'Champion\'s Cape'
    case AchievementType.InfernalCape:
        return 'Infernal Cape'
    case AchievementType.XericsCape:
        return 'Xerics Cape'
    case AchievementType.SinhazaShroud:
        return 'Sinhaza Shroud'
    default:
        return 'Unknown Achievement'
    }
}

export default AchievementType
