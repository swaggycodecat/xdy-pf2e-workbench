import { MODULENAME, updateHooks } from "../xdy-pf2e-workbench";
import { SettingsMenuPF2eWorkbench } from "./menu";

export class WorkbenchQolWorldSettings extends SettingsMenuPF2eWorkbench {
    static override namespace = "qolWorldSettings";

    public static override get settings(): Record<string, SettingRegistration> {
        return {
            creatureBuilder: {
                name: `${MODULENAME}.SETTINGS.creatureBuilder.name`,
                hint: `${MODULENAME}.SETTINGS.creatureBuilder.hint`,
                scope: "world",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            npcScaler: {
                name: `${MODULENAME}.SETTINGS.npcScaler.name`,
                hint: `${MODULENAME}.SETTINGS.npcScaler.hint`,
                scope: "world",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            npcRoller: {
                name: `${MODULENAME}.SETTINGS.npcRoller.name`,
                hint: `${MODULENAME}.SETTINGS.npcRoller.hint`,
                scope: "world",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            quickQuantities: {
                name: `${MODULENAME}.SETTINGS.quickQuantities.name`,
                hint: `${MODULENAME}.SETTINGS.quickQuantities.hint`,
                scope: "world",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            castPrivateSpell: {
                name: `${MODULENAME}.SETTINGS.castPrivateSpell.name`,
                hint: `${MODULENAME}.SETTINGS.castPrivateSpell.hint`,
                scope: "world",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            castPrivateSpellAlwaysForNPC: {
                name: `${MODULENAME}.SETTINGS.castPrivateSpellAlwaysForNPC.name`,
                hint: `${MODULENAME}.SETTINGS.castPrivateSpellAlwaysForNPC.hint`,
                scope: "world",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            castPrivateSpellWithPublicMessage: {
                name: `${MODULENAME}.SETTINGS.castPrivateSpellWithPublicMessage.name`,
                hint: `${MODULENAME}.SETTINGS.castPrivateSpellWithPublicMessage.hint`,
                scope: "world",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            castPrivateSpellWithPublicMessageShowTraits: {
                name: `${MODULENAME}.SETTINGS.castPrivateSpellWithPublicMessageShowTraits.name`,
                hint: `${MODULENAME}.SETTINGS.castPrivateSpellWithPublicMessageShowTraits.hint`,
                scope: "world",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            addGmRKButtonToNpc: {
                name: `${MODULENAME}.SETTINGS.addGmRKButtonToNpc.name`,
                hint: `${MODULENAME}.SETTINGS.addGmRKButtonToNpc.hint`,
                scope: "world",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            addGmRKButtonToNpcHideNpcName: {
                name: `${MODULENAME}.SETTINGS.addGmRKButtonToNpc.hideNpcName`,
                hint: `${MODULENAME}.SETTINGS.addGmRKButtonToNpc.hideNpcName`,
                scope: "world",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            addGmRKButtonToNpcHideSkill: {
                name: `${MODULENAME}.SETTINGS.addGmRKButtonToNpc.hideSkill`,
                hint: `${MODULENAME}.SETTINGS.addGmRKButtonToNpc.hideSkill`,
                scope: "world",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            tokenAnimation: {
                name: `${MODULENAME}.SETTINGS.tokenAnimation.name`,
                hint: `${MODULENAME}.SETTINGS.tokenAnimation.hint`,
                scope: "world",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            tokenAnimationSpeed: {
                name: `${MODULENAME}.SETTINGS.tokenAnimationSpeed.name`,
                hint: `${MODULENAME}.SETTINGS.tokenAnimationSpeed.hint`,
                scope: "world",
                config: true,
                default: 6,
                type: Number,
                onChange: () => updateHooks(),
                requiresReload: true,
            },
            playerFeatsPrerequisiteHint: {
                name: `${MODULENAME}.SETTINGS.playerFeatsPrerequisiteHint.name`,
                hint: `${MODULENAME}.SETTINGS.playerFeatsPrerequisiteHint.hint`,
                scope: "world",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
            },
            playerFeatsRarityColour: {
                name: `${MODULENAME}.SETTINGS.playerFeatsRarityColour.name`,
                hint: `${MODULENAME}.SETTINGS.playerFeatsRarityColour.hint`,
                scope: "world",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
            },
            playerSpellsRarityColour: {
                name: `${MODULENAME}.SETTINGS.playerSpellsRarityColour.name`,
                hint: `${MODULENAME}.SETTINGS.playerSpellsRarityColour.hint`,
                scope: "world",
                config: true,
                default: false,
                type: Boolean,
                onChange: () => updateHooks(),
            },
        };
    }
}
