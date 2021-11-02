class Achievement {
    constructor(json) {
        this.type = json.type
        this.label = json.label
    }
}

export const achievementTypes = [
    'Total1500',
    'Total2000',
    'MaxCape',
    'Base70Stats',
    'Base80Stats',
    'Base90Stats',
    'Combat126',

    'CombatAchievementsEasyMedHard',
    'CombatAchievementsElite',
    'CombatAchievementsMaster',
    'CombatAchievementsGrandmaster',

    'TransmogDarkAcorn',
    'TransmogMetamorphicDust',
    'TransmogSanguineDust',
    'Transmog6Jads',
    'TransmogBlueHeron',
    'TransmogSraracha',
    'TransmogParasiticEgg',

    'Clues600Beginner',
    'Clues500Easy',
    'Clues400Medium',
    'Clues300Hard',
    'Clues200Elite',
    'Clues100Master',

    'Skill50mExp',
    'Skill100mExp',
    'Skill200mExp',

    'CollectionLog250',
    'CollectionLog500',
    'CollectionLog1000',

    'SlayerHelmSet',
    'QuestCape',
    'AchievementCape',
    'MusicCape',
    'ChampionCape',
    'InfernalCape',
    'XericsCape',
    'SinhazaShroud'
]

export default Achievement
