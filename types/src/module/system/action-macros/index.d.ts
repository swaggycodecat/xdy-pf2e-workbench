import * as balance from "./acrobatics/balance.ts";
import * as maneuverInFlight from "./acrobatics/maneuver-in-flight.ts";
import * as squeeze from "./acrobatics/squeeze.ts";
import * as tumbleThrough from "./acrobatics/tumble-through.ts";
import { arcaneSlam } from "./ancestry/automaton/arcane-slam.ts";
import { climb } from "./athletics/climb.ts";
import { disarm } from "./athletics/disarm.ts";
import { forceOpen } from "./athletics/force-open.ts";
import { grapple } from "./athletics/grapple.ts";
import { highJump } from "./athletics/high-jump.ts";
import { longJump } from "./athletics/long-jump.ts";
import * as reposition from "./athletics/reposition.ts";
import { shove } from "./athletics/shove.ts";
import { swim } from "./athletics/swim.ts";
import * as trip from "./athletics/trip.ts";
import { whirlingThrow } from "./athletics/whirling-throw.ts";
import * as escape from "./basic/escape.ts";
import * as seek from "./basic/seek.ts";
import * as senseMotive from "./basic/sense-motive.ts";
import { tamper } from "./class/inventor/tamper.ts";
import { craft, repair } from "./crafting/index.ts";
import { createADiversion } from "./deception/create-a-diversion.ts";
import { feint } from "./deception/feint.ts";
import { impersonate } from "./deception/impersonate.ts";
import { lie } from "./deception/lie.ts";
import { bonMot } from "./diplomacy/bon-mot.ts";
import { gatherInformation } from "./diplomacy/gather-information.ts";
import { makeAnImpression } from "./diplomacy/make-an-impression.ts";
import { request } from "./diplomacy/request.ts";
import * as avoidNotice from "./exploration/avoid-notice.ts";
import * as senseDirection from "./exploration/sense-direction.ts";
import * as track from "./exploration/track.ts";
import * as decipherWriting from "./general/decipher-writing.ts";
import * as subsist from "./general/subsist.ts";
import * as coerce from "./intimidation/coerce.ts";
import * as demoralize from "./intimidation/demoralize.ts";
import * as administerFirstAid from "./medicine/administer-first-aid.ts";
import * as treatDisease from "./medicine/treat-disease.ts";
import * as treatPoison from "./medicine/treat-poison.ts";
import * as commandAnAnimal from "./nature/command-an-animal.ts";
import { perform } from "./performance/perform.ts";
import * as createForgery from "./society/create-forgery.ts";
import * as concealAnObject from "./stealth/conceal-an-object.ts";
import * as hide from "./stealth/hide.ts";
import * as sneak from "./stealth/sneak.ts";
import * as palmAnObject from "./thievery/palm-an-object.ts";
import * as disableDevice from "./thievery/disable-device.ts";
import * as pickALock from "./thievery/pick-a-lock.ts";
import * as steal from "./thievery/steal.ts";
import { Action } from "@actor/actions/index.ts";
export { ActionMacroHelpers } from "./helpers.ts";
export type { ActionDefaultOptions, SkillActionOptions } from "./types.ts";
export declare const ActionMacros: {
    escape: typeof escape.legacy;
    seek: typeof seek.legacy;
    senseMotive: typeof senseMotive.legacy;
    arcaneSlam: typeof arcaneSlam;
    tamper: typeof tamper;
    avoidNotice: typeof avoidNotice.legacy;
    senseDirection: typeof senseDirection.legacy;
    track: typeof track.legacy;
    balance: typeof balance.legacy;
    maneuverInFlight: typeof maneuverInFlight.legacy;
    squeeze: typeof squeeze.legacy;
    tumbleThrough: typeof tumbleThrough.legacy;
    climb: typeof climb;
    disarm: typeof disarm;
    forceOpen: typeof forceOpen;
    grapple: typeof grapple;
    highJump: typeof highJump;
    longJump: typeof longJump;
    reposition: typeof reposition.legacy;
    shove: typeof shove;
    swim: typeof swim;
    trip: typeof trip.legacy;
    whirlingThrow: typeof whirlingThrow;
    craft: typeof craft;
    repair: typeof repair;
    createADiversion: typeof createADiversion;
    feint: typeof feint;
    impersonate: typeof impersonate;
    lie: typeof lie;
    bonMot: typeof bonMot;
    gatherInformation: typeof gatherInformation;
    makeAnImpression: typeof makeAnImpression;
    request: typeof request;
    decipherWriting: typeof decipherWriting.legacy;
    subsist: typeof subsist.legacy;
    coerce: typeof coerce.legacy;
    demoralize: typeof demoralize.legacy;
    administerFirstAid: typeof administerFirstAid.legacy;
    treatDisease: typeof treatDisease.legacy;
    treatPoison: typeof treatPoison.legacy;
    commandAnAnimal: typeof commandAnAnimal.legacy;
    perform: typeof perform;
    createForgery: typeof createForgery.legacy;
    concealAnObject: typeof concealAnObject.legacy;
    hide: typeof hide.legacy;
    sneak: typeof sneak.legacy;
    palmAnObject: typeof palmAnObject.legacy;
    disableDevice: typeof disableDevice.legacy;
    pickALock: typeof pickALock.legacy;
    steal: typeof steal.legacy;
};
export declare const SystemActions: Action[];
